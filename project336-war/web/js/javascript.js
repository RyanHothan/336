function removetempfunction() {
    var whichindex = document.getElementById('SecurityQues').selectedIndex;
    if (whichindex == 6) {
        document.getElementById('customquestioncontainer').style.display = 'block';
        document.getElementById('custom_question').value = '';
    }
    else {
        document.getElementById('customquestioncontainer').style.display = 'none';
    }
}


function checkEmail(emailAddress) {
    var Teamvalue = document.getElementById(emailAddress).value;
    var vpreLang = 'en_US';
    var vlang = "&lang=" + vpreLang;
    var sb = "email=" + Teamvalue + vlang;
    //sb = sb + "teamname=" + encodeURIComponent(Teamvalue.replace(/^\s+/g, '').replace(/\s+$/g, ''))+"&";

    var result = false;
    if (Teamvalue != null && Teamvalue != '') {
        new Ajax.Request('/developerworks/dwwi/jsp/emailExists.jsp?',
                {parameters: sb,
                    evalScripts: false,
                    asynchronous: false,
                    encoding: 'UTF-8',
                    onSuccess: function (t) {
                        var json = eval("(" + t.responseText + ")");
                        result = true;
                        if (json.result == 'true') {
                            document.getElementById('userid_valid').style.display = 'none';
                            document.getElementById('userid_invalid').style.display = 'inline';
                            document.getElementById('userid_invalid').innerHTML = json.message;
                            result = true;
                        }
                    }, onFailure: function (t) {
                        alert('onFail: ' + t.statusText);
                    }
                });
    }

    return result;
}

function checkDisplayname(displayName) {
    var Teamvalue = document.getElementById(displayName).value;
    var vpreLang = 'en_US';
    var vlang = "&lang=" + vpreLang;
    var sb = "displayname=" + Teamvalue + vlang;
    //sb = sb + "teamname=" + encodeURIComponent(Teamvalue.replace(/^\s+/g, '').replace(/\s+$/g, ''))+"&";

    var displayNamePat = "^([A-Za-z0-9@._-]+)$";
    var matchArray = Teamvalue.match(displayNamePat);

    var result = false;
    if ((Teamvalue == null) || (Teamvalue != null && Teamvalue.length < 3) || (matchArray == null)) {
        document.getElementById('alias_valid').style.display = 'none';
        document.getElementById('alias_invalid').style.display = 'inline';
        document.getElementById('alias_invalid').innerHTML = 'This display name is not valid. Please choose another.';
        result = true;
        return result;
    }

    if (Teamvalue != null && Teamvalue != '') {
        new Ajax.Request('/developerworks/dwwi/jsp/displaynameExists.jsp?',
                {parameters: sb,
                    evalScripts: false,
                    asynchronous: false,
                    encoding: 'UTF-8',
                    onSuccess: function (t) {
                        var json = eval("(" + t.responseText + ")");
                        result = true;
                        if (json.result == 'true') {
                            document.getElementById('alias_valid').style.display = 'none';
                            document.getElementById('alias_invalid').style.display = 'inline';
                            document.getElementById('alias_invalid').innerHTML = 'This display name is taken. Please choose another.';
                            result = true;
                        }
                    }, onFailure: function (t) {
                        alert('onFail: ' + t.statusText);
                    }
                });
    }

    return result;
}

function validatePassword() {
    var passwd = document.forms['register'].Password.value;
    var min_passwd_len = 8;
    var max_passwd_len = 31;

    if ((passwd != null) && (passwd.length < min_passwd_len)) {
        document.getElementById('password_valid').style.display = 'none';
        document.getElementById('password_invalid').style.display = 'inline';
        return "";
    } else if (passwd.length > max_passwd_len) {
        document.getElementById('password_valid').style.display = 'none';
        document.getElementById('password_invalid').style.display = 'inline';
        return "";
    }

    var passwdPat = "^([A-Za-z0-9@._-]+)$";
    var matchArray = passwd.match(passwdPat);
    if (matchArray == null) {
        document.getElementById('password_valid').style.display = 'none';
        document.getElementById('password_invalid').style.display = 'inline';

    } else {
        document.getElementById('password_invalid').style.display = 'none';
        document.getElementById('password_valid').style.display = 'inline';
    }
}

