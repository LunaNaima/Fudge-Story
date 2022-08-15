namespace Spiegel_VN {
  export async function Chp03_021_ChoresWithKailani(): ƒS.SceneReturn {
    dataForSave.pickedChp03_ChoresWithKailani = true;
    await ƒS.Speech.tell("Ich", "Kailani und ich gehen Hausarbeiten machen.");

    let Chp02ChoresKailaniElementAnswers = {
      PickSceneWaterwell: "Wasser holen gehen.",
      PickSceneWoodChopping: "Holz hacken.",
    };

    let Chp02ChoresKailaniElement = await ƒS.Menu.getInput(
      Chp02ChoresKailaniElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp02ChoresKailaniElement) {
      case Chp02ChoresKailaniElementAnswers.PickSceneWaterwell:
        await ƒS.Location.show(locations.Chp03_022_WaterwellKailani);
        dataForSave.pickedChp03_WaterwellKailani = true;
        await ƒS.Speech.tell("Ich", "Okay wir gehen Wasser holen!");
        ƒS.Speech.clear();
        break;

      case Chp02ChoresKailaniElementAnswers.PickSceneWoodChopping:
        await ƒS.Location.show(locations.Chp03_021_FirewoodKailani);
        dataForSave.pickedChp03_WoodChoppingKailani = true;
        await ƒS.Speech.tell("Ich", "Kailani und ich gehen Holz hacken!");
        ƒS.Speech.clear();
        break;

      // dataForSave.pickedChp02_TestWithElena = true;
      // console.log("boolean picked Test with Elena:");
      // console.log(dataForSave.pickedChp02_TestWithElena);
      // await ƒS.Speech.tell("Ich", "Teste den Spiegel mit Mutti.");
      // return "01_CS Arrival Home";
    }
    if (dataForSave.pickedChp03_WaterwellKailani) {
      let Chp02ChoresKailaniWaterElementAnswers = {
        iSayTest1: "Test 1 Wasser holen.",
        iSayTest2: "Test 2 Wasser holen.",
      };

      let Chp02ChoresKailaniWaterElement = await ƒS.Menu.getInput(
        Chp02ChoresKailaniWaterElementAnswers,
        "choicesCSSclass"
      );

      // *** RESPONSES ***
      switch (Chp02ChoresKailaniWaterElement) {
        case Chp02ChoresKailaniWaterElementAnswers.iSayTest1:
          await ƒS.Speech.tell("Ich", "Test 1 Wasser holen");
          ƒS.Speech.clear();
          break;

        case Chp02ChoresKailaniWaterElementAnswers.iSayTest2:
          await ƒS.Speech.tell("Ich", "Test 2 Wasser holen");
          ƒS.Speech.clear();
          break;
      }
    }

    if (dataForSave.pickedChp03_WoodChoppingKailani) {
      let Chp02TestMirrorKailaniElementAnswers = {
        iSayTest1: "Test 1 Holz hacken.",
        iSayTest2: "Test 2 Holz hacken.",
      };

      let Chp02TestMirrorKailaniElement = await ƒS.Menu.getInput(
        Chp02TestMirrorKailaniElementAnswers,
        "choicesCSSclass"
      );

      // *** RESPONSES ***
      switch (Chp02TestMirrorKailaniElement) {
        case Chp02TestMirrorKailaniElementAnswers.iSayTest1:
          await ƒS.Speech.tell("Ich", "Test 1 Holz hacken");
          ƒS.Speech.clear();
          break;

        case Chp02TestMirrorKailaniElementAnswers.iSayTest2:
          await ƒS.Speech.tell("Ich", "Test 2 Holz hacken");
          ƒS.Speech.clear();
          break;
      }
    }
  }
}
