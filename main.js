/*
 SignUp_chkForm():وظيفة
تقوم هذه الوظيفة بالتحقق من صحة البيانات المدخلة في نموذج التسجيل .
*/
function SignUp_chkForm() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    var ConfirmPass = document.getElementById("ConfirmPass");
    // التحقق مما إذا كانت قيمة البريد الإلكتروني فارغة، في حالة القيمة فارغة، تظهر رسالة تنبيه "لم تقم بإدخال البريد الالكتروني
    if (email.value === "") {
        alert("You did not enter an email");
        email.focus();
        return false;
    }
    //التحقق مما إذا كانت قيمة  اسم المستخدم فارغة، في حالة القيمة فارغة، تظهر رسالة تنبيه "لم تقم بإدخال  اسم المستخدم "،
    if (username.value === "") {
        alert("You did not enter a username");
        username.focus();
        return false;
    }
    //التحقق مما إذا كانت قيمة كلمة المرور فارغة، في حالة القيمة فارغة، تظهر رسالة تنبيه "لم تقم بإدخال كلمة المرور"،
    if (pass.value === "") {
        alert("You did not enter a password");
        pass.focus();
        return false;
    }
    //التحقق مما إذا كانت قيمة كلمة المرور مختلفة عن قيمة تأكيد كلمة المرور، في حالة عدم تطابق القيمتين، تظهر رسالة تنبيه "الرقم السري غير متطابق"،
    if (pass.value !== ConfirmPass.value) {
        alert("The two passwords are not the same");
        pass.focus();
        pass.select();
        return false;
    }

    return true;
}

// ======================================================================================================
/*
SignIn_chkForm():
تقوم هذه الوظيفة بالتحقق من صحة البيانات المدخلة في نموذج تسجيل الدخول.
*/
function SignIn_chkForm() {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
        //التحقق مما إذا كانت قيمة  اسم المستخدم فارغة، في حالة القيمة فارغة، تظهر رسالة تنبيه "لم تقم بإدخال  اسم المستخدم "،
    if (username.value === "") {
        alert("You did not enter a username");
        username.focus();
        return false;
    }
        //التحقق مما إذا كانت قيمة كلمة المرور فارغة، في حالة القيمة فارغة، تظهر رسالة تنبيه "لم تقم بإدخال كلمة المرور"،
    if (pass.value === "") {
        alert("You did not enter a password");
        pass.focus();
        return false;
    }
    return true;
}
//============================================================================================================
/*
وظيفة ContactUs_chkForm():
تقوم هذه الوظيفة بالتحقق من صحة البيانات المدخلة في نموذج الاتصال بنا.
*/

function ContactUs_chkForm() {
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var masseage = document.getElementById("masseage");
        //التحقق مما إذا كانت قيمة الاسم فارغة، في حالة القيمة فارغة، تظهر رسالة تنبيه "لم تقم بإدخال  الاسم"،
    if (name.value === "") {
        alert("You did not enter a name");
        name.focus();
        return false;
    }   
    //التحقق مما إذا كانت قيمة الهاتف فارغة، في حالة القيمة فارغة، تظهر رسالة تنبيه "لم تقم بإدخال رقم الهاتف"،
    if (phone.value === "") {
        alert("You did not enter a phone");
        phone.focus();
        return false;
    }
    // التحقق مما إذا كانت قيمة البريد الإلكتروني فارغة، في حالة القيمة فارغة، تظهر رسالة تنبيه "لم تقم بإدخال البريد الالكتروني
    if (email.value === "") {
        alert("You did not enter an email");
        email.focus();
        return false;
    }
    //التحقق مما إذا كانت قيمة الرسالة فارغة
    if (masseage.value === "") {
        alert("You did not enter a masseage");
        phone.focus();
        return false;
    }
    //التحقق مما إذا كانت طول الرسالة أقل من 30 حرفًا، في حالة كانت الرسالة أقل من 30 حرفًا، تظهر رسالة تنبيه "يجب أن تكون الرسالة على الأقل 30 حرفًا"،
    if (masseage.value.length <= 30) {
        alert("The masseage should be at least 30 characters long");
        pass.focus();
        pass.select();
        return false;
    }
    return true;
}