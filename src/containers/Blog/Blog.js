import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

// import Post from '../../components/Post/Post';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';
import './Blog.css';
// import axios from 'axios';
// import axios from '../../../src/axiosInstance';
import AsyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = AsyncComponent(()=>{
    return import('./NewPost/NewPost');
})

class Blog extends Component {
    state = {
        auth: true
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <ul>
                        <li><NavLink to="/posts" >Posts</NavLink></li>
                        <li><NavLink to={{
                            pathname: "/new-post",
                            hash: "#submit",
                            search: "?quick-sumit=true"
                        }} exact >New Post</NavLink></li>
                    </ul>
                </header>

                {/* <Posts/> */}
                {/* <Route path="/" exact render={()=><Posts/>} /> */}

                <Switch>
                    {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost}/> : null}
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>

                {/* <Route path={this.state.path} exact component={this.state.component} /> */}
                {/* <section>
                    <FullPost id={this.state.selectedId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;