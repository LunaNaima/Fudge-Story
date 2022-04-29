namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  //vorher kommentieren, was man hier macht, in dem fall export transitions

  export let transition = {
    puzzle: {
      duration: 1,
      alpha: "/Tutorial_WS21/FreeTransitions/Jigsaw", // wenn ./ steht, dann suche ich Datei im aktuellen Ordner. Sonst /, allerdings kam da bei mir nichts
      edge: 1,
    },
  };

  export let sound = {
    //themes
    backgroundTheme: "/Tutorial_WS21/Audio/Nightclub.ogg", // immer detaillierter benennen! Theme genauer benennen

    //Soundeffekte SFX
    click: "Pfad",
  };

  export let locations = {
    nighttime_sil: {
      name: "",
      background: "./Images/nighttime_sil.jpg",
    },
    starry: {
      name: "starry",
      background: "Pfad",
    },
  };

  export let characters = {
    narrator: {
      //welcher character
      name: "Name",
    },
    Mama: {
      name: "Leijla",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "/Pfad", //nicht nur pose, sondern auch Mimik beschreiben
        happy: "/Pfad",
        sad: "/Pfad",
      },
    },
    Mutti: {
      name: "Elena",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "",
      },
    },
  };

  // let scenes: ƒS.Scenes = [ //Hier wird auf meine szenen verwiesen // Linear
  // { scene: Scene, name: "Luna Scene" },
  // ];
  // ƒS.Progress.go(scenes);

  export let dataForSave = {
    // hier kommt alles rein, was gespeichert werden soll. Der Spielstand wird von Beginn der jeweiligen Szene gespeichert.
    nameProtagonist: "", // können Eingabefeld machen, wo die Spielerin den Name eingeben kann
    score: 0, // wenn es zb Punktestand gibt
  };

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
    let scenes: ƒS.Scenes = [{ scene: Scene, name: "Scene" }];

    // start the sequence
    ƒS.Progress.go(scenes);
  }

  let uiElement: HTMLElement = document.querySelector("[type=interface]");
  dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
}
