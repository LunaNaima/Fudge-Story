namespace Spiegel_VN {
  export async function Chp02_E_DiscoverKitchen(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp02_E_DiscoverKitchen);
    await ƒS.Speech.tell("Ich", "Ich mache mir in der Küche was zu futtern.");

    let Chp02DiscoverKitchenElementAnswers = {
      PickSceneDiscoverOven: "(Erkunden) Ofen anschauen",
      PickSceneDiscoverPantry: "(Erkunden) In die Speisekammer",
      PickSceneLeave: "Zurück",
    };

    let Chp02DiscoverKitchenElement = await ƒS.Menu.getInput(
      Chp02DiscoverKitchenElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp02DiscoverKitchenElement) {
      case Chp02DiscoverKitchenElementAnswers.PickSceneDiscoverOven:
        await ƒS.Location.show(locations.Chp02_E_DiscoverKitchenOven);
        await ƒS.Speech.tell(
          "Ich",
          "Yay schauen wir uns den Ofen an, was gibts hier so."
        );
        ƒS.Speech.clear();
        // return "01_E_FlowerMerchant";
        break;

      case Chp02DiscoverKitchenElementAnswers.PickSceneDiscoverPantry:
        await ƒS.Location.show(locations.Chp02_E_DiscoverKitchenPantry);
        await ƒS.Speech.tell("Ich", "Speisekammer anschauen juchu");
        ƒS.Speech.clear();
        break;

      case Chp02DiscoverKitchenElementAnswers.PickSceneLeave:
        await ƒS.Speech.tell("Ich", "Wieder raus");
        ƒS.Speech.clear();
        return "01_CS Arrival Home";
        break;
    }
  }
}
