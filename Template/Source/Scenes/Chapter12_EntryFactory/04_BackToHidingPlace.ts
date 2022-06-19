namespace Spiegel_VN {
  export async function Chp12_04_BackToHidingPlace(): ƒS.SceneReturn {
    await ƒS.Speech.tell("Ich", "Gehen wir zurück zum Versteck");
    if (dataForSave.pickedChp10SingToBirds) {
      return "12_051 Birds offer help";
    } else {
      return "12_052 Make a wish";
    }
  }
}
