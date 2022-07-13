import * as actionTypes from './actionTypes';
import { baseURL } from './baseURL';
import axios from 'axios';

export const addComment = (dishId, author, rating, comment) => ({
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: author,
            rating: rating,
            comment: comment
          }
    })

export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING,
})

export const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

export const fetchComments = () => dispatch => {
    dispatch(commentLoading());

//    setTimeout(() => {dispatch(loadDishes(DISHES))
// },2000);
axios.get(baseURL + "comments")
.then(response => response.data)
.then(comments => dispatch(loadComments(comments)))
}


export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes

})    
export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING

})

export const fetchDishes = () => dispatch => {
        dispatch(dishesLoading());

    //    setTimeout(() => {dispatch(loadDishes(DISHES))
    // },2000);
    axios.get(baseURL + "dishes")
    .then(response => response.data)
    .then(dishes => dispatch(loadDishes(dishes)))
  }