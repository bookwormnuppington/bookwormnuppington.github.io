import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "holderjs";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const Banner = () => {
  return (
    <React.Fragment>
      <div className="banner">
        <div className="banner-content">
          <h1>BookWorm</h1>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Book title"
              aria-label="Book title"
              aria-describedby="basic-addon2"
            ></input>
          </div>
        </div>
        <div className="banner-content">
          <p>Selected book: Scott Pilgrim's Precious Little Life</p>
        </div>
      </div>
      <div
        className="container"
        style={{ flexDirection: "row", display: "flex", paddingTop: "50px" }}
      >
        <div
          className="alert alert-secondary"
          role="alert"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h4>Where to buy Scott Pilgrim's Precious Little Life</h4>
          <div
            class="card"
            style={{ width: "18rem", display: "flex", marginTop: "20px" }}
          >
            <div
              class="card-body"
              style={{
                display: "flex",
                alignContent: "center",
                flexDirection: "column",
              }}
            >
              <h5 class="card-title">Amazon</h5>
              <a
                href="https://www.amazon.ca/Scott-Pilgrim-Vol-Precious-Little/dp/1932664084"
                class="btn btn-primary"
              >
                $15.99
              </a>
            </div>
          </div>
          <div
            class="card"
            style={{
              display: "flex",
              width: "18rem",
              marginTop: "20px",
            }}
          >
            <div
              class="card-body"
              style={{
                display: "flex",
                alignContent: "center",
                flexDirection: "column",
              }}
            >
              <h5 class="card-title">Barnes and Noble</h5>
              <a
                href="https://www.barnesandnoble.com/w/scott-pilgrims-precious-little-life-volume-1-bryan-lee-omalley/1100836680"
                class="btn btn-primary"
              >
                $11.99
              </a>
            </div>
          </div>
          <h4 style={{ marginTop: "20px" }}>Digital versions</h4>
          <div
            class="card"
            style={{
              display: "flex",
              width: "18rem",
              marginTop: "20px",
            }}
          >
            <div
              class="card-body"
              style={{
                display: "flex",
                alignContent: "center",
                flexDirection: "column",
              }}
            >
              <h5 class="card-title">Google Play</h5>
              <a
                href="https://play.google.com/store/books/details?pcampaignid=books_read_action&id=XkELBAAAQBAJ&pli=1"
                class="btn btn-primary"
              >
                $9.99
              </a>
            </div>
          </div>
          <div
            class="card"
            style={{
              display: "flex",
              width: "18rem",
              marginTop: "20px",
            }}
          >
            <div
              class="card-body"
              style={{
                display: "flex",
                alignContent: "center",
                flexDirection: "column",
              }}
            >
              <h5 class="card-title">Internet Archive</h5>
              <a
                href="https://archive.org/details/scottpilgrimvolu0000omal/page/n1/mode/2up"
                class="btn btn-primary"
              >
                Free to borrow
              </a>
            </div>
          </div>
        </div>
        <div className="container-sm" style={{ width: "830px" }}>
          <Carousel fade className="carousel">
            <Carousel.Item>
              <div class="wrapper">
                <img
                  className="rounded mx-auto d-block scottpg firstslide"
                  src="https://kbimages1-a.akamaihd.net/3bc0d887-cca7-4188-8e21-6a9bad6fca91/1200/1200/False/scott-pilgrim-s-precious-little-life-volume-1-scott-pilgrim-book-1.jpg"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="wrapper">
                <img
                  className="rounded mx-auto d-block scottpg"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1465121821i/19316422.png"
                  alt="Second slide"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="wrapper">
                <img
                  className="rounded mx-auto d-block scottpg"
                  src="https://64.media.tumblr.com/2305a5230f85bec67f11cb5274dd3e96/3e44b8c9e1290720-2a/s640x960/469b278dcda82b9f9d26f7b65bdaed28038fc4db.png"
                  alt="Second slide"
                />
              </div>
            </Carousel.Item>
          </Carousel>
          <div
            className="alert alert-secondary"
            role="alert"
            style={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4>Scott Pilgrim's Precious Little Life</h4>
            <p>
              <span className="badge badge-secondary">PG</span> 2004, 13 - 16
              years min, 168 pages, 4/5 stars
            </p>
            <Box>
              {[...new Array(5)].map((arr, index) => {
                return index < 4 ? <StarIcon /> : <StarBorderIcon />;
              })}
            </Box>
          </div>
          Scott Pilgrim's Precious Little Life is a graphic novel by Bryan Lee
          O'Malley. It is about Scott Pilgrim, a 23 year old living with his
          roomate in a small apartment in Toronto, Canada. I really liked the
          videogame-y logic and scenes, and the art style and character design.
          The first time I read it, I missed alot of the details because alot of
          the story didn't make sense to me as I was expecting it to be more
          like other similar books. The fight scene was awesome, I liked how the
          person Scott fights explodes into coins. One thing I found weird is
          how when the book starts, Scott is dating a high schooler which I
          found pretty weird. They aren't really dating, but that doesn't make
          it much less weird. I would recommend this book to anyone who likes
          videogames and/or graphic novels.
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
