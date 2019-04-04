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

    return (
      <div>
        <div className='drink-modal'>
          <Modal open={this.state.open} onClose={this.onCloseModal} center style={{ color: 'black' }}>
            <h1 className='drink-modal center fw1 b underline'>{strDrink}</h1>
            <h3 className='drink-modal fw1'>Ingredients:</h3>
            <ul className='drink-modal fw0'>
            {ingredients && ingredients.map(ingredient => {
              return(
                <div>
                  <li>{ingredient.strName} - {ingredient.strMeasure}</li>
                </div>
              )
            })}
            </ul>
            <h3 className='drink-modal fw1'>How to Make:</h3>
            {ingredients && ingredients.map(ingredient => {
              return (
                <p className='drink-modal fw1'>{ingredient.strIngredient}</p>
                )
            })}
            <button className='modal fw1 center'>Add to Amazon Shopping Cart</button>
          </Modal>
        </div>
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
                
                drinkname={drink.strDrink}
                
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