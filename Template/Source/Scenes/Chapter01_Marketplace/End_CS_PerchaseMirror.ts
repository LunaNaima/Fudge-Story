namespace Spiegel_VN {
  export async function Chp01_CS_PerchaseMirror(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp01_03_IntroMirror);
    await ƒS.Speech.tell("Mirror merchant", "Spiegel ist gekauft");
    return "01_CS Arrival Home";
  }
}
