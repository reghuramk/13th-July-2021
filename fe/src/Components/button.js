import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios'


class button extends Component {
    
    constructor(){
        super()
        this.state = {
            isVisible : false 
        }
    }

    randomUser = () => {

        this.setState({
            isVisible : true
        })


        axios.get('https://randomuser.me/api/?results=4')
        .then((response) => {
            console.log(response.data.results)
        })
    }

    render(){

        const heading = {
            padding : '10px'
        }

        return (
            <Fragment>

                <div style = {heading} >
                    <Button onClick = {() => this.randomUser()}variant="contained" color="secondary">
                        Secondary
                    </Button>
                </div>
               
            </Fragment>
               
        )
     
    }
}


export default button