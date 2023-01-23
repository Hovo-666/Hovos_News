import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
      const url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=0a8ca7df693a4e12aa773022bd2fbdea&page=1&pageSize=20";
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults }); 
  }

  handlePrevClick = async ()=>{
    console.log("Prev Button")
    const url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=0a8ca7df693a4e12aa773022bd2fbdea&page=${this.state.page-1}&pageSize=20`;
    const data = await fetch(url);
    const parsedData = await data.json();
    
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  handleNextClick = async ()=>{
    console.log("Next button")
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20))
    {}
    else
    {
      const url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=0a8ca7df693a4e12aa773022bd2fbdea&page=${this.state.page+1}&pageSize=20`;
      const data = await fetch(url);
      const parsedData = await data.json();
      console.log(parsedData);
      this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })}
  }

  render() {
    return (
      <div className="container my-3 ">
        <h2>JustNews - Top Headline</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-1" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark mx-1" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
