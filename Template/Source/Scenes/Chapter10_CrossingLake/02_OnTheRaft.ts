namespace Spiegel_VN {
  export async function Chp10_02_OnTheRaft(): ƒS.SceneReturn {
    await ƒS.Speech.tell(
      "Ich",
      "Juchu Floß bauen. Flynn, was denkst du denn, warum die Leute hier so auf ihr Äußeres fixiert sind?"
    );
    let randomTextChp10BuildARaft = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp10BuildARaft) {
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

    let Chp10BuildARaftElementAnswers = {
      iSayExploreTheyAreAfraid: "(Erkunden) Vielleicht haben sie Angst?",
      iSayExploreAttention: "(Erkunden) Sie brauchen die Aufmerksamkeit",
      iSayExploreSick: "(Erkunden) Die Leute sind einfach krank",
      iSayExploreAll: "(Erkunden) Wenn alle so sind ...",
      iSayContinue: "Weiter",
    };

    if (
      !dataForSave.pickedChoiceChp10ExploreAfraid || // Hier vielleicht counter einbauen? wenn 2 optionen geklickt wurden, erscheint weiter-button
      !dataForSave.pickedChoiceChp10ExploreAttention ||
      !dataForSave.pickedChoiceChp10ExploreAll
    ) {
      delete Chp10BuildARaftElementAnswers.iSayContinue;
      // return Chp01_CS_ArrivalHome();
    }

    let Chp10BuildARaftElement = await ƒS.Menu.getInput(
      Chp10BuildARaftElementAnswers,
      "choicesCSSclass"
    );
    switch (Chp10BuildARaftElement) {
      case Chp10BuildARaftElementAnswers.iSayExploreTheyAreAfraid:
        dataForSave.pickedChoiceChp10ExploreAfraid = true;
        await ƒS.Speech.tell("Ich", "Angst vor Verurteilung");
        ƒS.Speech.clear();
        return "10_01 Build a raft"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp10BuildARaftElementAnswers.iSayExploreAttention:
        dataForSave.pickedChoiceChp10ExploreAttention = true;
        await ƒS.Speech.tell(
          "Ich",
          "Mit der Aufmerksamkeit fühlen sie sich vielleicht besser"
        );
        ƒS.Speech.clear();
        return "10_01 Build a raft";
        break;

      case Chp10BuildARaftElementAnswers.iSayExploreSick:
        dataForSave.pickedChoiceChp10ExploreSick = true;
        await ƒS.Speech.tell(
          "Ich",
          "Sie sind einfach verrückt! Was soll diese Oberflächlichkeit"
        );
        ƒS.Speech.clear();
        return "10_01 Build a raft";
        break;

      case Chp10BuildARaftElementAnswers.iSayExploreAll:
        dataForSave.pickedChoiceChp10ExploreAll = true;
        await ƒS.Speech.tell("Ich", "Na gut, wenn es alle machen?");
        ƒS.Speech.clear();
        return "10_01 Build a raft";
        break;

      case Chp10BuildARaftElementAnswers.iSayContinue:
        await ƒS.Speech.tell("Ich", "Es geht weiter");
        ƒS.Speech.clear();
        return "10_03 Cross lake";
        break;
    }
  }
}
