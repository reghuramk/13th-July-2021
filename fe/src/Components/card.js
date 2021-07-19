import React, {Component, Fragment} from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';




class CardComponent extends Component{


    constructor(props){
        super()
        
    }


    render(){

        const heading = {
            padding : '10px',
            width: '200px',
            height: '200px',
            marginLeft: '13px',
            marginRight: '10px'
        }

        const typo = {
            marginLeft : '25px',

        }

        const ModalButton = {
            width: '10px',
            height: '10px',
            border: 'outset'
        }

        return(
           
                <Card style = {heading} >
                    <CardActionArea>
                        <CardMedia>
                            <img alt = "pic" src = {this.props.person.picture.large}></img>
                            </CardMedia>
                    </CardActionArea>
                    <CardActions style = {typo}>
                       <Typography >{this.props.person.name.first}</Typography>
                       <Typography >{this.props.person.name.last}</Typography>
                      
                    </CardActions>
                    <Button style = {ModalButton}>
                            click me
                    </Button>

                </Card>
            
            
        )
    }


}

export default CardComponent