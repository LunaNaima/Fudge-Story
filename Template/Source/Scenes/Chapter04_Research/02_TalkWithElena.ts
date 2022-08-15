namespace Spiegel_VN {
  export async function Chp04_02_TalkWithElena(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp02_E_DiscoverKitchen);
    dataForSave.pickedChp04TalkToElena = true;
    await ƒS.Speech.tell("Ich", "Mutti, kann ich mit dir reden?");
    return "03_CS Kailani is missing";
  }
}
