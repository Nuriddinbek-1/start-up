import React from "react";

const Ping = () => {
  return (
    <div className="relative">
      <div className="top-1 -left-4 absolute">
        <span className="flex size-[11px]">
          <span className="inline-flex absolute bg-pink-950 opacity-75 rounded-full w-full h-full animate-ping"></span>
          <span className="inline-flex relative bg-pink-600 rounded-full size-[11px]"></span>
        </span>
      </div>
    </div>
  );
};

export default Ping;
