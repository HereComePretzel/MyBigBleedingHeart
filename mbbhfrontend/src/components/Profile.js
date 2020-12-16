import React from 'react'
import NavHeader from './NavHeader'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { editUser } from '../actions/users'
import { currentUser } from '../actions/auth'

class Profile extends React.Component{
  state = {
    username: '',
    password: '',
    email: '',
    name: '',
    birthday: '',
    age: null,
    gender: '',
    sexual_orientation: '',
    zipcode: null
  }

  editProfile = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch(`http://localhost:3000/users/${this.props.posts[0].user_id}`, reqObj)
    .then(resp => resp.json())
    .then(user => {
      this.props.editUser(user)
      this.props.history.push('/dashboard')
    })
  }

  componentDidMount() {
    const { username, password, email, name, birthday, age, gender, sexual_orientation, zipcode } = this.props.posts[0].user
    this.setState({
      username,
      password,
      email,
      name,
      birthday,
      age,
      gender,
      sexual_orientation,
      zipcode
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
            <Form onSubmit={this.editProfile} className='profile'>
            
            <Form.Group controlId="username">
              <Form.Label>* Username</Form.Label>
                <Form.Control type="username" name="username" value={this.state.username} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>* Password</Form.Label>
                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>* Email</Form.Label>
                <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
            </Form.Group>
  
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
                <Form.Control type="name" name="name" value={this.state.name} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group controlId="Birthday">
              <Form.Label>Birthday</Form.Label>
                <Form.Control type="birthday" name="birthday" value={this.state.birthday} onChange={this.handleChange}/>
            </Form.Group>
  
            <Form.Group controlId="Age">
              <Form.Label>Age</Form.Label>
                <Form.Control type="age" name="age" value={this.state.age} onChange={this.handleChange}/>
            </Form.Group>
            
            <Form.Group controlId="Gender ID">
              <Form.Label>Gender ID</Form.Label>
                <Form.Control type="gender" placeholder="M/F/Non-binary" name="gender" value={this.state.gender} onChange={this.handleChange}/>
            </Form.Group>
            
            <Form.Group controlId="Sexual Orientation">
              <Form.Label>Sexual Orientation</Form.Label>
                <Form.Control type="sexual_orientation" placeholder="gay, straight, pan..." name="sexual_orientation"   value={this.state.sexual_orientation} onChange={this.handleChange}/>
            </Form.Group>
            
            <Form.Group controlId="Zipcode">
              <Form.Label>Zipcode</Form.Label>
                <Form.Control type="zipcode" placeholder="ex. 11111" name="zipcode" value={this.state.zipcode} onChange={this.handleChange}/>
            </Form.Group>
            
            <Button className='updateprofilebutton' type='submit'>Update</Button>
            </Form>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
  posts: state.posts,
  auth: state.auth,
  user: state.user
  }
}

const mapDispatchToProps = {
  editUser,
  currentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)