import React from "react";
// function Person(){
//     // jsx
//       return(
//         <div>
//           <h1> Hey i am there </h1>
//         </div>
//     );
//  }

 let Person = (props) => {
    //  console.log(props)
    return(
        <div>
          <h1> Number: {Math.random()} </h1>
          <h3> Name: {props.name} and Age: {props.age} years</h3>
          <h4> Extra Info: {props.children}</h4>
        </div>
    );
 }

//  class Person extends Component{
//     // constructor(props){
//     //     super(props);
//     // }
//      render(){
//         //  console.log(this.props)
//          return(
//             <div>
//                 <h1> Number: {Math.random()} </h1>
//                 <h3> Name: {this.props.name} and Age: {this.props.age} years</h3>
//                 <h4> Extra Info: {this.props.children}</h4>
//             </div>
//          );
//      }
//  }
 export default Person