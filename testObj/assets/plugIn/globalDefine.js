var isUpperCase = function (code) {
    if (code >= 65 && code <= 90) return true;
    return false;
}
//-- 是否是小写字母
var isLowerCase = function (code){
    if (code >= 97 && code <= 122) return true;
    return false;
}

// function f1() {
//     var n = 999;
//     function f2() {
//         console.log(n++); // 999
//     }
//     return f2;
// }
// let fd = f1();
//原因: 什么会这样呢？原因就在于f1是f2的父函数，而f2被赋给了一个全局变量，这导致f2始终在内存中，而f2的存在依赖于f1，因此f1也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收

//-- 利用闭包 来完成对象对其私有变量的封装
//-- 即给对象添加方法，返回私有数据
//-- 私有数据存在于 父函数（GG_DEFINE_VAR）的域中：根据链式作用域结构，子对象会一级一级向上寻找父对象变量。
//-- 闭包就是将函数内部和函数外部链接起来的桥梁 作用一：闭包函数向外层寻找变量，外层使用的变量会一直存在于内存中。
window.GG_DEFINE_VAR = function (jsClass, variableMap) {
    var variableList = {};
    var defaultValueList = {};
    for (const variableName in variableMap) {
        if (!this.isLowerCase(variableName.charCodeAt(0))) {
            cc.error("首字母不是小写");
            return;
        }
        let variableValue = variableMap[variableName];
        if (typeof variableValue == "function") {
            
        }
    }
}