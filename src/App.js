import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';



class App extends Component{
	constructor(){
		super();
		this.state = {
	            robots : [],
	            searchField:''
		}
	}

    componentDidMount(){
    	fetch('https://jsonplaceholder.typicode.com/users')
    	.then(response => response.json())
    	.then(users =>{
    		this.setState({robots:users})
    	})
    }
	onSearchChange = (event)=>{
		this.setState({searchField : event.target.value})
	}
	render(){
		const Field = this.state.robots.filter(value =>{
			return value.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		if (this.state.robots.length===0) {
			return <h1 className='f1 tc'> LOADING.....</h1>
		}else{
		      return(
		<div className='tc'>
		<h1 className='f1'>ROBO FRIENDS </h1>
		<SearchBox searchEvent={this.onSearchChange} />
		<Scroll>
         <CardList robots={Field}  />
         </Scroll>
		</div>
		);	
		}
       			
	}

}



export default App;