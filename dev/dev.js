$(document).ready(function(){
// console.log("red wine, success!")


function pressStart () {

    $("#player-login").on("click", function(){
        event.preventDefault();

        let database    = firebase.database(),
            playerName  = $("#player-name").val().trim();
        
        database.ref("players/" + playerName);
        database.ref("players/" + playerName + "/name/").set(playerName);
        database.ref("players/" + playerName + "/wins/").set(0);
        database.ref("players/" + playerName + "/losses/").set(0);
        database.ref("players/" + playerName + "/ties/").set(0);
        database.ref("players/" + playerName + "/choice/").set("");

        $("#login-form").hide()

        var welcomeScreen = $("<p>");
        welcomeScreen.text("Player 1 " + playerName + ", ready!")
        welcomeScreen.appendTo("#welcome-screen");

    //END OF: $("#player-login").on("click", function(){
    });

//END OF: function pressStart () {
}

pressStart();

//END OF: $(document).ready(function(){
});