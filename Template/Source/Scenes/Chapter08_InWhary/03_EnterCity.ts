namespace Spiegel_VN {
  export async function Chp08_03_EnterCity(): ƒS.SceneReturn {
    dataForSave.pickedChp08EnterCity = true;
    await ƒS.Speech.tell(
      "Ich",
      "Wir gehen in die Stadt juchu hoffentlich gibts Drachen"
    );

    let randomTextChp08EnterCity = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp08EnterCity) {
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

    let Chp08_1PickSceneElementAnswers = {
      PickSceneCatchFlynnInAlley: "Flynn in Gasse ansprechen",
      PickSceneDiscoverHay: "(Erkunden) Heuballen anschauen)",
      PickSceneDiscoverWindow: "(Erkunden) Schaufenster anschauen)",
      PickSceneDiscoverSpeakToVillagers: "(Erkunden) Passanten ansprechen",
      PickSceneChooseStay: "Bleibe suchen",
    };

    if (
      !dataForSave.pickedChp08CatchFlynnInAlley
      // !dataForSave.// ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
    ) {
      delete Chp08_1PickSceneElementAnswers.PickSceneChooseStay;
      // return Chp01_CS_ArrivalHome();
    }

    let Chp08_1PickSceneElement = await ƒS.Menu.getInput(
      Chp08_1PickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp08_1PickSceneElement) {
      case Chp08_1PickSceneElementAnswers.PickSceneCatchFlynnInAlley:
        // continue path here
        await ƒS.Speech.tell("Ich", "Okay, wir sprechen Flynn in der Gasse an");
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "08_02 Meet Flynn in alley"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp08_1PickSceneElementAnswers.PickSceneDiscoverHay:
        // continue path here
        // if (dataForSave.score.scoreCouragePoints === 50)
        // wie mindestens 50?
        await ƒS.Speech.tell("Ich", "Oke wir schauen jetzt Heu an");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "08_E Discover Hay";
        break;

        case Chp08_1PickSceneElementAnswers.PickSceneDiscoverWindow:
        // continue path here
        // if (dataForSave.score.scoreCouragePoints === 50)
        // wie mindestens 50?
        await ƒS.Speech.tell("Ich", "Lass das Schaufenster angucken brudi");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "08_E Discover windows";
        break;

        case Chp08_1PickSceneElementAnswers.PickSceneDiscoverSpeakToVillagers:
        // continue path here
        // if (dataForSave.score.scoreCouragePoints === 50)
        // wie mindestens 50?
        await ƒS.Speech.tell("Ich", "Ich will mit diesen Leuten sprechen");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "08_E Discover Villagers";
        break;

        case Chp08_1PickSceneElementAnswers.PickSceneChooseStay:
          // continue path here
          // if (dataForSave.score.scoreCouragePoints === 50)
          // wie mindestens 50?
          await ƒS.Speech.tell("Ich", "Wir suchen jetzt einen Schlafplatz");
          ƒS.Speech.clear();
          // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
          // ƒS.Character.hide(characters.Mama);
          return "08_04 Choose stay";
          break;
    }
  }
}
