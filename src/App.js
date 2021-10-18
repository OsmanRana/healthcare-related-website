import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Doctors from './components/Doctors/Doctors';
import Home from './components/Home/Home';
import LogIn from './components/Login/LogIn';
import Header from './components/Shared/Header';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Register from './components/Register/Register';
import AuthProvider from './authProvider/AuthProvider';

function App() {
  return (
    <div className="App">
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
          <Route path='/doctors'>
            <Doctors></Doctors>
          </Route>
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
  );
}

export default App;
