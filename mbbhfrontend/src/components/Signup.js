import React from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { newUser } from '../actions/users'
import { currentUser } from '../actions/auth'
import { loginSuccess } from '../actions/auth'
import NavHeader from './NavHeader'


class Signup extends React.Component{
  state = {
    username: '',
    password: '',
    email: ''
  }

  addUser = (e) => {
    e.preventDefault()
    const reqObj = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({user: this.state})
    }
    fetch('http://localhost:3000/users', reqObj)
    .then(resp => resp.json())
    .then(user => {
            const reqObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }
            fetch('http://localhost:3000/api/v1/auth', reqObj)
            .then(resp => resp.json())
            .then(user => {
                if(user.error){
                    this.setState({
                        error: user.error
                    })
                } else {
                    localStorage.setItem('myAppToken', user.token)
                    this.props.loginSuccess(user)
                    this.props.history.push('/dashboard')
                }
            })
    })
}
  

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }




  render(){
    return (
      <div>
        <NavHeader />
            <div className="signup">
                <Form onSubmit={this.addUser} style={{width:'50%'}} className="mx-auto">
                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="input" name='username' onChange={this.handleChange} value={this.state.username}/>
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' onChange={this.handleChange} value={this.state.password}/>
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Verify Password</Form.Label>
                    <Form.Control type="password" name='password' onChange={this.handleChange} value={this.state.password}/>
                  </Form.Group>
  
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' onChange={this.handleChange} value={this.state.email}/>
                  </Form.Group>

                  <Button type="submit" >Join!</Button>
                </Form>
                <h1 className='logintagline'>Because you are worthy.</h1>
            </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    notes: state.notes,
    posts: state.posts
  }
}

const mapDispatchToProps = {
  newUser,
  currentUser,
  loginSuccess,
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
