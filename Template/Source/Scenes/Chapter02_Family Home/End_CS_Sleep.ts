namespace Spiegel_VN {
  export async function Chp02_CS_Sleep(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp02_CS_Sleep);
    await ƒS.Speech.tell("Ich", "Muss jetzt schlafen gehen.");
    return "02_CS New day";
  }
}
