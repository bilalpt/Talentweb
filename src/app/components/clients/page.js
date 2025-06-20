import React from 'react'
import styles from "@/app/style";
import { clients } from '@/app/constants';
import Image from 'next/image';


const Clients = () => (
  <section className={`${styles.flexCenter} my-4 md:mt-16`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <Image src={client.logo} alt="client_logo" className="sm:w-[152px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
