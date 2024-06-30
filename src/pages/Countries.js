import React, { useState } from "react";
import dataCountries from "../components/datavignette/countryEvignette";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const Countries = () => {
  const [dataVignette, setDataVignette] = useState(dataCountries);
  //console.log(dataVignette);
  const [detailV, setDetailV] = useState();

  const handleDetailVignete = (item) => {
    setDetailV(item);
    localStorage.setItem("item", JSON.stringify(item));
    console.log(item);
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemV = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <m.div
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
      class="text-center lg:text-2xl md:text-xl lg:mt-40 mt-56 font-MontserratVariableFont flex flex-wrap justify-center"
    >
      {dataVignette.map((item) => (
        <m.ul variants={itemV} key={item.id}>
          <div class="p-3 ">
            <div class="bg-white shadow-md border border-blue-400 h-1/6 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-lg" src={item.card} alt="" />
              <div class="p-5">
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  <p class="font-thin">Digital vignette:</p> {item.country}
                </h5>
                <p class="font-MontserratExtraLight text-sm text-gray-700 mb-3 dark:text-gray-400 text-justify">
                  {item.description}
                </p>
                <div class=" flex flex-col items-center justify-center">
                  <Link to="/PriceVignette">
                    <button
                      type="submit"
                      data={dataVignette}
                      onClick={() => handleDetailVignete(item)}
                      class="mx-auto bg-gradient-to-b from-blue-900 to-blue-300 bg-blue-900 text-white w-30 h-20 hover:bg-white font-bold py-2 px-4 mt-3 rounded items-center"
                    >
                      <img
                        src={item.flag}
                        alt="eu flag"
                        class="w-10 ml-auto mr-auto"
                      ></img>
                      Buy vignette
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </m.ul>
      ))}
    </m.div>
  );
};
export default Countries;
