import React, { Component } from 'react';
import{
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
}from "react-router-dom";
import "./Salary.css";

class Salary extends Component{
	constructor(){
		super();
	}
	render(){
		this.Salary = this.Salary.bind(this);
		
		
		let list =["没有要求","2k以下","2k-5k","5k-10k","10k-15k","15k-25k","25k-50k","50k以上"];
		
		let listed = list.map((curr,index)=>{

		return( <li className="activeable item" key={index}><Link to="/reduct" className="itemed_A" onClick={this.Salary}  data-name={curr}>{curr}</Link></li>)  
			
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
            <span className="text_A">
                
                  你值得更好的生活,告诉我你的期望薪资?
                
            </span>
        </div>
		
		<ul className="list">
		      {listed}
		</ul>
			
		
			</div>)
	}
	Salary(e){
		let  h =  e.target.dataset.name;
		localStorage.setItem("Salary",h);
	}
	
}
export default Salary