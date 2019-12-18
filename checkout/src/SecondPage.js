import React from "react"

class SecondPage extends React.Component{
    render(){
        return(
            <>
             <h2>firstname : {this.props.firstname} </h2>
                    <h2>lastname: {this.props.lastname}</h2>
                    <h2>age: {this.props.age}</h2>
                    <h2>gender: {this.props.gender}</h2>
                
                     <button 
                    onClick = {this.props.prevStep}
                    >Previous</button>
                    <button 
                    onClick = {this.props.nextStep}
                    >Confirm</button>
                    </>
        )
    }
}

export default SecondPage