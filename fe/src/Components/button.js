import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import CardComponent from './card';


class button extends Component {
    
    constructor(){
        super()
        this.state = {
            isVisible : false,
            emptyUser : []
        }
    }

    randomUser = () => {

        this.setState({
            isVisible : true
        },() => {console.log(this.state.isVisible)} )

        
       axios.get('https://randomuser.me/api/?results=4')
        .then((response) => {
        const emptyUser = response.data.results
            this.setState({emptyUser})
            console.log('users',emptyUser)
        }) 
    }

    render(){
        const heading = {
            padding : '10px'
        }
        const styles = {
            display: 'inline-flex',
            marginLeft: '15px',
            padding: '55px'
          }

        return (
            <Fragment>

                <div style = {heading} >
                    <Button  onClick = {() => this.randomUser()} variant="contained" color="secondary">
                        Click for user information
                    </Button>
                </div>

                {
                    this.state.isVisible ?
                        <div style = {styles}>
                            {
                                this.state.emptyUser.map((user, index) => 

                                       <CardComponent key={index} person={user} />


                                )
                            }
                        </div> : ''
                }
               
            </Fragment> 
               
        )
     
    }
}


export default button