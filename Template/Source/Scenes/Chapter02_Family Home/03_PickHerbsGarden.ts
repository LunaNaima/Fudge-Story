namespace Spiegel_VN {
  export async function Chp02_03_PickHerbs(): ƒS.SceneReturn {
    dataForSave.pickedChp02_PickHerbsGarden = true;
    await ƒS.Speech.tell("Ich", "Ich pflücke Kräuter yum yum.");
    return "02_03 Fight with neighbor";
  }
}
