import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import { connect } from 'react-redux'
import { newPost } from '../actions/posts'
import { currentUser } from '../actions/auth'


class HMModal extends React.Component {
  constructor() {
    super()
    this.state={
      show:false,
          date: '',
    number: '',
    meds_taken: true,
    suicidal_thoughts: false,
    good_thoughts: '',
    bad_thoughts: '',
    goals: '',
    notes: '',
    happy_memory: '',
    user_id: ''
    }
  }

  componentDidMount(){
    const token = localStorage.getItem('myAppToken')
    if(!token) {
        this.props.history.push('/login')
    } else {
        const reqObj = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        fetch('http://localhost:3000/api/v1/current_user', reqObj)
        .then(resp => resp.json())
        .then(data => { 
            if (data.error){
                this.props.history.push('/login')
            } else {
                this.props.currentUser(data)
                this.setState({
                  user_id: data.id
                })
              

            }
        })
    }}
  

    renderHappyMemory = () => {
        const hmPost = this.props.posts.map(postObj => postObj.happy_memory)
        const hmSinglePost = hmPost[Math.floor(Math.random() * hmPost.length)]
            return hmSinglePost
    }
   


    handleClick = (e) =>{
      this.setState({
        show: !this.state.show
      })
    }


  render() {
    return (
      <div >
                  
        <Modal show={this.state.show}
    //   {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Remember?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
        <p>
          {this.renderHappyMemory()}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='happymemoryclosebtn' onClick={this.handleClick}>Close</Button>
      </Modal.Footer>
    </Modal>
        <Button className='addpostbutton' onClick={this.handleClick}>It ain't all bad...</Button>
      </div>
    )}
}


  const mapStateToProps = (state) => {
    return {
    posts: state.posts,
    auth: state.auth
    }
  }
  
  
  const mapDispatchToProps = {
    newPost,
    currentUser
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(HMModal)
  