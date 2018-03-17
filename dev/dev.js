$(document).ready(function(){
// console.log("red wine, success!")

const   database        = firebase.database();
let     playerNumber    = 1;

$("#player-login").on("click", function(){
    event.preventDefault();

    let playerName = $("#player-name").val().trim();         

    database.ref("player" + playerNumber + "/name/").set(playerName);

    $("#login-form").hide()

    var welcomeElement = $("<p>");
    welcomeElement.text("Player " + playerName + ", ready!")
    welcomeElement.appendTo("#welcome-screen");

//END OF: $("#player-login").on("click", function(){
});

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
    $(".rock.p1").text("Rock");
    $(".paper.p1").text("Paper");
    $(".scissors.p1").text("Scissors");

    $(".rock.p2").text("Rock");
    $(".paper.p2").text("Paper");
    $(".scissors.p2").text("Scissors");

    database.ref("player1/wins").set("");
    database.ref("player1/losses").set("");
    database.ref("player1/ties").set("");
    
    
    database.ref("player2/wins").set("");
    database.ref("player2/losses").set("");
    database.ref("player2/ties").set("");
    

    database.ref("turn").set("0");

    $("#start-button").hide();

//END OF: $("#start-button").on("click", function(){
});

$(".player-one").on("click", ".weapon", function(){
    // console.log( $(this).text() );
    var weaponChoice    = $(this).text(),
        weaponElement   = $("<h2>");

    weaponElement.text(weaponChoice);
    weaponElement.appendTo(".player-one");
    $(".weapon.p1").hide();
    
    database.ref("player1/choice").set(weaponChoice);

    database.ref("turn").set("1");    

//END OF: $(".player-one").on("click", ".weapon", function(){
});

$(".player-two").on("click", ".weapon", function(){
    // console.log( $(this).text() );
    var weaponChoice    = $(this).text(),
        weaponElement   = $("<h2>");

    weaponElement.text(weaponChoice);
    weaponElement.appendTo(".player-two");

    $(".weapon.p2").hide();

    database.ref("player2/choice").set(weaponChoice);
    
    database.ref("turn").set("2");

//END OF: $(".player-two").on("click", ".weapon", function(){
});

database.ref("turn").on("value", function(snapshot){
    // console.log("snap!", snapshot.val())
    
    var turnSnap = snapshot.val();

    if (turnSnap === "2") {
        database.ref().on("value", function(snapshot){
            // console.log("turnSnap is ", turnSnap);
            
            var mainSnap    = snapshot.val(),
                p1Weapon    = mainSnap.player1.choice,
                p2Weapon    = mainSnap.player2.choice,
                p1Wins      = 0, 
                p1Losses    = 0, 
                p2Wins      = 0, 
                p2Losses    = 0,
                pTies       = 0;

            if ( (p1Weapon === "Rock") && (p2Weapon === "Scissors") ) {
                p1Wins++;
                p2Losses++;
                database.ref("player1/wins").set(p1Wins);
                database.ref("player2/losses").set(p2Losses);

            } else if ((p1Weapon === "Rock") && (p2Weapon === "Paper")) {
                p2Wins++;
                p1Losses++;
                database.ref("player2/wins").set(p2Wins);
                database.ref("player1/losses").set(p1Losses);

            } else if ((p1Weapon === "Scissors") && (p2Weapon === "Rock")) {
                p2Wins++;
                p1Losses++;
                database.ref("player2/wins").set(p2Wins);
                database.ref("player1/losses").set(p1Losses);

            } else if ((p1Weapon === "Scissors") && (p2Weapon === "Paper")) {
                p1Wins++;
                p2Losses++;
                database.ref("player1/wins").set(p1Wins);
                database.ref("player2/losses").set(p2Losses);

            } else if ((p1Weapon === "Paper") && (p2Weapon === "Rock")) {
                p1Wins++;
                p2Losses++;
                database.ref("player1/wins").set(p1Wins);
                database.ref("player2/losses").set(p2Losses);

            } else if ((p1Weapon === "Paper") && (p2Weapon === "Scissors")) {
                p2Wins++;
                p1Losses++;
                database.ref("player2/wins").set(p2Wins);
                database.ref("player1/losses").set(p1Losses);

            } else if (p1Weapon === p2Weapon) {
                pTies++;
                database.ref("player1/ties").set(pTies);
                database.ref("player2/ties").set(pTies);
                
            }

        //END OF: database.ref().on("value", function(snapshot){
        }); 
    //END OF: if (turnSnap === "2") {
    }
// END OF: database.ref("turn").on("value", function(snapshot){
});



//END OF: $(document).ready(function(){
});