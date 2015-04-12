<!DOCTYPE HTML>
<link rel="schema.DC" href="http://purl.org/DC/elements/1.0/">
<link rel="SHORTCUT ICON" href="http://www.ibm.com/favicon.ico">
<!-- HEADER_SCRIPTS_AND_CSS_INCLUDE -->
<link href="./developerWorks/www.css" rel="stylesheet" type="text/css">
<!-- Masthead/footer -->
<link href="./developerWorks/dw-mf.css" media="screen,projection" rel="stylesheet" type="text/css">
<link href="./developerWorks/dw-mf-minimal-N.css" media="screen,projection" rel="stylesheet" title="www" type="text/css">
<!-- Home CSS -->
<link href="./developerWorks/dwwi-v17.css" media="screen,projection" rel="stylesheet" title="www" type="text/css">
<script src="./js/jquery-2.1.3.min.js"></script>
<script src="./js/javascript.js"></script>
<title>Developer Works registration</title>
</head>
<body id="ibm-com" class="v17" aria-busy="false">
    <jsp:useBean id='b' class='tools.FormData' scope='application'/>        
    <div id="ibm-top" class="ibm-landing-page ibm-no-scroll"><img src="./developerWorks/ibm_logo_print.png" width="43" height="15" id="ibm-print-masthead" alt="IBM Print">

        <!-- MASTHEAD_BEGIN -->
        <div id="ibm-masthead" role="banner">
            <div id="dw-masthead-top-row">
                <ul id="ibm-mast-options-dw" role="toolbar">
                    <li role="presentation" id="dw-mast-top-4">
                        <a href="http://www.ibm.com/developerworks/"><img src="./developerWorks/dwn-dw-badge.png" width="43" height="22" alt="dW" aria-label="dW"></a>
                    </li>
                    <li role="presentation" id="dw-mast-top-3">
                        <a href="http://www.ibm.com/">IBM</a>
                    </li>
                </ul>
            </div>		
            <div id="ibm-universal-nav-dw" aria-label="Site map">
                <ul id="ibm-unav-links-dw">
                    <li id="ibm-unav-home-dwlogo">
                        <a href="http://www.ibm.com/developerworks/"><img src="./developerWorks/dwn-dw-wordmark.png" width="225" height="28" alt="developerWorks®"></a>
                    </li>
                </ul>
            </div>	
        </div>
        <div id="fdiv" class="ibm-access"></div>
        <!-- MASTHEAD_END -->
        <div id="ibm-access-cntr" role="main"><div id="ibm-leadspace-head" class="ibm-alternate ibm-alternate-5col">
                <div id="ibm-leadspace-body">
                    <h1 class="ibm-small">developerWorks registration</h1>
                </div>
            </div><div id="ibm-pcon">
                <div id="ibm-content">
                    <div id="ibm-content-body">
                        <div id="ibm-content-main">
                            <!-- Begin 6-4 6-2 grid -->
                            <div class="ibm-columns">
                                <!-- Begin 6-4 grid -->
                                <div class="ibm-col-6-4">				
                                    <p>Thank you for registering with IBM developerWorks. To  simplify things, you can use the IBM ID and password that you designate below across IBM.</p>
                                    <p>Asterisks (<span class="ibm-required">*</span>) indicate fields required to complete this transaction.</p>
                                    <form method="post" action="validateEmail" class="ibm-row-form" name="register" id="registerform">
                                        <h2 class="ibm-inner-subhead">Basic registration information</h2>
                                        <div class="ibm-columns">
                                            <div class="ibm-col-2-1">
                                                <p>
                                                    <label for="FName">First name:<span class="ibm-required">*</span></label>
                                                    <span><input name="FName" id="FName" size="36" type="text" value="${b.fName}"></span>
                                                </p>
                                            </div>
                                            <div class="ibm-col-2-1">
                                                <p>
                                                    <label for="LName">Last name:<span class="ibm-required">*</span></label>
                                                    <span><input name="LName" id="LName" size="36" type="text" value="${b.lName}"></span>
                                                </p>
                                            </div>
                                        </div>
                                        <p>
                                            <label for="emailAddress">Email address:<span class="ibm-required">*</span><br>
                                                <span class="ibm-additional-info dw-lc-labeloverride dw-lc-important-adjust ibm-item-note">(This will also be your IBM ID for signing in)</span></label>
                                            <span><input name="UserID" id="emailAddress" size="42" type="text" value="${b.email}" onkeyup="validateUserID();" onblur="checkEmail( & #39; emailAddress & #39; );"></span>
                                            <span class="dw-lc-formerror" id="userid_invalid" style="display:none;">This is not a valid email address.</span>
                                            <span class="dw-lc-formconfirm" id="userid_valid" style="display:none;">&nbsp;</span>
                                        </p>
                                        <p>
                                            <label for="Password">Password:<span class="ibm-required">*</span><br> <span class="ibm-additional-info dw-lc-labeloverride dw-lc-important-adjust ibm-item-note">(Must be at least 8 characters)</span></label>
                                            <span><input name="Password" id="Password" size="42" type="password" value="${b.password}" onkeyup="validatePassword();"> </span>
                                            <span class="dw-lc-formerror" id="password_invalid" style="display:none;">The password you entered is not valid.</span>
                                            <span class="dw-lc-formconfirm" id="password_valid" style="display:none;">&nbsp;</span>
                                        </p>
                                        <p>
                                            <label for="RePassword">Verify password:<span class="ibm-required">*</span></label>
                                            <span><input name="RePassword" id="RePassword" size="42" type="password" value="${b.password}" onkeyup="validateRePassword();"></span>
                                            <span class="dw-lc-formerror" id="repassword_mismatch" style="display:none;">The passwords did not match.</span>
                                            <span class="dw-lc-formerror" id="repassword_invalid" style="display:none;">The password you entered is not valid.</span>
                                            <span class="dw-lc-formconfirm" id="repassword_valid" style="display:none;">&nbsp;</span>
                                        </p>
                                        <p>
                                            <label for="alias">Display name:<span class="ibm-required">*</span><br>
                                                <span class="ibm-additional-info dw-lc-labeloverride dw-lc-important-adjust ibm-item-note">(Must be between 3 - 31 characters. 
                                                    <a class="ibm-feature-link" href="https://www.ibm.com/developerworks/dwwi/jsp/Register.jsp?lang=en_US&appname=developerworks&d=http%3A%2F%2Fwww.ibm.com%2Fdeveloperworks%2Ftopics%2F#overlay2" onclick="ibmweb.overlay.show( & #39; overlay2 & #39; , this); return false;">Tips for choosing display name.</a>)
                                                </span>
                                            </label>
                                            <span><input name="alias" id="alias" size="42" type="text" value="${b.alias}" onkeyup="validateDisplayName();" onblur="checkDisplayname( & #39; alias & #39; );"></span>
                                            <span class="dw-lc-formerror" id="alias_invalid" style="display:none;">This display name is not valid. Please choose another.</span>
                                            <span class="dw-lc-formconfirm" id="alias_valid" style="display:none;">&nbsp;</span>
                                        </p>
                                        <!-- SUPPLEMENTAL OVERLAYS START HERE -->

                                </div>
                                <!-- SUPPLEMENTAL OVERLAYS END HERE -->
                                <p>
                                    <label for="countryResidence">Country/region of residence:<span class="ibm-required">*</span><br>
                                        <span class="ibm-additional-info dw-lc-labeloverride dw-lc-important-adjust ibm-item-note">(Required for warranty)</span></label>
                                    <span>
                                        <select name="CountryOfRes" id="countryResidence">				
                                            <option selected="\&quot;selected\&quot;" value="">Select one</option>								
                                            <option value="AF">Afghanistan</option>
                                            <option value="AL">Albania</option>
                                            <option value="DZ">Algeria</option>
                                            <option value="AS">American Samoa</option>
                                            <option value="AD">Andorra</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="US">United States</option>
                                        </select>
                                    </span>
                                </p>

                                <div class="ibm-columns">
                                    <div class="ibm-col-2-1">
                                        <p>
                                            <label for="City">City:</label>
                                            <span><input name="City" id="City" size="36" type="text" value="${b.city}"></span>
                                        </p>
                                    </div>					
                                    <div class="ibm-col-2-1">
                                        <p>
                                            <label for="Language">Language:<span class="ibm-required">*</span></label>
                                            <span>
                                                <select name="Language" id="Language">
                                                    <option value="">Select one</option>
                                                    <option value="bg-BG">Bulgarian</option>
                                                    <option value="my-MM">Burmese</option>
                                                    <option value="fr-CA">Canadian French</option>
                                                    <option value="nl-NL">Dutch</option>
                                                    <option value="dz-BT">Dzongkha</option>
                                                    <option selected="selected" value="en-US">English</option>

                                                </select>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <p>Please select a security question that only you can answer or create your own. Then enter the answer to the question. Occasionally, you may be asked to answer this question to confirm your identity.</p>
                                <div class="ibm-columns">
                                    <div class="ibm-col-2-1">
                                        <p>
                                            <label for="SecurityQues">Security question:<span class="ibm-required">*</span></label>
                                            <span>
                                                <select name="SecurityQues" id="SecurityQues" onchange="removetempfunction()">
                                                    <option selected="selected" value="">Select one</option>
                                                    <option value="name">What is your mother's maiden name?</option>
                                                    <option value="pet">What is the name of your first pet?</option>
                                                    <option value="school">What was the name of your first school?</option>
                                                    <option value="job">In what city or town was your first job?</option>
                                                    <option value="country">In what country were you born?</option>
                                                </select>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="ibm-col-2-1">
                                        <p id="customquestioncontainer" style="display:none;">
                                            <label for="custom_question">Place a question in this text field.</label>
                                            <span><input name="custom_question" id="custom_question" size="42" type="text" value="${b.customQuestion}"></span>
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    <label for="SecurityAns">Answer to security question:<span class="ibm-required">*</span></label>
                                    <span><input name="SecurityAns" id="SecurityAns" size="42" type="text" value="${b.securityAnswer}"></span>
                                </p>

                                <div class="dw-lc-spacevertical">&nbsp;</div>

                                <h2 class="ibm-alternate-rule">Privacy preferences</h2>
                                <div id="privacyid">
                                    <p>Please keep me informed of products, services and offerings from IBM companies worldwide.</p>
                                    <p>
                                        <span class="ibm-input-group">
                                            <input id="NC_CHECK_EMAIL" value="true" name="NC_CHECK_EMAIL" type="checkbox">
                                            <label for="NC_CHECK_EMAIL">by email.</label></span><br>
                                        <input id="NC_HIDDEN_EMAIL" value="OPT_IN" name="NC_HIDDEN_EMAIL" type="hidden">
                                        <span class="ibm-input-group">
                                            <input id="NC_CHECK_OTHER" value="true" name="NC_CHECK_OTHER" type="checkbox">
                                            <label for="NC_CHECK_OTHER">by telephone or postal mail.</label></span><br>
                                        <input id="NC_HIDDEN_OTHER" value="OPT_IN" name="NC_HIDDEN_OTHER" type="hidden">
                                    </p>
                                    <p>I accept&nbsp; <a href="http://www.ibm.com/privacy/us/en/" target="_blank">IBM's Privacy statement</a>.</p>

                                    <p>All fields are required to complete this transaction.</p>

                                </div>

                                <div class="ibm-alternate-rule"><hr></div>

                                <p>By selecting the <strong>Register</strong> link, I agree to the developerWorks&nbsp;<a class="ibm-feature-link" href="https://www.ibm.com/developerworks/mydeveloperworks/terms?lang=en">terms of use</a>.</p>

                                <div class="ibm-buttons-row">
                                    <p>
                                        <input value="reg" type="hidden" name="m" id="m">
                                        <input value="register" type="hidden" name="action" id="action">
                                        <input value="en_US" type="hidden" name="lang" id="lang">
                                        <input value="http://www.ibm.com/developerworks/topics/" type="hidden" name="d" id="d">
                                        <input value="null" type="hidden" name="tact" id="tact">
                                        <input value="null" type="hidden" name="cmp" id="cmp">
                                        <input id="ibm-submit" name="ibm-submit" class="ibm-btn-arrow-pri" value="Register" type="submit">
                                        <span class="ibm-sep"></span>
                                        <input value="Cancel" type="button" name="ibm-cancel" class="ibm-btn-cancel-sec" onclick="window.location(window.location.href = & #39; http://www.ibm.com/developerworks/topics/&#39;)">
                                    </p>
                                </div>
                                </form>
                                <div class="dw-lc-spacevertical">&nbsp;</div><div class="dw-lc-spacevertical">&nbsp;</div>
                            </div>
                            <!-- End 6-4 grid -->			
                            <!-- Begin 6-2 grid -->

                            <!-- End 6-2 grid -->
                        </div>
                    </div>
                </div>
                <div id="ibm-content-sidebar">
                    <div id="ibm-contact-module">
                        <!--IBM contact module-->
                    </div>
                    <div id="ibm-merchandising-module">
                        <!--IBM Web Merchandising Module-->
                    </div>			
                    <div class="ibm-container">
                        <h2>Why register?</h2>
                        <div class="ibm-container-body">
                            <img src="./developerWorks/hiviz-mydw-new.jpg" width="168" height="64" alt="Register for mydeveloperWorks">
                            <p>developerWorks is a worldwide community of software developers and IT professionals, from students to seasoned veterans.</p>
                            <ul class="ibm-bullet-list ibm-no-links">
                                <li>Find expert answers in forums</li>
                                <li>Create your own blog, wiki, or group</li>
                                <li>Contribute to discussions</li>
                                <li>Follow user activity in real-time</li>
                                <li>Interact with other users</li>
                                <li>Expand your professional network</li>
                            </ul>
                            <div class="ibm-rule"><hr></div>
                            <p class="ibm-ind-link"><a href="https://www.ibm.com/developerworks/mydeveloperworks?lang=en" class="ibm-forward-link">Read more</a></p>		
                        </div>
                    </div>					
                </div>
                <!-- OVERLAY STARTS HERE -->
                <div class="ibm-common-overlay" id="overlay">
                    <div class="ibm-head">
                        <p><a class="ibm-common-overlay-close" href="https://www.ibm.com/developerworks/dwwi/jsp/Register.jsp?lang=en_US&appname=developerworks&d=http%3A%2F%2Fwww.ibm.com%2Fdeveloperworks%2Ftopics%2F#close">Close [x]</a></p>
                    </div>
                    <div class="ibm-body">
                        <div class="ibm-main">
                            <a class="ibm-access" id="overlaylink1"><!-- Accessibility anchor --></a>
                            <div class="ibm-title">
                                <h1>Why should I register?</h1>
                            </div>
                            <div class="ibm-container ibm-alternate">
                                <div class="ibm-container-body">
                                    <p>As a registered user of developerWorks, you have easy access to other developers who share your interests, as well as the feeds, bookmarks, blogs, groups, and forums that you care about.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- OVERLAY ENDS HERE -->
            </div>
        </div></div>
</div>
<div id="ibm-metrics">
    <a id="icon-id05921531631611288"><img style="border: none; cursor:pointer;" onerror="truste.eu.showSeal()" alt="TRUSTe Icon" src="./developerWorks/get"></a></div>
<script>
                        $('#Language option[value="${b.language}"]').prop('selected', true);
                        $('#countryResidence option[value="${b.countryOfResidence}"]').prop('selected', true);
                        $('#SecurityQues option[value="${b.securityQuestion}"]').prop('selected', true);
                        if (${b.contactByEmail})
                {
                $("#NC_CHECK_EMAIL").prop('checked', true);
                }
                if (${b.contactByOther})
                {
                $("#NC_CHECK_OTHER").prop('checked', true);
                }
</script>
</body>

</html>