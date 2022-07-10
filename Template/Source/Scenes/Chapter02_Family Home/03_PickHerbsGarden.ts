namespace Spiegel_VN {
  export async function Chp02_03_PickHerbs(): ƒS.SceneReturn {
    dataForSave.pickedChp02_PickHerbsGarden = true;
    await ƒS.Speech.tell(
      "Ich",
      "Ich pflücke Kräuter yum yum. Gleich hör ich nen Streit mit den Nachbarn"
    );
    return "02_03 Fight with neighbor";
  }
}
