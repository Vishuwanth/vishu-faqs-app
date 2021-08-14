import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onExapand = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const {faqData} = this.props
    const {questionText, answerText} = faqData
    return (
      <li className="list-item-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="button" onClick={this.onExapand}>
            <img
              src={
                isActive
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
              }
              alt={isActive ? 'minus' : 'plus'}
              className="image"
            />
          </button>
        </div>
        {isActive ? (
          <div>
            <hr className="horizontal-line" />
            <p className="answer">{answerText}</p>
          </div>
        ) : null}
      </li>
    )
  }
}

export default FaqItem
