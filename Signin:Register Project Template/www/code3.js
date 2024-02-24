gdjs.Game_95screenCode = {};
gdjs.Game_95screenCode.GDCruiseShipObjects1= [];
gdjs.Game_95screenCode.GDCruiseShipObjects2= [];
gdjs.Game_95screenCode.GDCruiseShipObjects3= [];
gdjs.Game_95screenCode.GDCruiseShipObjects4= [];
gdjs.Game_95screenCode.GDCruiseShipObjects5= [];
gdjs.Game_95screenCode.GDGoogleObjects1= [];
gdjs.Game_95screenCode.GDGoogleObjects2= [];
gdjs.Game_95screenCode.GDGoogleObjects3= [];
gdjs.Game_95screenCode.GDGoogleObjects4= [];
gdjs.Game_95screenCode.GDGoogleObjects5= [];
gdjs.Game_95screenCode.GDFacebookObjects1= [];
gdjs.Game_95screenCode.GDFacebookObjects2= [];
gdjs.Game_95screenCode.GDFacebookObjects3= [];
gdjs.Game_95screenCode.GDFacebookObjects4= [];
gdjs.Game_95screenCode.GDFacebookObjects5= [];
gdjs.Game_95screenCode.GDAppleObjects1= [];
gdjs.Game_95screenCode.GDAppleObjects2= [];
gdjs.Game_95screenCode.GDAppleObjects3= [];
gdjs.Game_95screenCode.GDAppleObjects4= [];
gdjs.Game_95screenCode.GDAppleObjects5= [];
gdjs.Game_95screenCode.GDEmail_9595EntryObjects1= [];
gdjs.Game_95screenCode.GDEmail_9595EntryObjects2= [];
gdjs.Game_95screenCode.GDEmail_9595EntryObjects3= [];
gdjs.Game_95screenCode.GDEmail_9595EntryObjects4= [];
gdjs.Game_95screenCode.GDEmail_9595EntryObjects5= [];
gdjs.Game_95screenCode.GDPassword_9595EntryObjects1= [];
gdjs.Game_95screenCode.GDPassword_9595EntryObjects2= [];
gdjs.Game_95screenCode.GDPassword_9595EntryObjects3= [];
gdjs.Game_95screenCode.GDPassword_9595EntryObjects4= [];
gdjs.Game_95screenCode.GDPassword_9595EntryObjects5= [];
gdjs.Game_95screenCode.GDPassword_9595TextObjects1= [];
gdjs.Game_95screenCode.GDPassword_9595TextObjects2= [];
gdjs.Game_95screenCode.GDPassword_9595TextObjects3= [];
gdjs.Game_95screenCode.GDPassword_9595TextObjects4= [];
gdjs.Game_95screenCode.GDPassword_9595TextObjects5= [];
gdjs.Game_95screenCode.GDEmail_9595TextObjects1= [];
gdjs.Game_95screenCode.GDEmail_9595TextObjects2= [];
gdjs.Game_95screenCode.GDEmail_9595TextObjects3= [];
gdjs.Game_95screenCode.GDEmail_9595TextObjects4= [];
gdjs.Game_95screenCode.GDEmail_9595TextObjects5= [];
gdjs.Game_95screenCode.GDLogin_9595TextObjects1= [];
gdjs.Game_95screenCode.GDLogin_9595TextObjects2= [];
gdjs.Game_95screenCode.GDLogin_9595TextObjects3= [];
gdjs.Game_95screenCode.GDLogin_9595TextObjects4= [];
gdjs.Game_95screenCode.GDLogin_9595TextObjects5= [];
gdjs.Game_95screenCode.GDSwitch_9595Password_9595VisibilityObjects1= [];
gdjs.Game_95screenCode.GDSwitch_9595Password_9595VisibilityObjects2= [];
gdjs.Game_95screenCode.GDSwitch_9595Password_9595VisibilityObjects3= [];
gdjs.Game_95screenCode.GDSwitch_9595Password_9595VisibilityObjects4= [];
gdjs.Game_95screenCode.GDSwitch_9595Password_9595VisibilityObjects5= [];
gdjs.Game_95screenCode.GDHomeObjects1= [];
gdjs.Game_95screenCode.GDHomeObjects2= [];
gdjs.Game_95screenCode.GDHomeObjects3= [];
gdjs.Game_95screenCode.GDHomeObjects4= [];
gdjs.Game_95screenCode.GDHomeObjects5= [];
gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1= [];
gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects2= [];
gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects3= [];
gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects4= [];
gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects5= [];


gdjs.Game_95screenCode.asyncCallback10794236 = function (runtimeScene, asyncObjectsList) {
{firebase.auth().signOut();
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Welcome _Screen", false);
}}
gdjs.Game_95screenCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_95screenCode.asyncCallback10794236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95screenCode.asyncCallback10789476 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("login_Logout_Register_btn"), gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects4);

