import React, { useState } from "react";
import dataV from "../components/datavignette/countryEvignette";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const BuyVignette = () => {
  const [data, setData] = useState(dataV);
  const [detailV, setDetailV] = useState();

  const handleDetailVignete = (item) => {
    setDetailV(item);
    localStorage.setItem("item", JSON.stringify(item));
    //console.log(item);
  };

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      class="text-center lg:text-xl md:text-xl lg:mt-40 mt-56 font-MontserratVariableFont justify-center"
    >
      {dataV.map((item) => (
        <ul key={item.id}>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <table class="border-separate border-spacing-2 border border-slate-400 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                <tr>
                  <th scope="col" class="px-6 py-3 w-40 bg-white"></th>
                  <th scope="col" class="px-6 py-3 w-40 bg-white"></th>
                  <th scope="col" class="px-6 py-3 w-40 bg-white"></th>
                  <th scope="col" class="px-6 py-3 w-40 bg-white"></th>
                  <th scope="col" class="px-6 py-3 w-40 bg-white"></th>
                </tr>
              </thead>
              <tbody class="text-xl">
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.country}
                  </th>
                  <td class="px-6 py-4 ">
                    <img
                      src={item.flag}
                      alt="eu_flag"
                      class="w-10 items-stretch"
                    ></img>
                  </td>
                  <td class="px-6 py-4 text-center  ">from 7 day...</td>
                  <td class="px-6 py-4 text-center  ">{item.priceFor7Day} €</td>
                  <td class="px-6 py-4 text-center ">
                    <div class="items-center">
                      <Link to="/PriceVignette">
                        <button
                          type="submit"
                          data={data}
                          onClick={() => handleDetailVignete(item)}
                          class="mx-auto bg-gradient-to-b from-blue-900 to-blue-300 bg-blue-900 text-white w-30 hover:bg-white py-2 px-4 mt-3 rounded"
                        >
                          Buy vignette
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ul>
      ))}
    </m.div>
  );
};
export default BuyVignette;
