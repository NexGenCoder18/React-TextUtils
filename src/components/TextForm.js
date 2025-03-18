import React, { useState } from "react";

export default function TextForm(props) {
  const handleUprClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared", "danger");
  };

  const handleSpaceClick = () => {
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleCapitalizeClick = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Text capitalized", "success");
  };

  const handleReverseClick = () => {
    setText(text.split("").reverse().join(""));
    props.showAlert("Text reversed", "success");
  };

  const handleFindReplaceClick = () => {
    let findWord = prompt("Enter the word to find:");
    let replaceWord = prompt("Enter the word to replace it with:");
    if (findWord && replaceWord) {
      let newText = text.replaceAll(findWord, replaceWord);
      setText(newText);
      props.showAlert(
        `Replaced "${findWord}" with "${replaceWord}"`,
        "success"
      );
    }
  };

  const countVowelsConsonants = (str) => {
    let vowels = str.match(/[aeiouAEIOU]/g);
    let consonants = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g);
    return {
      vowels: vowels ? vowels.length : 0,
      consonants: consonants ? consonants.length : 0,
    };
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("");

  const { vowels, consonants } = countVowelsConsonants(text);

  return (
    <>
      <div className="container my-2">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#05073b" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            placeholder="Enter text here..."
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          />
          {/* 🎨 Random Colors for Buttons */}
          <button
            className="btn btn-primary my-3 mx-1"
            onClick={handleUprClick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-secondary my-3 mx-1"
            onClick={handleLowClick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-success my-3 mx-1"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
          <button
            className="btn btn-danger my-3 mx-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            className="btn btn-warning my-3 mx-1"
            onClick={handleSpaceClick}
          >
            Remove Extra Space
          </button>
          <button
            className="btn btn-info my-3 mx-1"
            onClick={handleCapitalizeClick}
          >
            Capitalize Words
          </button>
          <button
            className="btn btn-dark my-3 mx-1"
            onClick={handleReverseClick}
          >
            Reverse Text
          </button>
          <button
            className="btn btn-warning my-3 mx-1"
            onClick={handleFindReplaceClick}
          >
            Find & Replace
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((word) => word !== "").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          Vowels: {vowels}, Consonants: {consonants}
        </p>
      </div>
    </>
  );
}
