namespace Spiegel_VN {
  export async function Chp13_03_EntryTower(): ƒS.SceneReturn {
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

    let Chp13EntryTowerElementAnswers = {
      PickSceneDiscoverLockedDoor: "(Erkunden) Geschlossene Tür.",
      PickSceneDiscoverFamilyPortrait: "(Erkunden) Portrait anschauen.",
      PickSceneDiscoverTowerWindow: "(Erkunden) Aus Turmfenster schauen",
      PickSceneSneakPastDemon: "An Dämon vorbeischleichen",
    };

    let Chp13EntryTowerTowerElement = await ƒS.Menu.getInput(
      Chp13EntryTowerElementAnswers,
      "choicesCSSclass"
    );

    switch (Chp13EntryTowerTowerElement) {
      case Chp13EntryTowerElementAnswers.PickSceneDiscoverLockedDoor: // hier Punktezahl nicht vergessen!
        await ƒS.Speech.tell("Ich", "Was ist das für eine Tür?");
        ƒS.Speech.clear();
        return "13_E Discover locked door"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp13EntryTowerElementAnswers.PickSceneDiscoverFamilyPortrait:
        dataForSave.pickedRightChoice = true;
        await ƒS.Speech.tell("Ich", "Das sieht ja gruselig aus ...");
        ƒS.Speech.clear();
        return "13_E Discover family portrait"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp13EntryTowerElementAnswers.PickSceneDiscoverTowerWindow: // hier Punktezahl nicht vergessen!
        await ƒS.Speech.tell("Ich", "Hier kann ich aus dem Fenster schauen");
        ƒS.Speech.clear();
        return "13_E Discover tower window"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp13EntryTowerElementAnswers.PickSceneSneakPastDemon: // hier Punktezahl nicht vergessen!
        await ƒS.Speech.tell(
          "Ich",
          "Jetzt müssen wir uns am Dämon vorbeischleichen"
        );
        ƒS.Speech.clear();
        return "10_04 Sneak past demon"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
