gdjs.Register_95ScreenCode = {};
gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects1_1final = [];

gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2_1final = [];

gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3_2final = [];

gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects1_1final = [];

gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2_1final = [];

gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects3_2final = [];

gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects1_1final = [];

gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects1= [];
gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2= [];
gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects3= [];
gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects4= [];
gdjs.Register_95ScreenCode.GDAlternate_9595signin_9595TextObjects1= [];
gdjs.Register_95ScreenCode.GDAlternate_9595signin_9595TextObjects2= [];
gdjs.Register_95ScreenCode.GDAlternate_9595signin_9595TextObjects3= [];
gdjs.Register_95ScreenCode.GDAlternate_9595signin_9595TextObjects4= [];
gdjs.Register_95ScreenCode.GDRegister_9595btnObjects1= [];
gdjs.Register_95ScreenCode.GDRegister_9595btnObjects2= [];
gdjs.Register_95ScreenCode.GDRegister_9595btnObjects3= [];
gdjs.Register_95ScreenCode.GDRegister_9595btnObjects4= [];
gdjs.Register_95ScreenCode.GDNotice_9595TextObjects1= [];
gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2= [];
gdjs.Register_95ScreenCode.GDNotice_9595TextObjects3= [];
gdjs.Register_95ScreenCode.GDNotice_9595TextObjects4= [];
gdjs.Register_95ScreenCode.GDRepeat_9595Password_9595TextObjects1= [];
gdjs.Register_95ScreenCode.GDRepeat_9595Password_9595TextObjects2= [];
gdjs.Register_95ScreenCode.GDRepeat_9595Password_9595TextObjects3= [];
gdjs.Register_95ScreenCode.GDRepeat_9595Password_9595TextObjects4= [];
gdjs.Register_95ScreenCode.GDGoogleObjects1= [];
gdjs.Register_95ScreenCode.GDGoogleObjects2= [];
gdjs.Register_95ScreenCode.GDGoogleObjects3= [];
gdjs.Register_95ScreenCode.GDGoogleObjects4= [];
gdjs.Register_95ScreenCode.GDFacebookObjects1= [];
gdjs.Register_95ScreenCode.GDFacebookObjects2= [];
gdjs.Register_95ScreenCode.GDFacebookObjects3= [];
gdjs.Register_95ScreenCode.GDFacebookObjects4= [];
gdjs.Register_95ScreenCode.GDAppleObjects1= [];
gdjs.Register_95ScreenCode.GDAppleObjects2= [];
gdjs.Register_95ScreenCode.GDAppleObjects3= [];
gdjs.Register_95ScreenCode.GDAppleObjects4= [];
gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects1= [];
gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2= [];
gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3= [];
gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4= [];
gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects1= [];
gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2= [];
gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects3= [];
gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects4= [];
gdjs.Register_95ScreenCode.GDPassword_9595TextObjects1= [];
gdjs.Register_95ScreenCode.GDPassword_9595TextObjects2= [];
gdjs.Register_95ScreenCode.GDPassword_9595TextObjects3= [];
gdjs.Register_95ScreenCode.GDPassword_9595TextObjects4= [];
gdjs.Register_95ScreenCode.GDEmail_9595TextObjects1= [];
gdjs.Register_95ScreenCode.GDEmail_9595TextObjects2= [];
gdjs.Register_95ScreenCode.GDEmail_9595TextObjects3= [];
gdjs.Register_95ScreenCode.GDEmail_9595TextObjects4= [];
gdjs.Register_95ScreenCode.GDLogin_9595TextObjects1= [];
gdjs.Register_95ScreenCode.GDLogin_9595TextObjects2= [];
gdjs.Register_95ScreenCode.GDLogin_9595TextObjects3= [];
gdjs.Register_95ScreenCode.GDLogin_9595TextObjects4= [];
gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1= [];
gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2= [];
gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects3= [];
gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects4= [];
gdjs.Register_95ScreenCode.GDHomeObjects1= [];
gdjs.Register_95ScreenCode.GDHomeObjects2= [];
gdjs.Register_95ScreenCode.GDHomeObjects3= [];
gdjs.Register_95ScreenCode.GDHomeObjects4= [];
gdjs.Register_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects1= [];
gdjs.Register_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects2= [];
gdjs.Register_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects3= [];
gdjs.Register_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects4= [];


