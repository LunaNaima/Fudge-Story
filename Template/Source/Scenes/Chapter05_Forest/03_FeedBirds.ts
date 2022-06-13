namespace Spiegel_VN {
  export async function Chp05_03_FeedBirds(): ƒS.SceneReturn {
    dataForSave.pickedChp05GiveBirdsFood = true;
    await ƒS.Speech.tell("Ich", "Hier füttere ich die Vögel");
    return "05_01 Clearing";
  }
}
