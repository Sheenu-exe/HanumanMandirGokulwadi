"use client";

// Donation.js

import { Layout } from "../components/Layout";
import { useState } from "react";
import { db, storage } from "../../../API/firebase.config"; // Assuming firebase config is imported
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { addDoc, collection } from "@firebase/firestore"; // Import necessary Firestore functions


const Donation = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState(null); // Store the image file
  const [isLoading, setIsLoading] = useState(false); 
  const handleImageChange = (event) => {
    setImage(event.target.files[0]); // Access the selected image file
  };

  const handleDonation = async () => {
    setIsLoading(true); // Set loading state to indicate submission in progress

    try {
      // Image upload logic
      if (image) {
        const imageRef = ref(storage, `donations/${image.name}`); // Create a unique image reference
        await uploadBytes(imageRef, image); // Upload the image

        const imageUrl = await getDownloadURL(imageRef); // Get the uploaded image URL

        // Firestore data structure (consider adding other relevant fields)
        const donationData = {
          name,
          number,
          amount,
          imageUrl,
        };

        // Add donation data to Firestore
        const donationRef = collection(db, "donations"); // Reference the donations collection
        await addDoc(donationRef, donationData);

        alert("Donation submitted successfully!"); // Display success message
        setName("");
        setNumber("");
        setAmount("");
        setImage(null);
      } else {
        alert("Please upload a screenshot of your payment."); // Prompt for image if missing
      }
    } catch (error) {
      console.error("Error submitting donation:", error);
      alert("An error occurred. Please try again later."); // Inform user of error
    } finally {
      setIsLoading(false); // Reset loading state after submission
    }
  };
  
  

  return (
    <Layout>
      <div className="sm:h-screen h-fit flex sm:flex-row flex-col">
        <div className="sm:w-[50%] w-full sm:h-screen min-h-screen max-h-fit flex flex-col sm:items-[none] items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <img
              className="h-[45vh] w-[31vh]"
              src="https://i.ibb.co/4p5LVTc/hanumanji-gys4-Photoroom-png-Photoroom.png"
              alt=""
            />
          </div>
          <p className="sm:text-3xl text-xl sm:text-left text-center m-3 font-bold">आपके दान से श्री गोकुलवाड़ी हनुमानजी मंदिर का समर्थन करें|</p>
          <p className="sm:text-xl text-lg sm:text-left text-center m-3 mt-0">आपके दान से मंदिर का विकास और रखरखाव संभव होगा।</p>
          <p className="sm:text-lg text-base mx-3">दान कैसे करें:</p>
          <p className="mx-3 text-base">
            1. दिए गए क्यू आर कोड को स्कैन कर अपनी मनोवांछित राशि दान करें |<br />
            2. 8xxxxxxxx4 इस व्हाट्सएप क्रमांक पर अपने भुगतान का स्क्रीनशॉट भेजें |<br />
            3. नीचे सफल पेमेंट का स्क्रीनशॉट अपलोड करें| 
          </p>
        </div>
        <div className="sm:w-[50%] w-full sm:h-screen h-fit flex justify-center items-center">
          <div className="h-[40vh] w-auto">
            <img className="w-full h-full scanner" src="https://i.ibb.co/w76S28S/UPI.jpg" alt="" />
            <p>नाम : Mayur Kumar <br/> UPI Handle : 7791007939@paytm</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[80vh] bg-orange-100 flex justify-center items-center">
        <form className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="image">सफल पेमेंट का स्क्रीनशॉट:</label>
            <input onChange={handleImageChange} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="image" type="file" placeholder="जमा की गई राशि" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">नाम:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="नाम" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="mobile">मोबाइल नंबर:</label>
            <input value={number} onChange={(e) => setNumber(e.target.value)} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="mobile" type="text" placeholder="मोबाइल नंबर" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="donation">जमा की गई राशि:</label>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="donation" type="text" placeholder="जमा की गई राशि" />
          </div>
          <button
          onClick={handleDonation}
          className={`w-full px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700 ${
            isLoading ? "disabled cursor-wait" : ""
          }`} // Disable button and show loading indicator during submission
          type="button"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "दान करें"}
        </button>
        </form>
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
