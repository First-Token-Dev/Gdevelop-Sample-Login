gdjs.Welcome_32_95ScreenCode = {};
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDAppleObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDAppleObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDAppleObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDSleepingEyeObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDSleepingEyeObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDSleepingEyeObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDNotice_9595TextObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDNotice_9595TextObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDNotice_9595TextObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDBackgroundObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDBackgroundObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDBackgroundObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDHome_9595btnObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDHome_9595btnObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDHome_9595btnObjects3= [];


gdjs.Welcome_32_95ScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.userManagement.isEmailVerified();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Start_btn"), gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects2);
gdjs.copyArray(runtimeScene.getObjects("login_Register_btn"), gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects2);
{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects2.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects2.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects2.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects2.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.firebaseTools.auth.userManagement.isEmailVerified());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Start_btn"), gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("login_Register_btn"), gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects1);
{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects1[i].hide(false);
}
}}

}


};gdjs.Welcome_32_95ScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Start_btn"), gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1);
{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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

{ //Subevents
gdjs.Welcome_32_95ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("login_Register_btn"), gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects1[k] = gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Register_Screen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start_btn"), gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1[k] = gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game_screen", false);
}}

}


};

gdjs.Welcome_32_95ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDAppleObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDAppleObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDAppleObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDSleepingEyeObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDSleepingEyeObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDSleepingEyeObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDNotice_9595TextObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDNotice_9595TextObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDNotice_9595TextObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDBackgroundObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDHome_9595btnObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDHome_9595btnObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDHome_9595btnObjects3.length = 0;

gdjs.Welcome_32_95ScreenCode.eventsList1(runtimeScene);

return;

}

gdjs['Welcome_32_95ScreenCode'] = gdjs.Welcome_32_95ScreenCode;
