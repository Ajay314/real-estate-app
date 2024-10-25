import React, { useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar'; 

const BookingPage = ({ property }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [bookingError, setBookingError] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleBooking = async () => {
    try {
      const response = await axios.post('http://localhost:3003/booking', {
        propertyId: property._id,
        date: selectedDate,
        time: selectedTime,
       
      });

      if (response.data.success) {
        setIsBookingConfirmed(true);
      
      } else {
        setBookingError(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setBookingError('An error occurred while booking. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Book {property.name}</h2>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <select value={selectedTime} onChange={handleTimeChange}>
        
        <option value="">Select Time</option>
        <option value="10:00 AM">10:00 AM</option>
      
      </select>
      <button onClick={handleBooking} disabled={!selectedDate || !selectedTime}>
        Book Now
      </button>
      {isBookingConfirmed && <p>Booking confirmed!</p>}
      {bookingError && <p>{bookingError}</p>}
    </div>
  );
};

export default BookingPage;