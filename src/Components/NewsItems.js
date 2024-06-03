import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        {/* <div className="card" style={{width: "18rem"}}> */}
        <div className="card" style={{}}>
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-primary"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            src={
              !imageurl
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5f3VVEcmcnqry9DblQPZ6-DQfDIHXeOJqAg&s"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-test">
              <small className="text-muted">
                By {!author ? "Unkonown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className=" btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
