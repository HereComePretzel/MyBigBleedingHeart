// import React from 'react'
// import {Button, Modal} from 'react-bootstrap'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import Form from 'react-bootstrap/Form'
// import { editPost } from '../actions/posts'
// import { currentUser } from '../actions/auth'


// class EditModal extends React.Component {
//     state = {
//         show: false,
//         date: '',
//         number: '',
//         meds_taken: false,
//         suicidal_thoughts: false,
//         good_thoughts: '',
//         bad_thoughts: '',
//         goals: '',
//         notes: '',
//         happy_memory: ''
//     }
    
//     componentDidMount(){
//         const { date, number, meds_taken, suicidal_thoughts, good_thoughts, bad_thoughts, goals, notes, happy_memory } = this.props.posts[0]
//         this.setState({
//           date,
//           number,
//           meds_taken,
//           suicidal_thoughts,
//           good_thoughts,
//           bad_thoughts,
//           goals,
//           notes,
//           happy_memory
//         })
//       }
    
   
//     editPost = (e) => {
//         e.preventDefault()
    
//         const reqObj = {
//           method: 'PATCH',
//           headers: {
//             'Content-Type' : 'application/json'
//           },
//           body: JSON.stringify(this.state)
//         }
        
//           fetch(`http://localhost:3000/posts/${this.props.posts[0].id}`, reqObj)
//           .then(resp => resp.json())
//           .then(post => {
//             this.props.editPostItem(post)
//             this.props.history.push('/dashboard')
//           })
//         }

//     handleClick = (e) =>{
//       this.setState({
//         show: !this.state.show
//       })
//     }

//     handleChange = (e) => {
//       this.setState({ 
//         [e.target.name]: e.target.value
//       })
//     }


//   render() {
//     return (
//       <div >
        
//         <Modal show={this.state.show} >
//           <Form onSubmit={this.editPost}  className="mx-auto">

//             <Form.Group controlId="exampleForm.ControlTextarea7">
//               <Form.Label>Date</Form.Label>
//               <Form.Control onChange={this.handleChange} placeholder='DD/MM/YYYY' name='date' value={this.state.date} as="textarea" rows={1} />
//             </Form.Group>

//             <Form.Group controlId="exampleForm.ControlSelect1">
//               <Form.Label>How Was Your Day?</Form.Label>
//               <Form.Control onChange={this.handleChange} name='number' value={this.state.number} as="select">
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//                 <option>6</option>
//                 <option>7</option>
//                 <option>8</option>
//                 <option>9</option>
//                 <option>10</option>
//               </Form.Control>

//               <Form.Label>Did You Take Your Meds?</Form.Label>
//               <Form.Control onChange={this.handleChange} name='meds_taken' value={this.state.meds_taken} as="select">
//                 <option>True</option>
//                 <option>False</option>
//               </Form.Control>

//               <Form.Label>Did You Have Thoughts of Suicide?</Form.Label>
//               <Form.Control onChange={this.handleChange} name='suicidal_thoughts' value={this.state.suicidal_thoughts} as="select">
//                   <option>False</option>
//                   <option>True</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="exampleForm.ControlTextarea1">
//               <Form.Label>Good Thoughts:</Form.Label>
//               <Form.Control onChange={this.handleChange} name='good_thoughts' value={this.state.good_thoughts} as="textarea" rows={3} />
//             </Form.Group>

//             <Form.Group controlId="exampleForm.ControlTextarea2">
//               <Form.Label>Bad Thoughts:</Form.Label>
//               <Form.Control onChange={this.handleChange} name='bad_thoughts' value={this.state.bad_thoughts} as="textarea" rows={3} />
//             </Form.Group>

//             <Form.Group controlId="exampleForm.ControlTextarea3">
//               <Form.Label>Goals:</Form.Label>
//               <Form.Control onChange={this.handleChange} name='goals' value={this.state.goals} as="textarea" rows={3} />
//             </Form.Group>

//             <Form.Group controlId="exampleForm.ControlTextarea4">
//               <Form.Label>Notes:</Form.Label>
//               <Form.Control onChange={this.handleChange} name='notes' value={this.state.notes} as="textarea" rows={3} />
//             </Form.Group>

//             <Form.Group controlId="exampleForm.ControlTextarea5">
//               <Form.Label>Happy Memory:</Form.Label>
//               <Form.Control onChange={this.handleChange} name='happy_memory' value={this.state.happy_memory} as="textarea" rows={3}/>
//             </Form.Group>

//             <Button type='submit' onClick={this.handleClick} className='btn btn-warning' variant="primary">Submit</Button>{' '}
//             <Link to='/dashboard'><Button onClick={this.handleClick} variant="primary" className='btn btn-warning'>Exit</Button></Link>
//           </Form>
   
//         </Modal>
//         <Button className='editpostbutton' onClick={this.handleClick}>Add Post</Button>
//       </div>
//     )}
//   }

//   const mapStateToProps = (state) => {
//     return {
//     posts: state.posts,
//     auth: state.auth
//     }
//   }
  
  
//   const mapDispatchToProps = {
//     editPost,
//     currentUser
//   }
  
  
//   export default connect(mapStateToProps, mapDispatchToProps)(EditModal)
  