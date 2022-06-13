namespace Spiegel_VN {
  export async function Chp03_022_WaterWellKailani(): ƒS.SceneReturn {
    dataForSave.pickedChp03_WaterwellKailani = true;
    await ƒS.Speech.tell("Ich", "Kailani und ich gehen Wasser holen.");
    return "02_CS New day";
  }
}
