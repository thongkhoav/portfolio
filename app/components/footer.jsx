// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 pb-20 pt-6 sm:px-12 md:py-6 lg:max-w-[70rem] lg:py-10 xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href={personalData.github}
              className="text-sm uppercase hover:text-[#16f2b3]"
            >
              GitHub
            </Link>
            <Link
              target="_blank"
              href={personalData.linkedIn}
              className="text-sm uppercase hover:text-[#16f2b3]"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
