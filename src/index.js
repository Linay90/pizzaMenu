 import React from "react";
 import ReactDOM from "react-dom/client" ;
 import "./index.css"

 const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
 

 function App(){
  return <div className="container">
    <Header/>
    <Menu/>
    <Footer/>
  </div>;

 }


 function Header(){
  return (
  <header className="header">
    <h1>Fast React Pizza Co. </h1>
  </header>
  
  )
 }
 function Menu(){
  return (
  <div className="menu"> 

<h2>Our Menu</h2>

<ul className="pizzas">
  {pizzaData.map((pizza)=>(
    <Pizza pizzaobj={pizza} key={pizza.name}/>
  ))}


</ul >


{/* <Pizza 
name ="Focaccia"
ingredients="Bread with italian olive oil and rosemary"
photoName="pizzas/focaccia.jpg"
price={10}
/>
<Pizza 
name="Pizza Margherita"
ingredients="Tomato and mozarella"
photoName="pizzas/margherita.jpg"
price={20}
/> */}

  </div>
  )

 };



 function Pizza(props){
  return(
  <li className="pizza ">
    <img src= {props.pizzaobj.photoName}alt={props.pizzaobj .name}/>
    <div>
    <h3>{props.pizzaobj.name}</h3>
    <p>{props.pizzaobj.ingredients}</p>
    <span>{props.pizzaobj.price}</span>

    </div>
  </li  >
   
  )
};

 function Footer(){
  

  return <footer className="footer"> 
     
    <button className="btn">Order</button>
    </footer>

 }


 


 

 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render (<React.StrictMode>
  <App/>   
 </React.StrictMode>) 