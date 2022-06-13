namespace Spiegel_VN {
  export async function Chp02_022_TestWithKailani(): ƒS.SceneReturn {
    dataForSave.pickedChp02_TestWithKailani = true;
    await ƒS.Speech.tell("Ich", "Teste den Spiegel mit Kailani.");
    return "01_CS Arrival Home";
  }
}
