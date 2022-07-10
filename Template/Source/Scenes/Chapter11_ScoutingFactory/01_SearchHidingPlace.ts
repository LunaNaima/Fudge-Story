namespace Spiegel_VN {
  export async function Chp11_01_SearchHidingPlace(): ƒS.SceneReturn {
    await ƒS.Speech.tell("Ich", "Suchen wir mal nach einem Versteck");

    let Chp11HidingPlacePickSceneElementAnswers = {
      PickSceneDiscoverIron: "Wald erkunden",
      PickSceneSearchSleepingPlace: "Nach Schlafplatz suchen",
    };

    if (
      !dataForSave.pickedIron // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
    ) {
      delete Chp11HidingPlacePickSceneElementAnswers.PickSceneDiscoverIron;
      // return Chp01_CS_ArrivalHome();
    }

    let Chp11HidingPlacePickSceneElement = await ƒS.Menu.getInput(
      Chp11HidingPlacePickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp11HidingPlacePickSceneElement) {
      case Chp11HidingPlacePickSceneElementAnswers.PickSceneDiscoverIron:
        await ƒS.Speech.tell("Ich", "Da hinten glitzert was im Wald ...");
        ƒS.Speech.clear();
        return "11_02 Find iron"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp11HidingPlacePickSceneElementAnswers.PickSceneSearchSleepingPlace:
        await ƒS.Speech.tell("Ich", "Wo können wir uns niederlassen?");
        ƒS.Speech.clear();
        return "11_03 Watch factory"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
