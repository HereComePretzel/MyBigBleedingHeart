import React, { useState } from 'react'
import {Button, Modal} from 'react-bootstrap'
import { connect } from 'react-redux'
import { newPost } from '../actions/posts'
import { currentUser } from '../actions/auth'


function HMModal2 (props) {
    const[show, setShow] = useState({
        show: false
    })
    
    const renderHappyMemory = () => {
        const hmPost = props.posts.map(postObj => postObj.happy_memory)
        const hmSinglePost = hmPost[Math.floor(Math.random() * hmPost.length)]
            return hmSinglePost
    }
   


    const handleClick = (e) =>{
      setShow({
        show: !show
      })
    }



    return (
      <div >
                  
        <Modal show={show}
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
          {renderHappyMemory()}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='happymemoryclosebtn' onClick={handleClick}>Close</Button>
      </Modal.Footer>
    </Modal>
        <Button className='addpostbutton' onClick={handleClick}>It ain't all bad...</Button>
      </div>
    )
}

  
  
  export default HMModal2
  