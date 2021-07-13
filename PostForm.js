import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {

    constructor(){

       super() 
       this.state = {
           userId:'',
           body:'',
           title:'',
           isSelected: true
       }
    }
    changeHandle=(e)  =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandle = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
        })
    }
    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandle}>
                <div>
                    <label>Title</label>
                    <input 
                    type='text' 
                    name ='userId' 
                    onChange={this.changeHandle}
                    value={userId}></input>
                </div>
                <div>
                <label>Text</label>
                    <input 
                    type='text' 
                    name ='title' 
                        onChange={this.changeHandle}
                    value={title}></input>
                </div>
                <div>
                <label>Body</label>
                    <input 
                    type='text' 
                    name ='body' 
                    onChange={this.changeHandle}
                    value={body}></input>
                </div>
                <button type='submit'>Submit Now</button>
                </form>
            </div>
        )
    } 
}  
export default PostForm