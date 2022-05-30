namespace Spiegel_VN {
  export async function Chp01_01_IntroMarketplace(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp01_01_IntroMarketplace); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden

    // await ƒS.Location.show(location.Chp01_01_IntroMarketplace);
    // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);

    await ƒS.update(
      transitions.fade.duration,
      transitions.fade.alpha,
      transitions.fade.edge //edge ist der Härtegrad
    );

    ƒS.Sound.fade(Music.backgroundTheme_default, 0.8, 0.1, true);

    // ***TEST-INVENTORY***
    // ƒS.Inventory.add(inventory.apple);
    // await ƒS.Inventory.open;
    //hier wird eine asynch funktion exportiert, wie heißt die funktion? in diesem fall name funktion = name von szene

    // ***TEST-DIALOGE***
    // console.log(characters.monologue.name); // console = konsole, log = befehl, der sagt, was ausgegeben wird (was in der klammer). was ausgegeben werden soll: heir wird ausgegeben, was ich rein schreibe, zum debuggen udn verstehen, was mein programm tut, wie ein wegweiser. Am ende der Sache kann ich den Namen der jeweiligen Szene eingeben, is nur für mich & für Prof
    // await ƒS.Speech.tell("Bab", "Hallo, ich bin Bab."); //fs = ich greife auf die library zu, was jmdn anders schon für die library programmiert hat.
    // await ƒS.Speech.tell("Xenoi", "Hallo, ich bin Xeni.");

    // await ƒS.Speech.tell(
    //   characters.maincharacter.name,
    //   "Hallo, ich bin Dein Name."
    // );

    // ***BEGINN SZENE***
    await ƒS.Speech.tell(
      characters.maincharacter.name,
      dlg_scn_01.maincharacter.T0000
    );
    await ƒS.Speech.tell(characters.Mama.name, dlg_scn_01.Mama.T0000);

    // await ƒS.update(
    //   transition.puzzle.duration,
    //   transition.puzzle.alpha,
    //   transition.puzzle.edge //edge ist der Härtegrad
    // );

    // await ƒS.Character.show(
    //   characters.Mama,
    //   characters.Mama.pose.angry, // pose muss in der main sein
    //   ƒS.positions.bottomcenter //bei positions: gibts die normalen angaben (topleft ..) bei positionpercentage: gebe ich koordinaten an in pixel 70 in x und 100 in y
    //   // ƒS.positionPercent(70,100)
    // );

    let firstDialogueElementAnswers = {
      iSayOk: "Okay.",
      iSayYes: "Ja.",
      iSayNo: "Nein.",
    };

    let firstDialogueElement = await ƒS.Menu.getInput(
      firstDialogueElementAnswers,
      "choicesCSSclass"
    );

    switch (firstDialogueElement) {
      case firstDialogueElementAnswers.iSayOk:
        // continue path here
        await ƒS.Speech.tell(
          characters.Mama,
          "Choice Okay + Empathypoints 10."
        );
        dataForSave.score.scoreEmpathyPoints += 10;
        console.log(dataForSave.score.scoreEmpathyPoints);
        ƒS.Speech.clear();

        return Chp01_02_ConvoMother();
        break;
      case firstDialogueElementAnswers.iSayYes:
        // continue path here
        if (dataForSave.score.scoreCouragePoints === 50)
          // wie mindestens 50?
          await ƒS.Speech.tell(characters.Mama, "Choice Yes");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return Chp01_02_ConvoMother();
        break;
      case firstDialogueElementAnswers.iSayNo:
        // continue path here
        await ƒS.Speech.tell(characters.Mama, "Choice No");
        ƒS.Speech.clear();
        return Chp01_02_ConvoMother();
        break;
    }

    
    return Chp01_02_ConvoMother();
  }
}
