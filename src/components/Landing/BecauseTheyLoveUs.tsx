"use client";

import Arrow from "@/app/assets/Arrow.svg";
import ArtVenueSVG from "@/app/assets/company/ArtVenue.svg";
import ShellsSVG from "@/app/assets/company/Shells.svg";
import WavesSVG from "@/app/assets/company/Waves.svg";
import ZoomerrSVG from "@/app/assets/company/Zoomerr.svg";
import Profile1 from "@/app/assets/profile/profile1.jpg";
import Profile2 from "@/app/assets/profile/profile2.jpg";
import Profile3 from "@/app/assets/profile/profile3.jpg";
import Profile4 from "@/app/assets/profile/profile4.jpg";
import Profile5 from "@/app/assets/profile/profile5.jpg";
import Image from "next/image";
import { MouseEvent, useRef } from "react";
import CommentCard from "../common/CommentCard";

const comments = [
  {
    icon: ZoomerrSVG,
    title: "kontrastr",
    content:
      "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
    profile: {
      image: Profile1,
      name: "Ralph Edwards",
      position: "Product Designer",
    },
  },
  {
    icon: ZoomerrSVG,
    title: "Zoomerr",
    content:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    profile: {
      image: Profile2,
      name: "Hellen Jummy",
      position: "Team Lead",
    },
  },
  {
    icon: ShellsSVG,
    title: "SHELLS",
    content:
      "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    profile: {
      image: Profile3,
      name: "Hellena John",
      position: "Co-founder",
    },
  },
  {
    icon: ArtVenueSVG,
    title: "ArtVenue",
    content:
      "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    profile: {
      image: Profile4,
      name: "David Oshodi",
      position: "Manager",
    },
  },
  {
    icon: WavesSVG,
    title: "WAVES",
    content:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    profile: {
      image: Profile5,
      name: "Charolette Hanlin",
      position: "CEO",
    },
  },
];

export default function BecauseTheyLoveUs() {
  const commentContainerRef = useRef<HTMLDivElement>(null);

  let isClicked = false;

  let firstPosition = 0;

  const handleScrollButton = (direction: "left" | "right") => () => {
    if (direction === "left") commentContainerRef.current?.scrollBy(-400, 0);
    else commentContainerRef.current?.scrollBy(400, 0);
  };

  const handleCommentsMove = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const actionX = firstPosition - event.clientX;
    if (isClicked) commentContainerRef.current?.scrollBy(actionX, 0);
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    firstPosition = event.clientX;
    isClicked = true;
  };

  return (
    <div className="lg:py-20">
      <div className="flex lg:justify-between px-20 justify-center">
        <div className="font-bold text-[2rem] lg:font-extrabold lg:text-[3.5rem] text-nowrap">Because they love us</div>
        <div className="hidden lg:flex space-x-6 child:button-opacity-effect">
          <Image src={Arrow} alt="Right Arrow" onClick={handleScrollButton("left")} />
          <Image className="rotate-180" src={Arrow} alt="Left Arrow" onClick={handleScrollButton("right")} />
        </div>
      </div>
      <div className="flex relative justify-center">
        <div className="w-full lg:w-full-p-20 h-[400px] bg-yellow-50 z-0 absolute top-10" />
        <div className="overflow-scroll scroll-smooth scroll-hidden z-10 relative" ref={commentContainerRef}>
          <div
            className="flex space-x-6 w-max p-20 select-none"
            onMouseOver={handleCommentsMove}
            onMouseDown={handleClick}
            onMouseUp={() => (isClicked = false)}
          >
            {comments.map((comment, index) => (
              <CommentCard {...comment} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
