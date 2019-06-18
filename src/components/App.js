import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: []
    }

  }


  // arrow function automatically binds `this`
  onFindPetsClick = () => {
    let url = "/api/pets"
    // if this.state.filters.type is not all....
    if (this.props.filters.type !== 'all') {
      // then adjust the url accordingly /api/pets?type=cat
      url += `?type=${this.props.filters.type}`
    }

    fetch(url)
      .then(r => r.json())
      .then(petsJSONArray => {
        this.setState({
          pets: petsJSONArray
        }, ()=> console.log(this.state.pets))
      })
  }

  onAdoptPet = (id) => {
    // pet.isAdopted = true // <-- not allowed!!!!!
    // what needs to happen here???
    // 1. we could find the index of the pet in this.state.pets and use `.slice()`
    // 2. we can make a copy of the pet, change its isAdpoted, then make of the array using `.map()` , and insert the changed pet in the right place, then replace the array
    // 3. we can make an entire of the this.state.pets, find the pet, then change its isAdopted property and then replace the whole array
    // let petsArrayCopy = this.state.pets.slice()

    // let petsArrayCopy = [...this.state.pets]
    // let thePet = petsArrayCopy.find(p => p.id === id )
    // thePet.isAdopted = true

    let petsArrayCopy = this.state.pets.map(p => {
      if (p.id === id) { p.isAdopted = true }
      return p
    })

    // last step: change this.state.pets to petsArrayCopy using `.setState()`
    this.setState({
      pets: petsArrayCopy
    })
  }

  render() {
    const nameObj = {name: "Howard"}
    return (
      <div className="ui container">

        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={this.onAdoptPet}
                pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  }
}
export default connect(mapStateToProps)(App)
