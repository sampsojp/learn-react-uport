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
            <h1>Verify Event Attendance</h1>
            <p>Request event attendance attestation using UPort.</p>
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
