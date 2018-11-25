import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layout/Navbar'
import Landing from './component/layout/Landing'
import Footer from './component/layout/Footer'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Landing} />
          <div className='container'>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </div>
          <Footer />

        </div>
      </Router >
    );
  }
}

export default App;
