import React, { Component } from 'react'
import PropTypes from 'prop-types'



export default class NewsItem extends Component {


  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='container'>
        <div className="card" style={{width: "100%"}}>
        <img src={imageUrl} className="mh-50 card-img-top" alt="..." 
        style={{height: "20ch"}}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btm-sm btn-dark">Read More</a>
        </div>
</div>
      </div>
    )
  }
}
