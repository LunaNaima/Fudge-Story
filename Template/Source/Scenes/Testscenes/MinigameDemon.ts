namespace Spiegel_VN {
  export async function MinigameDemon(): ƒS.SceneReturn {
    //*** DIALOGRUNDE 1 */
    // let loopend = 0;

    // while (loopend == 0) {
      let MinigameDemonLoop1ElementAnswers = {
        iSayRhyme1: "Reim 1.",
        iSayRyhme2: "Reim 2",
        iSayRhyme3: "Reim 3",
      };

      let MinigameDemonLoop1Element = await ƒS.Menu.getInput(
        MinigameDemonLoop1ElementAnswers,
        "choicesCSSclass"
      );

      switch (MinigameDemonLoop1Element) {
        case MinigameDemonLoop1ElementAnswers.iSayRhyme1:
          await ƒS.Speech.tell("Ich", "Reim 1, angry expression");
          ƒS.Character.show(
            characters.Demon,
            characters.Demon.pose.angry,
            ƒS.positionPercent(70, 100)
          );
          // return
          break;
      }

      //*** SCHLEIFE 2 */
      // how await?
      // await ƒS.Speech.tell("Narrator", "Soweit, so gut!");
      let MinigameDemonLoop2ElementAnswers = {
        iSayRhyme4: "Reim 4",
        iSayRyhme5: "Reim 5",
        iSayRhyme6: "Reim 6",
      };

      let MinigameDemonLoop2Element = await ƒS.Menu.getInput(
        MinigameDemonLoop2ElementAnswers,
        "choicesCSSclass"
      );

      switch (MinigameDemonLoop2Element) {
        case MinigameDemonLoop2ElementAnswers.iSayRhyme4:
          await ƒS.Speech.tell("Ich", "Reim 4, angry expression");
          ƒS.Character.show(
            characters.Demon,
            characters.Demon.pose.angry,
            ƒS.positionPercent(70, 100)
          );
          await ƒS.Speech.clear();
          return Chp01_02_ConvoMother();
          break;
      // }
    }
  }
}
