import React, { Component } from 'react';
import Mock from "../mock/require";
import axios from "axios";
import{
	BrowserRouter as Router,
	Route,
	Link,
	NavLink,
	
}from "react-router-dom";
 import "./Detail.css";
class Detail extends Component{
	constructor(){
		super();
	 this.state={
	 	list:{}
	 }
		
	}
	
	
	render(){
		let {positionName,city,createTime,salary,companyName,companyLogo,positionId,companyId} =this.state.list;
		
		return(<div>
			
			
			
			<div className="head">
			
			<NavLink className="back" to="/index/position">
			后退
			</NavLink>
			<div className="detailed">
			职位详情
			</div>
			<NavLink className="pages" to="/index/position">
			主页
			</NavLink>
			</div>
			<div className="content">
			<div className="positile">
			销售经理/助理/品牌保护助理（国际）
			</div>
			<div className="xiangqing">
			<b>{salary}</b>
			<b>{city}</b>
			<b>全职</b>
			<b>1-3年</b>
			<b>本科及以上</b>
			
			</div>
			<div className="company">
				<img className="img"   src={companyLogo}/>
			<div className="right">
			<div className="companyName">{companyName}</div>
			<p>移动/互联网/信息技术/服务...</p>
			<p>150-500人</p>
			</div>
			</div>
			<div className="miaoshu">职位描述</div>
			
			
			<div className="renzhi">
                <p>任职资格：</p>
				<p>1、18-26岁，一年以下工作经验，大专以上学历，专业不限；</p>
				<p>2、有良好的学习能力，会简单的电脑操作基础，了解java编程开发的；</p>
				<p>3、逻辑能力较强，有较强的抗压力和高度的责任感。</p>
				<p>薪资待遇：</p>
				<p>1.薪资在3500-5000之间，</p>
				<p>2.朝九晚六，周六周天双休，法定节假日正常休息；</p>
				<p>3.薪资体系：底薪（无责任）+补助+绩效奖金,带薪休假.</p>
				
            </div>
			
			
			
			
			
			</div>
			
			<button className="send">投递简历</button>
			</div>)
	}
	componentDidMount(){
		let _this = this;
		let h = window.location.href.split("/").pop();
		console.log(h);
		axios.get("/showjob").then(function(res){
			res.data.list.map(function(curr){
				if(curr.positionId==h){
					console.log(curr);
					_this.setState({
						list:curr
					})
				}
			})
		})
	}
}
export default Detail;
