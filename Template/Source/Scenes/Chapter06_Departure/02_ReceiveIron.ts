namespace Spiegel_VN {
  export async function Chp06_02_ReceiveItemMama(): ƒS.SceneReturn {
    await ƒS.Speech.tell("Ich", "Hier bekomme ich was von Mama");

    let Chp06RecieveIronElementAnswers = {
      iSayYes: "Ja",
      iSayNo: "Nein",
    };

    let Chp06RecieveIronElement = await ƒS.Menu.getInput(
      Chp06RecieveIronElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp06RecieveIronElement) {
      case Chp06RecieveIronElementAnswers.iSayYes:
        dataForSave.pickedIron = true;
        await ƒS.Speech.tell("Ich", "Ich nehme den Talisman an");
        ƒS.Speech.clear();
        return "06_03 Departure"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp06RecieveIronElementAnswers.iSayNo:
        await ƒS.Speech.tell("Ich", "Ich nehme den Talisman nicht an");
        ƒS.Speech.clear();
        return "06_03 Departure"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
