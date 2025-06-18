import Image from "next/image";
import styles from "./style";
import Billing from "./components/billing/page";
import Business from "./components/business/page";
import Button from "./components/button/page";
import CardDeal from "./components/carddeal/page";
import Clients from "./components/clients/page";
import Cta from "./components/cta/page";
import Feedbackcard from "./components/feedbackcard/page";
import Footer from "./components/footer/page";
import GetStarted from "./components/getStarted/page";
import Hero from "./components/hero/page";
import Navbar from "./components/navbar/page";
import Stats from "./components/stats/page";
import Testimonials from "./components/testimonials/page";


export default function Home() {
  return (
    <div className="bg-[#fae7e7]   w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-[#fae7e7]  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div className={`bg-[#fae7e7] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <Cta />
        <Footer />

        </div>
      </div>
    </div>


  );
}
