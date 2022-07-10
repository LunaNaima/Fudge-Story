namespace Spiegel_VN {
  export async function Chp13_01_EntryVillage(): ƒS.SceneReturn {
    let randomTextChp13VillageFactory = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp13VillageFactory) {
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

    let Chp13VillagePickSceneElementAnswers = {
      PickSceneDiscoverWatchGuard: "(Erkunden) Wachen beobachten",
      PickSceneDiscoverSneakAround: "(Erkunden) Herumschleichen",
      PickSceneGoToTower: "Auf zum Turm",
    };

    let Chp13VillagePickSceneElement = await ƒS.Menu.getInput(
      Chp13VillagePickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp13VillagePickSceneElement) {
      case Chp13VillagePickSceneElementAnswers.PickSceneDiscoverWatchGuard:
        await ƒS.Speech.tell("Ich", "Ich will die Wachen beobachten");
        ƒS.Speech.clear();
        return "13_E Discover watch guard"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp13VillagePickSceneElementAnswers.PickSceneDiscoverSneakAround:
        await ƒS.Speech.tell("Ich", "Lass bisschen rumschleichen");
        ƒS.Speech.clear();
        return "13_E Sneak around tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp13VillagePickSceneElementAnswers.PickSceneGoToTower:
        await ƒS.Speech.tell("Ich", "Wir müssen zum Turm!");
        ƒS.Speech.clear();
        return "13_02 Get into tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
