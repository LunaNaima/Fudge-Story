namespace Spiegel_VN {
  export async function Chp07_CS_LineAtGates(): ƒS.SceneReturn {
    await ƒS.Speech.tell(
      "Ich",
      "Cut scene: wir stehen an vor den Stadttoren und entdecken Flynn"
    );

    // ** RANDOM TEXT ***
    let randomTextChp08LineAtGates = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp08LineAtGates) {
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

    let Chp08PickSceneElementAnswers = {
      PickSceneCatchFlynnGates: "Flynn gleich ansprechen",
      PickSceneEnterCity: "Eintritt Stadt",
    };

    // if (
    //   !dataForSave.pickedChp07TravelToWhary // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
    // ) {
    //   delete Chp08PickSceneElementAnswers.iSayContinue;
    //   // return Chp01_CS_ArrivalHome();
    // }

    let Chp08PickSceneElement = await ƒS.Menu.getInput(
      Chp08PickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp08PickSceneElement) {
      case Chp08PickSceneElementAnswers.PickSceneCatchFlynnGates:
        // continue path here
        await ƒS.Speech.tell("Ich", "Okay, wir sprechen Flynn gleich an");
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "08_01 Meet Flynn gates"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp08PickSceneElementAnswers.PickSceneEnterCity:
        // continue path here
        // if (dataForSave.score.scoreCouragePoints === 50)
        // wie mindestens 50?
        await ƒS.Speech.tell("Ich", "Zuerst will ich in diese blöde Stadt");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "08_03 Enter City";
        break;
    }
  }
}
