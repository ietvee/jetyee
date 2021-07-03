import React from "react";
import linkedin from "./../asset/linkedin.png";
import github from "./../asset/github.png";
import resume from "./../asset/resume.png";

function Footer() {
  return (
    <div className="h-12 my-8">
      <div className="flex content-center justify-center object-center mx-auto my-1">
        <a
          href="https://www.linkedin.com/in/jetyee/"
          className="m-1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>

        <a
          href="https://github.com/ietvee"
          className="m-1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="resume_jetyee" />
        </a>

        <a
          href="https://docs.google.com/document/d/1krnk0gErlSdIrBtqPpGoUbLFcddRuIJN4c-SSxs8JUE/edit?usp=sharing"
          className="m-1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={resume} alt="resume" />
        </a>
      </div>

      <div>
        <div className=" rounded-md text-sm flex content-center justify-center object-center mx-auto text-gray-300 ">
          © Jet Yee 2021
        </div>
      </div>
    </div>
  );
}

export default Footer;
