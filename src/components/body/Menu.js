import React, { Component } from 'react';
import DISHES from '../../data/dishes';
import DishDetail from './DishDetail';
import MenuItem from './MenuItem';

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }

    // onDishSelect function
    onDishSelect = dish => {
        //console.log(dish);
        this.setState({selectedDish: dish});
    }


    render(){
        //component list start
        const menu = this.state.dishes.map(item => {
            return(
                <MenuItem dish={item} key={item.id}
                DishSelect={() => this.onDishSelect(item)}/>
            )
        })
        //component list end

        // conditional rendering start
        let dishDetail = null;
        if(this.state.selectedDish != null){
            dishDetail = <DishDetail dish={this.state.selectedDish}/>
        }
        // conditional rendering end
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                         {menu}
                    </div>
                    <div className="col-6">
                         {dishDetail}
                    </div>

                </div>
                
            </div>
        );
    } 
};

export default Menu;