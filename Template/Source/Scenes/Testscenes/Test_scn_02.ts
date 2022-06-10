namespace Spiegel_VN {
  export async function ScnTestzene02(): ƒS.SceneReturn {
    console.log("Status: ", scoreMutti.introduced);

    //hier wird eine asynch funktion exportiert, wie heißt die funktion? in diesem fall name funktion = name von szene
    console.log("Punktestand Mutti: ", scoreMutti.punkte); // console = konsole, log = befehl, der sagt, was ausgegeben wird (was in der klammer). was ausgegeben werden soll: heir wird ausgegeben, was ich rein schreibe, zum debuggen udn verstehen, was mein programm tut, wie ein wegweiser
    await ƒS.Speech.tell("Bab", "Neue szene bklqsjhdui."); //fs = ich greife auf die library zu, was jmdn anders (jirka) schon für die library programmiert hat.
    if (scoreMutti.introduced == true) {
      // mit == fragen wir, ob etwas true ist. = heißt, wir weisen einen Wert etw zu.
      await ƒS.Speech.tell(characters.Mutti.name, "Mich kennt ihr ja schon.");
      scoreMutti.punkte = scoreMutti.punkte + 1;
    }
    if (scoreMutti.introduced == false) {
      await ƒS.Speech.tell(characters.Mutti.name, "Hallo, ich bin Elena.");
      scoreMutti.introduced = true;
    }

    if (scoreMutti.punkte >= 6) {
      await ƒS.Speech.tell(characters.Mutti.name, "Möchtest du etwas tee?");

      let decisionButtons01 = {
        // !hier! wird decisionsbuttons01 definiert, wegen let // decisionsbuttons ist ein Objekt
        decisionYes: "Yes",
        decisionNo: "No",
      };

      let decision = await ƒS.Menu.getInput(
        decisionButtons01,
        "decisionButtons" // hier umbennen und mit css bearbeiten
      );

      switch (
        decision //switch case = besseres if. statt ich 32809x if schreib, fragt switch: was is das ding? dieser input = yes or no. switch kann alles abfragen. muss schauen, was wann nützlich ist
      ) {
        case decisionButtons01.decisionYes:
          await ƒS.Speech.tell(
            characters.Mutti.name,
            "Hier bitte, eine schöne Tasse Tee. Frisch gekocht."
          );
          break;
        case decisionButtons01.decisionNo:
          await ƒS.Speech.tell(
            characters.Mutti.name,
            "Nein? Dann hattest du wohl schon Tee. Freut mich zu hören! Viel spaß bei denen Freunden."
          );
          return ScnTestzene01();
          break;
        default:
          await ƒS.Speech.tell(
            characters.Mutti.name,
            "Default wird verwendet, wenn keiner der Fälle im Switch case zutrifft.."
          );
          break;
      }
    }

    return ScnTestzene02();
  }
}
