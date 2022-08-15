namespace Spiegel_VN {
  export async function Chp04_E_ExamineMirror(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp03_CS_KailaniMissing);
    await ƒS.Speech.tell("Ich", "Der Spiegel glitzert so komisch ...");
    return "03_CS Kailani is missing";
  }
}
