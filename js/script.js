

document.getElementById('button-addon').addEventListener('click',()=>{
    const inputField = document.getElementById('inputField');
    let inputFieldValue = inputField.value;
    // var container = L.DomUtil.get('map');
    // if(container != null){
    // container._leaflet_id = null;
    // }
    const url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_EP3bxLFf61aTLFzAiSrAGZ85rMOsX&ipAddress=${inputFieldValue}`
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
    var container = L.DomUtil.get('map');
    if(container != null){
    container._leaflet_id = null;
    }
    var map = L.map('map').setView([lat, lng], 13);
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

var map = L.map('map').setView([25.34292776226863, 72.62408240036223], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
L.marker([25.34292776226863, 72.62408240036223]).addTo(map)
    .bindPopup(location)
    .openPopup();