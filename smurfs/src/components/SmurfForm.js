import React from 'react'
import axios from 'axios'


export default class SmurfForm extends React.Component{
    constructor(){
        super()
        this.state = {
            name:'',
            age:'',
            height:'',
        }
    }
     changeHandler = (event) => {
         event.preventDefault()
            this.setState({
            [event.target.name]: event.target.value
            })
     }
     
     onSubmit = (event) => {
         event.preventDefault()
            const newSmurf = { name: this.state.name, age: Number(this.state.age), height: this.state.height}
                axios
                .post('http://localhost:3333/smurfs', newSmurf)
                .then(response =>{
                    console.log(response.data)
                })
                .catch(error => { console.log('Did not post new smurf')})
                window.location.reload()
            }

        render(){
            return(
                <div>
                    <form onSubmit= {this.onSubmit}>
                        <input onChange= {this.changeHandler}
                            name= 'name'
                            placeholder='Name'
                            type='text'
                            value={this.state.name}

                        />

                        <input onChange= {this.changeHandler}
                            name= 'age'
                            placeholder='Age'
                            type='text'
                            value={this.state.age}

                        />
                        <input onChange= {this.changeHandler}
                            name='height'
                            placeholder='Height'
                            type='text'
                            value={this.state.height}

                        />
                        <button type='submit'>Submit</button>
                        <button type='submit'>Delete</button>
                    </form>
                </div>

            )
        }
}