"use client";
import React, { useState, useEffect } from "react";
import { db } from "../../../API/firebase.config";
import { collection, addDoc, getDocs, Timestamp } from "@firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { TextField } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { uploadBytesResumable } from "@firebase/storage";

const Aarti = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs(null));
  const [mobileNumber, setMobileNumber] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bookedDates, setBookedDates] = useState([]);

  const storage = getStorage();

  useEffect(() => {
    const fetchBookedDates = async () => {
      const unverifiedPrasadiSnapshot = await getDocs(collection(db, "unverifiedAarti"));
      const verifiedPrasadiSnapshot = await getDocs(collection(db, "verifiedAarti"));

      const unverifiedDates = unverifiedPrasadiSnapshot.docs.map(doc => doc.data().date);
      const verifiedDates = verifiedPrasadiSnapshot.docs.map(doc => doc.data().date);

      const allBookedDates = [...unverifiedDates, ...verifiedDates];
      setBookedDates(allBookedDates);
    };

    fetchBookedDates();
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!storage) {
      console.warn("Image upload functionality not configured");
      return;
    }
  
    const storageRef = ref(storage, `aartiImages/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload progress:", progress + "%");
      },
      (error) => {
        console.error(error);
        alert("Error uploading image. Please try again.");
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(storageRef);
          setImageUrl(downloadURL);
        } catch (error) {
          console.error(error);
          alert("Error getting download URL. Please try again.");
        }
      }
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !selectedDate || !mobileNumber || !donationAmount) {
      alert("Please fill in all required fields.");
      return;
    }

    const formattedDate = selectedDate.format("YYYY-MM-DD");

    const prasadiData = {
      name,
      fatherName,
      date: formattedDate,
      mobileNumber,
      donationAmount,
      imageUrl,
      timestamp: Timestamp.now(),
    };

    try {
      const docRef = await addDoc(collection(db, "unverifiedAarti"), prasadiData);
      console.log("Aarti data saved successfully:", docRef.id);

      setName("");
      setFatherName("");
      setSelectedDate(dayjs(null));
      setMobileNumber("");
      setDonationAmount("");
      setImageUrl("");
      alert("Your Aarti booking has been submitted successfully!");
    } catch (error) {
      console.error("Error saving Aarti data:", error);
      alert("There was an error saving your Aarti booking. Please try again.");
    }
  };

  const isTuesday = (date) => date.day() === 2;
  const isBooked = (date) => bookedDates.includes(date.format("YYYY-MM-DD"));

  return (
    <div className="flex sm:h-[100vh] h-fit w-full sm:flex-row flex-col">
      <div className="sm:w-[50%] h-full w-full flex flex-col items-center">
        <img className="sm:w-[50%] w-[70%] h-auto" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-illustration-gifts-puja-thali-kalash-png-image_9201456.png" />
        <p className="sm:text-3xl text-xl text-center mx-2 font-bold">
        श्री बजरंगबली जी की आरती व श्रृंगार के लाभार्थी बनने के लिए राशि : ₹ 1600/-
        </p>
        <div className="mt-3 sm:text-lg mx-2">
          <p>1. पैसे दिए गए स्कैनर पर जमा करे |</p>
          <p>2. पेमेंट का स्क्रीनशॉट नीचे दिए गए फॉर्म में डाले व अपनी आरती की तारिक सुनिश्चित करावे |</p>
        </div>
        <img className="sm:w-[20%] my-3 w-[50%]" src="https://i.ibb.co/w76S28S/UPI.jpg" />
      </div>
      
      <div className="sm:w-[50vw] flex justify-center items-center">
        <form className="sm:w-[50vw] sm:h-[95vh] max-w-md p-8 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="image">सफल पेमेंट का स्क्रीनशॉट:</label>
            <input onChange={handleImageUpload} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="image" type="file" placeholder="जमा की गई राशि" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
              नाम:
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="नाम"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fatherName">
              पिता का नाम:
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="fatherName"
              type="text"
              placeholder="पिता का नाम"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="date">
            आरती की उपलब्ध तिथि:
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="आरती उपलब्ध की तिथि"
                value={selectedDate}
                minDate={dayjs()}
                shouldDisableDate={(date) => !isTuesday(date) || isBooked(date)}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="mobileNumber">
              मोबाइल नंबर:
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="mobileNumber"
              type="number"
              placeholder="मोबाइल नंबर"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="donationAmount">
              दान राशि:
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="donationAmount"
              type="number"
              placeholder="दान राशि"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-bold text-center text-white bg-orange-500 rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            प्रसाद बुक करें
          </button>
        </form>
      </div>
    </div>
  );
};

export default Aarti;
