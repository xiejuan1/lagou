import React, { Component } from 'react';
import Register from "../Register/Register";
import axios from "axios";
import{
	BrowserRouter as Router,//你要用路径模式,路由的最外层
	Route, //路由切换的坑,组件的载体
	Link,//模板切换的组件
	NavLink
}from 'react-router-dom';


class User extends Component{
	constructor(){
		super();
		this.state={
			regis:true,
			name:"",
			logout:false,
			img:false,
			named:false
		};
		
	}
	render(){

		this.handleLogout = this.handleLogout.bind(this);
		return(
		
			<div className="content">
        
        <div className="logininfo">
                       
                <div className="nologin center">
                    <NavLink className="loginbut" to="/register" style={{display:this.state.regis?"block":"none"}}>登录 / 注册</NavLink>
                <img className="headpic" style={{display:this.state.img?"block":"none"}}  src="//static.lagou.com/images/myresume/default_headpic.png"/>
                	<div className="name" style={{display:this.state.named?"block":"none"}} >{this.state.name}</div>
                </div>
                
                    </div>
       
        
       {/* <div className="buttons">
            
            <a className="button deliver">
                <span>投递</span>
                
                
            </a>
            <a className="button interview">面试</a>
            
            <a className="button invitation">
                <span>邀约</span>
                            </a>
            
            <a className="button collect">收藏</a>
       </div>*/}
       
       	<div className="aside">
       	<div>投递</div>
       	<div>面试</div>
       	<div>邀约</div>
       	<div>收藏</div>
       	</div>
       
        <div className="logout" onClick={this.handleLogout} style={{display:this.state.logout?"block":"none"}} >退出登录</div>
        <Route path="/register" component={Register}></Route>
        
            </div>
		)
	}
	
	componentDidMount(){
		let name=localStorage.getItem("user");
		if(localStorage.getItem("user")){
			this.setState({
				regis:false,
				name:name,
				named:true,
				img:true,
				logout:true
				
			})
		}
	}
	//c点击退出，清除localstorge，设置回原来的状态
	handleLogout(){
		localStorage.removeItem("user");
		this.setState({
				regis:true,
				named:false,
				img:false,
				logout:false
				
			})
	}
	
}

export default User