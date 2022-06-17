namespace Spiegel_VN {
  export async function Chp09_012_MakeAWish(): ƒS.SceneReturn {
    dataForSave.pickedChp09MakeAWish = true;
    await ƒS.Speech.tell("Ich", "Ich brauch den Kobold!");
    return "08_CS Sleep & new day";
  }
}
