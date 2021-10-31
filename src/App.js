import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import NotFound from './Not-Found/NotFound';
import About from './Page/About/About';
import Products from './Page/AddProducts/AddProducts';
import Booking from './Page/Booking/Booking/Booking';
import Footer from './Page/Home/Footer/Footer';
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login/Login';
import PrivateRoute from './Page/Login/Login/PrivateRoute/PrivateRoute';
import ManageProduct from './Page/ManageProduct/ManageProduct';
import Header from './Page/Shared/Header/Header';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/booking/:productId">
                <Booking></Booking>
          </PrivateRoute>
          <Route path="/addProduct">
         <Products></Products>
          </Route>
          <Route path="/namageProduct">
         <ManageProduct></ManageProduct>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
