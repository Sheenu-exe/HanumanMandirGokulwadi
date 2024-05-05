"use client"

import { Layout } from "../components/Layout";

const Donation = () => {
  return (
    <Layout>
      <div className="h-screen flex"> 
        <div className="w-[50%] h-screen flex flex-col justify-center ">
            <p className="text-3xl m-3 font-bold">आपके उदार दान से श्री गोकुलवाड़ी हनुमान मंदिर का समर्थन करें|</p>
            <p className="text-xl m-3 mt-0">आपके दान से मंदिर का विकास और रखरखाव संभव होगा।</p>
            <p className="text-lg mx-3">दान कैसे करें:</p>
            <p className="mx-3">
            ऑनलाइन भुगतान : फॉर्म द्वारा<br/>
            बैंक हस्तांतरण : (खाता विवरण दिया गया है)<br/>
चेक/नकद : गोकुलवाड़ी गरबा चौक, शिवगंज, सिरोही - 307027
            </p>
        </div>
        <div className="w-[50%] h-screen">
          form
        </div>
      </div>
      <marquee
        scrollamount="20"
        direction="right"
        className="text-4xl text-red-100 h-[30vh] flex items-center"
      >
        <img
          className="h-[30vh] "
          src="https://salasarbalaji.org/public/assets/img/footer-part_1.png"
          alt=""
        />
      </marquee>
    </Layout>
  );
};
export default Donation;
