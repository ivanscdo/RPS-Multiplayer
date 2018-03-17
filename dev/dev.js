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
    // console.log("inside player.onvalue!")
    // sessionStorage.setItem("player", snap.name);
    
//END OF:  database.ref("players").limitToLast(1).on("child_added", function(snapshot) {
});

database.ref("player2").on("value", function(snapshot) {
    let snap = snapshot.val();
    // console.log(snap.name);

    $("#waiting-p2").text(snap.name)

    // sessionStorage.setItem("player", snap.name);
    

//END OF:  database.ref("players").limitToLast(1).on("child_added", function(snapshot) {
});

$("#start-button").on("click", function(){

    $(".weapon.p2").show();
    $(".weapon.p1").show();
    $("#results").hide();
    $("#weapon-element-p1").remove();
    $("#weapon-element-p2").remove();

    database.ref("player1/choice").set("");
    database.ref("player2/choice").set("");
    
    $(".rock.p1").text("Rock");
    $(".paper.p1").text("Paper");
    $(".scissors.p1").text("Scissors");

    $(".rock.p2").text("Rock");
    $(".paper.p2").text("Paper");
    $(".scissors.p2").text("Scissors");

    database.ref("player1/wins").set("");
    database.ref("player1/losses").set("");
    // database.ref("player1/ties").set("");
    
    database.ref("player2/wins").set("");
    database.ref("player2/losses").set("");
    // database.ref("player2/ties").set("");
    
    database.ref("turn").set("0");

    $("#start-button").hide();

//END OF: $("#start-button").on("click", function(){
});

$(".player-one").on("click", ".weapon", function(){
    // console.log( $(this).text() );
    var weaponChoice    = $(this).text(),
        weaponElement   = $("<h2>");

    weaponElement.attr("id", "weapon-element-p1")       
    weaponElement.text(weaponChoice);
    $("#weapon-element-p1").show();        
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

    weaponElement.attr("id", "weapon-element-p2")
    weaponElement.text(weaponChoice);
    $("#weapon-element-p2").show();    
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

                $("#results").show();            
                $("#results").text(mainSnap.player1.name + " wins!")

                $(".p1-W").text("Wins: " + p1Wins);
                $(".p2-L").text("Losses: " + p2Losses);

            } else if ((p1Weapon === "Rock") && (p2Weapon === "Paper")) {
                p2Wins++;
                p1Losses++;
                database.ref("player2/wins").set(p2Wins);
                database.ref("player1/losses").set(p1Losses);

                $("#results").show();                            
                $("#results").text(mainSnap.player2.name + " wins!")

                $(".p2-W").text("Wins: " + p2Wins);
                $(".p1-L").text("Losses :"+ p1Losses);                

            } else if ((p1Weapon === "Scissors") && (p2Weapon === "Rock")) {
                p2Wins++;
                p1Losses++;
                database.ref("player2/wins").set(p2Wins);
                database.ref("player1/losses").set(p1Losses);

                $("#results").show();                            
                $("#results").text(mainSnap.player2.name + " wins!")

                $(".p2-W").text("Wins: " + p2Wins);
                $(".p1-L").text("Losses :"+ p1Losses); 
                

            } else if ((p1Weapon === "Scissors") && (p2Weapon === "Paper")) {
                p1Wins++;
                p2Losses++;
                database.ref("player1/wins").set(p1Wins);
                database.ref("player2/losses").set(p2Losses);

                $("#results").show();                            
                $("#results").text(mainSnap.player1.name + " wins!")

                $(".p1-W").text("Wins: " + p1Wins);
                $(".p2-L").text("Losses: " + p2Losses);
                

            } else if ((p1Weapon === "Paper") && (p2Weapon === "Rock")) {
                p1Wins++;
                p2Losses++;
                database.ref("player1/wins").set(p1Wins);
                database.ref("player2/losses").set(p2Losses);

                $("#results").show();                            
                $("#results").text(mainSnap.player1.name + " wins!")

                $(".p1-W").text("Wins: " + p1Wins);
                $(".p2-L").text("Losses: " + p2Losses);
                

            } else if ((p1Weapon === "Paper") && (p2Weapon === "Scissors")) {
                p2Wins++;
                p1Losses++;
                database.ref("player2/wins").set(p2Wins);
                database.ref("player1/losses").set(p1Losses);

                $("#results").show();                            
                $("#results").text(mainSnap.player2.name + " wins!")
                
                $(".p2-W").text("Wins: " + p2Wins);
                $(".p1-L").text("Losses :"+ p1Losses); 

            } 
            // else if (p1Weapon === p2Weapon) {
            //     pTies++;
            //     database.ref("player1/ties").set(pTies);
            //     database.ref("player2/ties").set(pTies);

            //     $("#results").show();                            
            //     $("#results").text("Tie!")
                
                
            // }





        //END OF: database.ref().on("value", function(snapshot){
        }); 


    $("#start-button").show();


    //END OF: if (turnSnap === "2") {
    }


// END OF: database.ref("turn").on("value", function(snapshot){
});

$("#chat-btn").on("click", function(){
    event.preventDefault();

    var chatMsg = $("#chat-msg").val().trim();

    database.ref("chats").set(chatMsg);

    $("#chat-msg").val("");

});

database.ref("chats").on("value", function(snapshot){
    var chatSnap = snapshot.val();

    chatElement = $("<p>");

    chatElement.text(chatSnap);
    chatElement.appendTo("#sent-chats");

//END OF: database.ref("chats").on("value", function(){
});




//END OF: $(document).ready(function(){
});