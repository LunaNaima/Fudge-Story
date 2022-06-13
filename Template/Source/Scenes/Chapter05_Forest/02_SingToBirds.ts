namespace Spiegel_VN {
  export async function Chp05_02_SingToBirds(): ƒS.SceneReturn {
    dataForSave.pickedChp05SingToBirds = true;
    await ƒS.Speech.tell("Ich", "Hier singe ich zu den Vögeln");
    return "05_01 Clearing";
  }
}
