import React from 'react'
import styles from "@/app/style";
import { layout } from "@/app/style";
import Image from 'next/image';
import Button from '../button/page';
import card from '../../assets/card/card.png'


const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
        <Image src={card} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
}

export default CardDeal
