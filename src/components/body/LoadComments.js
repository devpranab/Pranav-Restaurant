import React from "react";
import dateFormat from "dateformat";

const LoadComments = props => {
    return(
       props.comments.map(comment => {
           return(
               <div key={comment.id}>
                   <h5>{comment.author}</h5>
                   <p>{comment.comment}</p>
                   <p>Rating: {comment.rating}</p>
                   <span>{dateFormat(comment.date, "dddd, mmmm dS, yyyyy, h:MM:ss TT")}</span>
                   </div>
           )
       })
    )
}

export default LoadComments;