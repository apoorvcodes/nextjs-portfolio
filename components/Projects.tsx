import React from "react";
import Image from "next/dist/client/image";
import logo from "../assets/min.png";

const Projects = () => {
  return (
    <div className="flex">
      <div className="pt-24 ">
        <div className="p-6 flex-col text-cream font-semibold ">
          <h1 className="text-5xl md:text-6xl pb-1 text-cream font-sora">
            PROJECTS<span className="text-prime">.</span>
          </h1>
          <div className="flex justify-center font-semibold w-72 md:w-96 h-2 bg-prime"></div>
          <section className=" text-gray-700 pt-24">
            <div className="flex justify-center flex-wrap ">
              <div className="flex flex-col border-r-8 border-prime items-center p-8 bg-white shadow-lg rounded mx-8 mb-8 flex-1  md:mb-0  md:w-1/3 sm:flex-initial">
                <Image
                  src={logo}
                  className="rounded-full pb-4"
                  width={125}
                  height={125}
                  alt=""
                />
                <h1 className="text-indigo-500 text-4xl my-4  ">Minima</h1>
                <p className=" text-justify px-8 mb-8 text-0.5xl">
                  Minima is a reliable and lightweight framework for Go to carve
                  the web.Developed with core net/http and other native
                  packages,and with 0 dependencies.
                </p>
              </div>
              <div className="flex flex-col justify-between mx-8 md:mx-0 md:w-1/4 ">
                <div className="flex flex-col bg-white rounded p-4 items-center shadow-lg border-r-8 border-prime mb-4 md:mb-auto">
                  <h2 className="font-bold   ">Akemi Bot</h2>
                  <p className="p-4  text-gray-600">
                    A discord bot written in nodejs and typescript with over
                    100k users and 70 servers
                  </p>
                  <div className="flex  justify-between ">
                    <div className="pill bg-gray-400 rounded-full px-4 text-xs mr-2  py-1">
                      #NodeJS
                    </div>
                    <div className="pill bg-gray-400 rounded-full px-4 text-xs mr-2  py-1">
                      #TypeScript
                    </div>
                  </div>
                </div>
                <div className="flex flex-col bg-white rounded p-4 items-center shadow-lg border-r-8 border-prime">
                  <h2 className="font-bold">Go-Requests</h2>
                  <p className="p-4 text-gray-600">
                    A data fetching libraray for fetching apis and scraping web
                    written in golang inspired from axios
                  </p>
                  <div className="flex justify-between ">
                    <div className="pill bg-gray-400 rounded-full text-xs px-4 py-1 mr-2">
                      #Golang
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
