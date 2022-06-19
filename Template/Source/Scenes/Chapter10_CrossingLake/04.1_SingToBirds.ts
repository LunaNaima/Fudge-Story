namespace Spiegel_VN {
  export async function Chp10_041_SingToBirds(): ƒS.SceneReturn {
    dataForSave.pickedChp10SingToBirds = true;
    await ƒS.Speech.tell("Ich", "La la la... ich singe zu den Vögeln");
    return "10_051 Birds become friendly";
  }
}
