import React from "react";

import "./App.css";

const App = () => {
  return (
    <div className="bg-gray-100 h-screen ">
      <div className="top">
        <img src="./images/fb.svg" alt="img logo" className="w-72 mx-auto" />
      </div>
      <div className="formDiv bg-white drop-shadow-lg mx-auto max-w-sm">
        <form className=" p-2 rounded-md">
          <div>
            <p className="text-2xl text-center font-bold">Create a new account</p>
            <p className="text-lg text-gray-500 text-center">It's quick and easy.</p>
            <hr />
          </div>
          <div>
            <input
              className="lg:lg:w-3/6 outline-orange-600  border p-2 mt-4 w-full"
              type={"text"}
              placeholder="First Name"
            />
            <input
              className="lg:lg:w-3/6  outline-orange-600  border p-2 mt-4 w-full "
              type={"text"}
              placeholder="SurName"
            />
            <input
              className=" border p-2 w-full mt-4 outline-orange-600"
              placeholder="Mobile number or email address"
              type="text"
            />
            <input
              className=" border p-2 w-full mt-4 mb-4 outline-orange-600"
              placeholder="New Password"
              type="password"
            />
            <label className="p-0">
              Date of birth
              <input className=" border outline-orange-600 p-2 w-full" type="date" />
            </label>

            <div className="flex items-center mt-4 pl-4 rounded border border-gray-200 dark:border-gray-700">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 outline-orange-600 bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 "
              />
              <label
                for="bordered-radio-1"
                className="py-4 ml-2 lg:w-2/5 w-2/5 outline-orange-600  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
             Male
              </label>
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 "
              />
              <label
                for="bordered-radio-1"
                className="py-4 ml-2 lg:w-2/5 w-2/5 outline-orange-600 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                FeMale
              </label>
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 "
              />
              <label
                for="bordered-radio-1"
                className="py-4 ml-2 lg:w-2/5 w-2/5 outline-orange-600 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
              Other
              </label>
            </div>
            <p className="mt-2 text-gray-500">
              People who use our service may have uploaded your contact
              information to Facebook. Learn more.
            </p>
            <p className="mt-2 mb-2 text-gray-500 ">
              By clicking Sign Up, you agree to our Terms, Privacy Policy and
              Cookies Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </p>
            <div className="mx-auto border flex items-center justify-center mt-4 font-bold">
              <button
                type="button"
                class="text-white bg-green-700  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-1/2"
              >
                Sign Up
              </button>
            </div>
            <p className="text-center mt-2 text-blue-700">Already have an account?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
