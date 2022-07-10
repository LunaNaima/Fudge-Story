namespace Spiegel_VN {
  export async function Chp11_03_WatchFactory(): ƒS.SceneReturn {
    await ƒS.Speech.tell(
      "Ich",
      "Von hier aus kann man die Fabrik gut beobachten"
    );

    let Chp11WatchFactoryPickSceneElementAnswers = {
      PickSceneTryBreakIn: "Gleich einbrechen",
      PickSceneSleep: "Zuerst schlafen gehen",
    };

    let Chp11WatchFactoryPickSceneElement = await ƒS.Menu.getInput(
      Chp11WatchFactoryPickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp11WatchFactoryPickSceneElement) {
      case Chp11WatchFactoryPickSceneElementAnswers.PickSceneTryBreakIn:
        await ƒS.Speech.tell("Ich", "Lass gleich versuchen, einzubrechen!");
        ƒS.Speech.clear();
        return "11_04 Try break-in"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp11WatchFactoryPickSceneElementAnswers.PickSceneSleep:
        await ƒS.Speech.tell("Ich", "Ich will zuerst schlafen");
        ƒS.Speech.clear();
        return "11_CS Sleep"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
