/**
 * Created by 전병욱 on 2017-07-01.
 */
function showlogin(){
    $("#login").css("max-height", "500px");
    $("#login").css("transition", "max-height 0.35s ease-in");
    $("#login").css("z-index", "100");
}
function showsearch(){
    $("#search").css("max-width", "1000px");
    /*$("#search").css("transition", "max-width 0.35s ease-in");*/
    $("#search").css("z-index", "100");
    $("#shadow").css("min-width", "100%");
    $("#shadow").css("min-height", "1169px");
    $("#shadow").css("z-index", "50");

}
window.onclick = function(e){
    if(e.target.matches('.arrow-right')){

    }
    else if (!e.target.matches('#loginbutton')) {
        $("#login").css("max-height", "0px");
        $("#login").css("z-index", "0");
    }
    if(e.target.matches('.arrow-right')){

    }
    else if(e.target.matches('#searchbox')){

    }
    else if(e.target.matches('#searchdiv')){

    }
    else if (!e.target.matches('#searchbutton')) {
        $("#search").css("max-width", "0px");
        $("#search").css("z-index", "0");
        $("#shadow").css("min-width", "0");
        $("#shadow").css("min-height", "0");
    }

}