import React, { Component } from 'react';
import styles from '../styles'
import Blog001 from './001_blog'
import Blog002 from './002_blog'
import {Card, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui'


class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded1: false,
            expanded2: false,
        };
        this.handleExpand1 = this.handleExpand1.bind(this)
        this.handleExpand2 = this.handleExpand2.bind(this)
    }


    handleExpand1 () {
        console.log(this.state.expanded1)
        this.setState({ expanded1: !this.state.expanded1 })
    }
    handleExpand2 () {
        console.log(this.state.expanded2)
        this.setState({ expanded2: !this.state.expanded2 })
    }

    // onNumClick (value) {
    //     this.setState({
    //         numClicked: value
    //     })
    //     console.log('value', this.state.numClicked)
    // }



    render() {

        return (
            <div className="App-container">
                <h2 style={styles.headline}>Blogs</h2>
                <h3>
                    English & Japanese Daily Story
                </h3>
                <Card
                    style={this.state.expanded2 ? styles.OpenWrapper : styles.NotOpenWrapper}
                    onExpandChange={this.handleExpand2}
                >
                    <CardHeader
                        actAsExpander
                        showExpandableButton
                    />
                    <CardMedia
                        overlay={<CardTitle
                            title="Why we started Jimoto"
                            subtitle="tour provider platform"
                            style={styles.title}
                        />}
                    >

                        <img src={require('./../images/mystery-case.jpg')} alt=""/>

                    </CardMedia>
                    <CardText expandable={true}>
                        <Blog002/>
                    </CardText>
                </Card>
                <Card
                    style={this.state.expanded1 ? styles.OpenWrapper : styles.NotOpenWrapper}
                    onExpandChange={this.handleExpand1}
                >
                    <CardHeader
                        actAsExpander
                        showExpandableButton
                    />
                    <CardMedia
                        overlay={<CardTitle
                            title="Webpack"
                            subtitle="Let's learn webpack in a practical way"
                            style={styles.title}
                        />}
                    >
                        <img src={require('./../images/blog01_01.png')} alt=""/>


                    </CardMedia>
                    <CardText expandable style={{textAlign: 'left'}}>
                        <Blog001/>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default BlogList;
