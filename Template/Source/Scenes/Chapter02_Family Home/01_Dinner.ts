namespace Spiegel_VN {
  export async function Chp02_01_Dinner(): ƒS.SceneReturn {
      (dataForSave.pickedChp02_DinnerScene = true),
        await ƒS.Location.show(locations.Chp01_01_IntroMarketplace); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
  
      // await ƒS.Location.show(location.Chp01_01_IntroMarketplace);
      // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);
  
      await ƒS.update(
        transitions.fade.duration,
        transitions.fade.alpha,
        transitions.fade.edge //edge ist der Härtegrad
      );
  
      // ***BEGINN DIALOG ***
    // *** EITHER/OR OPTION ***


    // if (pickedYes || pickedBla || pickedNo || pickedOk || pickedYes) {
    //  delete firstDialogueElementAnswers.iSayYes;
    // }
  }
}
