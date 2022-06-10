namespace Spiegel_VN {
  export async function Chp01_E_FlowerMerchant(): ƒS.SceneReturn {
    (dataForSave.pickedChp01_E_FlowerMerchantScene = true),
      await ƒS.Location.show(locations.Chp01_01_IntroMarketplace); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden

    // await ƒS.Location.show(location.Chp01_01_IntroMarketplace);
    // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);

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
    let FlowerMerchantDialogueElementAnswers = {
      iSayAskAboutTrip: "(Erkunden) Wie war denn die Reise ins Dorf?",
      iSayAskAboutDecorations: "(Erkunden) Warum habt ihr so wenige Blumen da?",
      iSayLeave: "Auf Wiedersehen!",
    };

    // if (dataForSave.pickedChp01_ConvoMother) {
    //   let FlowerMerchantDialogueElementAnswersItem = {
    //     iBuyFlowers: "Ich möchte ein paar Blumen kaufen!",
    //   };

    let FlowerMerchantDialogueElement = await ƒS.Menu.getInput(
      FlowerMerchantDialogueElementAnswers,
      "choicesCSSclass"
    );

    // TRY: IF ELSE FOR DIALOGUE
    // let FlowerMerchantTestDialogue = 5;
    // if (dataForSave.pickediAskAboutTrip) {
    //   let randomTextWithNewEntryMarketplace = ƒ.Random.default.getRangeFloored(
    //     1,
    //     3
    //   ); //gerundet
    //   switch (randomTextWithNewEntryMarketplace) {
    //     case 1:
    //       await ƒS.Speech.tell(
    //         characters.flowerMerchant.name,
    //         "Random dialogue 1 -----------"
    //       );
    //       break;
    //     case 2:
    //       await ƒS.Speech.tell(
    //         characters.flowerMerchant.name,
    //         "Random dialogue 2 -----------"
    //       );
    //       break;
    //     case 3:
    //       await ƒS.Speech.tell(
    //         characters.flowerMerchant.name,
    //         "Random dialogue 3 -----------"
    //       );
    //       break;
    //     default:
    //       await ƒS.Speech.tell(
    //         characters.flowerMerchant.name,
    //         "Defautl dialogue ... how did you get here"
    //       );
    //   }

    // *** RESPONSES ***
    switch (FlowerMerchantDialogueElement) {
      case FlowerMerchantDialogueElementAnswers.iSayAskAboutTrip:
        // continue path here
        (dataForSave.pickediAskAboutTrip = true),
          await ƒS.Speech.tell(
            characters.flowerMerchant,
            "Antwort auf Frage nach Reise."
          );
        // dataForSave.score.scoreEmpathyPoints += 10;
        // console.log(dataForSave.score.scoreEmpathyPoints);
        ƒS.Speech.clear();
        return Chp01_E_FlowerMerchant();
        break;

      case FlowerMerchantDialogueElementAnswers.iSayAskAboutDecorations:
        (dataForSave.pickediAskAboutDecorations = true),
          // continue path here
          // if (dataForSave.score.scoreCouragePoints === 50)
          // wie mindestens 50?
          await ƒS.Speech.tell(
            characters.flowerMerchant,
            "Answer ask about decorations"
          );
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return Chp01_E_FlowerMerchant();
        break;

      case FlowerMerchantDialogueElementAnswers.iSayLeave:
        // continue path here
        await ƒS.Speech.tell(characters.maincharacter, "Machen Sies gut.");
        ƒS.Speech.clear();
        return Chp01_01_IntroMarketplace();
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

    // *** FIRST TRY: DELETE OPTION AFTER PICKED

    // let pickediAskAboutTrip: boolean;
    // let pickediAskAboutDecorations: boolean;
    // do {
    //   if (pickediAskAboutTrip) {
    //     delete FlowerMerchantDialogueElementAnswers.iSayAskAboutTrip;
    //   } else if (pickediAskAboutDecorations) {
    //     delete FlowerMerchantDialogueElementAnswers.iSayAskAboutDecorations;
    //   }
    // } while ();

    // SECOND TRY: DELETE OPTION AFTER PICKED
    // let pickediAskAboutTrip: boolean;
    // let pickediAskAboutDecorations: boolean;
    // if (pickediAskAboutDecorations && pickediAskAboutTrip) {
    //   delete FlowerMerchantDialogueElementAnswers.iSayAskAboutDecorations;
    //   delete FlowerMerchantDialogueElementAnswers.iSayAskAboutTrip;
    // }
  }
}
