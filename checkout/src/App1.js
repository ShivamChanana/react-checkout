import React from 'react';
import Checkout from "./Checkout"
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"
import LastPage from "./LastPage"
class App extends React.Component{
constructor(props){
  super(props)
  this.state = {
    firstname : "",
    lastname : "",
    age : "",
    gender : "",
    step : 0
  }
}

nextStep=()=>{
  this.setState({
    step : this.state.step + 1
  })
}
prevStep = (e)=>{
  e.preventDefault()
  this.setState({
    step : this.state.step - 1
  })
}
handleChange=(e)=>{
  this.setState({
      [e.target.name] : e.target.value
  })
}

handleSubmit = (e)=>{
  e.preventDefault()
  console.log("details", this.state)
}

  render(){
    switch(this.state.step){
      case 0 :
        return <Checkout handleChange={this.handleChange} firstname = {this.state.firstname} lastname = {this.state.lastname} nextStep = {this.nextStep}/>
        case 1 :
          return <FirstPage  handleChange={this.handleChange}   age = {this.state.age} gender = {this.state.gender} nextStep = {this.nextStep} prevStep = {this.prevStep}/>
          case 2 :
            return <SecondPage  firstname = {this.state.firstname} lastname = {this.state.lastname} 
            age = {this.state.age} gender = {this.state.gender}  prevStep = {this.prevStep} 
            nextStep = {this.nextStep}
            />
            case 3 :
              return <LastPage />
            default :
            return <h1>Hello</h1>
    }
  
    
  }
}

export default App;
