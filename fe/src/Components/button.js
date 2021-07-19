import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import CardComponent from './card';


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
        },() => {console.log(this.state.isVisible)} )

       const emptyUser = []
        
       axios.get('https://randomuser.me/api/?results=4')
        .then((response) => {
            emptyUser.push(response.data.results)
        })
  
        console.log('emptyuser',emptyUser)
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
                            <CardComponent  />
                        </div> : ''
                }
               
            </Fragment> 
               
        )
     
    }
}


export default button