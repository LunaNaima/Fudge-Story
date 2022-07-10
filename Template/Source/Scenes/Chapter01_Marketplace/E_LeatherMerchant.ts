namespace Spiegel_VN {
  export async function Chp01_E_LeatherMerchant(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp01_E_LeatherMerchant);

    // await ƒS.update(2, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.update(
      transitions.fade.duration,
      transitions.fade.alpha,
      transitions.fade.edge //edge ist der Härtegrad
    );

    // ***BEGIN DIALOGUE ***
    await ƒS.Speech.tell(
      characters.maincharacter.name,
      dlg_scn_E_Leathermerchant.maincharacter.T0000
    );
    await ƒS.Speech.tell(
      characters.leatherMerchant.name,
      dlg_scn_E_Leathermerchant.leatherMerchant.T0000
    );

    // *** DIALOGUE OPTIONS ***
    let Chp01LeatherMerchantDialogueElementAnswers = {
      iSayAskAboutTrip: "'(Erkunden) Wie war denn die Reise ins Dorf?'",
      iSayAskAboutClothes: "'(Erkunden) Eure Ware sieht so anders aus...'",
      iSayBuyShoeCream: "Schuhcreme kaufen",
      iSayLeave: "'Auf Wiedersehen!'",
    };

    if (!dataForSave.pickedChp01_ConvoMother) {
      delete Chp01LeatherMerchantDialogueElementAnswers.iSayBuyShoeCream;
    }

    let Chp01LeatherMerchantDialogueElement = await ƒS.Menu.getInput(
      Chp01LeatherMerchantDialogueElementAnswers,
      "choicesCSSclass"
    );

    // *** SWITCHCASE DIALOGUE OPTIONS ***
    switch (Chp01LeatherMerchantDialogueElement) {
      case Chp01LeatherMerchantDialogueElementAnswers.iSayAskAboutTrip:
        // continue path here
        await ƒS.Speech.tell(characters.leatherMerchant, "Antwort Reise.");
        // dataForSave.score.scoreEmpathyPoints += 10;
        // console.log(dataForSave.score.scoreEmpathyPoints);
        ƒS.Speech.clear();
        return Chp01_E_LeatherMerchant();
        break;

      case Chp01LeatherMerchantDialogueElementAnswers.iSayAskAboutClothes:
        await ƒS.Speech.tell(
          characters.leatherMerchant,
          "Answer ask about decorations"
        );
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "01_E_LeatherMerchant";
        break;

      case Chp01LeatherMerchantDialogueElementAnswers.iSayBuyShoeCream:
        await ƒS.Speech.tell(
          characters.maincharacter,
          "Kann ich etwas Schuhcreme haben?"
        );
        ƒS.Speech.clear();
        return "01_E_LeatherMerchant";
        break;

      case Chp01LeatherMerchantDialogueElementAnswers.iSayLeave:
        await ƒS.Speech.tell(characters.maincharacter, "Machen Sies gut.");
        ƒS.Speech.clear();
        return "01_01 Intro Marketplace";
        break;

      // case firstDialogueElementAnswers.iSayExploreLeatherMerchant:
      //   // continue path here
      //   await ƒS.Speech.tell(
      //     characters.Mama,
      //     "Choice (Explore) Talk to leather merchant."
      //   );
      //   ƒS.Speech.clear();
      //   return Chp01_E_LeatherMerchant();
      //   break;
    }
  }
}
