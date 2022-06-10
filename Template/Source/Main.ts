namespace Spiegel_VN {
  export import ƒ = FudgeCore; //importiert teile, die nicht in typescript sind, sondern außerhalb in fudge
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");
  console.log("was anderes");

  let weihnachtsdeko = "Lichterketten, Baumkerzen, Lebkuchen, kerzen"; //let bedeutet: ich hab hier eine neue box, die ich beschriften muss (weihnachtsdekobox); = "was ist in der kiste", danach sit der befehl vorbei, also ;
  console.log(weihnachtsdeko); //
  console.log("weihnachtsdeko"); //

  let x = 2; //variablen haben immer einen typus, zb strings "" lange zeichenketten. bei einer zahl ohne "" = number. Object auch ein typ
  let y = 7;
  let z = x + y;
  console.log(z);
  z = z + 1;
  console.log(z);

  // // funktionen machen was mit Zeug innendrin, Fabrik mit Heinzelmännchen, ich leg denen was rein und die machen was damit
  // export function NameDerFunktion() {
  //   // hiermit habe ich funktionen initiiert, aber ich benutze sie nirgendwo
  //   console.log("irgendwas");
  // } // export heißt, dass diese funktion auch von anderen szenen aufrufbar ist
  // NameDerFunktion();

  // export function randomNum(min: number = 1, max: number = 4): number {

  // }

  // export function Addition(Zahl1: number = 1, Zahl2: number = 2) {
  //   // 1 und 2 sind nur default werte
  //   let summe = Zahl1 + Zahl2;
  //   console.log("Die Summe von Zahl1 und Zahl2 ist");
  //   console.log(summe);
  // }
  // Addition();
  // Addition(4, 7);
  // Addition(x, y);
  // //vorher kommentieren, was man hier macht, in dem fall export transitions

  // *** DATA THAT WILL BE SAVED ***
  export let dataForSave = {
    // hier kommt alles rein, was gespeichert werden soll. Der Spielstand wird von Beginn der jeweiligen Szene gespeichert.
    nameProtagonist: "",
    score: {
      // so geht nicht! muss die einzeln aufschreiben und nicht als Objekt scoreEmpathyPoints: 20 usw. und dann wo ichs aufruf ändern (ohne score)
      scoreEmpathyPoints: 20,
      scoreKnowledgePoints: 0,
      scoreCouragePoints: 0,
    },
    // *** RIGHT OPTION PICKED ***
    pickedRightChoice: false,

    // *** DELETE OPTION AFTER PICKED ***
    // *** Chapter 01 - Flower Merchant ***

    pickediAskAboutTrip: false,
    pickediAskAboutDecorations: false,

    // *** PICKED ALL SCENES CHAPTER 01 ***
    pickedChp01_E_FlowerMerchantScene: false, // FRAGE: wie einrichten, dass wenn alle mandatory scenes absolviert werden aber keine expore scenes, eine
    pickedChp01_E_LeatherMerchantScene: false,
    pickedChp01_ConvoMother: false,
    pickedChp01_MirrorMerchant: false,

    // // *** PICKED ALL SCENES CHAPTER 02 ***
    pickedChp02_DinnerScene: false,
    pickedChp02_TestWithElena: false,
    pickedChp02_TestWithKailani: false,
    pickedChp02_PickHerbsGarden: false,
    pickedChp02_FightNeighbor: false,
    // // pickedChp02_E_DiscoverBedroom: false,
    // // pickedChp02_E_DiscoverKitchen: false,

    // // *** PICKED ALL SCENES CHAPTER 3 ***
    // pickedChp03_Dressmaker: false,
    // pickedChp03_FirewoodKailani: false,
    // pickedChp03_WaterwellKailani: false,
    // // pickedChp03_E_DiscoverDonkey: false,
  };

  export let inventory = {
    apple: {
      name: "Apfel",
      description: "fruit",
      image: "./Assets/Items/apple.png",
      static: true, // so wird es nicht konsumiert. wenn ich static ausklammere, kann ich drauf klicken und es ist weg
    },
  };

  // dataForSave.score;
  // dataForSave.nameProtagonist = await ƒS.Speech.getInput();

  export function showCredits(): void {
    ƒS.Text.setClass("class2"); // setclass = löscht vorherige Klasse und übergeht formatierungen davor (vorherige infos werden gelöscht und nur die setclass wird angezeigt). addclass fügt Klasse hinzu
    // (wenns vorher eine addclass gab, dann wird vorherige gestaltung nicht gelöscht. also alte formatierung von css option sehen wir noch) bei szenenwechsel können wir addclass nehmen.
    ƒS.Text.print(""); // hier credits rein schreiben, damit erscheint eine novelpage bzw eine Box, in der der text steht
  }

  //**** MENÜ ****/
  // Buttons
  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits",
  }; // volume noch dazu

  let gameMenu: ƒS.Menu; // später, wenn wir das menu erstellen, heißt das hier: wir erstellen es mit den und den buttons

  let menuIsOpen: boolean = true; // abfragen, ob menu offen (true) oder geschlossen (false) ist
  let InventoryIsOpen: boolean = false;

  // asynchrone Funktionen, 1x für button, 1x für eventlistener (für shortcuts)
  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option); // sicherheitshalber anzeigen lassen, damit man weiß, was passiert
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save(); // save und load Funktionen sind schon in Progress klasse definiert
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close(), (menuIsOpen = false); // false = geschlossen
        break;
      case inGameMenuButtons.credits:
        showCredits(); // dafür gibts noch keine Funktion, deshalb rot. die muss vorher definiert werden, 1 funktion machen, exportieren (damit sie verwendet werden kann),
    }
  }

  // Shortcuts fürs Menü (für Menübuttons)
  document.addEventListener("keydown", hndKeyPress); // weil: es gibt versch arten von events, die wir für jeweiligen listener verwenden können. bei window gibts andere zur verfügung als bei doc
  // unterschied keypress & keydown: down = gedrückt halten, press = drücke und loslassen
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.ARROW_DOWN: // hier kann man taste auswählen, achtung: amerikanisches keyboard hier!
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.ARROW_LEFT:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M: //M steht für Menu
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false; // wenn ich m drücke, und das menu geöffnet is, schließe das menu. wenn es offen ist:
        } else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
      // INVENTORY MENU
      case ƒ.KEYBOARD_CODE.I:
        console.log("Inventory");
        if (InventoryIsOpen) {
          console.log("Inventory Close");
          ƒS.Inventory.close();
          InventoryIsOpen = false; // wenn ich m drücke, und das menu geöffnet is, schließe das menu. wenn es offen ist:
        } else {
          console.log("Inventory Open");
          ƒS.Inventory.open();
          InventoryIsOpen = true;
        }
        break;
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(
      inGameMenuButtons,
      buttonFunctionalities,
      "gameMenuCSSclass"
    );
    buttonFunctionalities("Close");

    let scenes: ƒS.Scenes = [
      // { scene: ScnTestzene01, name: "Testszene 01" }, // scene: hier muss name von funktion rein! Name ist was anderes, kann spaces enthalten wegen string
      // { scene: Auswahlmöglichkeiten, name: "Testszene 1" },

      // *** INTRO ***
      { id: "00 Name Entry", scene: Chp00_00_NameEntry, name: "NameEntry" },

      // ***CHAPTER 01 ***
      {
        id: "01_00 IntroNarration",
        scene: Chp01_00_IntroNarration,
        name: "Intro Narration",
      },
      {
        id: "01_01 Intro Marketplace",
        scene: Chp01_01_IntroMarketplace,
        name: "Intro marketplace",
      }, // next ist optional, hier kann ich festlegen, welche szene als nächstes abgespielt wird
      {
        id: "01_E_FlowerMerchant",
        scene: Chp01_E_FlowerMerchant,
        name: "E_FlowerMerchant",
      },
      {
        id: "01_E_LeatherMerchant",
        scene: Chp01_E_LeatherMerchant,
        name: "E_LeatherMerchant",
      },
      {
        id: "01_02 Conversation Mama",
        scene: Chp01_02_ConvoMother,
        name: "ConvoMother",
      },
      {
        id: "01_03 MirrorMerchant",
        scene: Chp01_03_IntroMirror,
        name: "IntroMirror",
      },
      // *** CUTSCENES CHP01***
      {
        id: "01_CS PerchaseMirror",
        scene: Chp01_CS_PerchaseMirror,
        name: "CS: PerchaseMirror",
      },
      {
        id: "01_CS Arrival Home",
        scene: Chp01_CS_ArrivalHome,
        name: "CS: ArrivalHome",
      },

      // ***CHAPTER 02: FAMILY HOME ***
      {
        id: "02_01 Dinner at home",
        scene: Chp02_01_Dinner,
        name: "Dinner",
      },
      {
        id: "02_021 Test with Elena",
        scene: Chp02_021_TestWithElena,
        name: "Test with Elena",
      },
      {
        id: "02_022 Test with Kailani",
        scene: Chp02_022_TestWithKailani,
        name: "Test with Kailani",
      },
      {
        id: "02_03 Fight with neighbor",
        scene: Chp02_03_FightNeighbor,
        name: "FightNeighbor",
      },
      {
        id: "02_E Discover bedroom",
        scene: Chp02_E_DiscoverBedroom,
        name: "E_Bedroom",
      },
      {
        id: "02_E Discover Garden",
        scene: Chp02_E_DiscoverGarden,
        name: "E_Garden",
      },
      {
        id: "02_E Discover Kitchen",
        scene: Chp02_E_DiscoverKitchen,
        name: "E_Kitchen",
      },
      // CUTSCENES ***
      { id: "02_CS Sleep", scene: Chp02_CS_Sleep, name: "CS: Sleep" },
      { id: "02_CS New day", scene: Chp02_CS_NewDay, name: "CS: New Day" },

      // *** CHAPTER 03: VILLAGE ***
      {
        id: "03_01 Dressmaker",
        scene: Chp03_01_Dressmaker,
        name: "Dressmaker",
      },
      {
        id: "03_E Discover donkey",
        scene: Chp03_E_DiscoverDonkey,
        name: "E_Donkey",
      },
      {
        id: "03_E Discover Forest",
        scene: Chp03_E_DiscoverForest,
        name: "E_Forest",
      },
      {
        id: "03_E Discover Library",
        scene: Chp03_E_DiscoverLibrary,
        name: "E_Library",
      },
      {
        id: "03_021 Firewood with Kailani",
        scene: Chp03_021_FirewoodKailani,
        name: "Firewood Kailani",
      },
      {
        id: "03_022 Waterwell with Kailani",
        scene: Chp03_022_WaterWellKailani,
        name: "Waterwell Kailani",
      },
      // *** CUTSCENES ***
      {
        id: "03_CS Turmoil marketplace",
        scene: Chp03_CS_TurmoilMarketplace,
        name: "CS: TurmoilMarketplace",
      },
      {
        id: "03_CS Kailani is missing",
        scene: Chp03_CS_KailaniMissing,
        name: "CS: Kailani is missing",
      },

      // *** CHAPTER 04 RESEARCH ***
      {
        id: "04_01 Talk with family",
        scene: Chp04_01_TalkWithFamily,
        name: "Talk with family",
      },
      {
        id: "04_02 Talk with family",
        scene: Chp04_02_TalkWithElena,
        name: "Talk with Elena",
      },
      {
        id: "04_03 Research library",
        scene: Chp04_03_ResearchLibrary,
        name: "Research library",
      },
      {
        id: "04_E_Examine mirror",
        scene: Chp04_E_ExamineMirror,
        name: "Examine Mirror",
      },
      {
        id: "04_E Search garden",
        scene: Chp04_E_SearchGarden,
        name: "Search garden",
      },
      {
        id: "04_E Search ground floor",
        scene: Chp04_E_SearchGroundFloor,
        name: "Search ground floor",
      },
      {
        id: "04_CS Entry forest",
        scene: Chp04_CS_EntryForest,
        name: "Entry forest",
      },

      // *** CHAPTER 05: RESEARCH FOREST
      { id: "05_01 Clearing", scene: Chp05_Clearing, name: "Clearing" },
      {
        id: "05_E Discover oak",
        scene: Chp05_E_DiscoverOak,
        name: "Discover oak",
      },
      {
        id: "05_E Discover river",
        scene: Chp05_E_DiscoverRiver,
        name: "Discover river",
      },

      // *** CHAPTER 09
      {
        id: "03_01 Build A Raft",
        scene: Chp09_01_BuildARaft,
        name: "Build a raft",
      },
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
