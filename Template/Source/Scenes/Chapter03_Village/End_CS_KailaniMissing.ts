namespace Spiegel_VN {
  export async function Chp03_CS_KailaniMissing(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp03_CS_KailaniMissing);
    await ƒS.Speech.tell("Ich", "Kailani ist weg!");

    // ** RANDOM TEXT ***
    let randomTextChp04KailaniMissing = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp04KailaniMissing) {
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

    let Chp04PickSceneElementAnswers = {
      PickSceneTalkToFamily: "Zuerst muss ich mit meiner Familie reden",
      PickSceneTalkToElena: "Vielleicht sollte ich Mutti fragen ...",
      PickSceneResearchLibrary: "Zur Bücherei",
      PickSceneDiscoverGarden: "(Erkunden) Im Garten nach Kailani suchen",
      PickSceneDiscoverMirror: "(Erkunden) Den Spiegel genauer anschauen",
      PickSceneDiscoverGroundFloor: "(Erkunden) Das Erdgeschoss absuchen",
      PickSceneContinue: "Weiter",
    };

    if (
      !dataForSave.pickedChp04TalkToFamily || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
      !dataForSave.pickedChp04TalkToElena ||
      !dataForSave.pickedChp04ResearchLibrary
    ) {
      delete Chp04PickSceneElementAnswers.PickSceneContinue;
      // return Chp01_CS_ArrivalHome();
    }

    let Chp04PickSceneElement = await ƒS.Menu.getInput(
      Chp04PickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp04PickSceneElement) {
      case Chp04PickSceneElementAnswers.PickSceneTalkToFamily:
        // continue path here
        await ƒS.Speech.tell("Ich", "Wir treffen uns im Esszimmer zum reden");
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "04_01 Talk with family";
        break;

      case Chp04PickSceneElementAnswers.PickSceneTalkToElena:
        await ƒS.Speech.tell("Ich", "Ich muss zuerst mit Mutti reden");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "04_02 Talk with Elena";
        break;

      case Chp04PickSceneElementAnswers.PickSceneResearchLibrary:
        // continue path here
        await ƒS.Speech.tell(
          "Ich",
          "In der Bücherei finde ich bestimmt Infos."
        );
        ƒS.Speech.clear();
        return "04_03 Research library";
        break;

      case Chp04PickSceneElementAnswers.PickSceneDiscoverMirror:
        // continue path here
        await ƒS.Speech.tell(
          "Ich",
          "Diesen Spiegel muss ich mir genauer anschauen ..."
        );
        ƒS.Speech.clear();
        return "04_E_Examine mirror";
        break;

      case Chp04PickSceneElementAnswers.PickSceneDiscoverGroundFloor:
        // continue path here
        await ƒS.Speech.tell("Ich", "Ich suche erstmal das Erdgeschoss ab.");
        ƒS.Speech.clear();
        return "04_E Search ground floor";
        break;

      case Chp04PickSceneElementAnswers.PickSceneDiscoverGarden:
        // continue path here
        await ƒS.Speech.tell("Ich", "Ich suche mal den Garten ab.");
        ƒS.Speech.clear();
        return "04_E Search garden";
        break;

      case Chp04PickSceneElementAnswers.PickSceneContinue:
        // continue path here
        await ƒS.Speech.tell("Ich", "Ich gehe jetzt in den Wald cut scene.");
        ƒS.Speech.clear();
        return "04_CS Entry forest";
        break;
    }
  }
}
