import React from 'react'
import { changeFilter } from '../actions/filters.js'
import { connect } from 'react-redux'

class Filters extends React.Component {

  render() {
    return (
      <div className="ui form">

        <h3>Animal type</h3>
        <div className="field">
          <select
            onChange={event => this.props.changeFilter(event.target.value)}
            name="type"
            id="type">
              <option value="all">All</option>
              <option value="cat">Cats</option>
              <option value="dog">Dogs</option>
              <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button
            className="ui secondary button"
            onClick={this.props.onFindPetsClick}
          >Find pets</button>
        </div>
      </div>
    )
  }
}


export default connect(null, { changeFilter })(Filters)
