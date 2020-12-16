import React from 'react'
import { connect } from 'react-redux'


class HappyMemory extends React.Component{
    
    renderHappyMemory = () => {
        const hmPost = this.props.posts.map(postObj => postObj.happy_memory)
        const hmSinglePost = hmPost[Math.floor(Math.random() * hmPost.length)]
            return hmSinglePost
    }

    render(){
        return (
            <div>
                {this.renderHappyMemory()}
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
export default connect(mapStateToProps, null)(HappyMemory)

