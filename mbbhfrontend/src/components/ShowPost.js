import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showPost } from '../actions/posts'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import NavHeader from './NavHeader'


class ShowPost extends React.Component {

  componentDidMount(){
    this.props.showPost(this.props.match.params.id)
  }

  render(){
    const editLink = `/dashboard/edit/${this.props.posts[0].id}`
      return(
          <div>
            <NavHeader />
              <Card className='postcardstyleshow' style={{ width: '100%' }}>

                <Card.Body>
                  <Card.Title className='postcardstyleshowtitle' style={{fontSize:'80px'}}>  {this.props.posts[0].date}</Card.Title>
                    <Card.Text>
      <br></br>
                      <h2>Rating:</h2>
                      <h3>{this.props.posts[0].number}</h3><br></br>

                      <h2>Good thoughts:</h2>
                      <h3>{this.props.posts[0].good_thoughts}</h3><br></br>

                      <h2>Bad thoughts:</h2>
                      <h3>{this.props.posts[0].bad_thoughts}</h3><br></br>

                      <h2>Suicidal thoughts:</h2>
                      <h3>{String(this.props.posts[0].suicidal_thoughts)}</h3><br></br>

                      <h2>Meds taken:</h2>
                      <h3>{String(this.props.posts[0].meds_taken)}</h3><br></br>

                      <h2>Goals:</h2>
                      <h3>{this.props.posts[0].goals}</h3><br></br>

                      <h2>Notes:</h2>
                      <h3>{this.props.posts[0].notes}</h3><br></br>

                      <h2>Happy Memory:</h2>
                      <h3>{this.props.posts[0].happy_memory}</h3><br></br>
                    </Card.Text>
                    <Link to={editLink}><Button className='updateprofilebutton' variant="primary">Edit</Button></Link>
                </Card.Body>
              </Card>
            </div>
    )
  }
}


  const mapStateToProps = (state) => {
    return {
    posts: state.posts,
    auth: state.auth
    }
}

const mapDispatchToProps = {
    showPost
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost)