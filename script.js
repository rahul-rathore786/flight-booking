const themeSwitch = document.getElementById("theme-switch");
const menuBtn = document.getElementById("menu-btn");
const searchForm = document.getElementById("search-form");
const resultsSection = document.querySelector(".results-section");
const bookingSection = document.querySelector(".booking-section");

// script.js

// Function to toggle dark theme
function toggleDarkTheme() {
  // Add a class to the body to switch to dark theme
  document.body.classList.add("dark-theme");
}

// Function to toggle light theme
function toggleLightTheme() {
  // Remove the class from the body to switch to light theme
  document.body.classList.remove("dark-theme");
}

// Theme toggle functionality
themeSwitch.addEventListener("change", function () {
  document.body.classList.toggle("dark");
});

// Menu toggle functionality (for smaller screens)
menuBtn.addEventListener("click", function () {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
});

// Search form submission (placeholder functionality)
searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Simulate search results
  resultsSection.classList.remove("hidden");
  bookingSection.classList.add("hidden");

  // Replace with actual search logic and API calls to populate results
  const flightList = document.querySelector(".flight-list");
  flightList.innerHTML = `
    <li>
      <h2>Airline: Indigo</h2>
      
      <p>Departure: City A (10:00 AM) - Arrival: City B (12:00 PM)</p>
      <p>Price: Rs.1000 (one-way)</p>
      <button>Select</button>
    </li>
    `;
});

// Functionality for selecting a flight (placeholder)
resultsSection.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    // Simulate loading passenger information form
    resultsSection.classList.add("hidden");
    bookingSection.classList.remove("hidden");

    // Replace with actual logic to fetch passenger details from user
    const passengerInfo = document.querySelector(".passenger-info");
    passengerInfo.innerHTML = `
      <h3>Passenger Information</h3>
      <div class="field">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter Passenger Name">
      </div>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter Passenger Email">
      </div>
      `;

    // Simulate loading flight details
    const flightDetails = document.querySelector(".flight-details");
    flightDetails.innerHTML = `
      <h3>Flight Details</h3>
      <img src="ticket.png" alt="" />
      <p>Airline: Indigo</p>
      <p>Departure: City A (10:00 AM)</p>
      <p>Arrival: City B (12:00 PM)</p>
      <p>Price: Rs.1000 (one-way)</p>
    `;

    // Simulate loading payment options
    const paymentInfo = document.querySelector(".payment-info");
    paymentInfo.innerHTML = `
      <h3>Payment Information</h3>
      <img src="payment-gateway.png" alt="cart" width="100" height="100"/> 
      <label for="payment-method">Payment Method:</label>
      <select name="payment-method" id="payment-method">
        <option value="credit-card">Credit Card</option>
        <option value="other">Other</option>
      </select>
      <div class="payment-fields hidden">
        <div class="field">
          <label for="card-number">Card Number:</label>
          <input type="text" id="card-number" name="card-number" placeholder="Enter Card Number">
        </div>
        <div class="field">
          <label for="expiry-date">Expiry Date:</label>
          <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY">
        </div>
        <div class="field">
          <label for="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" placeholder="Enter CVV">
        </div>
      </div>
    `;

    // Add event listener to toggle payment fields based on selection
    const paymentMethod = document.getElementById("payment-method");
    paymentMethod.addEventListener("change", function () {
      const paymentFields = document.querySelector(".payment-fields");
      if (paymentMethod.value === "credit-card") {
        paymentFields.classList.remove("hidden");
      } else {
        paymentFields.classList.add("hidden");
      }
    });
  }
});

// Placeholder booking confirmation functionality (replace with actual payment processing)
bookingSection.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Your booking is confirmed! (placeholder)");
});
