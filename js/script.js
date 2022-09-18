document.getElementById('button-addon').addEventListener('click',()=>{
    const inputField = document.getElementById('inputField');
    const inputFieldValue = inputField.value;
    let ipAddress = inputFieldValue;
    const url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_EP3bxLFf61aTLFzAiSrAGZ85rMOsX&ipAddress=${ipAddress}`
    fetch(url)
    .then( res => res.json())
    .then(data => loadData(data));

    const loadData =data =>{
    const lat = data.location.lat;
    const lng = data.location.lng;
    const ip = data.ip;
    const location = data.location.city;
    const timeZone = data.location.timezone;
    const isp = data.as?.name;
    const ipField = document.getElementById('ipField');
    ipField.innerText = ip;
    const locationField = document.getElementById('locationField');
    locationField.innerText = location;
    const timeZoneField = document.getElementById('timeZoneField');
    timeZoneField.innerText = timeZone;
    const ispField = document.getElementById('ispField');
    ispField.innerText = isp;
    let map = L.map('map').setView([lat, lng], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
L.marker([lat, lng]).addTo(map)
    .bindPopup(location)
    .openPopup();
}
inputField.innerText = '';
})







