import React from "react";

const project = [
  {
    project: "1",
    projectType: "Flutter",
    projectName: "FoodLog",
    projectDesc:
      "A Flutter app for you to create, update & delete record of data & browse data",
    projectLink:
      "https://www.figma.com/proto/u2ruwm0z4nt4uz3nPuPfJ6/Food-Log?page-id=0%3A1&node-id=7%3A16&viewport=-3498%2C3360%2C0.7995139956474304&scaling=scale-down",
  },
  {
    project: "2",
    projectType: "React",
    projectName: "AJ Sneakers",
    projectDesc:
      "A simple single page web application with display of shoe content",
    projectLink: "https://aj-sneakers-jetyee.netlify.app/",
  },
  {
    project: "3",
    projectType: "React",
    projectName: "Random Thrift Store",
    projectDesc: "E-commerce web application with simple add to cart function",
    projectLink: "https://random-thrift-store-jetyee.netlify.app/",
  },
  {
    project: "4",
    projectType: "React Native",
    projectName: "FoodLog",
    projectDesc:
      "Simple React Native app for you to create and delete record of data",
    projectLink:
      "https://www.figma.com/proto/CbXFGEit1rGKAHkFvKMpJD/FoodLog-React-Native-app?page-id=0%3A1&node-id=7%3A16&viewport=-1263%2C1508%2C0.31603381037712097&scaling=scale-down",
  },
];

export default function Project() {
  return (
    <div>
      <div className="font">
        <p className="text-lg text-indigo-600 font-bold flex justify-center my-12">
          Portfolio
        </p>
      </div>
      <div className="justify-self-center justify-items-center  grid-flow-row  my-12 grid lg:grid-cols-2 gap-y-8 gap-x-1  md:grid-cols-2 sm:grid-cols-1  sm:mx-1 md:mx-4 lg:mx-8">
        {project.map((item, index) => (
          <div
            className=" w-3/4 h-7/12 mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl sm:max-h-2xl"
            key={index}
          >
            <div className="px-12 pt-8 pb-5">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold flex justify-center">
                {item.project}
              </div>

              <p className="mt-2 text-lg font-medium flex justify-center">
                {item.projectType}
              </p>
              <p className=" text-sm flex justify-center">{item.projectName}</p>
              <p className="text-sm flex justify-center  mb-2 text-gray-500  mx-auto text-center py-2">
                {item.projectDesc}
              </p>
              <a
                href={item.projectLink}
                className="py-2 text-base leading-tight text-indigo-500 hover:underline flex justify-center animate-bounce "
                target="_blank"
                rel="noreferrer"
              >
                demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
