import React from 'react'

class Pet extends React.Component {
  constructor(){
    super()
    console.log("hello from constructor")
  }
  render() {
    // destructure the incoming prop object!
    const {
      name,
      type,
      age,
      weight,
      gender,
      isAdopted,
      id,
      toys
    } = this.props.pet

    const { onAdoptPet } = this.props

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {name}
            { gender === "female" ? ' ♀ ' : ' ♂ ' }
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
          <div>
            {toys.length > 0 ? toys.map(t => <p>{t.name}</p>) : "LOADING..."}
          </div>
        </div>
        <div className="extra content">
          {
            isAdopted ?
              <button className="ui disabled button">Already adopted</button>
            :
              <button onClick={()=>onAdoptPet(id)} className="ui primary button">Adopt pet</button>
          }


        </div>
      </div>
    )
  }
}

export default Pet
