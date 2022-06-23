namespace Spiegel_VN {
  export async function Chp13_CS_EntryMirrorRoom(): ƒS.SceneReturn {
    // hier counter einbauen: beim 3. Mal klicken gehts weiter
    console.log("Boolean picked Iron");
    console.log(dataForSave.pickedIron);
    if (!dataForSave.pickedIron) {
      return "14.2_01 Realization mirror";
    }
    
  }
}
