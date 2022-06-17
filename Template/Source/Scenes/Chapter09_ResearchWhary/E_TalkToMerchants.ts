namespace Spiegel_VN {
  export async function Chp09_E_TalkToMerchants(): ƒS.SceneReturn {
    dataForSave.pickedChp09DiscoverMerchants = true;
    await ƒS.Speech.tell(
      "Ich",
      "Ich höre mir mal an, was die Händler so sagen"
    );
    return "09_01 Research Marketplace";
  }
}
