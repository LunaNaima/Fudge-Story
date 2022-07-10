namespace Spiegel_VN {
  export async function Chp09_01_ResearchMarketplace(): ƒS.SceneReturn {
    dataForSave.pickedChp09ResearchMarketplace = true;
    console.log("Boolean of research marketplace");
    console.log(dataForSave.pickedChp09ResearchMarketplace);
    await ƒS.Speech.tell(
      "Ich",
      "Soo auf dem Markplatz ist ganz schön viel los"
    );

    let Chp09DiscoverMarketplaceElementAnswers = {
      PickSceneDiscoverListenToVillagers: "(Erkunden) Bewohnern zuhören",
      PickSceneMerchants: "Mit den Händlern sprechen",
      PickSceneSpeakToVillagers: "Mit Bewohnern sprechen",
    };

    if (
      dataForSave.pickedChp09DiscoverMerchants &&
      dataForSave.pickedChp09DiscoverSpeakToVillagers
    ) {
      return "09_011 Beggar";
    }

    let Chp09DiscoverMarketplaceElement = await ƒS.Menu.getInput(
      Chp09DiscoverMarketplaceElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp09DiscoverMarketplaceElement) {
      case Chp09DiscoverMarketplaceElementAnswers.PickSceneDiscoverListenToVillagers:
        dataForSave.pickedChp09DiscoverListenToVillagers = true;
        await ƒS.Speech.tell("Ich", "Ich mische mich unter die Leute");
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "09_E Listen to villagers"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp09DiscoverMarketplaceElementAnswers.PickSceneMerchants:
        dataForSave.pickedChp09DiscoverMerchants = true;
        await ƒS.Speech.tell("Ich", "Ich spreche mit den Händlern");
        ƒS.Speech.clear();
        return "09_13 Talk to merchants"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp09DiscoverMarketplaceElementAnswers.PickSceneSpeakToVillagers:
        dataForSave.pickedChp09DiscoverSpeakToVillagers = true;
        await ƒS.Speech.tell("Ich", "Ich spreche mit den Leuten");
        ƒS.Speech.clear();
        return "09_14 Speak to villagers"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
