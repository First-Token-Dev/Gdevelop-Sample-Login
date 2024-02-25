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
gdjs.Login_95ScreenCode.GDLogin_9595btnObjects5= [];
gdjs.Login_95ScreenCode.GDLogin_9595btnObjects6= [];
gdjs.Login_95ScreenCode.GDRegister_9595textObjects1= [];
gdjs.Login_95ScreenCode.GDRegister_9595textObjects2= [];
gdjs.Login_95ScreenCode.GDRegister_9595textObjects3= [];
gdjs.Login_95ScreenCode.GDRegister_9595textObjects4= [];
gdjs.Login_95ScreenCode.GDRegister_9595textObjects5= [];
gdjs.Login_95ScreenCode.GDRegister_9595textObjects6= [];
gdjs.Login_95ScreenCode.GDGoogleObjects1= [];
gdjs.Login_95ScreenCode.GDGoogleObjects2= [];
gdjs.Login_95ScreenCode.GDGoogleObjects3= [];
gdjs.Login_95ScreenCode.GDGoogleObjects4= [];
gdjs.Login_95ScreenCode.GDGoogleObjects5= [];
gdjs.Login_95ScreenCode.GDGoogleObjects6= [];
gdjs.Login_95ScreenCode.GDFacebookObjects1= [];
gdjs.Login_95ScreenCode.GDFacebookObjects2= [];
gdjs.Login_95ScreenCode.GDFacebookObjects3= [];
gdjs.Login_95ScreenCode.GDFacebookObjects4= [];
gdjs.Login_95ScreenCode.GDFacebookObjects5= [];
gdjs.Login_95ScreenCode.GDFacebookObjects6= [];
gdjs.Login_95ScreenCode.GDAppleObjects1= [];
gdjs.Login_95ScreenCode.GDAppleObjects2= [];
gdjs.Login_95ScreenCode.GDAppleObjects3= [];
gdjs.Login_95ScreenCode.GDAppleObjects4= [];
gdjs.Login_95ScreenCode.GDAppleObjects5= [];
gdjs.Login_95ScreenCode.GDAppleObjects6= [];
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects1= [];
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2= [];
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3= [];
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4= [];
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects5= [];
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects6= [];
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1= [];
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2= [];
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3= [];
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4= [];
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects5= [];
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects6= [];
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects1= [];
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects2= [];
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects3= [];
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects4= [];
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects5= [];
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects6= [];
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects1= [];
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects2= [];
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects3= [];
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects4= [];
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects5= [];
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects6= [];
gdjs.Login_95ScreenCode.GDSleepingEyeObjects1= [];
gdjs.Login_95ScreenCode.GDSleepingEyeObjects2= [];
gdjs.Login_95ScreenCode.GDSleepingEyeObjects3= [];
gdjs.Login_95ScreenCode.GDSleepingEyeObjects4= [];
gdjs.Login_95ScreenCode.GDSleepingEyeObjects5= [];
gdjs.Login_95ScreenCode.GDSleepingEyeObjects6= [];
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects1= [];
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2= [];
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3= [];
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects4= [];
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects5= [];
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects6= [];
gdjs.Login_95ScreenCode.GDBackgroundObjects1= [];
gdjs.Login_95ScreenCode.GDBackgroundObjects2= [];
gdjs.Login_95ScreenCode.GDBackgroundObjects3= [];
gdjs.Login_95ScreenCode.GDBackgroundObjects4= [];
gdjs.Login_95ScreenCode.GDBackgroundObjects5= [];
gdjs.Login_95ScreenCode.GDBackgroundObjects6= [];
gdjs.Login_95ScreenCode.GDHome_9595btnObjects1= [];
gdjs.Login_95ScreenCode.GDHome_9595btnObjects2= [];
gdjs.Login_95ScreenCode.GDHome_9595btnObjects3= [];
gdjs.Login_95ScreenCode.GDHome_9595btnObjects4= [];
gdjs.Login_95ScreenCode.GDHome_9595btnObjects5= [];
gdjs.Login_95ScreenCode.GDHome_9595btnObjects6= [];


gdjs.Login_95ScreenCode.asyncCallback9975668 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Notice_Text"), gdjs.Login_95ScreenCode.GDNotice_9595TextObjects6);

{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects6.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects6[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString(gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName());
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Welcome _Screen", false);
}}
gdjs.Login_95ScreenCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Login_95ScreenCode.GDNotice_9595TextObjects5) asyncObjectsList.addObject("Notice_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Login_95ScreenCode.asyncCallback9975668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Login_95ScreenCode.asyncCallback10829884 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Notice_Text"), gdjs.Login_95ScreenCode.GDNotice_9595TextObjects5);

