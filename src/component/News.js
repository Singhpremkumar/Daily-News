import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  name = [
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "By <a href=\"/profiles/kathleen-magramo\">Kathleen Magramo</a>, Christian Edwards, Ed Upright, <a href=\"/profiles/adrienne-vogt\">Adrienne Vogt</a>, <a href=\"/profiles/dakin-andone\">Dakin Andone</a>, <a href=\"/profiles/elise-hammond\">Elise Hammond</a>, <a href=\"/profiles/maureen-chowdhury\">Maureen Chowdhury</a> and <a href=\"/profiles/tori-powell\">Tori B. Powell</a>, CNN",
      "title": "November 1, 2023 Israel-Hamas war news - CNN",
      "description": "Crowds gathered at the Rafah crossing between Gaza and Egypt on Wednesday, as multiple sources told CNN that up to 500 foreign nationals could be allowed to flee the besieged enclave. Follow for live updates.",
      "url": "https://www.cnn.com/middleeast/live-news/israel-hamas-war-gaza-news-11-01-23/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/231031132310-01-jabalia-refugee-camp-blast-103123-super-tease.jpg",
      "publishedAt": "2023-11-02T04:24:21Z",
      "content": "An American pediatrician, who became stranded in Gaza at the beginning of the war while on a relief mission to treat children, was finally able to leave the territory Wednesday, her husband told CNN.… [+928 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Alden Gonzalez",
      "title": "Rangers take out D-backs for franchise's 1st World Series title - ESPN - ESPN",
      "description": "Two seasons after losing 102 games, the Rangers completed a remarkable turnaround Wednesday night by finishing off the Diamondbacks in five games to clinch their first World Series title.",
      "url": "https://www.espn.com/mlb/story/_/id/38797834/rangers-take-d-backs-franchise-1st-world-series-title",
      "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1102%2Fr1247264_1296x729_16%2D9.jpg",
      "publishedAt": "2023-11-02T04:01:00Z",
      "content": "PHOENIX -- The Texas Rangers spent seven months of this season terrorizing opponents with a menacing offense that feasted on home runs and hardly ever let up. The first night of November showcased th… [+4730 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "Jessica Moore",
      "title": "Cornell students shocked by arrest of fellow student Patrick Dai for antisemitic threats - CBS New York",
      "description": "An engineering student is facing federal charges, accused of promoting the murder of Jewish students.",
      "url": "https://www.cbsnews.com/newyork/news/cornell-students-shocked-by-arrest-of-fellow-student-patrick-dai-for-antisemitic-threats/",
      "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/11/01/f34285c2-5666-499c-bb00-88a7228ba152/thumbnail/1200x630/f3b1f7392ea2a38c31cce47e02b3b8f9/screengrab-00002.jpg?v=4d0a8a0e724da64f433bf70cf12725a2",
      "publishedAt": "2023-11-02T03:46:00Z",
      "content": "NEW YORK -- A Cornell University engineering student faced a federal judge Wednesday afternoon accused of promoting the murder of Jewish students on campus. \r\nFrom a student at the prestigious Cornel… [+3993 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Katelyn  Polantz",
      "title": "Judge signals she may postpone Trump’s trial in Mar-a-Lago classified documents case - CNN",
      "description": "The federal judge overseeing Donald Trump’s Mar-a-Lago document-mishandling case cast doubt on the viability of having a trial in May 2024, signaling she may postpone the criminal proceedings.",
      "url": "https://www.cnn.com/2023/11/01/politics/florida-hearing-trump-mar-a-lago-documents-trial/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230615161305-17-week-in-photos-061523.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-11-02T03:01:00Z",
      "content": "The federal judge overseeing Donald Trumps Mar-a-Lago document-mishandling case cast doubt on the viability having a trial in May 2024, signaling she may postpone the criminal proceedings.\r\nDuring a … [+3496 chars]"
    },
    {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": null,
      "title": "GOP senators push back but can't get past Tuberville on military blockade - POLITICO",
      "description": "Republican senators pushed to confirm more than 60 military nominees, but Tuberville blocked them all.",
      "url": "https://www.politico.com/news/2023/11/01/gop-senator-to-confront-tuberville-on-military-blockade-00124877",
      "urlToImage": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1155968404/a76e3a66-4b10-4b84-a0f8-ecf13ead1d3b/0fb5233d-1014-450c-981e-4fb3fdc2fa36/1280x720/match/image.jpg",
      "publishedAt": "2023-11-02T02:55:59Z",
      "content": "Sullivan, joined by Republican Sens. Joni Ernst of Iowa, Lindsey Graham of South Carolina, Todd Young of Indiana and Mitt Romney of Utah, requested votes on each senior officer by unanimous consent, … [+4763 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "SciTechDaily"
      },
      "author": null,
      "title": "Earth's Hidden Guests: Strange Blobs in Deep Mantle Are the Remains of an Ancient Planet - SciTechDaily",
      "description": "A Caltech-led study suggests that two massive, iron-rich structures deep within Earth's mantle are the remains of Theia, an ancient planet that collided with Earth, also creating the Moon. This discovery answers long-standing questions about the Moon's origin…",
      "url": "https://scitechdaily.com/earths-hidden-guests-strange-blobs-in-deep-mantle-are-the-remains-of-an-ancient-planet/",
      "urlToImage": "https://scitechdaily.com/images/LLVP-Deep-Earth-Mantle-Relics-Theian-Materials-scaled.jpg",
      "publishedAt": "2023-11-02T02:51:12Z",
      "content": "The large low velocity provinces (LLVPs) in the deep Earth mantle may be relics of Theian mantle materials. Credit:  Hongping Deng and Hangzhou Sphere Studio\r\nA Caltech-led study suggests that two ma… [+6891 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Joe Rossignol",
      "title": "M3 Max Chip Around as Fast as M2 Ultra in Early Benchmark Results - MacRumors",
      "description": "The first benchmark results for Apple's M3 Max chip surfaced in the Geekbench 6 database today, providing a look at CPU performance. Based on the...",
      "url": "https://www.macrumors.com/2023/11/01/m3-max-chip-benchmark-results/",
      "urlToImage": "https://images.macrumors.com/t/L-YRvWaN0zeMj7SCf_2i8d58YH4=/1600x/article-new/2023/11/M3-Max-Chip.jpg",
      "publishedAt": "2023-11-02T02:27:38Z",
      "content": "The first benchmark results for Apple's M3 Max chip surfaced in the Geekbench 6 database today, providing a look at CPU performance. Based on the \"Mac15,9\" model identifier shown, the results appear … [+2037 chars]"
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": "Richard Henderson",
      "title": "Stock Market Today: Dow, S&P Live Updates for November 2 - Bloomberg",
      "description": "Shares in Asia jumped tracking gains in US stocks and bonds after the Federal Reserve signaled its policy tightening cycle may be over.",
      "url": "https://www.bloomberg.com/news/articles/2023-11-01/stock-market-today-dow-s-p-live-updates",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHNHgkAhJ.rU/v0/1200x800.jpg",
      "publishedAt": "2023-11-02T02:14:27Z",
      "content": "Shares in Asia jumped tracking gains in US stocks and bonds after the Federal Reserve signaled its policy tightening cycle may be over.\r\nBenchmarks in Australia, Japan and South Korea rose, while Chi… [+241 chars]"
    },
  ]
  

  render() {
    return (
      <div className="container my-3">
        <h2>Daily News Top-Headlines</h2>
        <div className="row">
          {this.name.map((element) => {
            return (<div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} />
            </div>)
          })}
        </div> 
      </div>
    )
  }
}

export default News
