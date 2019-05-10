function validateForm(){
    let name = $("#formGroupExampleInput").val();
    if (name === "") {
        $("#form-alert").text("Name must be filled out").show();
        return false;
    }

    let age = $("#formGroupInput2").val();
    if (age === "") {
        $("#form-alert").text("Age must be filled out").show();
        return false;
    }

    let mail = $("#formGroupInput3").val();
    if (mail === "") {
        $("#myForm").submit(function(e) {
            e.preventDefault();
        });
        $("#form-alert").text("Mail must be filled out").show();
        return false;
    }

    let city = $("#formGroupInput4").val();
    if (city === "") {
        $("#form-alert").text("City must be filled out").show();
        return false;
    }

    let num = $("#formGroupInput5").val();
    if (num === "") {
        alert("Num must be filled out");
        $("#form-alert").text("Phone number must be filled out").show();
        return false;
    }

}

function writeFormData(){

    if(validateForm()){
        console.log("valid form")

    }

}

function createTabs(){

}

$(function() {
    writeFormData();

    $('ul.nav li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.nav li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
});
