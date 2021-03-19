/** Workflow generator
 * A script that can be included with html pages. 
 * If you get to a page that is part of a workflow
 * You are automatically directed to the next page 
 * in the workflow once you are done with this page. 
 * 
 * To start we will assume that all pages that you 
 * are getting to are POST pages.*/ 

flow = {"1":"/page1.html", "2":"/page2.html", "3":"/page3.html"};

function checkCurrentState(){
    // Checks where you are in the workflow. 
    var fullURL         = $(location).attr("href");
    var stateParameter  = $.urlParam('state');
    
    if (stateParameter){
        $(location).attr('href', flow[stateParameter]);
    }

    //alert(c);
}

function goToNextStep(){
    // Moves you to the next step of the workflow
}

function initiateWorkFlow(){
    // kicks off the workflow
    // This one only matters if there are multiple, 
    //      specific workflows happening that need to be tracked.
}

// Get the URL parameters
// This code is found here: https://www.sitepoint.com/url-parameters-jquery/
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

$( document ).ready(function() {
    checkCurrentState();
});