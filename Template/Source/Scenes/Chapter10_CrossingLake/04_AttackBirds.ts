namespace Spiegel_VN {
  export async function Chp10_04_AttackBirds(): ƒS.SceneReturn {
    await ƒS.Speech.tell("Ich", "Hilfe Vögel attackieren uns!");

    let Chp10AttackBirdsElementAnswers = {
      PickSceneSingToBirds: "Zu Vögeln singen",
      PickSceneHitWithOar: "(Erkunden) Wegschlagen",
      PickSceneUseMirror: "Spiegel als Schutzschild benutzen",
    };

    let Chp10AttackBirdsElement = await ƒS.Menu.getInput(
      Chp10AttackBirdsElementAnswers,
      "choicesCSSclass"
    );
    switch (Chp10AttackBirdsElement) {
      case Chp10AttackBirdsElementAnswers.PickSceneSingToBirds:
        // continue path here
        await ƒS.Speech.tell("Ich", "Ich versuchs mal mit singen");
        ƒS.Speech.clear();
        return "10_041 Sing to birds"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp10AttackBirdsElementAnswers.PickSceneHitWithOar:
        // continue path here
        await ƒS.Speech.tell("Ich", "Kann ich sie wegschlagen?");
        ƒS.Speech.clear();
        return "10_04 Attack birds"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp10AttackBirdsElementAnswers.PickSceneUseMirror:
        // continue path here
        await ƒS.Speech.tell("Ich", "Kann ich den Spiegel benutzen?");
        ƒS.Speech.clear();
        return "10_042 Use Mirror"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;
    }
  }
}
