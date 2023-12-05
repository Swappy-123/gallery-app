// Write your code here.

import './index.css'
import {Component} from 'react'

class ThumbnailItem extends Component {
  renderThumbnails = () => {
    const {imagesList, clickId, selectImg} = this.props
    return imagesList.map(each => {
      const {id, thumbnailUrl, thumbnailAltText} = each
      const onClickThumb = () => {
        clickId(id)
      }
      const buttonName = id === selectImg ? 'select-btn' : 'btn'
      return (
        <li className={buttonName} onClick={onClickThumb} key={id}>
          <button>
            <img src={thumbnailUrl} alt={thumbnailAltText} className="img" />
          </button>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="con">
        <h1 className="head">Nature Photography</h1>
        <p className="para">Nature Photography by Rahul</p>
        <ul className="card">{this.renderThumbnails()}</ul>
      </div>
    )
  }
}

export default ThumbnailItem
