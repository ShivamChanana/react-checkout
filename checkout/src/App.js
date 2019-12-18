import React from "react"
import {Link, Route, Switch} from "react-router-dom"
import Sidebar from "./Sidebar"

const Home = ()=> <h1>Home Page</h1>
const About = ()=> <h1>About Page</h1>
const Products = ()=> <h1>Products Page</h1>

//nested Routing
const Topic = (props)=>{
    console.log("In top", props)
    return(
    <h1>Topic is : {props.match.params.id}</h1>
    )
}
const Topics = (props)=>{
    console.log("Inside Topics", props)
    return(
        <div>
            
            <li><Link to ={`${props.match.url}/react`}>React</Link></li>
            <li><Link to ={`${props.match.url}/angular`}>Angular</Link></li>
            <li><Link to ={`${props.match.url}/vue`}>Vue</Link></li> 
            <Switch>
            <Route exact path = {`${props.match.url}/:id`} component = {Topic}/>
            <Route render = {()=> <h1>Please Select a Topic</h1>}/>
            </Switch>
       </div>
    )
}

class App extends React.Component{
    render(){
        console.log("in App", this.props)
        return(
            <>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "products">Products</Link>
            <Link to = "/topics">Topics</Link>
            <Link to = "/subtopics">Subtopics</Link>
            <Link to = "/sidebar">Sidebar</Link>
            <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route  path = "/about" component = {About}/>
            <Route  path = "/products" component = {Products}/>
            <Route path = "/topics" component = {Topics}/>
            <Route path = "/subtopics" component = {Topics}/>
            <Route path = "/sidebar" component = {Sidebar}/>
            <Route render = {()=><h1>404 not Found</h1>}/>
            </Switch>
            </>
        )
    }
}

export default App