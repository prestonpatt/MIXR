import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import SearchForm from './components/SearchForm/SearchForm';
import './App.css';
import CardList from './components/CardList/CardList';
import Scroll from './components/Scroll/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      drinks: [],
      inputValue: '',
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

  componentDidMount() {
    fetch('http://localhost:3000/api/drinks?limit=50')
    .then(res => res.json())
    .then(result => {
      this.setState({
        drinks: result
      })
    })
  }
  
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email
      }
    })
  }

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  onButtonSubmit = () => {
    const searchedText = this.state.inputValue
    fetch('http://localhost:3000/api/drinks?limit=20&find=' + searchedText)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            drinks: result
          })
        })
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  render() {

    const { isSignedIn, route, drinks } = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home'
          ? <div>
            <Logo />
            <SearchForm onButtonSubmit={this.onButtonSubmit} onInputChange={this.onInputChange} />
            <Scroll>
              <CardList drinks={drinks} />
            </Scroll>
          </div>
          : (
            route === 'signin'
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;