import React, { Component } from 'react';
import "./Searched.css";
import axios from "axios";
import{
	BrowserRouter as Router,//你要用路径模式,路由的最外层
	Route, //路由切换的坑,组件的载体
	Link,//模板切换的组件
	NavLink
}from 'react-router-dom';

class Searched extends Component {
	constructor() {
		super();
		this.handleMore = this.handleMore.bind(this);
		this.state = {
			list: [{　　　　　　　　　　　　
					"positionId":364520,
					　　　　　　　　　　　　"positionName": "销售经理/助理/品牌保护助理（国际）",
					　　　　　　　　　　　　"city": "杭州",
					　　　　　　　　　　　　"createTime": "今天 09:19",
					　　　　　　　　　　　　"salary": "8k-12k",
					　　　　　　　　　　　　"companyId": 179121,
					　　　　　　　　　　　　"companyLogo": "https://static.lagou.com/i/image/M00/B9/01/CgqKkVjCSoGAWTijAAAL8PtaH80284.jpg",
					　　　　　　　　　　　　"companyName": "杭州数强知识产权代理有限公司",
					　　　　　　　　　　　　"companyFullName": "杭州数强知识产权代理有限公司"　　　　　　　　　　
				}, 　　　　　　　　　　 {　　　　　　　　　　　　
					"positionId":364521,
					　　　　　　　　　　　　"positionName": "一手房直销-置业顾问-客户经理",
					　　　　　　　　　　　　"city": "上海",
					　　　　　　　　　　　　"createTime": "今天 09:14",
					　　　　　　　　　　　　"salary": "8k-16k",
					　　　　　　　　　　　　"companyId": 36108,
					　　　　　　　　　　　　"companyLogo": "https://static.lagou.com/image1/M00/00/56/Cgo8PFTUXSSAbhbjAABPArekrAU876.jpg",
					　　　　　　　　　　　　"companyName": "上海德佑物业顾问有限公司",
					　　　　　　　　　　　　"companyFullName": "上海德佑物业顾问有限公司"　　　　　　　　　　
				},
				{　　　　　　　　　　　　
					"positionId": 364512,
					　　　　　　　　　　　　"positionName": "销售经理/助理/品牌保护助理（国际）",
					　　　　　　　　　　　　"city": "杭州",
					　　　　　　　　　　　　"createTime": "今天 09:19",
					　　　　　　　　　　　　"salary": "8k-12k",
					　　　　　　　　　　　　"companyId": 179121,
					　　　　　　　　　　　　"companyLogo": "//static.lagou.com/i/image2/M00/07/19/CgoB5lnLcQCAdXUCAAAkNaCSXVg655.gif",
					　　　　　　　　　　　　"companyName": "杭州数强知识产权代理有限公司",
					　　　　　　　　　　　　"companyFullName": "杭州数强知识产权代理有限公司"　　　　　　　　　　
				}, 　　　　　　　　　　 {　　　　　　　　　　　　
					"positionId": 364513,
					　　　　　　　　　　　　"positionName": "一手房直销-置业顾问-客户经理",
					　　　　　　　　　　　　"city": "上海",
					　　　　　　　　　　　　"createTime": "今天 09:14",
					　　　　　　　　　　　　"salary": "8k-16k",
					　　　　　　　　　　　　"companyId": 36108,
					　　　　　　　　　　　　"companyLogo": "//static.lagou.com/i/image3/M00/20/CB/Cgq2xlqTdqSAZWHUAAAx7pYqUAY798.png",
					　　　　　　　　　　　　"companyName": "上海德佑物业顾问有限公司",
					　　　　　　　　　　　　"companyFullName": "上海德佑物业顾问有限公司"　　　　　　　　　　
				},
				{　　　　　　　　　　　　
					"positionId": 364514,
					　　　　　　　　　　　　"positionName": "销售经理/助理/品牌保护助理（国际）",
					　　　　　　　　　　　　"city": "杭州",
					　　　　　　　　　　　　"createTime": "今天 09:19",
					　　　　　　　　　　　　"salary": "8k-12k",
					　　　　　　　　　　　　"companyId": 179121,
					　　　　　　　　　　　　"companyLogo": "//static.lagou.com/i/image/M00/5B/FB/CgpFT1mRBnKAdv1XAAK5g-5RwUE175.png",
					　　　　　　　　　　　　"companyName": "杭州数强知识产权代理有限公司",
					　　　　　　　　　　　　"companyFullName": "杭州数强知识产权代理有限公司"　　　　　　　　　　
				}, 　　　　　　　　　　 {　　　　　　　　　　　　
					"positionId": 364515,
					　　　　　　　　　　　　"positionName": "一手房直销-置业顾问-客户经理",
					　　　　　　　　　　　　"city": "上海",
					　　　　　　　　　　　　"createTime": "今天 09:14",
					　　　　　　　　　　　　"salary": "8k-16k",
					　　　　　　　　　　　　"companyId": 36108,
					　　　　　　　　　　　　"companyLogo": "//static.lagou.com/i/image/M00/3F/00/CgpEMllQy7OAW9NAAABD4evO76o456.png",
					　　　　　　　　　　　　"companyName": "上海德佑物业顾问有限公司",
					　　　　　　　　　　　　"companyFullName": "上海德佑物业顾问有限公司"　　　　　　　　　　
				},
				{　　　　　　　　　　　　
					"positionId": 364516,
					　　　　　　　　　　　　"positionName": "销售经理/助理/品牌保护助理（国际）",
					　　　　　　　　　　　　"city": "杭州",
					　　　　　　　　　　　　"createTime": "今天 09:19",
					　　　　　　　　　　　　"salary": "8k-12k",
					　　　　　　　　　　　　"companyId": 179121,
					　　　　　　　　　　　　"companyLogo": "//static.lagou.com/i/image/M00/59/AA/Cgp3O1fY706AJeGnAAAUAJxt40g177.jpg",
					　　　　　　　　　　　　"companyName": "杭州数强知识产权代理有限公司",
					　　　　　　　　　　　　"companyFullName": "杭州数强知识产权代理有限公司"　　　　　　　　　　
				}, 　　　　　　　　　　 {　　　　　　　　　　　　
					"positionId": 364517,
					　　　　　　　　　　　　"positionName": "一手房直销-置业顾问-客户经理",
					　　　　　　　　　　　　"city": "上海",
					　　　　　　　　　　　　"createTime": "今天 09:14",
					　　　　　　　　　　　　"salary": "8k-16k",
					　　　　　　　　　　　　"companyId": 36108,
					　　　　　　　　　　　　"companyLogo": "//static.lagou.com/i/image/M00/60/D9/CgpEMlmSWVKAd3X6AABuhrQekA8956.jpg",
					　　　　　　　　　　　　"companyName": "上海德佑物业顾问有限公司",
					　　　　　　　　　　　　"companyFullName": "上海德佑物业顾问有限公司"　　　　　　　　　　
				}

			]
		}

	}
	render() {

		var list = this.state.list.map(function(job,index) {
			return <JobItem job={job} key={index}></JobItem>;
		})

		return(
			<div className="position">
			<div className="condition">
                  将搜索地区和关键词设为定制条件
			</div>
			<ul className="list">
					{list}
			<li className="list-mored" style={{marginBottom: "47px"}} onClick={this.handleMore}>加载更多</li>	
			</ul>				
			</div>
			
        
		)
	}
	handleMore(e){
	this.setState({
		list:this.state.list.concat(this.state.list)
	})
	}
}

class JobItem extends Component {
	constructor() {
		super(); 
	}
	render() {
		let {positionName,city,createTime,salary,companyName,companyLogo,positionId,companyId} = this.props.job;
		let url = "/detail/"+positionId;
		return(
			<Link to={url}>
			<li className="activeable list-item" data-positionid={positionId} data-companyid={companyId}>
				 <img src={companyLogo} className="item-logo" />
					<div className="item-desc">
					  <h2 className="item-title">{companyName}</h2>
					 <p className="item-info">
				    <span className="item-pos">
				    ({positionName}) [ {city} ]
					    </span>
					 <span className="item-salary">{salary}</span>
				  </p>
			   <p className="item-time">{createTime}</p>
			  </div>
		    </li>
		    </Link>
		)
	}
}





export default Searched;