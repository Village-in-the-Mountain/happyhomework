function _check() {
    var Password = document.getElementById("password01");
    var confirmPassword = document.getElementById("password02");
    var userNamE = document.getElementById("myName");
    if (userNamE.value.length == 0) {
        confirm("请输入用户名~");
    }
    else {
        confirm("Hello," + userNamE.value + "!");
    }
    if (Password.value.length == 0) {
        window.alert("请输入密码~");
    }
    else if (Password.value.length < 4 || Password.value.length > 16) {
        window.alert("密码的长度必须在4-16个字符~");
    }
    else if (Password.value != confirmPassword.value) {
        window.alert("两次输入密码不一致！");
    }
    else {
        window.alert("输入成功！");
    }
}
