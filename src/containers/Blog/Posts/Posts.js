import React, { Component } from 'react';
import axios from '../../../axiosInstance';
import { Route, Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component{
    state={
        posts: [],
        selectedId: null,
        error: false
    }

    postSelectedHandler = (id) =>{
        console.log("[Posts.js] ", id);
        // this.setState({selectedId: id})
        // this.props.history.push({pathname: "/" + id});
        this.props.history.push(this.props.match.url + "/" + id);
    }

    componentDidMount(){
        console.log("[Posts.js] props ",this.props)
        axios.get('/posts')
            .then(response => {
                const postsFromServer = response.data.slice(0, 4);
                const updatedPosts = postsFromServer.map(post => ({...post, Author: 'Pugazh'}))
                this.setState({posts: updatedPosts})
                // console.log(response)
            })
            .catch(error =>{
                /* console.log(error) */
                this.setState({error: true})
            });
    }
    render(){
        let posts=this.state.posts.map(post => (
            // <Link to={"/posts/" + post.id} key={post.id}>
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.Author}
                    clicked={()=>this.postSelectedHandler(post.id)}/>
            // </Link>
            )
            )
        if(this.state.error){
            posts=<p style={{textAlign: 'center'}}>Something went Wrong!</p>
        }
        return <div>
            <section className="Posts">
                {posts}
            </section>
            <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
        </div>
    }
}

export default Posts;