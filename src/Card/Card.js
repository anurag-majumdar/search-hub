import React from 'react';
import './Card.css';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

export const UserCard = (props) => {
    return (
        <div>
            <Card className="User-Card">
                <CardMedia
                    className="Media"
                    image={props.avatar_url}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.login}
                    </Typography>
                    <Typography component="p">
                        {props.bio}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href={props.html_url} size="small" color="primary">
                        Visit Profile
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}