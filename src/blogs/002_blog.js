import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {styles} from './styles'

class Blog002 extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    // onExpand () {
    //     this.props.handleExpand()
    //     //this.props.numClicked(this.props.value)
    // }

    render (){
        console.log('expanded', this.state.expanded)
        return (
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </div>
        )
    }
}

// not expanded: card width 50%
// expanded: card width 100%
// photo should be downloaede not lorempixel because it takes time to load

export default Blog002