{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects5.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects5[i].hide();
}
}}
gdjs.Login_95ScreenCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Login_95ScreenCode.GDNotice_9595TextObjects4) asyncObjectsList.addObject("Notice_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Login_95ScreenCode.asyncCallback10829884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Login_95ScreenCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.userManagement.isEmailVerified();
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("Notice_Text"), gdjs.Login_95ScreenCode.GDNotice_9595TextObjects5);

{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects5.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects5[i].getBehavior("Text").setText("Pass");
}
}{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects5.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects5[i].hide(false);
}
}
{ //Subevents
gdjs.Login_95ScreenCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.firebaseTools.auth.userManagement.isEmailVerified());
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("Notice_Text"), gdjs.Login_95ScreenCode.GDNotice_9595TextObjects4);

{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects4.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects4[i].getBehavior("Text").setText("Email not verified. \n Please Register");
}
}{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects4.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects4[i].hide(false);
}
}
{ //Subevents
gdjs.Login_95ScreenCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.Login_95ScreenCode.asyncCallback10827380 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.Login_95ScreenCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Login_95ScreenCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3) asyncObjectsList.addObject("Notice_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Login_95ScreenCode.asyncCallback10827380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Login_95ScreenCode.asyncCallback10827044 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Notice_Text"), gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3);

{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3[i].hide();
}
}
{ //Subevents
gdjs.Login_95ScreenCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Login_95ScreenCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2) asyncObjectsList.addObject("Notice_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Login_95ScreenCode.asyncCallback10827044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Login_95ScreenCode.asyncCallback10839052 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Notice_Text"), gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3);

{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3[i].hide();
}
}}
gdjs.Login_95ScreenCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2) asyncObjectsList.addObject("Notice_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Login_95ScreenCode.asyncCallback10839052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Login_95ScreenCode.asyncCallback10831900 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Notice_Text"), gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2);

