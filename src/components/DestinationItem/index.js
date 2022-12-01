// Write your code here
import {Component} from 'react'
import './index.css'

class SearchItem extends Component {
  render() {
    const {destinationItem} = this.props
    const {imgUrl, name} = destinationItem
    return (
      <li className="image-cont">
        <img className="image" src={imgUrl} />
        <p>{name}</p>
      </li>
    )
  }
}

export default SearchItem
