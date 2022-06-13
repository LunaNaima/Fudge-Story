namespace Spiegel_VN {
  export async function Chp02_CS_NewDay(): ƒS.SceneReturn {
    await ƒS.Speech.tell("Ich", "New Day! New possibilities lol.");

    // ** RANDOM TEXT ***
    let randomTextChp03NewDay = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp03NewDay) {
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

    let Chp03PickSceneElementAnswers = {
      iSayDressmaker: "Jacke abholen",
      iSayFirewoodKailani: "Mit Kailani Holz hacken",
      iSayWaterwellKailani: "Wasser holen mit Kailani",
      iSayDiscoverDonkey: "(Erkunden) Glücksesel streicheln",
      iSayDiscoverForest: "(Erkunden) Im Wald rumgucken",
      iSayDiscoverLibrary: "(Erkunden) Die Bücherei erkunden",
      iSayContinue: "Weiter",
    };

    if (
      !dataForSave.pickedChp03_Dressmaker || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
      (!dataForSave.pickedChp03_FirewoodKailani &&
        !dataForSave.pickedChp03_WaterwellKailani)
    ) {
      delete Chp03PickSceneElementAnswers.iSayContinue;
      // return Chp01_CS_ArrivalHome();
    }

    let Chp03PickSceneElement = await ƒS.Menu.getInput(
      Chp03PickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp03PickSceneElement) {
      case Chp03PickSceneElementAnswers.iSayDressmaker:
        // continue path here
        await ƒS.Speech.tell("Ich", "Auf zur Schneiderin!");
        // dataForSave.score.scoreEmpathyPoints += 10;
        console.log(dataForSave.score.scoreEmpathyPoints);
        ƒS.Speech.clear();
        return "03_01 Dressmaker"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp03PickSceneElementAnswers.iSayFirewoodKailani:
        // continue path here
        // if (dataForSave.score.scoreCouragePoints === 50)
        // wie mindestens 50?
        await ƒS.Speech.tell("Ich", "Gehen wir Holz hacken");
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "03_021 Firewood with Kailani";
        break;

      case Chp03PickSceneElementAnswers.iSayWaterwellKailani:
        // continue path here
        await ƒS.Speech.tell("Ich", "Gehen wir Wasser holen.");
        ƒS.Speech.clear();
        return "03_022 Waterwell with Kailani";
        break;

      case Chp03PickSceneElementAnswers.iSayDiscoverDonkey:
        // continue path here
        await ƒS.Speech.tell("Ich", "Süß, ein Esel!.");
        ƒS.Speech.clear();
        return "03_E Discover donkey";
        break;

      case Chp03PickSceneElementAnswers.iSayDiscoverForest:
        // continue path here
        await ƒS.Speech.tell("Ich", "Gehen wir den Wald anschauen.");
        ƒS.Speech.clear();
        return "03_E Discover Forest";
        break;

      case Chp03PickSceneElementAnswers.iSayDiscoverLibrary:
        // continue path here
        await ƒS.Speech.tell("Ich", "Ich liebe Bücher <3.");
        ƒS.Speech.clear();
        return "03_E Discover Library";
        break;

      case Chp03PickSceneElementAnswers.iSayContinue:
        // continue path here
        await ƒS.Speech.tell(
          "Ich",
          "Weiter zur cut scene turmoil marketplace."
        );
        ƒS.Speech.clear();
        return "03_CS Turmoil marketplace";
        break;
    }
  }
}
