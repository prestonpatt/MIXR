import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import SearchForm from './components/SearchForm/SearchForm';
import './App.css';
import CardList from './components/CardList/CardList';
import Scroll from './components/Scroll/Scroll';
import drinks from './drinks';

class App extends Component {
  constructor() {
    super();
    this.state = {
      drinks: drinks,
      onInputChange: '',
      onButtonSubmit: '',
      input: '',
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: ''
      }
    }
  }


  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email
    }})
  }

  onInputChange = (event) => {
    this.setState({
      onInputChange: event.target.value
    })
  }
  
  // onButtonSubmit = (event) => {
  //   this.setState({ onButtonSubmit: event.target.value })
  //   console.log('click');
  // }
  onButtonSubmit = (event) => {
    fetch('http://localhost:3000/api/:drinks')
    .then(res => res.json())
      .then(
        (result, req) => {
        this.setState({
          onButtonSubmit: result
        })
        // console.log(event)
      })
  }
  
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>
              <Logo />
              <SearchForm onButtonSubmit={this.onButtonSubmit} onInputChange={this.onInputChange}/>
              <Scroll>
                <CardList drinks={drinks} />
              </Scroll>
            </div>
          : (
             route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;