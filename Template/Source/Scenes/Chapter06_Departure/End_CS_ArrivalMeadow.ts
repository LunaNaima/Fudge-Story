namespace Spiegel_VN {
  export async function Chp06_CS_ArrivalMeadow(): ƒS.SceneReturn {
    await ƒS.Speech.tell("Ich", "Cut scene: wir sind auf der Wiese angekommen");

    // ** RANDOM TEXT ***
    let randomTextChp07ArrivalMeadow = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp07ArrivalMeadow) {
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

    let Chp07PickSceneElementAnswers = {
      PickSceneTravelToWhary: "Richtung Stadt gehen",
      PickSceneDiscoverBees: "(Erkunden) Bienen anschauen",
      PickSceneDiscoverFlowers: "(Erkunden) Blumen anschauen",
      PickSceneContinue: "Weiter",
    };

    if (
      !dataForSave.pickedChp07TravelToWhary // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
    ) {
      delete Chp07PickSceneElementAnswers.PickSceneContinue;
      // return Chp01_CS_ArrivalHome();
    }

    let Chp07PickSceneElement = await ƒS.Menu.getInput(
      Chp07PickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp07PickSceneElement) {
      case Chp07PickSceneElementAnswers.PickSceneTravelToWhary:
        // continue path here
        await ƒS.Speech.tell("Ich", "Lez go to da citayyy");
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "07_01 Travel to to Whary"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp07PickSceneElementAnswers.PickSceneDiscoverBees:
        // continue path here
        // if (dataForSave.score.scoreCouragePoints === 50)
        // wie mindestens 50?
        await ƒS.Speech.tell("Ich", "Die Bienen sind so hübsch!");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "07_E Discover bees";
        break;

      case Chp07PickSceneElementAnswers.PickSceneDiscoverFlowers:
        // continue path here
        await ƒS.Speech.tell("Ich", "Die Blumen sind so farbig ...");
        ƒS.Speech.clear();
        return "07_E Discover flowers";
        break;

      case Chp07PickSceneElementAnswers.PickSceneContinue:
        // continue path here
        await ƒS.Speech.tell(
          "Ich",
          "Weiter zur cut scene: Line at city gates."
        );
        ƒS.Speech.clear();
        return "07_CS Line at gates";
        break;
    }
  }
}
