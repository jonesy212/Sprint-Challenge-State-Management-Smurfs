import React from "react";
import "./App.css";
import Smurf from './components/Smurf'
//Step 5 import connect and action

import {connect} from 'react-redux'
import {smurfInfo} from './actions/index'

//import form to add more smurfs!!!
import SmurfForm from './components/SmurfForm'



class App extends React.Component{
   constructor(props){
        super(props)
        }
            render(){
                console.log(this.props)
                return (
                <div className= 'SmurfInfo'>
               <button onClick ={this.props.smurfInfo}>Click Here</button>
               <SmurfForm  />
                    {this.props.data.map((smurf, index) => {
                        return <Smurf   name={smurf.name} 
                                        age={smurf.age} 
                                        height={smurf.height} 
                                        id={smurf.id}
                                />
                                
                    })}
            </div>
                )
            }
        }


const mapStateToProps = (state) => {
  return {
    loading:state.loading,
    data: state.value
  }
}

export default connect(
  mapStateToProps,
  {smurfInfo}
)(App);
