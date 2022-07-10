namespace Spiegel_VN {
  export async function Chp12_02_EnterFactory(): ƒS.SceneReturn {
    // ** RANDOM TEXT ***
    let randomTextChp12EnterFactory = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp12EnterFactory) {
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

    let Chp12FactoryPickSceneElementAnswers = {
      PickSceneDiscoverTalkToSlaves: "(Erkunden) Mit Sklaven reden",
      PickSceneDiscoverSearchKailani: "(Erkunden) Kailani suchen",
      PickSceneDiscoverListenToGuards: "(Erkunden) Wachen überhören",
      PickSceneDiscoverProductionSite: "Spiegelräume anschauen",
      PickSceneBack: "Zurück zum Versteck",
    };

    let Chp12FactoryPickSceneElement = await ƒS.Menu.getInput(
      Chp12FactoryPickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp12FactoryPickSceneElement) {
      case Chp12FactoryPickSceneElementAnswers.PickSceneDiscoverTalkToSlaves:
        await ƒS.Speech.tell("Ich", "Ich rede mal mit den Leuten hier");
        ƒS.Speech.clear();
        return "12_031 Talk to slaves"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp12FactoryPickSceneElementAnswers.PickSceneDiscoverSearchKailani:
        await ƒS.Speech.tell("Ich", "Kailani suchen!");
        ƒS.Speech.clear();
        return "12_032 Search for Kailani"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp12FactoryPickSceneElementAnswers.PickSceneDiscoverListenToGuards:
        await ƒS.Speech.tell("Ich", "Ich will die Wachen überhören");
        ƒS.Speech.clear();
        return "12_033 Listen to guards"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp12FactoryPickSceneElementAnswers.PickSceneDiscoverProductionSite:
        await ƒS.Speech.tell("Ich", "Die Spiegelräume genauer anschauen");
        ƒS.Speech.clear();
        return "12_E Discover production site"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp12FactoryPickSceneElementAnswers.PickSceneBack:
        await ƒS.Speech.tell("Ich", "Zurück zum Versteck");
        ƒS.Speech.clear();
        return "12_04 Back to hiding place"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
