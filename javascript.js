// Accordian JS for About Us page
//Owner: Dale Langford
//Date: 11/11/2020
//From:
//https://jqueryui.com/accordion/

$( function() {
    $( "#accordion" ).accordion();
  } );

  // End Owner: Dale Langford

  //Test java for navbar
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }