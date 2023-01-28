import React from "react";
import { data } from "../data";

const Portfolio = () => {
  return (
    <div className="w-full overflow-y-auto p-5">
      <div className="overflow-hidden">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7 dark:text-white">
          {data.portfolios.map((portfolio, i) => (
            <li
              key={i}
              className="box-shadow-custom rounded-2xl overflow-hidden bg-gray-300 dark:bg-[#242526]"
            >
              <div className="item">
                <a
                  href={portfolio.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    loading="lazy"
                    className="p-2 rounded-2xl"
                    src={portfolio.imageName}
                    alt="Todo"
                  ></img>
                </a>
                <div className="text-lg w-full font-medium p-2 text-center  !border-b !border-b-slate-600">
                  {portfolio.title}
                </div>

                <div className="m-2 rounded-3xl flex justify-center items-center bg-gray-400 dark:bg-[#303236] hover:bg-gray-200 dark:hover:bg-[#3d4045]">
                  <a
                    href={portfolio.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full p-3 text-center"
                  >
                    View
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
