import React, { Component } from 'react'

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
  render() {
    return (
      <p>
        Instructions:
        <p>
          Using the Star Wars API build an application to browse People in the
          Star Wars Universe. * Create a UI that uses
          https://swapi.co/api/people
        </p>{' '}
        <ul>
          <li>Create a UI that uses https://swapi.co/api/people</li>
          <li>
            Using the "next" and "previous" fields allow a user to click Next
            and Previous buttons to see more characters
          </li>
          <li>Start with a UL/LI experience.</li>
          <li>Translate the UL/LI to a Flexbox with a Card based display.</li>
          <li>Style the UI with Basic information</li>
          <li>
            Extra
            <ul>
              <li>
                Create a modal or separate page that displays a full character's
                bio
              </li>
              <li>Add additional styling to the Card UX</li>
            </ul>
          </li>
        </ul>
      </p>
    )
  }
}
