
function goToParkingPage(location) {
    window.location.href = `parking.html?location=${location}`;
}

// Simulated sensor data function (replace with API call for real data)
function getParkingData(location) {
    const parkingData = {
        mall: {
            '1': 5, 
            '2': 8  
        },
        hospital: {
            '1': 2,  
            '2': 10  
        }
    };
    return parkingData[location] || {};
}

// Display the parking data for the selected location
function showParkingData() {
    const params = new URLSearchParams(window.location.search);
    const location = params.get('location');
    
    if (location) {
        const formattedLocation = location.charAt(0).toUpperCase() + location.slice(1);
        document.getElementById('location-title').textContent = `${formattedLocation} Parking Availability`;
        document.getElementById('location-description').textContent = `Current parking space availability for ${formattedLocation}:`;

        const parkingData = getParkingData(location);

        // Update the page with the parking data
        document.getElementById('slots-1').textContent = parkingData['1'];
        document.getElementById('slots-2').textContent = parkingData['2'];
    }
}

// Automatically load parking data when the page is accessed
window.onload = showParkingData;
