gdjs.Game_95screenCode = {};
gdjs.Game_95screenCode.GDNewSpriteObjects1= [];
gdjs.Game_95screenCode.GDNewSpriteObjects2= [];
gdjs.Game_95screenCode.GDNewSpriteObjects3= [];
gdjs.Game_95screenCode.GDNewSpriteObjects4= [];
gdjs.Game_95screenCode.GDNewSpriteObjects5= [];
gdjs.Game_95screenCode.GDlogout_9595btnObjects1= [];
gdjs.Game_95screenCode.GDlogout_9595btnObjects2= [];
gdjs.Game_95screenCode.GDlogout_9595btnObjects3= [];
gdjs.Game_95screenCode.GDlogout_9595btnObjects4= [];
gdjs.Game_95screenCode.GDlogout_9595btnObjects5= [];
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
gdjs.Game_95screenCode.GDSleepingEyeObjects1= [];
gdjs.Game_95screenCode.GDSleepingEyeObjects2= [];
gdjs.Game_95screenCode.GDSleepingEyeObjects3= [];
gdjs.Game_95screenCode.GDSleepingEyeObjects4= [];
gdjs.Game_95screenCode.GDSleepingEyeObjects5= [];
gdjs.Game_95screenCode.GDNotice_9595TextObjects1= [];
gdjs.Game_95screenCode.GDNotice_9595TextObjects2= [];
gdjs.Game_95screenCode.GDNotice_9595TextObjects3= [];
gdjs.Game_95screenCode.GDNotice_9595TextObjects4= [];
gdjs.Game_95screenCode.GDNotice_9595TextObjects5= [];
gdjs.Game_95screenCode.GDBackgroundObjects1= [];
gdjs.Game_95screenCode.GDBackgroundObjects2= [];
gdjs.Game_95screenCode.GDBackgroundObjects3= [];
gdjs.Game_95screenCode.GDBackgroundObjects4= [];
gdjs.Game_95screenCode.GDBackgroundObjects5= [];
gdjs.Game_95screenCode.GDHome_9595btnObjects1= [];
gdjs.Game_95screenCode.GDHome_9595btnObjects2= [];
gdjs.Game_95screenCode.GDHome_9595btnObjects3= [];
gdjs.Game_95screenCode.GDHome_9595btnObjects4= [];
gdjs.Game_95screenCode.GDHome_9595btnObjects5= [];


gdjs.Game_95screenCode.asyncCallback8920436 = function (runtimeScene, asyncObjectsList) {
{firebase.auth().signOut();
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Welcome _Screen", false);
}}
gdjs.Game_95screenCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Game_95screenCode.asyncCallback8920436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95screenCode.asyncCallback12364788 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("logout_btn"), gdjs.Game_95screenCode.GDlogout_9595btnObjects4);

