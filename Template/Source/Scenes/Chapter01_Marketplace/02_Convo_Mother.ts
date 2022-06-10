namespace Spiegel_VN {
  export async function Chp01_02_ConvoMother(): ƒS.SceneReturn {
    console.log(dlg_scn_02);

    // VAR
    dataForSave.pickedChp01_ConvoMother = true;
    await ƒS.Location.show(locations.black);
    await ƒS.update(2);
    await ƒS.Location.show(locations.Chp01_02_ConvoMother);

    await ƒS.update(2, transitions.fade.alpha, transitions.fade.edge);

    // *** BEGIN DIALOGUE ***
    await ƒS.Speech.tell(
      characters.maincharacter.name,
      dlg_scn_02.maincharacter.T0000
    );
    await ƒS.Speech.tell(characters.Mama.name, dlg_scn_02.Mama.T0000);

    //*** OPTIONS *//
    let secondDialogueElementAnswers = {
      iSayOk: "Okay.",
      iSayYes: "Ja.",
    };
    await ƒS.Speech.tell("Hannahhhh", "Choices sind set");

    if (dataForSave.score.scoreEmpathyPoints === 10) {
      //   let secondDialogueElementAnswers = {
      //     iSayOk: "Freigeschaltete Option 10 EmpathyPoints.",
    }

    //*** CSS-CLASS */
    let secondDialogueElement = await ƒS.Menu.getInput(
      secondDialogueElementAnswers,
      "choicesCSSclass"
    );

    //*** RESPONSES */
    switch (secondDialogueElement) {
      case secondDialogueElementAnswers.iSayOk:
        // continue path here
        await ƒS.Speech.tell(characters.Mama, "Choice Okay.");
        dataForSave.score.scoreEmpathyPoints += 10;
        console.log(dataForSave.score.scoreEmpathyPoints);
        ƒS.Speech.clear();

        return Chp01_01_IntroMarketplace();
        break;
      case secondDialogueElementAnswers.iSayYes:
        //   // continue path here
        //   if (dataForSave.score.scoreCouragePoints === 50)
        //     // wie mindestens 50?
        //     await ƒS.Speech.tell(characters.Mama, "Choice Yes");
        //   ƒS.Speech.clear();
        //   // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        //   // ƒS.Character.hide(characters.Mama);
        return Chp01_01_IntroMarketplace();
        break;
      // case secondDialogueElementAnswers.iSayNo:
      //   // continue path here
      //   await ƒS.Speech.tell(characters.Mama, "Choice No");
      //   ƒS.Speech.clear();
      //   return Chp01_02_ConvoMother();
      //   break;
    }

    return Chp01_01_IntroMarketplace();
  }
}