{for(var i = 0, len = gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects4.length ;i < len;++i) {
    gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects4[i].SetLabelText("....", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Game_95screenCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Game_95screenCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects3) asyncObjectsList.addObject("login_Logout_Register_btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Game_95screenCode.asyncCallback10789476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95screenCode.asyncCallback10789188 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("login_Logout_Register_btn"), gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects3);

{for(var i = 0, len = gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects3.length ;i < len;++i) {
    gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects3[i].SetLabelText("...", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Game_95screenCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Game_95screenCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects2) asyncObjectsList.addObject("login_Logout_Register_btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Game_95screenCode.asyncCallback10789188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95screenCode.asyncCallback10794164 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("login_Logout_Register_btn"), gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects2);

{for(var i = 0, len = gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects2.length ;i < len;++i) {
    gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects2[i].SetLabelText("..", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Game_95screenCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Game_95screenCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1) asyncObjectsList.addObject("login_Logout_Register_btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Game_95screenCode.asyncCallback10794164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95screenCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("login_Logout_Register_btn"), gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1);
{for(var i = 0, len = gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1.length ;i < len;++i) {
    gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1[i].SetLabelText("Logout", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("login_Logout_Register_btn"), gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1[k] = gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1 */
{for(var i = 0, len = gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1.length ;i < len;++i) {
    gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1.length ;i < len;++i) {
    gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1[i].SetLabelText(".", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Game_95screenCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_95screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_95screenCode.GDCruiseShipObjects1.length = 0;
gdjs.Game_95screenCode.GDCruiseShipObjects2.length = 0;
gdjs.Game_95screenCode.GDCruiseShipObjects3.length = 0;
gdjs.Game_95screenCode.GDCruiseShipObjects4.length = 0;
gdjs.Game_95screenCode.GDCruiseShipObjects5.length = 0;
gdjs.Game_95screenCode.GDGoogleObjects1.length = 0;
gdjs.Game_95screenCode.GDGoogleObjects2.length = 0;
gdjs.Game_95screenCode.GDGoogleObjects3.length = 0;
gdjs.Game_95screenCode.GDGoogleObjects4.length = 0;
gdjs.Game_95screenCode.GDGoogleObjects5.length = 0;
gdjs.Game_95screenCode.GDFacebookObjects1.length = 0;
gdjs.Game_95screenCode.GDFacebookObjects2.length = 0;
gdjs.Game_95screenCode.GDFacebookObjects3.length = 0;
gdjs.Game_95screenCode.GDFacebookObjects4.length = 0;
gdjs.Game_95screenCode.GDFacebookObjects5.length = 0;
gdjs.Game_95screenCode.GDAppleObjects1.length = 0;
gdjs.Game_95screenCode.GDAppleObjects2.length = 0;
gdjs.Game_95screenCode.GDAppleObjects3.length = 0;
gdjs.Game_95screenCode.GDAppleObjects4.length = 0;
gdjs.Game_95screenCode.GDAppleObjects5.length = 0;
gdjs.Game_95screenCode.GDEmail_9595EntryObjects1.length = 0;
gdjs.Game_95screenCode.GDEmail_9595EntryObjects2.length = 0;
gdjs.Game_95screenCode.GDEmail_9595EntryObjects3.length = 0;
gdjs.Game_95screenCode.GDEmail_9595EntryObjects4.length = 0;
gdjs.Game_95screenCode.GDEmail_9595EntryObjects5.length = 0;
gdjs.Game_95screenCode.GDPassword_9595EntryObjects1.length = 0;
gdjs.Game_95screenCode.GDPassword_9595EntryObjects2.length = 0;
gdjs.Game_95screenCode.GDPassword_9595EntryObjects3.length = 0;
gdjs.Game_95screenCode.GDPassword_9595EntryObjects4.length = 0;
gdjs.Game_95screenCode.GDPassword_9595EntryObjects5.length = 0;
gdjs.Game_95screenCode.GDPassword_9595TextObjects1.length = 0;
gdjs.Game_95screenCode.GDPassword_9595TextObjects2.length = 0;
gdjs.Game_95screenCode.GDPassword_9595TextObjects3.length = 0;
gdjs.Game_95screenCode.GDPassword_9595TextObjects4.length = 0;
gdjs.Game_95screenCode.GDPassword_9595TextObjects5.length = 0;
gdjs.Game_95screenCode.GDEmail_9595TextObjects1.length = 0;
gdjs.Game_95screenCode.GDEmail_9595TextObjects2.length = 0;
gdjs.Game_95screenCode.GDEmail_9595TextObjects3.length = 0;
gdjs.Game_95screenCode.GDEmail_9595TextObjects4.length = 0;
gdjs.Game_95screenCode.GDEmail_9595TextObjects5.length = 0;
gdjs.Game_95screenCode.GDLogin_9595TextObjects1.length = 0;
gdjs.Game_95screenCode.GDLogin_9595TextObjects2.length = 0;
gdjs.Game_95screenCode.GDLogin_9595TextObjects3.length = 0;
gdjs.Game_95screenCode.GDLogin_9595TextObjects4.length = 0;
gdjs.Game_95screenCode.GDLogin_9595TextObjects5.length = 0;
gdjs.Game_95screenCode.GDSwitch_9595Password_9595VisibilityObjects1.length = 0;
gdjs.Game_95screenCode.GDSwitch_9595Password_9595VisibilityObjects2.length = 0;
gdjs.Game_95screenCode.GDSwitch_9595Password_9595VisibilityObjects3.length = 0;
gdjs.Game_95screenCode.GDSwitch_9595Password_9595VisibilityObjects4.length = 0;
gdjs.Game_95screenCode.GDSwitch_9595Password_9595VisibilityObjects5.length = 0;
gdjs.Game_95screenCode.GDHomeObjects1.length = 0;
gdjs.Game_95screenCode.GDHomeObjects2.length = 0;
gdjs.Game_95screenCode.GDHomeObjects3.length = 0;
gdjs.Game_95screenCode.GDHomeObjects4.length = 0;
gdjs.Game_95screenCode.GDHomeObjects5.length = 0;
gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects1.length = 0;
gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects2.length = 0;
gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects3.length = 0;
gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects4.length = 0;
gdjs.Game_95screenCode.GDlogin_9595Logout_9595Register_9595btnObjects5.length = 0;

gdjs.Game_95screenCode.eventsList4(runtimeScene);

return;

}

gdjs['Game_95screenCode'] = gdjs.Game_95screenCode;
