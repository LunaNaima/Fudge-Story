namespace Spiegel_VN {
  export async function Chp09_04_TalkToStablehand(): ƒS.SceneReturn {
    dataForSave.pickedChp09TalkToStablehand = true;
    await ƒS.Speech.tell("Ich", "Ich rede mit dem Stallmädchen");
    return "08_CS Sleep & new day";
  }
}
