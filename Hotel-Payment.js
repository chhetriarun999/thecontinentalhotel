/*------------------------------------------------------------------------------------
Hotel-Payment.js
Arun Chhetri (T00722321)
 Website Designing Assignment:   The Continental Hotel 

This page ask the user for their payment information and book the choosen room by user. 
this is the javascript used for Hotel-Payment.html
---------------------------------------------------------------------------------------*/





window.onload = function() {
    // 🔥 STEP 1: Get URL parameters only once 
    const urlParams = new URLSearchParams(window.location.search);
    const roomType = urlParams.get('roomtype'); // Get the room type from the URL
    const checkInDate = urlParams.get('date');
    const days = parseInt(urlParams.get('days')) || 1; // Get the number of days, default to 1
    const specialRequests = urlParams.get('requests') ? urlParams.get('requests') : 'None';

    // 🔥 STEP 2: Calculate Check-Out Date 
    const checkInDateObj = new Date(checkInDate);
    const checkOutDateObj = new Date(checkInDateObj);
    checkOutDateObj.setDate(checkInDateObj.getDate() + days);

    const formattedCheckInDate = checkInDateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const formattedCheckOutDate = checkOutDateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // 🔥 STEP 3: Update room image based on room type 
    const roomImageElement = document.getElementById('room-image');
    const roomTypeElement = document.getElementById('room-type');
    const checkInDateElement = document.getElementById('check-in-date');
    const checkOutDateElement = document.getElementById('check-out-date');
    const specialRequestsElement = document.getElementById('special-requests');

    let roomImageUrl = '';
    let roomDescription = '';

    if (roomType === 'King') {
        roomImageUrl = 'Images/King-Room.jpg';
        roomDescription = 'King Room, 1 King Bed';
    } else if (roomType === 'Queen') {
        roomImageUrl = 'Images/Queen.jpg';
        roomDescription = 'Queen Room, 2 Queen Beds';
    } else if (roomType === 'PSuit') {
        roomImageUrl = 'Images/Presidenal-suit-living-room.avif';
        roomDescription = 'Presidential Suite, 1 King Bed';
    }

    roomImageElement.src = roomImageUrl;
    roomTypeElement.textContent = roomDescription;
    checkInDateElement.textContent = formattedCheckInDate;
    checkOutDateElement.textContent = formattedCheckOutDate;
    specialRequestsElement.textContent = specialRequests;

    // 🔥 STEP 4: Room Price Calculation 
    const roomPrices = {
        'King': 170.54,
        'Queen': 200.99,
        'PSuit': 250.75
    };

    const localTax = 8.54; 
    let couponDiscount = 0; 

    // Calculate prices 
    let roomPrice = roomPrices[roomType] || roomPrices['King'];
    let totalPrice = (roomPrice * days) + localTax;
    let payNowPrice = roomPrice * days;
    let payAtPropertyPrice = localTax;

    // 🔥 STEP 5: Update price elements 
    const roomPriceElement = document.getElementById('room-price');
    const totalPriceElement = document.getElementById('total-price');
    const payNowElement = document.getElementById('pay-now');
    const payAtPropertyElement = document.getElementById('pay-at-property');
    const totalNightsElement = document.getElementById('total-nights');
    const couponCodeInput = document.getElementById('coupon-code');
    const applyCouponButton = document.getElementById('apply-coupon');
    const couponMessage = document.getElementById('coupon-message');
    const discountMessage = document.getElementById('discount-message');

    updateDisplay();

    // 🔥 STEP 6: Coupon Code Application 
    applyCouponButton.addEventListener('click', function() {
        const couponCode = couponCodeInput.value.trim().toLowerCase();
        if (couponCode === 'save10' || couponCode === 'arun') {
            couponDiscount = 0.1; 
            updatePrices();
            discountMessage.textContent = `Discount: 10% off. Now total is: CA $${totalPriceElement.textContent}`;
            discountMessage.style.display = 'block';
            couponMessage.style.display = 'none';
        } else {
            couponMessage.textContent = 'Invalid Coupon Code';
            couponMessage.style.display = 'block';
            discountMessage.style.display = 'none';
        }
    });

    // 🔥 STEP 7: Update Prices After Coupon 
    function updatePrices() {
        const discountedPrice = (roomPrice * days) * (1 - couponDiscount);
        const updatedTotalPrice = discountedPrice + localTax;

        totalPrice = updatedTotalPrice;
        payNowPrice = discountedPrice;
        payAtPropertyPrice = localTax;

        updateDisplay();
    }

    // 🔥 STEP 8: Update Display for Price Details 
    function updateDisplay() {
        roomPriceElement.textContent = roomPrice.toFixed(2);
        totalPriceElement.textContent = totalPrice.toFixed(2);
        payNowElement.textContent = payNowPrice.toFixed(2);
        payAtPropertyElement.textContent = payAtPropertyPrice.toFixed(2);
        totalNightsElement.textContent = days;
    }
}