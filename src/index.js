import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = "Auth-Token";
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use( request =>{
    console.log("[Index] request : ",request);
    //Edit request config
    return(request);
} , error => {
    console.log(error);
    return Promise.reject(error);
})

axios.interceptors.response.use( response =>{
    console.log("[Index] response : ",response);
    //Edit request config
    return(response);
} , error => {
    console.log("[Index] : ",error);
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
