namespace Spiegel_VN {
  export async function Chp09_E_ListenToVillagers(): ƒS.SceneReturn {
    dataForSave.pickedChp09DiscoverListenToVillagers = true;
    await ƒS.Speech.tell(
      "Ich",
      "Ich höre mir mal an, was die Bewohner so sagen"
    );
    return "09_01 Research Marketplace";
  }
}
