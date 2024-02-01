import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Heart from "react-animated-heart";
import loves from "./lovies.JPG";

import "./App.css";

function App() {
  const [isClick, setClick] = useState(false);
  const [x, setx] = useState(52);
  const [y, sety] = useState(55);
  const form = useRef();

  const body = document.querySelector("body");
  if (!body) {
    throw new ReferenceError("Body section not found.");
  }

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    body.appendChild(heart);
  }
  setInterval(createHeart, 1000);
  setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart");
    if (heartArr.length > 200) {
      heartArr[0].remove();
    }
  }, 100);

  /* code for moving button */
  const popUp = () => {
    alert(
      "LOL wow you really caught the button well i don't know i don't care. \nguess you have a couple weeks to find someone else!"
    );
  };

  const clickedYes = () => {
    alert(
      "LOL Its either you couldn't catch the no button or you really wanted to be my valentines date. Either way i got a notification of what you chose 😇"
    );
  };

  function mouseOver() {
    setx(Math.random() * 100);
    sety(Math.random() * 100);
  }

  var noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
  };

  var yesStyle = {
    left: "40%",
    top: "55%",
    position: "absolute",
  };

  /* code for email alert sent when she says yes */
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5zet8d6",
        "template_a091i86",
        form.current,
        "yhtcCM2ONNIH8VhGC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <p className="name">Andi</p>
      <div className="clickme">
        <p>&lt;--click for a surprise 😈</p>
      </div>
      <div className="heart">
        <a href={loves} download="lovies.JPG">
          <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        </a>
      </div>

      <p className="pre-valentine"> Will you be my</p>
      <p className="valentine">Valentine?</p>
      <form onSubmit={sendEmail} ref={form}>
        <button style={yesStyle} type="submit" onClick={clickedYes}>
          YES!
        </button>
      </form>
      <button onMouseOver={mouseOver} style={noStyle} onClick={popUp}>
        no
      </button>
    </>
  );
}

export default App;
