// Write your code here.

import './index.css'
import {Component} from 'react'

class EmojiCard extends Component {
  render() {
    const {emoji, onClickEmoji} = this.props
    const {emojiName, emojiUrl, id} = emoji

    const onclickEmojiItem = () => {
      onClickEmoji(id)
    }
    return (
      <button className="emoji-item" onClick={onclickEmojiItem}>
        <img key={id} src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    )
  }
}

export default EmojiCard
