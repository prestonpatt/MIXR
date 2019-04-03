import React from 'react';
import './SearchForm.css';

const SearchForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3 sega'>
        {'Search for your favorite type of liquor'}
      </p>
      <div className='center'>
        <div className='ba form center pa4 br3 shadow-5 bw2'>
          <input id='modal searchBar' className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 bw1' type='text' 
          onChange={onInputChange}
          />
          <button
            className='sega fw1 w-30 grow f4 link ph3 pv2 dib bg-black bg-transparent b--black'
            onClick={onButtonSubmit}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;