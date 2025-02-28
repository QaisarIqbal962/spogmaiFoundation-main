// Our Team Components is render belwo
import OurTeam from "./OurTeam";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import WWD from "../../assets/freeFoodDis/WWD.png";
import ourhistory from "../../assets/freeFoodDis/ourhistory.png";
import sf from "../../assets/freeFoodDis/sf.jpg";
import ffd2 from "../../assets/freeFoodDis/ffd2.png";
import SuccessStory from "./SuccessStory";

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    console.log(window.innerWidth);
    let WINDOW_WIDTH = window.innerWidth;
    let scroollY = 0;
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
    // eslint-disable-next-line eqeqeq
    if (location.hash == "#whoWeAre") {
      window.scrollTo(50, 250);
    }
    // eslint-disable-next-line eqeqeq
    if (location.hash == "#whatWeDo") {
      // const ScrollY = WINDOW_WIDTH >= 1390 ?
      if (WINDOW_WIDTH >= 1390) scroollY = 1390;
      else if (WINDOW_WIDTH < 1350 && WINDOW_WIDTH >= 800) {
        // eslint-disable-next-line no-unused-vars
        scroollY = 2430;
      } else if (WINDOW_WIDTH < 800 && WINDOW_WIDTH > 400) {
        scroollY = 2850;
      } else if (WINDOW_WIDTH < 400 && WINDOW_WIDTH > 200) {
        scroollY = 2900;
      } else {
        scroollY = 1730;
      }
      window.scrollTo(50, scroollY);
    }

    if (location.hash === "#ourTeam") {
      // const ScrollY = WINDOW_WIDTH >= 1390 ?
      if (WINDOW_WIDTH >= 1390) scroollY = 1390;
      else if (WINDOW_WIDTH < 1350 && WINDOW_WIDTH > 810) {
        // eslint-disable-next-line no-unused-vars
        scroollY = 3300;
   
          <p className=" mt-2">
            Founded by a local patron, Tahir Fada, and later joined by other
            volunteers motivated to make a difference, the foundation has now
            benefited thousands of families and many other individuals in a
            variety of ways.
          </p>
          <p className=" mt-2">
            Our charitable organization is committed to delivering safe and
            clean monthly rations, free food distribution, orphan support, and
            other services to communities throughout the Hangu area. We think
            that poor and needy family help is a basic human right and that
            every person deserves access to it.
          </p>
          <p className=" mt-2">
            We welcome you to visit our charity page and see the touching
            stories of transformation that our efforts have facilitated. Each
            success story is supported by a network of committed individuals who
            think that positive change is not just a possibility, but also a
            responsibility.
          </p>
          <p className=" mt-2">
            Thank you for visiting the Charity Page of the Spogmai Foundation.
            Your being here attests to the goodness that lives within all of us.
            Let us collaborate to build a brighter, more fair future for the
            communities we serve.
          </p>
        </div>

        <div className="lg:w-[50%]  sm:pl-10 ">
          <img src={ffd2} alt="who we are " />
        </div>
      </div>
      {/* who we are section closed */}

      {/* Our history section Open */}
      <section className="bg-gradient-to-b from-[#8ebf9b] via-[#d8f6e7] to-[#89e9f9] text-black">
        <div className=" lg:text-4xl text-3xl font-bold pt-16 lg:pl-24 md:pl-20 pl-4 uppercase">
          <h1>Our History</h1>
          <div className=" w-16 h-1 bg-blue-600 rounded-full mt-3 "></div>
        </div>

        <div className="lg:flex lg:pl-24  pt-10 mb-24 px-4 md:px-10  gap-6">
          <div className="lg:w-[60%] pl-1 pb-4 lg:pr-2 md:pr-2 sm:pr-2 text-justify">
            <p>
              The Spogmai Foundation emerged in the midst of 2015, against the
              backdrop of a globe coping with social and economic difficulties.
              This charitable organization was founded by the visionary Tahir
              Fida to make a real difference in the lives of those in need.
              Spogmai, named after the Pashto word for "blossom," symbolized the
              blossoming of compassion and cooperation. With a focus on taking
              on important concerns such as poverty, education, and healthcare,
              the foundation launched a journey that would come to affect the
              lives of countless people.
            </p>
            <p className=" mt-4">
              Tahir Fida's great faith in the power of collaborative goodwill
              moved the Spogmai Foundation's growth over the years.That was the
              time when Mr. Tahir Fida of Hangu Pakistan, a What identified
              Spogmai was not only its commitment to charitable causes but also
              its ability to forge partnerships with donors from Arab countries.
              Considered altering people's minds regarding making beneficial use
              of social networking networks. He began highlighting his
              humanitarian activities on social media in order to refocus the
              public's focus away from spreading negativity and toward doing
              something helpful for their society.
            </p>
            <p className=" mt-4">
              Within a short period of time, many from within Pakistan and Arabs
              were inspired by Tahir Fida's humanitarian mission on social media
              and joined his cause of assisting the destitute. In just a few
              years, Mr. Tahir Fida's mission of feeding only a few homeless
              people spread and, with the monetarily and voluntarily support of
              his followers, transformed into helping thousands of people in
              various ways, resulting in the establishment of a well-known
              charity organization, namely Spogmai Foundation.
            </p>
          </div>

          <div className="lg:w-[40%]">
            <div className="sm:pl-10 pb-5 ">
              <img src={sf} alt="Our history" className="h-[300px] w-full" />
            </div>

            <div className="sm:pl-10 pb-5">
              <img src={ourhistory} alt="Our history " />
            </div>
          </div>
        </div>
      </section>
      {/* Our history section Closed */}

      {/* what we Do section  */}
      <section>
        <div
          id="whatWeDo"
          className=" lg:text-4xl text-3xl font-bold pt-4 lg:pl-24 md:pl-20 pl-4 uppercase"
        >
          <h1>What We Do</h1>
          <div className=" w-20 h-1 bg-blue-600 rounded-full mt-3 "></div>
        </div>
        <div className="lg:flex lg:pl-24  pt-10 mb-24 px-4 md:px-10  gap-6">
          <div className="lg:w-[50%] pl-1 pb-4 lg:pr-2 md:pr-2 sm:pr-2 text-justify">
            <p>
              The Spogmai Foundation, a multi-sectoral charitable organization,
              offers financial assistance to the poorest communities in Hangu
              and surrounding areas that are struggling to meet their basic
              needs due to poverty, problems with finances, or economic crises.
              To provide help and relief support to needy families, including
              widows, orphans, handicapped elderly patients, the homeless,
              vulnerable, and all those afflicted by poverty, we have merged
              technology, resources, and workers.
            </p>
            <p className=" mt-2">
              Common people from over the world provide in a variety of ways,
              including with cash, food, clothing, shelter, medicine,
              sponsorship,education, and volunteering.
            </p>
            <p className=" mt-2">
              Zakat is one among the many forms of kindness that we accept. In
              accordance with Islamic Shariah, we use these charities in the
              appropriate sectors as Sadaqah, Fitrana, Kafarah and General
              Charity.
            </p>
          </div>

          <div className="lg:w-[50%]  sm:pl-10">
            <img src={WWD} alt="who we are " />
          </div>
        </div>
      </section>
      {/* what we Do section Closed */}

      {/* our team components render here  */}
      <OurTeam />
      {/* render here the successfull  stories */}
      <SuccessStory />
    </main>
  );
};

export default AboutUs;
