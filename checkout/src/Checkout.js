import React from "react"

class Checkout extends React.Component{

  
    render(){
        return(
            <div>
                <form>
                    <input placeholder = "firstname"
                    name = "firstname"
                    value = {this.props.firstname}
                    onChange = {this.props.handleChange}
                    />
                    <input placeholder = "lastname"
                    name = "lastname"
                    value = {this.props.lastname}
                    onChange = {this.props.handleChange}
                    />
                    <button 
                    onClick = {this.props.nextStep}
                    >Next</button>
                </form>
            </div>
        )
    }
}

export default Checkout