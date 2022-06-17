namespace Spiegel_VN {
  // export async function Chp09_01_BuildARaft(): ƒS.SceneReturn {
  //   let Chp09RaftElementAnswers = {
  //     iSayOk: "Okay.",
  //     iSayYes: "Ja.",
  //     iSayNo: "Nein.",
  //     iSayBla: "Bla",
  //   };

  //   // *** RESPONSES ***
  //   do {
  //     let Chp09RaftElement = await ƒS.Menu.getInput(
  //       Chp09RaftElementAnswers,
  //       "choicesCSSclass"
  //     );

  //     switch (Chp09RaftElement) {
  //       case Chp09RaftElementAnswers.iSayOk:
  //         // continue path here
  //         await ƒS.Speech.tell(
  //           characters.Mama,
  //           "Choice Ok + Empathypoints 10."
  //         );
  //         dataForSave.score.scoreEmpathyPoints += 10;
  //         console.log(dataForSave.score.scoreEmpathyPoints);
  //         ƒS.Speech.clear();
  //         //   return Chp01_02_ConvoMother(); // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
  //         break;

  //       case Chp09RaftElementAnswers.iSayYes:
  //         // continue path here
  //         // if (dataForSave.score.scoreCouragePoints === 50)
  //         // wie mindestens 50?
  //         await ƒS.Speech.tell(characters.Mama, "Choice Yes");
  //         ƒS.Speech.clear();
  //         // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
  //         // ƒS.Character.hide(characters.Mama);
  //         //   return Chp01_02_ConvoMother();
  //         break;

  //       case Chp09RaftElementAnswers.iSayNo:
  //         // continue path here
  //         await ƒS.Speech.tell(characters.Mama, "Choice No.");
  //         ƒS.Speech.clear();
  //         //   return Chp01_E_FlowerMerchant();
  //         break;

  //       case Chp09RaftElementAnswers.iSayBla:
  //         dataForSave.pickedRightChoice = true;
  //         await ƒS.Speech.tell(characters.Mama, "Choice bla.");
  //         ƒS.Speech.clear();
  //         //   return Chp01_E_LeatherMerchant();
  //         break;
  //     }
  //   } while (!dataForSave.pickedRightChoice);

  //   if (dataForSave.pickedRightChoice) {
  //     return "01_01 Intro Marketplace";
  //   }
  // }
}
