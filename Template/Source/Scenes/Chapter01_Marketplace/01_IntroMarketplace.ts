namespace Spiegel_VN {
  export async function Chp01_01_IntroMarketplace(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp01_01_IntroMarketplace); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden

    // await ƒS.Location.show(location.Chp01_01_IntroMarketplace);
    // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);

    // if (dataForSave.pickedThisScene = true)

    await ƒS.update(
      transitions.fade.duration,
      transitions.fade.alpha,
      transitions.fade.edge //edge ist der Härtegrad
    );

    // ***TEST-INVENTORY***
    // ƒS.Inventory.add(inventory.apple);
    // await ƒS.Inventory.open;
    //hier wird eine asynch funktion exportiert, wie heißt die funktion? in diesem fall name funktion = name von szene

    // ***TEST-DIALOGE***
    // console.log(characters.monologue.name); // console = konsole, log = befehl, der sagt, was ausgegeben wird (was in der klammer). was ausgegeben werden soll: heir wird ausgegeben, was ich rein schreibe, zum debuggen udn verstehen, was mein programm tut, wie ein wegweiser. Am ende der Sache kann ich den Namen der jeweiligen Szene eingeben, is nur für mich & für Prof
    // await ƒS.Speech.tell("Bab", "Hallo, ich bin Bab."); //fs = ich greife auf die library zu, was jmdn anders schon für die library programmiert hat.
    // await ƒS.Speech.tell("Xenoi", "Hallo, ich bin Xeni.");

    // await ƒS.Speech.tell(
    //   characters.maincharacter.name,
    //   "Hallo, ich bin Dein Name."
    // );

    // ***BEGINN SZENE***
    await ƒS.Character.show(
      characters.Kailani,
      characters.Kailani.pose.worried, // pose muss in der main sein
      ƒS.positions.bottomcenter //bei positions: gibts die normalen angaben (topleft ..) bei positionpercentage: gebe ich koordinaten an in pixel 70 in x und 100 in y
      // ƒS.positionPercent(70,100)
    );

    let randomTextChp01Marketplace = ƒ.Random.default.getRangeFloored(1, 5); //gerundet
    switch (randomTextChp01Marketplace) {
      case 1:
        await ƒS.Speech.tell(
          characters.Mama.name,
          "Random dialogue 1 -----------"
        );
        break;

      case 2:
        await ƒS.Speech.tell(
          characters.Mama.name,
          "Random dialogue 2 -----------"
        );
        break;

      case 3:
        await ƒS.Speech.tell(
          characters.Mama.name,
          "Random dialogue 3 -----------"
        );
        break;

      case 4:
        await ƒS.Speech.tell(
          characters.Mama.name,
          "Random dialogue 4 -----------"
        );
        break;

      case 5:
        await ƒS.Speech.tell(
          characters.Mama.name,
          "Random dialogue 5 -----------"
        );
        break;

      default:
        await ƒS.Speech.tell(
          characters.Mama.name,
          "Default--------------------"
        );
        break;
    }

    // await ƒS.Speech.tell(
    //   characters.maincharacter.name,
    //   dlg_scn_01.maincharacter.T0000
    // );
    // await ƒS.Speech.tell(characters.Mama.name, dlg_scn_01.Mama.T0000);

    // await ƒS.update(
    //   transition.puzzle.duration,
    //   transition.puzzle.alpha,
    //   transition.puzzle.edge //edge ist der Härtegrad
    // );

    // await ƒS.Character.show(
    //   characters.Mama,
    //   characters.Mama.pose.angry, // pose muss in der main sein
    //   ƒS.positions.bottomcenter //bei positions: gibts die normalen angaben (topleft ..) bei positionpercentage: gebe ich koordinaten an in pixel 70 in x und 100 in y
    //   // ƒS.positionPercent(70,100)
    // );

    // *** SCENE OPTIONS ***
    let Chp01PickSceneElementAnswers = {
      PickSceneConvoMother: "Rede mit Mama.",
      PickSceneMirrorMerchant: "Was glitzert so da hinten?",
      PickSceneExploreFlowerMerchant:
        "(Erkunden) Was gibt es Neues beim Blumenhändler?",
      PickSceneExploreLeatherMerchant:
        "(Erkunden) Was gibt es Neues beim Lederhändler?",
      PickSceneContinue: "Weiter",
    };
    console.log("boolean Mama gesprochen: ");
    console.log(dataForSave.pickedChp01_ConvoMother);

    console.log("boolean Mirrormerhant besucht: ");
    console.log(dataForSave.pickedChp01_MirrorMerchant);

    if (
      !dataForSave.pickedChp01_ConvoMother || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
      !dataForSave.pickedChp01_MirrorMerchant
    ) {
      delete Chp01PickSceneElementAnswers.PickSceneContinue;
      // return Chp01_CS_ArrivalHome();
    }

    // let pickediSayTalkToMama: boolean;
    // let pickediSayTalkToMirrorMerchant: boolean;

    // do {
    if (dataForSave.pickedChp01_ConvoMother) {
      delete Chp01PickSceneElementAnswers.PickSceneConvoMother;
    }
    if (dataForSave.pickedChp01_MirrorMerchant) {
      delete Chp01PickSceneElementAnswers.PickSceneMirrorMerchant;
    }

    let Chp01SceneElement = await ƒS.Menu.getInput(
      Chp01PickSceneElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp01SceneElement) {
      case Chp01PickSceneElementAnswers.PickSceneConvoMother:
        await ƒS.Speech.tell(
          characters.maincharacter.name,
          '"Warte kurz, Mama!"'
        );
        dataForSave.scoreEmpathyPoints += 10;
        console.log(dataForSave.scoreEmpathyPoints);
        ƒS.Speech.clear();
        return "01_02 Conversation Mama"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        break;

      case Chp01PickSceneElementAnswers.PickSceneMirrorMerchant:
        await ƒS.Speech.tell(
          characters.maincharacter.name,
          "Choice Talk to Mirrormerchant"
        );
        ƒS.Speech.clear();
        // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.Character.hide(characters.Mama);
        return "01_03 MirrorMerchant";
        break;

      case Chp01PickSceneElementAnswers.PickSceneExploreFlowerMerchant:
        // continue path here
        await ƒS.Speech.tell(
          characters.Mama,
          "Choice (Explore) Talk to flower merchant."
        );
        ƒS.Speech.clear();
        return "01_E_FlowerMerchant";
        break;

      case Chp01PickSceneElementAnswers.PickSceneExploreLeatherMerchant:
        // continue path here
        await ƒS.Speech.tell(
          characters.Mama,
          "Choice (Explore) Talk to leather merchant."
        );
        ƒS.Speech.clear();
        return "01_E_LeatherMerchant";
        break;

      case Chp01PickSceneElementAnswers.PickSceneContinue:
        // continue path here
        await ƒS.Speech.tell(
          characters.Mama,
          "Choice (Explore) Talk to mirror merchant."
        );
        ƒS.Speech.clear();
        return "01_CS PerchaseMirror";
        break;
    }
    // } while (dataForSave.pickedChoice);
  }
}
