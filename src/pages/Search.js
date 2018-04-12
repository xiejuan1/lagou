import React, { Component } from 'react';
import City from "./City";
import Searched from "./small/Searched";
import Mock from "../mock/company"; 
import axios from "axios";
import{
	BrowserRouter as Router,
	Route,
	Link,
	NavLink
}from "react-router-dom";
import "./Search.css";
import "./small/Searched.css";

var main = [];

class Search extends Component{
	constructor(){
		super();
		this.state={
			input:"",
			h:"",
			lied:true,
			li:""
		};
		
		
		
		
		
	this.Input = this.Input.bind(this);
	this.Findes = this.Findes.bind(this);
	this.Show = this.Show.bind(this);
	this.valued = this.valued.bind(this);
	}
	render(){
		if(!localStorage.search){
			
				
				
				
		}else{
			var f = localStorage.getItem("search");
		var w = f.split(",").map((curr,index)=>{
		 	return(<li key={index} className="lis" style={{display:this.state.lied?"block":"none"}} onClick={this.valued} data-name={curr}>{curr}</li>)
		 
		})
		}
		
		
		return(<div>
			
			<div className="inpulter">
			<NavLink className="city" to="/index/city">{this.state.h}</NavLink>
			<Link to="/index/search" style={{display:"block"}} onClick={this.Show}><input className="input" value={this.state.input}  onChange={this.Input} placeholder="搜索职位或公司"/></Link>
		    <NavLink className="searched" to="/index/search/searched" onClick={this.Findes}> 搜索</NavLink>
			</div>
			<ul className="ules">
			{w}
			</ul >
        	   <Route path="/index/city" component={City}></Route>
        	   <Route path="/index/search/searched" component={Searched}></Route>
        	   
			</div>)
	}
	/*全国的value值*/
	componentDidMount(){
		var h =window.location.href.split("/").pop();
			h = decodeURI(h);
		this.setState({
			h:h
		})
	}
	/*设置input的状态的值*/
	Input(e){
		this.setState({
			input:e.target.value
		});
	}
	/*当点击input设置让li显示的状态*/
	Show(){
		this.setState({
		lied:true
		});
	}
	//点击li设置input的值为li的值
valued(e){
	console.log(e.target.dataset.name);
	this.setState({
		input:e.target.dataset.name
	})
	}	
	
	
	
	
	Findes(){
		this.setState({
		lied:false
		});
		
	if(!this.state.input){
		
			
	}else{
		let component=this.state.input;
		{/*向数组添加input内容*/}
		main.push(component);
		var h = localStorage.setItem('search',main);
		{/*清空input*/}
		this.setState({
			input:""
		})
	}		
	
	}
}

export default Search
