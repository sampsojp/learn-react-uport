import React, { Component } from 'react'
import AttestButton from './AttestButton'

class Attest extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Verify Event Attendance with uPort</h1>
            <p>Check the uPort app on your mobile device for prompts to complete 
                the verification. One of the core needs of Web 3.0 is to build 
                trust in a self-sovereign world. We establish facts which are 
                not mathematically derived by social consensus. To create social 
                consensus, actors must attest to things being true. 
            </p>
            <p>
              <strong>Name</strong><br />
              {this.props.authData.name}
            </p>
            <p>
              <strong>Email</strong><br />
              {this.props.authData.email}
            </p>
            <p>
              <strong>Address</strong><br />
              {this.props.authData.address}
            </p>
            <p>
              <AttestButton />
            </p>
          </div>
        </div>
      </main>
    )
  }
}

export default Attest
