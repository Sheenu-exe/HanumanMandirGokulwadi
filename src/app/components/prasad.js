"use client";

import { useState, useEffect } from "react";
import { db, storage } from "../../../API/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { collection, addDoc, getDocs, query, where, doc, updateDoc, Timestamp } from "@firebase/firestore";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import moment from 'moment';

const Prasad = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [allBookedDates, setAllBookedDates] = useState([]);
  const timestamp = new Date()
  
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    const fetchBookedDates = async () => {
      const bookedDateRef = collection(db, 'bookedDates');
      const timestamp = selectedDate ? Timestamp.fromDate(selectedDate) : null; // Fix for null selectedDate

      const fetchedBookedDates = await getDocs(bookedDateRef)
      .then((snapshot) => snapshot.docs.map((doc) => doc.data().date?.toDate() || new Date()));
      setAllBookedDates(fetchedBookedDates);
    };
    fetchBookedDates();
  }, []);

  const isTuesday = (date) => {
    if (date) {
      return new Date(date).getDay() === 2;
    } else {
      return false;
    }
  };
  const isDateAvailable = (date) => {
    return allBookedDates.every((bookedDate) => {
      try {
        // Assuming Firestore document with `date` field:
        return bookedDate.data().date.toDate().getTime() !== date.getTime();
      } catch (error) {
        console.error("Error checking booked date:", error);
        // Handle potential errors (e.g., consider returning true to allow selection)
        return true; // Allow selection if there's an error
      }
    });
  };
  

  const handleDateChange = (newValue) => {
    if (newValue && isTuesday(new Date(newValue)) && isDateAvailable(new Date(newValue))) {
      setSelectedDate(newValue);
    }
  };


  

  const handleBooking = async () => {
    if (selectedDate) {
      setIsLoading(true);

      try {
        const bookedDatesRef = collection(db, 'bookedDates');

        if (image) {
          const imageRef = ref(storage, `prasadi/${image.name}`);
          await uploadBytes(imageRef, image);
          const imageUrl = await getDownloadURL(imageRef);
          const bookedDate = selectedDate.$d
          
          const bookingData = {
            name,
            fatherName,
            number,
            amount,
            imageUrl,
            bookedDate,
            
          };

          await addDoc(bookedDatesRef, bookingData);
        } else {
          const bookedDateDocRef = query(
            collection(db, 'bookedDates'),
            where('date', '==', selectedDate.$d)
          );
          const bookedDateSnapshot = await getDocs(bookedDateDocRef);

          if (bookedDateSnapshot.empty) {
            await addDoc(bookedDatesRef, { date: selectedDate });
          } else {
            const bookedDoc = bookedDateSnapshot.docs[0];
            const bookedDate = selectedDate.$d
            await updateDoc(doc(db, 'verifybookedDates', bookedDoc.id), {
              name,
              fatherName,
              number,
              amount,
              bookedDate
            });
          }
        }

        
        setSelectedDate(null);
        alert("Donation submitted successfully!");
        setName("");
        setNumber("");
        setAmount("");
        setImage(null);
      } catch (error) {
        console.error("Error submitting donation:", error);
             } finally {
        setIsLoading(false);
      }
    }
  };


  return (
    <div className="flex h-[100vh] w-full sm:flex-row flex-col">
      <div className="sm:w-[50%] h-full w-full flex flex-col items-center">
        <img className="w-[50%] h-auto" src="https://i.ibb.co/G5cqXfG/Pngtree-laddu-png-indian-sweet-5962816.png" />
        <p className="text-3xl mx-2 font-bold">
          श्री बजरंगबली जी की प्रसादी के लाभार्थी बनने के लिए राशि : Rs 2100/-
        </p>
        <div className="mt-3 text-lg mx-2">
          <p>1. पैसे दिए गए स्कैनर पर जमा करे</p>
          <p>2. पेमेंट का स्क्रीनशॉट नीचे दिए गए फॉर्म में डाले व अपनी प्रसादी की तारिक सुनिश्चित करावे</p>
        </div>
        <img className="w-[20%]" src="https://i.ibb.co/w76S28S/UPI.jpg" />
      </div>
      <div>

      </div>
      <div className="w-[50%]  bg-orange-100 flex justify-center items-center">
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
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">पिता का नाम:</label>
            <input value={fatherName} onChange={(e) => setFatherName(e.target.value)} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="पिता का नाम" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">आरती की तारीख (मंगलवार ही स्वीकृत):</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Pick a Date (Tuesdays only)"
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
                shouldDisableDate={(date) => !isTuesday(date) || !isDateAvailable(date)}
                onAccept={handleBooking}
              />
            </LocalizationProvider>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="mobile">मोबाइल नंबर:</label>
            <input value={number} onChange={(e) => setNumber(e.target.value)} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="mobile" type="number" placeholder="मोबाइल नंबर" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="donation">जमा की गई राशि:</label>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="donation" type="number" placeholder="जमा की गई राशि" />
          </div>
          <button
            onClick={handleBooking}
            className={`w-full px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700 ${isLoading ? "disabled cursor-wait" : ""
              }`}
            type="button"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "दान करें"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Prasad;