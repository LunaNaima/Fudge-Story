namespace Spiegel_VN {
  export async function Chp01_03_IntroMirror(): ƒS.SceneReturn {
    dataForSave.pickedChp01_MirrorMerchant = true;
    await ƒS.Speech.tell(
      characters.mirrorMerchant.name,
      dlg_Chp01EntryMirrorMerchant.mirrorMerchant.T0000
    );

    //*** OPTIONS *//
    let Chp01MirrorMerchantElementAnswers = {
      iSayUnsure: "Ich bin mir unsicher.",
      iSayYes: "Zeigen Sie mal her!",
      iSayNo: "Ne, gar nicht ...",
    };

    let Chp01MirrorMerchantElement = await ƒS.Menu.getInput(
      Chp01MirrorMerchantElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp01MirrorMerchantElement) {
      case Chp01MirrorMerchantElementAnswers.iSayUnsure:
        await ƒS.Speech.tell(
          characters.maincharacter.name,
          '"Bin mir echt unsicher!"'
        );
        await ƒS.Speech.tell(
          characters.mirrorMerchant.name,
          '"Aber nein, schau doch mal her! Deine Zweifel sind unbegründet!"'
        );
        // hier noch: rest von Gespräch, posen Spiegelhändler, nochmal Dialog
        ƒS.Speech.clear();
        return "01_01 Intro Marketplace";
        break;

      case Chp01MirrorMerchantElementAnswers.iSayYes:
        await ƒS.Speech.tell(
          characters.maincharacter.name,
          "Ja gerne, zeigen Sie mal her!"
        );
        await ƒS.Speech.tell(
          characters.mirrorMerchant.name,
          '"Interessierte Kundschaft! Ich zeige es dir ... "'
        );
        ƒS.Speech.clear();
        return "01_01 Intro Marketplace";
        break;

      case Chp01MirrorMerchantElementAnswers.iSayNo:
        await ƒS.Speech.tell(
          characters.maincharacter.name,
          "Lieber nicht, nein"
        );
        await ƒS.Speech.tell(
          characters.mirrorMerchant.name,
          '"Bist du sicher? Komm, schau mal ... "'
        );
        ƒS.Speech.clear();
        return "01_01 Intro Marketplace"; 
        break;
    }
  }
}
