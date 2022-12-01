// Write your code here
import {Component} from 'react'
import './App.js'
import './index.css'

const DestinationSearch = props => {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  const {destinationsList} = props
  return (
    <div className="Cont">
      <h1 className="heading">Destination Search</h1>
      <input value={searchInput} type="search" onChange="" />
      <ul className="searchItem-cont">
        {destinationsList.map(eachItem => (
          <searchItem destinationItem={eachItem} />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
