namespace Spiegel_VN {
  export async function Chp08_CS_Sleep(): ƒS.SceneReturn {
    await ƒS.Speech.tell("Ich", "Cut scene: aufwachen und nach Kailani suchen");

    // ** RANDOM TEXT ***
    let randomTextChp09NewDay = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp09NewDay) {
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

    let Chp09PickSceneElementAnswers = {
      PickSceneResearchMarketplace: "Auf Marktplatz informieren",
      PickSceneSpeakToInnkeeper: "Mit der Inhaberin sprechen",
      PickSceneSpeakToCook: "Mit Koch sprechen",
      PickSceneSpeakToStablehand: "Mit Stallmädchen sprechen",
      PickSceneContinue: "Weiter",
    };

    if (
      !dataForSave.pickedChp09ResearchMarketplace || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
      !dataForSave.pickedChp09TalkToCook ||
      !dataForSave.pickedChp09TalkToInnkeeper ||
      !dataForSave.pickedChp09TalkToStablehand
    ) {
      delete Chp09PickSceneElementAnswers.PickSceneContinue;
      // return Chp01_CS_ArrivalHome();
    }

    let Chp09PickSceneElement = await ƒS.Menu.getInput(
      Chp09PickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp09PickSceneElement) {
      case Chp09PickSceneElementAnswers.PickSceneResearchMarketplace:
        // continue path here
        await ƒS.Speech.tell("Ich", "Zum Markplatz dann");
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "09_01 Research Marketplace"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp09PickSceneElementAnswers.PickSceneSpeakToCook:
        await ƒS.Speech.tell("Ich", "Ab in die Küche");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "09_03 TalkToCook";
        break;

      case Chp09PickSceneElementAnswers.PickSceneSpeakToInnkeeper:
        await ƒS.Speech.tell("Ich", "Wo ist die Inhaberin?");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "09_02 TalkToInnkeeper";
        break;

      case Chp09PickSceneElementAnswers.PickSceneSpeakToStablehand:
        await ƒS.Speech.tell("Ich", "Ich will zu den Pferden");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "09_04 Talk to stablehand";
        break;
    }
  }
}
