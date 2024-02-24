gdjs.Login_95ScreenCode = {};
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects1_1final = [];

gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2_1final = [];

gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3_2final = [];

gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1_1final = [];

gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2_1final = [];

gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3_2final = [];

gdjs.Login_95ScreenCode.GDLogin_9595btnObjects1= [];
gdjs.Login_95ScreenCode.GDLogin_9595btnObjects2= [];
gdjs.Login_95ScreenCode.GDLogin_9595btnObjects3= [];
gdjs.Login_95ScreenCode.GDLogin_9595btnObjects4= [];
gdjs.Login_95ScreenCode.GDRegister_9595textObjects1= [];
gdjs.Login_95ScreenCode.GDRegister_9595textObjects2= [];
gdjs.Login_95ScreenCode.GDRegister_9595textObjects3= [];
gdjs.Login_95ScreenCode.GDRegister_9595textObjects4= [];
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects1= [];
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2= [];
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3= [];
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects4= [];
gdjs.Login_95ScreenCode.GDGoogleObjects1= [];
gdjs.Login_95ScreenCode.GDGoogleObjects2= [];
gdjs.Login_95ScreenCode.GDGoogleObjects3= [];
gdjs.Login_95ScreenCode.GDGoogleObjects4= [];
gdjs.Login_95ScreenCode.GDFacebookObjects1= [];
gdjs.Login_95ScreenCode.GDFacebookObjects2= [];
gdjs.Login_95ScreenCode.GDFacebookObjects3= [];
gdjs.Login_95ScreenCode.GDFacebookObjects4= [];
gdjs.Login_95ScreenCode.GDAppleObjects1= [];
gdjs.Login_95ScreenCode.GDAppleObjects2= [];
gdjs.Login_95ScreenCode.GDAppleObjects3= [];
gdjs.Login_95ScreenCode.GDAppleObjects4= [];
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects1= [];
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2= [];
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3= [];
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4= [];
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1= [];
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2= [];
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3= [];
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4= [];
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects1= [];
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects2= [];
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects3= [];
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects4= [];
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects1= [];
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects2= [];
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects3= [];
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects4= [];
gdjs.Login_95ScreenCode.GDLogin_9595TextObjects1= [];
gdjs.Login_95ScreenCode.GDLogin_9595TextObjects2= [];
gdjs.Login_95ScreenCode.GDLogin_9595TextObjects3= [];
gdjs.Login_95ScreenCode.GDLogin_9595TextObjects4= [];
gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1= [];
gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2= [];
gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects3= [];
gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects4= [];
gdjs.Login_95ScreenCode.GDHomeObjects1= [];
gdjs.Login_95ScreenCode.GDHomeObjects2= [];
gdjs.Login_95ScreenCode.GDHomeObjects3= [];
gdjs.Login_95ScreenCode.GDHomeObjects4= [];
gdjs.Login_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects1= [];
gdjs.Login_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects2= [];
gdjs.Login_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects3= [];
gdjs.Login_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects4= [];


gdjs.Login_95ScreenCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.userManagement.isEmailVerified();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game_screen", false);
}}

}


};gdjs.Login_95ScreenCode.asyncCallback10799860 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Email_Entry"), gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Notice_Text"), gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Password_Entry"), gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3);

{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3[i].hide();
}
}{gdjs.evtTools.firebaseTools.auth.signInWithEmail((( gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3[0].getText()), (( gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3[0].getText()), gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.Login_95ScreenCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Login_95ScreenCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2) asyncObjectsList.addObject("Email_Entry", obj);
for (const obj of gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2) asyncObjectsList.addObject("Notice_Text", obj);
for (const obj of gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2) asyncObjectsList.addObject("Password_Entry", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Login_95ScreenCode.asyncCallback10799860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Login_95ScreenCode.asyncCallback10810844 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Notice_Text"), gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3);

{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3[i].hide();
}
}}
gdjs.Login_95ScreenCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2) asyncObjectsList.addObject("Notice_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Login_95ScreenCode.asyncCallback10810844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Login_95ScreenCode.asyncCallback10814724 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Notice_Text"), gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2);

