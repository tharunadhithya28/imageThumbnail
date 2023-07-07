import {Component} from 'react'

class ThumbnailItem extends Component {
    const onClickThumbnail = () => {
      changeGalleryImage(id)
    }
  render() {
    const {imageList, changeGalleryImage} = this.props
    const {id, thumbnailUrl} = imageList
    

    return (
      <ul className="eachThumbnail">
        <img src={thumbnailUrl} onClick={onClickThumbnail} />
      </ul>
    )
  }
}
export default ThumbnailItem
