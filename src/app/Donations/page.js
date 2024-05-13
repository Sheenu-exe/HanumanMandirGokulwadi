"use client"

import { Layout } from "../components/Layout";

const Donation = () => {
  return (
    <Layout>
      <div className="sm:h-screen h-fit flex sm:flex-row flex-col"> 
        <div className="sm:w-[50%] w-full sm:h-screen min-h-screen max-h-fit flex flex-col sm:items-[none] items-center justify-center ">
          <div className="w-full  flex items-center justify-center">
        <img className='h-[45vh] w-[31vh]' src="https://i.ibb.co/4p5LVTc/hanumanji-gys4-Photoroom-png-Photoroom.png" alt="" /></div>
            <p className="text-3xl sm:text-left text-center m-3 font-bold">आपके उदार दान से श्री गोकुलवाड़ी हनुमान मंदिर का समर्थन करें|</p>
            <p className="text-xl sm:text-left text-center  m-3 mt-0">आपके दान से मंदिर का विकास और रखरखाव संभव होगा।</p>
            <p className="text-lg mx-3">दान कैसे करें:</p>
            <p className="mx-3">
            1. दिए गए क्यू आर कोड को स्कैन कर अपनी मनोवांछित राशि दान करे |<br/>
2. 8xxxxxxxx4 इस व्हाट्सएप क्रमांक पर अपने भुगतान का स्क्रीनशॉट भेजे | <br/>
3. दिए गए अपलोड बटन पे क्लिक कर अपलोड करे | 
            </p>
            
        </div>
        <div className="sm:w-[50%] w-full sm:h-screen h-fit flex justify-center items-center">
         <div className="h-[40vh] w-auto">
          <img className="w-full h-full scanner" src="https://i.ibb.co/w76S28S/UPI.jpg"/>
          <p>
          नाम : Mayur Kumar <br/>
          UPI Handle : 7791007939@paytm
          </p>
         </div>
        </div>
      </div>
      <marquee
        scrollamount="20"
        direction="right"
        className="text-4xl text-red-100 h-[30vh] sm:mt-0 mt-10 flex items-center"
      >
        <img
          className="sm:h-[30vh] h-[15vh] "
          src="https://salasarbalaji.org/public/assets/img/footer-part_1.png"
          alt=""
        />
      </marquee>
    </Layout>
  );
};
export default Donation;
