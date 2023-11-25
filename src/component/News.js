import React, { useEffect , useState} from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
const [articles,setArticles] = useState([])
const [loading,setLoading]= useState(true)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // document.title = `${capitalizeFirstLetter(props.category)} - Daily News`;

 

  const updateNews = async()=> {
    props.setProgress(10);
    // old api https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0334f7ab66e54a1c9beba99bf11d4ed4&page=${page}&pageSize=${props.pageSize}
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=100c957d34f449d08d2de71a3a9e499b&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    console.log("hi")
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(60);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, [])
  

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=100c957d34f449d08d2de71a3a9e499b&page=${page}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

    return (
      <>
        <h1 className="text-center" style={{marginTop:'90px'}} >Daily News - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4>Loading...</h4>}>

          <div className="container">

            <div className="row">
              {articles.map((element) => {
                return (<div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 100) : ""}
                    imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>)
              })}
            </div>

          </div>

        </InfiniteScroll>
      </>
    )
  }

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'science',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
