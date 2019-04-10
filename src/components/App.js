import React from 'react'
import MyFunctionalComponent from './MyFunctionalComponent.js'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

    this.onChangeType = this.onChangeType.bind(this)
  }

// all, cats, dogs, and micropigs
  onChangeType(event){
    console.log(event.target.value)
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  render() {
    const nameObj = {name: "Howard"}
    return (
      <div className="ui container">
        <MyFunctionalComponent props={ nameObj }/>
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
