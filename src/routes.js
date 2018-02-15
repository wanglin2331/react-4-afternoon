import React, {Component} from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import {Route, Switch} from 'react-router-dom';
import Student from './components/Student/Student';

class Routes extends Component {
    render (){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/classlist/:class" component={ClassList}/>
                    <Route path="/student/:id" component={Student}/>
                </Switch>
            </div>
        )
    }
};

export default Routes;