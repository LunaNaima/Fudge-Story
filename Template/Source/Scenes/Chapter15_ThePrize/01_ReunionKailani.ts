namespace Spiegel_VN {
  export async function Chp15_01_ReunionKailani(): ƒS.SceneReturn {
    // hier muss dialog und char rein: weil kailani hier auf dem Platz vor dem Turm ist. also, frohes wiedersehen, dann kommen 2 optionen
    let Chp15ReunionKailaniPickSceneElementAnswers = {
      PickSceneSpeakFreedVillagers: "(Erkunden) Mit befreiten Leuten sprechen",
      PickSceneGoToLake: "Zurück zum See",
    };

    let Chp15ReunionKailaniPickSceneElement = await ƒS.Menu.getInput(
      Chp15ReunionKailaniPickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp15ReunionKailaniPickSceneElement) {
      case Chp15ReunionKailaniPickSceneElementAnswers.PickSceneSpeakFreedVillagers:
        // continue path here
        await ƒS.Speech.tell(
          "Ich",
          "Hey Leute, erzählt mal von euren Erfahrungen"
        );
        ƒS.Speech.clear();
        return "15_E Talk to freed villagers"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp15ReunionKailaniPickSceneElementAnswers.PickSceneGoToLake:
        // continue path here
        await ƒS.Speech.tell("Ich", "Okay, wir wollen endlich heim");
        ƒS.Speech.clear();
        return "15_CS Go to lake"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
