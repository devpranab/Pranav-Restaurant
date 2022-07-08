import React, { Component } from 'react';
import {connect} from 'react-redux';

//Accessing Redux Store from Components
const mapStateToProps = state => {
    //console.log("mapStateToProps: ", state);
    return{
        dishes: state.dishes,
        comments: state.comments
    }
}

class Home extends Component {
    componentDidMount(){
        console.log("Home State", this.state);
        console.log("Home Props", this.props);
    }
    render(){
        document.title = "Pranav Restaurant";
        return (
            <div>
                
            </div>
        );
    }
};

export default connect (mapStateToProps) (Home);