import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Newsitem from './Newsitem'
import Spinner from './Spinner';
const News = (props) => {
    const location = useLocation();
    const {category} = props;
    const [loading, setLoading] = useState(false)
    const [news, setNews] = useState();
    const fetchNews = async (category)=>{
        setLoading(true)
        const url = `https://inshortsapi.vercel.app/news?category=${category}`;
        const response = await fetch(url, {
            method:'GET'
        })
        const data = await response.json();
        setNews(data.data);
        setLoading(false)
    }
    useEffect(()=>{
        fetchNews(category);
        //eslint-disable-next-line
    },[location])
  return (
      <>
      <div className="container d-flex my-2 justify-content-center">
        {loading && <Spinner/>}
        <div className="row" style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
          {!loading && news && news.map((news, index)=>{
              return <Newsitem key={index} news={news}/>
          })}
        </div>
        </div>
      </>
  )
}

export default News