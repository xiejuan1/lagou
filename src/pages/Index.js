import React, { Component } from 'react';
import serach from "../search.png";
import locations from '../location.png';
import user from '../user.png';
import Search from "./Search";
import User from "./User";
import City from "./City";
import Position from "./Position";
import{
	BrowserRouter as Router,
	Route,
	Link,
	NavLink,
	
}from "react-router-dom";
import "./Index.css";
import "./Search.css";
import "./User.css";
import "./Position.css";

class Index extends Component{
	render(){
		return(
			<div>
			 <header className="header">拉勾网</header>
			{/*路由的切换，模板切换，js切换*/}
         
         <footer className="footer">
        
                   <li><NavLink to="/index/position" activeClassName="foot_style1">职位</NavLink></li>
                   <li><NavLink to="/index/search" activeClassName="foot_style2">搜索</NavLink></li>
                   <li><NavLink to="/index/user" activeClassName="foot_style3">我的</NavLink></li>
              
           </footer> 
           
           {/*动态路由：不同的路径加载同一组件*/}
           	
          	   <Route path="/index/position" component={Position}></Route>
          		<Route path="/index/search" component={Search}></Route>
        	    <Route path="/index/user" component={User}></Route>
        	    <Route path="/index/city" component={City}></Route>

        	    
			
			</div>
			
			
		)
	}
}
export default Index;
