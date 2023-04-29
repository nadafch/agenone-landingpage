import React, { useState } from "react";
import * as COMPONENTS from "../components";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="w-full bg-white p-3 mb-20" id="Services">
      <div className="text-3xl lg:text-5xl text-center font-extrabold text-chineseBlack my-14 lg:my-20 p-3">
        The Services We Offer{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          For You
        </span>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <COMPONENTS.Accordion
          title="UI/UX Design"
          index={1}
          activeIndex={activeIndex}
          onClick={() => setActiveIndex(1)}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          doloremque quis labore nisi odio maiores tempore distinctio ex
          molestias similique, ullam inventore rem ab minima a, fuga magnam
          aspernatur eligendi.
        </COMPONENTS.Accordion>
        <COMPONENTS.Accordion
          title="Digital Marketing"
          index={2}
          activeIndex={activeIndex}
          onClick={() => setActiveIndex(2)}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          doloremque quis labore nisi odio maiores tempore distinctio ex
          molestias similique, ullam inventore rem ab minima a, fuga magnam
          aspernatur eligendi.
        </COMPONENTS.Accordion>
        <COMPONENTS.Accordion
          title="Social Media Management"
          index={3}
          activeIndex={activeIndex}
          onClick={() => setActiveIndex(3)}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          incidunt quisquam molestiae nemo vitae quaerat accusantium repudiandae
          architecto. Officiis aut deleniti nulla accusamus corporis nihil
          doloribus cupiditate minus omnis voluptates.
        </COMPONENTS.Accordion>
        <COMPONENTS.Accordion
          title="Development"
          index={4}
          activeIndex={activeIndex}
          onClick={() => setActiveIndex(4)}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
          quibusdam, animi excepturi officiis voluptatibus blanditiis ad id
          voluptates molestias ab unde possimus! Quibusdam, quia sunt? Ratione
          maxime excepturi veritatis libero.
        </COMPONENTS.Accordion>
      </div>
    </div>
  );
}
