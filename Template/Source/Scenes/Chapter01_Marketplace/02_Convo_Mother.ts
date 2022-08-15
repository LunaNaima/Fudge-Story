namespace Spiegel_VN {
  export async function Chp01_02_ConvoMother(): ƒS.SceneReturn {
    dataForSave.pickedChp01_ConvoMother = true;
    // await ƒS.Location.show(locations.black);
    // await ƒS.update(2);
    await ƒS.Location.show(locations.Chp01_02_ConvoMother);

    await ƒS.Character.show(
      characters.Kailani,
      characters.Kailani.pose.angry, // pose muss in der main sein
      ƒS.positions.bottomcenter //bei positions: gibts die normalen angaben (topleft ..) bei positionpercentage: gebe ich koordinaten an in pixel 70 in x und 100 in y
      // ƒS.positionPercent(70, 100)
    );

    // await ƒS.update(2, transitions.fade.alpha, transitions.fade.edge);

    // *** BEGIN DIALOGUE ***
    await ƒS.Speech.tell(
      characters.maincharacter.name,
      dlg_scn_02.maincharacter.T0000
    );
    await ƒS.Speech.tell(characters.Mama.name, dlg_scn_02.Mama.T0000);

    //*** OPTIONS *//
    let chp01ConvoMotherElementAnswers = {
      iSayOk: "Okay.",
      iSayYes: "Ja.",
      iSayEmpathyPoints: "10"
    };

    if (dataForSave.scoreEmpathyPoints < 20) {
      delete chp01ConvoMotherElementAnswers.iSayEmpathyPoints;
    }
    console.log(dataForSave.scoreEmpathyPoints);

    //*** CSS-CLASS */
    let chp01ConvoMotherElement = await ƒS.Menu.getInput(
      chp01ConvoMotherElementAnswers,
      "choicesCSSclass"
    );

    //*** RESPONSES */
    switch (chp01ConvoMotherElement) {
      case chp01ConvoMotherElementAnswers.iSayOk:
        console.log(dataForSave.scoreEmpathyPoints);
        await ƒS.Speech.tell(characters.maincharacter.name, "Choice Okay.");
        ƒS.Speech.clear();
        return "01_01 Intro Marketplace";
        break;

      case chp01ConvoMotherElementAnswers.iSayYes:
        await ƒS.Speech.tell(characters.Mama, "Choice Yes");
        ƒS.Speech.clear();
        //   // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        //   // ƒS.Character.hide(characters.Mama);
        return "01_01 Intro Marketplace";
        break;

      case chp01ConvoMotherElementAnswers.iSayEmpathyPoints:
        dataForSave.scoreEmpathyPoints += 10;
        console.log(dataForSave.scoreEmpathyPoints);
        await ƒS.Speech.tell(
          characters.Mama,
          "Hier kriegen wir 10 Empathiepunkte"
        );
        ƒS.Speech.clear();
        return "01_01 Intro Marketplace";
        break;
    }
  }
}
