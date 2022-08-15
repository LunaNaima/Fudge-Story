namespace Spiegel_VN {
  export async function Chp03_E_DiscoverLibrary(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp03_E_DiscoverLibraryOutside);
    await ƒS.Speech.tell("Ich", "Juchuu Bücher.");

    await ƒS.Location.show(locations.Chp03_E_DiscoverLibraryInside);
    await ƒS.Speech.tell("Ich", "Du schnupperst und riechst die alten Bücher.");

    let Chp02DiscoverLibraryElementAnswers = {
      PickSceneCloseup: "(Erkunden) Alte Bücher anschauen",
      PickSceneLeave: "Zurück",
    };

    let Chp02DiscoverLibraryElement = await ƒS.Menu.getInput(
      Chp02DiscoverLibraryElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp02DiscoverLibraryElement) {
      case Chp02DiscoverLibraryElementAnswers.PickSceneCloseup:
        await ƒS.Location.show(locations.Chp03_E_DiscoverLibraryCloseup);
        await ƒS.Speech.tell("Ich", "Die Bücher sind ja uralt!");
        ƒS.Speech.clear();
        break;

      case Chp02DiscoverLibraryElementAnswers.PickSceneLeave:
        await ƒS.Speech.tell("Ich", "Zurück ins Haus");
        ƒS.Speech.clear();
        return "02_CS New day";
        break;
    }
  }
}
