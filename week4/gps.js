// Your code goes here
document.addEventListener("DOMContentLoaded", setupListeners)

function setupListeners() {
  const link = document.querySelector("#get_location")
  link.addEventListener("click", function(e) {
    navigator.geolocation.getCurrentPosition(receiveLocation);
  });
}

function receiveLocation(gps) {
  console.log(gps)
  setImagePosition(gps)
}

// Do not change the code below
function setImagePosition(data) {
  console.log(data);
  const latitude = data.coords.latitude
  const longitude = data.coords.longitude
  const new_src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=15&size=600x400&maptype=road&key=AIzaSyBrLfaqBHZNoiI8463XDdy57fJHiwA8vy4"
  document.querySelector("img").src = new_src
}

