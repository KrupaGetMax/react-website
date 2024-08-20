import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <>
      <div className=" py-12 dark:bg-slate-900">
        <div className="max-w-screen-md mx-auto text-center">
          <h1 className="mb-4 text-3xl font-bold dark:text-white">
            What is <span className="text-indigo-600">Webby</span>
          </h1>
          <p className="text-gray-500 dark:text-white">
            Webby is a PHP Framework built on top of Codeigniter 3 for easy PHP
            web application development using both HMVC and MVC patterns
          </p>
        </div>

        <div className="flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-10 mt-7 mb-8">
          <div className="relative md:w-5/12">
            <img
              className="rounded-2xl"
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8d2Vic2l0ZXxlbnwwfDB8fHwxNzIwMjI4OTA3fDA&ixlib=rb-4.0.3&q=80&w=1080"
            />
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h1 className="text-white mb-3 font-bold text-center uppercase lg:text-xl">
                Learn Webby
              </h1>
              <Link
                to="/learnwebby"
                className="w-full px-6 py-3 text-xs text-white transition duration-300 ease-in-out transform  border-2 rounded-full lg:text-md focus:outline-none hover:scale-110 font-medium"
              >
                Go to Docs
              </Link>
            </div>
          </div>

          <div className="relative md:w-5/12">
            <img
              className="rounded-2xl"
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxNZW50b3J8ZW58MHwwfHx8MTcyMDIyNzU1Nnww&ixlib=rb-4.0.3&q=80&w=1080"
            />
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h1 className="text-white mb-3 font-bold text-center uppercase lg:text-xl">
                Visit Website
              </h1>
              <Link
                to="/visitwebsite"
                className="w-full px-6 py-3 text-xs text-white transition duration-300 ease-in-out transform bg-indigo-500 border-indigo-400  border-2 rounded-full lg:text-md focus:outline-none hover:scale-110 font-medium"
              >
                Go to Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
