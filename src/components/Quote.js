import React from "react";
import "../index.css";

export default function Quote() {
  const [quote, setQuote] = React.useState("");
  const [author, setAuthor] = React.useState("");

  React.useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data.content) || setAuthor(data.author));
  }, []);

  function updateQuote() {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data.content) || setAuthor(data.author));
  }

  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  document.body.style.background = `linear-gradient(120deg, rgb(${red},${green},${blue}), rgb(${blue},${green},${red}))`;

  let baseColorStyle = {
    color: `rgb(${red}, ${green}, ${blue})`,
  };
  let backgroundColorStyle = {
    background: `linear-gradient(120deg, rgb(${red},${green},${blue}), rgb(${blue},${green},${red}))`,
  };

  return (
    <div style={baseColorStyle}>
      <q id="text">{quote}</q>
      <p id="author">- {author}</p>
      <hr />
      <div id="buttonsDiv">
        <button style={backgroundColorStyle}>
          <a
            className="twitter-share-button"
            id="tweet-quote"
            target="_blank"
            style={{ color: "#f6f6f6" }}
            href="https://twitter.com/intent/tweet?text=Hello%20world"
          >
            Tweet
          </a>
        </button>
        <button style={backgroundColorStyle}>Facebook</button>
        <button
          style={backgroundColorStyle}
          id="new-quote"
          onClick={updateQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
