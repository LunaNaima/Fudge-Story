namespace Spiegel_VN {
  export async function Chp05_01_Clearing(): ƒS.SceneReturn {
    dataForSave.pickedChp05GoToClearing = true;
    await ƒS.Speech.tell("Ich", "Diese Lichtung ist irgendwie magisch");

    let Chp05ClearingPickSceneElementAnswers = {
      PickSceneSingToBirds: "Zu Vögeln singen",
      PickSceneGiveBirdsFood: "Zu fressen geben",
      // iSayDiscoverOak: "(Erkunden) Eiche anschauen",
      // iSayDiscoverRiver: "(Erkunden) Bächlein anschauen",
      PickSceneContinue: "Weiter",
    };

    if (
      !dataForSave.pickedChp05GoToClearing || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
      !dataForSave.pickedChp05GiveBirdsFood ||
      !dataForSave.pickedChp05SingToBirds
    ) {
      delete Chp05ClearingPickSceneElementAnswers.PickSceneContinue;
      // return Chp01_CS_ArrivalHome();
    }
    let Chp05ClearingPickSceneElement = await ƒS.Menu.getInput(
      Chp05ClearingPickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp05ClearingPickSceneElement) {
      case Chp05ClearingPickSceneElementAnswers.PickSceneSingToBirds:
        // continue path here
        await ƒS.Speech.tell("Ich", "Ich singe mal zu den Vögeln");
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "05_02 Sing to birds"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp05ClearingPickSceneElementAnswers.PickSceneGiveBirdsFood:
        // continue path here
        await ƒS.Speech.tell("Ich", "Ich gebe den Vögeln mal zu fressen");
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "05_03 Feed birds"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      // case Chp05ClearingPickSceneElementAnswers.iSayDiscoverOak:
      //   // continue path here
      //   // if (dataForSave.score.scoreCouragePoints === 50)
      //   // wie mindestens 50?
      //   await ƒS.Speech.tell("Ich", "(Erkunden) Eiche anschauen");
      //   ƒS.Speech.clear();
      //   // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
      //   // ƒS.Character.hide(characters.Mama);
      //   return "05_E Discover oak";
      //   break;

      // case Chp05ClearingPickSceneElementAnswers.iSayDiscoverRiver:
      //   // continue path here
      //   await ƒS.Speech.tell("Ich", "Bächlein anschauen.");
      //   ƒS.Speech.clear();
      //   return "05_E Discover river";
      //   break;

      case Chp05ClearingPickSceneElementAnswers.PickSceneContinue:
        // continue path here
        await ƒS.Speech.tell(
          "Ich",
          "Nochmal zurück zur Ursprungsszene entry forest."
        );
        ƒS.Speech.clear();
        return "04_CS Entry forest";
        break;
    }
  }
}
