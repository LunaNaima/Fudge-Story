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
      scoreEmpathyPoints: 20,
      scoreKnowledgePoints: 0,
      scoreCouragePoints: 0,
    },
    pickedChp01_E_FlowerMerchantScene: false, // hier setze ich diesen wert auf falsch, wenn ich den weiterverwerten will (zb spielerin überprüfen, ob diese szene besucht wurde)
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

  // export function func_RPGRandomNumberRange(
  //   min: number = 0,
  //   max: number = 10
  // ): number {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

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
      // *** INTRO ***
      { scene: Chp00_00_NameEntry, name: "00_NameEntry" },

      // ***CHAPTER 1 ***
      { scene: Chp01_01_IntroMarketplace, name: "01_01_IntroMarketplace" }, // next ist optional, hier kann ich festlegen, welche szene als nächstes abgespielt wird
      { scene: Chp01_E_FlowerMerchant, name: "E_FlowerMerchant" },
      { scene: Chp01_E_LeatherMerchant, name: "E_LeatherMerchant" },
      { scene: Chp01_02_ConvoMother, name: "01_02_ConvoMother" },
      { scene: Chp01_03_IntroMirror, name: "01_03_IntroMirror" },
      // *** CUTSCENES ***
      { scene: Chp01_CS_PerchaseMirror, name: "01_CS_PerchaseMirror" },
      { scene: Chp01_CS_ArrivalHome, name: "01_CS_ArrivalHome" },

      // ***CHAPTER 2 ***
      { scene: Chp02_01_Dinner, name: "02_01_Dinner" },
      { scene: Chp02_021_TestWithElena, name: "02_021_TestWithElena" },
      { scene: Chp02_022_TestWithKailani, name: "02_022_TestWithKailani" },
      { scene: Chp02_03_FightNeighbor, name: "02_03_FightNeighbor" },
      { scene: Chp02_E_DiscoverBedroom, name: "E_Bedroom" },
      { scene: Chp02_E_DiscoverGarden, name: "E_Garden" },
      { scene: Chp02_E_DiscoverKitchen, name: "E_Kitchen" },
      // CUTSCENES ***
      { scene: Chp02_CS_Sleep, name: "02_CS_Sleep" },
      { scene: Chp02_CS_NewDay, name: "02_CS_New Day" },

      // *** CHAPTER 3 ***
      { scene: Chp03_01_Dressmaker, name: "03_01_Dressmaker" },
      { scene: Chp03_E_DiscoverDonkey, name: "E_Donkey" },
      { scene: Chp03_E_DiscoverForest, name: "E_Forest" },
      { scene: Chp03_E_DiscoverLibrary, name: "E_Library" },
      { scene: Chp03_021_FirewoodKailani, name: "03_021_FirewoodKailani" },
      { scene: Chp03_022_WaterWellKailani, name: "03_022_WaterWellKailani" },
      // *** CUTSCENES ***
      { scene: Chp03_CS_TurmoilMarketplace, name: "03_CS_TurmoilMarketplace" },
      { scene: Chp03_CS_KailaniMissing, name: "03_CS_Kailani is missing" },
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
