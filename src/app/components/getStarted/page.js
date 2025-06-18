// src/app/components/getStarted/page.js

'use client';

import React from 'react';
import Image from "next/image";
import styles from '@/app/style';

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-[#de1b1b] p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-[#ffffff] w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-[#de1b1b] ">Get</span>
        </p>
        <Image
          src="/arrow-up.svg"
          alt="arrow-up"
          width={23}
          height={23}
          className="object-contain"
        />           </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-[#de1b1b]">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
