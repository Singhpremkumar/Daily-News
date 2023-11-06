import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
    super();
    this.state = {
      articles: [],
      loading:false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=0334f7ab66e54a1c9beba99bf11d4ed4";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
    console.log(parsedData)
  }

  render() {
    return (
      <div className="container my-3">
        <h1>Daily News Top-Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (<div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>)
          })}
        </div> 
      </div>
    )
  }
}

export default News
