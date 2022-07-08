import React, { Component } from 'react';
import DishDetail from './DishDetail';
import MenuItem from './MenuItem';
import {Modal, ModalBody, ModalFooter, Button, CardColumns} from 'reactstrap';
import {connect} from 'react-redux';

//Accessing Redux Store from Components
const mapStateToProps = state => {
    console.log("mapStateToProps: ", state);
    return{
        dishes: state.dishes,
        comments: state.comments
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

  // onDishSelect function start
onDishSelect = dish => {
    //console.log(dish);
    this.setState({selectedDish: dish});
    this.toggleModal();
}

// toggleModal function start
toggleModal = () => {
    this.setState({
        modalOpen: !this.state.modalOpen
    })
}

    render(){
        document.title = "Menu";

        //component list start
        const menu = this.props.dishes.map(item => {
            return(
                <MenuItem
                 dish={item} 
                 key={item.id}
                 DishSelect={() => this.onDishSelect(item)}/>
            )
        })
        //component list end

        // conditional rendering start
        let dishDetail = null;
        if(this.state.selectedDish != null){
            const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id
           )
            dishDetail = <DishDetail 
            dish={this.state.selectedDish}
            comments={comments}/>
        }
        // conditional rendering end
        return (
            <div className="container">
                <div className="row">
                    {/* <div className="col-6">
                         {menu}
                    </div>
                    <div className="col-6">
                         {dishDetail}
                    </div> */}
                    <CardColumns>
                        {menu}
                    </CardColumns>

                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                <ModalBody>
                    {dishDetail}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                </ModalFooter>
            </Modal>

                </div>
                
            </div>
        );
    } 
};

export default connect (mapStateToProps) (Menu);