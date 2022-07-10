namespace Spiegel_VN {
  export async function Chp08_04_ChooseStay(): ƒS.SceneReturn {
    await ƒS.Speech.tell("Ich", "Auf gehts zur Suche nach der Bleibe");

    let Chp08ChooseWhichStayElementAnswers = {
      PickSceneChooseUglyStay: "Mit Flynn Bleibe suchen",
      PickSceneContinueSearch: "Ohne Flynn was suchen",
      PickSceneChooseNiceStay: "Hübsche Bleibe auswählen",
    };

    if (
      !dataForSave.pickedChp08ChooseContinueSearch // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
    ) {
      delete Chp08ChooseWhichStayElementAnswers.PickSceneChooseNiceStay;
      // return Chp01_CS_ArrivalHome();
    }

    let Chp08ChooseWhichStayElement = await ƒS.Menu.getInput(
      Chp08ChooseWhichStayElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp08ChooseWhichStayElement) {
      case Chp08ChooseWhichStayElementAnswers.PickSceneChooseUglyStay:
        // continue path here
        await ƒS.Speech.tell(
          "Ich",
          "Ich nehme gleich das hässliche Gasthaus, ist bestimmt billig"
        );
        ƒS.Speech.clear();
        if ((dataForSave.pickedChp08GoWithFlynn = true)) {
          return "08_0421 Ugly stay with Flynn";
        } else if ((dataForSave.pickedChp08GoWithoutFlynn = true)) {
          return "08_042 Choose ugly stay";
        }
        // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp08ChooseWhichStayElementAnswers.PickSceneContinueSearch:
        dataForSave.pickedChp08ChooseContinueSearch = true;
        // continue path here
        await ƒS.Speech.tell("Ich", "Ich möchte noch weitersuchen");
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "08_04 Choose stay";
        break;

      case Chp08ChooseWhichStayElementAnswers.PickSceneChooseNiceStay:
        // continue path here
        await ƒS.Speech.tell("Ich", "Nehmen wir das hässliche Gasthaus");
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        if ((dataForSave.pickedChp08GoWithFlynn = true)) {
          return "08_0411 Nice stay with Flynn";
        } else if ((dataForSave.pickedChp08GoWithoutFlynn = true)) {
          return "08_041 Choose nice stay";
        }
        break;
    }
  }
}
