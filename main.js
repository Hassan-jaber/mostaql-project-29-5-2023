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
        alert("أنت لم تدخل البريد الإلكتروني");
        email.focus();
        return false;
    }
    //التحقق مما إذا كانت قيمة  اسم المستخدم فارغة، في حالة القيمة فارغة، تظهر رسالة تنبيه "لم تقم بإدخال  اسم المستخدم "،
    if (username.value === "") {
        alert("لم تدخل اسم المستخدم");
        username.focus();
        return false;
    }
    //التحقق مما إذا كانت قيمة كلمة المرور فارغة، في حالة القيمة فارغة، تظهر رسالة تنبيه "لم تقم بإدخال كلمة المرور"،
    if (pass.value === "") {
        alert("لم تدخل كلمة المرور");
        pass.focus();
        return false;
    }
    //التحقق مما إذا كانت قيمة كلمة المرور مختلفة عن قيمة تأكيد كلمة المرور، في حالة عدم تطابق القيمتين، تظهر رسالة تنبيه "الرقم السري غير متطابق"،
    if (pass.value !== ConfirmPass.value) {
        alert("كلمات المرور غير متطابقة");
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
        alert("لم تدخل اسم المستخدم");
        username.focus();
        return false;
    }
        //التحقق مما إذا كانت قيمة كلمة المرور فارغة، في حالة القيمة فارغة، تظهر رسالة تنبيه "لم تقم بإدخال كلمة المرور"،
    if (pass.value === "") {
        alert("لم تدخل كلمة المرور");
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
        alert("لم تقم بإدخال الاسم");
        name.focus();
        return false;
    }   
    //التحقق مما إذا كانت قيمة الهاتف فارغة، في حالة القيمة فارغة، تظهر رسالة تنبيه "لم تقم بإدخال رقم الهاتف"،
    if (phone.value === "") {
        alert("لم تدخل الهاتف");
        phone.focus();
        return false;
    }
    // التحقق مما إذا كانت قيمة البريد الإلكتروني فارغة، في حالة القيمة فارغة، تظهر رسالة تنبيه "لم تقم بإدخال البريد الالكتروني
    if (email.value === "") {
        alert("أنت لم تدخل البريد الإلكتروني");
        email.focus();
        return false;
    }
    //التحقق مما إذا كانت قيمة الرسالة فارغة
    if (masseage.value === "") {
        alert("أنت لم تدخل الرسالة");
        phone.focus();
        return false;
    }
    //التحقق مما إذا كانت طول الرسالة أقل من 30 حرفًا، في حالة كانت الرسالة أقل من 30 حرفًا، تظهر رسالة تنبيه "يجب أن تكون الرسالة على الأقل 30 حرفًا"،
    if (masseage.value.length <= 30) {
        alert("يجب ألا يقل عدد الأحرف عن 30 حرفًا");
        pass.focus();
        pass.select();
        return false;
    }
    return true;
}
//--------------------------------------------------------------------------
// prompt نافذة حوارية  باستخدام 
function promptFun(){
    prompt("هل قمت بقراءة حميع الشروط بشكل جيد؟\n", "نعم");
}
//---------------------------------------------------------------------------
// OK وCancel بفتح نافذة حوارية مع زري confirm تقوم الطريقة .
function confirmFun(){
confirm("هل انت متاكد من حذف جميع المعلومات التي قمت بادخالها")
}

//---------------------------------------------------------------------------
// هذا الفنكشن تقوم بفحص صحة القمة المدخلة من المستخدم في حقل البريد الالكتروني
function checkEmailValidity() {
// email  الوصل الى عنصر الادخال
var emailInput = document.getElementById("email");
  
  // احصل على القيمة التي أدخلها المستخدم
  var email = emailInput.value;
  
  //  مطابقة تنسيق البريد الإلكتروني
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  //تحقق مما إذا كان البريد الإلكتروني الذي تم إدخاله يطابق التنسيق المتوقع
  if (emailRegex.test(email) == false) {
    window.alert("يوجد خطاء بكتابة الايميل يرجى التاكد من المعلومات المدخلة");

    }
  }
  