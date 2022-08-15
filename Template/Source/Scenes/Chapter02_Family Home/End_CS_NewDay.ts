namespace Spiegel_VN {
  export async function Chp02_CS_NewDay(): ƒS.SceneReturn {
    await ƒS.update(
      transitions.fade.duration,
      transitions.fade.alpha,
      transitions.fade.edge //edge ist der Härtegrad
    );
    await ƒS.Speech.tell("Ich", "Guten Morgen!");

    // ** RANDOM TEXT ***
    let randomTextChp03NewDay = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp03NewDay) {
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

    let Chp03PickSceneElementAnswers = {
      PickSceneDressmaker: "Jacke abholen",
      PickSceneChoresWithKailani: "Mit Kailani Hausarbeit machen",
      PickSceneDiscoverDonkey: "(Erkunden) Glücksesel streicheln",
      PickSceneDiscoverForest: "(Erkunden) Im Wald rumgucken",
      PickSceneDiscoverLibrary: "(Erkunden) Die Bücherei erkunden",
      PickSceneContinue: "Weiter",
    };

    if (
      !dataForSave.pickedChp03_Dressmaker || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
      !dataForSave.pickedChp03_ChoresWithKailani
    ) {
      delete Chp03PickSceneElementAnswers.PickSceneContinue;
      // return Chp01_CS_ArrivalHome();
    }

    let Chp03PickSceneElement = await ƒS.Menu.getInput(
      Chp03PickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp03PickSceneElement) {
      case Chp03PickSceneElementAnswers.PickSceneDressmaker:
        // continue path here
        await ƒS.Speech.tell("Ich", "Auf zur Schneiderin!");
        // dataForSave.score.scoreEmpathyPoints += 10;
        console.log(dataForSave.scoreEmpathyPoints);
        ƒS.Speech.clear();
        return "03_01 Dressmaker"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp03PickSceneElementAnswers.PickSceneChoresWithKailani:
        await ƒS.Speech.tell("Ich", "Gehen wir Holz hacken");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "03_021 Chores with Kailani";
        break;

      case Chp03PickSceneElementAnswers.PickSceneDiscoverDonkey:
        await ƒS.Speech.tell("Ich", "Süß, ein Esel!.");
        ƒS.Speech.clear();
        return "03_E Discover donkey";
        break;

      case Chp03PickSceneElementAnswers.PickSceneDiscoverForest:
        // continue path here
        await ƒS.Speech.tell("Ich", "Gehen wir den Wald anschauen.");
        ƒS.Speech.clear();
        return "03_E Discover Forest";
        break;

      case Chp03PickSceneElementAnswers.PickSceneDiscoverLibrary:
        // continue path here
        await ƒS.Speech.tell("Ich", "Ich liebe Bücher <3.");
        ƒS.Speech.clear();
        return "03_E Discover Library";
        break;

      case Chp03PickSceneElementAnswers.PickSceneContinue:
        // continue path here
        await ƒS.Speech.tell(
          "Ich",
          "Weiter zur cut scene turmoil marketplace."
        );
        ƒS.Speech.clear();
        return "03_CS Turmoil marketplace";
        break;
    }
  }
}
