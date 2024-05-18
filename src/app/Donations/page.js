"use client";

import { Layout } from "../components/Layout";
import { useState } from "react";
import Prasad from "../components/prasad";
import Aarti from "../components/aarti";



const Donation = () => {
  const [selectedTab, setSelectedTab] = useState("prasad"); // Initial selected tab




  const handleTabChange = (event) => {
    setSelectedTab(event.target.value); // Update selected tab based on selection
  };

  const renderSelectedComponent = () => {
    switch (selectedTab) {
      case "prasad":
        return <Prasad />;
      case "aarti":
        return <Aarti />;
      
      default:
        return null; // Handle potential invalid tab selection gracefully
    }
  }


  return (
    <Layout>
      
      <div className="sm:h-screen h-fit flex sm:flex-row flex-col justify-center">
        <div className="sm:block flex flex-col justify-center items-center">
          <nav className="flex  mx-6 gap-6 my-3" aria-label="Tabs">
            <button
              type="button"
              className={`shrink-0 rounded-lg p-2 font-medium text-gray-500 hover:bg-zinc-800 hover:text-white  ${selectedTab === "prasad" ? "bg-zinc-700 text-white" : ""
                }`} 
              onClick={() => setSelectedTab("prasad")}
            >
              Prasad
            </button>
            <button
              type="button"
              className={`shrink-0 rounded-lg p-2 font-medium text-gray-500 hover:bg-zinc-800 hover:text-white ${selectedTab === "aarti" ? "bg-zinc-700 text-white" : ""
                }`} // Add styling for active tab
              onClick={() => setSelectedTab("aarti")}
            >
              Aarti
            </button>
          
          </nav>
          <div className=" w-[90vw] sm:h-[100vh] h-fit border rounded-lg shadow-sm flex justify-center items-center">
          {renderSelectedComponent()}
          </div>
        </div>

        

      </div>
      <marquee
        scrollamount="20"
        direction="right"
        className="text-4xl text-red-100 h-[30vh] sm:mt-36 flex items-center"
      >
        <img
          className="sm:h-[30vh] h-[15vh] "
          src="https://salasarbalaji.org/public/assets/img/footer-part_1.png"
          alt=""
        />
      </marquee>
    </Layout>
  );
};

export default Donation;
