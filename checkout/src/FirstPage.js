import React from "react"

class FirstPage extends React.Component{

    
    render(){
        return(
            <div>
                <form>
                    <input placeholder = "age"
                    name = "age"
                    value = {this.props.age}
                    onChange = {this.props.handleChange}
                    />
                    <input placeholder = "gender"
                    name = "gender"
                    value = {this.props.gender}
                    onChange = {this.props.handleChange}
                    />
                    <button 
                    onClick = {this.props.nextStep}
                    >Next</button>
                    <button 
                    onClick = {this.props.prevStep}
                    >Previous</button>
                </form>
            </div>
        )
    }
}

export default FirstPage