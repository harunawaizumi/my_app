import React, { Component } from 'react';

class Blog001 extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        //this.onExpand = this.onExpand.bind(this)
    }


    render (){
        return (
            <div>
                <a href="LINK" src={'https://qiita.com/Uuparu/private/a35af9838649822543fe'} >LINK</a>
            </div>
        )
    }
}



// not expanded: card width 50%
// expanded: card width 100%
// photo should be downloaede not lorempixel because it takes time to load

export default Blog001
