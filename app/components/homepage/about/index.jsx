// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  const [cityImage, illustrationImage, workImage] = personalData.profileImages;

  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <div className="grid h-[360px] w-full max-w-[520px] grid-cols-[1fr_0.65fr] grid-rows-[0.7fr_1.3fr] gap-3 sm:h-[460px] sm:grid-rows-[0.55fr_1.45fr]">
            <div className="relative row-span-2 overflow-hidden rounded-xl border border-[#1b2c68a0]">
              <Image
                src={cityImage}
                alt={`${personalData.name} in Ho Chi Minh City`}
                fill
                priority
                sizes="(max-width: 1024px) 55vw, 28vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl border border-[#1b2c68a0] bg-white">
              <Image
                src={illustrationImage}
                alt={`Illustration of ${personalData.name}`}
                fill
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl border border-[#1b2c68a0] bg-[#11152c]">
              <Image
                src={workImage}
                alt={`${personalData.name} working at a laptop`}
                fill
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-contain object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
