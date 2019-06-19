

$(function() {
    let rmmode = false;
    $("#delete").on('click', function(){
        rmmode = true;
    });
    $("body").on('click', function(event){
        if (rmmode === true && event.target.id !== "delete") {
            event.preventDefault();
            event.target.remove();
        }
    });
});