namespace Spiegel_VN {
  export async function Chp09_03_TalkToCook(): ƒS.SceneReturn {
    dataForSave.pickedChp09TalkToCook = true;
    await ƒS.Speech.tell("Ich", "Ich rede mit dem Koch");
    return "08_CS Sleep & new day";
  }
}
