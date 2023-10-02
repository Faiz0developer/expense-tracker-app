import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center space-x-10  bg-gradient-to-tr from-[#bdc3c7] to-[#2c3e50] p-6">
      <h1 className="linear">DollarTracker</h1>
      <h1>Home</h1>
    </div>
  );
};

export default Header;
