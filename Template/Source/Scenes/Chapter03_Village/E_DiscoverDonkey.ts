namespace Spiegel_VN {
  export async function Chp03_E_DiscoverDonkey(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp03_E_DiscoverDonkey);
    await ƒS.Speech.tell("Ich", "Hier steht ein Esel? Warum das");

    let Chp02DiscoverDonkeyElementAnswers = {
      PickSceneCloseup: "(Erkunden) Nase streicheln",
      PickSceneReadInscription: "(Erkunden) Inschrift lesen",
      PickSceneLeave: "Zurück",
    };

    let Chp02DiscoverDonkeyElement = await ƒS.Menu.getInput(
      Chp02DiscoverDonkeyElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp02DiscoverDonkeyElement) {
      case Chp02DiscoverDonkeyElementAnswers.PickSceneCloseup:
        await ƒS.Location.show(locations.Chp03_E_DiscoverDonkeyCloseup);
        await ƒS.Speech.tell("Ich", "Nase streicheln vom Esel");
        ƒS.Speech.clear();
        // return "01_E_FlowerMerchant";
        break;

      case Chp02DiscoverDonkeyElementAnswers.PickSceneReadInscription:
        await ƒS.Location.show(locations.Chp03_E_DiscoverDonkeyCloseup);
        await ƒS.Speech.tell(
          "Ich",
          "Inschrift lesen" // novel page
        );
        ƒS.Speech.clear();
        // return "01_E_FlowerMerchant";
        break;

      case Chp02DiscoverDonkeyElementAnswers.PickSceneLeave:
        await ƒS.Speech.tell("Ich", "Zurück");
        ƒS.Speech.clear();
        return "02_CS New day";
        break;
    }
  }
}
