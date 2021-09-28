import React, { useState, useEffect} from 'react';
import CardList from './CardList'; 
import SearchBar from './SearchBar';
import ErrorBoundry from './ErrorBoundry';
 
 
function App() {
					const [robots,setRobots] = useState([]);
					const [searchfield, setSearchfield] = useState('');
	

					//class App extends Component {
					//	constructor() {
					//		super()
					//		this.state = {
					//			robots: [], 
					//			searchfield:''
					//	}
					//}

						useEffect( ()=>{
											 fetch('https://jsonplaceholder.typicode.com/users')
												.then(respones=> respones.json())
												.then(users => {setRobots(users)});
										},)
															 		 //  componentDidMount() {
															// 	fetch('https://jsonplaceholder.typicode.com/users')
															// 		.then(respones=> respones.json())
															// 		.then(users => {this.setState({robots: users})}); 
															// }

		const onSearchChange = (event) =>  {
		 										setSearchfield(event.target.value);
											}
				// onSearchChange = (event) =>  {
				// this.setState({searchfield: event.target.value});
	

	// render() {
		const filteredRobots = robots.filter(robots => { 
			return robots.name.toLowerCase().includes(searchfield.toLowerCase()); 
		})
		if(robots.length === 0 ) {
			return <h1 className= 'tc'>LOADDDDDDING</h1>
		} else {
		return (
		<div className='tc'>
		<h1> RoboFriends </h1>
		<SearchBar searchChange={onSearchChange}/>
		<ErrorBoundry>
		<CardList robots={filteredRobots}/>
		</ErrorBoundry>
		</div>
		);
		}
	
}


export default App;