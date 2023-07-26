// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  state = {count: 2000}

  onFifty = () => {
    this.setState(prev => ({count: prev.count - 50}))
  }

  onHundred = () => {
    this.setState(prev => ({count: prev.count - 100}))
  }

  onTwoHundred = () => {
    this.setState(prev => ({count: prev.count - 200}))
  }

  onFiveHundred = () => {
    this.setState(prev => ({count: prev.count - 500}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="con-1">
        <div className="con-2">
          <div className="con-3">
            <img
              className="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eo_circle_light-blue_white_letter-s.svg/32px-Eo_circle_light-blue_white_letter-s.svg.png"
            />
            <h1 className="name">Sarah Williams</h1>
            <div className="con-4">
              <p className="para-1">Your balance</p>
              <p className="balance">{count}</p>
            </div>
            <div className="col-5">
              <p className="rupees">In Rupees</p>
            </div>
            <div className="col-6">
              <p>Withdraw</p>
              <p>CHOOSE SUM (IN RUPEES)</p>
            </div>
            <div className="cont-7">
              <div className="items">
                <li>
                  <button
                    type="button"
                    className="button"
                    onClick={this.onFifty}
                  >
                    50
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="button"
                    onClick={this.onHundred}
                  >
                    100
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="button"
                    onClick={this.onTwoHundred}
                  >
                    200
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="button"
                    onClick={this.onFiveHundred}
                  >
                    500
                  </button>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DenominationItem
