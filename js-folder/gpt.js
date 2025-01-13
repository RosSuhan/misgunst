const maxParticipants = 12; // Maximum participants per group
const groupsPerDay = 4; // Maximum groups per day
const sheetAPIUrl = "https://script.google.com/macros/s/AKfycbxTQE0LwIVj7TYWaF0jHrS8CPB2df3gqWpR8_5C-bKKrT-G8paSvNMi4NWp5m934Nn74g/exec";

document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("4x4Bookings");
  const timeSlotSelect = document.getElementById("time");
  const statusDiv = document.getElementById("status");

  // Fetch existing bookings from Google Sheet
  async function fetchBookings() {
    try {
      const response = await fetch(sheetAPIUrl);
      const bookings = await response.json();
      return bookings; // Should return a list of bookings with date, timeSlot, and participants
    } catch (error) {
      console.error("Error fetching bookings:", error);
      return [];
    }
  }

  

  // Update time slot availability
  async function updateTimeSlotAvailability() {
    const bookings = await fetchBookings();
    const selectedDate = document.getElementById("activityDate").value;
    
    const slotCounts = {}; // To keep track of participants per time slot
    bookings.forEach((booking) => {
      if (booking.date === selectedDate) {
        slotCounts[booking.timeSlot] = 
          (slotCounts[booking.timeSlot] || 0) + parseInt(booking.participants, 10);
      }
    });
  }

    console.log()
});