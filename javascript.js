// Accordian JS for About Us page and Nav Bar
//Owner: Dale Langford
//Date: 12/06/2020
//From:
//https://jqueryui.com/accordion/

$( function() {
    $( "#accordion" ).accordion();
  } );



//Java for navbar
// https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  // End Owner: Dale Langford