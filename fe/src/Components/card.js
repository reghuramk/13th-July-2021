import React, {Component, Fragment} from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from 'react-modal'



class CardComponent extends Component{


    constructor(props){
        super()

        this.state = {
            isVisible : false
        }
        
    }


    handleOpen = () => {

        this.setState({
            isVisible : true
        })
    }

    handleClose = () => {

        this.setState ({
            isVisible: false
        })

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
            width: '114px',
            height: '35px',
            border: 'outset',
            fontSize: '9px',
            marginTop: '-2px'
        }

        const customStyles = {
            content: {
              width : '220px',
              height : '420px',
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)'
            },
          };

          const closeButton = {
            marginTop : '-8px',
            marginBottom : '-96px',
            marginLeft : '63px',  
            width: '35px',
            height: '35px',
            border: 'outset',
            fontSize: '9px',

        }
        
        const imgStyle = {

            marginLeft : '34px'
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
                    <Button onClick = {() => this.handleOpen()} style = {ModalButton}>
                            Click for more info
                    </Button>

                    {
                        this.state.isVisible ?
                        <div >
                            <Modal style = {customStyles} isOpen = {true}>

                                <img style = {imgStyle} alt = "pic" src = {this.props.person.picture.large}></img>
                                <p>First Name : {this.props.person.name.first}</p>
                                <p>Age : {this.props.person.dob.age}</p>
                                <p> Email : {this.props.person.email}</p>
                                <p>Phone : {this.props.person.phone} </p>


                                <Button onClick = {() => this.handleClose()} style = {closeButton} >
                                     Close 
                                </Button>

                            </Modal> 
                        </div>
                        : ''
                    } 
                    
                </Card>
            
            
        )
    }


}

export default CardComponent