namespace Spiegel_VN {
  export async function Chp04_03_ResearchLibrary(): ƒS.SceneReturn {
    dataForSave.pickedChp04ResearchLibrary = true;
    await ƒS.Location.show(locations.Chp03_E_DiscoverLibraryInside);
    await ƒS.Speech.tell("Ich", "In der Bücherei finde ich bestimmt was.");
    return "03_CS Kailani is missing";
  }
}
