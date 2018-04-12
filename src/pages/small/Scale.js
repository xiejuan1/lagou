import React, { Component } from 'react';
import{
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
}from "react-router-dom";
import "./Scale.css";

class Scale extends Component{
	constructor(){
		super();
	}
	render(){
		this.Scale = this.Scale.bind(this);
		
		let list = ["没有要求","初创型","成长型","成熟型","上市公司"];
		
		let listed = list.map((curr,index)=>{
		return( <li className="activeable item" key={index}><Link to="/reduct" className="itemed_A" onClick={this.Scale}  data-name={curr}>{curr}</Link></li>)  
		
		});
		
		
		
		
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
                
                  对公司的规模可有要求?
                
            </span>
        </div>
			
			<ul className="list">
				{listed}
       
             </ul>
			
			
			</div>)
	}
	
	Scale(e){
		let  h =  e.target.dataset.name;
		localStorage.setItem("Scale",h);
	}
}
export default Scale