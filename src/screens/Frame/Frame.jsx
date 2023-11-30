import React from "react";
import { Github } from "../../icons/Github";
import { StyleOriginalRoundFalse1 } from "../../icons/StyleOriginalRoundFalse1";
import { StyleSolidRoundFalse1 } from "../../icons/StyleSolidRoundFalse1";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <StyleOriginalRoundFalse1 className="you-tube" color="black" />
          <Github className="style-original-round-false-2" />
          <StyleSolidRoundFalse1 className="twitter" color="black" />
          <p className="text-wrapper">Hello, welcome to my website!</p>
          <p className="hello-i-m">
            Hello! I’m CuteDog5695, I’m a beginner at Lua, HTML &amp; CSS. This website is still in WIP, so this is what
            it would look like for now.
          </p>
          <p className="this-website-is-open">
            <span className="span">This website is </span>
            <a href="https://github.com/CuteDog5695/cutedog5695.is-a.dev" rel="noopener noreferrer" target="_blank">
              <span className="text-wrapper-2">open source</span>
            </a>
            <span className="span">!</span>
          </p>
          <img className="main-pfp" alt="Main pfp" src="/img/main-pfp-1.png" />
        </div>
      </div>
    </div>
  );
};
