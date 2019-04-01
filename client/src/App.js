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

  componentDidMount() {
    fetch('http://localhost:3000')
      .then(response => response.text())
      .then(console.log)
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email
    }})
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value})
  }
  
  onButtonSubmit = () => {
    this.setState({ onButtonSubmit: this.state.onInputChange })
    console.log('click');
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
    const filteredDrinks = this.state.drinks.filter(drinks => {
      console.log(filteredDrinks);
    return drinks.liquortype.toLowerCase().includes(this.state.input.toLowerCase());
    })
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>
              <Logo />
              <SearchForm onButtonSubmit={this.state.onButtonSubmit} onInputChange={this.onInputChange}/>
              <Scroll>
                <CardList drinks={filteredDrinks} />
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