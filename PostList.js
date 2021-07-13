import  React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
 constructor() {
     super()
     this.state = {
         posts: []

     }
 }
 componentDidMount() {
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response => {
         console.log(response)
         this.setState({posts: response.data})
     })
 }
    render() {
        const { posts } = this.state
        return (
            <div>
list of student
{
    posts.map(post => <div key={post.id}>{post.title}</div>)
}
            </div>
        )
    }
}
export default PostList