namespace Spiegel_VN {
  export async function Chp01_02_ConvoMother(): ƒS.SceneReturn {
    console.log(dlg_scn_02);

    await ƒS.Location.show(locations.black);
    await ƒS.update(2);
    await ƒS.Location.show(locations.Chp01_02_ConvoMother);

    await ƒS.update(2, transitions.fade.alpha, transitions.fade.edge);

    // let y = ƒ.Random.default.getRangeFloored(1, 3); //FUDGE EINGEBAUTER RANDOMIZER
    // console.log(y);

    // let r = func_RPGRandomNumberRange(1, 3);
    // switch (r) {
    //     case 1:
    //         for (let diaSequence of Object.values(dlg_scn_E_Marketplace.descr_1)) {
    //             await ƒS.Speech.tell(rpgCharacters.text, diaSequence);
    //         }
    //         break;
    //     case 2:
    //         for (let diaSequence of Object.values(rpgDiaCamp.description02)) {
    //             await ƒS.Speech.tell(rpgCharacters.text, diaSequence);
    //         }
    //         break;
    //     case 3:
    //         for (let diaSequence of Object.values(rpgDiaCamp.description03)) {
    //             await ƒS.Speech.tell(rpgCharacters.text, diaSequence);
    //         }
    //         break;
    //     default:
    //         await ƒS.Speech.tell(rpgCharacters.text, "Somehow, you wound up in the default option. Curious.");
    //         break;
    // }
    
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

    if (dataForSave.score.scoreEmpathyPoints === 10) {
      let secondDialogueElementAnswers = {
        iSayOk: "Freigeschaltete Option 10 EmpathyPoints.",
      };

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

          return Chp01_02_ConvoMother();
          break;
        // case secondDialogueElementAnswers.iSayYes:
        //   // continue path here
        //   if (dataForSave.score.scoreCouragePoints === 50)
        //     // wie mindestens 50?
        //     await ƒS.Speech.tell(characters.Mama, "Choice Yes");
        //   ƒS.Speech.clear();
        //   // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        //   // ƒS.Character.hide(characters.Mama);
        //   return Chp01_02_ConvoMother();
        //   break;
        // case secondDialogueElementAnswers.iSayNo:
        //   // continue path here
        //   await ƒS.Speech.tell(characters.Mama, "Choice No");
        //   ƒS.Speech.clear();
        //   return Chp01_02_ConvoMother();
        //   break;
      }

      return Chp01_02_ConvoMother();
    }
  }
}
