namespace Spiegel_VN {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    // let text = {
    //   Narrator: {
    //     T0001: "", //Text Nr. 1
    //     T0002: "",
    //   },
    //   Protagonistin: {
    //     T0000: "Was geht",
    //     T0001: "Funktioniert das?",
    //     T0002: "Ich hoffe doch!",
    //   },
    // };

    // ƒS.Sound.play(sound.click, 1); //bei volume: zwischen 0-1, bisschen mehr als 1 ist schon zu laut. Loopen geht auch, loop = true (dann loopts sichs)
    // ƒS.Sound.fade(sound.click, 1, 2); // 1 ist das max, also bis hier hin wird der sound steigen. 2 = duration. true bezieht sich auf loop. sound wird einmal gefadet, bleibt dann konstant laut

    // await ƒS.Location.show(locations.nighttime_sil); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
    // await ƒS.update(
    //   transition.puzzle.duration,
    //   transition.puzzle.alpha,
    //   transition.puzzle.edge //edge ist der Härtegrad
    // );

    // await ƒS.Character.show(
    //   characters.Mama,
    //   characters.Mama.pose.angry, // pose muss in der main sein
    //   ƒS.positions.bottomcenter //bei positions: gibts die normalen angaben (topleft ..) bei positionpercentage: gebe ich koordinaten an in pixel 70 in x und 100 in y
    //   // ƒS.positionPercent(70,100)
    // ); //char anzeigen lassen. immer im hover schauen, was ich angeben muss!

    // ƒS.Character.hideAll(); //hier muss man nichts angeben. danach machts sinn, nen fade rein zu tun, damit die char ausgefadet werden
    // // ƒS.Character.hide(characters.Mama)

    // await ƒS.Speech.tell(characters.Mama, text.Protagonistin.T0001); //class für Speech, wait for signal oder await heißt: wir warten auf Nutzerinteraktion,
    // //ist optional. wenn text automatisch weitergehen soll: mit true oder false angeben
    // ƒS.Speech.clear(); // hier wird text aus dem feld gelöscht
    // await ƒS.update(3); // dann kommt text 3 sek später
    // await ƒS.Speech.tell(characters.Mama, text.Protagonistin.T0002);
    // await ƒS.Speech.tell(characters.Mama, "Neuer Text.");

    // ƒS.Speech.hide(); // das textfeld wird ausgeblendet
    // await ƒS.update();

    // ƒS.Sound.fade(sound.click, 1, 2); //hier ausfaden

    // let firstDialogueElementAnswers = {
    //   //fightbetweenMamaundMutti  normalerweise sinnvolle namen verwendet, damit ich weiß, was für welche entscheidung steht
    //   iSayOk: "Okay.",
    //   iSayYes: "Ja.",
    //   iSayNo: "Nein.", // mit ich-perspektive vom spieler ausgehen. diese antwortmöglichkeiten stehen der spielerin zur verfügung, ich nehm "isay" damit ich weiß, dass spielerin spricht
    // };

    // let firstDialogueElement = await ƒS.Menu.getInput(
    //   firstDialogueElementAnswers,
    //   "individualCSSclass"
    // ); // wir weisen input element zu. await bedeutet: wir warten, bis nutzer interagiert

    // switch (
    //   firstDialogueElement // zu welchem case soll es hinswitchen, je nach getroffener option
    // ) {
    //   case firstDialogueElementAnswers.iSayOk:
    //     // continue path here
    //     await ƒS.Speech.tell(characters.Mama, "Hi");
    //     ƒS.Speech.clear(); // das gesprochene oder auch char hier clearen
    //     break;
    //   case firstDialogueElementAnswers.iSayYes:
    //     // continue here
    //     await ƒS.Character.show(
    //       characters.Mama,
    //       characters.Mama.pose.angry,
    //       ƒS.positions.bottomcenter
    //     );
    //     break;
    //   case firstDialogueElementAnswers.iSayNo:
    //     await ƒS.Character.show(
    //       characters.Mutti,
    //       characters.Mutti.pose.angry,
    //       ƒS.positionPercent(70, 100)
    //     );
    // }
  }
}
