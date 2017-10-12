import React, { Component } from 'react';
import styles from '../styles'
import {Avatar} from 'material-ui'

class AboutMe extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div className="App-container">
                <h1 style={styles.headline}>Who Are You ?</h1>
                <Avatar
                    src={require('./../images/me3.jpg')}
                    size={250}
                    style={styles.images}
                />
                <p>
                    This is another example of a controllable tab. Remember, if you
                    use controllable Tabs, you need to give all of your tabs values or else
                    you wont be able to select them.
                </p>
            </div>
        );
    }
}

export default AboutMe;