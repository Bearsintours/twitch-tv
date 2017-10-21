$(document).ready(function() {

  // Array listing channels
  var channel = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404", "brunofin"];

  //For loop to iterate through channels
  for (var i = 0; i < channel.length; i++) {

    //Build url with twitch API
    var urlChannel = "https://wind-bow.gomix.me/twitch-api/channels/" + channel[i] + "?callback=?";

    //GetJSON Call
    $.getJSON(urlChannel, function(data) {

      //Create variables to store data
      var channelName = data.name;
      var logo = data.logo;
      var link = data.url;
      var status = data.status;

      // Check if account undefined
      if (status == "404") {
        logo = "http://www.clipartbest.com/cliparts/niB/Bq8/niBBq8A9T.png";
        channelName = "account closed";
      }

      //Add div with channel name and logo
      var channels = $("#channels");
      channels.append("<a href=" + link + " target='blank'><div class = 'align'><img src=" + logo + "></img>" + channelName + "</div></a>");

    }); //End getJSON call

    // Build other URL with Twitch API
    var urlStream = "https://wind-bow.gomix.me/twitch-api/streams/" + channel[i] + "?callback=?";

    // Get JSON call
    $.getJSON(urlStream, function(data) {

      // Create variables to store data    
      var stream = data.stream;
      var activity;

      //Check if channel is online or offline and get streaming data
      if (stream === null) {
        activity = "Offline";
      } else {
        activity = "Online: " + data.stream.game;
      };

      // Add div with streaming info
      var streamings = $("#streamings");
      streamings.append("<div class = 'align'>" + activity + "<div>");

    }); // End GetJSON call
  } // End For loop
});
