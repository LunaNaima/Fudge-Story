"use strict";
var LunasNamespace;
(function (LunasNamespace) {
    // wo gehört dieser code hier dazu? wenn ich nen anderen code schreibe, der dem anderen namespace gehört, muss der andere namespace drin sein
    async function Kap01_01_Intro_Marktplatz() {
        // await ƒS.Sound.fade(sound.backgroundTheme_Marktplatz, 0.1, 1, true);
        // await ƒS.Location.show(location.Kap01_01_Intro_Marktplatz);
        // await ƒS.update(transition.wallpaper.duration, transition.wallpaper.alpha)
        // await
        // let text = {
        //   MC: {
        //     T0001: "", //Text Nr. 1
        //     T0002: "",
        //   },
        //   Protagonistin: {
        //     T0000: "Was geht",
        //     T0001: "Funktioniert das?",
        //     T0002: "Ich hoffe doch!",
        //   },
        // };
    }
    LunasNamespace.Kap01_01_Intro_Marktplatz = Kap01_01_Intro_Marktplatz;
})(LunasNamespace || (LunasNamespace = {}));
var LunasNamespace;
(function (LunasNamespace) {
    LunasNamespace.ƒ = FudgeCore; //importiert teile, die nicht in typescript sind, sondern außerhalb in fudge
    LunasNamespace.ƒS = FudgeStory;
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
    LunasNamespace.NameDerFunktion = NameDerFunktion;
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
    LunasNamespace.Addition = Addition;
    Addition();
    Addition(4, 7);
    Addition(x, y);
    // //vorher kommentieren, was man hier macht, in dem fall export transitions
    LunasNamespace.dataForSave = {
        // hier kommt alles rein, was gespeichert werden soll. Der Spielstand wird von Beginn der jeweiligen Szene gespeichert.
        nameProtagonist: "",
        score: 0, // wenn es zb Punktestand gibt
    };
    function showCredits() {
        LunasNamespace.ƒS.Text.setClass("class2"); // setclass = löscht vorherige Klasse und übergeht formatierungen davor (vorherige infos werden gelöscht und nur die setclass wird angezeigt). addclass fügt Klasse hinzu
        // (wenns vorher eine addclass gab, dann wird vorherige gestaltung nicht gelöscht. also alte formatierung von css option sehen wir noch) bei szenenwechsel können wir addclass nehmen.
        LunasNamespace.ƒS.Text.print(""); // hier credits rein schreiben, damit erscheint eine novelpage bzw eine Box, in der der text steht
    }
    LunasNamespace.showCredits = showCredits;
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
    // asynchrone Funktionen, 1x für button, 1x für eventlistener (für shortcuts)
    async function buttonFunctionalities(_option) {
        console.log(_option); // sicherheitshalber anzeigen lassen, damit man weiß, was passiert
        switch (_option) {
            case inGameMenuButtons.save:
                await LunasNamespace.ƒS.Progress.save(); // save und load Funktionen sind schon in Progress klasse definiert
                break;
            case inGameMenuButtons.load:
                await LunasNamespace.ƒS.Progress.load();
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
            case LunasNamespace.ƒ.KEYBOARD_CODE.ARROW_DOWN: // hier kann man taste auswählen, achtung: amerikanisches keyboard hier!
                console.log("Save");
                await LunasNamespace.ƒS.Progress.save();
                break;
            case LunasNamespace.ƒ.KEYBOARD_CODE.ARROW_LEFT:
                console.log("Load");
                await LunasNamespace.ƒS.Progress.load();
                break;
            case LunasNamespace.ƒ.KEYBOARD_CODE.M: //M steht für Menu
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
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = LunasNamespace.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");
        buttonFunctionalities("Close");
        let scenes = [
            { scene: LunasNamespace.ScnTestzene01, name: "Testszene 01" }, // scene: hier muss name von funktion rein! Name ist was anderes, kann spaces enthalten wegen string
        ];
        let uiElement = document.querySelector("[type=interface]");
        LunasNamespace.dataForSave = LunasNamespace.ƒS.Progress.setData(LunasNamespace.dataForSave, uiElement);
        // start the sequence
        LunasNamespace.ƒS.Progress.go(scenes);
    }
})(LunasNamespace || (LunasNamespace = {}));
var LunasNamespace;
(function (LunasNamespace) {
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
    LunasNamespace.Scene = Scene;
})(LunasNamespace || (LunasNamespace = {}));
var LunasNamespace;
(function (LunasNamespace) {
    LunasNamespace.characters = {
        // hier sollten alle char rein
        narrator: {
            name: "",
        },
        maincharacter: {
            name: "DeinNameHier",
        },
        Mama: {
            name: "Leijla",
            origin: LunasNamespace.ƒS.ORIGIN.BOTTOMCENTER,
            //   pose: {
            //     angry: "/Pfad", //nicht nur pose, sondern auch Mimik beschreiben
            //     happy: "/Pfad",
            //     sad: "/Pfad",
            //   },
        },
        Mutti: {
            name: "Elena",
            origin: LunasNamespace.ƒS.ORIGIN.BOTTOMCENTER,
            //   pose: {
            //     angry: "",
            //   },
        },
    };
})(LunasNamespace || (LunasNamespace = {}));
var LunasNamespace;
(function (LunasNamespace) {
    LunasNamespace.score = {
        //score ist ein objekt
        punkte: 0,
        teeGetrunken: false,
    };
    LunasNamespace.scoreMutti = {
        punkte: 0,
        affection: 0,
        vorgestellt: false, // alles was ich hier festlege, ist grundsätzlich. grundsätzlich fang ich das spiel an und sage, elena hat sich noch nciht vorgestellt, also false
    };
})(LunasNamespace || (LunasNamespace = {}));
var LunasNamespace;
(function (LunasNamespace) {
    async function ScnTestzene01() {
        //hier wird eine asynch funktion exportiert, wie heißt die funktion? in diesem fall name funktion = name von szene
        console.log(LunasNamespace.characters.maincharacter.name); // console = konsole, log = befehl, der sagt, was ausgegeben wird (was in der klammer). was ausgegeben werden soll: heir wird ausgegeben, was ich rein schreibe, zum debuggen udn verstehen, was mein programm tut, wie ein wegweiser. Am ende der Sache kann ich den Namen der jeweiligen Szene eingeben, is nur für mich & für Prof
        await LunasNamespace.ƒS.Speech.tell("Bab", "Hallo, ich bin Bab."); //fs = ich greife auf die library zu, was jmdn anders (jirka) schon für die library programmiert hat.
        await LunasNamespace.ƒS.Speech.tell("Xenoi", "Hallo, ich bin Xeni.");
        await LunasNamespace.ƒS.Speech.tell(LunasNamespace.characters.maincharacter.name, "Hallo, ich bin Dein Name.");
        return LunasNamespace.ScnTestzene02();
    }
    LunasNamespace.ScnTestzene01 = ScnTestzene01;
})(LunasNamespace || (LunasNamespace = {}));
var LunasNamespace;
(function (LunasNamespace) {
    async function ScnTestzene02() {
        console.log("Status: ", LunasNamespace.scoreMutti.vorgestellt);
        //hier wird eine asynch funktion exportiert, wie heißt die funktion? in diesem fall name funktion = name von szene
        console.log("Punktestand Mutti: ", LunasNamespace.scoreMutti.punkte); // console = konsole, log = befehl, der sagt, was ausgegeben wird (was in der klammer). was ausgegeben werden soll: heir wird ausgegeben, was ich rein schreibe, zum debuggen udn verstehen, was mein programm tut, wie ein wegweiser
        await LunasNamespace.ƒS.Speech.tell("Bab", "Neue szene bklqsjhdui."); //fs = ich greife auf die library zu, was jmdn anders (jirka) schon für die library programmiert hat.
        if (LunasNamespace.scoreMutti.vorgestellt == true) {
            // mit == fragen wir, ob etwas true ist. = heißt, wir weisen einen Wert etw zu.
            await LunasNamespace.ƒS.Speech.tell(LunasNamespace.characters.Mutti.name, "Mich kennt ihr ja schon.");
            LunasNamespace.scoreMutti.punkte = LunasNamespace.scoreMutti.punkte + 1;
        }
        if (LunasNamespace.scoreMutti.vorgestellt == false) {
            await LunasNamespace.ƒS.Speech.tell(LunasNamespace.characters.Mutti.name, "Hallo, ich bin Elena.");
            LunasNamespace.scoreMutti.vorgestellt = true;
        }
        if (LunasNamespace.scoreMutti.punkte >= 6) {
            await LunasNamespace.ƒS.Speech.tell(LunasNamespace.characters.Mutti.name, "Möchtest du etwas tee?");
            let decisionButtons01 = {
                // !hier! wird decisionsbuttons01 definiert, wegen let // decisionsbuttons ist ein Objekt
                decisionYes: "Yes",
                decisionNo: "No",
            };
            let decision = await LunasNamespace.ƒS.Menu.getInput(decisionButtons01, "decisionButtons" // hier umbennen und mit css bearbeiten
            );
            switch (decision //switch case = besseres if. statt ich 32809x if schreib, fargt switch: was is das ding? dieser input = yes or no. switch kann alles abfragen. muss schauen, was wann nützlich ist
            ) {
                case decisionButtons01.decisionYes:
                    await LunasNamespace.ƒS.Speech.tell(LunasNamespace.characters.Mutti.name, "Hier bitte, eine schöne Tasse Tee. Frisch gekocht.");
                    break;
                case decisionButtons01.decisionNo:
                    await LunasNamespace.ƒS.Speech.tell(LunasNamespace.characters.Mutti.name, "Nein? Dann hattest du wohl schon Tee. Freut mich zu hören! Viel spaß bei denen Freunden.");
                    return LunasNamespace.ScnTestzene01();
                    break;
                default:
                    await LunasNamespace.ƒS.Speech.tell(LunasNamespace.characters.Mutti.name, "Default wird verwendet, wenn keiner der Fälle im Switch case zutrifft..");
                    break;
            }
        }
        return ScnTestzene02();
    }
    LunasNamespace.ScnTestzene02 = ScnTestzene02;
})(LunasNamespace || (LunasNamespace = {}));
//# sourceMappingURL=Template.js.map