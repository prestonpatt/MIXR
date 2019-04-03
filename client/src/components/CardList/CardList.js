import * as React from 'react';
import Card from '../Card/Card';
import Modal from 'react-responsive-modal';
import './CardList.css';

class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      drinkInModal: {}
    }
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { strDrink, ingredients } = this.state.drinkInModal
    // const filteredDrinks = this.state.drinks.filter(drinks => {
    //   console.log(filteredDrinks);
    // return drinks.strIngredient1.toLowerCase().includes(this.state.input.toLowerCase());
    // })
    return (
      <div>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <h1 className='modal fw1'>{strDrink}</h1>
          <h2>ingredients</h2>
          <ul className='modal fw1'>
          {ingredients && ingredients.map(ingredient => {
            return(
              <li>{ingredient.strName} - {ingredient.strMeasure}</li>
            )
          })}
          </ul>
          <button className='modal fw1 center'>Add to Amazon Shopping Cart</button>

        </Modal>
        {
          this.props.drinks.map((drink) => {
            return (
              <Card onClick={() => {
                this.setState({ open: true })
                fetch('http://localhost:3000/api/drinks/' + drink.id)
                .then(res => res.json())
                .then(result => {
                  this.setState({
                    drinkInModal: result
                  })
                })
              }}
                key={drink.id}
                // drinkname={this.onInputChange}
                drinkname={drink.strDrink}
                // liquortype={drinks[0][i].strCategory} 
                drinkThumb={drink.strDrinkThumb}
              />
            );
          })
        }
      </div>
    );
  }
}

export default CardList;