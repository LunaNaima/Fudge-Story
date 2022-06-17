namespace Spiegel_VN {
  export async function Chp09_E_TalkToVillagers(): ƒS.SceneReturn {
    dataForSave.pickedChp09DiscoverSpeakToVillagers = true;
    await ƒS.Speech.tell("Ich", "Ich will mit den Bewohnern reden");
    return "09_01 Research Marketplace";
  }
}
