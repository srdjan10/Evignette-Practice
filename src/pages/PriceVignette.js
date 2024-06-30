import React, { useEffect, useRef, useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import ModalPortal from "../components/ModalPortal";
import Card from "../components/Card";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion as m } from "framer-motion";
import emailjs from "@emailjs/browser";

export const PriceVignette = () => {
  const [item, setItems] = useState([]);
  const [date, setStartDate] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [stateV, setStateV] = useState();
  // I radio button
  const [checkCars, setCheckCars] = useState(true);
  const [checkCarsValue, setCheckCarsValue] = useState();
  const [checkMotorcycle, setCheckMotorcycle] = useState(true);
  const [checkMotorcycleValue, setCheckMotorcycleValue] = useState();
  const [checkTruck, setCheckTruck] = useState(true);
  const [checkTruckValue, setCheckTruckValue] = useState();
  const [checkCarsCampHouse, setCheckCarsCampHouse] = useState(true);
  const [checkCarsCampHouseValue, setCheckCarsCampHouseValue] = useState();
  const [licencePlate, setLicencePlate] = useState();
  const [modalOpen, setModalOpen] = useState(null);
  //
  //
  const [check7day, setCheck7day] = useState();
  const [check7dayT, setCheck7dayT] = useState(true);
  const [checkOneMonth, setCheckOneMonth] = useState();
  const [checkOneMonthT, setCheckOneMonthT] = useState(true);
  const [checkTwoMonth, setCheckTwoMonth] = useState();
  const [checkTwoMonthT, setCheckTwoMonthT] = useState(true);
  const [checkAnnual, setCheckAnnual] = useState();
  const [checkAnnualT, setCheckAnnualT] = useState(true);
  const [fName, setFname] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail] = useState();
  const [street, setStreet] = useState();
  const [countryV, setCountryV] = useState();
  const [emptyEmail, setEmptyEmail] = useState(false);

  const form = useRef();

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("item"));
    if (item) {
      setItems(item);
    }
  }, []);

  const handleValueChange = (newValue) => {
    setStartDate(newValue);
  };
  // I radio button
  const handleCarsCheck = () => {
    const checkCarsValue = item.vehicleType?.typeCars;
    setCheckCars(checkCars);
    setCheckCarsValue(checkCarsValue);
  };

  const handleMotorcycleCheck = () => {
    const checkMotorcycleValue = item.vehicleType?.typeMotor;
    setCheckMotorcycle(checkMotorcycle);
    setCheckMotorcycleValue(checkMotorcycleValue);
  };

  const handleTruckCheck = () => {
    const checkTruckValue = item.vehicleType?.typeTruck;
    setCheckTruckValue(checkTruckValue);
    setCheckTruck(checkTruck);
  };

  const handleCheckCarsCampHouseCheck = () => {
    const checkCarsCampHouseValue = item.vehicleType?.typeCarsCamp;
    setCheckCarsCampHouseValue(checkCarsCampHouseValue);
    setCheckCarsCampHouse(checkCarsCampHouse);
  };
  // I radio button
  //II radio button
  const handleCheck7day = () => {
    const check7day = item.priceFor7Day;
    setCheck7day(check7day);
    setCheck7dayT(check7dayT);
  };

  const handleCheckOneMonth = () => {
    const checkOneMonth = item.priceForOneMonth;
    setCheckOneMonth(checkOneMonth);
    setCheckOneMonthT(checkOneMonthT);
  };

  const handleCheckTwoMonth = () => {
    const checkTwoMonth = item.priceForTwoMonth;
    setCheckTwoMonth(checkTwoMonth);
    setCheckTwoMonthT(checkTwoMonthT);
  };

  const handleCheckAnnual = () => {
    const checkAnnual = item.priceForYear;
    setCheckAnnual(checkAnnual);
    setCheckAnnualT(checkAnnualT);
    console.log(checkAnnual, "Annual");
  };
  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(null);
  };

  //II radio button
  const handlePriceVignete = (e, value) => {
    e.preventDefault();

    const obj = {
      type:
        checkCarsValue ||
        checkMotorcycleValue ||
        checkTruckValue ||
        checkCarsCampHouseValue,
      price: check7day || checkOneMonth || checkTwoMonth || checkAnnual,
      date: date,
      endDate: dateEnd,
      licence: licencePlate,
      firstName: fName,
      lastName: lName,
      email: email,
      street: street,
      country: countryV,
      stateofVignette: stateV,
    };
    localStorage.setItem("value", JSON.stringify(obj));
    setEmail("");
    setFname("");
    setLName("");
    setStreet("");
    setCountryV("");
    setLicencePlate("");
    console.log(obj);

    //slanje povratnog emaila
    if (email) {
      setEmptyEmail(true);

      emailjs
        .sendForm(
          "service_o4khhsa",
          "template_2pbjlhs",
          form.current,
          "w7J_VYxupwF1nmLrS"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
            console.log("message not sent");
          }
        );
    }
  };

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      class="lg:text-xl md:text-xl lg:mt-40 mt-40 font-MontserratVariableFont"
    >
      <form onSubmit={handlePriceVignete} ref={form}>
        <h1 class="lg:text-3xl md:text-xl font-MontserratVariableFont justify-center text-center">
          Digital vignettes for
          <h1
            class="font-MontserratBold"
            name="namecountry"
            value={stateV}
            onChange={(e) => setStateV(e.target.value)}
          >
            {item.country}
          </h1>
          <p class="w-10 ml-auto mr-auto">
            {
              <img
                src={item.flag}
                alt="eu_flag"
                class="w-10 justify-center item-center"
              ></img>
            }
          </p>
        </h1>
        {/* type vehicle */}
        <h3 class="mr-0 lg:text-3xl md:text-xl lg:font-MontserratLight ">
          <h3 class="font-MontserratExtraLight text-center p-4">
            Vehicle Type
          </h3>
          <span class="grid grid-rows-1 gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {/* cars type */}
            <div class="dark:bg-black/10">
              <label class="text-white ml-28">
                <input
                  class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10"
                  value={checkCarsValue}
                  onChange={handleCarsCheck}
                  type="radio"
                  name="inlineRadioOptions1"
                  id="inlineRadio1"
                />
              </label>
              <span class="rounded-md flex justify-center items-center font-extrabold h-16 w-64 overflow-hidden relative z-100 border bg-gradient-to-b from-blue-900 to-blue-300 group px-8 py-2">
                <span class="relative z-10 text-white group-hover:text-white text-xl duration-500 ">
                  <FaCarSide />
                  {item.vehicleType?.typeCars}
                </span>
                <span class="absolute w-full h-full bg-gradient-to-b from-blue-900 to-blue-300 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                <span class="absolute w-full h-full bg-gradient-to-b from-blue-300 to-blue-900 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
              </span>
            </div>
            {/* cars type */}
            <div class="dark:bg-black/10">
              <label class="text-white ml-28">
                <input
                  class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10"
                  value={checkMotorcycleValue}
                  onChange={handleMotorcycleCheck}
                  type="radio"
                  name="inlineRadioOptions1"
                  id="inlineRadio1"
                />
              </label>
              <span class="rounded-md flex justify-center items-center font-extrabold h-16 w-64 overflow-hidden relative z-100 border bg-gradient-to-b from-blue-900 to-blue-300 group px-8 py-2">
                <span class="relative z-10 text-white group-hover:text-white text-xl duration-500 ">
                  <FaMotorcycle />
                  {item.vehicleType?.typeMotor}
                </span>
                <span class="absolute w-full h-full bg-gradient-to-b from-blue-900 to-blue-300 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                <span class="absolute w-full h-full bg-gradient-to-b from-blue-300 to-blue-900 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
              </span>
            </div>
            <div class="dark:bg-black/10">
              <label class="text-white ml-28">
                <input
                  class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10"
                  value={checkTruckValue}
                  onChange={handleTruckCheck}
                  type="radio"
                  name="inlineRadioOptions1"
                  id="inlineRadio1"
                />
              </label>
              <span class="rounded-md flex justify-center items-center font-extrabold h-16 w-64 overflow-hidden relative z-100 border bg-gradient-to-b from-blue-900 to-blue-300 group px-8 py-2">
                <span class="relative z-10 text-white group-hover:text-white text-xl duration-500 ">
                  <FaTruck />
                  {item.vehicleType?.typeTruck}
                </span>
                <span class="absolute w-full h-full bg-gradient-to-b from-blue-900 to-blue-300 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                <span class="absolute w-full h-full bg-gradient-to-b from-blue-300 to-blue-900 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
              </span>
            </div>
            <div class="dark:bg-black/10">
              <label class="text-white ml-28">
                <input
                  class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10"
                  value={checkCarsCampHouseValue}
                  onChange={handleCheckCarsCampHouseCheck}
                  type="radio"
                  name="inlineRadioOptions1"
                  id="inlineRadio1"
                />
              </label>
              <span class="rounded-md flex justify-center items-center font-extrabold h-16 w-64 overflow-hidden relative z-100 border bg-gradient-to-b from-blue-900 to-blue-300 group px-8 py-2">
                <span class="relative z-10 text-white group-hover:text-white text-xl duration-500 ">
                  <IoCarSport />
                  {item.vehicleType?.typeCarsCamp}
                </span>
                <span class="absolute w-full h-full bg-gradient-to-b from-blue-900 to-blue-300 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                <span class="absolute w-full h-full bg-gradient-to-b from-blue-300 to-blue-900 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
              </span>
            </div>
          </span>
        </h3>
        {/* type Choose Toll Products */}
        <h3 class="font-MontserratExtraLight text-center lg:text-3xl md:text-xl  p-8">
          Choose Toll Products
        </h3>
        <div className="grid grid-rows-1 gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
          <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]  text-center">
            <input
              class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value={check7day}
              onChange={handleCheck7day}
            />
            <label
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="inlineRadio1"
            >
              <p>Vignette for 7 day: {item.priceFor7Day}€</p>
            </label>
          </div>
          {
            // Second radio
          }
          <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem] text-center">
            <input
              class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value={checkOneMonth}
              onChange={handleCheckOneMonth}
            />
            <label
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="inlineRadio2"
            >
              <p>Vignette for One month: {item.priceForOneMonth}€</p>
            </label>
          </div>

          <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]  text-center">
            <input
              class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value={checkTwoMonth}
              onChange={handleCheckTwoMonth}
            />
            <label
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="inlineRadio1"
            >
              <p>Vignette for Two Month: {item.priceForTwoMonth}€</p>
            </label>
          </div>
          <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]  text-center">
            <input
              class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value={checkAnnual}
              onChange={handleCheckAnnual}
            />
            <label
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="inlineRadio1"
            >
              <p>Vignette for Annual: {item.priceForYear}€</p>
            </label>
          </div>
        </div>
        {/* type Choose starting date */}
        <h3 class="font-MontserratExtraLight text-center lg:text-2xl md:text-xl p-4">
          Chose starting date your vignette:
          <p class="mr-auto ml-auto">
            <DatePicker
              selected={date}
              onChange={(date) => setStartDate(date)}
              name="date"
            />
          </p>
        </h3>
        <h3 class="font-MontserratExtraLight text-center lg:text-2xl md:text-xl p-4 justify-center">
          Chose end date your vignette:
          <p>
            <DatePicker
              selected={dateEnd}
              onChange={(dateEnd) => setDateEnd(dateEnd)}
              name="dateEnd"
            />
          </p>
        </h3>
        {/* type Your License Plate*/}
        <h3 class="font-MontserratExtraLight text-center lg:text-3xl md:text-xl  p-8">
          Your License Plate
        </h3>
        <div class="">
          <input
            required
            name="licencePlate"
            value={licencePlate}
            onChange={(e) => setLicencePlate(e.target.value)}
            type="text"
            class="ml-auto mr-auto relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-blue-900 text-sm rounded-lg focus:ring-blue-900  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
            placeholder="Your License Plate"
          />
        </div>
        <hr class="w-60 h-1 mx-auto my-12 bg-blue-900 border-2 rounded-md:my-10 dark:bg-gray-700" />
        {/* type Order information */}
        <h3 class="lg:text-3xl md:text-3xl font-MontserratVariableFont justify-center text-center">
          Order information
        </h3>
        <hr class="w-60 h-1 mx-auto my-12 bg-blue-900 border-2 rounded-md:my-10 dark:bg-gray-700" />
        <h2 class="lg:text-xl md:text-xl font-MontserratVariableFont text-center">
          First name
        </h2>
        <input
          required
          name="firstName"
          value={fName}
          onChange={(e) => setFname(e.target.value)}
          type="text"
          class="ml-auto mr-auto relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-blue-900 text-sm rounded-lg focus:ring-blue-900  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
        ></input>
        <h2 class="lg:text-xl md:text-xl font-MontserratVariableFont text-center">
          Last name
        </h2>
        <input
          required
          name="lastName"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
          type="text"
          class="ml-auto mr-auto relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-blue-900 text-sm rounded-lg focus:ring-blue-900  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
        ></input>
        <h2 class="lg:text-xl md:text-xl font-MontserratVariableFont text-center">
          Email
        </h2>
        <input
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          class="ml-auto mr-auto relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-blue-900 text-sm rounded-lg focus:ring-blue-900  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
        ></input>
        <h2 class="lg:text-xl md:text-xl font-MontserratVariableFont text-center">
          Street
        </h2>
        <input
          required
          name="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          type="text"
          class="ml-auto mr-auto relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-blue-900 text-sm rounded-lg focus:ring-blue-900  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
        ></input>
        <h2 class="lg:text-xl md:text-xl font-MontserratVariableFont text-center">
          Country
        </h2>
        <input
          required
          name="country"
          value={countryV}
          onChange={(e) => setCountryV(e.target.value)}
          type="text"
          class="ml-auto mr-auto relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-blue-900 text-sm rounded-lg focus:ring-blue-900  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 "
        ></input>
        <div class="lg:text-xl md:text-xl font-MontserratVariableFont text-center p-7">
          <p>Input Card number and CVV number</p>
          <Card />
        </div>
        <button
          type="submit"
          onClick={handleOpen}
          disabled={!email && !fName && !lName && !countryV && !street}
          class=" mr-auto ml-auto rounded-md flex justify-center items-center font-extrabold h-16 w-64 focus:outline-none focus:ring focus:ring-red-900  cursor-pointer  overflow-hidden relative z-100 border bg-gradient-to-b from-blue-900 to-blue-300 group px-8 py-2"
        >
          <span class="relative z-10 text-white group-hover:text-white text-xl duration-500 ">
            <h1>ORDER NOW</h1>
          </span>
          <span class="absolute w-full h-full bg-gradient-to-b from-blue-900 to-blue-300 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
          <span class="absolute w-full h-full bg-gradient-to-b from-blue-300 to-blue-900 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
        </button>

        <ModalPortal
          isOpen={
            modalOpen ? !email && !fName && !lName && !countryV && !street : ""
          }
          onClose={handleClose}
        >
          <h2>Vignette is sent on your email. Thanks for buy.</h2>
        </ModalPortal>
      </form>
    </m.div>
  );
};
