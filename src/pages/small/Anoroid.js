import React, { Component } from 'react';
import axios from "axios";
import "./Anoroid.css";
import{
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
}from "react-router-dom";
class Anoroid extends Component{
	constructor(){
		super();
		this.state={
			inputer:""
			
		}
	}
	render(){
		this.Inpulter = this.Inpulter.bind(this);
		this.Anoroid = this.Anoroid.bind(this);
		this.Li1 = this.Li1.bind(this);
		
		var listed =["产品经理","Java","运营","Android","PHP","UI","IOS"];
		var lied = listed.map((curr,index)=>{
return(<li className="item_A" key={index}><Link to="/reduct" onClick={this.Li1} data-name={curr} className="itemed_A">{curr}</Link></li>)
		})
		
		
		
		
		return(<div>
			
			<header className="A-header">设置定制信息
			<div className="left_A">
			<span className="corner_A">
			<Link className="back_A" to="/reduct">后退</Link>
			</span>
			</div>
			</header>
			
			<div className="info_A">
            <span className="text_A"> 想找什么职位？</span>
        </div>
			
			
			<div className="rinputed">
			<div className="rinputer">
			<input className="inputer" placeholder="输入你想定制的职位" value={this.state.inputer} onChange={this.Inpulter}/>
			<Link to= "/reduct" style={{display:"block"}}><span className="button" onClick={this.Anoroid}>OK</span></Link>
			</div>
			<ul className="predata">
			{lied}
			</ul>
			<ul className="suggester">
			</ul>
			</div>
			
			
			
			
			
			
		</div>)
	}
	Inpulter(e){
		this.setState({
			inputer:e.target.value,
			
		})
		
		
	}
	Anoroid(){
	console.log(this.state.inputer);
	let valued = this.state.inputer;
	localStorage.setItem("Anoroid",valued);
	}
	
	Li1(e){
	
	let name = e.target.dataset.name;
	localStorage.setItem("Anoroid",name);
		
	}
}

export default Anoroid;