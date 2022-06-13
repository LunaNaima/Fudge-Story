namespace Spiegel_VN {
  export async function Chp07_02_TravelToWhary(): ƒS.SceneReturn {
    dataForSave.pickedChp07TravelToWhary = true;
    await ƒS.Speech.tell(
      "Ich",
      "Es geht los, es geht los, es geht los nach Wharyyy"
    );
    return "06_CS Arrival Meadow";
  }
}
