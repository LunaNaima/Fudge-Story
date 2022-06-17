namespace Spiegel_VN {
  export async function Chp08_02_MeetFlynnInAlley(): ƒS.SceneReturn {
    dataForSave.pickedChp08CatchFlynnInAlley = true;
    await ƒS.Speech.tell("Ich", "Hi Flynn in der Gasse wir sind jetzt Freunde");
    return "08_03 Enter City";
  }
}
