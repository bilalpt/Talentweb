'use client';

import Image from "next/image";
import GetStarted from "../getStarted/page";
import styles from "@/app/style";

const Hero = () => {
  return (
    <section id="home" className='flex md:flex-row flex-col' >
      {/* Left Section */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Discount Banner */}
        <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-gradient-to-r from-[#ffffff] to-[#ff8ba8]">
          <Image src="/Discount.svg" alt="discount" width={32} height={32} />
          <p className={`${styles.paragraph} ml-2 text-white`}>
            <span className="text-red-600">20% Discount For</span> {" "}
            <span className="text-red-600">1 Month Account</span>
          </p>
        </div>

        {/* Heading and CTA */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-red-700 ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />
            <span className="bg-[radial-gradient(ellipse_at_center,#888888_0%,#555454_50%,#333333_100%)] bg-clip-text text-transparent inline-block">
              Generation
            </span>

          </h1>
          <div className="hidden sm:flex md:mr-4 mr-0">
            <GetStarted />
          </div>


        </div>

        {/* Subheading */}
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-red-700 ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph} text-red-700 dark:text-red-700`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>

      </div>

      {/* Right Section with Robot and Gradients */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Image
          src="/robot.png"
          alt="billing"
          width={500}
          height={500}
          className="w-full h-full relative z-[5]"
        />

        {/* Gradient Effects */}
        {/* Pink Gradient */}
        {/* <div className="absolute z-0 w-[40%] h-[35%] top-0 bg-gradient-to-r from-[#ef5b5b] to-[#000000] blur-3xl opacity-70" /> */}

        {/* White Gradient */}
        <div className="absolute z-10 w-[80%] h-[80%] rounded-full bottom-40 bg-gradient-to-r from-[#ebebeb] to-[#ebd5d5] blur-2xl opacity-50" />

        {/* Blue Gradient */}
        <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 bg-gradient-to-b from-transparent to-[#e04e4e] blur-2xl opacity-60" />

      </div>

      {/* CTA Button for Small Screens ss*/}
      <div className={`ss:hidden block md:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
