import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscriber: true}

  onSub = () => {
    this.setState(prevState => ({isSubscriber: !prevState.isSubscriber}))
  }

  render() {
    const {isSubscriber} = this.state

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>

        {isSubscriber ? (
          <button className="button" onClick={this.onSub}>
            Subscribe
          </button>
        ) : (
          <button className="button" onClick={this.onSub}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
