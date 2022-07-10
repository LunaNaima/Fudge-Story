namespace Spiegel_VN {
  export async function Chp13_04_SneakPastDemon(): ƒS.SceneReturn {
    // !Idee 1: Mit Reimen bzw Gesang Dämon ablenken (je nach Gesichtsausdruck von ihm kann Spielerin abschätzen, ob sie wirken oder nicht)
    // Idee 2: geradeaus/zurück/rechts/links navigieren, dämon ändert random seine position und spielerin muss dementsprechend reagieren. vll nen counter einbauen, nachdem er abgelaufen is, reset und von vorne?
    await ƒS.Speech.tell("Ich", "Wir schleichen uns am Dämon vorbei!");

    // *** MINIGAME ***
    

    if (!dataForSave.pickedIron) {
      return "14.2_01 Realization mirror";
    } else {
      return "14.1_01 Destroy mirror";
    }
  }
}
