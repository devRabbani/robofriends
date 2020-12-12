import React, { Component } from 'react'
import Cardlist from './Cardlist'
import Searchbox from './Searchbox'
import Scroll from './Scroll'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((usr) => this.setState({ robots: usr }))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredlist = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase())
    })
    if (this.state.robots == 0) {
      return <h1 className="tc">Please Wait Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <Searchbox props={this.onSearchChange} />
          <Scroll>
            <Cardlist robots={filteredlist} />
          </Scroll>
        </div>
      )
    }
  }
}

export default App
