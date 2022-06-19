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
      iSayTalkToMama: "Rede mit Mama.",
      iSayTalkToMirrorMerchant: "Mit Spiegelhändler unterhalten.",
      iSayExploreFlowerMerchant:
        "(Erkunden) Was gibt es Neues beim Blumenhändler?",
      iSayExploreLeatherMerchant:
        "(Erkunden) Was gibt es Neues beim Lederhändler?",
      iSayContinue: "Weiter",
    };

    let Chp13GetIntoTowerElement = await ƒS.Menu.getInput(
      Chp13GetIntoTowerElementAnswers,
      "choicesCSSclass"
    );

    switch (Chp13GetIntoTowerElement) {
      case Chp13GetIntoTowerElementAnswers.iSayTalkToMama: // hier Punktezahl nicht vergessen!
        // continue path here
        pickediSayTalkToMama = true;
        dataForSave.pickedChoice = true;
        await ƒS.Speech.tell(
          characters.Mama,
          "Choice TalkToMama + Empathypoints 10."
        );
        dataForSave.score.scoreEmpathyPoints += 10;
        console.log(dataForSave.score.scoreEmpathyPoints);
        ƒS.Speech.clear();
        return Chp01_02_ConvoMother(); // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
  