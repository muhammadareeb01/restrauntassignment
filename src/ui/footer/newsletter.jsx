import React from "react";
import "../../styles/footer.css";
function Newsletter() {
  return (
    <div className="text-white">
      <h3 className="text-xl font-bold mb-4">Join Our Newsletter</h3>
      <p className="text-sm mb-4">
        Lorem ipsum has been the industry's standard dummy text.
      </p>
      <form className="flex items-center">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full p-2 rounded-l-md text-black focus:outline-none"
        />

        <button className="bg-red-500 p-2 footer-btn rounded-r-md hover:bg-red-600 transition-colors">
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
