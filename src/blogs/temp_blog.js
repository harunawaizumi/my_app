import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {styles} from './styles'

const Temp_Blog = () => (
    <Card>
        <CardHeader
            actAsExpander={true}
            showExpandableButton={true}
            mediastyle={styles.mediaStyle}
        />
        <CardMedia
            overlay={<CardTitle
                title="Overlay title"
                subtitle="Overlay subtitle"
                overlaystyle={styles.title}
            />}
        >
            <img src="http://lorempixel.com/600/600/" alt="" style={styles.mainImage} />
        </CardMedia>
        <CardText expandable={true} style={styles.contentsWrapper}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
    </Card>
);

export default Temp_Blog
