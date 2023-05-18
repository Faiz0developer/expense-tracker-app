import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-400 p-10">
      <div className="flex flex-col sm:flex-row items-center text-xl gap-4 sm:gap-10">
        <h1 className="linear text-base sm:text-2xl">DollorTracker</h1>
        <h2 className="text-sm sm:text-base">
          &copy; copyright| All rights reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