{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2[i].hide();
}
}}
gdjs.Login_95ScreenCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Login_95ScreenCode.GDNotice_9595TextObjects1) asyncObjectsList.addObject("Notice_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Login_95ScreenCode.asyncCallback10831900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Login_95ScreenCode.eventsList7 = function(runtimeScene) {

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
/* Reuse gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Notice_Text"), gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2);
/* Reuse gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2 */
{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2[i].getBehavior("Text").setText("Pass");
}
}{gdjs.evtTools.firebaseTools.auth.signInWithEmail((( gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2[0].getText()), (( gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2.length === 0 ) ? "" :gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2[0].getText()), gdjs.VariablesContainer.badVariable);
}{for(var i = 0, len = gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.Login_95ScreenCode.eventsList4(runtimeScene);} //End of subevents
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
gdjs.Login_95ScreenCode.eventsList5(runtimeScene);} //End of subevents
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
gdjs.Login_95ScreenCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Login_95ScreenCode.eventsList8 = function(runtimeScene) {

{


gdjs.Login_95ScreenCode.eventsList7(runtimeScene);
}


};gdjs.Login_95ScreenCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SleepingEye"), gdjs.Login_95ScreenCode.GDSleepingEyeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Login_95ScreenCode.GDSleepingEyeObjects2.length;i<l;++i) {
    if ( gdjs.Login_95ScreenCode.GDSleepingEyeObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Login_95ScreenCode.GDSleepingEyeObjects2[k] = gdjs.Login_95ScreenCode.GDSleepingEyeObjects2[i];
        ++k;
    }
}
gdjs.Login_95ScreenCode.GDSleepingEyeObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Password_Entry"), gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2);
{for(var i = 0, len = gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2[i].setInputType("text");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SleepingEye"), gdjs.Login_95ScreenCode.GDSleepingEyeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Login_95ScreenCode.GDSleepingEyeObjects1.length;i<l;++i) {
    if ( !(gdjs.Login_95ScreenCode.GDSleepingEyeObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Login_95ScreenCode.GDSleepingEyeObjects1[k] = gdjs.Login_95ScreenCode.GDSleepingEyeObjects1[i];
        ++k;
    }
}
gdjs.Login_95ScreenCode.GDSleepingEyeObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Password_Entry"), gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1);
{for(var i = 0, len = gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1.length ;i < len;++i) {
    gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1[i].setInputType("password");
}
}}

}


};gdjs.Login_95ScreenCode.eventsList10 = function(runtimeScene) {

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
gdjs.Login_95ScreenCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.Login_95ScreenCode.eventsList9(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Home_btn"), gdjs.Login_95ScreenCode.GDHome_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Login_95ScreenCode.GDHome_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Login_95ScreenCode.GDHome_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Login_95ScreenCode.GDHome_9595btnObjects1[k] = gdjs.Login_95ScreenCode.GDHome_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Login_95ScreenCode.GDHome_9595btnObjects1.length = k;
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
gdjs.Login_95ScreenCode.GDLogin_9595btnObjects5.length = 0;
gdjs.Login_95ScreenCode.GDLogin_9595btnObjects6.length = 0;
gdjs.Login_95ScreenCode.GDRegister_9595textObjects1.length = 0;
gdjs.Login_95ScreenCode.GDRegister_9595textObjects2.length = 0;
gdjs.Login_95ScreenCode.GDRegister_9595textObjects3.length = 0;
gdjs.Login_95ScreenCode.GDRegister_9595textObjects4.length = 0;
gdjs.Login_95ScreenCode.GDRegister_9595textObjects5.length = 0;
gdjs.Login_95ScreenCode.GDRegister_9595textObjects6.length = 0;
gdjs.Login_95ScreenCode.GDGoogleObjects1.length = 0;
gdjs.Login_95ScreenCode.GDGoogleObjects2.length = 0;
gdjs.Login_95ScreenCode.GDGoogleObjects3.length = 0;
gdjs.Login_95ScreenCode.GDGoogleObjects4.length = 0;
gdjs.Login_95ScreenCode.GDGoogleObjects5.length = 0;
gdjs.Login_95ScreenCode.GDGoogleObjects6.length = 0;
gdjs.Login_95ScreenCode.GDFacebookObjects1.length = 0;
gdjs.Login_95ScreenCode.GDFacebookObjects2.length = 0;
gdjs.Login_95ScreenCode.GDFacebookObjects3.length = 0;
gdjs.Login_95ScreenCode.GDFacebookObjects4.length = 0;
gdjs.Login_95ScreenCode.GDFacebookObjects5.length = 0;
gdjs.Login_95ScreenCode.GDFacebookObjects6.length = 0;
gdjs.Login_95ScreenCode.GDAppleObjects1.length = 0;
gdjs.Login_95ScreenCode.GDAppleObjects2.length = 0;
gdjs.Login_95ScreenCode.GDAppleObjects3.length = 0;
gdjs.Login_95ScreenCode.GDAppleObjects4.length = 0;
gdjs.Login_95ScreenCode.GDAppleObjects5.length = 0;
gdjs.Login_95ScreenCode.GDAppleObjects6.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects1.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects2.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects3.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects4.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects5.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595EntryObjects6.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects1.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects2.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects3.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects4.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects5.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595EntryObjects6.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects1.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects2.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects3.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects4.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects5.length = 0;
gdjs.Login_95ScreenCode.GDPassword_9595TextObjects6.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects1.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects2.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects3.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects4.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects5.length = 0;
gdjs.Login_95ScreenCode.GDEmail_9595TextObjects6.length = 0;
gdjs.Login_95ScreenCode.GDSleepingEyeObjects1.length = 0;
gdjs.Login_95ScreenCode.GDSleepingEyeObjects2.length = 0;
gdjs.Login_95ScreenCode.GDSleepingEyeObjects3.length = 0;
gdjs.Login_95ScreenCode.GDSleepingEyeObjects4.length = 0;
gdjs.Login_95ScreenCode.GDSleepingEyeObjects5.length = 0;
gdjs.Login_95ScreenCode.GDSleepingEyeObjects6.length = 0;
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects1.length = 0;
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects2.length = 0;
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects3.length = 0;
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects4.length = 0;
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects5.length = 0;
gdjs.Login_95ScreenCode.GDNotice_9595TextObjects6.length = 0;
gdjs.Login_95ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Login_95ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Login_95ScreenCode.GDBackgroundObjects3.length = 0;
gdjs.Login_95ScreenCode.GDBackgroundObjects4.length = 0;
gdjs.Login_95ScreenCode.GDBackgroundObjects5.length = 0;
gdjs.Login_95ScreenCode.GDBackgroundObjects6.length = 0;
gdjs.Login_95ScreenCode.GDHome_9595btnObjects1.length = 0;
gdjs.Login_95ScreenCode.GDHome_9595btnObjects2.length = 0;
gdjs.Login_95ScreenCode.GDHome_9595btnObjects3.length = 0;
gdjs.Login_95ScreenCode.GDHome_9595btnObjects4.length = 0;
gdjs.Login_95ScreenCode.GDHome_9595btnObjects5.length = 0;
gdjs.Login_95ScreenCode.GDHome_9595btnObjects6.length = 0;

gdjs.Login_95ScreenCode.eventsList10(runtimeScene);

return;

}

gdjs['Login_95ScreenCode'] = gdjs.Login_95ScreenCode;
