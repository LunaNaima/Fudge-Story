namespace Spiegel_VN {
  export async function Chp11_02_FindIron(): ƒS.SceneReturn {
    dataForSave.pickedIron = true;
    await ƒS.Speech.tell("Ich", "Hier finde ich ein Stück Eisen");
    return "11_01 Search for hiding place";
  }
}
