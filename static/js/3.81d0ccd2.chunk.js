(this.webpackJsonphttp_guide=this.webpackJsonphttp_guide||[]).push([[3],{68:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var a=n(9),s=n(10),o=n(12),c=n(11),r=n(0),i=(n(68),n(8)),u=n.n(i),l=n(1),h=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={title:"",content:"",author:"Max",submitted:!1},t.postDataHandler=function(){var e={title:t.state.title,content:t.state.content,author:t.state.author};u.a.post("/posts",e).then((function(e){console.log(e),t.props.history.push("/posts")}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){console.log("[New Post.js] ",this.props)}},{key:"render",value:function(){var t=this;return Object(l.jsxs)("div",{className:"NewPost",children:[Object(l.jsx)("h1",{children:"Add a Post"}),Object(l.jsx)("label",{children:"Title"}),Object(l.jsx)("input",{type:"text",value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}}),Object(l.jsx)("label",{children:"Content"}),Object(l.jsx)("textarea",{rows:"4",value:this.state.content,onChange:function(e){return t.setState({content:e.target.value})}}),Object(l.jsx)("label",{children:"Author"}),Object(l.jsxs)("select",{value:this.state.author,onChange:function(e){return t.setState({author:e.target.value})},children:[Object(l.jsx)("option",{value:"Pugazh",children:"Pugazh"}),Object(l.jsx)("option",{value:"Manu",children:"Manu"})]}),Object(l.jsx)("button",{onClick:this.postDataHandler,children:"Add Post"})]})}}]),n}(r.Component);e.default=h}}]);
//# sourceMappingURL=3.81d0ccd2.chunk.js.map