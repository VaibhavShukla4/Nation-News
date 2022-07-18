import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date,source } = props;
  return (
    <>
    <div className="my-3 mt-5">
      <div>
        <div className="card">
          <div
            style={{    
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
          </div>
      {/* <h5 className="card-header" > <span>{name}</span></h5> */}
      <span className="badge rounded-pill bg-light text-primary"> {source} </span>
          <img
            src={
              !imageUrl
                ? "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
          <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default NewsItem;
