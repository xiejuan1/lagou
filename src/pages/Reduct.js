import React, {Component} from 'react';
import{
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
}from "react-router-dom";
import "./Reduct.css";
import Anoroid from "./small/Anoroid";
import Didian from "./small/Didian";
import Salary from "./small/Salary";
import Scale from "./small/Scale";
class Reduct extends Component{
	constructor(){
		super();
		this.state={
			Anoroid:"Anoroid",
			didian:"成都",
			salary:"5-10k",
			scale:"成长型"
		}
	}
	render(){
		
		
		return(<div>
			<header className="header">设置定制信息<div className="left"><span className="corner"><Link to="/index/position" clasasName="back">后退</Link></span></div></header>
			<ul className="custom-info">
			<li className="item">
			<span className="cust">
                职位类型
            </span>
            <Link to="/anoroid" className="desc">{this.state.Anoroid}</Link>
			</li>
			<li className="item">
			<span className="cust">
                工作地点
            </span>
            <Link to="/didian" className="desc">{this.state.didian}</Link>
			</li>
			<li className="item">
			<span className="cust">
                期望薪资
            </span>
            <Link to="/salary" className="desc">{this.state.salary}</Link>
			</li>
			<li className="item">
			<span className="cust">
                公司规模
            </span>
            <Link to="/scale" className="desc">{this.state.scale}</Link>
			</li>
			</ul>
			
			<footer>
			<div className="sousuo">开始搜索</div>
			</footer>
			
			
				</div>)
	}
	componentDidMount(){
		
		
	
		
	let Anoroid = localStorage.getItem("Anoroid");
	
	if(!Anoroid){
		
	}else{
		this.setState({
		Anoroid:Anoroid
	});
	}
	
	let Salary = localStorage.getItem("Salary");
	
	if(!Salary){
		
	}else{
		this.setState({
		salary:Salary
	});
	}
	
	let Scale = localStorage.getItem("Scale");
	
	if(!Scale){
		
	}else{
		this.setState({
		scale:Scale
	});
	}
	
	
	
	
	let didian = window.location.href.split("/").pop();
		didian = decodeURI(didian);
	this.setState({
		didian:didian
	});
	
	
	
	}
}
export default Reduct