namespace Spiegel_VN {
  export async function Chp01_E_FlowerMerchant(): ƒS.SceneReturn {
    // await ƒS.Location.show(locations.Chp01_E_FlowerMerchant); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden

    //   await ƒS.Location.show(locations.black);
    // await ƒS.update(2);
    await ƒS.Location.show(locations.Chp01_E_FlowerMerchant);

    // await ƒS.update(2, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.update(
      transitions.fade.duration,
      transitions.fade.alpha,
      transitions.fade.edge //edge ist der Härtegrad
    );

    // ***BEGINN DIALOG ***

    await ƒS.Speech.tell(
      characters.maincharacter.name,
      dlg_scn_E_Flowermerchant.maincharacter.T0000
    );
    await ƒS.Speech.tell(
      characters.flowerMerchant.name,
      dlg_scn_E_Flowermerchant.flowerMerchant.T0000
    );

    // *** DIALOGUE OPTIONS ***
    let chp01FlowerMerchantDialogueElementAnswers = {
      iSayAskAboutTrip: "(Erkunden) Wie war denn die Reise ins Dorf?",
      iSayAskAboutFlowers: "(Erkunden) Warum habt ihr so wenige Blumen da?",
      iSayBuyFlowers: "(Erkunden) Blumen kaufen",
      iSayLeave: "Auf Wiedersehen!"
    };

    if (!dataForSave.pickedChp01_ConvoMother) {
      delete chp01FlowerMerchantDialogueElementAnswers.iSayBuyFlowers;
    }

    let pickediSayAskAboutTrip: boolean;
    let pickediSayAskAboutFlowers: boolean;
    let pickediSayBuyFlowers: boolean;
    // let pickediSayLeave: boolean;

    do {
      if (pickediSayAskAboutTrip) {
        delete chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutTrip;
      } else if (pickediSayAskAboutFlowers) {
        delete chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutFlowers;
      } else if (pickediSayBuyFlowers) {
        delete chp01FlowerMerchantDialogueElementAnswers.iSayBuyFlowers;
      }

      let chp01FlowerMerchantDialogueElement = await ƒS.Menu.getInput(
        chp01FlowerMerchantDialogueElementAnswers,
        "choicesCSSclass"
      );

      // *** RESPONSES ***
      switch (chp01FlowerMerchantDialogueElement) {
        case chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutTrip:
          pickediSayAskAboutTrip = true;
          dataForSave.pickedChoice = true;
          await ƒS.Speech.tell(
            characters.flowerMerchant,
            "Antwort auf Frage nach Reise."
          );
          // dataForSave.score.scoreEmpathyPoints += 10;
          // console.log(dataForSave.score.scoreEmpathyPoints);
          ƒS.Speech.clear();
          // return "01_E_FlowerMerchant";
          break;

        case chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutFlowers:
          pickediSayAskAboutFlowers = true;
          dataForSave.pickedChoice = true;
          await ƒS.Speech.tell(
            characters.flowerMerchant,
            "Answer ask about decorations"
          );
          ƒS.Speech.clear();
          // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
          // ƒS.Character.hide(characters.Mama);
          // return "01_E_FlowerMerchant";
          break;

        case chp01FlowerMerchantDialogueElementAnswers.iSayBuyFlowers:
          pickediSayBuyFlowers = true;
          dataForSave.pickedChoice = true;
          await ƒS.Speech.tell(
            characters.Mama,
            "Ich will ein paar Blumen für meinen Opi kaufen"
          );
          ƒS.Speech.clear();
          // return "01_E_FlowerMerchant";
          break;

        case chp01FlowerMerchantDialogueElementAnswers.iSayLeave:
          // pickediSayLeave = true;
          dataForSave.pickedChoice = true;
          await ƒS.Speech.tell(characters.maincharacter, "Machen Sies gut.");
          ƒS.Speech.clear();
          return "01_01 Intro Marketplace";
          break;
      }
    } while (dataForSave.pickedChoice);
    // );
  }
}
