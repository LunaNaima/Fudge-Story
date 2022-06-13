namespace Spiegel_VN {
  export async function Chp02_021_TestWithElena(): ƒS.SceneReturn {
    dataForSave.pickedChp02_TestWithElena = true;
    console.log("boolean picked Test with Elena:");
    console.log(dataForSave.pickedChp02_TestWithElena);
    await ƒS.Speech.tell("Ich", "Teste den Spiegel mit Mutti.");
    return "01_CS Arrival Home";
  }
}
