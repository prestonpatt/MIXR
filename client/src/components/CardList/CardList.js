import * as React from 'react';
import Card from '../Card/Card';
import drinks from '../../drinks';
import Modal from 'react-responsive-modal';

class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
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

  // onInputChange = (event) => {
  //   console.log(event.target.value);
  //   this.setState({ input: event.target.value })
  // }
  
  onCloseModal = () => {
    this.setState({ open: false })
  }
  
  onButtonSubmit = (event) => {
    // this.setState({ onButtonSubmit: event.target.value })
    console.log(event);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/drinks')
    .then(res => res.json())
      .then(
        (result) => {
        this.setState({
          drinks: result
        })
        // console.log(result.text())
        console.log('this is the state???', result)
      })
  }
  // ({ onInputChange, onButtonSubmit, drinks }) => {

  render() {
    // const filteredDrinks = this.state.drinks.filter(drinks => {
    //   console.log(filteredDrinks);
    // return drinks.strIngredient1.toLowerCase().includes(this.state.input.toLowerCase());
    // })
    return (
      <div>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <h2 className='sega fw1'>Simple centered modal</h2>
        </Modal>
        {
          this.state.drinks.map((user, i) => {
            return (
              <Card onClick={() => {
                this.setState({ open: true })
              }
              }
                key={i}
                id={i}
                // drinkname={this.onInputChange}
                drinkname = {this.state.drinks[i].strDrink}
                // liquortype={drinks[0][i].strCategory} 
                drinkThumb={this.state.drinks[i].strDrinkThumb}
                />
            );
          })
        }
      </div>
    );
  }
}

export default CardList;

// Get the category for the drink where id = i