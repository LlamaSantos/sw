import React, { Component, Fragment } from 'react'
import css from './styles.css'
/*
Instructions:

Using the Star Wars API build an application to browse People in the Star Wars Universe.
* Create a UI that uses https://swapi.co/api/people
* Using the "next" and "previous" fields allow a user to click Next and Previous buttons to see more characters
* Start with a UL/LI experience.
* Translate the UL/LI to a Flexbox with a Card based display.
* Style the UI with Basic information
* Extra
  * Create a modal or separate page that displays a full character's bio
  * Add additional styling to the Card UX
*/

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  async componentDidMount() {
    const data = this.setState(
      Object.assign(
        await fetch('https://swapi.co/api/people').then(i => i.json()),
        { loading: false }
      )
    )
  }

  async next() {
    if (this.state) {
      const { next } = this.state
      this.setState({ loading: true })
      this.setState(
        Object.assign(await fetch(next).then(i => i.json()), { loading: false })
      )
    }
  }

  async previous() {
    if (this.state) {
      const { previous } = this.state
      this.setState({ loading: true })
      this.setState(
        Object.assign(await fetch(previous).then(i => i.json()), {
          loading: false
        })
      )
    }
  }

  render() {
    console.info('state', this.state)
    const { loading, results, previous, next } = this.state
    return (
      <Fragment>
        {loading ? <div className={css.loading}>Loading...</div> : ''}

        <div className={css.container}>
          <div className={css.cards}>
            {(results || []).map(i => (
              <div key={i.name} className={css.card}>
                <header className={css.cardHeader}>{i.name}</header>
              </div>
            ))}
          </div>
          <div className={css.footer}>
            <button disabled={!previous} onClick={this.previous.bind(this)}>
              Previous
            </button>
            <button disabled={!next} onClick={this.next.bind(this)}>
              Next
            </button>
          </div>
        </div>
      </Fragment>
    )
  }
}
