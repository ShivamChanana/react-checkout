import React from "react"
import {Link, BrowserRouter as Router, Route} from "react-router-dom"
const data = [
    {
        path: "/",
        exact: true,
        main: ()=><h1>Home Page</h1>,
        side: ()=> <h1>Home Sidebar</h1>
    },
    {
        path: "/about",
        exact: true,
        main: ()=><h1>About Page</h1>,
        side: ()=> <h1>About Sidebar</h1>
    },
    {
        path: "/products",
        exact: true,
        main: ()=><h1>Products Page</h1>,
        side: ()=> <h1>Products</h1>
    }
]

const Sidebar = ()=>{
    return(
        <>
        <Router>
        <div style = {{display: "flex", border: "2px solid black"}}>
            <div>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to = "/products">Products</Link></li>
            {data.map((route)=>(
                <Route
                path = {route.path}
                component = {route.side}
                exact = {route.exact}
                />
            ))}
        </div>
        </div>
        <div style = {{display : "flex"}}>
            {data.map((route)=>(
                <Route
                path = {route.path}
                component = {route.main}
                exact = {route.exact}
                />
            ))}
                
        </div>
        </Router>
        </>
    )
}

export default Sidebar