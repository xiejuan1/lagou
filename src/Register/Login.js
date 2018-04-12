import React, { Component } from 'react';
import axios from 'axios';
import Register from "../Register/Register";
import{
	BrowserRouter as Router,
	Link,
	NavLink,
	Route
	
}from "react-router-dom";
import "./Login.css";
class Login extends Component{
	constructor(){
		super();
		this.state = {
			username:"",
			pwd:""
		};
	
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePwd = this.handlePwd.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}
	render(){
		return(<div className="container">
			
			<div className="form-header">
			<span className="lagou">登录拉钩</span>
			<Link to="./register" className="border_link">注册</Link> 
			</div>
			<div className="body_login">
			<input type="text" value={this.state.username} className="username" onChange={this.handleUsername} placeholder="请输入用户名" />
			<input type="password" className="pwd" value={this.state.pwd} onChange={this.handlePwd} placeholder="请输入密码"/>
			</div>
			<button className="login" onClick={this.handleLogin}>登录</button>
			
		
        <Route path="/register" component={Register}></Route>
		
		</div>)
	}
	handleUsername(e){
		this.setState({
			username:e.target.value
		})
	}
	handlePwd(e){
		this.setState({
			pwd:e.target.value
		})
	}
	handleLogin(){
		var _this = this;
		let{username,pwd} = this.state;
		if(!this.state.username||!this.state.pwd){
			alert("不能为空");
			return;
		}
	axios.post("/api/login",{username,pwd}).then(function(res){
			if(!res.data.code){
				localStorage.setItem("user",username);
				
				_this.props.history.replace("/index/position");	
			}else{
				alert(res.data.msg);
			}
			
		})
	}
	
}

export default Login




