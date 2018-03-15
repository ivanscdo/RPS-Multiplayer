$(document).ready(function(){
// console.log("red wine, success!")

var database        = firebase.database(),
    playerNumber    = 1;

function pressStart () {

    $("#player-login").on("click", function(){
        event.preventDefault();

        let playerName  = $("#player-name").val().trim();         
    
        database.ref("player" + playerNumber + "/");
        database.ref("player" + playerNumber + "/name/").set(playerName);
        database.ref("player" + playerNumber + "/wins/").set(0);
        database.ref("player" + playerNumber + "/losses/").set(0);
        database.ref("player" + playerNumber + "/ties/").set(0);
        database.ref("player" + playerNumber + "/choice/").set("");
        console.log("pressStart:", playerNumber)   

        $("#login-form").hide()

        var welcomeScreen = $("<p>");
        welcomeScreen.text("Player " + playerName + ", ready!")
        welcomeScreen.appendTo("#welcome-screen");

    //END OF: $("#player-login").on("click", function(){
    });

//END OF: function pressStart () {
}

pressStart();

database.ref("player1").on("value", function(snapshot) {
    let snap = snapshot.val();
    console.log(snap.name);

    $("#waiting-p1").text(snap.name)
    playerNumber++;
    
//END OF:  database.ref("players").limitToLast(1).on("child_added", function(snapshot) {
});


database.ref("player2").on("value", function(snapshot) {
    let snap = snapshot.val();
    console.log(snap.name);

    $("#waiting-p2").text(snap.name)

//END OF:  database.ref("players").limitToLast(1).on("child_added", function(snapshot) {
});

console.log(playerNumber);






//END OF: $(document).ready(function(){
});