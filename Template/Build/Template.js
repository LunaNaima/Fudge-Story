"use strict";
var Spiegel_VN;
(function (Spiegel_VN) {
    async function HowToMakeChoices() {
        console.log("Let's make some choices!");
        //   let text = {
        //     Narrator: {
        //       T0000: "",
        //       T0001: "",
        //       T0002: ""
        //     },
        //     Aisaka: {
        //       T0000: "Heute wird sich alles um Auswahlmöglichkeiten drehen.",
        //       T0001: "Schön, dass du dabei warst!"
        //     }
        //   };
        //   // ƒS.Sound.fade(sound.nightclub, 1, 2, true);
        //   ƒS.Speech.hide();
        //   await ƒS.Location.show(locations.nightpark);
        //   await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
        //   await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        //   await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positionPercent(70, 100));
        //   // ƒS.Character.hide(characters.aisaka);
        //   // ƒS.Character.hideAll();
        //   await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0000);
        //   ƒS.Speech.clear();
        //   ƒS.Speech.hide();
        //   await ƒS.update(3);
        //   let firstDialogueElementAnswers = {
        //     iSayOk: "Okay.",
        //     iSayYes: "Ja.",
        //     iSayNo: "Nein."
        //   };
        //   let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "choicesCSSclass");
        //   switch (firstDialogueElement) {
        //     case firstDialogueElementAnswers.iSayOk:
        //       // continue path here
        //       await ƒS.Speech.tell(characters.aisaka, "Hi");
        //       ƒS.Speech.clear();
        //       break;
        //     case firstDialogueElementAnswers.iSayYes:
        //       // continue path here
        //       await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        //       ƒS.Character.hide(characters.aisaka);
        //       break;
        //     case firstDialogueElementAnswers.iSayNo:
        //       // continue path here
        //       await ƒS.Speech.tell(characters.aisaka, "Hi");
        //       ƒS.Speech.clear();
        //       break;
        //   }
        //   // You can continue your story right after the choice definitions
        //   await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0001);
    }
    Spiegel_VN.HowToMakeChoices = HowToMakeChoices;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.ƒ = FudgeCore; //importiert teile, die nicht in typescript sind, sondern außerhalb in fudge
    Spiegel_VN.ƒS = FudgeStory;
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
    Spiegel_VN.dataForSave = {
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
        pickedChp01_E_FlowerMerchantScene: false,
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
    Spiegel_VN.inventory = {
        apple: {
            name: "Apfel",
            description: "fruit",
            image: "./Assets/Items/apple.png",
            static: true, // so wird es nicht konsumiert. wenn ich static ausklammere, kann ich drauf klicken und es ist weg
        },
    };
    // dataForSave.score;
    // dataForSave.nameProtagonist = await ƒS.Speech.getInput();
    function showCredits() {
        Spiegel_VN.ƒS.Text.setClass("class2"); // setclass = löscht vorherige Klasse und übergeht formatierungen davor (vorherige infos werden gelöscht und nur die setclass wird angezeigt). addclass fügt Klasse hinzu
        // (wenns vorher eine addclass gab, dann wird vorherige gestaltung nicht gelöscht. also alte formatierung von css option sehen wir noch) bei szenenwechsel können wir addclass nehmen.
        Spiegel_VN.ƒS.Text.print(""); // hier credits rein schreiben, damit erscheint eine novelpage bzw eine Box, in der der text steht
    }
    Spiegel_VN.showCredits = showCredits;
    //**** MENÜ ****/
    // Buttons
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits",
    }; // volume noch dazu
    let gameMenu; // später, wenn wir das menu erstellen, heißt das hier: wir erstellen es mit den und den buttons
    let menuIsOpen = true; // abfragen, ob menu offen (true) oder geschlossen (false) ist
    let InventoryIsOpen = false;
    // asynchrone Funktionen, 1x für button, 1x für eventlistener (für shortcuts)
    async function buttonFunctionalities(_option) {
        console.log(_option); // sicherheitshalber anzeigen lassen, damit man weiß, was passiert
        switch (_option) {
            case inGameMenuButtons.save:
                await Spiegel_VN.ƒS.Progress.save(); // save und load Funktionen sind schon in Progress klasse definiert
                break;
            case inGameMenuButtons.load:
                await Spiegel_VN.ƒS.Progress.load();
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
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Spiegel_VN.ƒ.KEYBOARD_CODE.ARROW_DOWN: // hier kann man taste auswählen, achtung: amerikanisches keyboard hier!
                console.log("Save");
                await Spiegel_VN.ƒS.Progress.save();
                break;
            case Spiegel_VN.ƒ.KEYBOARD_CODE.ARROW_LEFT:
                console.log("Load");
                await Spiegel_VN.ƒS.Progress.load();
                break;
            case Spiegel_VN.ƒ.KEYBOARD_CODE.M: //M steht für Menu
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false; // wenn ich m drücke, und das menu geöffnet is, schließe das menu. wenn es offen ist:
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            // INVENTORY MENU
            case Spiegel_VN.ƒ.KEYBOARD_CODE.I:
                console.log("Inventory");
                if (InventoryIsOpen) {
                    console.log("Inventory Close");
                    Spiegel_VN.ƒS.Inventory.close();
                    InventoryIsOpen = false; // wenn ich m drücke, und das menu geöffnet is, schließe das menu. wenn es offen ist:
                }
                else {
                    console.log("Inventory Open");
                    Spiegel_VN.ƒS.Inventory.open();
                    InventoryIsOpen = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Spiegel_VN.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");
        buttonFunctionalities("Close");
        let scenes = [
            // { scene: ScnTestzene01, name: "Testszene 01" }, // scene: hier muss name von funktion rein! Name ist was anderes, kann spaces enthalten wegen string
            // { scene: Auswahlmöglichkeiten, name: "Testszene 1" },
            // *** INTRO ***
            { id: "00 Name Entry", scene: Spiegel_VN.Chp00_00_NameEntry, name: "NameEntry" },
            // ***CHAPTER 01 ***
            {
                id: "01_00_IntroNarration",
                scene: Spiegel_VN.Chp01_00_IntroNarration,
                name: "Intro Narration",
            },
            {
                id: "01_01 Intro Marketplace",
                scene: Spiegel_VN.Chp01_01_IntroMarketplace,
                name: "IntroMarketplace",
            },
            { scene: Spiegel_VN.Chp01_E_FlowerMerchant, name: "E_FlowerMerchant" },
            // { scene: Chp01_E_FlowerMerchantpickedTrip, name: "E_FlowerM pickedTrip" },
            { scene: Spiegel_VN.Chp01_E_LeatherMerchant, name: "E_LeatherMerchant" },
            { scene: Spiegel_VN.Chp01_02_ConvoMother, name: "01_02_ConvoMother" },
            { scene: Spiegel_VN.Chp01_03_IntroMirror, name: "01_03_IntroMirror" },
            // *** CUTSCENES ***
            { scene: Spiegel_VN.Chp01_CS_PerchaseMirror, name: "01_CS_PerchaseMirror" },
            { scene: Spiegel_VN.Chp01_CS_ArrivalHome, name: "01_CS_ArrivalHome" },
            // ***CHAPTER 02 ***
            { scene: Spiegel_VN.Chp02_01_Dinner, name: "02_01_Dinner" },
            { scene: Spiegel_VN.Chp02_021_TestWithElena, name: "02_021_TestWithElena" },
            { scene: Spiegel_VN.Chp02_022_TestWithKailani, name: "02_022_TestWithKailani" },
            { scene: Spiegel_VN.Chp02_03_FightNeighbor, name: "02_03_FightNeighbor" },
            { scene: Spiegel_VN.Chp02_E_DiscoverBedroom, name: "E_Bedroom" },
            { scene: Spiegel_VN.Chp02_E_DiscoverGarden, name: "E_Garden" },
            { scene: Spiegel_VN.Chp02_E_DiscoverKitchen, name: "E_Kitchen" },
            // CUTSCENES ***
            { scene: Spiegel_VN.Chp02_CS_Sleep, name: "02_CS_Sleep" },
            { scene: Spiegel_VN.Chp02_CS_NewDay, name: "02_CS_New Day" },
            // *** CHAPTER 03 ***
            { scene: Spiegel_VN.Chp03_01_Dressmaker, name: "03_01_Dressmaker" },
            { scene: Spiegel_VN.Chp03_E_DiscoverDonkey, name: "E_Donkey" },
            { scene: Spiegel_VN.Chp03_E_DiscoverForest, name: "E_Forest" },
            { scene: Spiegel_VN.Chp03_E_DiscoverLibrary, name: "E_Library" },
            { scene: Spiegel_VN.Chp03_021_FirewoodKailani, name: "03_021_FirewoodKailani" },
            { scene: Spiegel_VN.Chp03_022_WaterWellKailani, name: "03_022_WaterWellKailani" },
            // *** CUTSCENES ***
            { scene: Spiegel_VN.Chp03_CS_TurmoilMarketplace, name: "03_CS_TurmoilMarketplace" },
            { scene: Spiegel_VN.Chp03_CS_KailaniMissing, name: "03_CS_Kailani is missing" },
            // *** CHAPTER 09
            {
                id: "03_01 Build A Raft",
                scene: Spiegel_VN.Chp09_01_BuildARaft,
                name: "Build a raft",
            },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Spiegel_VN.dataForSave = Spiegel_VN.ƒS.Progress.setData(Spiegel_VN.dataForSave, uiElement);
        // start the sequence
        Spiegel_VN.ƒS.Progress.go(scenes);
    }
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    // Punktesystem
    Spiegel_VN.minPoints = 0;
    Spiegel_VN.maxPoints = 100;
    Spiegel_VN.points = 0;
    async function UpdateBar() {
        let progressbar = document.getElementById("sanity");
        progressbar.style.width = Spiegel_VN.points + "%";
        if (Spiegel_VN.points >= 85) {
            progressbar.style.backgroundColor = "red";
        }
        else if (Spiegel_VN.points < 85 && Spiegel_VN.points > 60) {
            progressbar.style.backgroundColor = "yellow";
        }
        else {
            progressbar.style.backgroundColor = "green";
        }
    }
    Spiegel_VN.UpdateBar = UpdateBar;
    function DisplaySanityBar(show) {
        let progressbar = document.getElementById("sanityContainer");
        if (!show) {
            progressbar.style.display = "none";
        }
        else {
            progressbar.style.display = "inline-block";
        }
    }
    Spiegel_VN.DisplaySanityBar = DisplaySanityBar;
    function SetPoints(num) {
        Spiegel_VN.points = num;
        UpdateBar();
    }
    Spiegel_VN.SetPoints = SetPoints;
    function AddPoints(num) {
        if (Spiegel_VN.points < Spiegel_VN.maxPoints) {
            Spiegel_VN.points += num;
        }
        // ƒS.Sound.play(sound.sanity, 0.025, false);
        UpdateBar();
    }
    Spiegel_VN.AddPoints = AddPoints;
    function SubPoints(num) {
        if (Spiegel_VN.points > 0) {
            Spiegel_VN.points -= num;
        }
        UpdateBar();
    }
    Spiegel_VN.SubPoints = SubPoints;
    function GetPoints() {
        return Spiegel_VN.points;
    }
    Spiegel_VN.GetPoints = GetPoints;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        // let text = {
        //   Narrator: {
        //     T0001: "", //Text Nr. 1
        //     T0002: "",
        //   },
        //   Protagonistin: {
        //     T0000: "Was geht",
        //     T0001: "Funktioniert das?",
        //     T0002: "Ich hoffe doch!",
        //   },
        // };
        // ƒS.Sound.play(sound.click, 1); //bei volume: zwischen 0-1, bisschen mehr als 1 ist schon zu laut. Loopen geht auch, loop = true (dann loopts sichs)
        // ƒS.Sound.fade(sound.click, 1, 2); // 1 ist das max, also bis hier hin wird der sound steigen. 2 = duration. true bezieht sich auf loop. sound wird einmal gefadet, bleibt dann konstant laut
        // await ƒS.Location.show(locations.nighttime_sil); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
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
        // ); //char anzeigen lassen. immer im hover schauen, was ich angeben muss!
        // ƒS.Character.hideAll(); //hier muss man nichts angeben. danach machts sinn, nen fade rein zu tun, damit die char ausgefadet werden
        // // ƒS.Character.hide(characters.Mama)
        // await ƒS.Speech.tell(characters.Mama, text.Protagonistin.T0001); //class für Speech, wait for signal oder await heißt: wir warten auf Nutzerinteraktion,
        // //ist optional. wenn text automatisch weitergehen soll: mit true oder false angeben
        // ƒS.Speech.clear(); // hier wird text aus dem feld gelöscht
        // await ƒS.update(3); // dann kommt text 3 sek später
        // await ƒS.Speech.tell(characters.Mama, text.Protagonistin.T0002);
        // await ƒS.Speech.tell(characters.Mama, "Neuer Text.");
        // ƒS.Speech.hide(); // das textfeld wird ausgeblendet
        // await ƒS.update();
        // ƒS.Sound.fade(sound.click, 1, 2); //hier ausfaden
        // let firstDialogueElementAnswers = {
        //   //fightbetweenMamaundMutti  normalerweise sinnvolle namen verwendet, damit ich weiß, was für welche entscheidung steht
        //   iSayOk: "Okay.",
        //   iSayYes: "Ja.",
        //   iSayNo: "Nein.", // mit ich-perspektive vom spieler ausgehen. diese antwortmöglichkeiten stehen der spielerin zur verfügung, ich nehm "isay" damit ich weiß, dass spielerin spricht
        // };
        // let firstDialogueElement = await ƒS.Menu.getInput(
        //   firstDialogueElementAnswers,
        //   "individualCSSclass"
        // ); // wir weisen input element zu. await bedeutet: wir warten, bis nutzer interagiert
        // switch (
        //   firstDialogueElement // zu welchem case soll es hinswitchen, je nach getroffener option
        // ) {
        //   case firstDialogueElementAnswers.iSayOk:
        //     // continue path here
        //     await ƒS.Speech.tell(characters.Mama, "Hi");
        //     ƒS.Speech.clear(); // das gesprochene oder auch char hier clearen
        //     break;
        //   case firstDialogueElementAnswers.iSayYes:
        //     // continue here
        //     await ƒS.Character.show(
        //       characters.Mama,
        //       characters.Mama.pose.angry,
        //       ƒS.positions.bottomcenter
        //     );
        //     break;
        //   case firstDialogueElementAnswers.iSayNo:
        //     await ƒS.Character.show(
        //       characters.Mutti,
        //       characters.Mutti.pose.angry,
        //       ƒS.positionPercent(70, 100)
        //     );
        // }
    }
    Spiegel_VN.Scene = Scene;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.characters = {
        // hier sollten alle char rein // char in richtiger größe!
        maincharacter: {
            name: "Player",
        },
        narrator: {
            name: "Erzählerin",
        },
        Mama: {
            name: "Leijla",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMCENTER,
            //   pose: {
            //     angry: "/Pfad", //nicht nur pose, sondern auch Mimik beschreiben
            //     happy: "/Pfad",
            //     sad: "/Pfad",
            //   },
        },
        Mutti: {
            name: "Elena",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMCENTER,
            //   pose: {
            //     angry: "",
            //   },
        },
        Kailani: {
            name: "Kailani",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            // pose: {
            //  }
        },
        Evarius: {
            name: "Evarius",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMCENTER,
            // pose: {
            // }
        },
        Flynn: {
            name: "Flynn",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMLEFT,
            // pose: {
            // }
        },
        flowerMerchant: {
            name: "Blumenhändler",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMCENTER,
        },
        leatherMerchant: {
            name: "Lederhändler",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
        },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    // *** RANDOMIZER ***
    function func_RandomNumberRange(// random nr zw 0-10. macht
    min = 0, max = 10) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    Spiegel_VN.func_RandomNumberRange = func_RandomNumberRange;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    // *** BACKGROUNDS ***
    Spiegel_VN.locations = {
        Chp01_01_IntroMarketplace: {
            name: "Intro_Marktplatz",
            background: "./Assets/Backgrounds/Chapter 01/01_IntroMarketplace/Kap01_01_Intro_Marktplatz.png",
        },
        Chp01_02_ConvoMother: {
            name: "Convo_Mother",
            background: "./Assets/Backgrounds/BG_Wald_Test1.png",
        },
        Chp02_E_DiscoverBedroom: {
            name: "My Bedroom",
            background: "./Assets/Backgrounds/Chapter 02/E_DiscoverBedroom/MyBedroom.jpg",
        },
        Chp02_01_Dinner: {
            name: "Dinnertable",
            background: "./Assets/Backgrounds/Chapter 02/Dinner/Diningtable.jpg",
        },
        black: {
            name: "Black_BG",
            background: "./Assets/Transitions/Black.png",
        },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.Music = {
        //themes
        backgroundTheme_default: "./Assets/Music/bg_theme_default.mp3",
        //Soundeffekte SFX
        click: "Pfad",
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.score = {
        //score ist ein objekt
        punkte: 0,
        teeGetrunken: false,
    };
    Spiegel_VN.scoreMutti = {
        punkte: 0,
        affection: 0,
        introduced: false, // alles was ich hier festlege, ist grundsätzlich. grundsätzlich fang ich das spiel an und sage, elena hat sich noch nciht vorgestellt, also false
    };
    // *** SCOREFUNCTION EMPATHY *** //
    // export let GlobalCounterEmpathyPoints = {// when certain dlg option is selected, var in the dlg option says how many points, and then they will be added to the hlobalvar, which will add them up
    //   EmpathyPoints: 0,
    // };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.Soundeffekte = {
        click: "./Assets/Soundeffekte/mouseclick.flac",
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.transitions = {
        fade: {
            duration: 2,
            alpha: "./Assets/Transitions/Black.png",
            edge: 0.1,
        },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.dlg_scn_00_IntroNarrator = {
        narratorEntry: {
            T0000: "Willkommen zur Visual Novel",
            T0001: "Das ist der Beginn deiner Geschichte.",
            T0002: "Es war einmal ...",
        },
        maincharacter: {
            T0000: "Die Händler sind im Dorf! Nach einem langen und grauen Winter reihen sich endlich wieder die farbigen Wagons der fahrenden Händler am Marktplatz ein.",
            T0001: "Auch wenn die Luft noch eisig in meinen Lungen ist, die Waren der Händler und die Sonne, die manchmal durch die Wolken blitzt, erschaffen ein schon fast frühlingshaftes Gefühl von Freude.",
            T0002: "Meine Geschwister rennen herum wie die Irren.",
            T0003: "",
        },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.dlg_scn_01 = {
        maincharacter: {
            T0000: "Intro into marketplace.",
            T0001: "Das ist meine erste Szene yay.",
        },
        // Mama: {
        //   T0000: "Hallo mein Kind.",
        //   T0001: "Test Mama dlg t0001.",
        // },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.dlg_scn_02 = {
        maincharacter: {
            T0000: "Jetzt rede ich mit Mama.",
            T0001: "Zweite Szene T0001.",
        },
        Mama: {
            T0000: "Ich rede mit meinem Kind.",
            T0001: "In der zweiten Szene.",
        },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.dlg_scn_E_10EmpathyPoints = {
        maincharacter: {
            T0000: "Ich habe diese Dialogoption freigeschalten.",
            T0001: "Mit 10 Empathy Points.",
        },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.dlg_scn_E_Flowermerchant = {
        maincharacter: {
            T0000: "Hallo Blumenhändler t0000",
            T0001: "Test dlg t0001.",
        },
        flowerMerchant: {
            T0000: "Test Blumenhändler dialog.",
        },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.dlg_scn_E_Leathermerchant = {
        maincharacter: {
            T0000: "Hallo Lederhändler t0000",
            T0001: "Test dlg t0001.",
        },
        leatherMerchant: {
            T0000: "Test Lederhändler dialog.",
        },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function ScnTestzene01() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_01_IntroMarketplace);
        await Spiegel_VN.ƒS.update();
        // ƒS.Inventory.add(inventory.apple);
        // await ƒS.Inventory.open;
        //hier wird eine asynch funktion exportiert, wie heißt die funktion? in diesem fall name funktion = name von szene
        console.log(Spiegel_VN.characters.maincharacter.name); // console = konsole, log = befehl, der sagt, was ausgegeben wird (was in der klammer). was ausgegeben werden soll: heir wird ausgegeben, was ich rein schreibe, zum debuggen udn verstehen, was mein programm tut, wie ein wegweiser. Am ende der Sache kann ich den Namen der jeweiligen Szene eingeben, is nur für mich & für Prof
        await Spiegel_VN.ƒS.Speech.tell("Bab", "Hallo, ich bin Bab."); //fs = ich greife auf die library zu, was jmdn anders schon für die library programmiert hat.
        await Spiegel_VN.ƒS.Speech.tell("Xenoi", "Hallo, ich bin Xeni.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, "Hallo, ich bin Dein Name.");
        let firstDialogueElementAnswers = {
            iSayOk: "Okay.",
            iSayYes: "Ja.",
            iSayNo: "Nein.",
        };
        let firstDialogueElement = await Spiegel_VN.ƒS.Menu.getInput(firstDialogueElementAnswers, "choicesCSSclass");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayOk:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Hi");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case firstDialogueElementAnswers.iSayYes:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "HiToYes");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                break;
            case firstDialogueElementAnswers.iSayNo:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Hi");
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        return Spiegel_VN.ScnTestzene02();
    }
    Spiegel_VN.ScnTestzene01 = ScnTestzene01;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function ScnTestzene02() {
        console.log("Status: ", Spiegel_VN.scoreMutti.introduced);
        //hier wird eine asynch funktion exportiert, wie heißt die funktion? in diesem fall name funktion = name von szene
        console.log("Punktestand Mutti: ", Spiegel_VN.scoreMutti.punkte); // console = konsole, log = befehl, der sagt, was ausgegeben wird (was in der klammer). was ausgegeben werden soll: heir wird ausgegeben, was ich rein schreibe, zum debuggen udn verstehen, was mein programm tut, wie ein wegweiser
        await Spiegel_VN.ƒS.Speech.tell("Bab", "Neue szene bklqsjhdui."); //fs = ich greife auf die library zu, was jmdn anders (jirka) schon für die library programmiert hat.
        if (Spiegel_VN.scoreMutti.introduced == true) {
            // mit == fragen wir, ob etwas true ist. = heißt, wir weisen einen Wert etw zu.
            await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti.name, "Mich kennt ihr ja schon.");
            Spiegel_VN.scoreMutti.punkte = Spiegel_VN.scoreMutti.punkte + 1;
        }
        if (Spiegel_VN.scoreMutti.introduced == false) {
            await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti.name, "Hallo, ich bin Elena.");
            Spiegel_VN.scoreMutti.introduced = true;
        }
        if (Spiegel_VN.scoreMutti.punkte >= 6) {
            await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti.name, "Möchtest du etwas tee?");
            let decisionButtons01 = {
                // !hier! wird decisionsbuttons01 definiert, wegen let // decisionsbuttons ist ein Objekt
                decisionYes: "Yes",
                decisionNo: "No",
            };
            let decision = await Spiegel_VN.ƒS.Menu.getInput(decisionButtons01, "decisionButtons" // hier umbennen und mit css bearbeiten
            );
            switch (decision //switch case = besseres if. statt ich 32809x if schreib, fragt switch: was is das ding? dieser input = yes or no. switch kann alles abfragen. muss schauen, was wann nützlich ist
            ) {
                case decisionButtons01.decisionYes:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti.name, "Hier bitte, eine schöne Tasse Tee. Frisch gekocht.");
                    break;
                case decisionButtons01.decisionNo:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti.name, "Nein? Dann hattest du wohl schon Tee. Freut mich zu hören! Viel spaß bei denen Freunden.");
                    return Spiegel_VN.ScnTestzene01();
                    break;
                default:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti.name, "Default wird verwendet, wenn keiner der Fälle im Switch case zutrifft..");
                    break;
            }
        }
        return ScnTestzene02();
    }
    Spiegel_VN.ScnTestzene02 = ScnTestzene02;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp00_00_NameEntry() {
        Spiegel_VN.dataForSave.nameProtagonist = await Spiegel_VN.ƒS.Speech.getInput();
        Spiegel_VN.characters.maincharacter.name = Spiegel_VN.dataForSave.nameProtagonist;
    }
    Spiegel_VN.Chp00_00_NameEntry = Chp00_00_NameEntry;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_00_IntroNarration() {
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.Music.backgroundTheme_default, 0.8, 0.1, true);
        // ***BEGINN SZENE***
        for (let diaSequence of Object.values(Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry)) {
            await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, diaSequence);
        }
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_01_IntroMarketplace);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge //edge ist der Härtegrad
        );
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_scn_00_IntroNarrator.maincharacter.T0000);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_scn_00_IntroNarrator.maincharacter.T0001);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_scn_00_IntroNarrator.maincharacter.T0002);
        return "01_01 Intro Marketplace";
    }
    Spiegel_VN.Chp01_00_IntroNarration = Chp01_00_IntroNarration;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_01_IntroMarketplace() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_01_IntroMarketplace); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
        // await ƒS.Location.show(location.Chp01_01_IntroMarketplace);
        // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);
        // if (dataForSave.pickedThisScene = true)
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge //edge ist der Härtegrad
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
        let randomTextWithNewEntryMarketplace = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextWithNewEntryMarketplace) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Default--------------------");
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
        // *** DIALOGUE OPTIONS ***
        let firstDialogueElementAnswers = {
            iSayTalkToMama: "Rede mit Mama.",
            iSayTalkToMirrorMerchant: "Mit Spiegelhändler unterhalten.",
            iSayExploreFlowerMerchant: "(Erkunden) Was gibt es Neues beim Blumenhändler?",
            iSayExploreLeatherMerchant: "(Erkunden) Was gibt es Neues beim Lederhändler?",
            iSayContinue: "Weiter",
        };
        console.log("boolean Mama gesprochen: ");
        console.log(Spiegel_VN.dataForSave.pickedChp01_ConvoMother);
        console.log("boolean Mirrormerhant besucht: ");
        console.log(Spiegel_VN.dataForSave.pickedChp01_MirrorMerchant);
        if (!Spiegel_VN.dataForSave.pickedChp01_ConvoMother || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
            !Spiegel_VN.dataForSave.pickedChp01_MirrorMerchant) {
            delete firstDialogueElementAnswers.iSayContinue;
            // return Chp01_CS_ArrivalHome();
        }
        // if (dataForSave.pickedChp01_E_FlowerMerchantScene) {
        //   if (dataForSave.pickedChp01_E_LeatherMerchantScene){
        //   };
        // };
        // if (dataForSave.pickedChp01_E_LeatherMerchantScene){
        // };
        let firstDialogueElement = await Spiegel_VN.ƒS.Menu.getInput(firstDialogueElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayTalkToMama:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Choice TalkToMama + Empathypoints 10.");
                Spiegel_VN.dataForSave.score.scoreEmpathyPoints += 10;
                console.log(Spiegel_VN.dataForSave.score.scoreEmpathyPoints);
                Spiegel_VN.ƒS.Speech.clear();
                return Spiegel_VN.Chp01_02_ConvoMother(); // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case firstDialogueElementAnswers.iSayTalkToMirrorMerchant:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Choice Talk to Mirrormerchant");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return Spiegel_VN.Chp01_03_IntroMirror();
                break;
            case firstDialogueElementAnswers.iSayExploreFlowerMerchant:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Choice (Explore) Talk to flower merchant.");
                Spiegel_VN.ƒS.Speech.clear();
                return Spiegel_VN.Chp01_E_FlowerMerchant();
                break;
            case firstDialogueElementAnswers.iSayExploreLeatherMerchant:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Choice (Explore) Talk to leather merchant.");
                Spiegel_VN.ƒS.Speech.clear();
                return Spiegel_VN.Chp01_E_LeatherMerchant();
                break;
        }
        return Spiegel_VN.Chp01_02_ConvoMother();
    }
    Spiegel_VN.Chp01_01_IntroMarketplace = Chp01_01_IntroMarketplace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_02_ConvoMother() {
        console.log(Spiegel_VN.dlg_scn_02);
        // VAR
        Spiegel_VN.dataForSave.pickedChp01_ConvoMother = true;
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
        await Spiegel_VN.ƒS.update(2);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_02_ConvoMother);
        await Spiegel_VN.ƒS.update(2, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        // *** BEGIN DIALOGUE ***
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_scn_02.maincharacter.T0000);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, Spiegel_VN.dlg_scn_02.Mama.T0000);
        //*** OPTIONS *//
        let secondDialogueElementAnswers = {
            iSayOk: "Okay.",
            iSayYes: "Ja.",
        };
        await Spiegel_VN.ƒS.Speech.tell("Hannahhhh", "Choices sind set");
        if (Spiegel_VN.dataForSave.score.scoreEmpathyPoints === 10) {
            //   let secondDialogueElementAnswers = {
            //     iSayOk: "Freigeschaltete Option 10 EmpathyPoints.",
        }
        //*** CSS-CLASS */
        let secondDialogueElement = await Spiegel_VN.ƒS.Menu.getInput(secondDialogueElementAnswers, "choicesCSSclass");
        //*** RESPONSES */
        switch (secondDialogueElement) {
            case secondDialogueElementAnswers.iSayOk:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Choice Okay.");
                Spiegel_VN.dataForSave.score.scoreEmpathyPoints += 10;
                console.log(Spiegel_VN.dataForSave.score.scoreEmpathyPoints);
                Spiegel_VN.ƒS.Speech.clear();
                return Spiegel_VN.Chp01_01_IntroMarketplace();
                break;
            case secondDialogueElementAnswers.iSayYes:
                //   // continue path here
                //   if (dataForSave.score.scoreCouragePoints === 50)
                //     // wie mindestens 50?
                //     await ƒS.Speech.tell(characters.Mama, "Choice Yes");
                //   ƒS.Speech.clear();
                //   // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                //   // ƒS.Character.hide(characters.Mama);
                return Spiegel_VN.Chp01_01_IntroMarketplace();
                break;
            // case secondDialogueElementAnswers.iSayNo:
            //   // continue path here
            //   await ƒS.Speech.tell(characters.Mama, "Choice No");
            //   ƒS.Speech.clear();
            //   return Chp01_02_ConvoMother();
            //   break;
        }
        return Spiegel_VN.Chp01_01_IntroMarketplace();
    }
    Spiegel_VN.Chp01_02_ConvoMother = Chp01_02_ConvoMother;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_03_IntroMirror() {
        Spiegel_VN.dataForSave.pickedChp01_MirrorMerchant = true;
        await Spiegel_VN.ƒS.Speech.tell("Spiegelhändler", "Hallo ich bin der Spiegelhändler");
        return Spiegel_VN.Chp01_01_IntroMarketplace();
    }
    Spiegel_VN.Chp01_03_IntroMirror = Chp01_03_IntroMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_E_FlowerMerchant() {
        (Spiegel_VN.dataForSave.pickedChp01_E_FlowerMerchantScene = true),
            await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_01_IntroMarketplace); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
        // await ƒS.Location.show(location.Chp01_01_IntroMarketplace);
        // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge //edge ist der Härtegrad
        );
        // ***BEGINN DIALOG ***
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_scn_E_Flowermerchant.maincharacter.T0000);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, Spiegel_VN.dlg_scn_E_Flowermerchant.flowerMerchant.T0000);
        // *** DIALOGUE OPTIONS ***
        let FlowerMerchantDialogueElementAnswers = {
            iSayAskAboutTrip: "(Erkunden) Wie war denn die Reise ins Dorf?",
            iSayAskAboutDecorations: "(Erkunden) Warum habt ihr so wenige Blumen da?",
            iSayLeave: "Auf Wiedersehen!",
        };
        // if (dataForSave.pickedChp01_ConvoMother) {
        //   let FlowerMerchantDialogueElementAnswersItem = {
        //     iBuyFlowers: "Ich möchte ein paar Blumen kaufen!",
        //   };
        let FlowerMerchantDialogueElement = await Spiegel_VN.ƒS.Menu.getInput(FlowerMerchantDialogueElementAnswers, "choicesCSSclass");
        // TRY: IF ELSE FOR DIALOGUE
        // let FlowerMerchantTestDialogue = 5;
        // if (dataForSave.pickediAskAboutTrip) {
        //   let randomTextWithNewEntryMarketplace = ƒ.Random.default.getRangeFloored(
        //     1,
        //     3
        //   ); //gerundet
        //   switch (randomTextWithNewEntryMarketplace) {
        //     case 1:
        //       await ƒS.Speech.tell(
        //         characters.flowerMerchant.name,
        //         "Random dialogue 1 -----------"
        //       );
        //       break;
        //     case 2:
        //       await ƒS.Speech.tell(
        //         characters.flowerMerchant.name,
        //         "Random dialogue 2 -----------"
        //       );
        //       break;
        //     case 3:
        //       await ƒS.Speech.tell(
        //         characters.flowerMerchant.name,
        //         "Random dialogue 3 -----------"
        //       );
        //       break;
        //     default:
        //       await ƒS.Speech.tell(
        //         characters.flowerMerchant.name,
        //         "Defautl dialogue ... how did you get here"
        //       );
        //   }
        // *** RESPONSES ***
        switch (FlowerMerchantDialogueElement) {
            case FlowerMerchantDialogueElementAnswers.iSayAskAboutTrip:
                // continue path here
                (Spiegel_VN.dataForSave.pickediAskAboutTrip = true),
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant, "Antwort auf Frage nach Reise.");
                // dataForSave.score.scoreEmpathyPoints += 10;
                // console.log(dataForSave.score.scoreEmpathyPoints);
                Spiegel_VN.ƒS.Speech.clear();
                return Chp01_E_FlowerMerchant();
                break;
            case FlowerMerchantDialogueElementAnswers.iSayAskAboutDecorations:
                (Spiegel_VN.dataForSave.pickediAskAboutDecorations = true),
                    // continue path here
                    // if (dataForSave.score.scoreCouragePoints === 50)
                    // wie mindestens 50?
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant, "Answer ask about decorations");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return Spiegel_VN.Chp01_02_ConvoMother();
                break;
            case FlowerMerchantDialogueElementAnswers.iSayLeave:
                // continue path here
                // await ƒS.Speech.tell(characters.maincharacter, "Machen Sies gut.");
                Spiegel_VN.ƒS.Speech.clear();
                return Spiegel_VN.Chp01_01_IntroMarketplace();
                break;
            // case firstDialogueElementAnswers.iSayExploreLeatherMerchant:
            //   // continue path here
            //   await ƒS.Speech.tell(
            //     characters.Mama,
            //     "Choice (Explore) Talk to leather merchant."
            //   );
            //   ƒS.Speech.clear();
            //   return Chp01_E_LeatherMerchant();
            //   break;
        }
        // *** FIRST TRY: DELETE OPTION AFTER PICKED
        // let pickediAskAboutTrip: boolean;
        // let pickediAskAboutDecorations: boolean;
        // do {
        //   if (pickediAskAboutTrip) {
        //     delete FlowerMerchantDialogueElementAnswers.iSayAskAboutTrip;
        //   } else if (pickediAskAboutDecorations) {
        //     delete FlowerMerchantDialogueElementAnswers.iSayAskAboutDecorations;
        //   }
        // } while ();
        // SECOND TRY: DELETE OPTION AFTER PICKED
        // let pickediAskAboutTrip: boolean;
        // let pickediAskAboutDecorations: boolean;
        // if (pickediAskAboutDecorations && pickediAskAboutTrip) {
        //   delete FlowerMerchantDialogueElementAnswers.iSayAskAboutDecorations;
        //   delete FlowerMerchantDialogueElementAnswers.iSayAskAboutTrip;
        // }
    }
    Spiegel_VN.Chp01_E_FlowerMerchant = Chp01_E_FlowerMerchant;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_E_LeatherMerchant() {
        (Spiegel_VN.dataForSave.pickedChp01_E_LeatherMerchantScene = true),
            await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_01_IntroMarketplace); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
        // await ƒS.Location.show(location.Chp01_01_IntroMarketplace);
        // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);
        // if (dataForSave.pickedThisScene = true)
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge //edge ist der Härtegrad
        );
        // ***BEGIN DIALOGUE ***
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_scn_E_Leathermerchant.leatherMerchant.T0000);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant.name, Spiegel_VN.dlg_scn_E_Leathermerchant.leatherMerchant.T0000);
        // *** DIALOGUE OPTIONS ***
        let LeatherMerchantDialogueElementAnswers = {
            iSayAskAboutTrip: "(Erkunden) Wie war denn die Reise ins Dorf?",
            iSayAskAboutDecorations: "(Erkunden) Warum habt ihr so wenige Blumen da?",
            iSayLeave: "Auf Wiedersehen!",
        };
        let LeatherMerchantDialogueElement = await Spiegel_VN.ƒS.Menu.getInput(LeatherMerchantDialogueElementAnswers, "choicesCSSclass");
        // *** SWITCHCASE DIALOGUE OPTIONS ***
        switch (LeatherMerchantDialogueElement) {
            case LeatherMerchantDialogueElementAnswers.iSayAskAboutTrip:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, "Oh je ... blabla.");
                // dataForSave.score.scoreEmpathyPoints += 10;
                // console.log(dataForSave.score.scoreEmpathyPoints);
                Spiegel_VN.ƒS.Speech.clear();
                return Spiegel_VN.Chp01_02_ConvoMother();
                break;
            case LeatherMerchantDialogueElementAnswers.iSayAskAboutDecorations:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, "Answer ask about decorations");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return Spiegel_VN.Chp01_02_ConvoMother();
                break;
            case LeatherMerchantDialogueElementAnswers.iSayLeave:
                // continue path here
                // await ƒS.Speech.tell(characters.maincharacter, "Machen Sies gut.");
                Spiegel_VN.ƒS.Speech.clear();
                return Spiegel_VN.Chp01_01_IntroMarketplace();
                break;
            // case firstDialogueElementAnswers.iSayExploreLeatherMerchant:
            //   // continue path here
            //   await ƒS.Speech.tell(
            //     characters.Mama,
            //     "Choice (Explore) Talk to leather merchant."
            //   );
            //   ƒS.Speech.clear();
            //   return Chp01_E_LeatherMerchant();
            //   break;
        }
    }
    Spiegel_VN.Chp01_E_LeatherMerchant = Chp01_E_LeatherMerchant;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_CS_ArrivalHome() {
        await Spiegel_VN.ƒS.Speech.tell("Hannah", "Schleife gelungen bei CS angekommen ------------- AAAAAAAAAAAA");
    }
    Spiegel_VN.Chp01_CS_ArrivalHome = Chp01_CS_ArrivalHome;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_CS_PerchaseMirror() { }
    Spiegel_VN.Chp01_CS_PerchaseMirror = Chp01_CS_PerchaseMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_01_Dinner() {
        (Spiegel_VN.dataForSave.pickedChp02_DinnerScene = true),
            await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_01_IntroMarketplace); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
        // await ƒS.Location.show(location.Chp01_01_IntroMarketplace);
        // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge //edge ist der Härtegrad
        );
        // ***BEGINN DIALOG ***
        // *** EITHER/OR OPTION ***
        // if (pickedYes || pickedBla || pickedNo || pickedOk || pickedYes) {
        //  delete firstDialogueElementAnswers.iSayYes;
        // }
    }
    Spiegel_VN.Chp02_01_Dinner = Chp02_01_Dinner;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_021_TestWithElena() {
    }
    Spiegel_VN.Chp02_021_TestWithElena = Chp02_021_TestWithElena;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_022_TestWithKailani() { }
    Spiegel_VN.Chp02_022_TestWithKailani = Chp02_022_TestWithKailani;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_E_DiscoverGarden() { }
    Spiegel_VN.Chp02_E_DiscoverGarden = Chp02_E_DiscoverGarden;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_03_FightNeighbor() { }
    Spiegel_VN.Chp02_03_FightNeighbor = Chp02_03_FightNeighbor;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_E_DiscoverBedroom() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverBedroom); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
        // await ƒS.Location.show(location.Chp01_01_IntroMarketplace);
        // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge //edge ist der Härtegrad
        );
        await Spiegel_VN.ƒS.Speech.tell("Player", "My eigenes Reich. Wenigstens hier habe ich ein bisschen Privatsphäre...");
    }
    Spiegel_VN.Chp02_E_DiscoverBedroom = Chp02_E_DiscoverBedroom;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_E_DiscoverKitchen() { }
    Spiegel_VN.Chp02_E_DiscoverKitchen = Chp02_E_DiscoverKitchen;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_CS_NewDay() { }
    Spiegel_VN.Chp02_CS_NewDay = Chp02_CS_NewDay;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_CS_Sleep() { }
    Spiegel_VN.Chp02_CS_Sleep = Chp02_CS_Sleep;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_01_Dressmaker() { }
    Spiegel_VN.Chp03_01_Dressmaker = Chp03_01_Dressmaker;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_021_FirewoodKailani() { }
    Spiegel_VN.Chp03_021_FirewoodKailani = Chp03_021_FirewoodKailani;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_022_WaterWellKailani() { }
    Spiegel_VN.Chp03_022_WaterWellKailani = Chp03_022_WaterWellKailani;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_E_DiscoverDonkey() { }
    Spiegel_VN.Chp03_E_DiscoverDonkey = Chp03_E_DiscoverDonkey;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_E_DiscoverForest() { }
    Spiegel_VN.Chp03_E_DiscoverForest = Chp03_E_DiscoverForest;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_E_DiscoverLibrary() { }
    Spiegel_VN.Chp03_E_DiscoverLibrary = Chp03_E_DiscoverLibrary;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_CS_KailaniMissing() { }
    Spiegel_VN.Chp03_CS_KailaniMissing = Chp03_CS_KailaniMissing;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_CS_TurmoilMarketplace() { }
    Spiegel_VN.Chp03_CS_TurmoilMarketplace = Chp03_CS_TurmoilMarketplace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_01_BuildARaft() {
        let Chp09RaftElementAnswers = {
            iSayOk: "Okay.",
            iSayYes: "Ja.",
            iSayNo: "Nein.",
            iSayBla: "Bla",
        };
        // *** RESPONSES ***
        do {
            let Chp09RaftElement = await Spiegel_VN.ƒS.Menu.getInput(Chp09RaftElementAnswers, "choicesCSSclass");
            switch (Chp09RaftElement) {
                case Chp09RaftElementAnswers.iSayOk:
                    // continue path here
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Choice Ok + Empathypoints 10.");
                    Spiegel_VN.dataForSave.score.scoreEmpathyPoints += 10;
                    console.log(Spiegel_VN.dataForSave.score.scoreEmpathyPoints);
                    Spiegel_VN.ƒS.Speech.clear();
                    //   return Chp01_02_ConvoMother(); // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                    break;
                case Chp09RaftElementAnswers.iSayYes:
                    // continue path here
                    // if (dataForSave.score.scoreCouragePoints === 50)
                    // wie mindestens 50?
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Choice Yes");
                    Spiegel_VN.ƒS.Speech.clear();
                    // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                    // ƒS.Character.hide(characters.Mama);
                    //   return Chp01_02_ConvoMother();
                    break;
                case Chp09RaftElementAnswers.iSayNo:
                    // continue path here
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Choice No.");
                    Spiegel_VN.ƒS.Speech.clear();
                    //   return Chp01_E_FlowerMerchant();
                    break;
                case Chp09RaftElementAnswers.iSayBla:
                    Spiegel_VN.dataForSave.pickedRightChoice = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Choice bla.");
                    Spiegel_VN.ƒS.Speech.clear();
                    //   return Chp01_E_LeatherMerchant();
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedRightChoice);
        if (Spiegel_VN.dataForSave.pickedRightChoice) {
            return "01_01 Intro Marketplace";
        }
    }
    Spiegel_VN.Chp09_01_BuildARaft = Chp09_01_BuildARaft;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Auswahlmöglichkeiten() {
        console.log("Test Szene Auswahlmöglichkeiten");
        await Spiegel_VN.ƒS.Speech.tell("Luna", "Test Choices");
        // ---
        let score = 13;
        let TestDialogueAnswers = {
            iSayGreen: "Green.",
            iSayBlue: "Blue",
            iSayEyes: "I luv eyez",
        };
        if (score <= 10) {
            //   delete TestDialogueAnswers.iSayBlue;
            delete TestDialogueAnswers.iSayEyes;
        }
        let TestDialogue = await Spiegel_VN.ƒS.Menu.getInput(TestDialogueAnswers, "choicesCSSclass");
        switch (TestDialogue) {
            case TestDialogueAnswers.iSayBlue:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Hannahh", "I love blue yay");
                break;
            case TestDialogueAnswers.iSayGreen:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Luna", "I love green yay");
                break;
            case TestDialogueAnswers.iSayEyes:
                await Spiegel_VN.ƒS.Speech.tell("Hanahhh", "YOUR COLOR EYEZ ARE MY FAVORITE");
                break;
        }
    }
    Spiegel_VN.Auswahlmöglichkeiten = Auswahlmöglichkeiten;
})(Spiegel_VN || (Spiegel_VN = {}));
//# sourceMappingURL=Template.js.map