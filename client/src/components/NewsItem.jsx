import React from 'react';
import Container from '@mui/material/Container';

const NewsItem = ({ title, description, url, urlToImage, i }) => {
  return (
    <div className="m-2 p-2 newsitem h-1/4"  key={i}>
            <div className="card">
                <img src={urlToImage} alt="NewsImage" />
                <h3>
                    <a href={url}>{title}</a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
  )
}

export default NewsItem