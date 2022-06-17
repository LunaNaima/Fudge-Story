namespace Spiegel_VN {
  export async function Auswahlmöglichkeiten(): ƒS.SceneReturn {
    console.log("Test Szene Auswahlmöglichkeiten");
    await ƒS.Speech.tell("Luna", "Test Choices");
    // ---

    // let score = 13;

    let TestDialogueAnswers = {
      iSayGreen: "Green.",
      iSayBlue: "Blue",
      iSayEyes: "I luv eyez",
    };

    // if (score <= 10) {
    //   //   delete TestDialogueAnswers.iSayBlue;
    //   delete TestDialogueAnswers.iSayEyes;
    // }

    let pickediSayBlue: boolean;
    let pickediSayGreen: boolean;
    let pickediSayEyes: boolean;

    do {
      if (pickediSayBlue) {
        delete TestDialogueAnswers.iSayBlue;
      } else if (pickediSayGreen) {
        delete TestDialogueAnswers.iSayGreen;
      } else if (pickediSayEyes) {
        delete TestDialogueAnswers.iSayEyes;
      }

      let TestDialogue = await ƒS.Menu.getInput(
        TestDialogueAnswers,
        "choicesCSSclass"
      );

      switch (TestDialogue) {
        case TestDialogueAnswers.iSayBlue:
          // continue path here
          pickediSayBlue = true;
          dataForSave.pickedChoice = true;
          await ƒS.Speech.tell("Hannahh", "I love blue yay");
          // return "Auswahlmöglichkeiten";
          break;

        case TestDialogueAnswers.iSayGreen:
          // continue path here
          pickediSayGreen = true;
          dataForSave.pickedChoice = true;
          await ƒS.Speech.tell("Luna", "I love green yay");
          // return "Auswahlmöglichkeiten";
          break;

        case TestDialogueAnswers.iSayEyes:
          pickediSayEyes = true;
          dataForSave.pickedChoice = true;
          await ƒS.Speech.tell("Hanahhh", "YOUR COLOR EYEZ ARE MY FAVORITE");
          // return "Auswahlmöglichkeiten";
          break;
      }
    } while (dataForSave.pickedChoice);
  }
}
