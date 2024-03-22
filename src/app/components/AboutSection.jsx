"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Games",
    id: "games",
    content: (
      <ul className="list-disc pl-2">
        <li>Valorant</li>
        <li>CSGO</li>
        <li>7 Days To Die</li>
        <li>Outlast Trials</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("games");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid  md:grid-cols-2 gap-5 items-center py-8 px-4 xl:gap-14 sm:py-16 xl:px-16">
        <Image src="/images/about.png" width={320} height={320} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me (Rainundertheplane)</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I also love playing games with friends. I created PixelHeart so you can reach out 
            and match other gamers more easily and for free.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("games")}
              active={tab === "games"}
            >
              {" "}
              Games I Play{" "}
            </TabButton>
           
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
