import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import LogIn from './components/Login/LogIn';
import Header from './components/Shared/Header';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Register from './components/Register/Register';
import AuthProvider from './authProvider/AuthProvider';
import Footer from './components/Shared/Footer';
import Experience from './components/Doctors/Experience';
import Doctors from './components/Doctors/Doctors';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="page-container App">
      <div className="content-wrap">
        <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <PrivateRoute path='/doctors'>
                <Doctors></Doctors>
              </PrivateRoute>
             <PrivateRoute path='/doctorsdetail/:doctorId'>
               <Experience></Experience>
              </PrivateRoute>
              <Route path='/login'>
                <LogIn></LogIn>
              </Route>
              <Route path='/register'>
                <Register></Register>
              </Route>
              <Route path="*">
                <PageNotFound></PageNotFound>
              </Route>
            </Switch>
          </Router>
        </AuthProvider>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
