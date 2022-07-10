namespace Spiegel_VN {
  export async function Chp10_CS_ArrivalOtherSide(): ƒS.SceneReturn {
    await ƒS.Speech.tell(
      "Ich",
      "Cut scene: wir sind auf der anderen Seite des Sees angekommen"
    );
    // ** RANDOM TEXT ***
    let randomTextChp11ArrivalOtherSide = ƒ.Random.default.getRangeFloored(
      1,
      5
    ); //gerundet
    switch (randomTextChp11ArrivalOtherSide) {
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

    let Chp11ArrivalOtherSideElementAnswers = {
      PickSceneDiscoverTower: "(Erkunden) Turm anschauen",
      PickSceneDiscoverHuts: "(Erkunden) Hütten anschauen",
      PickSceneDiscoverForest: "(Erkunden) Wald anschauen",
      PickSceneSearchForHidingPlace: "Nach Versteck suchen",
    };

    let Chp11ArrivalOtherSideElement = await ƒS.Menu.getInput(
      Chp11ArrivalOtherSideElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp11ArrivalOtherSideElement) {
      case Chp11ArrivalOtherSideElementAnswers.PickSceneDiscoverForest:
        await ƒS.Speech.tell("Ich", "Okay lass den Wald genauer anschauen");
        ƒS.Speech.clear();
        return "11_E Discover forest"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp11ArrivalOtherSideElementAnswers.PickSceneDiscoverHuts:
        await ƒS.Speech.tell("Ich", "Hütten anschauen");
        ƒS.Speech.clear();
        return "11_E Discover huts"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp11ArrivalOtherSideElementAnswers.PickSceneDiscoverTower:
        await ƒS.Speech.tell("Ich", "Turm anschauen");
        ƒS.Speech.clear();
        return "11_E Discover tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp11ArrivalOtherSideElementAnswers.PickSceneSearchForHidingPlace:
        await ƒS.Speech.tell("Ich", "Erstmal nach einem Schlafplatz suchen");
        ƒS.Speech.clear();
        return "11_01 Search for hiding place"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
