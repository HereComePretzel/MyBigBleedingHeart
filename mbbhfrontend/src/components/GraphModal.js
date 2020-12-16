import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import { connect } from 'react-redux'
import { newPost } from '../actions/posts'
import { currentUser } from '../actions/auth'
import Graph from './Graph'


class GraphModal extends React.Component {
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
      className = 'graphmodal'
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Graph
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
        <p>
          <Graph />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='happymemoryclosebtn' onClick={this.handleClick}>Close</Button>
      </Modal.Footer>
    </Modal>
        <Button onClick={this.handleClick}>Graphstuffmodal</Button>
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
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(GraphModal)
  