namespace Spiegel_VN {
  export async function Chp10_01_HowToCross(): ƒS.SceneReturn {
    let randomTextChp10HowToCross = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp10HowToCross) {
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

    let Chp10HowToCrossElementAnswers = {
      iSayStealABoat: "Boot klauen",
      iSayBuildARaft: "Floß bauen",
      iSaySwim: "Schwimmen",
      iSayTurnAround: "Umdrehen",
    };

    do {
      let Chp10HowToCrossElement = await ƒS.Menu.getInput(
        Chp10HowToCrossElementAnswers,
        "choicesCSSclass"
      );
      switch (Chp10HowToCrossElement) {
        case Chp10HowToCrossElementAnswers.iSayStealABoat:
          // continue path here
          await ƒS.Speech.tell("Ich", "Boot klauen? Eher nicht");
          ƒS.Speech.clear();
          return "10_01 How to cross"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
          break;

        case Chp10HowToCrossElementAnswers.iSayBuildARaft:
          dataForSave.pickedRightChoice = true;
          await ƒS.Speech.tell("Ich", "Ein Floß bauen klingt doch gut!");
          dataForSave.pickedRightChoice = true;
          ƒS.Speech.clear();
          return "10_02 On the raft";
          break;

        case Chp10HowToCrossElementAnswers.iSaySwim:
          // continue path here
          await ƒS.Speech.tell("Ich", "Schwimmen ist glaub bisschen viel");
          ƒS.Speech.clear();
          return "10_01 How to cross";
          break;

        case Chp10HowToCrossElementAnswers.iSayTurnAround:
          await ƒS.Speech.tell(
            "Ich",
            "Umdrehen ist eigentlich keine Option ... Was ist mit Kailani?"
          );
          ƒS.Speech.clear();
          return "10_01 How to cross";
          break;
      }
    } while (!dataForSave.pickedRightChoice);

    if (dataForSave.pickedRightChoice) {
      return "10_02 On the raft";
    }
  }
}
