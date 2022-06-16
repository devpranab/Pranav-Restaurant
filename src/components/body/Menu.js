import React, { Component } from 'react';
import DISHES from '../../data/dishes';
import MenuItem from './MenuItem';

class Menu extends Component {
    state = {
        dishes: DISHES
    }
    render(){
        //component list start
        const menu = this.state.dishes.map(item => {
            return(
                <MenuItem dish={item} key={item.id}/>
            )
        })
        //component list end
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                         {menu}
                    </div>
                    <div className="col-6">
                         
                    </div>

                </div>
                
            </div>
        );
    } 
};

export default Menu;