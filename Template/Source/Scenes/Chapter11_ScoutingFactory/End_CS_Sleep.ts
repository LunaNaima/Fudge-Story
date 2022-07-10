namespace Spiegel_VN {
  export async function Chp11_CS_Sleep(): ƒS.SceneReturn {
    await ƒS.Speech.tell("Ich", "Wieder schlafen yay");

    let Chp11HowSneakInElementAnswers = {
      PickSceneSneakInBack: "Hinten rein schleichen",
      PickSceneSneakAmongSlaves: "Vorne mit Sklaven reinschleichen",
    };

    let Chp11HowSneakInElement = await ƒS.Menu.getInput(
      Chp11HowSneakInElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp11HowSneakInElement) {
      case Chp11HowSneakInElementAnswers.PickSceneSneakInBack:
        await ƒS.Speech.tell("Ich", "Lass hinten rein");
        ƒS.Speech.clear();
        return "12_011 Sneak-in"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp11HowSneakInElementAnswers.PickSceneSneakAmongSlaves:
        await ƒS.Speech.tell("Ich", "Wir mischen uns unter die Sklaven");
        ƒS.Speech.clear();
        return "12_012 Sneak-in amongst slaves"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