{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2[i].hide();
}
}}
gdjs.Login_95ScreenCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Login_95ScreenCode.GDNotice_9595TextObjects1) asyncObjectsList.addObject("Notice_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Login_95ScreenCode.asyncCallback10814724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Login_95ScreenCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Email_Entry"), gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2);
gdjs.copyArray(runtimeScene.getObjects("Password_Entry"), gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2[0].getText())) != 0);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2[0].getText())) >= 8);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2[0].getText())) <= 20);
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2[0].getText())) != 0);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2[0].getText())) >= 10);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2[0].getText())) <= 30);
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2.length;i<l;++i) {
    if ( (gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2[i].getBehavior("Text").getText()).includes(".com") ) {
        isConditionTrue_1 = true;
        gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2[k] = gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2[i];
        ++k;
    }
}
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2.length;i<l;++i) {
    if ( (gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2[i].getBehavior("Text").getText()).includes("@") ) {
        isConditionTrue_1 = true;
        gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2[k] = gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2[i];
        ++k;
    }
}
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2.length = k;
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notice_Text"), gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2);
{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2[i].getBehavior("Text").setText("Pass");
}
}{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.Login_95ScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2.length = 0;

gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2_1final.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3.length = 0;

{gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Email_Entry"), gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4);
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[0].getText())) < 10);
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3_2final.indexOf(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[j]) === -1 )
            gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3_2final.push(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Email_Entry"), gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4);
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[0].getText())) > 30);
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3_2final.indexOf(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[j]) === -1 )
            gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3_2final.push(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3_2final, gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2_1final.indexOf(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3[j]) === -1 )
            gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2_1final.push(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3[j]);
    }
}
}
{
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3.length = 0;

{gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Password_Entry"), gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4);
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4[0].getText())) < 8);
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3_2final.indexOf(gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4[j]) === -1 )
            gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3_2final.push(gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Password_Entry"), gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4);
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4[0].getText())) > 20);
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3_2final.indexOf(gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4[j]) === -1 )
            gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3_2final.push(gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3_2final, gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2_1final.indexOf(gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3[j]) === -1 )
            gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2_1final.push(gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3[j]);
    }
}
}
{
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3.length = 0;

{gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Email_Entry"), gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4);
for (var i = 0, k = 0, l = gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4.length;i<l;++i) {
    if ( !((gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[i].getBehavior("Text").getText()).includes(".com")) ) {
        isConditionTrue_2 = true;
        gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[k] = gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[i];
        ++k;
    }
}
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3_2final.indexOf(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[j]) === -1 )
            gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3_2final.push(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Email_Entry"), gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4);
for (var i = 0, k = 0, l = gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4.length;i<l;++i) {
    if ( !((gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[i].getBehavior("Text").getText()).includes("@")) ) {
        isConditionTrue_2 = true;
        gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[k] = gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[i];
        ++k;
    }
}
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3_2final.indexOf(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[j]) === -1 )
            gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3_2final.push(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3_2final, gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2_1final.indexOf(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3[j]) === -1 )
            gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2_1final.push(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2_1final, gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2);
gdjs.copyArray(gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2_1final, gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notice_Text"), gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2);
{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2[i].getBehavior("Text").setText("Error Check Email/Password\nEmail: Minimum 8\n        Maximum 30\nPassword: Minimum 8\n          Maximum 20");
}
}{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.Login_95ScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects1.length = 0;

gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects1_1final.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Email_Entry"), gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2);
{isConditionTrue_1 = (gdjs.evtTools.string.strLen((( gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2[0].getText())) == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects1_1final.indexOf(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2[j]) === -1 )
            gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects1_1final.push(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Password_Entry"), gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2);
{isConditionTrue_1 = (gdjs.evtTools.string.strLen((( gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2[0].getText())) == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1_1final.indexOf(gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2[j]) === -1 )
            gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1_1final.push(gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects1_1final, gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects1);
gdjs.copyArray(gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1_1final, gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notice_Text"), gdjs.Login_95ScreenCode.GDNotice_9595TextObjects1);
{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects1.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects1[i].getBehavior("Text").setText("Email/Password cannot be empty.");
}
}{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects1.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Login_95ScreenCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Login_95ScreenCode.eventsList5 = function(runtimeScene) {

{


gdjs.Login_95ScreenCode.eventsList4(runtimeScene);
}


};gdjs.Login_95ScreenCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Switch_Password_Visibility"), gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2.length;i<l;++i) {
    if ( gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2[k] = gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2[i];
        ++k;
    }
}
gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Password_Entry"), gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2);
{for(var i = 0, len = gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2[i].setInputType("text");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Switch_Password_Visibility"), gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1.length;i<l;++i) {
    if ( !(gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1[k] = gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1[i];
        ++k;
    }
}
gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Password_Entry"), gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1);
{for(var i = 0, len = gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1[i].setInputType("password");
}
}}

}


};gdjs.Login_95ScreenCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notice_Text"), gdjs.Login_95ScreenCode.GDNotice_9595TextObjects1);
{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects1.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Register_text"), gdjs.Login_95ScreenCode.GDRegister_9595textObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Login_95ScreenCode.GDRegister_9595textObjects1.length;i<l;++i) {
    if ( gdjs.Login_95ScreenCode.GDRegister_9595textObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Login_95ScreenCode.GDRegister_9595textObjects1[k] = gdjs.Login_95ScreenCode.GDRegister_9595textObjects1[i];
        ++k;
    }
}
gdjs.Login_95ScreenCode.GDRegister_9595textObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Register_Screen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Login_btn"), gdjs.Login_95ScreenCode.GDLogin_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Login_95ScreenCode.GDLogin_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Login_95ScreenCode.GDLogin_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Login_95ScreenCode.GDLogin_9595btnObjects1[k] = gdjs.Login_95ScreenCode.GDLogin_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Login_95ScreenCode.GDLogin_9595btnObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Login_95ScreenCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.Login_95ScreenCode.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.Login_95ScreenCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Login_95ScreenCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.Login_95ScreenCode.GDHomeObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Login_95ScreenCode.GDHomeObjects1[k] = gdjs.Login_95ScreenCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.Login_95ScreenCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Welcome _Screen", false);
}}

}


};

gdjs.Login_95ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Login_95ScreenCode.GDLogin_9595btnObjects1.length = 0;
gdjs.Login_95ScreenCode.GDLogin_9595btnObjects2.length = 0;
gdjs.Login_95ScreenCode.GDLogin_9595btnObjects3.length = 0;
gdjs.Login_95ScreenCode.GDLogin_9595btnObjects4.length = 0;
gdjs.Login_95ScreenCode.GDRegister_9595textObjects1.length = 0;
gdjs.Login_95ScreenCode.GDRegister_9595textObjects2.length = 0;
gdjs.Login_95ScreenCode.GDRegister_9595textObjects3.length = 0;
gdjs.Login_95ScreenCode.GDRegister_9595textObjects4.length = 0;
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects1.length = 0;
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2.length = 0;
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3.length = 0;
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects4.length = 0;
gdjs.Login_95ScreenCode.GDGoogleObjects1.length = 0;
gdjs.Login_95ScreenCode.GDGoogleObjects2.length = 0;
gdjs.Login_95ScreenCode.GDGoogleObjects3.length = 0;
gdjs.Login_95ScreenCode.GDGoogleObjects4.length = 0;
gdjs.Login_95ScreenCode.GDFacebookObjects1.length = 0;
gdjs.Login_95ScreenCode.GDFacebookObjects2.length = 0;
gdjs.Login_95ScreenCode.GDFacebookObjects3.length = 0;
gdjs.Login_95ScreenCode.GDFacebookObjects4.length = 0;
gdjs.Login_95ScreenCode.GDAppleObjects1.length = 0;
gdjs.Login_95ScreenCode.GDAppleObjects2.length = 0;
gdjs.Login_95ScreenCode.GDAppleObjects3.length = 0;
gdjs.Login_95ScreenCode.GDAppleObjects4.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects1.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects1.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects2.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects3.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects4.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects1.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects2.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects3.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects4.length = 0;
gdjs.Login_95ScreenCode.GDLogin_9595TextObjects1.length = 0;
gdjs.Login_95ScreenCode.GDLogin_9595TextObjects2.length = 0;
gdjs.Login_95ScreenCode.GDLogin_9595TextObjects3.length = 0;
gdjs.Login_95ScreenCode.GDLogin_9595TextObjects4.length = 0;
gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1.length = 0;
gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2.length = 0;
gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects3.length = 0;
gdjs.Login_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects4.length = 0;
gdjs.Login_95ScreenCode.GDHomeObjects1.length = 0;
gdjs.Login_95ScreenCode.GDHomeObjects2.length = 0;
gdjs.Login_95ScreenCode.GDHomeObjects3.length = 0;
gdjs.Login_95ScreenCode.GDHomeObjects4.length = 0;
gdjs.Login_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects1.length = 0;
gdjs.Login_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects2.length = 0;
gdjs.Login_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects3.length = 0;
gdjs.Login_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects4.length = 0;

gdjs.Login_95ScreenCode.eventsList7(runtimeScene);

return;

}

gdjs['Login_95ScreenCode'] = gdjs.Login_95ScreenCode;
