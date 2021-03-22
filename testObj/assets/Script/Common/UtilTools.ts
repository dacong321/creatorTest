let utils = {
    isNull: function (obj) {
        if (obj == null || typeof obj == "undefined") {
            return true;
        }
        return false;
    }
}
// utils["isNull"] = function(){

// }
export default utils;