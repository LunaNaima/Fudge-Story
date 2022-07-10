namespace Spiegel_VN {
  export async function Chp04_CS_EntryForest(): ƒS.SceneReturn {
    await ƒS.Speech.tell("Ich", "Cut scene: ab in den Wald");

    // ** RANDOM TEXT ***
    let randomTextChp05EntryForest = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp05EntryForest) {
      case 1:
        await ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
        break;

      case 2:
        await ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
        break;

      case 3:
        await ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
        break;

      case 4:
        await ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
        break;

      case 5:
        await ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
        break;

      default:
        await ƒS.Speech.tell("Ich", "Default--------------------");
        break;
    }

    let Chp05PickSceneElementAnswers = {
      PickSceneGoToClearing: "Hier geht's zur Lichtung",
      PickSceneDiscoverOak: "(Erkunden) Schau mal diese alte Eiche an",
      PickSceneDiscoverRiver: "(Erkunden) Ein kleines Bächlein gibts auch",
      PickSceneContinue: "Weiter",
    };

    if (
      !dataForSave.pickedChp05GoToClearing || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
      !dataForSave.pickedChp05GiveBirdsFood ||
      !dataForSave.pickedChp05SingToBirds
    ) {
      delete Chp05PickSceneElementAnswers.PickSceneContinue;
      // return Chp01_CS_ArrivalHome();
    }

    let Chp05PickSceneElement = await ƒS.Menu.getInput(
      Chp05PickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp05PickSceneElement) {
      case Chp05PickSceneElementAnswers.PickSceneGoToClearing:
        // continue path here
        await ƒS.Speech.tell("Ich", "Zur Lichtung gehen");
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "05_01 Clearing"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp05PickSceneElementAnswers.PickSceneDiscoverOak:
        // continue path here
        // if (dataForSave.score.scoreCouragePoints === 50)
        // wie mindestens 50?
        await ƒS.Speech.tell("Ich", "(Erkunden) Eiche anschauen");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "05_E Discover oak";
        break;

      case Chp05PickSceneElementAnswers.PickSceneDiscoverRiver:
        // continue path here
        await ƒS.Speech.tell("Ich", "Bächlein anschauen.");
        ƒS.Speech.clear();
        return "05_E Discover river";
        break;

      case Chp05PickSceneElementAnswers.PickSceneContinue:
        // continue path here
        await ƒS.Speech.tell("Ich", "Weiter zur cut scene: go home.");
        ƒS.Speech.clear();
        return "05_CS Go home";
        break;
    }
  }
}
