// import React, { Component } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import { connect } from 'react-redux'
// import { newPost } from '../actions/posts'
// import { currentUser } from '../actions/auth'
// import { Link } from 'react-router-dom'




// class NewPost extends Component {
//     state = {
//     date: '',
//     number: '',
//     meds_taken: true,
//     suicidal_thoughts: false,
//     good_thoughts: '',
//     bad_thoughts: '',
//     goals: '',
//     notes: '',
//     happy_memory: '',
//     user_id: ''
//     }



//    componentDidMount(){
//       const token = localStorage.getItem('myAppToken')
//       if(!token) {
//           this.props.history.push('/login')
//       } else {
//           const reqObj = {
//               method: 'GET',
//               headers: {
//                   'Authorization': `Bearer ${token}`
//               }
//           }
//           fetch('http://localhost:3000/api/v1/current_user', reqObj)
//           .then(resp => resp.json())
//           .then(data => { 
//               if (data.error){
//                   this.props.history.push('/login')
//               } else {
//                   this.props.currentUser(data)
//                   this.setState({
//                     user_id: data.id
//                   })
                

//               }
//           })
//       }}
    
    
//     addPost = (e) => {
//     e.preventDefault()
//     const reqObj = {
//     method: 'POST',
//     headers: {
//         'Content-Type' : 'application/json'
//     },
//       body: JSON.stringify(this.state)
//     }
//     fetch('http://localhost:3000/posts', reqObj)
//     .then(resp => resp.json())
//     .then(post => {
//       this.props.history.push('/dashboard')
//       this.props.newPost(post)
      
//     })
//     }
  

//   handleChange = (e) => {
//     this.setState({ 
//       [e.target.name]: e.target.value
//     })
//   }
//   render() {
//     return (
//       <Form onSubmit={this.addPost}  style={{width:'50%'}} className="mx-auto">
//         <Form.Group controlId="exampleForm.ControlTextarea7">
//             <Form.Label>Date</Form.Label>
//             <Form.Control onChange={this.handleChange} placeholder='DD/MM/YYYY' name='date' value={this.state.date} as="textarea" rows={1} />
//           </Form.Group>
//       <Form.Group controlId="exampleForm.ControlSelect1">
//     <Form.Label>How Was Your Day?</Form.Label>
//     <Form.Control onChange={this.handleChange} name='number' value={this.state.number} as="select">
//       <option>1</option>
//       <option>2</option>
//       <option>3</option>
//       <option>4</option>
//       <option>5</option>
//       <option>6</option>
//       <option>7</option>
//       <option>8</option>
//       <option>9</option>
//       <option>10</option>
//     </Form.Control>
//     <Form.Label>Did You Take Your Meds?</Form.Label>
//     <Form.Control onChange={this.handleChange} name='meds_taken' value={this.state.meds_taken} as="select">
//       <option>True</option>
//       <option>False</option>
//     </Form.Control>
//     <Form.Label>Did You Have Thoughts of Suicide?</Form.Label>
//     <Form.Control onChange={this.handleChange} name='suicidal_thoughts' value={this.state.suicidal_thoughts} as="select">
//       <option>False</option>
//       <option>True</option>
//     </Form.Control>
//   </Form.Group>
//   <Form.Group controlId="exampleForm.ControlTextarea1">
//     <Form.Label>Good Thoughts</Form.Label>
//     <Form.Control onChange={this.handleChange} name='good_thoughts' value={this.state.good_thoughts} as="textarea" rows={3} />
//   </Form.Group>
//   <Form.Group controlId="exampleForm.ControlTextarea2">
//     <Form.Label>Bad Thoughts</Form.Label>
//     <Form.Control onChange={this.handleChange} name='bad_thoughts' value={this.state.bad_thoughts} as="textarea" rows={3} />
//   </Form.Group>
//   <Form.Group controlId="exampleForm.ControlTextarea3">
//     <Form.Label>Goals</Form.Label>
//     <Form.Control onChange={this.handleChange} name='goals' value={this.state.goals} as="textarea" rows={3} />
//   </Form.Group>
//   <Form.Group controlId="exampleForm.ControlTextarea4">
//     <Form.Label>Notes</Form.Label>
//     <Form.Control onChange={this.handleChange} name='notes' value={this.state.notes} as="textarea" rows={3} />
//   </Form.Group>
//   <Form.Group controlId="exampleForm.ControlTextarea5">
//     <Form.Label>Happy Memory</Form.Label>
//     <Form.Control onChange={this.handleChange} name='happy_memory' value={this.state.happy_memory} as="textarea" rows={3}/>
//   </Form.Group>
//   <Button type='submit' variant="primary">Submit</Button>{' '}
//   <Link to='/dashboard'><Button variant="primary">Exit</Button></Link>
// </Form>
//     )
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//   posts: state.posts,
//   auth: state.auth
//   }
// }


// const mapDispatchToProps = {
//   newPost,
//   currentUser
// }


// export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
