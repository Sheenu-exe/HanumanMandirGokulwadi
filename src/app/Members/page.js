"use client";

import { Layout } from "../components/Layout";
import { useState } from "react";
import { db, storage } from "../../../API/firebase.config"; // Assuming firebase config is imported
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { addDoc, collection } from "@firebase/firestore"; // Import necessary Firestore functions

const Members = () => {
  const [Name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [profilePic, setProfilePic] = useState(null); // State for profile picture file
  const [paymentScreenshot, setPaymentScreenshot] = useState(null); // State for payment screenshot file
  const [aadhaarPic, setAadhaarPic] = useState(null); // State for Aadhaar picture file
  const [fatherName, setFatherName] = useState(""); // State for Father's Name
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const handleDonation = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!Name || !number || !amount || !profilePic || !paymentScreenshot || !aadhaarPic || !fatherName) {
      alert("Please fill out all fields and upload all images.");
      return;
    }

    setIsLoading(true);

    try {
      // Upload profile picture to Firebase Storage with the user's name
      const profilePicRef = ref(storage, `profile_pics/${Name}`);
      await uploadBytes(profilePicRef, profilePic);
      const profilePicUrl = await getDownloadURL(profilePicRef);

      // Upload payment screenshot to Firebase Storage
      const paymentScreenshotRef = ref(storage, `payment_screenshots/${paymentScreenshot.name}`);
      await uploadBytes(paymentScreenshotRef, paymentScreenshot);
      const paymentScreenshotUrl = await getDownloadURL(paymentScreenshotRef);

      // Upload Aadhaar picture to Firebase Storage
      const aadhaarPicRef = ref(storage, `aadhaar_pics/${aadhaarPic.name}`);
      await uploadBytes(aadhaarPicRef, aadhaarPic);
      const aadhaarPicUrl = await getDownloadURL(aadhaarPicRef);

      // Create a new member entry in Firestore
      const memberRef = collection(db, "unverifiedMembers"); // Adjust collection name as needed
      const newMember = {
        Name,
        number,
        amount,
        profilePicUrl,
        paymentScreenshotUrl,
        aadhaarPicUrl,
        fatherName,
        submittedAt: new Date(), // Add timestamp for sorting or tracking
      };
      await addDoc(memberRef, newMember);

      alert("Thank you for your donation! Your membership request has been submitted.");
      // Clear form fields (optional)
      setName("");
      setNumber("");
      setAmount("");
      setProfilePic(null);
      setPaymentScreenshot(null);
      setAadhaarPic(null);
      setFatherName("");
    } catch (error) {
      console.error("Error saving member data:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="w-full flex sm:flex-row bg-orange-100 flex-col sm:h-screen">
        <div className="sm:w-[50vw] sm:h-screen h-fit w-screen flex justify-center flex-col">
          <div className="w-full flex justify-center">
            <img className="rounded-full w-[25vh] h-[25vh]" src="https://i.ibb.co/jyLHNyw/Logo-gokul-yuva-sanghathan.jpg" />
          </div>
          <p className="mt-[10vh] mb-[2vh] text-5xl uppercase">Membership</p>
          <p className="mx-3 mt-2">गोकुल युवा संगठन से जुड़ने के लिए : <br />
            १. यहाँ फॉर्म भरे<br />
            २.₹501 रुपये स्कैनर पे भरके स्क्रीनशॉट फॉर्म के साथ अपलोड करे</p>
        </div>
        <div className="sm:w-[50%] w-full sm:h-screen h-fit flex justify-center items-center">
          <div className="sm:h-[40vh] my-2 h-fit w-auto flex flex-col justify-center items-center">
            <img className="sm:w-full w-[60%] h-auto sm:h-full scanner" src="https://i.ibb.co/w76S28S/UPI.jpg" alt="" />
            <p>नाम : Mayur Kumar <br /> UPI Handle : 7791007939@paytm</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:h-[110vh] h-fit bg-orange-100 flex justify-center items-center">
        <form className="w-[80vw] max-w-md p-8 bg-white rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="profile">
              आपका फोटो:
            </label>
            <input
              id="profile"
              type="file"
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              onChange={(e) => setProfilePic(e.target.files[0])} // Capture the selected file
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="image">
              सफल पेमेंट का स्क्रीनशॉट:
            </label>
            <input
              id="image"
              type="file"
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              onChange={(e) => setPaymentScreenshot(e.target.files[0])} // Capture the selected file
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="aadhaarPic">आधार का फोटो:</label>
            <input
              id="aadhaarPic"
              type="file"
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              onChange={(e) => setAadhaarPic(e.target.files[0])} // Capture the selected file
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">नाम:</label>
            <input value={Name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="नाम" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="mobile">मोबाइल नंबर:</label>
            <input value={number} onChange={(e) => setNumber(e.target.value)} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="mobile" type="text" placeholder="मोबाइल नंबर" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="donation">जमा की गई राशि:</label>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="donation" type="text" placeholder="जमा की गई राशि" />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fatherName">पिता का नाम:</label>
            <input value={fatherName} onChange={(e) => setFatherName(e.target.value)} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="fatherName" type="text" placeholder="पिता का नाम" />
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
    </Layout>
  );
};
export default Members;