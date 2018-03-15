$(document).ready(function(){
// console.log("red wine, success!")

var database        = firebase.database(),
    playerNumber    = 1;

// function pressStart () {

    $("#player-login").on("click", function(){
        event.preventDefault();

        let playerName  = $("#player-name").val().trim();         
    
        // database.ref("player" + playerNumber + "/");
        database.ref("player" + playerNumber + "/name/").set(playerName);
        // database.ref("player" + playerNumber + "/wins/").set(0);
        // database.ref("player" + playerNumber + "/losses/").set(0);
        // database.ref("player" + playerNumber + "/ties/").set(0);
        // database.ref("player" + playerNumber + "/choice/").set("");
        // console.log("pressStart:", playerNumber)   

        $("#login-form").hide()

        var welcomeScreen = $("<p>");
        welcomeScreen.text("Player " + playerName + ", ready!")
        welcomeScreen.appendTo("#welcome-screen");

    //END OF: $("#player-login").on("click", function(){
    });

//END OF: function pressStart () {
// }

// pressStart();

database.ref("player1").on("value", function(snapshot) {
    let snap = snapshot.val();
    // console.log(snap.name);

    $("#waiting-p1").text(snap.name)
    playerNumber++;
    
//END OF:  database.ref("players").limitToLast(1).on("child_added", function(snapshot) {
});


database.ref("player2").on("value", function(snapshot) {
    let snap = snapshot.val();
    // console.log(snap.name);

    $("#waiting-p2").text(snap.name)

//END OF:  database.ref("players").limitToLast(1).on("child_added", function(snapshot) {
});

$("#start-button").on("click", function(){
    $(".rock.p1").text("Rock")
    $(".paper.p1").text("Paper")
    $(".scissors.p1").text("Scissors")

    $(".rock.p2").text("Rock")
    $(".paper.p2").text("Paper")
    $(".scissors.p2").text("Scissors")

    // database.ref("player1/choice").set("");
    database.ref("player1/wins").set("");
    database.ref("player1/losses").set("");
    
    // database.ref("player2/choice").set("");
    database.ref("player2/wins").set("");
    database.ref("player2/losses").set("");

    database.ref("turn").set("0");

//END OF: $("#start-button").on("click", function(){
});

$(".player-one").on("click", ".weapon", function(){
    // console.log( $(this).text() );
    var weaponChoice = $(this).text(),
        weaponElement = $("<h2>");

    weaponElement.text(weaponChoice)
    weaponElement.appendTo(".player-one")
    $(".weapon.p1").hide();
    
    database.ref("player1/choice").set(weaponChoice);
    


//END OF: $(".player-one").on("click", ".weapon", function(){
});

$(".player-two").on("click", ".weapon", function(){
    // console.log( $(this).text() );
    var weaponChoice = $(this).text(),
        weaponElement = $("<h2>");

    weaponElement.text(weaponChoice)
    weaponElement.appendTo(".player-two")
    $(".weapon.p2").hide();

    database.ref("player2/choice").set(weaponChoice);    


//END OF: $(".player-two").on("click", ".weapon", function(){
});

// database.ref().on("child_changed", function(snapshot){
database.ref().on("value", function(snapshot){
    // console.log("snap!", snapshot.val())
    
    var snap        = snapshot.val(),
        p1Weapon    = snap.player1.choice,
        p2Weapon    = snap.player2.choice,
        p1wins      = 0, 
        p1losses    = 0, 
        p2wins      = 0, 
        p2losses    = 0;

    console.log("p1w:", p1Weapon);
    console.log("p2w:", p2Weapon);


        // if ((p1Weapon === "Rock") && (p2Weapon === "Scissors")) {
        //     p1wins++;
        //     p2losses++;
        //     database.ref("player1/wins").set(p1wins);
        //     database.ref("player2/losses").set(p2losses);
        //     console.log("p1wins");
            
        // } 
        // else if ((p1Weapon === "Rock") && (p2Weapon === "Paper")) {
        //     losses++;
        // } else if ((p1Weapon === "Scissors") && (p2Weapon === "Rock")) {
        //     losses++;
        // } else if ((p1Weapon === "Scissors") && (p2Weapon === "Paper")) {
        //     wins++;
        // } else if ((p1Weapon === "Paper") && (p2Weapon === "Rock")) {
        //     wins++;
        // } else if ((p1Weapon === "Paper") && (p2Weapon === "Scissors")) {
        //     losses++;
        // } else if (p1Weapon === p2Weapon) {
        //     ties++;
        // }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        // var html =
        //     "<p>You chose: " + userGuess + "</p>" +
        //     "<p>The computer chose: " + computerGuess + "</p>" +
        //     "<p>wins: " + wins + "</p>" +
        //     "<p>losses: " + losses + "</p>" +
        //     "<p>ties: " + ties + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        // document.querySelector("#game").innerHTML = html;
    



});



//END OF: $(document).ready(function(){
});