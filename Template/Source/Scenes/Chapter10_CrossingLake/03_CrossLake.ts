namespace Spiegel_VN {
  export async function Chp10_03_CrossLake(): ƒS.SceneReturn {
    await ƒS.Speech.tell("Ich", "Wir überqueren den See");

    let Chp10CrossingLakeElementAnswers = {
      PickSceneDiscoverCitylights: "Die Stadtlichter ...",
      PickSceneDiscoverLakewater: "Wasser anschauen",
      PickSceneLookAhead: "Nach vorne schauen",
    };

    let Chp10CrossingLakeElement = await ƒS.Menu.getInput(
      Chp10CrossingLakeElementAnswers,
      "choicesCSSclass"
    );
    switch (Chp10CrossingLakeElement) {
      case Chp10CrossingLakeElementAnswers.PickSceneDiscoverCitylights:
        // continue path here
        await ƒS.Speech.tell(
          "Ich",
          "Von hier sieht es gar nicht so schlimm aus"
        );
        ƒS.Speech.clear();
        return "10_03 Cross lake"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp10CrossingLakeElementAnswers.PickSceneDiscoverLakewater:
        // continue path here
        await ƒS.Speech.tell("Ich", "Lass mal das Wasser anschauen");
        ƒS.Speech.clear();
        return "10_03 Cross lake"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp10CrossingLakeElementAnswers.PickSceneLookAhead:
        // continue path here
        await ƒS.Speech.tell(
          "Ich",
          "Du wendest den Kopf nach vorne und schaust in die Dunkelheit"
        );
        ƒS.Speech.clear();
        return "10_04 Attack birds"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
