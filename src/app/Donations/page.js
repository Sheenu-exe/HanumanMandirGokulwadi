"use client"

import { Layout } from "../components/Layout";

const Donation = () => {
  return (
    <Layout>
      <div className="h-screen flex"> 
        <div className="w-[50%] h-screen flex flex-col justify-center ">
          <div className="w-full flex items-center justify-center">
        <img className='h-[45vh] w-[31vh]' src="https://i.ibb.co/4p5LVTc/hanumanji-gys4-Photoroom-png-Photoroom.png" alt="" /></div>
            <p className="text-3xl m-3 font-bold">आपके उदार दान से श्री गोकुलवाड़ी हनुमान मंदिर का समर्थन करें|</p>
            <p className="text-xl m-3 mt-0">आपके दान से मंदिर का विकास और रखरखाव संभव होगा।</p>
            <p className="text-lg mx-3">दान कैसे करें:</p>
            <p className="mx-3">
            दिए गए क्यू आर कोड को स्कैन कर अपनी मनोवांछित राशि दान करे
इस व्हाट्सएप क्रमांक पर अपने भुगतान का स्क्रीनशॉट भेजे 
व दिए गए अपलोड बटन पे क्लिक कर अपलोड करे | 
            </p>
            
        </div>
        <div className="w-[50%] h-screen flex justify-center items-center">
         <div className="h-[50vh] w-auto">
          <img className="w-full h-full" src="https://i.ibb.co/w76S28S/UPI.jpg"/>
         </div>
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
