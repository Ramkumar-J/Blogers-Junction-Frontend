import React from 'react';

function BlogCard() {
  return (
    <div className='card'>
      <div className='card-top'>
        <img className='img-fluid' src="https://codebrainer.azureedge.net/images/what-is-html.jpg"/>
        <hr></hr>
        <div className='card-body'>
          <h1 className='card-title'>What is HTML?</h1>
          <p className="card-text">HTML - HyperText Markup Language</p>
          <p className="card-text">HTML is used to create a structure of a website</p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;