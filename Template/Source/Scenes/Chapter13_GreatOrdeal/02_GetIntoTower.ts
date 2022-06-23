namespace Spiegel_VN {
  export async function Chp13_02_GetIntoTower(): ƒS.SceneReturn {
    // ***BEGINN SZENE***

    let randomTextChp13GetIntoTower = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp13GetIntoTower) {
      case 1:
        await ƒS.Speech.tell(
          characters.Mama.name,
          "Random dialogue 1 -----------"
        );
        break;

      case 2:
        await ƒS.Speech.tell(
          characters.Mama.name,
          "Random dialogue 2 -----------"
        );
        break;

      case 3:
        await ƒS.Speech.tell(
          characters.Mama.name,
          "Random dialogue 3 -----------"
        );
        break;

      case 4:
        await ƒS.Speech.tell(
          characters.Mama.name,
          "Random dialogue 4 -----------"
        );
        break;

      case 5:
        await ƒS.Speech.tell(
          characters.Mama.name,
          "Random dialogue 5 -----------"
        );
        break;

      default:
        await ƒS.Speech.tell(
          characters.Mama.name,
          "Default--------------------"
        );
        break;
    }

    // *** SCENE OPTIONS ***
    let Chp13GetIntoTowerElementAnswers = {
      iSayCharmGuards: "Wächter mit Charm überzeugen.",
      iSayPersuadeGuards: "Wächter überzeugen.",
      iSayConfrontGuards: "Wächter überlisten",
    };

    // if (
    //   !dataForSave.score.scoreEmpathyPoints 50){ // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und) {
    //   delete Chp13GetIntoTowerElementAnswers.iSayCharmGuards;
    //   // return Chp01_CS_ArrivalHome();
    // }
    do {
      let Chp13GetIntoTowerElement = await ƒS.Menu.getInput(
        Chp13GetIntoTowerElementAnswers,
        "choicesCSSclass"
      );

      switch (Chp13GetIntoTowerElement) {
        case Chp13GetIntoTowerElementAnswers.iSayCharmGuards: // hier Punktezahl nicht vergessen!
          await ƒS.Speech.tell(
            "Ich",
            "Wie kann ich die Wachen charmant überzeugen?"
          );
          ƒS.Speech.clear();
          return "13_02 Get into tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
          break;

        case Chp13GetIntoTowerElementAnswers.iSayPersuadeGuards: // hier Punktezahl nicht vergessen!
          dataForSave.pickedRightChoice = true;
          await ƒS.Speech.tell("Ich", "Ich will die Wachen überreden!");
          ƒS.Speech.clear();
          // return "13_03 Entry tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
          break;

        case Chp13GetIntoTowerElementAnswers.iSayConfrontGuards: // hier Punktezahl nicht vergessen!
          await ƒS.Speech.tell("Ich", "Die Wachen konfrontieren");
          ƒS.Speech.clear();
          return "13_02 Get into tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
          break;
      }
    } while (!dataForSave.pickedRightChoice);

    if (dataForSave.pickedRightChoice) {
      return "13_03 Entry tower";
    }
  }
}
