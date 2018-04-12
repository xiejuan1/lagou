import React, { Component } from 'react';
import Index from "./pages/Index";
import Register from "./Register/Register";
import Detail from "./details/Detail";
import Login from "./Register/Login";
import Reduct from "./pages/Reduct";
import Anoroid from "./pages/small/Anoroid";
import Didian from "./pages/small/Didian";
import Salary from "./pages/small/Salary";
import Scale from "./pages/small/Scale";
import{
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
}from "react-router-dom";


import "./App.css";

class App extends Component{
	render(){
		return(
			<Router>
			<Switch>
			<Route path="/index" component={Index}></Route>
			<Route path="/register" component={Register}></Route>
			<Route path="/detail" component={Detail}></Route>
			<Route path="/login" component={Login}></Route>
        	<Route path="/reduct" component={Reduct}></Route>
			<Route path="/anoroid" component={Anoroid}></Route>
			<Route path="/salary" component={Salary}></Route>
			<Route path="/didian" component={Didian}></Route>
			<Route path="/scale" component={Scale}></Route>
			
          <Redirect path="/" to="/index/position" exact></Redirect>
          <Route render={()=>{return <div>  404 ！</div>}} />
			</Switch>
			</Router>
		)
	}
}
export default App;
