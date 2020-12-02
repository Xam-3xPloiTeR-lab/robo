import React, { Component } from 'react';
import Scroll from './components/scroll'
import Cards from './components/CardList';
import SearchBox from './components/Searchbox'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      robot: [],
      SearchValue: ''
     }
  }
  Onsearch = (event) =>{
    this.setState({SearchValue : event.target.value })
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({robot: users}))
  }
  render() { 
    const searched = this.state.robot.filter(robots =>{
    return robots.name.toLowerCase().includes(this.state.SearchValue.toLowerCase())
    }
    )
    return ( 
      <div className='tc'>
      <h1>Robo Friend</h1>
      <SearchBox Onsearch={this.Onsearch} />
      <Scroll>
      <Cards Robot={searched} />
      </Scroll>
      </div>
     );
  }
}
 
export default App;