// Initialize the Google Map
function initMap() {
    const map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 15,
        center: { lat: 0, lng: 0 }, // This will center the map on (0, 0)
    });

    // Optionally, add a marker on the map
    const marker = new google.maps.Marker({
        position: { lat: 0, lng: 0 }, // Same location as the center of the map
        map: map,
        title: "Zakun Hotel & Suites",
    });
}

// Hamburger Toggle Script
document.getElementById("hamburger").addEventListener("click", () => {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("open");

    // Toggle the "active" class for the hamburger to change to "X"
    document.getElementById("hamburger").classList.toggle("active");
});

