import React from 'react';

const SearchBox = ({searchEvent})=>{
	return(
      <div className='pa2'>
      <input className='pa3 ba b--green bg-lightest-blue' 
      type='search' 
      placeholder='Search Robots'
      onChange = {searchEvent}
       />
      </div>
		);
}







export default SearchBox;