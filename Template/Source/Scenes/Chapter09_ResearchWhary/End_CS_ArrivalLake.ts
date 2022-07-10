namespace Spiegel_VN {
  export async function Chp09_CS_ArrivalLake(): ƒS.SceneReturn {
    await ƒS.Speech.tell("Ich", "Cut scene: wir sind am See angekommen");
    // ** RANDOM TEXT ***
    let Chp10ArrivalLakeElementAnswers = {
      PickSceneDiscoverLake: "(Erkunden) Seeufer anschauen",
      PickSceneBuildARaft: "Floß bauen",
    };

    let Chp10ArrivalLakeElement = await ƒS.Menu.getInput(
      Chp10ArrivalLakeElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp10ArrivalLakeElement) {
      case Chp10ArrivalLakeElementAnswers.PickSceneDiscoverLake:
        dataForSave.pickedChp09DiscoverListenToVillagers = true;
        await ƒS.Speech.tell("Ich", "Okay lass das Seeufer genauer anschauen");
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "10_E Discover lake"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp10ArrivalLakeElementAnswers.PickSceneBuildARaft:
        dataForSave.pickedChp09DiscoverMerchants = true;
        await ƒS.Speech.tell("Ich", "Naja wir brauchen ein Floß!");
        ƒS.Speech.clear();
        return "10_01 Build a raft"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
