namespace Spiegel_VN {
  export async function Chp01_03_IntroMirror(): ƒS.SceneReturn {
    dataForSave.pickedChp01_MirrorMerchant = true;

    
    await ƒS.Speech.tell("Spiegelhändler", "Hallo ich bin der Spiegelhändler");

    return Chp01_01_IntroMarketplace();
  }
}
