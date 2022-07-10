namespace Spiegel_VN {
  export async function Chp14_CS_BalconyTower(): ƒS.SceneReturn {
    let randomTextChp14GoodEndingBalcony = ƒ.Random.default.getRangeFloored(
      1,
      5
    ); //gerundet
    switch (randomTextChp14GoodEndingBalcony) {
      case 1:
        await ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
        break;

      case 2:
        await ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
        break;

      case 3:
        await ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
        break;

      case 4:
        await ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
        break;

      case 5:
        await ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
        break;

      default:
        await ƒS.Speech.tell("Ich", "Default--------------------");
        break;
    }

    let Chp14_1PickSceneElementAnswers = {
      PickSceneDiscoverDemonRoom: "(Erkunden) Dämonzimmer anschauen",
      PickSceneDiscoverMirrorRoom: "(Erkunden) Spiegelzimmer anschauen",
      PickSceneFindKailani: "Raus und Kailani finden",
    };

    let Chp14_1PickSceneElement = await ƒS.Menu.getInput(
      Chp14_1PickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp14_1PickSceneElement) {
      case Chp14_1PickSceneElementAnswers.PickSceneDiscoverDemonRoom:
        // continue path here
        await ƒS.Speech.tell("Ich", "Wie siehts hier im Dämonzimmer so aus?");
        ƒS.Speech.clear();
        return "15_E Discover demon room"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp14_1PickSceneElementAnswers.PickSceneDiscoverMirrorRoom:
        await ƒS.Speech.tell("Ich", "Spiegelzimmer anschauen wowww");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "15_E Discover mirror room";
        break;

      case Chp14_1PickSceneElementAnswers.PickSceneFindKailani:
        // continue path here
        await ƒS.Speech.tell("Ich", "Komm wir suchen Kailani!!");
        ƒS.Speech.clear();
        return "15_01 Reunion Kailani";
        break;
    }
  }
}
