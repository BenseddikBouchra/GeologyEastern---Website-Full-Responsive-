function W3docs() {
    var name = document.forms["RegForm"]["Nom"];
    var email = document.forms["RegForm"]["Email"];
    var phone = document.forms["RegForm"]["Téléphone"];
    var what = document.forms["RegForm"]["Sujet"];
    var password = document.forms["RegForm"]["Mot de passe"];
    var address = document.forms["RegForm"]["Adresse"];
    var comment = document.forms["RegForm"]["Commentaire"];

    if (name.value == "") {
        alert("Please Enter your name.");
        name.focus();
        return false;
    }
    if (address.value == "") {
        alert("Please enter you adress");
        address.focus();
        return false;
    }
    if (email.value == "") {
        alert("Please Enter A valid Email");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0) {
        alert("Please Enter A valid Email");
        email.focus();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0) {
        alert("Please Enter A valid Email");
        email.focus();
        return false;
    }
    if (phone.value == "") {
        alert("Please Enter your Phone ");
        phone.focus();
        return false;
    }
    if (password.value == "") {
        alert("Please Enter your Password");
        password.focus();
        return false;
    }
    if (what.selectedIndex < 1) {
        alert("Please Select a serivce");
        what.focus();
        return false;
    }
    if (comment.value == "") {
        alert("Please Enter a Comment");
        comment.focus();
        return false;
    }
    return true;
}
