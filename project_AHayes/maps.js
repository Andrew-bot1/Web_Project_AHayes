// Function to set up and display the Amarillo College Map
function initMap() {

   // Page objects
   let displayMap = document.getElementById("displayMap");
   let routeBox = document.getElementById("routeBox");

   // Create a map to the Amarillo College
   let amarilloCollege = { lat: 35.19081636401641, lng: -101.84756885582965 };
   let civicCenter = { lat: 35.208500379566146, lng: -101.83029464803668 };

   //create map for cabin air bnb
   let cabin = {lat: 60.43284003080997, lng:-149.26192214882792};
   //create map for jam jam's sandwich shop
   let jam ={lat:63.38803672782508, lng:-148.90394260334827};
   //create map for rose's cafe sandwich shop
   let roses ={lat:63.8795736536412, lng:-149.0265008407091};
   //create map for park
   let park ={lat:63.28285938849668, lng:-150.78926049354786};
   
   //declare destination
   let destination=cabin;

    // Set up direction service and rendering
    let routeFind = new google.maps.DirectionsService(); // find the routing
    let routeDraw = new google.maps.DirectionsRenderer(); // draw the routing

   //create change event for button
   document.getElementById("goButton").onclick=function() {
      //create variabe for destination option
       let destinationOption = document.getElementById("myDestination").value;

      //set destination to map depending on user's choice
      if (destinationOption=="Inn") {
          destination=cabin;
      }
      else if (destinationOption=="jam") {
          destination=jam;
      }
      else if (destinationOption=="roses") {
          destination=roses;
      }
      else {
          destination=park;
      }

       // Drive from current location to Amarillo College
      let myRoute = {
         origin: amarilloCollege,
         destination: destination,
         travelMode: "DRIVING"
      }

      // Generate directions for the route
      routeFind.route(myRoute, function (result, status) {
         if (status == "OK") {

           // console.log(result)
            routeDraw.setDirections(result);
            // Display route and directions
            routeDraw.setMap(myMap);
            routeDraw.setPanel(routeBox);
         } else {
            routeBox.textContent = "Directions Unavailable: " + status;
         }
      });
   }

 // declare a varible to hold
   let myMap = new google.maps.Map(displayMap, {
      zoom: 11,
      center: amarilloCollege,
      fullscreenControl: false
   });

 
   //  // Add a marker for the Amarillo College
   new google.maps.Marker({
      position: amarilloCollege,
      map: myMap,
      title: "Amarillo College"
   });

    //  // Add a marker for the Amarillo College
    new google.maps.Marker({
      position: civicCenter,
      map: myMap,
      title: "civicCenter"
   });

   // Get the device's current position
   navigator.geolocation.getCurrentPosition(getPos, handleError);

   function getPos(pos) { //pos: is current position of the device: mobile/computer
      let myPosition = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude

         // lat: 35.208500379566146,
         // lng: -101.83029464803668
      }

      console.log(myPosition);

   }

   // In case of geolocation error
   function handleError(err) {
      console.log("Geolocation error: " + err.message);
   }
}
