function checkName(){
    let name_input = $('#name');
    let cur_val = name_input.val();
    let name_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
    if (cur_val.match(name_regex) && cur_val !== ''){
        name_input.removeClass('is-invalid');
        name_input.addClass('is-valid');
        return true;
    } else{
        name_input.removeClass('is-valid');
        name_input.addClass('is-invalid');
        return false;
    }
}

function checkAge(){
    let age_input = $('#age');
    let cur_val = age_input.val();
    let age_regex = "^[0-9]+$";
    if (cur_val.match(age_regex) && cur_val !== ''){
        age_input.removeClass('is-invalid');
        age_input.addClass('is-valid');
        return true;
    } else{
        age_input.removeClass('is-valid');
        age_input.addClass('is-invalid');
        return false;
    }
}

function checkMail(){
    let mail_input = $('#mail');
    let cur_val = mail_input.val();
    let mail_regex = "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$";
    if (cur_val.match(mail_regex) && cur_val !== ''){
        mail_input.removeClass('is-invalid');
        mail_input.addClass('is-valid');
        return true;
    } else{
        mail_input.removeClass('is-valid');
        mail_input.addClass('is-invalid');
        return false;
    }
}

function checkCity(){
    let city_input = $('#city');
    let cur_val = city_input.val();
    let city_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
    if (cur_val.match(city_regex) && cur_val !== ''){
        city_input.removeClass('is-invalid');
        city_input.addClass('is-valid');
        return true;
    } else{
        city_input.removeClass('is-valid');
        city_input.addClass('is-invalid');
        return false;
    }
}

$(function() {
    // Check name
    $('#name').keyup(function () {
        checkName();
    });
    // Check age
    $('#age').keyup(function () {
        checkAge();
    });
    // Check mail address
    $('#mail').keyup(function () {
        checkMail();
    });
    // Check residence
    $('#city').keyup(function () {
        checkCity();
    });
    // Check all fields on submit
    $('#submit').click(function () {
        if (checkName() && checkAge() && checkMail() && checkCity()) {
            $('form').submit();
        }
    })
});