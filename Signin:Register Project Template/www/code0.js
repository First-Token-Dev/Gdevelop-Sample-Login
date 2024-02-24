gdjs.Welcome_32_95ScreenCode = {};
gdjs.Welcome_32_95ScreenCode.GDNewTiledSpriteObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDNewTiledSpriteObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDAppleObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDAppleObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDLogin_9595TextObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDLogin_9595TextObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDHomeObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDHomeObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects2= [];


gdjs.Welcome_32_95ScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Start_Btn"), gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1);
{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{firebase.performance();
}{firebase.analytics();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.userManagement.isEmailVerified();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Start_Btn"), gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("login_Logout_Register_btn"), gdjs.Welcome_32_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects1);
{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start_Btn"), gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1.length;i<l;++i) {
    if ( gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1[k] = gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1[i];
        ++k;
    }
}
gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game_screen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("login_Logout_Register_btn"), gdjs.Welcome_32_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Welcome_32_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Welcome_32_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Welcome_32_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects1[k] = gdjs.Welcome_32_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Register_Screen", false);
}}

}


};

gdjs.Welcome_32_95ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Welcome_32_95ScreenCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDStart_9595BtnObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDAppleObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDAppleObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDLogin_9595TextObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDLogin_9595TextObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDHomeObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDHomeObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects2.length = 0;

gdjs.Welcome_32_95ScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['Welcome_32_95ScreenCode'] = gdjs.Welcome_32_95ScreenCode;
