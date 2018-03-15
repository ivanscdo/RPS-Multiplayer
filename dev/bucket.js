$(document).ready(function(){
    // console.log("red wine, success!")
    
    // let counter     = 0;
    let database    = firebase.database();
    let playerNumber = 1;
    
    function pressStart () {
    
        $("#player-login").on("click", function(){
            event.preventDefault();
    
            let playerName  = $("#player-name").val().trim();         
        
            // database.ref("players/" + playerName);
            // database.ref("players/" + playerName + "/name/").set(playerName);
            // database.ref("players/" + playerName + "/wins/").set(0);
            // database.ref("players/" + playerName + "/losses/").set(0);
            // database.ref("players/" + playerName + "/ties/").set(0);
            // database.ref("players/" + playerName + "/choice/").set("");
            // database.ref("players/" + playerName + "/player number/").set(1);        
            // counter++;
    
            // database.ref("players/player name " + playerName);
            // // database.ref("players/" + playerName + "/name/").set(playerName);
            // database.ref("players/player name " + playerName + "/wins/").set(0);
            // database.ref("players/player name " + playerName + "/losses/").set(0);
            // database.ref("players/player name " + playerName + "/ties/").set(0);
            // database.ref("players/player name " + playerName + "/choice/").set("");
            // // database.ref("players/" + playerName + "/player number/").set(1);
    
            database.ref("player" + playerNumber + "/");
            database.ref("player" + playerNumber + "/name/").set(playerName);
            database.ref("player" + playerNumber + "/wins/").set(0);
            database.ref("player" + playerNumber + "/losses/").set(0);
            database.ref("player" + playerNumber + "/ties/").set(0);
            database.ref("player" + playerNumber + "/choice/").set("");
            // database.ref("players/" + playerNumber + "/player number/").set(1);        
            
          
    
            $("#login-form").hide()
    
            // if (counter === 1) {
            //     // $("#waiting-p1").hide();
            //     $("#waiting-p1").text(playerName);
                
                
            // } else if (counter === 2) {
            //     // $("#waiting-p2").hide()
            //     $("#waiting-p2").text(playerName);          
    
            // }
    
            var welcomeScreen = $("<p>");
            welcomeScreen.text("Player " + playerName + ", ready!")
            welcomeScreen.appendTo("#welcome-screen");
    
    
    
            // database.ref().on("value", function(snapshot){
            //     let snap = snapshot.val();
            //     console.log(snap);
    
            // });
    
    
    
    
    
    
    
        //END OF: $("#player-login").on("click", function(){
        });
    
    //END OF: function pressStart () {
    }
    
    pressStart();
    
    // database.ref("players").limitToLast(1).on("child_added", function(snapshot) {
    //     let snap = snapshot.val();
    //     console.log(snap.name);
    
    //     $("#waiting-p2").text(snap.name)
    
    // //END OF:  database.ref("players").limitToLast(1).on("child_added", function(snapshot) {
    // });
    
    // database.ref("players").limitToFirst(1).on("child_added", function(snapshot) {
    //     let snap = snapshot.val();
    //     console.log(snap.name);
    
    //     $("#waiting-p1").text(snap.name)
    
    // //END OF:  database.ref("players").limitToLast(1).on("child_added", function(snapshot) {
    // });
    
    
    
    
    
    
    
    //END OF: $(document).ready(function(){
    });