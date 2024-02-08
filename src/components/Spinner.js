
import React, { Component } from 'react'
import loading from'../Assets/1484 (1).gif'


export default class Spinner extends Component {


  render() {
    return (
    <div className="d-flex align-items-center justify-content-center">
        <img src={loading} alt="loading" />
    </div>
    )
  }
}
