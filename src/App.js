import React from 'react';
import './App.css';
import Book from './components/book';
import {Component } from 'react';

// functional component
// function App() {
//   // jsx
//   // return (
//   //   <div className="App">
//   //     <h1> Hello world </h1>
//   //     <Person/>
//   //   </div>
//   // ); 
//   // React library
//   // return React.createElement('div', {className:"App"},
//   //  React.createElement('h1', null,'hello world'),<Person/>);
// }

// function Person(){
//   // jsx
//     return(
//       <div>
//         <h1> Hey i am there </h1>
//       </div>
//     ); 
//     // React library
//     // return React.createElement('div', null,
//     //  React.createElement('h1', null, 'Hey, I am there'));
// }

// class component
class App extends Component{
  // state
  // 16.8
  state={
    books :[
      {id:1, BookName:"The Love of beauty", Writer:"Goerge Orwell"},
      {id:2, BookName :"The secret of beauty", Writer:"Salman Khan"},
      {id:3, BookName :"The devil of beauty", Writer:"Shamim Khan"},
    ],
    // otherProp: " I am some other prop",
    showBooks: true
  }
  // changeBookName =newBookName=>{
  //       // console.log("Button clicked")
  //       // wrong method this.state.books[0].BookName="1974"
  //       this.setState({
  //         books :[
  //           {BookName:newBookName,  Writer:"biddut roy"},
  //           {BookName :"The secret of beauty", Writer:"Salman Khan"},
  //           {BookName :"odd to the nature", Writer:"Karim Khan"},
  //         ]
  //       });
  // }

  changeWithInputState= (event, index) => {

    const book={
      ...this.state.books[index]
    }

    book.BookName=event.target.value;
    const books = [...this.state.books];
    books[index]=book;
    this.setState({books:books})

    // this.setState({
    //   // books :[
    //   //   {BookName:event.target.value,  Writer:"biddut roy"},
    //   //   {BookName :"The secret of beauty", Writer:"Salman Khan"},
    //   //   {BookName :"odd to the nature", Writer:"Karim Khan"},
    //   // ]
    // });
  }
  // constructor(){
  //   super();
  //   this.state ={

  //   };
  // }
  deleteBookState = index =>{
    // const books = this.state.books.slice();
    // const books = this.state.books.map(item=>item);
    const books =[...this.state.books];
    books.splice(index, 1);
    this.setState({
        books: books
    });

  };

  toggleBooks =()=>{
        this.setState({showBooks: !this.state.showBooks});
  }

  render(){
    // let obj = new Component();
    // console.log(obj);
    // console.log(this.state);
    // const booksState = this.state.books
    let books=null;
    if(this.state.showBooks){
     books = this.state.books.map((book, index) => {
        // console.log(book.BookName)
        // console.log(book.Writer) 
        return (
            <Book
            BookName={book.BookName}
            Writer={book.Writer}
            delete ={()=>this.deleteBookState(index)}
            key={book.id}
            inputName={(event)=>this.changeWithInputState(event,index)}
            />
        );
    });
    }

    

    // console.log(booksState)
    console.log(books)
    const style={
      border:"1px solid red",
      borderRadius:"5px",
      background:"black",
      color:"white"
    }
    // arrow function use korle bind kete dite parbo
    return (
      <div className="App">
      <h1 style={style}> Book List</h1>
      <input onClick={this.toggleBooks}>Toggle Books</input>
      {books}
       
      </div>
    ); 
  }
}
// 
//         <button onClick={()=>this.changeBookName("world war two")}> Click me</button>
//         <input type="text" onChange={this.changeWithInputState}/>

// <Book  BookName={this.state.books[0].BookName}
//          Writer={this.state.books[0].Writer}
//           inputName={this.changeWithInputState}/>
          
//         <Book  BookName={this.state.books[1].BookName} 
//         Writer={this.state.books[1].Writer}/>
         
//         <Book BookName={this.state.books[2].BookName} 
//         Writer={this.state.books[2].Writer}
//          change={this.changeBookName.bind(this, "world war three")}/> 
        
        // <Book BookName="The Love of beauty" Writer="Goerge Orwell"> This is a beautiful book</Book>
        // <Book BookName="The secret of beauty" Writer="Salman Khan">This is a beautiful book</Book>
        // <Book BookName="The devil of beauty" Writer="Shamim Khan">This is a beautiful book</Book>
// person function info
//         <h1> Hello world </h1>
//         <Person name="shamim" age="30"> Hei, i am done </Person>
//         <Person name="kalam" age="35"> Hei, i am done </Person>
//         <Person name="salam" age="36"> Hei, i am done </Person>
//         <Person name="jamal" age="39"> Hei, i am done </Person>
//         <Person name="rahim" age="31"> Hei, i am done </Person>

export default App;
