namespace Spiegel_VN {
  export async function Chp02_021_TestMirror(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp02_02_LivingRoom);

    await ƒS.Speech.tell("Ich", "Mit wem möchtest du den Spiegel testen?");
    let Chp02TestMirrorElementAnswers = {
      PickSceneTestWithElena: "Mit Mutti testen.",
      PickSceneTestWithKailani: "Mit Kailani ausprobieren.",
      PickSceneTestWithEvarius: "Mit Evarius testen.",
    };

    let Chp02TestMirrorElement = await ƒS.Menu.getInput(
      Chp02TestMirrorElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp02TestMirrorElement) {
      case Chp02TestMirrorElementAnswers.PickSceneTestWithElena:
        dataForSave.pickedChp02_TestWithElena = true;
        await ƒS.Speech.tell("Ich", "Toll ich teste den Spiegel mit Mutti!");
        ƒS.Speech.clear();
        break;

      case Chp02TestMirrorElementAnswers.PickSceneTestWithKailani:
        dataForSave.pickedChp02_TestWithKailani = true;
        await ƒS.Speech.tell("Ich", "Toll ich teste den Spiegel mit Kailani!");
        ƒS.Speech.clear();
        break;

      case Chp02TestMirrorElementAnswers.PickSceneTestWithEvarius:
        dataForSave.pickedChp02_TestWithKailani = true;
        await ƒS.Speech.tell("Ich", "Toll ich teste den Spiegel mit Evarius!");
        ƒS.Speech.clear();
        break;

      // dataForSave.pickedChp02_TestWithElena = true;
      // console.log("boolean picked Test with Elena:");
      // console.log(dataForSave.pickedChp02_TestWithElena);
      // await ƒS.Speech.tell("Ich", "Teste den Spiegel mit Mutti.");
      // return "01_CS Arrival Home";
    }
    if (dataForSave.pickedChp02_TestWithElena) {
      let Chp02TestMirrorElenaElementAnswers = {
        iSayTest1: "Test 1 Elena.",
        iSayTest2: "Test 2 Elena.",
      };

      let Chp02TestMirrorElenaElement = await ƒS.Menu.getInput(
        Chp02TestMirrorElenaElementAnswers,
        "choicesCSSclass"
      );

      // *** RESPONSES ***
      switch (Chp02TestMirrorElenaElement) {
        case Chp02TestMirrorElenaElementAnswers.iSayTest1:
          await ƒS.Speech.tell("Ich", "Test 1 mit Elena");
          ƒS.Speech.clear();
          break;

        case Chp02TestMirrorElenaElementAnswers.iSayTest2:
          await ƒS.Speech.tell("Ich", "Test 2 mit Elena");
          ƒS.Speech.clear();
          break;
      }
    }

    if (dataForSave.pickedChp02_TestWithKailani) {
      let Chp02TestMirrorKailaniElementAnswers = {
        iSayTest1: "Test 1 Kailani.",
        iSayTest2: "Test 2 Kailani.",
      };

      let Chp02TestMirrorKailaniElement = await ƒS.Menu.getInput(
        Chp02TestMirrorKailaniElementAnswers,
        "choicesCSSclass"
      );

      // *** RESPONSES ***
      switch (Chp02TestMirrorKailaniElement) {
        case Chp02TestMirrorKailaniElementAnswers.iSayTest1:
          await ƒS.Speech.tell("Ich", "Test 1 mit Kailani");
          ƒS.Speech.clear();
          break;

        case Chp02TestMirrorKailaniElementAnswers.iSayTest2:
          await ƒS.Speech.tell("Ich", "Test 2 mit Kailani");
          ƒS.Speech.clear();
          break;
      }
    }
    if (dataForSave.pickedChp02_TestWithEvarius) {
      let Chp02TestMirrorEvariusElementAnswers = {
        iSayTest1: "Test 1 Evarius.",
        iSayTest2: "Test 2 Evarius.",
      };

      let Chp02TestMirrorEvariusElement = await ƒS.Menu.getInput(
        Chp02TestMirrorEvariusElementAnswers,
        "choicesCSSclass"
      );

      // *** RESPONSES ***
      switch (Chp02TestMirrorEvariusElement) {
        case Chp02TestMirrorEvariusElementAnswers.iSayTest1:
          await ƒS.Speech.tell("Ich", "Test 1 mit Evarius");
          ƒS.Speech.clear();
          break;

        case Chp02TestMirrorEvariusElementAnswers.iSayTest2:
          await ƒS.Speech.tell("Ich", "Test 2 mit Evarius");
          ƒS.Speech.clear();
          break;
      }

      return "01_CS Arrival Home";
    }
  }
}
