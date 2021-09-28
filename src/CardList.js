import React from 'react'; 
import Card from './Card';
 


const CardList  = ({robots}) => 
{
	//if(true) {
	//	throw new Error('sadsasfa');
	//}
	const CardsArray = robots.map((user, i) => {
		return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}> </Card>
	})
	return( 
		<div>
			{CardsArray}
		</div>

		)
}

export default CardList