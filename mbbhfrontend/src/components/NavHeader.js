import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutSuccess } from '../actions/auth'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'



class NavHeader extends React.Component{

  handleLogout = () => {
    localStorage.removeItem('myAppToken')
    this.props.logoutSuccess()
  }

  render() {
    return (

      <Navbar collapseOnSelect className='nav' expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container textAlign="center">
          <Nav className='navcontrols'>
          {
            this.props.auth.id
            ?
            <Link to='/dashboard/profile' id="profilebtn" className="btn btn-warning" >Profile</Link>
            :
            <Link></Link>
          }    
            
          
          <Link className='navbar-brand-me' to='/dashboard'>MyBigBleedingHeart</Link>

          {
            this.props.auth.id
            ?
            <Link to='/login' id="logoutbtn" className="btn btn-warning" onClick={this.handleLogout}>Logout</Link>
            :
            <Link></Link>
          }  
            
          </Nav>  
          </Container>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        posts: state.posts
    }
}

const mapDispatchToProps = {
    logoutSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader)
    
 
