// Write your code here
import {Component} from 'react'
import '../../App'
import './index.css'
import '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    return (
      <div className="Cont">
        <h1 className="heading">Destination Search</h1>
        <input
          value={searchInput}
          type="search"
          onChange={this.onChangeSearch}
        />
        <ul className="searchItem-cont">
          {destinationsList.map(eachItem => (
            <SearchItem destinationItem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
