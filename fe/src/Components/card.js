import React, {Component, Fragment} from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class CardComponent extends Component{


    render(){

        const heading = {
            padding : '10px',
            width: '200px',
            height: '200px',
            marginLeft: '13px',
            marginRight: '10px'
        }

        return(
           
                <Card style = {heading} >
                    <CardActionArea>
                        <CardMedia
                        
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                    </CardActionArea>
                    <CardActions>
                       
                    </CardActions>
                </Card>
            
            
        )
    }


}

export default CardComponent