import React from 'react';

const SearchBar = ({searchField, searchChange}) => {
	return (
			<div className='pa2'>
			<input className= 'pa3 ba b--green'
			type='search' 
			placeholder='search robots'
			onChange= {searchChange}
		 /> 
		
		</div>
	);
}

	export default SearchBar;