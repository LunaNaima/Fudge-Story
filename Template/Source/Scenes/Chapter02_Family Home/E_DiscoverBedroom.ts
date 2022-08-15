namespace Spiegel_VN {
  export async function Chp02_E_DiscoverBedroom(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp02_E_DiscoverBedroom); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden

    // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);

    // await ƒS.update(
    //   transitions.fade.duration,
    //   transitions.fade.alpha,
    //   transitions.fade.edge //edge ist der Härtegrad
    // );
    await ƒS.Speech.tell(
      "Ich",
      "My eigenes Reich. Wenigstens hier habe ich ein bisschen Privatsphäre..."
    );

    let Chp02DiscoverBedroomElementAnswers = {
      iSayDiscoverDesk: "(Erkunden) Was liegt da auf dem Tisch?",
      iSayDiscoverBooks: "(Erkunden) Bücher anschauen",
      iSayLeave: "Zurück",
    };

    let Chp02DiscoverBedroomElementElement = await ƒS.Menu.getInput(
      Chp02DiscoverBedroomElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp02DiscoverBedroomElementElement) {
      case Chp02DiscoverBedroomElementAnswers.iSayDiscoverDesk:
        // pickediSayAskAboutTrip = true;
        // dataForSave.pickedChoice = true;
        await ƒS.Speech.tell(
          "Ich",
          "Yay schauen wir uns den Tisch an, was gibts hier so."
        );
        ƒS.Speech.clear();
        // return "01_E_FlowerMerchant";
        break;

      case Chp02DiscoverBedroomElementAnswers.iSayDiscoverBooks:
        await ƒS.Speech.tell("Ich", "Bücher anschauen juchu");
        ƒS.Speech.clear();
        break;
    }
  }
}
