import React, { Component } from 'react';
import axios from "axios";
import{
	BrowserRouter as Router,
	Route,
	Link,
	NavLink,
	
}from "react-router-dom";
import "./Didian.css";
import Mock from "../../mock/company";
class Didian extends Component{
	constructor(){
		super();
		this.state={
	 	list:[]
	 }
	}
	render(){
		var place = this.state.list;
		
	let placeList =	place.map((element,index)=>{
			
		
	let wrap = [];
	
	for(var i = 0; i < element.cityList.length;i+=3){
		wrap.push(element.cityList.slice(i, i + 3));
	}
			
			
	let showList = wrap.map((element,index)=>{
		let td = element.map((td,index)=>{
			let urls = "/reduct/"+td;
			return(<td key={index} className="city_items" data-item={td}><NavLink to={urls} activeClassName="styled">{td}</NavLink></td>)
			})
			return(<tr className="cities-list-item" key={index}>{td}</tr>)
		
	})
	
	return (
				<div key={index}>
					<div className="cities-header">{element.nameStr}</div>
					<table className="cities-list">
						<thead>
							<tr><th></th><th></th><th></th></tr></thead>
						<tbody>
							{showList}
						</tbody>
					</table>
				</div>);
	
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
                
                    告诉我你期望的工作地点？
                
            </span>
        </div>
			
			
			
			
			{placeList}
			
		</div>)
	}
	componentDidMount(){
		axios.get("/company").then((data)=>{
					this.setState({
						list:data.data.list
					})
			})
	}
}
export default Didian