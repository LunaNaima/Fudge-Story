namespace Spiegel_VN {
  export async function Chp05_CS_GoHome(): ƒS.SceneReturn {
    await ƒS.Speech.tell("Ich", "Cut scene: es wird dunkel, ab nach Hause");

    // ** RANDOM TEXT ***
    let randomTextChp06GoHome = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp06GoHome) {
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

    let Chp06PickSceneElementAnswers = {
      PickSceneTalkToMama: "Mama, was gibt's denn?",
      PickSceneDepartureRiver: "Ich muss los ...",
    };

    let Chp06PickSceneElement = await ƒS.Menu.getInput(
      Chp06PickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp06PickSceneElement) {
      case Chp06PickSceneElementAnswers.PickSceneTalkToMama:
        // continue path here
        await ƒS.Speech.tell("Ich", "Hast du etwas für mich?");
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "06_02 Recieve iron"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp06PickSceneElementAnswers.PickSceneDepartureRiver:
        // continue path here
        // if (dataForSave.score.scoreCouragePoints === 50)
        // wie mindestens 50?
        await ƒS.Speech.tell("Ich", "Meine Reise beginnt");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "06_03 Departure";
        break;
    }
  }
}
