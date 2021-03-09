import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                    <p>Tech: {projects.skills}</p>
                  </div>
                </div>
              </a>
            </div>
            <div><p> {projects.title}: <a href={projects.url}>Deployed</a>||<a href={projects.deployed}>Github</a></p></div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works. <br/> Roll over image for description and techs </h1>


            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
