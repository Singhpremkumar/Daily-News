import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
   country: 'in',
   pageSize : 8,
   category: 'science',
  }
   
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
    constructor(){
    super();
    this.state = {
      articles: [],
      loading:false,
      category: 'science',
      page:1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0334f7ab66e54a1c9beba99bf11d4ed4&page=1pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults})
  }

  handlePrevClick= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0334f7ab66e54a1c9beba99bf11d4ed4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
    page:this.state.page - 1,
    articles: parsedData.articles
   })
  }


  handleNextClick= async()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0334f7ab66e54a1c9beba99bf11d4ed4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
    page:this.state.page + 1,
    articles: parsedData.articles
   })}
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Daily News Top-Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (<div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0,88):""} 
              imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>)
          })}
        </div> 
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
