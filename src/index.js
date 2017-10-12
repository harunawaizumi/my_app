import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Route, BrowserRouter} from 'react-router-dom'
import Blog001 from './blogs/001_blog'
import Blog002 from './blogs/002_blog'


const Root = () => (
    <MuiThemeProvider>
        <BrowserRouter>
            <div>
            <Route exact path='/' component={App}/>
            <Route path='/blog_001' component={Blog001}/>
            <Route path='/blog_002' component={Blog002}/>
            </div>
        </BrowserRouter>
    </MuiThemeProvider>
);


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
