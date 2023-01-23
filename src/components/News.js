import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      const url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=0a8ca7df693a4e12aa773022bd2fbdea";
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({ articles: parsedData.articles });
    } catch (e) {
      console.log("something is not working");
    }
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
      </div>
    );
  }
}
