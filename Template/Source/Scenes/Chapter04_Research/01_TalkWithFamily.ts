namespace Spiegel_VN {
  export async function Chp04_01_TalkWithFamily(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp02_02_LivingRoom);
    dataForSave.pickedChp04TalkToFamily = true;
    await ƒS.Speech.tell(
      "Ich",
      "Wir reden und reden und reden ... Kailani ist trotzdem einfach weg!"
    );
    return "03_CS Kailani is missing";
  }
}