gdjs.Register_95ScreenCode.asyncCallback10694916 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Notice_Text"), gdjs.Register_95ScreenCode.GDNotice_9595TextObjects3);

{for(var i = 0, len = gdjs.Register_95ScreenCode.GDNotice_9595TextObjects3.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDNotice_9595TextObjects3[i].hide();
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Login_Screen", false);
}}
gdjs.Register_95ScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2) asyncObjectsList.addObject("Notice_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Register_95ScreenCode.asyncCallback10694916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Register_95ScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.userManagement.isEmailVerified();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Welcome _Screen", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.firebaseTools.auth.userManagement.isEmailVerified());
if (isConditionTrue_0) {
/* Reuse gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Notice_Text"), gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2);
/* Reuse gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2 */
{gdjs.evtTools.firebaseTools.auth.createAccountWithEmail((( gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2[0].getText()), (( gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2[0].getText()), gdjs.VariablesContainer.badVariable);
}{for(var i = 0, len = gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2[i].getBehavior("Text").setText("Please verify.");
}
}{for(var i = 0, len = gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2[i].hide(false);
}
}{gdjs.evtTools.firebaseTools.auth.userManagement.sendVerificationEmail();
}
{ //Subevents
gdjs.Register_95ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Register_95ScreenCode.asyncCallback10722700 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Notice_Text"), gdjs.Register_95ScreenCode.GDNotice_9595TextObjects3);

{for(var i = 0, len = gdjs.Register_95ScreenCode.GDNotice_9595TextObjects3.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDNotice_9595TextObjects3[i].hide();
}
}}
gdjs.Register_95ScreenCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2) asyncObjectsList.addObject("Notice_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Register_95ScreenCode.asyncCallback10722700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Register_95ScreenCode.asyncCallback10724732 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Notice_Text"), gdjs.Register_95ScreenCode.GDNotice_9595TextObjects3);

{for(var i = 0, len = gdjs.Register_95ScreenCode.GDNotice_9595TextObjects3.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDNotice_9595TextObjects3[i].hide();
}
}}
gdjs.Register_95ScreenCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2) asyncObjectsList.addObject("Notice_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Register_95ScreenCode.asyncCallback10724732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Register_95ScreenCode.asyncCallback10722396 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Notice_Text"), gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2);

{for(var i = 0, len = gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2[i].hide();
}
}}
gdjs.Register_95ScreenCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Register_95ScreenCode.GDNotice_9595TextObjects1) asyncObjectsList.addObject("Notice_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Register_95ScreenCode.asyncCallback10722396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Register_95ScreenCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Email_Entry"), gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2);
gdjs.copyArray(runtimeScene.getObjects("Password_Entry"), gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2);
gdjs.copyArray(runtimeScene.getObjects("Password_Re_Entry"), gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2[0].getText())) != 0);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2[0].getText())) >= 8);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2[0].getText())) <= 20);
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2[0].getText())) != 0);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2[0].getText())) >= 10);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2[0].getText())) <= 30);
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = ((( gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2[0].getBehavior("Text").getText()) == (( gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2[0].getBehavior("Text").getText()));
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2.length;i<l;++i) {
    if ( (gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2[i].getBehavior("Text").getText()).includes(".com") ) {
        isConditionTrue_1 = true;
        gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2[k] = gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2[i];
        ++k;
    }
}
gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2.length;i<l;++i) {
    if ( (gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2[i].getBehavior("Text").getText()).includes("@") ) {
        isConditionTrue_1 = true;
        gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2[k] = gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2[i];
        ++k;
    }
}
gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2.length = k;
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Register_95ScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2.length = 0;

gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2_1final.length = 0;
gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3.length = 0;

{gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Email_Entry"), gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4);
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[0].getText())) < 10);
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3_2final.indexOf(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[j]) === -1 )
            gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3_2final.push(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Email_Entry"), gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4);
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[0].getText())) > 30);
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3_2final.indexOf(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[j]) === -1 )
            gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3_2final.push(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3_2final, gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2_1final.indexOf(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3[j]) === -1 )
            gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2_1final.push(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3[j]);
    }
}
}
{
gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects3.length = 0;

{gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects3_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Password_Entry"), gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects4);
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects4.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects4[0].getText())) < 8);
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects3_2final.indexOf(gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects4[j]) === -1 )
            gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects3_2final.push(gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Password_Entry"), gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects4);
{isConditionTrue_2 = (gdjs.evtTools.string.strLen((( gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects4.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects4[0].getText())) > 20);
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects3_2final.indexOf(gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects4[j]) === -1 )
            gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects3_2final.push(gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects3_2final, gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects3);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2_1final.indexOf(gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects3[j]) === -1 )
            gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2_1final.push(gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects3[j]);
    }
}
}
{
gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3.length = 0;

{gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Email_Entry"), gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4);
for (var i = 0, k = 0, l = gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4.length;i<l;++i) {
    if ( !((gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[i].getBehavior("Text").getText()).includes(".com")) ) {
        isConditionTrue_2 = true;
        gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[k] = gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[i];
        ++k;
    }
}
gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3_2final.indexOf(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[j]) === -1 )
            gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3_2final.push(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Email_Entry"), gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4);
for (var i = 0, k = 0, l = gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4.length;i<l;++i) {
    if ( !((gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[i].getBehavior("Text").getText()).includes("@")) ) {
        isConditionTrue_2 = true;
        gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[k] = gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[i];
        ++k;
    }
}
gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3_2final.indexOf(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[j]) === -1 )
            gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3_2final.push(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3_2final, gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2_1final.indexOf(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3[j]) === -1 )
            gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2_1final.push(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2_1final, gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2);
gdjs.copyArray(gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2_1final, gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notice_Text"), gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2);
{for(var i = 0, len = gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2[i].getBehavior("Text").setText("Error Check Email/Password\nEmail: Minimum 8\n        Maximum 30\nPassword: Minimum 8\n          Maximum 20");
}
}{for(var i = 0, len = gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.Register_95ScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Password_Entry"), gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2);
gdjs.copyArray(runtimeScene.getObjects("Password_Re_Entry"), gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2[0].getBehavior("Text").getText()) != (( gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2[0].getBehavior("Text").getText()));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notice_Text"), gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2);
{for(var i = 0, len = gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2[i].getBehavior("Text").setText("Password does not match.");
}
}{for(var i = 0, len = gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.Register_95ScreenCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects1.length = 0;

gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects1.length = 0;

gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects1_1final.length = 0;
gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects1_1final.length = 0;
gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Email_Entry"), gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2);
{isConditionTrue_1 = (gdjs.evtTools.string.strLen((( gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2[0].getText())) == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects1_1final.indexOf(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2[j]) === -1 )
            gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects1_1final.push(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Password_Entry"), gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2);
{isConditionTrue_1 = (gdjs.evtTools.string.strLen((( gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2[0].getText())) == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects1_1final.indexOf(gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2[j]) === -1 )
            gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects1_1final.push(gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Password_Re_Entry"), gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2);
{isConditionTrue_1 = (gdjs.evtTools.string.strLen((( gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2.length === 0 ) ? "" :gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2[0].getText())) == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects1_1final.indexOf(gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2[j]) === -1 )
            gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects1_1final.push(gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects1_1final, gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects1);
gdjs.copyArray(gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects1_1final, gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects1);
gdjs.copyArray(gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects1_1final, gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notice_Text"), gdjs.Register_95ScreenCode.GDNotice_9595TextObjects1);
{for(var i = 0, len = gdjs.Register_95ScreenCode.GDNotice_9595TextObjects1.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDNotice_9595TextObjects1[i].getBehavior("Text").setText("Email/Password cannot be empty.");
}
}{for(var i = 0, len = gdjs.Register_95ScreenCode.GDNotice_9595TextObjects1.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDNotice_9595TextObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Register_95ScreenCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Register_95ScreenCode.eventsList6 = function(runtimeScene) {

{


gdjs.Register_95ScreenCode.eventsList5(runtimeScene);
}


};gdjs.Register_95ScreenCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Register_btn"), gdjs.Register_95ScreenCode.GDRegister_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Register_95ScreenCode.GDRegister_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Register_95ScreenCode.GDRegister_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Register_95ScreenCode.GDRegister_9595btnObjects1[k] = gdjs.Register_95ScreenCode.GDRegister_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Register_95ScreenCode.GDRegister_9595btnObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Register_95ScreenCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Register_95ScreenCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Switch_Password_Visibility"), gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2.length;i<l;++i) {
    if ( gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2[k] = gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2[i];
        ++k;
    }
}
gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Password_Entry"), gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2);
gdjs.copyArray(runtimeScene.getObjects("Password_Re_Entry"), gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2);
{for(var i = 0, len = gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2[i].setInputType("text");
}
}{for(var i = 0, len = gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2[i].setInputType("text");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Switch_Password_Visibility"), gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1.length;i<l;++i) {
    if ( !(gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1[k] = gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1[i];
        ++k;
    }
}
gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Password_Entry"), gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Password_Re_Entry"), gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects1);
{for(var i = 0, len = gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects1.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects1[i].setInputType("password");
}
}{for(var i = 0, len = gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects1.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects1[i].setInputType("password");
}
}}

}


};gdjs.Register_95ScreenCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notice_Text"), gdjs.Register_95ScreenCode.GDNotice_9595TextObjects1);
{firebase.performance();
}{firebase.analytics();
}{for(var i = 0, len = gdjs.Register_95ScreenCode.GDNotice_9595TextObjects1.length ;i < len;++i) {
    gdjs.Register_95ScreenCode.GDNotice_9595TextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Login_Text"), gdjs.Register_95ScreenCode.GDLogin_9595TextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Register_95ScreenCode.GDLogin_9595TextObjects1.length;i<l;++i) {
    if ( gdjs.Register_95ScreenCode.GDLogin_9595TextObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Register_95ScreenCode.GDLogin_9595TextObjects1[k] = gdjs.Register_95ScreenCode.GDLogin_9595TextObjects1[i];
        ++k;
    }
}
gdjs.Register_95ScreenCode.GDLogin_9595TextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Login_Screen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Google"), gdjs.Register_95ScreenCode.GDGoogleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Register_95ScreenCode.GDGoogleObjects1.length;i<l;++i) {
    if ( gdjs.Register_95ScreenCode.GDGoogleObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Register_95ScreenCode.GDGoogleObjects1[k] = gdjs.Register_95ScreenCode.GDGoogleObjects1[i];
        ++k;
    }
}
gdjs.Register_95ScreenCode.GDGoogleObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.auth.signInWithProvider("google", gdjs.VariablesContainer.badVariable);
}}

}


{


gdjs.Register_95ScreenCode.eventsList7(runtimeScene);
}


{


gdjs.Register_95ScreenCode.eventsList8(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.Register_95ScreenCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Register_95ScreenCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.Register_95ScreenCode.GDHomeObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Register_95ScreenCode.GDHomeObjects1[k] = gdjs.Register_95ScreenCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.Register_95ScreenCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Welcome _Screen", false);
}}

}


};

gdjs.Register_95ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects1.length = 0;
gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects2.length = 0;
gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects3.length = 0;
gdjs.Register_95ScreenCode.GDPassword_9595Re_9595EntryObjects4.length = 0;
gdjs.Register_95ScreenCode.GDAlternate_9595signin_9595TextObjects1.length = 0;
gdjs.Register_95ScreenCode.GDAlternate_9595signin_9595TextObjects2.length = 0;
gdjs.Register_95ScreenCode.GDAlternate_9595signin_9595TextObjects3.length = 0;
gdjs.Register_95ScreenCode.GDAlternate_9595signin_9595TextObjects4.length = 0;
gdjs.Register_95ScreenCode.GDRegister_9595btnObjects1.length = 0;
gdjs.Register_95ScreenCode.GDRegister_9595btnObjects2.length = 0;
gdjs.Register_95ScreenCode.GDRegister_9595btnObjects3.length = 0;
gdjs.Register_95ScreenCode.GDRegister_9595btnObjects4.length = 0;
gdjs.Register_95ScreenCode.GDNotice_9595TextObjects1.length = 0;
gdjs.Register_95ScreenCode.GDNotice_9595TextObjects2.length = 0;
gdjs.Register_95ScreenCode.GDNotice_9595TextObjects3.length = 0;
gdjs.Register_95ScreenCode.GDNotice_9595TextObjects4.length = 0;
gdjs.Register_95ScreenCode.GDRepeat_9595Password_9595TextObjects1.length = 0;
gdjs.Register_95ScreenCode.GDRepeat_9595Password_9595TextObjects2.length = 0;
gdjs.Register_95ScreenCode.GDRepeat_9595Password_9595TextObjects3.length = 0;
gdjs.Register_95ScreenCode.GDRepeat_9595Password_9595TextObjects4.length = 0;
gdjs.Register_95ScreenCode.GDGoogleObjects1.length = 0;
gdjs.Register_95ScreenCode.GDGoogleObjects2.length = 0;
gdjs.Register_95ScreenCode.GDGoogleObjects3.length = 0;
gdjs.Register_95ScreenCode.GDGoogleObjects4.length = 0;
gdjs.Register_95ScreenCode.GDFacebookObjects1.length = 0;
gdjs.Register_95ScreenCode.GDFacebookObjects2.length = 0;
gdjs.Register_95ScreenCode.GDFacebookObjects3.length = 0;
gdjs.Register_95ScreenCode.GDFacebookObjects4.length = 0;
gdjs.Register_95ScreenCode.GDAppleObjects1.length = 0;
gdjs.Register_95ScreenCode.GDAppleObjects2.length = 0;
gdjs.Register_95ScreenCode.GDAppleObjects3.length = 0;
gdjs.Register_95ScreenCode.GDAppleObjects4.length = 0;
gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects1.length = 0;
gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects2.length = 0;
gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects3.length = 0;
gdjs.Register_95ScreenCode.GDEmail_9595EntryObjects4.length = 0;
gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects1.length = 0;
gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects2.length = 0;
gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects3.length = 0;
gdjs.Register_95ScreenCode.GDPassword_9595EntryObjects4.length = 0;
gdjs.Register_95ScreenCode.GDPassword_9595TextObjects1.length = 0;
gdjs.Register_95ScreenCode.GDPassword_9595TextObjects2.length = 0;
gdjs.Register_95ScreenCode.GDPassword_9595TextObjects3.length = 0;
gdjs.Register_95ScreenCode.GDPassword_9595TextObjects4.length = 0;
gdjs.Register_95ScreenCode.GDEmail_9595TextObjects1.length = 0;
gdjs.Register_95ScreenCode.GDEmail_9595TextObjects2.length = 0;
gdjs.Register_95ScreenCode.GDEmail_9595TextObjects3.length = 0;
gdjs.Register_95ScreenCode.GDEmail_9595TextObjects4.length = 0;
gdjs.Register_95ScreenCode.GDLogin_9595TextObjects1.length = 0;
gdjs.Register_95ScreenCode.GDLogin_9595TextObjects2.length = 0;
gdjs.Register_95ScreenCode.GDLogin_9595TextObjects3.length = 0;
gdjs.Register_95ScreenCode.GDLogin_9595TextObjects4.length = 0;
gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects1.length = 0;
gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects2.length = 0;
gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects3.length = 0;
gdjs.Register_95ScreenCode.GDSwitch_9595Password_9595VisibilityObjects4.length = 0;
gdjs.Register_95ScreenCode.GDHomeObjects1.length = 0;
gdjs.Register_95ScreenCode.GDHomeObjects2.length = 0;
gdjs.Register_95ScreenCode.GDHomeObjects3.length = 0;
gdjs.Register_95ScreenCode.GDHomeObjects4.length = 0;
gdjs.Register_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects1.length = 0;
gdjs.Register_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects2.length = 0;
gdjs.Register_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects3.length = 0;
gdjs.Register_95ScreenCode.GDlogin_9595Logout_9595Register_9595btnObjects4.length = 0;

gdjs.Register_95ScreenCode.eventsList9(runtimeScene);

return;

}

gdjs['Register_95ScreenCode'] = gdjs.Register_95ScreenCode;