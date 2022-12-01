// Write your code here
import {Component} from 'react'
import "./index.css"

class searchItem extends Component{
     const {destinationItem}=props
     const {imgUrl,name}=destinationItem
    

    render(){
        return(
            <li className="image-cont">
              <img className="image" src={imgUrl}/>
              <p>{name}</p>

            </li>
        )
    }
}

export default searchItem