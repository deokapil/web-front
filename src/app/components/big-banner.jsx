import React from "react";

const BigBanner = () => {
  return (
    <div className="mx-auto max-w-6xl bg-white ">
      <div className="text-blue-950 p-1 my-4 w-full rounded-sm">
        <div className="bg-blue-700">
          <div className="flex container mx-auto justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="font-semibold text-4xl py-20">
                High Quality Management Consulting
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBanner;
