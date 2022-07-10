namespace Spiegel_VN {
  export async function Chp09_011_Beggar(): ƒS.SceneReturn {
    await ƒS.Speech.tell("Ich", "Hier kommt die Bettlerin");

    let Chp09BeggarSceneElementAnswers = {
      PickSceneSpeakToBeggar: "Mit Bettlerin sprechen",
      PickSceneIgnoreBeggar: "Bettlerin ignorieren",
    };

    let Chp09BeggarSceneElement = await ƒS.Menu.getInput(
      Chp09BeggarSceneElementAnswers,
      "choicesCSSclass"
    );
    switch (Chp09BeggarSceneElement) {
      case Chp09BeggarSceneElementAnswers.PickSceneSpeakToBeggar:
        await ƒS.Speech.tell("Ich", "Okay, erzähl mir was du weißt, Bettlerin");
        ƒS.Speech.clear();
        return "08_CS Sleep & new day";
        break;

      case Chp09BeggarSceneElementAnswers.PickSceneIgnoreBeggar:
        await ƒS.Speech.tell(
          "Ich",
          "Neee ich will nicht mit dir reden Bettlerin"
        );
        // dataForSave.score.scoreEmpathyPoints += 10;
        ƒS.Speech.clear();
        return "09_012 Make a wish";
        break;
    }
  }
}
