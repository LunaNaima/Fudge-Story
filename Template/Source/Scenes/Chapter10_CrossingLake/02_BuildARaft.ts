namespace Spiegel_VN {
  export async function Chp10_02_BuildARaft(): ƒS.SceneReturn {
    await ƒS.Speech.tell("Ich", "Juchu Floß bauen. Flynn, was denkst du denn, warum die Leute hier so auf ihr Äußeres fixiert sind?");
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
    };

    do {
      let Chp10BuildARaftElement = await ƒS.Menu.getInput(
        Chp10BuildARaftElementAnswers,
        "choicesCSSclass"
      );
      switch (Chp10BuildARaftElement) {
        case Chp10BuildARaftElementAnswers.iSayStealABoat:
          // continue path here
          await ƒS.Speech.tell("Ich", "Boot klauen? Eher nicht");
          ƒS.Speech.clear();
          return "10_01 Build a raft"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
          break;

        case Chp10BuildARaftElementAnswers.iSayBuildARaft:
          await ƒS.Speech.tell("Ich", "Ein Floß bauen klingt doch gut!");
          dataForSave.pickedRightChoice = true;
          ƒS.Speech.clear();
          return "";
          break;

        case Chp10BuildARaftElementAnswers.iSaySwim:
          // continue path here
          await ƒS.Speech.tell("Ich", "Schwimmen ist glaub bisschen viel");
          ƒS.Speech.clear();
          return "10_01 Build a raft";
          break;

        case Chp10BuildARaftElementAnswers.iSayTurnAround:
          await ƒS.Speech.tell(
            "Ich",
            "Umdrehen ist eigentlich keine Option ... Was ist mit Kailani?"
          );
          ƒS.Speech.clear();
          return "10_01 Build a raft";
          break;
      }
    } while (!dataForSave.pickedRightChoice);

    if (dataForSave.pickedRightChoice) {
      return "01_01 Intro Marketplace";
    }
  }
}
