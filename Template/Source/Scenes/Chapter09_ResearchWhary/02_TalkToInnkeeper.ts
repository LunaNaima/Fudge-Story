namespace Spiegel_VN {
  export async function Chp09_02_TalkToInnkeeper(): ƒS.SceneReturn {
    dataForSave.pickedChp09TalkToInnkeeper = true;
    await ƒS.Speech.tell("Ich", "Ich rede mit der Inhaberin");
    return "08_CS Sleep & new day";
  }
}
