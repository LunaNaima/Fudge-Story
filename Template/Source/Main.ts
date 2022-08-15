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
    // *** SCORE ***
    scoreEmpathyPoints: 0,
    EmpathyPointsSkala: "",
    scoreCouragePoints: 0,
    scoreKnowledgePoints: 0,
    // so geht nicht! muss die einzeln aufschreiben und nicht als Objekt scoreEmpathyPoints: 20 usw. und dann wo ichs aufruf ändern (ohne score)

    // *** RIGHT OPTION PICKED ***
    pickedRightChoice: false,

    // *** IMPORTANT CHOICES ***
    pickedIron: false,
    // pickedChp06RecieveIron: false,
    pickedChp08TrustFlynn: false,
    pickedChp10SingToBirds: false,
    // pickedChp11Iron: false,

    // *** DELETE OPTION AFTER PICKED ***
    pickedChoice: false,
    // pickediSayBlue: false,
    // pickediSayGreen: false,
    // pickediSayEyes: false,

    // Chapter 01 - Flower Merchant ***
    pickediAskAboutTrip: false,
    pickediAskAboutDecorations: false,

    // CHAPTER 01: PICKED ALL SCENES
    pickedChp01_E_FlowerMerchantScene: false, // FRAGE: wie einrichten, dass wenn alle mandatory scenes absolviert werden aber keine expore scenes, eine
    pickedChp01_E_LeatherMerchantScene: false,
    pickedChp01_ConvoMother: false,
    pickedChp01_MirrorMerchant: false,

    //  CHAPTER 02: PICKED ALL SCENES
    pickedChp02_DinnerScene: false,
    pickedChp02_TestMirror: false,
    pickedChp02_TestWithElena: false,
    pickedChp02_TestWithKailani: false,
    pickedChp02_TestWithEvarius: false,
    pickedChp02_PickHerbsGarden: false,
    pickedChp02_FightNeighbor: false,
    // // pickedChp02_E_DiscoverBedroom: false,
    // // pickedChp02_E_DiscoverKitchen: false,

    //  CHAPTER 03: PICKED ALL SCENES
    pickedChp03_Dressmaker: false,
    pickedChp03_ChoresWithKailani: false,
    pickedChp03_WaterwellKailani: false,
    pickedChp03_WoodChoppingKailani: false,

    // CHAPTER 04: PICKED ALL SCENES
    pickedChp04TalkToFamily: false,
    pickedChp04TalkToElena: false,
    pickedChp04ResearchLibrary: false,

    // CHAPTER 05: PICKED ALL SCENES
    pickedChp05GoToClearing: false,
    pickedChp05GiveBirdsFood: false,
    pickedChp05SingToBirds: false,

    // CHAPTER 07: PICKED ALL SCENES
    pickedChp07TravelToWhary: false,
    pickedChp07DiscoverBees: false,
    pickedChp07DiscoverFlowers: false,

    // CHAPTER 8: PICKED ALL SCENES
    pickedChp08CatchFlynnAtGates: false,
    pickedChp08EnterCity: false,
    pickedChp08CatchFlynnInAlley: false,
    pickedChp08ChooseStay: false,
    pickedChp08GoWithFlynn: false,
    pickedChp08GoWithoutFlynn: false,
    pickedChp08ChooseContinueSearch: false,

    // CHAPTER 9: PICKED ALL SCENES
    pickedChp09ResearchMarketplace: false,
    pickedChp09TalkToInnkeeper: false,
    pickedChp09TalkToCook: false,
    pickedChp09TalkToStablehand: false,
    pickedChp09DiscoverListenToVillagers: false,
    pickedChp09DiscoverMerchants: false,
    pickedChp09DiscoverSpeakToVillagers: false,
    pickedChp09SpeakToBeggar: false,
    pickedChp09MakeAWish: false,

    // CHAPTER 10: ON THE RAFT
    pickedChoiceChp10ExploreAfraid: false,
    pickedChoiceChp10ExploreAttention: false,
    pickedChoiceChp10ExploreSick: false,
    pickedChoiceChp10ExploreAll: false
  };

  export let inventory = {
    apple: {
      name: "Apfel",
      description: "fruit",
      image: "./Assets/Items/apple.png",
      static: true // so wird es nicht konsumiert. wenn ich static ausklammere, kann ich drauf klicken und es ist weg
    }
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
    credits: "Credits"
  }; // volume noch dazu

  let gameMenu: ƒS.Menu; // später, wenn wir das menu erstellen, heißt das hier: wir erstellen es mit den und den buttons

  let menuIsOpen: boolean = true; // abfragen, ob menu offen (true) oder geschlossen (false) ist
  let inventoryIsOpen: boolean = false;

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
    let ctrlPressed: boolean = ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.CTRL_LEFT, ƒ.KEYBOARD_CODE.CTRL_RIGHT]);
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.S: // hier kann man taste auswählen, achtung: amerikanisches keyboard hier!
        if (!ctrlPressed)
          break;
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.L:
        if (!ctrlPressed)
          break;
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
        if (inventoryIsOpen) {
          console.log("Inventory Close");
          ƒS.Inventory.close();
          inventoryIsOpen = false; // wenn ich m drücke, und das menu geöffnet is, schließe das menu. wenn es offen ist:
        } else {
          console.log("Inventory Open");
          ƒS.Inventory.open();
          inventoryIsOpen = true;
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
      {
        id: "TestTunnel",
        scene: testTunnel,
        name: "TestTunnel"
      },
      //   id: "Auswahlmöglichkeiten",
      //   scene: Auswahlmöglichkeiten,
      //   name: "Testszene 1",
      // },
      // {
      //   scene: MinigameDemon,
      //   name: "Scene Minigame",
      // },

      // *** INTRO ***
      // { id: "00 Name Entry", scene: Chp00_00_NameEntry, name: "NameEntry" },

      // ***CHAPTER 01 ***
      {
        id: "01_00 IntroNarration",
        scene: Chp01_00_IntroNarration,
        name: "Intro Narration"
      },
      {
        id: "01_01 Intro Marketplace",
        scene: Chp01_01_IntroMarketplace,
        name: "Intro marketplace"
      }, // next ist optional, hier kann ich festlegen, welche szene als nächstes abgespielt wird
      {
        id: "01_E_FlowerMerchant",
        scene: Chp01_E_FlowerMerchant,
        name: "E_FlowerMerchant"
      },
      {
        id: "01_E_LeatherMerchant",
        scene: Chp01_E_LeatherMerchant,
        name: "E_LeatherMerchant"
      },
      {
        id: "01_02 Conversation Mama",
        scene: Chp01_02_ConvoMother,
        name: "ConvoMother",
        next: "01_01 Intro Marketplace"
      },
      {
        id: "01_03 MirrorMerchant",
        scene: Chp01_03_IntroMirror,
        name: "IntroMirror"
      },
      // *** CUTSCENES CHP01***
      {
        id: "01_CS PerchaseMirror",
        scene: Chp01_CS_PerchaseMirror,
        name: "CS: PerchaseMirror"
      },
      {
        id: "01_CS Arrival Home",
        scene: Chp01_CS_ArrivalHome,
        name: "CS: ArrivalHome"
      },

      // ***CHAPTER 02: FAMILY HOME ***
      {
        id: "02_01 Dinner at home",
        scene: Chp02_01_Dinner,
        name: "Dinner"
      },
      {
        id: "02_021 Test Mirror",
        scene: Chp02_021_TestMirror,
        name: "Test mirror"
      },
      // { brauch ich  nicht mehr
      //   id: "02_022 Test with Kailani",
      //   scene: Chp02_022_TestWithKailani,
      //   name: "Test with Kailani",
      // },
      {
        id: "02_03 Fight with neighbor",
        scene: Chp02_03_FightNeighbor,
        name: "FightNeighbor"
      },
      {
        id: "02_E Discover bedroom",
        scene: Chp02_E_DiscoverBedroom,
        name: "E_Bedroom"
      },
      {
        id: "02_03 Pick Herbs",
        scene: Chp02_03_PickHerbs,
        name: "E_Garden"
      },
      {
        id: "02_E Discover Kitchen",
        scene: Chp02_E_DiscoverKitchen,
        name: "E_Kitchen"
      },
      // CUTSCENES ***
      { id: "02_CS Sleep", scene: Chp02_CS_Sleep, name: "CS: Sleep" },
      { id: "02_CS New day", scene: Chp02_CS_NewDay, name: "CS: New Day" },

      // *** CHAPTER 03: VILLAGE ***
      {
        id: "03_01 Dressmaker",
        scene: Chp03_01_Dressmaker,
        name: "Dressmaker"
      },
      {
        id: "03_E Discover donkey",
        scene: Chp03_E_DiscoverDonkey,
        name: "E_Donkey"
      },
      {
        id: "03_E Discover Forest",
        scene: Chp03_E_DiscoverForest,
        name: "E_Forest"
      },
      {
        id: "03_E Discover Library",
        scene: Chp03_E_DiscoverLibrary,
        name: "E_Library"
      },
      {
        id: "03_021 Chores with Kailani",
        scene: Chp03_021_ChoresWithKailani,
        name: "Chores Kailani"
      },
      // {
      //   id: "03_022 Waterwell with Kailani",
      //   scene: Chp03_022_WaterWellKailani,
      //   name: "Waterwell Kailani",
      // },
      // *** CUTSCENES ***
      {
        id: "03_CS Turmoil marketplace",
        scene: Chp03_CS_TurmoilMarketplace,
        name: "CS: TurmoilMarketplace"
      },
      {
        id: "03_CS Kailani is missing",
        scene: Chp03_CS_KailaniMissing,
        name: "CS: Kailani is missing"
      },

      // *** CHAPTER 04 RESEARCH ***
      {
        id: "04_01 Talk with family",
        scene: Chp04_01_TalkWithFamily,
        name: "Talk with family"
      },
      {
        id: "04_02 Talk with Elena",
        scene: Chp04_02_TalkWithElena,
        name: "Talk with Elena"
      },
      {
        id: "04_03 Research library",
        scene: Chp04_03_ResearchLibrary,
        name: "Research library"
      },
      {
        id: "04_E_Examine mirror",
        scene: Chp04_E_ExamineMirror,
        name: "Examine Mirror"
      },
      {
        id: "04_E Search garden",
        scene: Chp04_E_SearchGarden,
        name: "Search garden"
      },
      {
        id: "04_E Search ground floor",
        scene: Chp04_E_SearchGroundFloor,
        name: "Search ground floor"
      },
      {
        id: "04_CS Entry forest",
        scene: Chp04_CS_EntryForest,
        name: "Entry forest"
      },

      // *** CHAPTER 05: FOREST
      { id: "05_01 Clearing", scene: Chp05_01_Clearing, name: "Clearing" },
      {
        id: "05_02 Sing to birds",
        scene: Chp05_02_SingToBirds,
        name: "Sing to birds"
      },
      { id: "05_03 Feed birds", scene: Chp05_03_FeedBirds, name: "Feed birds" },
      {
        id: "05_E Discover oak",
        scene: Chp05_E_DiscoverOak,
        name: "Discover oak"
      },
      {
        id: "05_E Discover river",
        scene: Chp05_E_DiscoverRiver,
        name: "Discover river"
      },
      {
        id: "05_CS Go home",
        scene: Chp05_CS_GoHome,
        name: "Go home"
      },

      // *** CHAPTER 06: DEPARTURE

      {
        id: "06_02 Recieve iron",
        scene: Chp06_02_ReceiveItemMama,
        name: "Recieve item from Mama"
      },
      {
        id: "06_03 Departure",
        scene: Chp06_03_DepartureRiver,
        name: "Departure"
      },
      {
        id: "06_CS Arrival Meadow",
        scene: Chp06_CS_ArrivalMeadow,
        name: "Arrival meadow"
      },

      // *** CHAPTER 07: ARRIVAL MIRRORWORLD

      {
        id: "07_01 Travel to to Whary",
        scene: Chp07_02_TravelToWhary,
        name: "Departure city"
      },
      {
        id: "07_E Discover flowers",
        scene: Chp07_E_DiscoverFlowers,
        name: "Discover flowers"
      },
      {
        id: "07_E Discover bees",
        scene: Chp07_E_DiscoverBees,
        name: "Discover bees"
      },
      {
        id: "07_CS Line at gates",
        scene: Chp07_CS_LineAtGates,
        name: "Line at the gates"
      },

      // *** CHAPTER 08: In Whary ***
      {
        id: "08_01 Meet Flynn gates",
        scene: Chp08_01_MeetFlynnAtGates,
        name: "Meet Flynn at the gates"
      },
      {
        id: "08_02 Meet Flynn in alley",
        scene: Chp08_02_MeetFlynnInAlley,
        name: "Meet Flynn in alley"
      },
      {
        id: "08_03 Enter City",
        scene: Chp08_03_EnterCity,
        name: "Enter city"
      },
      {
        id: "08_04 Choose stay",
        scene: Chp08_04_ChooseStay,
        name: "Choose stay"
      },
      {
        id: "08_041 Choose nice stay",
        scene: Chp08_041_ChooseNiceStay,
        name: "Choose nice stay"
      },
      {
        id: "08_042 Choose ugly stay",
        scene: Chp08_042_ChooseUglyStay,
        name: "Choose ugly stay"
      },
      {
        id: "08_0411 Nice stay with Flynn",
        scene: Chp08_0411_NiceStayFlynn,
        name: "Nice stay with Flynn"
      },
      {
        id: "08_0421 Ugly stay with Flynn",
        scene: Chp08_0421_UglyStayFlynn,
        name: "Ugly stay with Flynn"
      },
      {
        id: "08_E Discover Hay",
        scene: Chp08_E_DiscoverHay,
        name: "Discover hay"
      },
      {
        id: "08_E Discover Villagers",
        scene: Chp08_E_DiscoverVillagers,
        name: "Discover villagers"
      },
      {
        id: "08_E Discover windows",
        scene: Chp08_E_DiscoverWindows,
        name: "Discover windows"
      },
      {
        id: "08_CS Talk To Flynn",
        scene: Chp08_CS_TalkToFlynn,
        name: "Talk to Flynn"
      },
      {
        id: "08_CS Sleep & new day",
        scene: Chp08_CS_Sleep,
        name: "Go to sleep"
      },

      // *** CHAPTER 09:
      {
        id: "09_01 Research Marketplace",
        scene: Chp09_01_ResearchMarketplace,
        name: "Research Marketplace"
      },
      {
        id: "09_011 Beggar",
        scene: Chp09_011_Beggar,
        name: "Beggar scene"
      },
      // {
      //   id: "09_011 Speak to Beggar",
      //   scene: Chp09_011_Beggar,
      //   name: "Speak to Beggar",
      // },
      {
        id: "09_012 Make a wish",
        scene: Chp09_012_MakeAWish,
        name: "Make a wish"
      },
      {
        id: "09_02 TalkToInnkeeper",
        scene: Chp09_02_TalkToInnkeeper,
        name: "Talk to innkeeper"
      },
      {
        id: "09_03 TalkToCook",
        scene: Chp09_03_TalkToCook,
        name: "Talk to cook"
      },
      {
        id: "09_04 Talk to stablehand",
        scene: Chp09_04_TalkToStablehand,
        name: "Talk to stablehand"
      },
      {
        id: "09_E Listen to villagers",
        scene: Chp09_E_ListenToVillagers,
        name: "Listen to villagers"
      },
      {
        id: "09_13 Talk to merchants",
        scene: Chp09_E_TalkToMerchants,
        name: "Talk to merchants"
      },
      {
        id: "09_14 Speak to villagers",
        scene: Chp09_E_SpeakToVillagers,
        name: "Speak to villagers"
      },
      {
        id: "09_CS Arrival lake",
        scene: Chp09_CS_ArrivalLake,
        name: "Arrival at lake"
      },
      // *** CHAPTER 10: CROSSING LAKE ***
      {
        id: "10_01 How to cross",
        scene: Chp10_01_HowToCross,
        name: "How to cross"
      },
      {
        id: "10_02 On the raft",
        scene: Chp10_02_OnTheRaft,
        name: "Build a raft"
      },
      {
        id: "10_03 Cross lake",
        scene: Chp10_03_CrossLake,
        name: "Crossing the lake"
      },
      {
        id: "10_04 Attack birds",
        scene: Chp10_04_AttackBirds,
        name: "Attack from birds"
      },
      {
        id: "10_041 Sing to birds",
        scene: Chp10_041_SingToBirds,
        name: "Sing to birds"
      },
      {
        id: "10_042 Use Mirror",
        scene: Chp10_042_UseMirror,
        name: "Use the mirror"
      },
      {
        id: "10_051 Birds become friendly",
        scene: Chp10_051_FriendlyBirds,
        name: "Birds become friendly"
      },
      {
        id: "10_052 Birds disappear",
        scene: Chp10_052_BirdsDisappear,
        name: "Birds disappear"
      },
      {
        id: "10_E Discover City lights Whary",
        scene: Chp10_E_CityLightsWhary,
        name: "Discover city lights"
      },
      {
        id: "10_E Discover lake",
        scene: Chp10_E_DiscoverLake,
        name: "Discover lake"
      },
      {
        id: "10_E Discover lakewater",
        scene: Chp10_E_DiscoverLakewater,
        name: "Discover lakewater"
      },
      {
        id: "10_CS Arrival other side",
        scene: Chp10_CS_ArrivalOtherSide,
        name: "Arrival other side"
      },

      // *** CHAPTER 11: SCOUTING FACTORY ***
      {
        id: "11_01 Search for hiding place",
        scene: Chp11_01_SearchHidingPlace,
        name: "Search for hiding place"
      },
      {
        id: "11_02 Find iron",
        scene: Chp11_02_FindIron,
        name: "Find iron"
      },
      {
        id: "11_03 Watch factory",
        scene: Chp11_03_WatchFactory,
        name: "WatchFactory"
      },
      {
        id: "11_04 Try break-in",
        scene: Chp11_04_TryBreakIn,
        name: "Try to break-in"
      },
      {
        id: "11_E Discover forest",
        scene: Chp11_E_DiscoverForest,
        name: "Discover forest"
      },
      {
        id: "11_E Discover huts",
        scene: Chp11_E_DiscoverHuts,
        name: "Discover huts"
      },
      {
        id: "11_E Discover tower",
        scene: Chp11_E_DiscoverTower,
        name: "Discover tower"
      },
      {
        id: "11_CS Sleep",
        scene: Chp11_CS_Sleep,
        name: "Sleep"
      },

      // *** CHAPTER 12: ENTRY FACTORY
      {
        id: "12_011 Sneak-in",
        scene: Chp12_011_SneakIn,
        name: "Sneak-in"
      },
      {
        id: "12_012 Sneak-in amongst slaves",
        scene: Chp12_012_SneakAmongSlaves,
        name: "Sneak-in amongst slaves"
      },
      {
        id: "12_02 Enter factory",
        scene: Chp12_02_EnterFactory,
        name: "Enter factory"
      },
      {
        id: "12_031 Talk to slaves",
        scene: Chp12_031_TalkToSlaves,
        name: "Talk to slaves"
      },
      {
        id: "12_032 Search for Kailani",
        scene: Chp12_032_SearchForKailani,
        name: "Search for Kailani"
      },
      {
        id: "12_033 Listen to guards",
        scene: Chp12_033_ListenToGuards,
        name: "Listen to guards"
      },
      {
        id: "12_04 Back to hiding place",
        scene: Chp12_04_BackToHidingPlace,
        name: "Back to hiding place"
      },
      {
        id: "12_051 Birds offer help",
        scene: Chp12_051_BirdsOfferHelp,
        name: "Birds offer help"
      },
      {
        id: "12_052 Make a wish",
        scene: Chp12_052_MakeAWish,
        name: "Make a wish"
      },
      {
        id: "12_E Discover village",
        scene: Chp12_E_DiscoverVillage,
        name: "Discover village"
      },
      {
        id: "12_E Discover production site",
        scene: Chp12_E_Productionsite,
        name: "Production site"
      },
      {
        id: "12_CS Talk to Flynn",
        scene: Chp12_CS_TalkToFlynn,
        name: "Talk to Flynn"
      },

      // *** CHAPTER 13: THE GREAT ORDEAL ***
      {
        id: "13_01 Entry village",
        scene: Chp13_01_EntryVillage,
        name: "Entry village"
      },
      {
        id: "13_02 Get into tower",
        scene: Chp13_02_GetIntoTower,
        name: "Go to tower"
      },
      {
        id: "13_03 Entry tower",
        scene: Chp13_03_EntryTower,
        name: "Entry tower"
      },
      {
        id: "10_04 Sneak past demon",
        scene: Chp13_04_SneakPastDemon,
        name: "Sneak past demon"
      },
      {
        id: "13_E Discover family portrait",
        scene: Chp13_E_DiscoverFamilyPortrait,
        name: "Discover family portrait"
      },
      {
        id: "13_E Discover locked door",
        scene: Chp13_E_DiscoverLockedDoor,
        name: "Discover locked door"
      },
      {
        id: "13_E Sneak around tower",
        scene: Chp13_E_DiscoverSneakAround,
        name: "Discover sneak around tower"
      },
      {
        id: "13_E Discover tower window",
        scene: Chp13_E_DiscoverTowerWindow,
        name: "Discover tower window"
      },
      {
        id: "13_E Discover watch guard",
        scene: Chp13_E_DiscoverWatchGuard,
        name: "Discover watch guard"
      },
      {
        id: "13_CS Entry mirror room",
        scene: Chp13_CS_EntryMirrorRoom,
        name: "Entry mirror room"
      },

      // *** CHAPTER 14.1: GOOD ENDING
      {
        id: "14.1_01 Destroy mirror",
        scene: Chp141_01_DestroyMirror,
        name: "Destroy mirror"
      },
      {
        id: "14.1_02 Demon dies",
        scene: Chp141_02_DemonDies,
        name: "Demon dies"
      },
      {
        id: "14.1_CS Balcony tower",
        scene: Chp14_CS_BalconyTower,
        name: "Balcony tower"
      },

      // CHAPTER 14.2: BAD ENDING
      {
        id: "14.2_01 Realization mirror",
        scene: Chp142_01_RealizationMirror,
        name: "Realization mirror"
      },
      {
        id: "14.2_02 Caught by demon",
        scene: Chp142_02_CaughtByDemon,
        name: "Caught by demon"
      },
      {
        id: "14.2_03 Transformation into slaves",
        scene: Chp142_03_TransformationSlaves,
        name: "Transformation into slaves"
      },
      {
        id: "14.2_End Empty Scene",
        scene: Chp142_End_EmptyScene,
        name: "End empty scene"
      },

      // *** CHAPTER 15: THE PRIZE
      {
        id: "15_01 Reunion Kailani",
        scene: Chp15_01_ReunionKailani,
        name: "Reunion Kailani"
      },
      {
        id: "15_E Discover demon room",
        scene: Chp15_E_DiscoverDemonRoom,
        name: "Discover demon room"
      },
      {
        id: "15_E Discover mirror room",
        scene: Chp15_E_DiscoverMirrorRoom,
        name: "Discover mirror room"
      },
      {
        id: "15_E Talk to freed villagers",
        scene: Chp15_E_TalkToFreedVillagers,
        name: "Talk to freed villagers"
      },
      {
        id: "15_CS Go to lake",
        scene: Chp15_CS_GoToLake,
        name: "Go to lake"
      },
      // *** CHAPTER 16: ROAD HOME
      {
        id: "16_01 Confrontation Flynn",
        scene: Chp16_01_ConfrontationFlynn,
        name: "Confrontation Flynn"
      },
      {
        id: "16_02 Make a wish",
        scene: Chp16_02_MakeAWish,
        name: "Make a wish"
      },
      {
        id: "16_021 Go home alone",
        scene: Chp16_021_GoHomeAlone,
        name: "Go home alone"
      },
      {
        id: "16_022 Go home with Flynn",
        scene: Chp16_022_GoHomeWithFlynn,
        name: "Go home with Flynn"
      },
      {
        id: "16_CS Reunion family",
        scene: Chp16_CS_ReunionFamily,
        name: "Reunion family"
      },
      {
        id: "16_End Empty Scene",
        scene: Chp16_End_EmptyScene,
        name: "End Empty Scene"
      }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