function validateRePassword() {
    var passwd = document.forms['register'].Password.value;
    var re_passwd = document.forms['register'].RePassword.value;
    var min_passwd_len = 8;
    var max_passwd_len = 31;

    if ((re_passwd != null) && (re_passwd.length < min_passwd_len)) {
        document.getElementById('repassword_valid').style.display = 'none';
        document.getElementById('repassword_invalid').style.display = 'inline';
        document.getElementById('repassword_mismatch').style.display = 'none';
        return "";
    } else if (re_passwd.length > max_passwd_len) {
        document.getElementById('repassword_valid').style.display = 'none';
        document.getElementById('repassword_invalid').style.display = 'inline';
        document.getElementById('repassword_mismatch').style.display = 'none';
        return "";
    }

    var passwdPat = "^([A-Za-z0-9@._-]+)$";
    var matchArray = re_passwd.match(passwdPat);

    if (matchArray == null) {
        document.getElementById('repassword_valid').style.display = 'none';
        document.getElementById('repassword_invalid').style.display = 'inline';
        document.getElementById('repassword_mismatch').style.display = 'none';
        return "";
    } else if (re_passwd != passwd) {
        document.getElementById('repassword_invalid').style.display = 'none';
        document.getElementById('repassword_valid').style.display = 'none';
        document.getElementById('repassword_mismatch').style.display = 'inline';
    } else {
        document.getElementById('repassword_invalid').style.display = 'none';
        document.getElementById('repassword_mismatch').style.display = 'none';
        document.getElementById('repassword_valid').style.display = 'inline';
    }
}


function assignSubmit() {
    document.getElementById('action').value = 'registerandtake';
    var isValid = "true";
    return isValid;
}


function isValidDisplay() {
    var alias = document.forms['register'].alias.value;
    var isValid = "true";
    if ((alias.indexOf("<") != -1) || (alias.indexOf(">") != -1) || (alias.indexOf(";") != -1) ||
            (alias.indexOf(",") != -1) || (alias.indexOf("\"") != -1) || (alias.indexOf("'") != -1)) {
        isValid = "false";
    }
    return isValid;
}

function validateDisplayName() {
    var alias = document.forms['register'].alias.value;
    var min_passwd_len = 3;
    var max_passwd_len = 31;
    var isValid = isValidDisplay();

    if ((alias != null) && (alias.length < min_passwd_len)) {
        document.getElementById('alias_valid').style.display = 'none';
        document.getElementById('alias_invalid').style.display = 'inline';
    } else if (alias.length > max_passwd_len) {
        document.getElementById('alias_valid').style.display = 'none';
        document.getElementById('alias_invalid').style.display = 'inline';
    } else if (isValid == "false") {
        document.getElementById('alias_valid').style.display = 'none';
        document.getElementById('alias_invalid').style.display = 'inline';
    } else {
        document.getElementById('alias_invalid').style.display = 'none';
        document.getElementById('alias_valid').style.display = 'inline';
    }
}

function validateUserID() {
    var emailStr = document.forms['register'].emailAddress.value;
    document.getElementById('userid_invalid').innerHTML = 'This is not a valid email address.';


    var min_passwd_len = 3;
    var max_passwd_len = 80;

    if ((emailStr != null) && (emailStr.length < min_passwd_len)) {
        document.getElementById('userid_valid').style.display = 'none';
        document.getElementById('userid_invalid').style.display = 'inline';
        return "";
    } else if (emailStr.length > max_passwd_len) {
        document.getElementById('userid_valid').style.display = 'none';
        document.getElementById('userid_invalid').style.display = 'inline';
        return "";
    }

    emailStr = emailStr.replace("[", "");
    emailStr = emailStr.replace("]", "");

    //var emailPat=/^(.+)@(.+)$/;
    var emailPat = "^([A-Za-z0-9!#$%&'+-./=?^_`{|}~]+)@([A-Za-z0-9!#$%&'+-./=?^_`{|}~]+)[.]([A-Za-z0-9!#$%&'+-/=?^_`{|}~]{2,4})$";

    var specialChars = "\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";
    var validChars = "\[^\\s" + specialChars + "\]";
    var quotedUser = "(\"[^\"]*\")";
    var atom = validChars + '+';
    var word = "(" + atom + "|" + quotedUser + ")";
    var userPat = new RegExp("^" + word + "(\\." + word + ")*$");
    var domainPat = new RegExp("^" + atom + "(\\." + atom + ")*$");

    var matchArray = emailStr.match(emailPat);
    if (matchArray == null) {
        document.getElementById('userid_valid').style.display = 'none';
        document.getElementById('userid_invalid').style.display = 'inline';
        return "";
    } else {

        var user = matchArray[1];
        var domain = matchArray[2];

        if (user.match(userPat) == null) {
            document.getElementById('userid_valid').style.display = 'none';
            document.getElementById('userid_invalid').style.display = 'inline';
            return "";
        } else {
            var domainArray = domain.match(domainPat);
            if (domainArray == null) {
                document.getElementById('userid_valid').style.display = 'none';
                document.getElementById('userid_invalid').style.display = 'inline';
                return "";
            } else {
                document.getElementById('userid_valid').style.display = 'inline';
                document.getElementById('userid_invalid').style.display = 'none';
                return "";
            }
        }
    }

}
 