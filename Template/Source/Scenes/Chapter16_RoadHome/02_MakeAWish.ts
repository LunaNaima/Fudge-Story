namespace Spiegel_VN {
  export async function Chp16_02_MakeAWish(): ƒS.SceneReturn {
    await ƒS.Speech.tell(
      "Ich",
      "Hier müssen wir den Kobold rufen, um heimzureisen, weil alle Spiegel jetzt kaputt sind"
    );

    let Chp16PickSceneElementAnswers = {
      PickSceneGoHomeAlone: "Heimreise",
      PickSceneGoHomeWithFlynn: "Flynn mitnehmen",
    };
    if (
      // !dataForSave.score.scoreEmpathyPoints >= 80 ||
      !dataForSave.pickedChp08TrustFlynn
    ) {
      delete Chp16PickSceneElementAnswers.PickSceneGoHomeWithFlynn;
    }
    let Chp16PickSceneElement = await ƒS.Menu.getInput(
      Chp16PickSceneElementAnswers,
      "choicesCSSclass"
    );
    switch (Chp16PickSceneElement) {
      case Chp16PickSceneElementAnswers.PickSceneGoHomeAlone:
        // continue path here
        await ƒS.Speech.tell("Ich", "So auf gehts nach Hause");
        ƒS.Speech.clear();
        return "16_021 Go home alone"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp16PickSceneElementAnswers.PickSceneGoHomeWithFlynn:
        // continue path here
        await ƒS.Speech.tell("Ich", "So auf gehts nach Hause mit Flynn");
        ƒS.Speech.clear();
        return "16_022 Go home with Flynn"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
