let PlatformHelper = {
    isAndroidNative : function(){
        if(cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID)){
            return true;
        }
        return false;
    }
}

 export default PlatformHelper;