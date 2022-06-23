namespace Spiegel_VN {
  export async function Chp01_02_ConvoMother(): ƒS.SceneReturn {
    dataForSave.pickedChp01_ConvoMother = true;
    // await ƒS.Location.show(locations.black);
    // await ƒS.update(2);
    await ƒS.Location.show(locations.Chp01_02_ConvoMother);

    // await ƒS.update(2, transitions.fade.alpha, transitions.fade.edge);

    // *** BEGIN DIALOGUE ***
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

    if (dataForSave.scoreEmpathyPoints < 20) {
      delete Chp01ConvoMotherElementAnswers.iSayEmpathyPoints;
    }
    console.log(dataForSave.scoreEmpathyPoints);

    //*** CSS-CLASS */
    let Chp01ConvoMotherElement = await ƒS.Menu.getInput(
      Chp01ConvoMotherElementAnswers,
      "choicesCSSclass"
    );

    //*** RESPONSES */
    switch (Chp01ConvoMotherElement) {
      case Chp01ConvoMotherElementAnswers.iSayOk:
        console.log(dataForSave.scoreEmpathyPoints);
        // pickedChp01ConvoMotherOk = true;
        // continue path here
        await ƒS.Speech.tell(characters.Mama, "Choice Okay.");
        ƒS.Speech.clear();

        return Chp01_01_IntroMarketplace();
        break;
      case Chp01ConvoMotherElementAnswers.iSayYes:
        //   // continue path here
        //   if (dataForSave.score.scoreCouragePoints === 50)
        //     // wie mindestens 50?
        //     await ƒS.Speech.tell(characters.Mama, "Choice Yes");
        //   ƒS.Speech.clear();
        //   // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        //   // ƒS.Character.hide(characters.Mama);
        return Chp01_01_IntroMarketplace();
        break;
      case Chp01ConvoMotherElementAnswers.iSayEmpathyPoints:
        dataForSave.scoreEmpathyPoints += 10;
        console.log(dataForSave.scoreEmpathyPoints);
        await ƒS.Speech.tell(characters.Mama, "Hier kriegen wir 10 Empathiepunkte");
        ƒS.Speech.clear();
        return Chp01_02_ConvoMother();
        break;
    }

    return Chp01_01_IntroMarketplace();
  }
}
