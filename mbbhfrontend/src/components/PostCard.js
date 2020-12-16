import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns'

const PostCard = props => {
  const showLink = `/dashboard/show/${props.postObj.id}`
  const editLink = `/dashboard/edit/${props.postObj.id}`



  
    return(
        <CardColumns>
            <Card className='postcardstyle' style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title>{String(props.postObj.date)}</Card.Title>
                        <Card.Text> Rating: {props.postObj.number}<br></br> </Card.Text>    
                    <Link to={showLink}><Button variant='btn btn-warning'>View</Button></Link>
                </Card.Body>
            </Card>
        </CardColumns>
    )
}

export default PostCard

