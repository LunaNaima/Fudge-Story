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
      iSayDiscoverListenToVillagers: "(Erkunden) Mit Bewohner sprechen",
      iSayDiscoverMerchants: "(Erkunden) Mit den Händlern sprechen",
      iSayDiscoverSpeakToVillagers: "(Erkunden) Mit Koch sprechen",
    };

    if (
      dataForSave.pickedChp09DiscoverListenToVillagers && // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
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
      case Chp09DiscoverMarketplaceElementAnswers.iSayDiscoverListenToVillagers:
        dataForSave.pickedChp09DiscoverListenToVillagers = true;
        await ƒS.Speech.tell("Ich", "Ich mische mich unter die Leute");
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "09_01 Research Marketplace"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp09DiscoverMarketplaceElementAnswers.iSayDiscoverMerchants:
        dataForSave.pickedChp09DiscoverMerchants = true;
        await ƒS.Speech.tell("Ich", "Ich spreche mit den Händlern");
        ƒS.Speech.clear();
        return "09_01 Research Marketplace"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp09DiscoverMarketplaceElementAnswers.iSayDiscoverSpeakToVillagers:
        dataForSave.pickedChp09DiscoverSpeakToVillagers = true;
        await ƒS.Speech.tell("Ich", "Ich spreche mit den Leuten");
        ƒS.Speech.clear();
        return "09_01 Research Marketplace"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
