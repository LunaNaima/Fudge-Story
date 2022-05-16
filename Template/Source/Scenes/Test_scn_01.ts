namespace Spiegel_VN {
  export async function ScnTestzene01(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp01_01_IntroMarketplace);
    await ƒS.update();

    // ƒS.Inventory.add(inventory.apple);
    // await ƒS.Inventory.open;
    //hier wird eine asynch funktion exportiert, wie heißt die funktion? in diesem fall name funktion = name von szene
    console.log(characters.maincharacter.name); // console = konsole, log = befehl, der sagt, was ausgegeben wird (was in der klammer). was ausgegeben werden soll: heir wird ausgegeben, was ich rein schreibe, zum debuggen udn verstehen, was mein programm tut, wie ein wegweiser. Am ende der Sache kann ich den Namen der jeweiligen Szene eingeben, is nur für mich & für Prof
    await ƒS.Speech.tell("Bab", "Hallo, ich bin Bab."); //fs = ich greife auf die library zu, was jmdn anders schon für die library programmiert hat.
    await ƒS.Speech.tell("Xenoi", "Hallo, ich bin Xeni.");

    await ƒS.Speech.tell(
      characters.maincharacter.name,
      "Hallo, ich bin Dein Name."
    );

    let firstDialogueElementAnswers = {
      iSayOk: "Okay.",
      iSayYes: "Ja.",
      iSayNo: "Nein.",
    };

    let firstDialogueElement = await ƒS.Menu.getInput(
      firstDialogueElementAnswers,
      "choicesCSSclass"
    );

    switch (firstDialogueElement) {
      case firstDialogueElementAnswers.iSayOk:
        // continue path here
        await ƒS.Speech.tell(characters.Mama, "Hi");
        ƒS.Speech.clear();
        break;
      case firstDialogueElementAnswers.iSayYes:
        // continue path here
        await ƒS.Speech.tell(characters.Mama, "HiToYes");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        break;
      case firstDialogueElementAnswers.iSayNo:
        // continue path here
        await ƒS.Speech.tell(characters.Mama, "Hi");
        ƒS.Speech.clear();
        break;
    }

    return ScnTestzene02();
  }
}
