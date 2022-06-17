namespace Spiegel_VN {
  export async function Chp02_01_Dinner(): ƒS.SceneReturn {
    dataForSave.pickedChp02_DinnerScene = true;
    await ƒS.Location.show(locations.Chp02_01_Dinner); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden

    // await ƒS.Location.show(location.Chp01_01_IntroMarketplace);
    // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);

    await ƒS.update(
      transitions.fade.duration,
      transitions.fade.alpha,
      transitions.fade.edge //edge ist der Härtegrad
    );

    await ƒS.Speech.tell("Ich", "Abendessen mh der Auflauf ist toll.");
    // // *** SCENE OPTIONS ***
    // let Chp02PickSceneElementAnswers = {
    //   iSayTryMirrorElena: "Spiegel mit Mutti ausprobieren.",
    //   iSayTryMirrorKailani: "Spiegel mit Kailani ausprobieren.",
    //   iSayPickHerbs: "Kräuter pflücken",
    //   iSayDiscoverBedroom: "(Erkunden) Mein Schlafzimmer anschauen",
    //   iSayDiscoverKitchen: "(Erkunden) Küche anschauen",
    //   iSayContinue: "Weiter",
    // };

    // if (
    //   !dataForSave.pickedChp02_DinnerScene || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
    //   !dataForSave.pickedChp02_PickHerbsGarden ||
    //   !dataForSave.pickedChp02_TestWithElena ||
    //   !dataForSave.pickedChp02_FightNeighbor
    // ) {
    //   delete Chp02PickSceneElementAnswers.iSayContinue;
    //   // return Chp01_CS_ArrivalHome();
    // }

    // let Chp02PickSceneElement = await ƒS.Menu.getInput(
    //   Chp02PickSceneElementAnswers,
    //   "choicesCSSclass"
    // );

    // // *** RESPONSES ***
    // switch (Chp02PickSceneElement) {
    //   case Chp02PickSceneElementAnswers.iSayPickHerbs:
    //     // continue path here
    //     await ƒS.Speech.tell("Ich", "Ab in den Garten Kräuter pflücken.");
    //     dataForSave.score.scoreEmpathyPoints += 10;
    //     console.log(dataForSave.score.scoreEmpathyPoints);
    //     ƒS.Speech.clear();
    //     return "02_03 Pick Herbs"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
    //     break;

    //   case Chp02PickSceneElementAnswers.iSayTryMirrorElena:
    //     // continue path here
    //     await ƒS.Speech.tell("Ich", "Mit Mutti Spiegel ausprobieren.");
    //     ƒS.Speech.clear();
    //     return Chp02_021_TestWithElena();
    //     break;

    //   case Chp02PickSceneElementAnswers.iSayTryMirrorKailani:
    //     // continue path here
    //     await ƒS.Speech.tell("Ich", "Spiegel mit Kailani ausprobieren.");
    //     ƒS.Speech.clear();
    //     return Chp02_022_TestWithKailani();
    //     break;

    //   case Chp02PickSceneElementAnswers.iSayDiscoverBedroom:
    //     // continue path here
    //     await ƒS.Speech.tell("Ich", "Schlafzimmer anschauen yay sleep.");
    //     ƒS.Speech.clear();
    //     return Chp02_E_DiscoverBedroom();
    //     break;

    //   case Chp02PickSceneElementAnswers.iSayDiscoverKitchen:
    //     // continue path here
    //     await ƒS.Speech.tell("Ich", "Ich hab' Hunger auf geht's.");
    //     ƒS.Speech.clear();
    //     return Chp02_E_DiscoverKitchen();
    //     break;

    //   case Chp02PickSceneElementAnswers.iSayContinue:
    //     // continue path here
    //     // if (dataForSave.score.scoreCouragePoints === 50)
    //     // wie mindestens 50?
    //     await ƒS.Speech.tell("Ich", "Es geht weiter");
    //     ƒS.Speech.clear();
    //     // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
    //     // ƒS.Character.hide(characters.Mama);
    //     return "02_CS Sleep";
    //     break;
    // }
    return "01_CS Arrival Home";
    // ***BEGINN DIALOG ***
    // *** EITHER/OR OPTION ***

    // if (pickedYes || pickedBla || pickedNo || pickedOk || pickedYes) {
    //  delete firstDialogueElementAnswers.iSayYes;
    // }
  }
}
