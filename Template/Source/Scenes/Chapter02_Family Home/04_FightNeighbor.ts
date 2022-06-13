namespace Spiegel_VN {
  export async function Chp02_03_FightNeighbor(): ƒS.SceneReturn {
    dataForSave.pickedChp02_FightNeighbor = true;
    await ƒS.Speech.tell("Ich", "Die Nachbarn streiten und ich hör zu.");
    return "01_CS Arrival Home";
  }
}
