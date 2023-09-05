
import Image from "next/image";

import HeroSection from "../components/sections/01_HeroSection";
import Trello101 from "../components/sections/02_Trello101Section/02_Trello101Section";
import TrelloInAction from "../components/sections/03_TrelloInAction/03_TrelloInAction";
import SeeWorkInAWholeNewWay from "../components/sections/04_SeeWorkInAWholeNewWay/04_SeeWorkInAWholeNewWay";
import PowerfulWaysToGrow from "../components/sections/05_PowerfulWaysToGrow/05_PowerfulWaysToGrow";
import TrelloPricedYourWay from "../components/sections/06_TrelloPricedYourWay/06_TrelloPricedYourWay";
import Brands from "../components/sections/07_Brands/07_Brands";
import GetStartedTithTrelloToday from "../components/sections/08_GetStartedTithTrelloToday/08_GetStartedTithTrelloToday";

export default function Home() {
  return (
    <main>
     
      <section className="w-full h-full py-[40px] bg-[url('/images/wave.png')] bg-no-repeat bg-center bg-fixed  bg-cover ">
        <HeroSection />
      </section>
      
      <section className="w-full h-full  py-[40px] bg-gradient-to-b from-white via-sky-100/50 to-sky-200/80">
        <Trello101 />
      </section>

      <section className="w-full h-full py-[40px]">
        <TrelloInAction />
      </section>

      <section className="w-full h-full  py-[40px] bg-gradient-to-r from-blue-500  to-cyan-400 relative">
        <div className="hidden lg:block absolute top-0 h-full">
          <Image 
            src="/images/ViewsBackground_Left_Narrow.svg"
            alt="img"
            width={300}
            height={300}
          />
        </div>
        <SeeWorkInAWholeNewWay />
        <div className="hidden lg:block absolute right-[10px]  top-0 h-full">
          <Image 
            src="/images/ViewsBackground_Right_Narrow.svg"
            alt="img"
            width={300}
            height={300}
          />
        </div>
      </section>

      <section className="w-full h-full  py-[40px] ">
        <PowerfulWaysToGrow />
      </section>

      <section className="w-full h-full  py-[40px] mt bg-gradient-to-b from-cyan-100/50 to-white">
        <TrelloPricedYourWay />
      </section>

      <section className="w-full h-full  py-[40px] ">
        <Brands />
      </section>

      <section className="w-full h-full  py-[40px] bg-gradient-to-r from-indigo-600 to-pink-500 relative">
        <div className="hidden lg:block absolute top-0 h-full">
          <Image 
            src="/images/BigSwingFooterHeroGraphic__Left.svg"
            alt="img"
            width={200}
            height={200}
          />
        </div>
        <GetStartedTithTrelloToday />
        <div className="hidden lg:block absolute right-[10px]  top-0 h-full">
          <Image 
            src="/images/BigSwingFooterHeroGraphic__Right.svg"
            alt="img"
            width={200}
            height={200}
          />
        </div>
      </section>
    </main>
  );
}
