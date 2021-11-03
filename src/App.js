import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ManageTodo from './components/ManageTodo';
import ManagePost from './components/ManagePost';
import Error from './components/Error';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from './components/Carts/Cart';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header title="React JS" searchBar={false} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/todo"> 
            <ManageTodo />
          </Route>
          <Route exact path="/post"> 
            <ManagePost />
          </Route>
          <Route exact path="/cart"> 
            <Cart />
          </Route>

          <Route> 
            <Error />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
