namespace Spiegel_VN {
  export async function Auswahlmöglichkeiten(): ƒS.SceneReturn {
    console.log("Test Szene Auswahlmöglichkeiten");
    await ƒS.Speech.tell("Luna", "Test Choices");
    // ---

    // let score = 13;

    let testDialogueAnswers = {
      iSayGreen: "Green.",
      iSayBlue: "Blue",
      iSayEyes: "I luv eyez"
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
        delete testDialogueAnswers.iSayBlue;
      }
      if (pickediSayGreen) {
        delete testDialogueAnswers.iSayGreen;
      }
      if (pickediSayEyes) {
        delete testDialogueAnswers.iSayEyes;
      }

      let testDialogue = await ƒS.Menu.getInput(
        testDialogueAnswers,
        "choicesCSSclass"
      );

      switch (testDialogue) {
        case testDialogueAnswers.iSayBlue:
          // continue path here
          pickediSayBlue = true;
          dataForSave.pickedChoice = true;
          await ƒS.Speech.tell("Hannahh", "I love blue yay");
          // return "Auswahlmöglichkeiten";
          break;

        case testDialogueAnswers.iSayGreen:
          // continue path here
          pickediSayGreen = true;
          dataForSave.pickedChoice = true;
          await ƒS.Speech.tell("Luna", "I love green yay");
          // return "Auswahlmöglichkeiten";
          break;

        case testDialogueAnswers.iSayEyes:
          pickediSayEyes = true;
          dataForSave.pickedChoice = true;
          await ƒS.Speech.tell("Hanahhh", "YOUR COLOR EYEZ ARE MY FAVORITE");
          // return "Auswahlmöglichkeiten";
          break;

          await ƒS.Speech.tell("", "");
      }
    } while (dataForSave.pickedChoice);
  }
}
