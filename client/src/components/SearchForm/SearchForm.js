import React from 'react';
import './SearchForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3 sega'>
        {'Search for your favorite type of liquor'}
      </p>
      <div className='center'>
        <div className='ba form center pa4 br3 shadow-5'>
          <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='text' onChange={onInputChange}/>
          <button
            className='sega fw3 w-30 grow f4 link ph3 pv2 dib cyan bg-black'
            onClick={onButtonSubmit}>
          Search</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;

//figure out styling for search button
//want it to not have white border around it

//also want the input field border to be slightly thicker