{for(var i = 0, len = gdjs.Game_95screenCode.GDlogout_9595btnObjects4.length ;i < len;++i) {
    gdjs.Game_95screenCode.GDlogout_9595btnObjects4[i].SetLabelText("....", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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
for (const obj of gdjs.Game_95screenCode.GDlogout_9595btnObjects3) asyncObjectsList.addObject("logout_btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Game_95screenCode.asyncCallback12364788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95screenCode.asyncCallback10979756 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("logout_btn"), gdjs.Game_95screenCode.GDlogout_9595btnObjects3);

{for(var i = 0, len = gdjs.Game_95screenCode.GDlogout_9595btnObjects3.length ;i < len;++i) {
    gdjs.Game_95screenCode.GDlogout_9595btnObjects3[i].SetLabelText("...", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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
for (const obj of gdjs.Game_95screenCode.GDlogout_9595btnObjects2) asyncObjectsList.addObject("logout_btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Game_95screenCode.asyncCallback10979756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95screenCode.asyncCallback9386580 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("logout_btn"), gdjs.Game_95screenCode.GDlogout_9595btnObjects2);

{for(var i = 0, len = gdjs.Game_95screenCode.GDlogout_9595btnObjects2.length ;i < len;++i) {
    gdjs.Game_95screenCode.GDlogout_9595btnObjects2[i].SetLabelText("..", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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
for (const obj of gdjs.Game_95screenCode.GDlogout_9595btnObjects1) asyncObjectsList.addObject("logout_btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Game_95screenCode.asyncCallback9386580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95screenCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("logout_btn"), gdjs.Game_95screenCode.GDlogout_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95screenCode.GDlogout_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Game_95screenCode.GDlogout_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_95screenCode.GDlogout_9595btnObjects1[k] = gdjs.Game_95screenCode.GDlogout_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Game_95screenCode.GDlogout_9595btnObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notice_Text"), gdjs.Game_95screenCode.GDNotice_9595TextObjects1);
/* Reuse gdjs.Game_95screenCode.GDlogout_9595btnObjects1 */
{for(var i = 0, len = gdjs.Game_95screenCode.GDNotice_9595TextObjects1.length ;i < len;++i) {
    gdjs.Game_95screenCode.GDNotice_9595TextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_95screenCode.GDlogout_9595btnObjects1.length ;i < len;++i) {
    gdjs.Game_95screenCode.GDlogout_9595btnObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Game_95screenCode.GDlogout_9595btnObjects1.length ;i < len;++i) {
    gdjs.Game_95screenCode.GDlogout_9595btnObjects1[i].SetLabelText(".", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Game_95screenCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_95screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_95screenCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_95screenCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_95screenCode.GDNewSpriteObjects3.length = 0;
gdjs.Game_95screenCode.GDNewSpriteObjects4.length = 0;
gdjs.Game_95screenCode.GDNewSpriteObjects5.length = 0;
gdjs.Game_95screenCode.GDlogout_9595btnObjects1.length = 0;
gdjs.Game_95screenCode.GDlogout_9595btnObjects2.length = 0;
gdjs.Game_95screenCode.GDlogout_9595btnObjects3.length = 0;
gdjs.Game_95screenCode.GDlogout_9595btnObjects4.length = 0;
gdjs.Game_95screenCode.GDlogout_9595btnObjects5.length = 0;
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
gdjs.Game_95screenCode.GDSleepingEyeObjects1.length = 0;
gdjs.Game_95screenCode.GDSleepingEyeObjects2.length = 0;
gdjs.Game_95screenCode.GDSleepingEyeObjects3.length = 0;
gdjs.Game_95screenCode.GDSleepingEyeObjects4.length = 0;
gdjs.Game_95screenCode.GDSleepingEyeObjects5.length = 0;
gdjs.Game_95screenCode.GDNotice_9595TextObjects1.length = 0;
gdjs.Game_95screenCode.GDNotice_9595TextObjects2.length = 0;
gdjs.Game_95screenCode.GDNotice_9595TextObjects3.length = 0;
gdjs.Game_95screenCode.GDNotice_9595TextObjects4.length = 0;
gdjs.Game_95screenCode.GDNotice_9595TextObjects5.length = 0;
gdjs.Game_95screenCode.GDBackgroundObjects1.length = 0;
gdjs.Game_95screenCode.GDBackgroundObjects2.length = 0;
gdjs.Game_95screenCode.GDBackgroundObjects3.length = 0;
gdjs.Game_95screenCode.GDBackgroundObjects4.length = 0;
gdjs.Game_95screenCode.GDBackgroundObjects5.length = 0;
gdjs.Game_95screenCode.GDHome_9595btnObjects1.length = 0;
gdjs.Game_95screenCode.GDHome_9595btnObjects2.length = 0;
gdjs.Game_95screenCode.GDHome_9595btnObjects3.length = 0;
gdjs.Game_95screenCode.GDHome_9595btnObjects4.length = 0;
gdjs.Game_95screenCode.GDHome_9595btnObjects5.length = 0;

gdjs.Game_95screenCode.eventsList4(runtimeScene);

return;

}

gdjs['Game_95screenCode'] = gdjs.Game_95screenCode;
