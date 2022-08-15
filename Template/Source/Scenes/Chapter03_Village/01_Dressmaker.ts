namespace Spiegel_VN {
  export async function Chp03_01_Dressmaker(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp03_01_Dressmaker);
    dataForSave.pickedChp03_Dressmaker = true;
    await ƒS.Speech.tell(
      "Ich",
      "Kann jetzt meine Jacke von der Schneiderin abholen, cool."
    );
    return "02_CS New day";
  }
}
