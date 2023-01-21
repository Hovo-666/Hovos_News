import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
    article = [
        {
          "source": { "id": "news-com-au", "name": "News.com.au" },
          "author": null,
          "title": "Steve Smith does it again, stuns cricket world",
          "description": "<p>Steve Smith has done it again.</p>",
          "url": "https://www.news.com.au/sport/cricket/absolute-clinic-steve-smith-smashes-another-brutal-century-in-bbl-derby/news-story/aae63fb9ca1e63c5586fddb083ca49e6",
          "urlToImage": "https://content.api.news/v3/images/bin/93e16617b78e30584315f5a3b67238e7",
          "publishedAt": "2023-01-21T10:13:00Z",
          "content": "Steve Smith has done it again.\r\nThe Australian Test No. 3 has reminded the cricket world he is just as handy in the shortest form of the game, smashing his second Big Bash century in a week. \r\nBattin… [+1533 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]
    constructor() {
        super();
        console.log("Hello const from News component")
        this.state = {
            article: this.article,
            loading: false,
        }
      }

  render() { 
    return (
      <div className="container my-3 ">
        <h2>JustNews - Top Headline</h2>
        <div className="row">
          <div className="col-md-4">
            <Newsitem title="mytitle" description="mydescription" imageUrl="..." newsUrl="todo" />
          </div>
          <div className="col-md-4">
            <Newsitem title="mytitle" description="mydescription"/>
          </div>
          <div className="col-md-4">
            <Newsitem title="mytitle" description="mydescription"/>
          </div>
        </div>
      </div>
    );
  }
}
