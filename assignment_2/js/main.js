function validateForm(){
    let name = $("#formGroupExampleInput").val();
    if (name === "") {
        $("#form-alert").text("Name must be filled out").show();
        return false;
    }
    if (name.match(/^[0-9]+$/) && name !== "") {
        $("#form-alert").text("Name can't be in numbers").show();
        return false;
    }

    let age = $("#formGroupInput2").val();
    if (age === "") {
        $("#form-alert").text("Age must be filled out").show();
        return false;
    }
    if (age.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/) && age !== "") {
        $("#form-alert").text("Age must be in numbers").show();
        return false;
    }

    let city = $("#formGroupInput3").val();
    if (city === ""){
        $("#form-alert").text("City must be filled in").show();
        return false;
    }
    if (city.match(/^[0-9]+$/) && city !== "") {
        $("#form-alert").text("City can't be in numbers").show();
        return false;
    }

    let mail = $("#formGroupInput4").val();
    if (mail === "") {
        $("#form-alert").text("Mail must be filled out").show();
        return false;
    }
    if (mail.match(/^[0-9]+$/) && mail !== "") {
        $("#form-alert").text("Mail can't be in numbers").show();
        return false;
    }


    let num = $("#formGroupInput5").val();
    if (num === "") {
        $("#form-alert").text("Phone number must be filled out").show();
        return false;
    }
    if (num.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/) && city !== "") {
        $("#form-alert").text("Phone number must be in numbers").show();
        return false;
    }

    return true;
}

function writeFormData(){

}

function formErase() {
    $("#form-content").hide();
    $("#form-alert").hide();
}

function linktabs() {
    // make the tabs work
    $("#link-tab").on('click', function () {
        $("#link-tab").addClass("active");
        $("#contact-tab").removeClass("active");
        $("#links").addClass("active");
        $("#contact").removeClass("active");

    });
}


function contacttabs(){
    $("#contact-tab").on('click', function(){
        $("#link-tab").removeClass("active");
        $("#contact-tab").addClass("active");
        $("#links").removeClass("active");
        $("#contact").addClass("active");
    });
}

function showcontent(){
    $("#form-content").show();
}

$(function() {
    linktabs();
    contacttabs();

    $("#submit").on('click', function(){
        if (validateForm()) {
            showcontent();
            $("#form-alert").hide();
        }
    });

    $("#erase").on('click', function(){
        formErase();
    });

});

