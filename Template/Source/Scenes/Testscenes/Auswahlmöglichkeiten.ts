namespace Spiegel_VN {
  export async function Auswahlmöglichkeiten(): ƒS.SceneReturn {
    console.log("Test Szene Auswahlmöglichkeiten");
    await ƒS.Speech.tell("Luna", "Test Choices");
    // ---

    let score = 13;

    let TestDialogueAnswers = {
      iSayGreen: "Green.",
      iSayBlue: "Blue",
      iSayEyes: "I luv eyez",
    };

    if (score <= 10) {
      //   delete TestDialogueAnswers.iSayBlue;
      delete TestDialogueAnswers.iSayEyes;
    }

    let TestDialogue = await ƒS.Menu.getInput(
      TestDialogueAnswers,
      "choicesCSSclass"
    );

    switch (TestDialogue) {
      case TestDialogueAnswers.iSayBlue:
        // continue path here
        await ƒS.Speech.tell("Hannahh", "I love blue yay");
        break;

      case TestDialogueAnswers.iSayGreen:
        // continue path here
        await ƒS.Speech.tell("Luna", "I love green yay");
        break;

      case TestDialogueAnswers.iSayEyes:
        await ƒS.Speech.tell("Hanahhh", "YOUR COLOR EYEZ ARE MY FAVORITE");
        break;
    }
  }
}
