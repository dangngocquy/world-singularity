import './Tags_news.css';
import { Link, useLocation } from "react-router-dom";

function Tags_news() {
  const Data = [{
  title:'Vũ trụ',
},
{
  title:'Thiên văn học',
},
{
  title:'World Singularity',
},
{
  title:'Công nghệ',
},
{
  title:'Thế giới',
}]
  return (
  	<div className="Tags_news_h2_flex_all">
      <h2 className="Tags_news_h2_h2">Tags</h2>

      <div className="Tags_news_h2_flex_all_flex">
        {Data.map(({title}) => (
        <button className="Tags_news_button">{title}</button>
        ))}
      </div>
  	</div>
  );
}

export default Tags_news;
