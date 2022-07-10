namespace Spiegel_VN {
  export async function Chp08_01_MeetFlynnAtGates(): ƒS.SceneReturn {
    dataForSave.pickedChp08CatchFlynnAtGates = true;
    await ƒS.Speech.tell(
      "Ich",
      "Hey Flynn wir sprechen dich jetzt vor den Toren an."
    );

    let Chp08ChooseStayElementAnswers = {
      PickSceneGoWithFlynn: "Mit Flynn Bleibe suchen",
      PickSceneGoWithoutFlynn: "Ohne Flynn was suchen",
    };

    //  if (
    //   !dataForSave.pickedChp07TravelToWhary // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
    // ) {
    //   delete Chp08ChooseStayElementAnswers.iSayContinue;
    //   // return Chp01_CS_ArrivalHome();
    // }

    let Chp08ChooseStayElement = await ƒS.Menu.getInput(
      Chp08ChooseStayElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp08ChooseStayElement) {
      case Chp08ChooseStayElementAnswers.PickSceneGoWithFlynn:
        // continue path here
        await ƒS.Speech.tell(
          "Ich",
          "Super, suchen wir uns zusammen eine Bleibe"
        );
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "08_01 Meet Flynn gates"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

        case Chp08ChooseStayElementAnswers.PickSceneGoWithoutFlynn:
        // continue path here
        await ƒS.Speech.tell(
          "Ich",
          "Nee, ich möchte lieber alleine bleiben"
        );
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "08_04 Choose stay"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
