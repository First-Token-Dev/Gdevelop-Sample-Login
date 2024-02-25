gdjs.Welcome_32_95ScreenCode = {};
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDScreen_9595OrientationObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDScreen_9595OrientationObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDScreen_9595OrientationObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDScreen_9595OrientationObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDAppleObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDAppleObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDAppleObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDAppleObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDSleepingEyeObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDSleepingEyeObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDSleepingEyeObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDSleepingEyeObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDNotice_9595TextObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDNotice_9595TextObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDNotice_9595TextObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDNotice_9595TextObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDBackgroundObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDBackgroundObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDBackgroundObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDBackgroundObjects4= [];
gdjs.Welcome_32_95ScreenCode.GDHome_9595btnObjects1= [];
gdjs.Welcome_32_95ScreenCode.GDHome_9595btnObjects2= [];
gdjs.Welcome_32_95ScreenCode.GDHome_9595btnObjects3= [];
gdjs.Welcome_32_95ScreenCode.GDHome_9595btnObjects4= [];


gdjs.Welcome_32_95ScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() == gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName());
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName());
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == runtimeScene.getGame().getVariables().getFromIndex(3).getAsString();
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() != "unkown");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() != "unkown");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() != "");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() != "");
}
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Save_Username_btn"), gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects3);
gdjs.copyArray(runtimeScene.getObjects("Start_btn"), gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects3);
gdjs.copyArray(runtimeScene.getObjects("Username_Text_Entry"), gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects3);
gdjs.copyArray(runtimeScene.getObjects("Username_text"), gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects3);
gdjs.copyArray(runtimeScene.getObjects("login_Register_btn"), gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects3);
{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects3.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects3.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects3[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects3.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects3.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects3[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects3.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects3.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects3[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects3.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects3.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects3[i].getBehavior("Text").setText("Welcome " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects3.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects3[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() == "");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == runtimeScene.getGame().getVariables().getFromIndex(3).getAsString();
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Save_Username_btn"), gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Start_btn"), gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Username_Text_Entry"), gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects2);
gdjs.copyArray(runtimeScene.getObjects("Username_text"), gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects2);
gdjs.copyArray(runtimeScene.getObjects("login_Register_btn"), gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects2);
{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects2.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects2.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects2.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects2.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects2.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects2.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects2.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects2.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects2[i].hide(false);
}
}}

}


};gdjs.Welcome_32_95ScreenCode.eventsList1 = function(runtimeScene) {

{


gdjs.Welcome_32_95ScreenCode.eventsList0(runtimeScene);
}


};gdjs.Welcome_32_95ScreenCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.userManagement.isEmailVerified();
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName());
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString(gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName());
}
{ //Subevents
gdjs.Welcome_32_95ScreenCode.eventsList1(runtimeScene);} //End of subevents
}

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


};gdjs.Welcome_32_95ScreenCode.eventsList3 = function(runtimeScene) {

{



}


{



}


};gdjs.Welcome_32_95ScreenCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Save_Username_btn"), gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start_btn"), gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Username_Text_Entry"), gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Username_text"), gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects1);
{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{firebase.performance();
}{firebase.analytics();
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects1.length ;i < len;++i) {
    gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
if (isConditionTrue_0) {

{ //Subevents
gdjs.Welcome_32_95ScreenCode.eventsList2(runtimeScene);} //End of subevents
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


{


gdjs.Welcome_32_95ScreenCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Save_Username_btn"), gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects1[k] = gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Username_Text_Entry"), gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects1);
{gdjs.evtTools.firebaseTools.auth.userManagement.setDisplayName((( gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects1.length === 0 ) ? "" :gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects1[0].getBehavior("Text").getText()));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Welcome_32_95ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDlogin_9595Register_9595btnObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDStart_9595btnObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDScreen_9595OrientationObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDScreen_9595OrientationObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDScreen_9595OrientationObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDScreen_9595OrientationObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDUsername_9595textObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDUsername_9595Text_9595EntryObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDSave_9595Username_9595btnObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDGoogleObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDFacebookObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDAppleObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDAppleObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDAppleObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDAppleObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595EntryObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595EntryObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDPassword_9595TextObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDEmail_9595TextObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDSleepingEyeObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDSleepingEyeObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDSleepingEyeObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDSleepingEyeObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDNotice_9595TextObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDNotice_9595TextObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDNotice_9595TextObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDNotice_9595TextObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDBackgroundObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDBackgroundObjects4.length = 0;
gdjs.Welcome_32_95ScreenCode.GDHome_9595btnObjects1.length = 0;
gdjs.Welcome_32_95ScreenCode.GDHome_9595btnObjects2.length = 0;
gdjs.Welcome_32_95ScreenCode.GDHome_9595btnObjects3.length = 0;
gdjs.Welcome_32_95ScreenCode.GDHome_9595btnObjects4.length = 0;

gdjs.Welcome_32_95ScreenCode.eventsList4(runtimeScene);

return;

}

gdjs['Welcome_32_95ScreenCode'] = gdjs.Welcome_32_95ScreenCode;
