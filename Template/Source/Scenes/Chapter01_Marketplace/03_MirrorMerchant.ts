namespace Spiegel_VN {
  export async function Chp01_03_IntroMirror(): ƒS.SceneReturn {
    dataForSave.pickedChp01_MirrorMerchant = true;

    await ƒS.Speech.tell("Spiegelhändler", "Hallo ich bin der Spiegelhändler");

    await ƒS.Speech.tell(
      characters.maincharacter.name,
      dlg_scn_02.maincharacter.T0000
    );
    await ƒS.Speech.tell(characters.Mama.name, dlg_scn_02.Mama.T0000);

    //*** OPTIONS *//
    let Chp01ConvoMotherElementAnswers = {
      iSayOk: "Okay.",
      iSayYes: "Ja.",
      iSayEmpathyPoints: "10",
    };

    return Chp01_01_IntroMarketplace();
  }
}
