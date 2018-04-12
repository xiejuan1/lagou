import React, { Component } from 'react';
import axios from 'axios';
import Login from "../Register/Login";
import "./Register.css";
import{
	BrowserRouter as Router,
	Link,
	NavLink,
	Route
	
}from "react-router-dom";
class Register extends Component{
	constructor(){
		super();
		this.state = {
			phone:"",
			username:"",
			pwd:""
			
		};
		this.handlePhone = this.handlePhone.bind(this);
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePwd = this.handlePwd.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
	}
	render(){
		
		return(
			
			<div className="container">
			
			<div className="form-header">
			<span className="lagou">注册拉钩</span>
			<Link to="./login" className="border_link">登录</Link> 
			</div>
			<div className="body_register">
			<input type="text" value={this.state.phone} className="phone" onChange={this.handlePhone} placeholder="请输入手机号码" />
			<input type="text" value={this.state.username} className="username" onChange={this.handleUsername} placeholder="请输入用户名" />
			<input type="password" className="pwd" value={this.state.pwd} onChange={this.handlePwd} placeholder="请输入密码"/>
			</div>
			<button className="btn" onClick={this.handleRegister}>注册</button>
			<p className="p">注册拉勾网代表你已经同意      拉钩用户协议</p>
        
        
        <Route path="/login" component={Login}></Route>
			
			</div>
		
		)
	}
	
	handlePhone(e){
		this.setState({
			phone:e.target.value
		})
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
	handleRegister(){
		var _this = this;
		let {pwd,phone,username} = this.state;
		//获取数据发起请求
		if(!this.state.pwd ||!this.state.username ||!this.state.phone){
			alert("不能为空！");
			return;
		};
       //发请求，配置代理 localhost：3000 代理带一个localhost：8848
		axios.post("/api/register",{pwd,username,phone}).then(function(res){
			if(!res.data.code){
				_this.props.history.replace("/login");
			}else{
				alert(res.data.msg);
			}
		})
	}
}
export default Register;