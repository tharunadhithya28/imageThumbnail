import {Component} from 'react'

class ThumbnailItem extends Component {
  onClickThumbnail = () => {
    const {imageList, changeGalleryImage} = this.props
    const {id, thumbnailUrl} = imageList
    changeGalleryImage(id)
  }

  render() {
    const {imageList, thumbnailAltText, changeGalleryImage} = this.props

    const {id, thumbnailUrl} = imageList

    return (
      <li className="eachThumbnail">
        <img
          src={thumbnailUrl}
          onClick={this.onClickThumbnail}
          alt={thumbnailAltText}
        />
      </li>
    )
  }
}
export default ThumbnailItem
