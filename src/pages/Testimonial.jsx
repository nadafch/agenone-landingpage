import React, { useEffect, useState } from "react";
import * as COMPONENT from "../components";
import axios from "axios";

export default function Testimonial() {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=20");
      setUser(res.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="w-full mb-10 lg:mb-0 lg:px-12 flex flex-col lg:flex-row gap-5">
      <div className="w-full p-3 lg:h-[500px] mt-10 flex gap-3 justify-center overflow-hidden">
        <div className="animate-marquee-x-tr lg:animate-marquee-tb flex flex-row lg:flex-col gap-5 transition-all duration-150">
          {user.map((index, key) => (
            <COMPONENT.CardTestimonial
              key={key}
              image={index.picture.thumbnail}
              name={`${index.name.first} ${index.name.last}`}
              role={index.email}
            />
          ))}
        </div>
      </div>
      <div className="w-full lg:h-[500px] flex gap-3 justify-center overflow-hidden">
        <div className="animate-marquee-x-tl lg:animate-marquee-t flex flex-row lg:flex-col gap-5">
          {user.map((index, key) => (
            <COMPONENT.CardTestimonial
              key={key}
              image={index.picture.thumbnail}
              name={`${index.name.first} ${index.name.last}`}
              role={index.email}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
