import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        return item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item;
      })
    );
  }

  function removeBook(book) {
    setCart(
      cart.filter((item) => item.id !== book.id)
    )
  }

  return (
    <Router>
      <div className="App">
        <Nav cart = {cart}/>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeBook={removeBook}/>
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// CODE FOR IF YOU WANTED TO ADD AS MANY BOOKS AS YOU WANT
{
  /*
  function addToCart(book) {
    const dupeItem = cart.find(item => +item.id === +book.id)
    if(dupeItem) {
      setCart(cart.map(item => {
        if (item.id === dupeItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        else {
          return item;
        }
      }))
    } 
    else {
      setCart([...cart, {...book, quantity: 1}]) //doing this so it adds a new book every time (increases the array without replacing it)
    }
  } 

  useEffect(() => {
    console.log(cart)
  },[cart])
*/
}
