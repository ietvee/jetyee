import React from "react";
import Project from "./Project";
import Footer from "./../component/Footer";
import Nav from "./../component/Nav";

export default function Home() {
  return (
    <div>
      <div>
        <div className="h-screen flex items-center justify-center">
          <div className="">
            <Nav />
            <div className="typewriter">
              <p className="lg:text-3xl md:text-base sm:text-sm">
                Hello, I'm Jet Yee.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 divide-y divide-gray-300 mx-12">
        <p></p>
        <div>
          <p className="py-24 flex justify-center lg:w-80 md:w-56 sm:w-10 mx-auto text-center">
            This is a representation through my self-learning journey. I am
            always eager to learn and challenge myself.
          </p>
        </div>
        <p></p>
      </div>
      <div className="h-full flex flex-col">
        <Project />
        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}
