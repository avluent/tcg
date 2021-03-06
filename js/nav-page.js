$(document).ready(function(){

    // disable ajax caching for IE
    $.ajaxSetup({ cache: false });

    // Array of whitelisted pages and global variable declaration
    var validHash = ["aktuell","kontakt-anfahrt","impressum","mitglieder","termine"];
    var entryPage = validHash[0];
    var speed = 400;

    // On init page
    $("body").ready(function(e) {
        // If hash value was already set on address bar
        if(typeof(urlHash()) != "undefined" && urlHash()) {
            $.ajax({url: "html/"+urlHash()+".html", success: function(result){
                $("#page-frame").hide().html(result).fadeIn(speed); }
            });       
        $("#" + urlHash()).addClass("selected");
        } else { // No hash
            $.ajax({url: "html/"+entryPage+".html", success: function(result){
                $("#page-frame").hide().html(result).fadeIn(speed); }
            });
        $("#" + entryPage).addClass("selected");
        }
    });

    // On hash change
    $(window).on('hashchange', function(event) {
        // No hash
        if (urlHash()==="" || urlHash() ==="undefined") {
            $.ajax({url: "html/"+entryPage+".html", success: function(result){
                $("#page-frame").hide().html(result).fadeIn(speed); }
            });
        $(".navbar-item").removeClass("selected");
        $("#" + entryPage).addClass("selected");
        } else { // use hash to display page
            $.ajax({url: "html/"+urlHash()+".html", success: function(result){
                $("#page-frame").hide().html(result).fadeIn(speed); }
            });
        $(".navbar-item").removeClass("selected");
        $("#" + urlHash()).addClass("selected");
        }
    });
    
    // Function for updating and returning the hash from the address bar
    var urlHash = function() { 
        return window.location.hash.replace('#',''); 
    }; 
});