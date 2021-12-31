import React from "react";
import "../stylesheets/Book.css";

let Book = props =>{
    // <h1> Extra Info: {props.children} </h1>
    // alada info dite hole props.children use korte hoi
    return(
        <div className="Book">
            <h1 onClick={props.delete}> BookName: {props.BookName} and Writer: {props.Writer} </h1>
            
            <input type="text" onChange={props.inputName} value={props.BookName}/>
        </div>
    )
}

export default Book