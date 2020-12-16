import React from 'react'
import '../App.css'
import { connect } from 'react-redux'
import NavHeader from './NavHeader'
import {currentUser} from '../actions/auth'
import { fetchPostsSuccess } from '../actions/posts'
import PostCard from './PostCard'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Graph from './Graph'
import PieRechartComponent from './PieChart'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddPostModal from './AddPostModal'
import Calendar5 from './Calendar5'
import HMModal from './HMModal'
import PiechartModal from './PiechartModal'
import GraphModal from './GraphModal'



class DashboardContainer extends React.Component{
    state = {
        posts: []
    }
    // fetch for posts associated with user
    componentDidMount(){
        fetch(`http://localhost:3000/posts`)
        .then(resp => resp.json())
        .then(posts => {
            const userPosts = posts.filter(post => post.user_id === this.props.auth.id)
            this.props.fetchPostsSuccess(userPosts)
            this.setState({
                posts: userPosts
            })
        })
    }
    //Renders posts at bottom(replace with hover)
    renderPosts = () => {
        return this.props.posts.map(postObj => {
            return <PostCard postObj={postObj} key={postObj.id}/>
            
        })
    }

    
    
    render(){
        return (
            <div>
                <NavHeader />
                    <AddPostModal history={this.props.history}/>
                <Container>
                    <Calendar5 history={this.state.history} posts={this.state.posts}/>
                    <HMModal posts={this.state.posts}/>
                    <PiechartModal posts={this.state.posts}/> 
                </Container>
                    <GraphModal posts={this.state.posts}/>
                {/* <CardColumns >
                    {this.renderPosts()}
                </CardColumns> */}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        auth: state.auth,
        users: state.users
    }
}

const mapDispatchToProps = {
    currentUser,
    fetchPostsSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)