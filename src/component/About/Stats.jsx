import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const Stats = [
  { count: 10, label: "Clients" },
  { count: 12, label: "Products" },
  { count: 5, label: "Employees" }
];

const StatsComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset isVisible state when component is not visible
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-richblack-600 mt-[8rem]" ref={statsRef}>
      {/* Stats */}
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-3 text-center">
          {Stats.map((data, index) => (
            <div className="flex flex-col py-10" key={index}>
            <div className="font-bold text-xl"> + <span></span>
              {isVisible && (
                <CountUp
                  start={0}
                  end={data.count}
                  duration={2}
                  separator=","
                  decimals={0}
                  className="text-[30px] font-bold text-richblack-5"
                />
              )}
              </div>
              <h2 className="font-semibold text-[20px] text-richblack-100 ">
                {data.label}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
