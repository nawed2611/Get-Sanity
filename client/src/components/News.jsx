import React, { useState, useEffect} from 'react';
import axios from 'axios';

import NewsItem from './NewsItem';


const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=8379f080896841f2a1514cbb3ca6fc4e`)

            setArticles(res.data.articles);
            console.log(res);
        }
        getArticles();
    }, []);

  return (
    <div className="newslist">
            {articles.map(({ title, description, url, urlToImage }) => (
                <NewsItem title={title}
                description={description}
                url={url} 
                urlToImage={urlToImage} />
            ))}
        </div>
  )
}


export default News