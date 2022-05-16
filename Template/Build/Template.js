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
    // funktionen machen was mit Zeug innendrin, Fabrik mit Heinzelmännchen, ich leg denen was rein und die machen was damit
    function NameDerFunktion() {
        // hiermit habe ich funktionen initiiert, aber ich benutze sie nirgendwo
        console.log("irgendwas");
    } // export heißt, dass diese funktion auch von anderen szenen aufrufbar ist
    Spiegel_VN.NameDerFunktion = NameDerFunktion;
    NameDerFunktion();
    NameDerFunktion();
    NameDerFunktion();
    NameDerFunktion();
    NameDerFunktion();
    function Addition(Zahl1 = 1, Zahl2 = 2) {
        // 1 und 2 sind nur default werte
        let summe = Zahl1 + Zahl2;
        console.log("Die Summe von Zahl1 und Zahl2 ist");
        console.log(summe);
    }
    Spiegel_VN.Addition = Addition;
    Addition();
    Addition(4, 7);
    Addition(x, y);
    // //vorher kommentieren, was man hier macht, in dem fall export transitions
    Spiegel_VN.dataForSave = {
        // hier kommt alles rein, was gespeichert werden soll. Der Spielstand wird von Beginn der jeweiligen Szene gespeichert.
        nameProtagonist: "",
        score: 0, // wenn es zb Punktestand gibt
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
            { scene: Spiegel_VN.Chp01_01_IntroMarketplace, name: "01_01_IntroMarketplace" },
            { scene: Spiegel_VN.Chp01_E_FlowerMerchant, name: "E_FlowerMerchant" },
            { scene: Spiegel_VN.Chp01_E_LeatherMerchant, name: "E_LeatherMerchant" },
            { scene: Spiegel_VN.Chp01_02_ConvoMother, name: "01_03_ConvoMother" },
            { scene: Spiegel_VN.Chp01_03_IntroMirror, name: "01_04_IntroMirror" },
            { scene: Spiegel_VN.Chp02_01_Dinner, name: "02_01_Dinner" },
            { scene: Spiegel_VN.Chp02_021_TestWithElena, name: "02_021_TestWithElena" },
            { scene: Spiegel_VN.Chp02_022_TestWithKailani, name: "02_022_TestWithKailani" },
            { scene: Spiegel_VN.Chp02_03_FightNeighbor, name: "02_03_FightNeighbor" },
            { scene: Spiegel_VN.Chp02_E_DiscoverBedroom, name: "E_Bedroom" },
            { scene: Spiegel_VN.Chp02_E_DiscoverGarden, name: "E_Garden" },
            { scene: Spiegel_VN.Chp02_E_DiscoverKitchen, name: "E_Kitchen" },
            { scene: Spiegel_VN.Chp03_01_Dressmaker, name: "03_01_Dressmaker" },
            { scene: Spiegel_VN.Chp03_E_DiscoverDonkey, name: "E_Donkey" },
            { scene: Spiegel_VN.Chp03_E_DiscoverForest, name: "E_Forest" },
            { scene: Spiegel_VN.Chp03_E_DiscoverLibrary, name: "E_Library" },
            { scene: Spiegel_VN.Chp03_021_FirewoodKailani, name: "03_021_FirewoodKailani" },
            { scene: Spiegel_VN.Chp03_022_WaterWellKailani, name: "03_022_WaterWellKailani" },
            { scene: Spiegel_VN.Chp03_03_TurmoilMarketplace, name: "03_TurmoilMarketplace" },
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
        Spiegel_VN.ƒS.Sound.play(sound.sanity, 0.025, false);
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
        // hier sollten alle char rein
        maincharacter: {
            name: "DeinNameHier",
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
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.locations = {
        Chp01_01_IntroMarketplace: {
            name: "Intro_Marktplatz",
            background: "./Assets/Backgrounds/Kap01_01_Intro_Marktplatz.png",
        },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
;
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
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.transitions = {
        puzzle: {
            duration: 4,
            alpha: "./Assets/Transitions/Black.png",
            edge: 0.1,
        },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.dlg_scn_01 = {
        maincharacter: {
            T0000: "Test Intro Marketplace bla.",
            T0001: "Test 0001 Marketplace bla.",
        },
        Mama: {
            T0000: "Test Mama Dialogue Chpater01_01.",
            T0001: "Test Mama dlg t0001.",
        },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.dlg_scn_02 = {
        maincharacter: {
            T0000: "Test Intro Marketplace bla.",
            T0001: "Test 0001 Marketplace bla.",
        },
        Mama: {
            T0000: "Test Mama Dialogue Chpater01_01.",
            T0001: "Test Mama dlg t0001.",
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
    async function Chp01_01_IntroMarketplace() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_01_IntroMarketplace); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
        // await ƒS.Location.show(location.Chp01_01_IntroMarketplace);
        // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.puzzle.duration, Spiegel_VN.transitions.puzzle.alpha, Spiegel_VN.transitions.puzzle.edge //edge ist der Härtegrad
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
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_scn_01.maincharacter.T0000);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, Spiegel_VN.dlg_scn_01.Mama.T0000);
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
    Spiegel_VN.Chp01_01_IntroMarketplace = Chp01_01_IntroMarketplace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_02_ConvoMother() { }
    Spiegel_VN.Chp01_02_ConvoMother = Chp01_02_ConvoMother;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_03_IntroMirror() { }
    Spiegel_VN.Chp01_03_IntroMirror = Chp01_03_IntroMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_E_FlowerMerchant() { }
    Spiegel_VN.Chp01_E_FlowerMerchant = Chp01_E_FlowerMerchant;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_E_LeatherMerchant() { }
    Spiegel_VN.Chp01_E_LeatherMerchant = Chp01_E_LeatherMerchant;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_01_Dinner() { }
    Spiegel_VN.Chp02_01_Dinner = Chp02_01_Dinner;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_021_TestWithElena() { }
    Spiegel_VN.Chp02_021_TestWithElena = Chp02_021_TestWithElena;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_022_TestWithKailani() { }
    Spiegel_VN.Chp02_022_TestWithKailani = Chp02_022_TestWithKailani;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_03_FightNeighbor() { }
    Spiegel_VN.Chp02_03_FightNeighbor = Chp02_03_FightNeighbor;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_E_DiscoverBedroom() { }
    Spiegel_VN.Chp02_E_DiscoverBedroom = Chp02_E_DiscoverBedroom;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_E_DiscoverGarden() { }
    Spiegel_VN.Chp02_E_DiscoverGarden = Chp02_E_DiscoverGarden;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_E_DiscoverKitchen() { }
    Spiegel_VN.Chp02_E_DiscoverKitchen = Chp02_E_DiscoverKitchen;
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
    async function Chp03_03_TurmoilMarketplace() { }
    Spiegel_VN.Chp03_03_TurmoilMarketplace = Chp03_03_TurmoilMarketplace;
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
//# sourceMappingURL=Template.js.map