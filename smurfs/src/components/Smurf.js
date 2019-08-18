import React from 'react'
import axios from 'axios';



export default class Smurf extends React.Component {
    constructor(props){
        super(props)
    }

    deleteHandler =(event) => {
        axios 
        .delete(`http://localhost:3333/smurfs/${this.props.id}`)
        .then(response=> {
        console.log(response.data)
        })
        .catch(error => { console.log('Did not delete smurf')})
    }
        
        render(){
            return(
                <div>            
                        <img alt= 'smurf pic' src='https://vignette.wikia.nocookie.net/p__/images/d/d3/Brainy_and_snappy.png/revision/latest?cb=20170709023913&path-prefix=protagonist' />
                        <h2>{this.props.name}</h2>
                        <h2>{this.props.age}</h2>
                        <h2>{this.props.height}</h2>
                        <button onClick ={(event)=>{this.deleteHandler(this.props.id)}} >Delete</button>
                </div>
            )
                  
    }
}