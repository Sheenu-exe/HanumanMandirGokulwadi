"use client"
import { Blogs } from '../components/blogs';
import 'animate.css'; 
import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import gysLogo from "../img/Logo gokul yuva sanghathan.jpg"
import Image from 'next/image';



const MainPage = () => {
  return (
    <><div className='flex flex-col '>
      <div className="sm:h-[100vh] pg1 h-fit bg-cover bg-orange-100 bg-center bg-[url(https://i.ibb.co/ZKbjzK7/bg.jpg)] flex flex-col-reverse sm:flex-row">
        <div className="flex flex-col pg1left sm:h-screen w-screen h-[50vh]  sm:w-[50vw] gap-6 justify-center bg-opacity-80 sm:p-2">
          <div className="text-box z-10 rounded-lg sm:p-3 flex sm:gap-5 gap-2 animate__animated animate__fadeIn text-black flex-col sm:w-[70vw] w-screen justify-center">
            <p className="sm:text-xl top-title text-sm font-bold">शिवगंज का सुप्रसिद्ध </p>
            <p className="sm:text-5xl text-2xl title font-extrabold ">श्री गोकुलवाड़ी हनुमान मंदिर</p>
            <p className="sm:text-lg text-sm font-bold flex items-center text-orange-600 bg-orange-500/30 w-fit py-1 px-2 rounded-3xl gap-1"><IoLocationOutline className='text-2xl text-orange-700' />गोकुलवाड़ी गरबा चौक, शिवगंज, सिरोही - 307027</p>
          </div>
        </div>

        <div className="flex pg1right justify-center items-end bg-cover bg-center sm:h-[100vh] h-[50vh] sm:w-[90vw] w-screen">
          <img src={"https://i.ibb.co/0sj2GVQ/Hanuman-mandir-Photoroom-png-Photoroom.png"} alt="Lord Hanuman" className="h-auto sm:hidden sm:w-auto sm:h-[75vh] rounded-xl animate__animated animate__fadeIn" />

        </div>
      </div>
      <marquee scrollamount="20" className="text-4xl bg-orange-600 text-orange-100 h-[10vh] flex items-center">|| गोकुल युवा संगठन आपका हार्दिक स्वागत करते है ||</marquee>
      <div className='sm:h-[100vh] bg-orange-100 pg2  flex'>
        <div className='absolute ram -z-[0] w-full h-full flex justify-center items-center'><img src="https://i.ibb.co/yR2dnWP/d536d96637ea7ac107e941f5973e8871-removebg-preview.png" className='rotate opacity-30 h-full ramimg' alt="" /></div>
        <div className='w-1/2 pg2left sm:h-screen z-10 flex flex-col justify-center items-center'>
          <p className='text-4xl mt-5 sm:mt-0'>मंदिर की जानकारी</p>
          <p className='m-10 text-xl'>
            मंदिर गोकुलवाड़ी गरबा चौक के मध्य में स्तिथ है।   मंदिर के प्रांगण में बड़ा सा पीपल का वृक्ष है। श्री हनुमानजी यहाँ अपने घुटने पर विराजमान है। यह मूर्ति उस समय का वर्णन करती है जब श्री बजरंगबली माँ सीता के सामने नतमस्तक बैठे होते है। श्री हनुमानजी की यहाँ अपने भक्तो पे विशेष अनुकम्पा रहती है। हर मंगलवार व शनिवार लोग रोटले का भोग प्रभु को चढ़ाते है। साथ ही हर मंगलवार और शनिवार गोकुल युवा संगठन द्वारा भव्य हनुमान चालीसा का आयोजन होता है जहा सेकड़ो की तादात में लोग आके इस कार्यक्रम  में हिस्सा लेते है|
          </p>
        </div>
        <div className='w-[50vw] pg2right z-10 flex justify-center items-center'>
          <iframe
            className='sm:h-[50vh] h-[30vh] w-[95%]'
            src="//www.youtube.com/embed/HCUkjEtFRtQ?si=HT6BtIbdWrdKFs07&amp;controls=0&amp;start=10"
            title="YouTube video player"
            allow="autoplay"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen="" />


        </div>

      </div>
      <div className='min-h-[90vh]  pg-3 max-h-fit flex'>
        <div className='w-[60vw] pg3left h-full flex flex-col justify-center items-center'>
          <p className='text-4xl mt-10'>मंदिर का इतिहास</p>
          <p className='m-10'>
            अरावली की सुरम्य पहाड़ियो के दक्षिण-पष्चिम की ओर भगवान शिव की नगरी शिवगंज की पुण्य धरा पर गोकुलवाड़ी चौक में स्थित श्री हनुमानजी का इतिहास अति प्राचिन है। कहा जाता है कि सर्वोदय नेता श्री गोकुलभाई भट्ट की प्रेरणा से श्री डुंगारामजी परिहार ने गोकुलवाडी कॉंलोनी को बसाया और धीरे-धीरे इस कॉंलोनी का विस्तार किया गया। गोकुलवाडी चौक पर श्री हनुमानजी महाराज को एक शिला के रूप में श्री खीमारामजी वेलाजी गेहलोत ने स्थापित किया। इस पुनीत कार्य में चम्पालालजी टांक, वगतारामजी गहलोत एवं लखमारामजी गहलोत ने सहयोग दिया हैं।
            <br /><br />
            इसके बाद सन् 1967 को श्री डुंगारामजी के सुपुत्र धर्मेन्दजी परिहार, महेन्द्र कुमारजी परिहार व करण कुमार परिहार के चबूतरे के चारों ओर पीलर बनाकर छत निर्माण का कार्य करवाया, जिसका शिलालेख आज भी आबाद हैं।
            <br /> <br />
            इसके बाद छत्तीस कौम की सहायता से इसी पत्थर की शिला के चारो ओर एक लघु मन्दिर बनवाया गया तथा विधिवत पूजा-अचना के कार्य की शुरुआत की गई। थोडे अन्तराल के बाद जवानारामजी सुथार ने अपने खर्चे से पीलर्स तथा दीवार पर जोधपुरी लाल पत्थर लगाने का कार्य किया तथा मन्दिर की भव्यता को बढ़ाने में सहयोग दिया|
            <br /> <br />
            सन् 2012-13 में हनुमान मंडल के युवा साथियों ने उक्त मन्दिर के जीर्णोद्वार का कार्य हाथ में लिया और वितिय सहायता राशि एकत्रित की तथा आर्किटेक से तकमीना बनाकर विधिवत निर्माण कार्य का शुभारंभ किया, लेकिन किसी अपरिहाय कारण से उक्त निर्माण कार्य को गति नहीं मिली|
            <br /> <br />
            इसके बाद पुनः हनुमान मन्दिर नव निर्माण कमेटी का गठन किया गया तथा हनुमानजी की अनुकम्पा व प्रेरणा से हनुमान मन्दिर नव निर्माण कमेटी के युवा साथीयों ने मिलकर उक्त मन्दिर के अपूर्ण कार्य को पूर्ण करवाने का संकल्प लिया तथा पुनः निर्माण कार्य का श्री गणेश किया। इस निर्माण कार्य में गोकुलवाडी के छत्तीस कौम ने अपनी भागीदारी का परिचय दिया और तन-मन-धन से अपना सहयोग दिया। जिससे यह मन्दिर अपनी पूर्णता को प्राप्त कर भव्यता के साथ तैयार खड़ा है। उक्त मन्दिर के जीर्णोद्वार प्रतिश्ठा की गई |
            <br /> <br />
            इसके बाद हनुमानजी के आशिर्वाद व प्रेरणा से गोकुल युवा संगठन द्वारा हर मंगलवार को रात 8-00 बजे ढोल नगाडो के साथ आरती की जाती है एंव साथ ही हनुमान चालीसा का पाठ किया जाता है व शनिवार को भी हनुमान चालीसा का पाठ किया जाता है। जिसमें कही भक्त जन इस भक्ति मय हनुमान चालीसा व आरती में भाग लेते है
          </p>
        </div>
        <div className='w-[40vw] pg3right'>
          <div className='absolute ram2 -z-[0] overflow-hidden flex items-center '><img src="https://i.ibb.co/yR2dnWP/d536d96637ea7ac107e941f5973e8871-removebg-preview.png" className='rotate opacity-30 h-full ramimg2' alt="" /></div>
          <img className='h-[100%] sticky z-[1] w-auto' src="https://i.ibb.co/4p5LVTc/hanumanji-gys4-Photoroom-png-Photoroom.png" alt="" />
        </div>
      </div>
      <hr
        class="my-12 h-[0.5vh] w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent to-transparent opacity-25 dark:via-orange-500" />
      <div className='h-[90vh] w-full'>
        <p className='text-4xl font-bold text-center m-3'>हमारी झांकिया</p>
       <Blogs/>
      </div>
      <div className='sm:h-[60vh] h-[40vh] text-center text-lg w-full text-orange-100 sm:gap-10 gap-0 bg-orange-600 flex flex-col justify-center items-center'>
        <p className="sm:text-3xl font-extrabold flex flex-row mx-3 items-center">राम काज में कार्यरत होने हेतु आज ही रजिस्टर बटन दबाके जुड़े </p>
        <p className="sm:text-7xl text-3xl font-extrabold flex flex-row items-center"><Image className='sm:h-[15vh] h-[10vh] rounded-full w-[10vh] sm:w-[15vh] mr-2 sm:mr-5' src={gysLogo} alt="" /> गोकुल युवा संगठन</p>
        <p className="sm:text-4xl font-extrabold flex flex-row mx-3 mt-2 items-center">अध्यक्ष : विक्रम गेहलोत <br /> उपाध्यक्ष : अर्जुन गेहलोत व धीरज परिहार</p>
      </div>
      
    </div></>
  );
}

export default MainPage;
