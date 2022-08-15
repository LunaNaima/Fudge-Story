"use strict";
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
        pickedChp01_E_FlowerMerchantScene: false,
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
    Spiegel_VN.inventory = {
        apple: {
            name: "Apfel",
            description: "fruit",
            image: "./Assets/Items/apple.png",
            static: true // so wird es nicht konsumiert. wenn ich static ausklammere, kann ich drauf klicken und es ist weg
        }
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
        credits: "Credits"
    }; // volume noch dazu
    let gameMenu; // später, wenn wir das menu erstellen, heißt das hier: wir erstellen es mit den und den buttons
    let menuIsOpen = true; // abfragen, ob menu offen (true) oder geschlossen (false) ist
    let inventoryIsOpen = false;
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
        let ctrlPressed = Spiegel_VN.ƒ.Keyboard.isPressedOne([Spiegel_VN.ƒ.KEYBOARD_CODE.CTRL_LEFT, Spiegel_VN.ƒ.KEYBOARD_CODE.CTRL_RIGHT]);
        switch (_event.code) {
            case Spiegel_VN.ƒ.KEYBOARD_CODE.S: // hier kann man taste auswählen, achtung: amerikanisches keyboard hier!
                if (!ctrlPressed)
                    break;
                console.log("Save");
                await Spiegel_VN.ƒS.Progress.save();
                break;
            case Spiegel_VN.ƒ.KEYBOARD_CODE.L:
                if (!ctrlPressed)
                    break;
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
                if (inventoryIsOpen) {
                    console.log("Inventory Close");
                    Spiegel_VN.ƒS.Inventory.close();
                    inventoryIsOpen = false; // wenn ich m drücke, und das menu geöffnet is, schließe das menu. wenn es offen ist:
                }
                else {
                    console.log("Inventory Open");
                    Spiegel_VN.ƒS.Inventory.open();
                    inventoryIsOpen = true;
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
            {
                id: "TestTunnel",
                scene: Spiegel_VN.testTunnel,
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
                scene: Spiegel_VN.Chp01_00_IntroNarration,
                name: "Intro Narration"
            },
            {
                id: "01_01 Intro Marketplace",
                scene: Spiegel_VN.Chp01_01_IntroMarketplace,
                name: "Intro marketplace"
            },
            {
                id: "01_E_FlowerMerchant",
                scene: Spiegel_VN.Chp01_E_FlowerMerchant,
                name: "E_FlowerMerchant"
            },
            {
                id: "01_E_LeatherMerchant",
                scene: Spiegel_VN.Chp01_E_LeatherMerchant,
                name: "E_LeatherMerchant"
            },
            {
                id: "01_02 Conversation Mama",
                scene: Spiegel_VN.Chp01_02_ConvoMother,
                name: "ConvoMother",
                next: "01_01 Intro Marketplace"
            },
            {
                id: "01_03 MirrorMerchant",
                scene: Spiegel_VN.Chp01_03_IntroMirror,
                name: "IntroMirror"
            },
            // *** CUTSCENES CHP01***
            {
                id: "01_CS PerchaseMirror",
                scene: Spiegel_VN.Chp01_CS_PerchaseMirror,
                name: "CS: PerchaseMirror"
            },
            {
                id: "01_CS Arrival Home",
                scene: Spiegel_VN.Chp01_CS_ArrivalHome,
                name: "CS: ArrivalHome"
            },
            // ***CHAPTER 02: FAMILY HOME ***
            {
                id: "02_01 Dinner at home",
                scene: Spiegel_VN.Chp02_01_Dinner,
                name: "Dinner"
            },
            {
                id: "02_021 Test Mirror",
                scene: Spiegel_VN.Chp02_021_TestMirror,
                name: "Test mirror"
            },
            // { brauch ich  nicht mehr
            //   id: "02_022 Test with Kailani",
            //   scene: Chp02_022_TestWithKailani,
            //   name: "Test with Kailani",
            // },
            {
                id: "02_03 Fight with neighbor",
                scene: Spiegel_VN.Chp02_03_FightNeighbor,
                name: "FightNeighbor"
            },
            {
                id: "02_E Discover bedroom",
                scene: Spiegel_VN.Chp02_E_DiscoverBedroom,
                name: "E_Bedroom"
            },
            {
                id: "02_03 Pick Herbs",
                scene: Spiegel_VN.Chp02_03_PickHerbs,
                name: "E_Garden"
            },
            {
                id: "02_E Discover Kitchen",
                scene: Spiegel_VN.Chp02_E_DiscoverKitchen,
                name: "E_Kitchen"
            },
            // CUTSCENES ***
            { id: "02_CS Sleep", scene: Spiegel_VN.Chp02_CS_Sleep, name: "CS: Sleep" },
            { id: "02_CS New day", scene: Spiegel_VN.Chp02_CS_NewDay, name: "CS: New Day" },
            // *** CHAPTER 03: VILLAGE ***
            {
                id: "03_01 Dressmaker",
                scene: Spiegel_VN.Chp03_01_Dressmaker,
                name: "Dressmaker"
            },
            {
                id: "03_E Discover donkey",
                scene: Spiegel_VN.Chp03_E_DiscoverDonkey,
                name: "E_Donkey"
            },
            {
                id: "03_E Discover Forest",
                scene: Spiegel_VN.Chp03_E_DiscoverForest,
                name: "E_Forest"
            },
            {
                id: "03_E Discover Library",
                scene: Spiegel_VN.Chp03_E_DiscoverLibrary,
                name: "E_Library"
            },
            {
                id: "03_021 Chores with Kailani",
                scene: Spiegel_VN.Chp03_021_ChoresWithKailani,
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
                scene: Spiegel_VN.Chp03_CS_TurmoilMarketplace,
                name: "CS: TurmoilMarketplace"
            },
            {
                id: "03_CS Kailani is missing",
                scene: Spiegel_VN.Chp03_CS_KailaniMissing,
                name: "CS: Kailani is missing"
            },
            // *** CHAPTER 04 RESEARCH ***
            {
                id: "04_01 Talk with family",
                scene: Spiegel_VN.Chp04_01_TalkWithFamily,
                name: "Talk with family"
            },
            {
                id: "04_02 Talk with Elena",
                scene: Spiegel_VN.Chp04_02_TalkWithElena,
                name: "Talk with Elena"
            },
            {
                id: "04_03 Research library",
                scene: Spiegel_VN.Chp04_03_ResearchLibrary,
                name: "Research library"
            },
            {
                id: "04_E_Examine mirror",
                scene: Spiegel_VN.Chp04_E_ExamineMirror,
                name: "Examine Mirror"
            },
            {
                id: "04_E Search garden",
                scene: Spiegel_VN.Chp04_E_SearchGarden,
                name: "Search garden"
            },
            {
                id: "04_E Search ground floor",
                scene: Spiegel_VN.Chp04_E_SearchGroundFloor,
                name: "Search ground floor"
            },
            {
                id: "04_CS Entry forest",
                scene: Spiegel_VN.Chp04_CS_EntryForest,
                name: "Entry forest"
            },
            // *** CHAPTER 05: FOREST
            { id: "05_01 Clearing", scene: Spiegel_VN.Chp05_01_Clearing, name: "Clearing" },
            {
                id: "05_02 Sing to birds",
                scene: Spiegel_VN.Chp05_02_SingToBirds,
                name: "Sing to birds"
            },
            { id: "05_03 Feed birds", scene: Spiegel_VN.Chp05_03_FeedBirds, name: "Feed birds" },
            {
                id: "05_E Discover oak",
                scene: Spiegel_VN.Chp05_E_DiscoverOak,
                name: "Discover oak"
            },
            {
                id: "05_E Discover river",
                scene: Spiegel_VN.Chp05_E_DiscoverRiver,
                name: "Discover river"
            },
            {
                id: "05_CS Go home",
                scene: Spiegel_VN.Chp05_CS_GoHome,
                name: "Go home"
            },
            // *** CHAPTER 06: DEPARTURE
            {
                id: "06_02 Recieve iron",
                scene: Spiegel_VN.Chp06_02_ReceiveItemMama,
                name: "Recieve item from Mama"
            },
            {
                id: "06_03 Departure",
                scene: Spiegel_VN.Chp06_03_DepartureRiver,
                name: "Departure"
            },
            {
                id: "06_CS Arrival Meadow",
                scene: Spiegel_VN.Chp06_CS_ArrivalMeadow,
                name: "Arrival meadow"
            },
            // *** CHAPTER 07: ARRIVAL MIRRORWORLD
            {
                id: "07_01 Travel to to Whary",
                scene: Spiegel_VN.Chp07_02_TravelToWhary,
                name: "Departure city"
            },
            {
                id: "07_E Discover flowers",
                scene: Spiegel_VN.Chp07_E_DiscoverFlowers,
                name: "Discover flowers"
            },
            {
                id: "07_E Discover bees",
                scene: Spiegel_VN.Chp07_E_DiscoverBees,
                name: "Discover bees"
            },
            {
                id: "07_CS Line at gates",
                scene: Spiegel_VN.Chp07_CS_LineAtGates,
                name: "Line at the gates"
            },
            // *** CHAPTER 08: In Whary ***
            {
                id: "08_01 Meet Flynn gates",
                scene: Spiegel_VN.Chp08_01_MeetFlynnAtGates,
                name: "Meet Flynn at the gates"
            },
            {
                id: "08_02 Meet Flynn in alley",
                scene: Spiegel_VN.Chp08_02_MeetFlynnInAlley,
                name: "Meet Flynn in alley"
            },
            {
                id: "08_03 Enter City",
                scene: Spiegel_VN.Chp08_03_EnterCity,
                name: "Enter city"
            },
            {
                id: "08_04 Choose stay",
                scene: Spiegel_VN.Chp08_04_ChooseStay,
                name: "Choose stay"
            },
            {
                id: "08_041 Choose nice stay",
                scene: Spiegel_VN.Chp08_041_ChooseNiceStay,
                name: "Choose nice stay"
            },
            {
                id: "08_042 Choose ugly stay",
                scene: Spiegel_VN.Chp08_042_ChooseUglyStay,
                name: "Choose ugly stay"
            },
            {
                id: "08_0411 Nice stay with Flynn",
                scene: Spiegel_VN.Chp08_0411_NiceStayFlynn,
                name: "Nice stay with Flynn"
            },
            {
                id: "08_0421 Ugly stay with Flynn",
                scene: Spiegel_VN.Chp08_0421_UglyStayFlynn,
                name: "Ugly stay with Flynn"
            },
            {
                id: "08_E Discover Hay",
                scene: Spiegel_VN.Chp08_E_DiscoverHay,
                name: "Discover hay"
            },
            {
                id: "08_E Discover Villagers",
                scene: Spiegel_VN.Chp08_E_DiscoverVillagers,
                name: "Discover villagers"
            },
            {
                id: "08_E Discover windows",
                scene: Spiegel_VN.Chp08_E_DiscoverWindows,
                name: "Discover windows"
            },
            {
                id: "08_CS Talk To Flynn",
                scene: Spiegel_VN.Chp08_CS_TalkToFlynn,
                name: "Talk to Flynn"
            },
            {
                id: "08_CS Sleep & new day",
                scene: Spiegel_VN.Chp08_CS_Sleep,
                name: "Go to sleep"
            },
            // *** CHAPTER 09:
            {
                id: "09_01 Research Marketplace",
                scene: Spiegel_VN.Chp09_01_ResearchMarketplace,
                name: "Research Marketplace"
            },
            {
                id: "09_011 Beggar",
                scene: Spiegel_VN.Chp09_011_Beggar,
                name: "Beggar scene"
            },
            // {
            //   id: "09_011 Speak to Beggar",
            //   scene: Chp09_011_Beggar,
            //   name: "Speak to Beggar",
            // },
            {
                id: "09_012 Make a wish",
                scene: Spiegel_VN.Chp09_012_MakeAWish,
                name: "Make a wish"
            },
            {
                id: "09_02 TalkToInnkeeper",
                scene: Spiegel_VN.Chp09_02_TalkToInnkeeper,
                name: "Talk to innkeeper"
            },
            {
                id: "09_03 TalkToCook",
                scene: Spiegel_VN.Chp09_03_TalkToCook,
                name: "Talk to cook"
            },
            {
                id: "09_04 Talk to stablehand",
                scene: Spiegel_VN.Chp09_04_TalkToStablehand,
                name: "Talk to stablehand"
            },
            {
                id: "09_E Listen to villagers",
                scene: Spiegel_VN.Chp09_E_ListenToVillagers,
                name: "Listen to villagers"
            },
            {
                id: "09_13 Talk to merchants",
                scene: Spiegel_VN.Chp09_E_TalkToMerchants,
                name: "Talk to merchants"
            },
            {
                id: "09_14 Speak to villagers",
                scene: Spiegel_VN.Chp09_E_SpeakToVillagers,
                name: "Speak to villagers"
            },
            {
                id: "09_CS Arrival lake",
                scene: Spiegel_VN.Chp09_CS_ArrivalLake,
                name: "Arrival at lake"
            },
            // *** CHAPTER 10: CROSSING LAKE ***
            {
                id: "10_01 How to cross",
                scene: Spiegel_VN.Chp10_01_HowToCross,
                name: "How to cross"
            },
            {
                id: "10_02 On the raft",
                scene: Spiegel_VN.Chp10_02_OnTheRaft,
                name: "Build a raft"
            },
            {
                id: "10_03 Cross lake",
                scene: Spiegel_VN.Chp10_03_CrossLake,
                name: "Crossing the lake"
            },
            {
                id: "10_04 Attack birds",
                scene: Spiegel_VN.Chp10_04_AttackBirds,
                name: "Attack from birds"
            },
            {
                id: "10_041 Sing to birds",
                scene: Spiegel_VN.Chp10_041_SingToBirds,
                name: "Sing to birds"
            },
            {
                id: "10_042 Use Mirror",
                scene: Spiegel_VN.Chp10_042_UseMirror,
                name: "Use the mirror"
            },
            {
                id: "10_051 Birds become friendly",
                scene: Spiegel_VN.Chp10_051_FriendlyBirds,
                name: "Birds become friendly"
            },
            {
                id: "10_052 Birds disappear",
                scene: Spiegel_VN.Chp10_052_BirdsDisappear,
                name: "Birds disappear"
            },
            {
                id: "10_E Discover City lights Whary",
                scene: Spiegel_VN.Chp10_E_CityLightsWhary,
                name: "Discover city lights"
            },
            {
                id: "10_E Discover lake",
                scene: Spiegel_VN.Chp10_E_DiscoverLake,
                name: "Discover lake"
            },
            {
                id: "10_E Discover lakewater",
                scene: Spiegel_VN.Chp10_E_DiscoverLakewater,
                name: "Discover lakewater"
            },
            {
                id: "10_CS Arrival other side",
                scene: Spiegel_VN.Chp10_CS_ArrivalOtherSide,
                name: "Arrival other side"
            },
            // *** CHAPTER 11: SCOUTING FACTORY ***
            {
                id: "11_01 Search for hiding place",
                scene: Spiegel_VN.Chp11_01_SearchHidingPlace,
                name: "Search for hiding place"
            },
            {
                id: "11_02 Find iron",
                scene: Spiegel_VN.Chp11_02_FindIron,
                name: "Find iron"
            },
            {
                id: "11_03 Watch factory",
                scene: Spiegel_VN.Chp11_03_WatchFactory,
                name: "WatchFactory"
            },
            {
                id: "11_04 Try break-in",
                scene: Spiegel_VN.Chp11_04_TryBreakIn,
                name: "Try to break-in"
            },
            {
                id: "11_E Discover forest",
                scene: Spiegel_VN.Chp11_E_DiscoverForest,
                name: "Discover forest"
            },
            {
                id: "11_E Discover huts",
                scene: Spiegel_VN.Chp11_E_DiscoverHuts,
                name: "Discover huts"
            },
            {
                id: "11_E Discover tower",
                scene: Spiegel_VN.Chp11_E_DiscoverTower,
                name: "Discover tower"
            },
            {
                id: "11_CS Sleep",
                scene: Spiegel_VN.Chp11_CS_Sleep,
                name: "Sleep"
            },
            // *** CHAPTER 12: ENTRY FACTORY
            {
                id: "12_011 Sneak-in",
                scene: Spiegel_VN.Chp12_011_SneakIn,
                name: "Sneak-in"
            },
            {
                id: "12_012 Sneak-in amongst slaves",
                scene: Spiegel_VN.Chp12_012_SneakAmongSlaves,
                name: "Sneak-in amongst slaves"
            },
            {
                id: "12_02 Enter factory",
                scene: Spiegel_VN.Chp12_02_EnterFactory,
                name: "Enter factory"
            },
            {
                id: "12_031 Talk to slaves",
                scene: Spiegel_VN.Chp12_031_TalkToSlaves,
                name: "Talk to slaves"
            },
            {
                id: "12_032 Search for Kailani",
                scene: Spiegel_VN.Chp12_032_SearchForKailani,
                name: "Search for Kailani"
            },
            {
                id: "12_033 Listen to guards",
                scene: Spiegel_VN.Chp12_033_ListenToGuards,
                name: "Listen to guards"
            },
            {
                id: "12_04 Back to hiding place",
                scene: Spiegel_VN.Chp12_04_BackToHidingPlace,
                name: "Back to hiding place"
            },
            {
                id: "12_051 Birds offer help",
                scene: Spiegel_VN.Chp12_051_BirdsOfferHelp,
                name: "Birds offer help"
            },
            {
                id: "12_052 Make a wish",
                scene: Spiegel_VN.Chp12_052_MakeAWish,
                name: "Make a wish"
            },
            {
                id: "12_E Discover village",
                scene: Spiegel_VN.Chp12_E_DiscoverVillage,
                name: "Discover village"
            },
            {
                id: "12_E Discover production site",
                scene: Spiegel_VN.Chp12_E_Productionsite,
                name: "Production site"
            },
            {
                id: "12_CS Talk to Flynn",
                scene: Spiegel_VN.Chp12_CS_TalkToFlynn,
                name: "Talk to Flynn"
            },
            // *** CHAPTER 13: THE GREAT ORDEAL ***
            {
                id: "13_01 Entry village",
                scene: Spiegel_VN.Chp13_01_EntryVillage,
                name: "Entry village"
            },
            {
                id: "13_02 Get into tower",
                scene: Spiegel_VN.Chp13_02_GetIntoTower,
                name: "Go to tower"
            },
            {
                id: "13_03 Entry tower",
                scene: Spiegel_VN.Chp13_03_EntryTower,
                name: "Entry tower"
            },
            {
                id: "10_04 Sneak past demon",
                scene: Spiegel_VN.Chp13_04_SneakPastDemon,
                name: "Sneak past demon"
            },
            {
                id: "13_E Discover family portrait",
                scene: Spiegel_VN.Chp13_E_DiscoverFamilyPortrait,
                name: "Discover family portrait"
            },
            {
                id: "13_E Discover locked door",
                scene: Spiegel_VN.Chp13_E_DiscoverLockedDoor,
                name: "Discover locked door"
            },
            {
                id: "13_E Sneak around tower",
                scene: Spiegel_VN.Chp13_E_DiscoverSneakAround,
                name: "Discover sneak around tower"
            },
            {
                id: "13_E Discover tower window",
                scene: Spiegel_VN.Chp13_E_DiscoverTowerWindow,
                name: "Discover tower window"
            },
            {
                id: "13_E Discover watch guard",
                scene: Spiegel_VN.Chp13_E_DiscoverWatchGuard,
                name: "Discover watch guard"
            },
            {
                id: "13_CS Entry mirror room",
                scene: Spiegel_VN.Chp13_CS_EntryMirrorRoom,
                name: "Entry mirror room"
            },
            // *** CHAPTER 14.1: GOOD ENDING
            {
                id: "14.1_01 Destroy mirror",
                scene: Spiegel_VN.Chp141_01_DestroyMirror,
                name: "Destroy mirror"
            },
            {
                id: "14.1_02 Demon dies",
                scene: Spiegel_VN.Chp141_02_DemonDies,
                name: "Demon dies"
            },
            {
                id: "14.1_CS Balcony tower",
                scene: Spiegel_VN.Chp14_CS_BalconyTower,
                name: "Balcony tower"
            },
            // CHAPTER 14.2: BAD ENDING
            {
                id: "14.2_01 Realization mirror",
                scene: Spiegel_VN.Chp142_01_RealizationMirror,
                name: "Realization mirror"
            },
            {
                id: "14.2_02 Caught by demon",
                scene: Spiegel_VN.Chp142_02_CaughtByDemon,
                name: "Caught by demon"
            },
            {
                id: "14.2_03 Transformation into slaves",
                scene: Spiegel_VN.Chp142_03_TransformationSlaves,
                name: "Transformation into slaves"
            },
            {
                id: "14.2_End Empty Scene",
                scene: Spiegel_VN.Chp142_End_EmptyScene,
                name: "End empty scene"
            },
            // *** CHAPTER 15: THE PRIZE
            {
                id: "15_01 Reunion Kailani",
                scene: Spiegel_VN.Chp15_01_ReunionKailani,
                name: "Reunion Kailani"
            },
            {
                id: "15_E Discover demon room",
                scene: Spiegel_VN.Chp15_E_DiscoverDemonRoom,
                name: "Discover demon room"
            },
            {
                id: "15_E Discover mirror room",
                scene: Spiegel_VN.Chp15_E_DiscoverMirrorRoom,
                name: "Discover mirror room"
            },
            {
                id: "15_E Talk to freed villagers",
                scene: Spiegel_VN.Chp15_E_TalkToFreedVillagers,
                name: "Talk to freed villagers"
            },
            {
                id: "15_CS Go to lake",
                scene: Spiegel_VN.Chp15_CS_GoToLake,
                name: "Go to lake"
            },
            // *** CHAPTER 16: ROAD HOME
            {
                id: "16_01 Confrontation Flynn",
                scene: Spiegel_VN.Chp16_01_ConfrontationFlynn,
                name: "Confrontation Flynn"
            },
            {
                id: "16_02 Make a wish",
                scene: Spiegel_VN.Chp16_02_MakeAWish,
                name: "Make a wish"
            },
            {
                id: "16_021 Go home alone",
                scene: Spiegel_VN.Chp16_021_GoHomeAlone,
                name: "Go home alone"
            },
            {
                id: "16_022 Go home with Flynn",
                scene: Spiegel_VN.Chp16_022_GoHomeWithFlynn,
                name: "Go home with Flynn"
            },
            {
                id: "16_CS Reunion family",
                scene: Spiegel_VN.Chp16_CS_ReunionFamily,
                name: "Reunion family"
            },
            {
                id: "16_End Empty Scene",
                scene: Spiegel_VN.Chp16_End_EmptyScene,
                name: "End Empty Scene"
            }
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
            name: "",
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
            pose: {
                worried: "./Assets/Characters/Kailani_3_4_worried.png",
                angry: "./Assets/Characters/Kailani_3_4_worried_v2.png",
            },
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
            pose: {
                angry: "./Assets/Characters/Flynn_Whary_angry.png",
            },
        },
        flowerMerchant: {
            name: "Blumenhändler",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMCENTER,
        },
        leatherMerchant: {
            name: "Lederhändler",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
        },
        mirrorMerchant: {
            name: "Spiegelhändler",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
        },
        Demon: {
            name: "Dämon",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                angry: "",
                neutralAngry: "",
                furious: "",
                distracted: "",
            },
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
        // *** CHAPTER 01 ***
        Chp01_01_IntroMarketplace: {
            name: "Intro_Marktplatz",
            background: 
            // "./Assets/Backgrounds/Chapter01/Kap01_01_Intro_Marktplatz.png", //1280x853 (passt)
            // "./Assets/Backgrounds/Chapter01/Chp01_Marketplace.png", //1920x1080 (passt nicht)
            "./Assets/Backgrounds/Chapter01/Chp01_Marketplace1.png"
        },
        Chp01_02_ConvoMother: {
            name: "Convo_Mother",
            background: "./Assets/Backgrounds/BG_Wald_Test1.png"
        },
        Chp01_E_FlowerMerchant: {
            name: "E_FlowerMerchant",
            background: "./Assets/Backgrounds/Chapter01/Flowermerchant.png"
        },
        Chp01_E_LeatherMerchant: {
            name: "E_LeatherMerchant",
            background: "./Assets/Backgrounds/Chapter01/Leathermerchant.png"
        },
        Chp01_03_IntroMirror: {
            name: "Mirror merchant",
            background: "./Assets/Backgrounds/Chapter02/Dinner/DiningTable.jpeg"
        },
        Chp01_CS_ArrivalHome: {
            name: "House from outside",
            background: "./Assets/Backgrounds/Chapter02/Dinner/DiningTable.jpeg"
        },
        // *** CHAPTER 02 ***
        Chp02_01_Dinner: {
            name: "Dinnertable",
            background: "./Assets/Backgrounds/Chapter02/Dinner/DiningTable.jpeg"
        },
        Chp02_02_LivingRoom: {
            name: "Living room",
            background: "./Assets/Backgrounds/Chapter02/Dinner/DiningTable.jpeg"
        },
        Chp02_03_PickHerbs: {
            name: "Garden",
            background: "./Assets/Backgrounds/Chapter02/Dinner/DiningTable.jpeg"
        },
        Chp02_04_FightNeighbor: {
            name: "Neighbors house",
            background: "./Assets/Backgrounds/Chapter02/Dinner/DiningTable.jpeg"
        },
        Chp02_E_DiscoverBedroom: {
            name: "My Bedroom",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp02_E_DiscoverBedroomDiary: {
            name: "Bedroom diary",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp02_E_DiscoverBedroomBooks: {
            name: "Bedroom books",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp02_E_DiscoverKitchen: {
            name: "Kitchen",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp02_E_DiscoverKitchenOven: {
            name: "Kitchen oven",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp02_E_DiscoverKitchenPantry: {
            name: "Kitchen pantry",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp02_CS_Sleep: {
            // night filter
            name: "Bedroom sleep",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        // *** CHAPTER 03 ***
        Chp03_01_Dressmaker: {
            name: "Dressmaker",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp03_021_FirewoodKailani: {
            name: "Firewood chopping Kailani",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp03_022_WaterwellKailani: {
            // empty marketplace
            name: "Well empty marketplace",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp03_E_DiscoverDonkey: {
            name: "Discover donkey",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp03_E_DiscoverDonkeyCloseup: {
            name: "Discover donkey closeup",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp03_E_DiscoverForest: {
            name: "Discover forest",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp03_E_DiscoverLibraryOutside: {
            name: "Discover library",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp03_E_DiscoverLibraryInside: {
            name: "Discover library",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp03_E_DiscoverLibraryCloseup: {
            name: "Discover library closeup books",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp03_CS_KailaniMissing: {
            name: "Kailanis bedroom",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        // *** CHAPTER 04 ***
        // *** TRANSITION BETWEEN CHAPTERS ***
        black: {
            name: "Black_BG",
            background: "./Assets/Transitions/Black.png"
        }
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
            T0000: '"Willkommen! Tritt nur näher, sonst hörst du mich gar nicht."',
            T0001: '"Ja, so ist es schon besser. Du bist ja schließlich hergekommen, um meiner Geschichte zu lauschen, nicht wahr?"',
            T0002: '"Wie heißt du denn?"',
            T0003: '"Schau, dass du es dir gemütlich machst. Das Märchen, das ich dir heute Abend erzähle, dauert etwas länger."',
            T0004: '"Bevor es aber losgeht, musst du mir eine wichtige Frage beantworten: Welche Eigenschaft ist dir am wichtigsten? Wähle mit Bedacht aus, denn deine Antwort kann auf den Verlauf der Geschichte Einfluss nehmen …"',
            T0005: '"Schließe nun die Augen und lass dich von mir in eine Welt entführen, die nicht viel anders ist als deine hier. Nur mit etwas mehr … Magie!"',
            T0006: '"Es war einmal …."',
            T0007: '"... ein geschäftiger Marktplatz in einer kleinen Stadt, die letzte Stadt des Bezirks, bevor der dunkle Wald began."',
            T0008: '"Du schaust dich um und siehst Reihen an Marktständen, die mit bunten Waren bis oben hin aufgefüllt sind. Die Schreie der Händler schweben durch die kalte Luft, die von den lauen Sommerstrahlen an diesem kühlen Aprilmorgen ziemlich unberührt scheint."',
            T0009: '"Die Bewohner schlendern von Stand zu Stand und holen ihre Wocheneinkäufe. Ihre braunen, blauen und gelben Kleider zwischen den farbigen Waren lassen den gesamten Marktplatz wie die Farbpalette einer temperamentvollen, pinselschwingenden Künstlerin wirken."',
            T0010: '"hier fehlt noch dialog"',
        },
        // maincharacter: {
        //   T0000:
        //     "Die Händler sind im Dorf! Nach einem langen und grauen Winter reihen sich endlich wieder die farbigen Wagons der fahrenden Händler am Marktplatz ein.",
        //   T0001:
        //     "Auch wenn die Luft noch eisig in meinen Lungen ist, die Waren der Händler und die Sonne, die manchmal durch die Wolken blitzt, erschaffen ein schon fast frühlingshaftes Gefühl von Freude.",
        //   T0002: "Meine Geschwister rennen herum wie die Irren.",
        //   T0003: "",
        // },
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
    // SCENE ENTRY
    Spiegel_VN.dlg_Chp01EntryMirrorMerchant = {
        mirrorMerchant: {
            T0000: "... magische Spiegel! Ich habe magische Spiegel zu verkaufen!",
            T0001: "Sie! Sie sehen aber interessiert aus, nicht wahr?",
        },
        maincharacter: {
            T0000: "Hm ... ",
        },
    };
    Spiegel_VN.dlg_Chp01MirrorMerchantiSayUnsure = {
        maincharacter: {
            T0000: "Ich weiß nicht, was ist das denn für ein magischer Spiegel?",
            T0001: "Und was ist so Besonders an ihm?",
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
        // for (let diaSequence of Object.values(
        //   dlg_scn_00_IntroNarrator.narratorEntry
        // )) {
        //   await ƒS.Speech.tell(characters.narrator.name, diaSequence);
        // }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0000);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0001);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0002);
        Spiegel_VN.dataForSave.nameProtagonist = await Spiegel_VN.ƒS.Speech.getInput();
        Spiegel_VN.characters.maincharacter.name = Spiegel_VN.dataForSave.nameProtagonist;
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0003);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0004);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0005);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0006);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_01_IntroMarketplace);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge //edge ist der Härtegrad
        );
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0007);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0008);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0009);
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
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.worried, // pose muss in der main sein
        Spiegel_VN.ƒS.positions.bottomcenter //bei positions: gibts die normalen angaben (topleft ..) bei positionpercentage: gebe ich koordinaten an in pixel 70 in x und 100 in y
        // ƒS.positionPercent(70,100)
        );
        let randomTextChp01Marketplace = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp01Marketplace) {
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
        // *** SCENE OPTIONS ***
        let Chp01PickSceneElementAnswers = {
            PickSceneConvoMother: "Rede mit Mama.",
            PickSceneMirrorMerchant: "Was glitzert so da hinten?",
            PickSceneExploreFlowerMerchant: "(Erkunden) Was gibt es Neues beim Blumenhändler?",
            PickSceneExploreLeatherMerchant: "(Erkunden) Was gibt es Neues beim Lederhändler?",
            PickSceneContinue: "Weiter",
        };
        console.log("boolean Mama gesprochen: ");
        console.log(Spiegel_VN.dataForSave.pickedChp01_ConvoMother);
        console.log("boolean Mirrormerhant besucht: ");
        console.log(Spiegel_VN.dataForSave.pickedChp01_MirrorMerchant);
        if (!Spiegel_VN.dataForSave.pickedChp01_ConvoMother || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
            !Spiegel_VN.dataForSave.pickedChp01_MirrorMerchant) {
            delete Chp01PickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        // let pickediSayTalkToMama: boolean;
        // let pickediSayTalkToMirrorMerchant: boolean;
        // do {
        if (Spiegel_VN.dataForSave.pickedChp01_ConvoMother) {
            delete Chp01PickSceneElementAnswers.PickSceneConvoMother;
        }
        if (Spiegel_VN.dataForSave.pickedChp01_MirrorMerchant) {
            delete Chp01PickSceneElementAnswers.PickSceneMirrorMerchant;
        }
        let Chp01SceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp01PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp01SceneElement) {
            case Chp01PickSceneElementAnswers.PickSceneConvoMother:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, '"Warte kurz, Mama!"');
                Spiegel_VN.dataForSave.scoreEmpathyPoints += 10;
                console.log(Spiegel_VN.dataForSave.scoreEmpathyPoints);
                Spiegel_VN.ƒS.Speech.clear();
                return "01_02 Conversation Mama"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp01PickSceneElementAnswers.PickSceneMirrorMerchant:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, "Choice Talk to Mirrormerchant");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "01_03 MirrorMerchant";
                break;
            case Chp01PickSceneElementAnswers.PickSceneExploreFlowerMerchant:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Choice (Explore) Talk to flower merchant.");
                Spiegel_VN.ƒS.Speech.clear();
                return "01_E_FlowerMerchant";
                break;
            case Chp01PickSceneElementAnswers.PickSceneExploreLeatherMerchant:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Choice (Explore) Talk to leather merchant.");
                Spiegel_VN.ƒS.Speech.clear();
                return "01_E_LeatherMerchant";
                break;
            case Chp01PickSceneElementAnswers.PickSceneContinue:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Choice (Explore) Talk to mirror merchant.");
                Spiegel_VN.ƒS.Speech.clear();
                return "01_CS PerchaseMirror";
                break;
        }
        // } while (dataForSave.pickedChoice);
    }
    Spiegel_VN.Chp01_01_IntroMarketplace = Chp01_01_IntroMarketplace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_02_ConvoMother() {
        Spiegel_VN.dataForSave.pickedChp01_ConvoMother = true;
        // await ƒS.Location.show(locations.black);
        // await ƒS.update(2);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_02_ConvoMother);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.angry, // pose muss in der main sein
        Spiegel_VN.ƒS.positions.bottomcenter //bei positions: gibts die normalen angaben (topleft ..) bei positionpercentage: gebe ich koordinaten an in pixel 70 in x und 100 in y
        // ƒS.positionPercent(70, 100)
        );
        // await ƒS.update(2, transitions.fade.alpha, transitions.fade.edge);
        // *** BEGIN DIALOGUE ***
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_scn_02.maincharacter.T0000);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, Spiegel_VN.dlg_scn_02.Mama.T0000);
        //*** OPTIONS *//
        let chp01ConvoMotherElementAnswers = {
            iSayOk: "Okay.",
            iSayYes: "Ja.",
            iSayEmpathyPoints: "10"
        };
        if (Spiegel_VN.dataForSave.scoreEmpathyPoints < 20) {
            delete chp01ConvoMotherElementAnswers.iSayEmpathyPoints;
        }
        console.log(Spiegel_VN.dataForSave.scoreEmpathyPoints);
        //*** CSS-CLASS */
        let chp01ConvoMotherElement = await Spiegel_VN.ƒS.Menu.getInput(chp01ConvoMotherElementAnswers, "choicesCSSclass");
        //*** RESPONSES */
        switch (chp01ConvoMotherElement) {
            case chp01ConvoMotherElementAnswers.iSayOk:
                console.log(Spiegel_VN.dataForSave.scoreEmpathyPoints);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, "Choice Okay.");
                Spiegel_VN.ƒS.Speech.clear();
                return "01_01 Intro Marketplace";
                break;
            case chp01ConvoMotherElementAnswers.iSayYes:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Choice Yes");
                Spiegel_VN.ƒS.Speech.clear();
                //   // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                //   // ƒS.Character.hide(characters.Mama);
                return "01_01 Intro Marketplace";
                break;
            case chp01ConvoMotherElementAnswers.iSayEmpathyPoints:
                Spiegel_VN.dataForSave.scoreEmpathyPoints += 10;
                console.log(Spiegel_VN.dataForSave.scoreEmpathyPoints);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Hier kriegen wir 10 Empathiepunkte");
                Spiegel_VN.ƒS.Speech.clear();
                return "01_01 Intro Marketplace";
                break;
        }
    }
    Spiegel_VN.Chp01_02_ConvoMother = Chp01_02_ConvoMother;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_03_IntroMirror() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_03_IntroMirror);
        Spiegel_VN.dataForSave.pickedChp01_MirrorMerchant = true;
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.angry, // pose muss in der main sein
        Spiegel_VN.ƒS.positions.bottomright //bei positions: gibts die normalen angaben (topleft ..) bei positionpercentage: gebe ich koordinaten an in pixel 70 in x und 100 in y
        // ƒS.positionPercent(70,100)
        );
        // await ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant.name, Spiegel_VN.dlg_Chp01EntryMirrorMerchant.mirrorMerchant.T0000);
        //*** OPTIONS *//
        let Chp01MirrorMerchantElementAnswers = {
            iSayUnsure: "Ich bin mir unsicher.",
            iSayYes: "Zeigen Sie mal her!",
            iSayNo: "Ne, gar nicht ...",
        };
        let Chp01MirrorMerchantElement = await Spiegel_VN.ƒS.Menu.getInput(Chp01MirrorMerchantElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp01MirrorMerchantElement) {
            case Chp01MirrorMerchantElementAnswers.iSayUnsure:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, '"Bin mir echt unsicher!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant.name, '"Aber nein, schau doch mal her! Deine Zweifel sind unbegründet!"');
                // hier noch: rest von Gespräch, posen Spiegelhändler, nochmal Dialog
                Spiegel_VN.ƒS.Speech.clear();
                return "01_01 Intro Marketplace";
                break;
            case Chp01MirrorMerchantElementAnswers.iSayYes:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, "Ja gerne, zeigen Sie mal her!");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant.name, '"Interessierte Kundschaft! Ich zeige es dir ... "');
                Spiegel_VN.ƒS.Speech.clear();
                return "01_01 Intro Marketplace";
                break;
            case Chp01MirrorMerchantElementAnswers.iSayNo:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, "Lieber nicht, nein");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant.name, '"Bist du sicher? Komm, schau mal ... "');
                Spiegel_VN.ƒS.Speech.clear();
                return "01_01 Intro Marketplace";
                break;
        }
    }
    Spiegel_VN.Chp01_03_IntroMirror = Chp01_03_IntroMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_E_FlowerMerchant() {
        // await ƒS.Location.show(locations.Chp01_E_FlowerMerchant); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
        //   await ƒS.Location.show(locations.black);
        // await ƒS.update(2);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_E_FlowerMerchant);
        // await ƒS.update(2, transitions.fade.alpha, transitions.fade.edge);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge //edge ist der Härtegrad
        );
        // ***BEGINN DIALOG ***
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_scn_E_Flowermerchant.maincharacter.T0000);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, Spiegel_VN.dlg_scn_E_Flowermerchant.flowerMerchant.T0000);
        // *** DIALOGUE OPTIONS ***
        let chp01FlowerMerchantDialogueElementAnswers = {
            iSayAskAboutTrip: "(Erkunden) Wie war denn die Reise ins Dorf?",
            iSayAskAboutFlowers: "(Erkunden) Warum habt ihr so wenige Blumen da?",
            iSayBuyFlowers: "(Erkunden) Blumen kaufen",
            iSayLeave: "Auf Wiedersehen!"
        };
        if (!Spiegel_VN.dataForSave.pickedChp01_ConvoMother) {
            delete chp01FlowerMerchantDialogueElementAnswers.iSayBuyFlowers;
        }
        let pickediSayAskAboutTrip;
        let pickediSayAskAboutFlowers;
        let pickediSayBuyFlowers;
        // let pickediSayLeave: boolean;
        do {
            if (pickediSayAskAboutTrip) {
                delete chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutTrip;
            }
            else if (pickediSayAskAboutFlowers) {
                delete chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutFlowers;
            }
            else if (pickediSayBuyFlowers) {
                delete chp01FlowerMerchantDialogueElementAnswers.iSayBuyFlowers;
            }
            let chp01FlowerMerchantDialogueElement = await Spiegel_VN.ƒS.Menu.getInput(chp01FlowerMerchantDialogueElementAnswers, "choicesCSSclass");
            // *** RESPONSES ***
            switch (chp01FlowerMerchantDialogueElement) {
                case chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutTrip:
                    pickediSayAskAboutTrip = true;
                    Spiegel_VN.dataForSave.pickedChoice = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant, "Antwort auf Frage nach Reise.");
                    // dataForSave.score.scoreEmpathyPoints += 10;
                    // console.log(dataForSave.score.scoreEmpathyPoints);
                    Spiegel_VN.ƒS.Speech.clear();
                    // return "01_E_FlowerMerchant";
                    break;
                case chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutFlowers:
                    pickediSayAskAboutFlowers = true;
                    Spiegel_VN.dataForSave.pickedChoice = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant, "Answer ask about decorations");
                    Spiegel_VN.ƒS.Speech.clear();
                    // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                    // ƒS.Character.hide(characters.Mama);
                    // return "01_E_FlowerMerchant";
                    break;
                case chp01FlowerMerchantDialogueElementAnswers.iSayBuyFlowers:
                    pickediSayBuyFlowers = true;
                    Spiegel_VN.dataForSave.pickedChoice = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Ich will ein paar Blumen für meinen Opi kaufen");
                    Spiegel_VN.ƒS.Speech.clear();
                    // return "01_E_FlowerMerchant";
                    break;
                case chp01FlowerMerchantDialogueElementAnswers.iSayLeave:
                    // pickediSayLeave = true;
                    Spiegel_VN.dataForSave.pickedChoice = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Machen Sies gut.");
                    Spiegel_VN.ƒS.Speech.clear();
                    return "01_01 Intro Marketplace";
                    break;
            }
        } while (Spiegel_VN.dataForSave.pickedChoice);
        // );
    }
    Spiegel_VN.Chp01_E_FlowerMerchant = Chp01_E_FlowerMerchant;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_E_LeatherMerchant() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_E_LeatherMerchant);
        // await ƒS.update(2, transitions.fade.alpha, transitions.fade.edge);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge //edge ist der Härtegrad
        );
        // ***BEGIN DIALOGUE ***
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_scn_E_Leathermerchant.maincharacter.T0000);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant.name, Spiegel_VN.dlg_scn_E_Leathermerchant.leatherMerchant.T0000);
        // *** DIALOGUE OPTIONS ***
        let Chp01LeatherMerchantDialogueElementAnswers = {
            iSayAskAboutTrip: "'(Erkunden) Wie war denn die Reise ins Dorf?'",
            iSayAskAboutClothes: "'(Erkunden) Eure Ware sieht so anders aus...'",
            iSayBuyShoeCream: "Schuhcreme kaufen",
            iSayLeave: "'Auf Wiedersehen!'",
        };
        if (!Spiegel_VN.dataForSave.pickedChp01_ConvoMother) {
            delete Chp01LeatherMerchantDialogueElementAnswers.iSayBuyShoeCream;
        }
        let Chp01LeatherMerchantDialogueElement = await Spiegel_VN.ƒS.Menu.getInput(Chp01LeatherMerchantDialogueElementAnswers, "choicesCSSclass");
        // *** SWITCHCASE DIALOGUE OPTIONS ***
        switch (Chp01LeatherMerchantDialogueElement) {
            case Chp01LeatherMerchantDialogueElementAnswers.iSayAskAboutTrip:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, "Antwort Reise.");
                // dataForSave.score.scoreEmpathyPoints += 10;
                // console.log(dataForSave.score.scoreEmpathyPoints);
                Spiegel_VN.ƒS.Speech.clear();
                return Chp01_E_LeatherMerchant();
                break;
            case Chp01LeatherMerchantDialogueElementAnswers.iSayAskAboutClothes:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, "Answer ask about decorations");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "01_E_LeatherMerchant";
                break;
            case Chp01LeatherMerchantDialogueElementAnswers.iSayBuyShoeCream:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Kann ich etwas Schuhcreme haben?");
                Spiegel_VN.ƒS.Speech.clear();
                return "01_E_LeatherMerchant";
                break;
            case Chp01LeatherMerchantDialogueElementAnswers.iSayLeave:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Machen Sies gut.");
                Spiegel_VN.ƒS.Speech.clear();
                return "01_01 Intro Marketplace";
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
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_CS_ArrivalHome);
        await Spiegel_VN.ƒS.Speech.tell("Hannah", "Schleife gelungen bei CS angekommen ------------- AAAAAAAAAAAA. Arrival Home");
        // ** RANDOM TEXT ***
        let randomTextChp02FamilyHome = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp02FamilyHome) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp02PickSceneElementAnswers = {
            PickSceneDinner: "Abendessen mit Familie.",
            PickSceneTryMirror: "Spiegel ausprobieren.",
            PickScenePickHerbs: "Kräuter pflücken",
            PickSceneDiscoverBedroom: "(Erkunden) Mein Schlafzimmer anschauen",
            PickSceneDiscoverKitchen: "(Erkunden) Ab in die Küche",
            PickSceneContinue: "Weiter",
        };
        console.log("boolean Abendessen: ");
        console.log(Spiegel_VN.dataForSave.pickedChp02_DinnerScene);
        console.log("boolean Kräuter gepflückt: ");
        console.log(Spiegel_VN.dataForSave.pickedChp02_PickHerbsGarden);
        console.log("boolean Nachbar Streit: ");
        console.log(Spiegel_VN.dataForSave.pickedChp02_FightNeighbor);
        if (!Spiegel_VN.dataForSave.pickedChp02_DinnerScene || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
            !Spiegel_VN.dataForSave.pickedChp02_PickHerbsGarden ||
            !Spiegel_VN.dataForSave.pickedChp03_ChoresWithKailani ||
            !Spiegel_VN.dataForSave.pickedChp02_FightNeighbor) {
            delete Chp02PickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp01PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp01PickSceneElement) {
            case Chp02PickSceneElementAnswers.PickSceneDinner:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Abendessen hm geil.");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_01 Dinner at home"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp02PickSceneElementAnswers.PickScenePickHerbs:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Auf geht's Kräuter pflücken");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "02_03 Pick Herbs";
                break;
            case Chp02PickSceneElementAnswers.PickSceneTryMirror:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Spiegel ausprobieren.");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_021 Test Mirror";
                break;
            case Chp02PickSceneElementAnswers.PickSceneDiscoverBedroom:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Schlafzimmer anschauen yay sleep.");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_E Discover bedroom";
                break;
            case Chp02PickSceneElementAnswers.PickSceneDiscoverKitchen:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich hab' Hunger auf geht's.");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_E Discover Kitchen";
                break;
            case Chp02PickSceneElementAnswers.PickSceneContinue:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Weiter zur cut scene.");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_CS Sleep";
                break;
        }
        return "";
    }
    Spiegel_VN.Chp01_CS_ArrivalHome = Chp01_CS_ArrivalHome;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_CS_PerchaseMirror() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_03_IntroMirror);
        await Spiegel_VN.ƒS.Speech.tell("Mirror merchant", "Spiegel ist gekauft");
        return "01_CS Arrival Home";
    }
    Spiegel_VN.Chp01_CS_PerchaseMirror = Chp01_CS_PerchaseMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_01_Dinner() {
        Spiegel_VN.dataForSave.pickedChp02_DinnerScene = true;
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_01_Dinner); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
        // await ƒS.Location.show(location.Chp01_01_IntroMarketplace);
        // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge //edge ist der Härtegrad
        );
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Abendessen mh der Auflauf ist toll.");
        // // *** SCENE OPTIONS ***
        // let Chp02PickSceneElementAnswers = {
        //   iSayTryMirrorElena: "Spiegel mit Mutti ausprobieren.",
        //   iSayTryMirrorKailani: "Spiegel mit Kailani ausprobieren.",
        //   iSayPickHerbs: "Kräuter pflücken",
        //   iSayDiscoverBedroom: "(Erkunden) Mein Schlafzimmer anschauen",
        //   iSayDiscoverKitchen: "(Erkunden) Küche anschauen",
        //   iSayContinue: "Weiter",
        // };
        // if (
        //   !dataForSave.pickedChp02_DinnerScene || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
        //   !dataForSave.pickedChp02_PickHerbsGarden ||
        //   !dataForSave.pickedChp02_TestWithElena ||
        //   !dataForSave.pickedChp02_FightNeighbor
        // ) {
        //   delete Chp02PickSceneElementAnswers.iSayContinue;
        //   // return Chp01_CS_ArrivalHome();
        // }
        // let Chp02PickSceneElement = await ƒS.Menu.getInput(
        //   Chp02PickSceneElementAnswers,
        //   "choicesCSSclass"
        // );
        // // *** RESPONSES ***
        // switch (Chp02PickSceneElement) {
        //   case Chp02PickSceneElementAnswers.iSayPickHerbs:
        //     // continue path here
        //     await ƒS.Speech.tell("Ich", "Ab in den Garten Kräuter pflücken.");
        //     dataForSave.score.scoreEmpathyPoints += 10;
        //     console.log(dataForSave.score.scoreEmpathyPoints);
        //     ƒS.Speech.clear();
        //     return "02_03 Pick Herbs"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
        //     break;
        //   case Chp02PickSceneElementAnswers.iSayTryMirrorElena:
        //     // continue path here
        //     await ƒS.Speech.tell("Ich", "Mit Mutti Spiegel ausprobieren.");
        //     ƒS.Speech.clear();
        //     return Chp02_021_TestWithElena();
        //     break;
        //   case Chp02PickSceneElementAnswers.iSayTryMirrorKailani:
        //     // continue path here
        //     await ƒS.Speech.tell("Ich", "Spiegel mit Kailani ausprobieren.");
        //     ƒS.Speech.clear();
        //     return Chp02_022_TestWithKailani();
        //     break;
        //   case Chp02PickSceneElementAnswers.iSayDiscoverBedroom:
        //     // continue path here
        //     await ƒS.Speech.tell("Ich", "Schlafzimmer anschauen yay sleep.");
        //     ƒS.Speech.clear();
        //     return Chp02_E_DiscoverBedroom();
        //     break;
        //   case Chp02PickSceneElementAnswers.iSayDiscoverKitchen:
        //     // continue path here
        //     await ƒS.Speech.tell("Ich", "Ich hab' Hunger auf geht's.");
        //     ƒS.Speech.clear();
        //     return Chp02_E_DiscoverKitchen();
        //     break;
        //   case Chp02PickSceneElementAnswers.iSayContinue:
        //     // continue path here
        //     // if (dataForSave.score.scoreCouragePoints === 50)
        //     // wie mindestens 50?
        //     await ƒS.Speech.tell("Ich", "Es geht weiter");
        //     ƒS.Speech.clear();
        //     // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        //     // ƒS.Character.hide(characters.Mama);
        //     return "02_CS Sleep";
        //     break;
        // }
        return "01_CS Arrival Home";
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
    async function Chp02_021_TestMirror() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Mit wem möchtest du den Spiegel testen?");
        let Chp02TestMirrorElementAnswers = {
            PickSceneTestWithElena: "Mit Mutti testen.",
            PickSceneTestWithKailani: "Mit Kailani ausprobieren.",
            PickSceneTestWithEvarius: "Mit Evarius testen.",
        };
        let Chp02TestMirrorElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02TestMirrorElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02TestMirrorElement) {
            case Chp02TestMirrorElementAnswers.PickSceneTestWithElena:
                Spiegel_VN.dataForSave.pickedChp02_TestWithElena = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Toll ich teste den Spiegel mit Mutti!");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp02TestMirrorElementAnswers.PickSceneTestWithKailani:
                Spiegel_VN.dataForSave.pickedChp02_TestWithKailani = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Toll ich teste den Spiegel mit Kailani!");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp02TestMirrorElementAnswers.PickSceneTestWithEvarius:
                Spiegel_VN.dataForSave.pickedChp02_TestWithKailani = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Toll ich teste den Spiegel mit Evarius!");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            // dataForSave.pickedChp02_TestWithElena = true;
            // console.log("boolean picked Test with Elena:");
            // console.log(dataForSave.pickedChp02_TestWithElena);
            // await ƒS.Speech.tell("Ich", "Teste den Spiegel mit Mutti.");
            // return "01_CS Arrival Home";
        }
        if (Spiegel_VN.dataForSave.pickedChp02_TestWithElena) {
            let Chp02TestMirrorElenaElementAnswers = {
                iSayTest1: "Test 1 Elena.",
                iSayTest2: "Test 2 Elena.",
            };
            let Chp02TestMirrorElenaElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02TestMirrorElenaElementAnswers, "choicesCSSclass");
            // *** RESPONSES ***
            switch (Chp02TestMirrorElenaElement) {
                case Chp02TestMirrorElenaElementAnswers.iSayTest1:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Test 1 mit Elena");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp02TestMirrorElenaElementAnswers.iSayTest2:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Test 2 mit Elena");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
        }
        if (Spiegel_VN.dataForSave.pickedChp02_TestWithKailani) {
            let Chp02TestMirrorKailaniElementAnswers = {
                iSayTest1: "Test 1 Kailani.",
                iSayTest2: "Test 2 Kailani.",
            };
            let Chp02TestMirrorKailaniElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02TestMirrorKailaniElementAnswers, "choicesCSSclass");
            // *** RESPONSES ***
            switch (Chp02TestMirrorKailaniElement) {
                case Chp02TestMirrorKailaniElementAnswers.iSayTest1:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Test 1 mit Kailani");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp02TestMirrorKailaniElementAnswers.iSayTest2:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Test 2 mit Kailani");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
        }
        if (Spiegel_VN.dataForSave.pickedChp02_TestWithEvarius) {
            let Chp02TestMirrorEvariusElementAnswers = {
                iSayTest1: "Test 1 Evarius.",
                iSayTest2: "Test 2 Evarius.",
            };
            let Chp02TestMirrorEvariusElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02TestMirrorEvariusElementAnswers, "choicesCSSclass");
            // *** RESPONSES ***
            switch (Chp02TestMirrorEvariusElement) {
                case Chp02TestMirrorEvariusElementAnswers.iSayTest1:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Test 1 mit Evarius");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp02TestMirrorEvariusElementAnswers.iSayTest2:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Test 2 mit Evarius");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
            return "01_CS Arrival Home";
        }
    }
    Spiegel_VN.Chp02_021_TestMirror = Chp02_021_TestMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_03_PickHerbs() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_03_PickHerbs);
        Spiegel_VN.dataForSave.pickedChp02_PickHerbsGarden = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich pflücke Kräuter yum yum. Gleich hör ich nen Streit mit den Nachbarn");
        return "02_03 Fight with neighbor";
    }
    Spiegel_VN.Chp02_03_PickHerbs = Chp02_03_PickHerbs;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_03_FightNeighbor() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_04_FightNeighbor);
        Spiegel_VN.dataForSave.pickedChp02_FightNeighbor = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Nachbarn streiten und ich hör zu.");
        return "01_CS Arrival Home";
    }
    Spiegel_VN.Chp02_03_FightNeighbor = Chp02_03_FightNeighbor;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_E_DiscoverBedroom() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverBedroom); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
        // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);
        // await ƒS.update(
        //   transitions.fade.duration,
        //   transitions.fade.alpha,
        //   transitions.fade.edge //edge ist der Härtegrad
        // );
        await Spiegel_VN.ƒS.Speech.tell("Ich", "My eigenes Reich. Wenigstens hier habe ich ein bisschen Privatsphäre...");
        let Chp02DiscoverBedroomElementAnswers = {
            iSayDiscoverDesk: "(Erkunden) Was liegt da auf dem Tisch?",
            iSayDiscoverBooks: "(Erkunden) Bücher anschauen",
            iSayLeave: "Zurück",
        };
        let Chp02DiscoverBedroomElementElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02DiscoverBedroomElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02DiscoverBedroomElementElement) {
            case Chp02DiscoverBedroomElementAnswers.iSayDiscoverDesk:
                // pickediSayAskAboutTrip = true;
                // dataForSave.pickedChoice = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Yay schauen wir uns den Tisch an, was gibts hier so.");
                Spiegel_VN.ƒS.Speech.clear();
                // return "01_E_FlowerMerchant";
                break;
            case Chp02DiscoverBedroomElementAnswers.iSayDiscoverBooks:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Bücher anschauen juchu");
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
    }
    Spiegel_VN.Chp02_E_DiscoverBedroom = Chp02_E_DiscoverBedroom;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_E_DiscoverKitchen() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverKitchen);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich mache mir in der Küche was zu futtern.");
        let Chp02DiscoverKitchenElementAnswers = {
            PickSceneDiscoverOven: "(Erkunden) Ofen anschauen",
            PickSceneDiscoverPantry: "(Erkunden) In die Speisekammer",
            PickSceneLeave: "Zurück",
        };
        let Chp02DiscoverKitchenElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02DiscoverKitchenElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02DiscoverKitchenElement) {
            case Chp02DiscoverKitchenElementAnswers.PickSceneDiscoverOven:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverKitchenOven);
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Yay schauen wir uns den Ofen an, was gibts hier so.");
                Spiegel_VN.ƒS.Speech.clear();
                // return "01_E_FlowerMerchant";
                break;
            case Chp02DiscoverKitchenElementAnswers.PickSceneDiscoverPantry:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverKitchenPantry);
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Speisekammer anschauen juchu");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp02DiscoverKitchenElementAnswers.PickSceneLeave:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wieder raus");
                Spiegel_VN.ƒS.Speech.clear();
                return "01_CS Arrival Home";
                break;
        }
    }
    Spiegel_VN.Chp02_E_DiscoverKitchen = Chp02_E_DiscoverKitchen;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_CS_NewDay() {
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge //edge ist der Härtegrad
        );
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Guten Morgen!");
        // ** RANDOM TEXT ***
        let randomTextChp03NewDay = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp03NewDay) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp03PickSceneElementAnswers = {
            PickSceneDressmaker: "Jacke abholen",
            PickSceneChoresWithKailani: "Mit Kailani Hausarbeit machen",
            PickSceneDiscoverDonkey: "(Erkunden) Glücksesel streicheln",
            PickSceneDiscoverForest: "(Erkunden) Im Wald rumgucken",
            PickSceneDiscoverLibrary: "(Erkunden) Die Bücherei erkunden",
            PickSceneContinue: "Weiter",
        };
        if (!Spiegel_VN.dataForSave.pickedChp03_Dressmaker || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
            !Spiegel_VN.dataForSave.pickedChp03_ChoresWithKailani) {
            delete Chp03PickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp03PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp03PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp03PickSceneElement) {
            case Chp03PickSceneElementAnswers.PickSceneDressmaker:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Auf zur Schneiderin!");
                // dataForSave.score.scoreEmpathyPoints += 10;
                console.log(Spiegel_VN.dataForSave.scoreEmpathyPoints);
                Spiegel_VN.ƒS.Speech.clear();
                return "03_01 Dressmaker"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp03PickSceneElementAnswers.PickSceneChoresWithKailani:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Gehen wir Holz hacken");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "03_021 Chores with Kailani";
                break;
            case Chp03PickSceneElementAnswers.PickSceneDiscoverDonkey:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Süß, ein Esel!.");
                Spiegel_VN.ƒS.Speech.clear();
                return "03_E Discover donkey";
                break;
            case Chp03PickSceneElementAnswers.PickSceneDiscoverForest:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Gehen wir den Wald anschauen.");
                Spiegel_VN.ƒS.Speech.clear();
                return "03_E Discover Forest";
                break;
            case Chp03PickSceneElementAnswers.PickSceneDiscoverLibrary:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich liebe Bücher <3.");
                Spiegel_VN.ƒS.Speech.clear();
                return "03_E Discover Library";
                break;
            case Chp03PickSceneElementAnswers.PickSceneContinue:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Weiter zur cut scene turmoil marketplace.");
                Spiegel_VN.ƒS.Speech.clear();
                return "03_CS Turmoil marketplace";
                break;
        }
    }
    Spiegel_VN.Chp02_CS_NewDay = Chp02_CS_NewDay;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_CS_Sleep() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_CS_Sleep);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Muss jetzt schlafen gehen.");
        return "02_CS New day";
    }
    Spiegel_VN.Chp02_CS_Sleep = Chp02_CS_Sleep;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_01_Dressmaker() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_01_Dressmaker);
        Spiegel_VN.dataForSave.pickedChp03_Dressmaker = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Kann jetzt meine Jacke von der Schneiderin abholen, cool.");
        return "02_CS New day";
    }
    Spiegel_VN.Chp03_01_Dressmaker = Chp03_01_Dressmaker;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_021_ChoresWithKailani() {
        Spiegel_VN.dataForSave.pickedChp03_ChoresWithKailani = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Kailani und ich gehen Hausarbeiten machen.");
        let Chp02ChoresKailaniElementAnswers = {
            PickSceneWaterwell: "Wasser holen gehen.",
            PickSceneWoodChopping: "Holz hacken.",
        };
        let Chp02ChoresKailaniElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02ChoresKailaniElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02ChoresKailaniElement) {
            case Chp02ChoresKailaniElementAnswers.PickSceneWaterwell:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_022_WaterwellKailani);
                Spiegel_VN.dataForSave.pickedChp03_WaterwellKailani = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay wir gehen Wasser holen!");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp02ChoresKailaniElementAnswers.PickSceneWoodChopping:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_021_FirewoodKailani);
                Spiegel_VN.dataForSave.pickedChp03_WoodChoppingKailani = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Kailani und ich gehen Holz hacken!");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            // dataForSave.pickedChp02_TestWithElena = true;
            // console.log("boolean picked Test with Elena:");
            // console.log(dataForSave.pickedChp02_TestWithElena);
            // await ƒS.Speech.tell("Ich", "Teste den Spiegel mit Mutti.");
            // return "01_CS Arrival Home";
        }
        if (Spiegel_VN.dataForSave.pickedChp03_WaterwellKailani) {
            let Chp02ChoresKailaniWaterElementAnswers = {
                iSayTest1: "Test 1 Wasser holen.",
                iSayTest2: "Test 2 Wasser holen.",
            };
            let Chp02ChoresKailaniWaterElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02ChoresKailaniWaterElementAnswers, "choicesCSSclass");
            // *** RESPONSES ***
            switch (Chp02ChoresKailaniWaterElement) {
                case Chp02ChoresKailaniWaterElementAnswers.iSayTest1:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Test 1 Wasser holen");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp02ChoresKailaniWaterElementAnswers.iSayTest2:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Test 2 Wasser holen");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
        }
        if (Spiegel_VN.dataForSave.pickedChp03_WoodChoppingKailani) {
            let Chp02TestMirrorKailaniElementAnswers = {
                iSayTest1: "Test 1 Holz hacken.",
                iSayTest2: "Test 2 Holz hacken.",
            };
            let Chp02TestMirrorKailaniElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02TestMirrorKailaniElementAnswers, "choicesCSSclass");
            // *** RESPONSES ***
            switch (Chp02TestMirrorKailaniElement) {
                case Chp02TestMirrorKailaniElementAnswers.iSayTest1:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Test 1 Holz hacken");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp02TestMirrorKailaniElementAnswers.iSayTest2:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Test 2 Holz hacken");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
        }
    }
    Spiegel_VN.Chp03_021_ChoresWithKailani = Chp03_021_ChoresWithKailani;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_E_DiscoverDonkey() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_E_DiscoverDonkey);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier steht ein Esel? Warum das");
        let Chp02DiscoverDonkeyElementAnswers = {
            PickSceneCloseup: "(Erkunden) Nase streicheln",
            PickSceneReadInscription: "(Erkunden) Inschrift lesen",
            PickSceneLeave: "Zurück",
        };
        let Chp02DiscoverDonkeyElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02DiscoverDonkeyElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02DiscoverDonkeyElement) {
            case Chp02DiscoverDonkeyElementAnswers.PickSceneCloseup:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_E_DiscoverDonkeyCloseup);
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Nase streicheln vom Esel");
                Spiegel_VN.ƒS.Speech.clear();
                // return "01_E_FlowerMerchant";
                break;
            case Chp02DiscoverDonkeyElementAnswers.PickSceneReadInscription:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_E_DiscoverDonkeyCloseup);
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Inschrift lesen" // novel page
                );
                Spiegel_VN.ƒS.Speech.clear();
                // return "01_E_FlowerMerchant";
                break;
            case Chp02DiscoverDonkeyElementAnswers.PickSceneLeave:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Zurück");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_CS New day";
                break;
        }
    }
    Spiegel_VN.Chp03_E_DiscoverDonkey = Chp03_E_DiscoverDonkey;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_E_DiscoverForest() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Was es hier wohl gibt, im Wald?");
        return "02_CS New day";
    }
    Spiegel_VN.Chp03_E_DiscoverForest = Chp03_E_DiscoverForest;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_E_DiscoverLibrary() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_E_DiscoverLibraryOutside);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Juchuu Bücher.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_E_DiscoverLibraryInside);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Du schnupperst und riechst die alten Bücher.");
        let Chp02DiscoverLibraryElementAnswers = {
            PickSceneCloseup: "(Erkunden) Alte Bücher anschauen",
            PickSceneLeave: "Zurück",
        };
        let Chp02DiscoverLibraryElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02DiscoverLibraryElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02DiscoverLibraryElement) {
            case Chp02DiscoverLibraryElementAnswers.PickSceneCloseup:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_E_DiscoverLibraryCloseup);
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Bücher sind ja uralt!");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp02DiscoverLibraryElementAnswers.PickSceneLeave:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Zurück ins Haus");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_CS New day";
                break;
        }
    }
    Spiegel_VN.Chp03_E_DiscoverLibrary = Chp03_E_DiscoverLibrary;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_CS_KailaniMissing() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_CS_KailaniMissing);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Kailani ist weg!");
        // ** RANDOM TEXT ***
        let randomTextChp04KailaniMissing = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp04KailaniMissing) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp04PickSceneElementAnswers = {
            PickSceneTalkToFamily: "Zuerst muss ich mit meiner Familie reden",
            PickSceneTalkToElena: "Vielleicht sollte ich Mutti fragen ...",
            PickSceneResearchLibrary: "Zur Bücherei",
            PickSceneDiscoverGarden: "(Erkunden) Im Garten nach Kailani suchen",
            PickSceneDiscoverMirror: "(Erkunden) Den Spiegel genauer anschauen",
            PickSceneDiscoverGroundFloor: "(Erkunden) Das Erdgeschoss absuchen",
            PickSceneContinue: "Weiter",
        };
        if (!Spiegel_VN.dataForSave.pickedChp04TalkToFamily || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
            !Spiegel_VN.dataForSave.pickedChp04TalkToElena ||
            !Spiegel_VN.dataForSave.pickedChp04ResearchLibrary) {
            delete Chp04PickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp04PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp04PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp04PickSceneElement) {
            case Chp04PickSceneElementAnswers.PickSceneTalkToFamily:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir treffen uns im Esszimmer zum reden");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "04_01 Talk with family";
                break;
            case Chp04PickSceneElementAnswers.PickSceneTalkToElena:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich muss zuerst mit Mutti reden");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "04_02 Talk with Elena";
                break;
            case Chp04PickSceneElementAnswers.PickSceneResearchLibrary:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "In der Bücherei finde ich bestimmt Infos.");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_03 Research library";
                break;
            case Chp04PickSceneElementAnswers.PickSceneDiscoverMirror:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Diesen Spiegel muss ich mir genauer anschauen ...");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_E_Examine mirror";
                break;
            case Chp04PickSceneElementAnswers.PickSceneDiscoverGroundFloor:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich suche erstmal das Erdgeschoss ab.");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_E Search ground floor";
                break;
            case Chp04PickSceneElementAnswers.PickSceneDiscoverGarden:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich suche mal den Garten ab.");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_E Search garden";
                break;
            case Chp04PickSceneElementAnswers.PickSceneContinue:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich gehe jetzt in den Wald cut scene.");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_CS Entry forest";
                break;
        }
    }
    Spiegel_VN.Chp03_CS_KailaniMissing = Chp03_CS_KailaniMissing;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_CS_TurmoilMarketplace() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_022_WaterwellKailani);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Auf dem Marktplatz ist ja was los ...");
        return "03_CS Kailani is missing";
    }
    Spiegel_VN.Chp03_CS_TurmoilMarketplace = Chp03_CS_TurmoilMarketplace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_01_TalkWithFamily() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        Spiegel_VN.dataForSave.pickedChp04TalkToFamily = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir reden und reden und reden ... Kailani ist trotzdem einfach weg!");
        return "03_CS Kailani is missing";
    }
    Spiegel_VN.Chp04_01_TalkWithFamily = Chp04_01_TalkWithFamily;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_02_TalkWithElena() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverKitchen);
        Spiegel_VN.dataForSave.pickedChp04TalkToElena = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Mutti, kann ich mit dir reden?");
        return "03_CS Kailani is missing";
    }
    Spiegel_VN.Chp04_02_TalkWithElena = Chp04_02_TalkWithElena;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_03_ResearchLibrary() {
        Spiegel_VN.dataForSave.pickedChp04ResearchLibrary = true;
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_E_DiscoverLibraryInside);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "In der Bücherei finde ich bestimmt was.");
        return "03_CS Kailani is missing";
    }
    Spiegel_VN.Chp04_03_ResearchLibrary = Chp04_03_ResearchLibrary;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_E_ExamineMirror() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_CS_KailaniMissing);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Der Spiegel glitzert so komisch ...");
        return "03_CS Kailani is missing";
    }
    Spiegel_VN.Chp04_E_ExamineMirror = Chp04_E_ExamineMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_E_SearchGarden() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Vielleicht ist sie im Garten?");
        return "03_CS Kailani is missing";
    }
    Spiegel_VN.Chp04_E_SearchGarden = Chp04_E_SearchGarden;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_E_SearchGroundFloor() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Vielleicht ist sie im Erdgeschoss?");
        return "03_CS Kailani is missing";
    }
    Spiegel_VN.Chp04_E_SearchGroundFloor = Chp04_E_SearchGroundFloor;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_CS_EntryForest() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: ab in den Wald");
        // ** RANDOM TEXT ***
        let randomTextChp05EntryForest = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp05EntryForest) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp05PickSceneElementAnswers = {
            PickSceneGoToClearing: "Hier geht's zur Lichtung",
            PickSceneDiscoverOak: "(Erkunden) Schau mal diese alte Eiche an",
            PickSceneDiscoverRiver: "(Erkunden) Ein kleines Bächlein gibts auch",
            PickSceneContinue: "Weiter",
        };
        if (!Spiegel_VN.dataForSave.pickedChp05GoToClearing || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
            !Spiegel_VN.dataForSave.pickedChp05GiveBirdsFood ||
            !Spiegel_VN.dataForSave.pickedChp05SingToBirds) {
            delete Chp05PickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp05PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp05PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp05PickSceneElement) {
            case Chp05PickSceneElementAnswers.PickSceneGoToClearing:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Zur Lichtung gehen");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "05_01 Clearing"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp05PickSceneElementAnswers.PickSceneDiscoverOak:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "(Erkunden) Eiche anschauen");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "05_E Discover oak";
                break;
            case Chp05PickSceneElementAnswers.PickSceneDiscoverRiver:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Bächlein anschauen.");
                Spiegel_VN.ƒS.Speech.clear();
                return "05_E Discover river";
                break;
            case Chp05PickSceneElementAnswers.PickSceneContinue:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Weiter zur cut scene: go home.");
                Spiegel_VN.ƒS.Speech.clear();
                return "05_CS Go home";
                break;
        }
    }
    Spiegel_VN.Chp04_CS_EntryForest = Chp04_CS_EntryForest;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp05_01_Clearing() {
        Spiegel_VN.dataForSave.pickedChp05GoToClearing = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Diese Lichtung ist irgendwie magisch");
        let Chp05ClearingPickSceneElementAnswers = {
            PickSceneSingToBirds: "Zu Vögeln singen",
            PickSceneGiveBirdsFood: "Zu fressen geben",
            // iSayDiscoverOak: "(Erkunden) Eiche anschauen",
            // iSayDiscoverRiver: "(Erkunden) Bächlein anschauen",
            PickSceneContinue: "Weiter",
        };
        if (!Spiegel_VN.dataForSave.pickedChp05GoToClearing || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
            !Spiegel_VN.dataForSave.pickedChp05GiveBirdsFood ||
            !Spiegel_VN.dataForSave.pickedChp05SingToBirds) {
            delete Chp05ClearingPickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp05ClearingPickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp05ClearingPickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp05ClearingPickSceneElement) {
            case Chp05ClearingPickSceneElementAnswers.PickSceneSingToBirds:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich singe mal zu den Vögeln");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "05_02 Sing to birds"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp05ClearingPickSceneElementAnswers.PickSceneGiveBirdsFood:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich gebe den Vögeln mal zu fressen");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "05_03 Feed birds"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            // case Chp05ClearingPickSceneElementAnswers.iSayDiscoverOak:
            //   // continue path here
            //   // if (dataForSave.score.scoreCouragePoints === 50)
            //   // wie mindestens 50?
            //   await ƒS.Speech.tell("Ich", "(Erkunden) Eiche anschauen");
            //   ƒS.Speech.clear();
            //   // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
            //   // ƒS.Character.hide(characters.Mama);
            //   return "05_E Discover oak";
            //   break;
            // case Chp05ClearingPickSceneElementAnswers.iSayDiscoverRiver:
            //   // continue path here
            //   await ƒS.Speech.tell("Ich", "Bächlein anschauen.");
            //   ƒS.Speech.clear();
            //   return "05_E Discover river";
            //   break;
            case Chp05ClearingPickSceneElementAnswers.PickSceneContinue:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Nochmal zurück zur Ursprungsszene entry forest.");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_CS Entry forest";
                break;
        }
    }
    Spiegel_VN.Chp05_01_Clearing = Chp05_01_Clearing;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp05_02_SingToBirds() {
        Spiegel_VN.dataForSave.pickedChp05SingToBirds = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier singe ich zu den Vögeln");
        return "05_01 Clearing";
    }
    Spiegel_VN.Chp05_02_SingToBirds = Chp05_02_SingToBirds;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp05_03_FeedBirds() {
        Spiegel_VN.dataForSave.pickedChp05GiveBirdsFood = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier füttere ich die Vögel");
        return "05_01 Clearing";
    }
    Spiegel_VN.Chp05_03_FeedBirds = Chp05_03_FeedBirds;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp05_E_DiscoverOak() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Die alte Eiche entdecken");
        return "04_CS Entry forest";
    }
    Spiegel_VN.Chp05_E_DiscoverOak = Chp05_E_DiscoverOak;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp05_E_DiscoverRiver() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Das kleine Bächlein entdecken");
        return "04_CS Entry forest";
    }
    Spiegel_VN.Chp05_E_DiscoverRiver = Chp05_E_DiscoverRiver;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp05_CS_GoHome() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: es wird dunkel, ab nach Hause");
        // ** RANDOM TEXT ***
        let randomTextChp06GoHome = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp06GoHome) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp06PickSceneElementAnswers = {
            PickSceneTalkToMama: "Mama, was gibt's denn?",
            PickSceneDepartureRiver: "Ich muss los ...",
        };
        let Chp06PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp06PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp06PickSceneElement) {
            case Chp06PickSceneElementAnswers.PickSceneTalkToMama:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Hast du etwas für mich?");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "06_02 Recieve iron"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp06PickSceneElementAnswers.PickSceneDepartureRiver:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Meine Reise beginnt");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "06_03 Departure";
                break;
        }
    }
    Spiegel_VN.Chp05_CS_GoHome = Chp05_CS_GoHome;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp06_02_ReceiveItemMama() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier bekomme ich was von Mama");
        let Chp06RecieveIronElementAnswers = {
            iSayYes: "Ja",
            iSayNo: "Nein",
        };
        let Chp06RecieveIronElement = await Spiegel_VN.ƒS.Menu.getInput(Chp06RecieveIronElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp06RecieveIronElement) {
            case Chp06RecieveIronElementAnswers.iSayYes:
                Spiegel_VN.dataForSave.pickedIron = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich nehme den Talisman an");
                Spiegel_VN.ƒS.Speech.clear();
                return "06_03 Departure"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp06RecieveIronElementAnswers.iSayNo:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich nehme den Talisman nicht an");
                Spiegel_VN.ƒS.Speech.clear();
                return "06_03 Departure"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp06_02_ReceiveItemMama = Chp06_02_ReceiveItemMama;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp06_03_DepartureRiver() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Jetzt reise ich in die Spiegelwelt");
        return "06_CS Arrival Meadow";
    }
    Spiegel_VN.Chp06_03_DepartureRiver = Chp06_03_DepartureRiver;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp06_CS_ArrivalMeadow() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: wir sind auf der Wiese angekommen");
        // ** RANDOM TEXT ***
        let randomTextChp07ArrivalMeadow = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp07ArrivalMeadow) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp07PickSceneElementAnswers = {
            PickSceneTravelToWhary: "Richtung Stadt gehen",
            PickSceneDiscoverBees: "(Erkunden) Bienen anschauen",
            PickSceneDiscoverFlowers: "(Erkunden) Blumen anschauen",
            PickSceneContinue: "Weiter",
        };
        if (!Spiegel_VN.dataForSave.pickedChp07TravelToWhary // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
        ) {
            delete Chp07PickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp07PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp07PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp07PickSceneElement) {
            case Chp07PickSceneElementAnswers.PickSceneTravelToWhary:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Lez go to da citayyy");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "07_01 Travel to to Whary"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp07PickSceneElementAnswers.PickSceneDiscoverBees:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Bienen sind so hübsch!");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "07_E Discover bees";
                break;
            case Chp07PickSceneElementAnswers.PickSceneDiscoverFlowers:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Blumen sind so farbig ...");
                Spiegel_VN.ƒS.Speech.clear();
                return "07_E Discover flowers";
                break;
            case Chp07PickSceneElementAnswers.PickSceneContinue:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Weiter zur cut scene: Line at city gates.");
                Spiegel_VN.ƒS.Speech.clear();
                return "07_CS Line at gates";
                break;
        }
    }
    Spiegel_VN.Chp06_CS_ArrivalMeadow = Chp06_CS_ArrivalMeadow;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp07_02_TravelToWhary() {
        Spiegel_VN.dataForSave.pickedChp07TravelToWhary = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Es geht los, es geht los, es geht los nach Wharyyy");
        return "06_CS Arrival Meadow";
    }
    Spiegel_VN.Chp07_02_TravelToWhary = Chp07_02_TravelToWhary;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp07_E_DiscoverBees() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Diese Biene ist echt komisch. So fett. Und grellgelb.");
        return "06_CS Arrival Meadow";
    }
    Spiegel_VN.Chp07_E_DiscoverBees = Chp07_E_DiscoverBees;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp07_E_DiscoverFlowers() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Oops, die Blume geht ja sofort kaputt.");
        return "06_CS Arrival Meadow";
    }
    Spiegel_VN.Chp07_E_DiscoverFlowers = Chp07_E_DiscoverFlowers;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp07_CS_LineAtGates() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: wir stehen an vor den Stadttoren und entdecken Flynn");
        // ** RANDOM TEXT ***
        let randomTextChp08LineAtGates = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp08LineAtGates) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp08PickSceneElementAnswers = {
            PickSceneCatchFlynnGates: "Flynn gleich ansprechen",
            PickSceneEnterCity: "Eintritt Stadt",
        };
        // if (
        //   !dataForSave.pickedChp07TravelToWhary // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
        // ) {
        //   delete Chp08PickSceneElementAnswers.iSayContinue;
        //   // return Chp01_CS_ArrivalHome();
        // }
        let Chp08PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp08PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp08PickSceneElement) {
            case Chp08PickSceneElementAnswers.PickSceneCatchFlynnGates:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay, wir sprechen Flynn gleich an");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "08_01 Meet Flynn gates"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp08PickSceneElementAnswers.PickSceneEnterCity:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Zuerst will ich in diese blöde Stadt");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "08_03 Enter City";
                break;
        }
    }
    Spiegel_VN.Chp07_CS_LineAtGates = Chp07_CS_LineAtGates;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_01_MeetFlynnAtGates() {
        Spiegel_VN.dataForSave.pickedChp08CatchFlynnAtGates = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hey Flynn wir sprechen dich jetzt vor den Toren an.");
        let Chp08ChooseStayElementAnswers = {
            PickSceneGoWithFlynn: "Mit Flynn Bleibe suchen",
            PickSceneGoWithoutFlynn: "Ohne Flynn was suchen",
        };
        //  if (
        //   !dataForSave.pickedChp07TravelToWhary // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
        // ) {
        //   delete Chp08ChooseStayElementAnswers.iSayContinue;
        //   // return Chp01_CS_ArrivalHome();
        // }
        let Chp08ChooseStayElement = await Spiegel_VN.ƒS.Menu.getInput(Chp08ChooseStayElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp08ChooseStayElement) {
            case Chp08ChooseStayElementAnswers.PickSceneGoWithFlynn:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Super, suchen wir uns zusammen eine Bleibe");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "08_01 Meet Flynn gates"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp08ChooseStayElementAnswers.PickSceneGoWithoutFlynn:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Nee, ich möchte lieber alleine bleiben");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "08_04 Choose stay"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp08_01_MeetFlynnAtGates = Chp08_01_MeetFlynnAtGates;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_02_MeetFlynnInAlley() {
        Spiegel_VN.dataForSave.pickedChp08CatchFlynnInAlley = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hi Flynn in der Gasse wir sind jetzt Freunde");
        return "08_03 Enter City";
    }
    Spiegel_VN.Chp08_02_MeetFlynnInAlley = Chp08_02_MeetFlynnInAlley;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_03_EnterCity() {
        Spiegel_VN.dataForSave.pickedChp08EnterCity = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir gehen in die Stadt juchu hoffentlich gibts Drachen");
        let randomTextChp08EnterCity = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp08EnterCity) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp08_1PickSceneElementAnswers = {
            PickSceneCatchFlynnInAlley: "Flynn in Gasse ansprechen",
            PickSceneDiscoverHay: "(Erkunden) Heuballen anschauen)",
            PickSceneDiscoverWindow: "(Erkunden) Schaufenster anschauen)",
            PickSceneDiscoverSpeakToVillagers: "(Erkunden) Passanten ansprechen",
            PickSceneChooseStay: "Bleibe suchen",
        };
        if (!Spiegel_VN.dataForSave.pickedChp08CatchFlynnInAlley
        // !dataForSave.// ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
        ) {
            delete Chp08_1PickSceneElementAnswers.PickSceneChooseStay;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp08_1PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp08_1PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp08_1PickSceneElement) {
            case Chp08_1PickSceneElementAnswers.PickSceneCatchFlynnInAlley:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay, wir sprechen Flynn in der Gasse an");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "08_02 Meet Flynn in alley"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp08_1PickSceneElementAnswers.PickSceneDiscoverHay:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Oke wir schauen jetzt Heu an");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "08_E Discover Hay";
                break;
            case Chp08_1PickSceneElementAnswers.PickSceneDiscoverWindow:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Lass das Schaufenster angucken brudi");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "08_E Discover windows";
                break;
            case Chp08_1PickSceneElementAnswers.PickSceneDiscoverSpeakToVillagers:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will mit diesen Leuten sprechen");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "08_E Discover Villagers";
                break;
            case Chp08_1PickSceneElementAnswers.PickSceneChooseStay:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir suchen jetzt einen Schlafplatz");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "08_04 Choose stay";
                break;
        }
    }
    Spiegel_VN.Chp08_03_EnterCity = Chp08_03_EnterCity;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_0411_NiceStayFlynn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Jetzt habe ich mich für das schöne Gasthaus mit Flynn entschieden");
        return "08_CS Talk To Flynn";
    }
    Spiegel_VN.Chp08_0411_NiceStayFlynn = Chp08_0411_NiceStayFlynn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_041_ChooseNiceStay() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Jetzt habe ich mich für das angeblich hübsche Gasthaus entschieden");
        return "08_CS Sleep";
    }
    Spiegel_VN.Chp08_041_ChooseNiceStay = Chp08_041_ChooseNiceStay;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_0421_UglyStayFlynn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Jetzt habe ich mich für das hässliche Gasthaus mit FLynn entschieden");
        return "08_CS Talk To Flynn";
    }
    Spiegel_VN.Chp08_0421_UglyStayFlynn = Chp08_0421_UglyStayFlynn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_042_ChooseUglyStay() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Jetzt habe ich mich für das hässliche Gasthaus alleine entschieden");
        return "08_CS Sleep";
    }
    Spiegel_VN.Chp08_042_ChooseUglyStay = Chp08_042_ChooseUglyStay;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_04_ChooseStay() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Auf gehts zur Suche nach der Bleibe");
        let Chp08ChooseWhichStayElementAnswers = {
            PickSceneChooseUglyStay: "Mit Flynn Bleibe suchen",
            PickSceneContinueSearch: "Ohne Flynn was suchen",
            PickSceneChooseNiceStay: "Hübsche Bleibe auswählen",
        };
        if (!Spiegel_VN.dataForSave.pickedChp08ChooseContinueSearch // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
        ) {
            delete Chp08ChooseWhichStayElementAnswers.PickSceneChooseNiceStay;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp08ChooseWhichStayElement = await Spiegel_VN.ƒS.Menu.getInput(Chp08ChooseWhichStayElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp08ChooseWhichStayElement) {
            case Chp08ChooseWhichStayElementAnswers.PickSceneChooseUglyStay:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich nehme gleich das hässliche Gasthaus, ist bestimmt billig");
                Spiegel_VN.ƒS.Speech.clear();
                if ((Spiegel_VN.dataForSave.pickedChp08GoWithFlynn = true)) {
                    return "08_0421 Ugly stay with Flynn";
                }
                else if ((Spiegel_VN.dataForSave.pickedChp08GoWithoutFlynn = true)) {
                    return "08_042 Choose ugly stay";
                }
                // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp08ChooseWhichStayElementAnswers.PickSceneContinueSearch:
                Spiegel_VN.dataForSave.pickedChp08ChooseContinueSearch = true;
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich möchte noch weitersuchen");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "08_04 Choose stay";
                break;
            case Chp08ChooseWhichStayElementAnswers.PickSceneChooseNiceStay:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Nehmen wir das hässliche Gasthaus");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                if ((Spiegel_VN.dataForSave.pickedChp08GoWithFlynn = true)) {
                    return "08_0411 Nice stay with Flynn";
                }
                else if ((Spiegel_VN.dataForSave.pickedChp08GoWithoutFlynn = true)) {
                    return "08_041 Choose nice stay";
                }
                break;
        }
    }
    Spiegel_VN.Chp08_04_ChooseStay = Chp08_04_ChooseStay;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_E_DiscoverHay() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier entdecke ich einen Heuballen super cool");
        return "08_03 Enter City";
    }
    Spiegel_VN.Chp08_E_DiscoverHay = Chp08_E_DiscoverHay;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_E_DiscoverVillagers() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier versuche ich, mit ein paar Bewohnern zu reden");
        return "08_03 Enter City";
    }
    Spiegel_VN.Chp08_E_DiscoverVillagers = Chp08_E_DiscoverVillagers;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_E_DiscoverWindows() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier entdecke ich ein Schaufenster super cool");
        return "08_03 Enter City";
    }
    Spiegel_VN.Chp08_E_DiscoverWindows = Chp08_E_DiscoverWindows;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_CS_TalkToFlynn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich lerne Flynn genauer kennen yayy");
        return "08_CS Sleep & new day";
    }
    Spiegel_VN.Chp08_CS_TalkToFlynn = Chp08_CS_TalkToFlynn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_CS_Sleep() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: aufwachen und nach Kailani suchen");
        // ** RANDOM TEXT ***
        let randomTextChp09NewDay = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp09NewDay) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp09PickSceneElementAnswers = {
            PickSceneResearchMarketplace: "Auf Marktplatz informieren",
            PickSceneSpeakToInnkeeper: "Mit der Inhaberin sprechen",
            PickSceneSpeakToCook: "Mit Koch sprechen",
            PickSceneSpeakToStablehand: "Mit Stallmädchen sprechen",
            PickSceneContinue: "Weiter",
        };
        if (!Spiegel_VN.dataForSave.pickedChp09ResearchMarketplace || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
            !Spiegel_VN.dataForSave.pickedChp09TalkToCook ||
            !Spiegel_VN.dataForSave.pickedChp09TalkToInnkeeper ||
            !Spiegel_VN.dataForSave.pickedChp09TalkToStablehand) {
            delete Chp09PickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp09PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp09PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp09PickSceneElement) {
            case Chp09PickSceneElementAnswers.PickSceneResearchMarketplace:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Zum Markplatz dann");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "09_01 Research Marketplace"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp09PickSceneElementAnswers.PickSceneSpeakToCook:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ab in die Küche");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "09_03 TalkToCook";
                break;
            case Chp09PickSceneElementAnswers.PickSceneSpeakToInnkeeper:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wo ist die Inhaberin?");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "09_02 TalkToInnkeeper";
                break;
            case Chp09PickSceneElementAnswers.PickSceneSpeakToStablehand:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will zu den Pferden");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "09_04 Talk to stablehand";
                break;
        }
    }
    Spiegel_VN.Chp08_CS_Sleep = Chp08_CS_Sleep;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_011_Beggar() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier kommt die Bettlerin");
        let Chp09BeggarSceneElementAnswers = {
            PickSceneSpeakToBeggar: "Mit Bettlerin sprechen",
            PickSceneIgnoreBeggar: "Bettlerin ignorieren",
        };
        let Chp09BeggarSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp09BeggarSceneElementAnswers, "choicesCSSclass");
        switch (Chp09BeggarSceneElement) {
            case Chp09BeggarSceneElementAnswers.PickSceneSpeakToBeggar:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay, erzähl mir was du weißt, Bettlerin");
                Spiegel_VN.ƒS.Speech.clear();
                return "08_CS Sleep & new day";
                break;
            case Chp09BeggarSceneElementAnswers.PickSceneIgnoreBeggar:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Neee ich will nicht mit dir reden Bettlerin");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "09_012 Make a wish";
                break;
        }
    }
    Spiegel_VN.Chp09_011_Beggar = Chp09_011_Beggar;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_012_MakeAWish() {
        Spiegel_VN.dataForSave.pickedChp09MakeAWish = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich brauch den Kobold!");
        return "08_CS Sleep & new day";
    }
    Spiegel_VN.Chp09_012_MakeAWish = Chp09_012_MakeAWish;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_01_ResearchMarketplace() {
        Spiegel_VN.dataForSave.pickedChp09ResearchMarketplace = true;
        console.log("Boolean of research marketplace");
        console.log(Spiegel_VN.dataForSave.pickedChp09ResearchMarketplace);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Soo auf dem Markplatz ist ganz schön viel los");
        let Chp09DiscoverMarketplaceElementAnswers = {
            PickSceneDiscoverListenToVillagers: "(Erkunden) Bewohnern zuhören",
            PickSceneMerchants: "Mit den Händlern sprechen",
            PickSceneSpeakToVillagers: "Mit Bewohnern sprechen",
        };
        if (Spiegel_VN.dataForSave.pickedChp09DiscoverMerchants &&
            Spiegel_VN.dataForSave.pickedChp09DiscoverSpeakToVillagers) {
            return "09_011 Beggar";
        }
        let Chp09DiscoverMarketplaceElement = await Spiegel_VN.ƒS.Menu.getInput(Chp09DiscoverMarketplaceElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp09DiscoverMarketplaceElement) {
            case Chp09DiscoverMarketplaceElementAnswers.PickSceneDiscoverListenToVillagers:
                Spiegel_VN.dataForSave.pickedChp09DiscoverListenToVillagers = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich mische mich unter die Leute");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "09_E Listen to villagers"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp09DiscoverMarketplaceElementAnswers.PickSceneMerchants:
                Spiegel_VN.dataForSave.pickedChp09DiscoverMerchants = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich spreche mit den Händlern");
                Spiegel_VN.ƒS.Speech.clear();
                return "09_13 Talk to merchants"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp09DiscoverMarketplaceElementAnswers.PickSceneSpeakToVillagers:
                Spiegel_VN.dataForSave.pickedChp09DiscoverSpeakToVillagers = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich spreche mit den Leuten");
                Spiegel_VN.ƒS.Speech.clear();
                return "09_14 Speak to villagers"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp09_01_ResearchMarketplace = Chp09_01_ResearchMarketplace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_02_TalkToInnkeeper() {
        Spiegel_VN.dataForSave.pickedChp09TalkToInnkeeper = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich rede mit der Inhaberin");
        return "08_CS Sleep & new day";
    }
    Spiegel_VN.Chp09_02_TalkToInnkeeper = Chp09_02_TalkToInnkeeper;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_03_TalkToCook() {
        Spiegel_VN.dataForSave.pickedChp09TalkToCook = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich rede mit dem Koch");
        return "08_CS Sleep & new day";
    }
    Spiegel_VN.Chp09_03_TalkToCook = Chp09_03_TalkToCook;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_04_TalkToStablehand() {
        Spiegel_VN.dataForSave.pickedChp09TalkToStablehand = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich rede mit dem Stallmädchen");
        return "08_CS Sleep & new day";
    }
    Spiegel_VN.Chp09_04_TalkToStablehand = Chp09_04_TalkToStablehand;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_E_ListenToVillagers() {
        Spiegel_VN.dataForSave.pickedChp09DiscoverListenToVillagers = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich höre mir mal an, was die Bewohner so sagen");
        return "09_01 Research Marketplace";
    }
    Spiegel_VN.Chp09_E_ListenToVillagers = Chp09_E_ListenToVillagers;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_E_TalkToMerchants() {
        Spiegel_VN.dataForSave.pickedChp09DiscoverMerchants = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich höre mir mal an, was die Händler so sagen");
        return "09_01 Research Marketplace";
    }
    Spiegel_VN.Chp09_E_TalkToMerchants = Chp09_E_TalkToMerchants;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_E_SpeakToVillagers() {
        Spiegel_VN.dataForSave.pickedChp09DiscoverSpeakToVillagers = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will mit den Bewohnern reden");
        return "09_01 Research Marketplace";
    }
    Spiegel_VN.Chp09_E_SpeakToVillagers = Chp09_E_SpeakToVillagers;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_CS_ArrivalLake() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: wir sind am See angekommen");
        // ** RANDOM TEXT ***
        let Chp10ArrivalLakeElementAnswers = {
            PickSceneDiscoverLake: "(Erkunden) Seeufer anschauen",
            PickSceneBuildARaft: "Floß bauen",
        };
        let Chp10ArrivalLakeElement = await Spiegel_VN.ƒS.Menu.getInput(Chp10ArrivalLakeElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp10ArrivalLakeElement) {
            case Chp10ArrivalLakeElementAnswers.PickSceneDiscoverLake:
                Spiegel_VN.dataForSave.pickedChp09DiscoverListenToVillagers = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay lass das Seeufer genauer anschauen");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "10_E Discover lake"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp10ArrivalLakeElementAnswers.PickSceneBuildARaft:
                Spiegel_VN.dataForSave.pickedChp09DiscoverMerchants = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Naja wir brauchen ein Floß!");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_01 Build a raft"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp09_CS_ArrivalLake = Chp09_CS_ArrivalLake;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_01_HowToCross() {
        let randomTextChp10HowToCross = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp10HowToCross) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp10HowToCrossElementAnswers = {
            iSayStealABoat: "Boot klauen",
            iSayBuildARaft: "Floß bauen",
            iSaySwim: "Schwimmen",
            iSayTurnAround: "Umdrehen",
        };
        do {
            let Chp10HowToCrossElement = await Spiegel_VN.ƒS.Menu.getInput(Chp10HowToCrossElementAnswers, "choicesCSSclass");
            switch (Chp10HowToCrossElement) {
                case Chp10HowToCrossElementAnswers.iSayStealABoat:
                    // continue path here
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Boot klauen? Eher nicht");
                    Spiegel_VN.ƒS.Speech.clear();
                    return "10_01 How to cross"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                    break;
                case Chp10HowToCrossElementAnswers.iSayBuildARaft:
                    Spiegel_VN.dataForSave.pickedRightChoice = true;
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Ein Floß bauen klingt doch gut!");
                    Spiegel_VN.dataForSave.pickedRightChoice = true;
                    Spiegel_VN.ƒS.Speech.clear();
                    return "10_02 On the raft";
                    break;
                case Chp10HowToCrossElementAnswers.iSaySwim:
                    // continue path here
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Schwimmen ist glaub bisschen viel");
                    Spiegel_VN.ƒS.Speech.clear();
                    return "10_01 How to cross";
                    break;
                case Chp10HowToCrossElementAnswers.iSayTurnAround:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Umdrehen ist eigentlich keine Option ... Was ist mit Kailani?");
                    Spiegel_VN.ƒS.Speech.clear();
                    return "10_01 How to cross";
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedRightChoice);
        if (Spiegel_VN.dataForSave.pickedRightChoice) {
            return "10_02 On the raft";
        }
    }
    Spiegel_VN.Chp10_01_HowToCross = Chp10_01_HowToCross;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_02_OnTheRaft() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Juchu Floß bauen. Flynn, was denkst du denn, warum die Leute hier so auf ihr Äußeres fixiert sind?");
        let randomTextChp10BuildARaft = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp10BuildARaft) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp10BuildARaftElementAnswers = {
            iSayExploreTheyAreAfraid: "(Erkunden) Vielleicht haben sie Angst?",
            iSayExploreAttention: "(Erkunden) Sie brauchen die Aufmerksamkeit",
            iSayExploreSick: "(Erkunden) Die Leute sind einfach krank",
            iSayExploreAll: "(Erkunden) Wenn alle so sind ...",
            iSayContinue: "Weiter",
        };
        if (!Spiegel_VN.dataForSave.pickedChoiceChp10ExploreAfraid || // Hier vielleicht counter einbauen? wenn 2 optionen geklickt wurden, erscheint weiter-button
            !Spiegel_VN.dataForSave.pickedChoiceChp10ExploreAttention ||
            !Spiegel_VN.dataForSave.pickedChoiceChp10ExploreAll) {
            delete Chp10BuildARaftElementAnswers.iSayContinue;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp10BuildARaftElement = await Spiegel_VN.ƒS.Menu.getInput(Chp10BuildARaftElementAnswers, "choicesCSSclass");
        switch (Chp10BuildARaftElement) {
            case Chp10BuildARaftElementAnswers.iSayExploreTheyAreAfraid:
                Spiegel_VN.dataForSave.pickedChoiceChp10ExploreAfraid = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Angst vor Verurteilung");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_01 Build a raft"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp10BuildARaftElementAnswers.iSayExploreAttention:
                Spiegel_VN.dataForSave.pickedChoiceChp10ExploreAttention = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Mit der Aufmerksamkeit fühlen sie sich vielleicht besser");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_01 Build a raft";
                break;
            case Chp10BuildARaftElementAnswers.iSayExploreSick:
                Spiegel_VN.dataForSave.pickedChoiceChp10ExploreSick = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Sie sind einfach verrückt! Was soll diese Oberflächlichkeit");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_01 Build a raft";
                break;
            case Chp10BuildARaftElementAnswers.iSayExploreAll:
                Spiegel_VN.dataForSave.pickedChoiceChp10ExploreAll = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Na gut, wenn es alle machen?");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_01 Build a raft";
                break;
            case Chp10BuildARaftElementAnswers.iSayContinue:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Es geht weiter");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_03 Cross lake";
                break;
        }
    }
    Spiegel_VN.Chp10_02_OnTheRaft = Chp10_02_OnTheRaft;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_03_CrossLake() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir überqueren den See");
        let Chp10CrossingLakeElementAnswers = {
            PickSceneDiscoverCitylights: "Die Stadtlichter ...",
            PickSceneDiscoverLakewater: "Wasser anschauen",
            PickSceneLookAhead: "Nach vorne schauen",
        };
        let Chp10CrossingLakeElement = await Spiegel_VN.ƒS.Menu.getInput(Chp10CrossingLakeElementAnswers, "choicesCSSclass");
        switch (Chp10CrossingLakeElement) {
            case Chp10CrossingLakeElementAnswers.PickSceneDiscoverCitylights:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Von hier sieht es gar nicht so schlimm aus");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_03 Cross lake"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp10CrossingLakeElementAnswers.PickSceneDiscoverLakewater:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Lass mal das Wasser anschauen");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_03 Cross lake"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp10CrossingLakeElementAnswers.PickSceneLookAhead:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Du wendest den Kopf nach vorne und schaust in die Dunkelheit");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_04 Attack birds"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp10_03_CrossLake = Chp10_03_CrossLake;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_041_SingToBirds() {
        Spiegel_VN.dataForSave.pickedChp10SingToBirds = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "La la la... ich singe zu den Vögeln");
        return "10_051 Birds become friendly";
    }
    Spiegel_VN.Chp10_041_SingToBirds = Chp10_041_SingToBirds;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_042_UseMirror() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich benutze den Spiegel als Schutzschild");
        return "10_052 Birds disappear";
    }
    Spiegel_VN.Chp10_042_UseMirror = Chp10_042_UseMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_04_AttackBirds() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hilfe Vögel attackieren uns!");
        let Chp10AttackBirdsElementAnswers = {
            PickSceneSingToBirds: "Zu Vögeln singen",
            PickSceneHitWithOar: "(Erkunden) Wegschlagen",
            PickSceneUseMirror: "Spiegel als Schutzschild benutzen",
        };
        let Chp10AttackBirdsElement = await Spiegel_VN.ƒS.Menu.getInput(Chp10AttackBirdsElementAnswers, "choicesCSSclass");
        switch (Chp10AttackBirdsElement) {
            case Chp10AttackBirdsElementAnswers.PickSceneSingToBirds:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich versuchs mal mit singen");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_041 Sing to birds"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp10AttackBirdsElementAnswers.PickSceneHitWithOar:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Kann ich sie wegschlagen?");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_04 Attack birds"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp10AttackBirdsElementAnswers.PickSceneUseMirror:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Kann ich den Spiegel benutzen?");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_042 Use Mirror"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp10_04_AttackBirds = Chp10_04_AttackBirds;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_051_FriendlyBirds() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Vögel werden freundlich");
        return "10_CS Arrival other side";
    }
    Spiegel_VN.Chp10_051_FriendlyBirds = Chp10_051_FriendlyBirds;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_052_BirdsDisappear() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Vögel verschwinden");
        return "10_CS Arrival other side";
    }
    Spiegel_VN.Chp10_052_BirdsDisappear = Chp10_052_BirdsDisappear;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_E_CityLightsWhary() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Stadtlichter sehen schön aus");
        return "10_03 Cross lake";
    }
    Spiegel_VN.Chp10_E_CityLightsWhary = Chp10_E_CityLightsWhary;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_E_DiscoverLake() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Der See ist echt gruselig");
        return "09_CS Arrival lake";
    }
    Spiegel_VN.Chp10_E_DiscoverLake = Chp10_E_DiscoverLake;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_E_DiscoverLakewater() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Das Wasser ist echt dunkel und gruselig");
        return "10_03 Cross lake";
    }
    Spiegel_VN.Chp10_E_DiscoverLakewater = Chp10_E_DiscoverLakewater;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_CS_ArrivalOtherSide() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: wir sind auf der anderen Seite des Sees angekommen");
        // ** RANDOM TEXT ***
        let randomTextChp11ArrivalOtherSide = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp11ArrivalOtherSide) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp11ArrivalOtherSideElementAnswers = {
            PickSceneDiscoverTower: "(Erkunden) Turm anschauen",
            PickSceneDiscoverHuts: "(Erkunden) Hütten anschauen",
            PickSceneDiscoverForest: "(Erkunden) Wald anschauen",
            PickSceneSearchForHidingPlace: "Nach Versteck suchen",
        };
        let Chp11ArrivalOtherSideElement = await Spiegel_VN.ƒS.Menu.getInput(Chp11ArrivalOtherSideElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp11ArrivalOtherSideElement) {
            case Chp11ArrivalOtherSideElementAnswers.PickSceneDiscoverForest:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay lass den Wald genauer anschauen");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_E Discover forest"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp11ArrivalOtherSideElementAnswers.PickSceneDiscoverHuts:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Hütten anschauen");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_E Discover huts"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp11ArrivalOtherSideElementAnswers.PickSceneDiscoverTower:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Turm anschauen");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_E Discover tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp11ArrivalOtherSideElementAnswers.PickSceneSearchForHidingPlace:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Erstmal nach einem Schlafplatz suchen");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_01 Search for hiding place"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp10_CS_ArrivalOtherSide = Chp10_CS_ArrivalOtherSide;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_01_SearchHidingPlace() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Suchen wir mal nach einem Versteck");
        let Chp11HidingPlacePickSceneElementAnswers = {
            PickSceneDiscoverIron: "Wald erkunden",
            PickSceneSearchSleepingPlace: "Nach Schlafplatz suchen",
        };
        if (!Spiegel_VN.dataForSave.pickedIron // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
        ) {
            delete Chp11HidingPlacePickSceneElementAnswers.PickSceneDiscoverIron;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp11HidingPlacePickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp11HidingPlacePickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp11HidingPlacePickSceneElement) {
            case Chp11HidingPlacePickSceneElementAnswers.PickSceneDiscoverIron:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Da hinten glitzert was im Wald ...");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_02 Find iron"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp11HidingPlacePickSceneElementAnswers.PickSceneSearchSleepingPlace:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wo können wir uns niederlassen?");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_03 Watch factory"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp11_01_SearchHidingPlace = Chp11_01_SearchHidingPlace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_02_FindIron() {
        Spiegel_VN.dataForSave.pickedIron = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier finde ich ein Stück Eisen");
        return "11_01 Search for hiding place";
    }
    Spiegel_VN.Chp11_02_FindIron = Chp11_02_FindIron;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_03_WatchFactory() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Von hier aus kann man die Fabrik gut beobachten");
        let Chp11WatchFactoryPickSceneElementAnswers = {
            PickSceneTryBreakIn: "Gleich einbrechen",
            PickSceneSleep: "Zuerst schlafen gehen",
        };
        let Chp11WatchFactoryPickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp11WatchFactoryPickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp11WatchFactoryPickSceneElement) {
            case Chp11WatchFactoryPickSceneElementAnswers.PickSceneTryBreakIn:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Lass gleich versuchen, einzubrechen!");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_04 Try break-in"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp11WatchFactoryPickSceneElementAnswers.PickSceneSleep:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will zuerst schlafen");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_CS Sleep"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp11_03_WatchFactory = Chp11_03_WatchFactory;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_04_TryBreakIn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir versuchen einzubrechen, aber es klappt nicht, zu viele Wachen!");
        return "11_03 Watch factory";
    }
    Spiegel_VN.Chp11_04_TryBreakIn = Chp11_04_TryBreakIn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_E_DiscoverForest() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Den Wald erkunden");
        return "10_CS Arrival other side";
    }
    Spiegel_VN.Chp11_E_DiscoverForest = Chp11_E_DiscoverForest;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_E_DiscoverHuts() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier erkundige ich die Hütten");
        return "10_CS Arrival other side";
    }
    Spiegel_VN.Chp11_E_DiscoverHuts = Chp11_E_DiscoverHuts;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_E_DiscoverTower() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will mir den Turm genauer anschauen");
        return "10_CS Arrival other side";
    }
    Spiegel_VN.Chp11_E_DiscoverTower = Chp11_E_DiscoverTower;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_CS_Sleep() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wieder schlafen yay");
        let Chp11HowSneakInElementAnswers = {
            PickSceneSneakInBack: "Hinten rein schleichen",
            PickSceneSneakAmongSlaves: "Vorne mit Sklaven reinschleichen",
        };
        let Chp11HowSneakInElement = await Spiegel_VN.ƒS.Menu.getInput(Chp11HowSneakInElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp11HowSneakInElement) {
            case Chp11HowSneakInElementAnswers.PickSceneSneakInBack:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Lass hinten rein");
                Spiegel_VN.ƒS.Speech.clear();
                return "12_011 Sneak-in"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp11HowSneakInElementAnswers.PickSceneSneakAmongSlaves:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir mischen uns unter die Sklaven");
                Spiegel_VN.ƒS.Speech.clear();
                return "12_012 Sneak-in amongst slaves"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp11_CS_Sleep = Chp11_CS_Sleep;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_011_SneakIn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir versuchen jetzt von hinten einzubrechen");
        return "12_02 Enter factory";
    }
    Spiegel_VN.Chp12_011_SneakIn = Chp12_011_SneakIn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_012_SneakAmongSlaves() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir versuchen uns zwischen den Sklaven einzuschleichen");
        return "12_02 Enter factory";
    }
    Spiegel_VN.Chp12_012_SneakAmongSlaves = Chp12_012_SneakAmongSlaves;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_02_EnterFactory() {
        // ** RANDOM TEXT ***
        let randomTextChp12EnterFactory = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp12EnterFactory) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp12FactoryPickSceneElementAnswers = {
            PickSceneDiscoverTalkToSlaves: "(Erkunden) Mit Sklaven reden",
            PickSceneDiscoverSearchKailani: "(Erkunden) Kailani suchen",
            PickSceneDiscoverListenToGuards: "(Erkunden) Wachen überhören",
            PickSceneDiscoverProductionSite: "Spiegelräume anschauen",
            PickSceneBack: "Zurück zum Versteck",
        };
        let Chp12FactoryPickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp12FactoryPickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp12FactoryPickSceneElement) {
            case Chp12FactoryPickSceneElementAnswers.PickSceneDiscoverTalkToSlaves:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich rede mal mit den Leuten hier");
                Spiegel_VN.ƒS.Speech.clear();
                return "12_031 Talk to slaves"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp12FactoryPickSceneElementAnswers.PickSceneDiscoverSearchKailani:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Kailani suchen!");
                Spiegel_VN.ƒS.Speech.clear();
                return "12_032 Search for Kailani"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp12FactoryPickSceneElementAnswers.PickSceneDiscoverListenToGuards:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will die Wachen überhören");
                Spiegel_VN.ƒS.Speech.clear();
                return "12_033 Listen to guards"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp12FactoryPickSceneElementAnswers.PickSceneDiscoverProductionSite:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Spiegelräume genauer anschauen");
                Spiegel_VN.ƒS.Speech.clear();
                return "12_E Discover production site"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp12FactoryPickSceneElementAnswers.PickSceneBack:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Zurück zum Versteck");
                Spiegel_VN.ƒS.Speech.clear();
                return "12_04 Back to hiding place"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp12_02_EnterFactory = Chp12_02_EnterFactory;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_031_TalkToSlaves() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Was ist denn mit diesen Leuten?");
        return "12_02 Enter factory";
    }
    Spiegel_VN.Chp12_031_TalkToSlaves = Chp12_031_TalkToSlaves;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_032_SearchForKailani() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Kailani muss doch irgendwo sein!");
        return "12_02 Enter factory";
    }
    Spiegel_VN.Chp12_032_SearchForKailani = Chp12_032_SearchForKailani;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_033_ListenToGuards() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Wachen schwätzen doch bestimmt viel");
        return "12_02 Enter factory";
    }
    Spiegel_VN.Chp12_033_ListenToGuards = Chp12_033_ListenToGuards;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_051_BirdsOfferHelp() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier bieten mir die Vögel ihre Hilfe an, weil ich vorher zu ihnen gesungen habe");
        return "12_CS Talk to Flynn";
    }
    Spiegel_VN.Chp12_051_BirdsOfferHelp = Chp12_051_BirdsOfferHelp;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_052_MakeAWish() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich muss einen meiner drei Wünsche verwenden, wo ist der Kobold?");
        return "12_CS Talk to Flynn";
    }
    Spiegel_VN.Chp12_052_MakeAWish = Chp12_052_MakeAWish;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_04_BackToHidingPlace() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Gehen wir zurück zum Versteck");
        if (Spiegel_VN.dataForSave.pickedChp10SingToBirds) {
            return "12_051 Birds offer help";
        }
        else {
            return "12_052 Make a wish";
        }
    }
    Spiegel_VN.Chp12_04_BackToHidingPlace = Chp12_04_BackToHidingPlace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_E_DiscoverVillage() { }
    Spiegel_VN.Chp12_E_DiscoverVillage = Chp12_E_DiscoverVillage;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_E_Productionsite() { }
    Spiegel_VN.Chp12_E_Productionsite = Chp12_E_Productionsite;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_CS_TalkToFlynn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier bespreche ich mit Flynn alles, was passiert ist und wie wir vorgehen");
        return "13_01 Entry village";
    }
    Spiegel_VN.Chp12_CS_TalkToFlynn = Chp12_CS_TalkToFlynn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_01_EntryVillage() {
        let randomTextChp13VillageFactory = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp13VillageFactory) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp13VillagePickSceneElementAnswers = {
            PickSceneDiscoverWatchGuard: "(Erkunden) Wachen beobachten",
            PickSceneDiscoverSneakAround: "(Erkunden) Herumschleichen",
            PickSceneGoToTower: "Auf zum Turm",
        };
        let Chp13VillagePickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp13VillagePickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp13VillagePickSceneElement) {
            case Chp13VillagePickSceneElementAnswers.PickSceneDiscoverWatchGuard:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will die Wachen beobachten");
                Spiegel_VN.ƒS.Speech.clear();
                return "13_E Discover watch guard"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp13VillagePickSceneElementAnswers.PickSceneDiscoverSneakAround:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Lass bisschen rumschleichen");
                Spiegel_VN.ƒS.Speech.clear();
                return "13_E Sneak around tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp13VillagePickSceneElementAnswers.PickSceneGoToTower:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir müssen zum Turm!");
                Spiegel_VN.ƒS.Speech.clear();
                return "13_02 Get into tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp13_01_EntryVillage = Chp13_01_EntryVillage;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_02_GetIntoTower() {
        // ***BEGINN SZENE***
        let randomTextChp13GetIntoTower = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp13GetIntoTower) {
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
        // *** SCENE OPTIONS ***
        let Chp13GetIntoTowerElementAnswers = {
            iSayCharmGuards: "Wächter mit Charm überzeugen.",
            iSayPersuadeGuards: "Wächter überzeugen.",
            iSayConfrontGuards: "Wächter überlisten",
        };
        // if (
        //   !dataForSave.score.scoreEmpathyPoints 50){ // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und) {
        //   delete Chp13GetIntoTowerElementAnswers.iSayCharmGuards;
        //   // return Chp01_CS_ArrivalHome();
        // }
        do {
            let Chp13GetIntoTowerElement = await Spiegel_VN.ƒS.Menu.getInput(Chp13GetIntoTowerElementAnswers, "choicesCSSclass");
            switch (Chp13GetIntoTowerElement) {
                case Chp13GetIntoTowerElementAnswers.iSayCharmGuards: // hier Punktezahl nicht vergessen!
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Wie kann ich die Wachen charmant überzeugen?");
                    Spiegel_VN.ƒS.Speech.clear();
                    return "13_02 Get into tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                    break;
                case Chp13GetIntoTowerElementAnswers.iSayPersuadeGuards: // hier Punktezahl nicht vergessen!
                    Spiegel_VN.dataForSave.pickedRightChoice = true;
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will die Wachen überreden!");
                    Spiegel_VN.ƒS.Speech.clear();
                    // return "13_03 Entry tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                    break;
                case Chp13GetIntoTowerElementAnswers.iSayConfrontGuards: // hier Punktezahl nicht vergessen!
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Wachen konfrontieren");
                    Spiegel_VN.ƒS.Speech.clear();
                    return "13_02 Get into tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedRightChoice);
        if (Spiegel_VN.dataForSave.pickedRightChoice) {
            return "13_03 Entry tower";
        }
    }
    Spiegel_VN.Chp13_02_GetIntoTower = Chp13_02_GetIntoTower;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_03_EntryTower() {
        let randomTextChp13GetIntoTower = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp13GetIntoTower) {
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
        let Chp13EntryTowerElementAnswers = {
            PickSceneDiscoverLockedDoor: "(Erkunden) Geschlossene Tür.",
            PickSceneDiscoverFamilyPortrait: "(Erkunden) Portrait anschauen.",
            PickSceneDiscoverTowerWindow: "(Erkunden) Aus Turmfenster schauen",
            PickSceneSneakPastDemon: "An Dämon vorbeischleichen",
        };
        let Chp13EntryTowerTowerElement = await Spiegel_VN.ƒS.Menu.getInput(Chp13EntryTowerElementAnswers, "choicesCSSclass");
        switch (Chp13EntryTowerTowerElement) {
            case Chp13EntryTowerElementAnswers.PickSceneDiscoverLockedDoor: // hier Punktezahl nicht vergessen!
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Was ist das für eine Tür?");
                Spiegel_VN.ƒS.Speech.clear();
                return "13_E Discover locked door"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp13EntryTowerElementAnswers.PickSceneDiscoverFamilyPortrait:
                Spiegel_VN.dataForSave.pickedRightChoice = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Das sieht ja gruselig aus ...");
                Spiegel_VN.ƒS.Speech.clear();
                return "13_E Discover family portrait"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp13EntryTowerElementAnswers.PickSceneDiscoverTowerWindow: // hier Punktezahl nicht vergessen!
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier kann ich aus dem Fenster schauen");
                Spiegel_VN.ƒS.Speech.clear();
                return "13_E Discover tower window"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp13EntryTowerElementAnswers.PickSceneSneakPastDemon: // hier Punktezahl nicht vergessen!
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Jetzt müssen wir uns am Dämon vorbeischleichen");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_04 Sneak past demon"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp13_03_EntryTower = Chp13_03_EntryTower;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_04_SneakPastDemon() {
        // !Idee 1: Mit Reimen bzw Gesang Dämon ablenken (je nach Gesichtsausdruck von ihm kann Spielerin abschätzen, ob sie wirken oder nicht)
        // Idee 2: geradeaus/zurück/rechts/links navigieren, dämon ändert random seine position und spielerin muss dementsprechend reagieren. vll nen counter einbauen, nachdem er abgelaufen is, reset und von vorne?
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir schleichen uns am Dämon vorbei!");
        // *** MINIGAME ***
        if (!Spiegel_VN.dataForSave.pickedIron) {
            return "14.2_01 Realization mirror";
        }
        else {
            return "14.1_01 Destroy mirror";
        }
    }
    Spiegel_VN.Chp13_04_SneakPastDemon = Chp13_04_SneakPastDemon;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_E_DiscoverFamilyPortrait() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wer ist wohl hier abgebildet?");
        return "13_03 Entry tower";
    }
    Spiegel_VN.Chp13_E_DiscoverFamilyPortrait = Chp13_E_DiscoverFamilyPortrait;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_E_DiscoverLockedDoor() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich frage mich, was hinter dieser Tür ist ...");
        return "13_03 Entry tower";
    }
    Spiegel_VN.Chp13_E_DiscoverLockedDoor = Chp13_E_DiscoverLockedDoor;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_E_DiscoverSneakAround() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich schleiche herum, ich schleiche ums Dorf, yay");
        return "13_01 Entry village";
    }
    Spiegel_VN.Chp13_E_DiscoverSneakAround = Chp13_E_DiscoverSneakAround;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_E_DiscoverTowerWindow() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Alles so grell und farbig (Sicht aus Fenster)");
        return "13_03 Entry tower";
    }
    Spiegel_VN.Chp13_E_DiscoverTowerWindow = Chp13_E_DiscoverTowerWindow;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_E_DiscoverWatchGuard() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich muss die Wachen beobachten");
        return "13_01 Entry village";
    }
    Spiegel_VN.Chp13_E_DiscoverWatchGuard = Chp13_E_DiscoverWatchGuard;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_CS_EntryMirrorRoom() {
        // hier counter einbauen: beim 3. Mal klicken gehts weiter
        console.log("Boolean picked Iron");
        console.log(Spiegel_VN.dataForSave.pickedIron);
        if (!Spiegel_VN.dataForSave.pickedIron) {
            return "14.2_01 Realization mirror";
        }
    }
    Spiegel_VN.Chp13_CS_EntryMirrorRoom = Chp13_CS_EntryMirrorRoom;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp141_01_DestroyMirror() {
        // hier counter einbauen: beim dritten mal klicken gehts weiter
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir müssen die Spiegel zerstören! Hinweis: schau in dein Inventar (Eisen holen)");
        await Spiegel_VN.ƒS.Sound.play; // vielleicht einfach 3x?
        return "14.1_02 Demon dies";
    }
    Spiegel_VN.Chp141_01_DestroyMirror = Chp141_01_DestroyMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp141_02_DemonDies() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir habens geschafft, die Spiegel sind kaputt, der Dämon stirbt");
        return "14.1_CS Balcony tower";
    }
    Spiegel_VN.Chp141_02_DemonDies = Chp141_02_DemonDies;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp14_CS_BalconyTower() {
        let randomTextChp14GoodEndingBalcony = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp14GoodEndingBalcony) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp14_1PickSceneElementAnswers = {
            PickSceneDiscoverDemonRoom: "(Erkunden) Dämonzimmer anschauen",
            PickSceneDiscoverMirrorRoom: "(Erkunden) Spiegelzimmer anschauen",
            PickSceneFindKailani: "Raus und Kailani finden",
        };
        let Chp14_1PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp14_1PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp14_1PickSceneElement) {
            case Chp14_1PickSceneElementAnswers.PickSceneDiscoverDemonRoom:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wie siehts hier im Dämonzimmer so aus?");
                Spiegel_VN.ƒS.Speech.clear();
                return "15_E Discover demon room"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp14_1PickSceneElementAnswers.PickSceneDiscoverMirrorRoom:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Spiegelzimmer anschauen wowww");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "15_E Discover mirror room";
                break;
            case Chp14_1PickSceneElementAnswers.PickSceneFindKailani:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Komm wir suchen Kailani!!");
                Spiegel_VN.ƒS.Speech.clear();
                return "15_01 Reunion Kailani";
                break;
        }
    }
    Spiegel_VN.Chp14_CS_BalconyTower = Chp14_CS_BalconyTower;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp142_01_RealizationMirror() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Shit, wir haben kein Eisen dabei, jetzt ist es vorbei");
        return "14.2_02 Caught by demon";
    }
    Spiegel_VN.Chp142_01_RealizationMirror = Chp142_01_RealizationMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp142_02_CaughtByDemon() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay wir werden vom Dämon gefasst, ciao");
        return "14.2_03 Transformation into slaves";
    }
    Spiegel_VN.Chp142_02_CaughtByDemon = Chp142_02_CaughtByDemon;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp142_03_TransformationSlaves() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Jetzt werden wir selber in Sklaven verwandelt, shit");
        return "14.2_End Empty Scene";
    }
    Spiegel_VN.Chp142_03_TransformationSlaves = Chp142_03_TransformationSlaves;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp142_End_EmptyScene() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "SCHLECHT GELAUFEN, ENDE");
    }
    Spiegel_VN.Chp142_End_EmptyScene = Chp142_End_EmptyScene;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp15_01_ReunionKailani() {
        // hier muss dialog und char rein: weil kailani hier auf dem Platz vor dem Turm ist. also, frohes wiedersehen, dann kommen 2 optionen
        let Chp15ReunionKailaniPickSceneElementAnswers = {
            PickSceneSpeakFreedVillagers: "(Erkunden) Mit befreiten Leuten sprechen",
            PickSceneGoToLake: "Zurück zum See",
        };
        let Chp15ReunionKailaniPickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp15ReunionKailaniPickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp15ReunionKailaniPickSceneElement) {
            case Chp15ReunionKailaniPickSceneElementAnswers.PickSceneSpeakFreedVillagers:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Hey Leute, erzählt mal von euren Erfahrungen");
                Spiegel_VN.ƒS.Speech.clear();
                return "15_E Talk to freed villagers"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp15ReunionKailaniPickSceneElementAnswers.PickSceneGoToLake:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay, wir wollen endlich heim");
                Spiegel_VN.ƒS.Speech.clear();
                return "15_CS Go to lake"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp15_01_ReunionKailani = Chp15_01_ReunionKailani;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp15_E_DiscoverDemonRoom() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir entdecken das Dämonzimmer juchu");
        return "14.1_CS Balcony tower";
    }
    Spiegel_VN.Chp15_E_DiscoverDemonRoom = Chp15_E_DiscoverDemonRoom;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp15_E_DiscoverMirrorRoom() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir entdecken das Spiegelzimmer juchu");
        return "14.1_CS Balcony tower";
    }
    Spiegel_VN.Chp15_E_DiscoverMirrorRoom = Chp15_E_DiscoverMirrorRoom;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp15_E_TalkToFreedVillagers() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich spreche mit den befreiten Sklaven und Bewohnern");
        return "15_01 Reunion Kailani";
    }
    Spiegel_VN.Chp15_E_TalkToFreedVillagers = Chp15_E_TalkToFreedVillagers;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp15_CS_GoToLake() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: Ankunft am Seeufer zum Zurückreisen");
        return "16_01 Confrontation Flynn";
    }
    Spiegel_VN.Chp15_CS_GoToLake = Chp15_CS_GoToLake;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp16_01_ConfrontationFlynn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier gibts Stress mit Flynn, weil wir rausfinden, dass er nen Splitter eingesteckt hat und nen Spion war");
        return "16_02 Make a wish";
    }
    Spiegel_VN.Chp16_01_ConfrontationFlynn = Chp16_01_ConfrontationFlynn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp16_021_GoHomeAlone() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Juche nach Hause wir reisen mit dem Koboldwunsch");
        return "16_CS Reunion family";
    }
    Spiegel_VN.Chp16_021_GoHomeAlone = Chp16_021_GoHomeAlone;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp16_022_GoHomeWithFlynn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Juche nach Hause mit Flynn wir reisen mit dem Koboldwunsch");
        return "16_CS Reunion family";
    }
    Spiegel_VN.Chp16_022_GoHomeWithFlynn = Chp16_022_GoHomeWithFlynn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp16_02_MakeAWish() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier müssen wir den Kobold rufen, um heimzureisen, weil alle Spiegel jetzt kaputt sind");
        let Chp16PickSceneElementAnswers = {
            PickSceneGoHomeAlone: "Heimreise",
            PickSceneGoHomeWithFlynn: "Flynn mitnehmen",
        };
        if (
        // !dataForSave.score.scoreEmpathyPoints >= 80 ||
        !Spiegel_VN.dataForSave.pickedChp08TrustFlynn) {
            delete Chp16PickSceneElementAnswers.PickSceneGoHomeWithFlynn;
        }
        let Chp16PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp16PickSceneElementAnswers, "choicesCSSclass");
        switch (Chp16PickSceneElement) {
            case Chp16PickSceneElementAnswers.PickSceneGoHomeAlone:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "So auf gehts nach Hause");
                Spiegel_VN.ƒS.Speech.clear();
                return "16_021 Go home alone"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp16PickSceneElementAnswers.PickSceneGoHomeWithFlynn:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "So auf gehts nach Hause mit Flynn");
                Spiegel_VN.ƒS.Speech.clear();
                return "16_022 Go home with Flynn"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp16_02_MakeAWish = Chp16_02_MakeAWish;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp16_CS_ReunionFamily() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Daheim angekommen yay");
        return "16_End Empty Scene";
    }
    Spiegel_VN.Chp16_CS_ReunionFamily = Chp16_CS_ReunionFamily;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp16_End_EmptyScene() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "YAY GUTES ENDE ALLES GUT");
    }
    Spiegel_VN.Chp16_End_EmptyScene = Chp16_End_EmptyScene;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Auswahlmöglichkeiten() {
        console.log("Test Szene Auswahlmöglichkeiten");
        await Spiegel_VN.ƒS.Speech.tell("Luna", "Test Choices");
        // ---
        // let score = 13;
        let testDialogueAnswers = {
            iSayGreen: "Green.",
            iSayBlue: "Blue",
            iSayEyes: "I luv eyez"
        };
        // if (score <= 10) {
        //   //   delete TestDialogueAnswers.iSayBlue;
        //   delete TestDialogueAnswers.iSayEyes;
        // }
        let pickediSayBlue;
        let pickediSayGreen;
        let pickediSayEyes;
        do {
            if (pickediSayBlue) {
                delete testDialogueAnswers.iSayBlue;
            }
            if (pickediSayGreen) {
                delete testDialogueAnswers.iSayGreen;
            }
            if (pickediSayEyes) {
                delete testDialogueAnswers.iSayEyes;
            }
            let testDialogue = await Spiegel_VN.ƒS.Menu.getInput(testDialogueAnswers, "choicesCSSclass");
            switch (testDialogue) {
                case testDialogueAnswers.iSayBlue:
                    // continue path here
                    pickediSayBlue = true;
                    Spiegel_VN.dataForSave.pickedChoice = true;
                    await Spiegel_VN.ƒS.Speech.tell("Hannahh", "I love blue yay");
                    // return "Auswahlmöglichkeiten";
                    break;
                case testDialogueAnswers.iSayGreen:
                    // continue path here
                    pickediSayGreen = true;
                    Spiegel_VN.dataForSave.pickedChoice = true;
                    await Spiegel_VN.ƒS.Speech.tell("Luna", "I love green yay");
                    // return "Auswahlmöglichkeiten";
                    break;
                case testDialogueAnswers.iSayEyes:
                    pickediSayEyes = true;
                    Spiegel_VN.dataForSave.pickedChoice = true;
                    await Spiegel_VN.ƒS.Speech.tell("Hanahhh", "YOUR COLOR EYEZ ARE MY FAVORITE");
                    // return "Auswahlmöglichkeiten";
                    break;
                    await Spiegel_VN.ƒS.Speech.tell("", "");
            }
        } while (Spiegel_VN.dataForSave.pickedChoice);
    }
    Spiegel_VN.Auswahlmöglichkeiten = Auswahlmöglichkeiten;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Diary() {
        // Konzept: abends tagebuch schreiben
        // Novel page. Option bauen: 3x Satzanfang ... dann 3x Satzmitte ... dann 3x Satzende
        // geht nur, wenn man Tagebuch am Anfang mitnimmt!
        // vielleicht am Ende Kailani oder Flynn schenken? (Flynn, wenn er nicht mitkommt)
    }
    Spiegel_VN.Diary = Diary;
})(Spiegel_VN || (Spiegel_VN = {}));
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
    async function MinigameDemon() {
        //*** DIALOGRUNDE 1 */
        // let loopend = 0;
        // while (loopend == 0) {
        let MinigameDemonLoop1ElementAnswers = {
            iSayRhyme1: "Reim 1.",
            iSayRyhme2: "Reim 2",
            iSayRhyme3: "Reim 3",
        };
        let MinigameDemonLoop1Element = await Spiegel_VN.ƒS.Menu.getInput(MinigameDemonLoop1ElementAnswers, "choicesCSSclass");
        switch (MinigameDemonLoop1Element) {
            case MinigameDemonLoop1ElementAnswers.iSayRhyme1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Reim 1, angry expression");
                Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Demon, Spiegel_VN.characters.Demon.pose.angry, Spiegel_VN.ƒS.positionPercent(70, 100));
                // return
                break;
        }
        //*** SCHLEIFE 2 */
        // how await?
        // await ƒS.Speech.tell("Narrator", "Soweit, so gut!");
        let MinigameDemonLoop2ElementAnswers = {
            iSayRhyme4: "Reim 4",
            iSayRyhme5: "Reim 5",
            iSayRhyme6: "Reim 6",
        };
        let MinigameDemonLoop2Element = await Spiegel_VN.ƒS.Menu.getInput(MinigameDemonLoop2ElementAnswers, "choicesCSSclass");
        switch (MinigameDemonLoop2Element) {
            case MinigameDemonLoop2ElementAnswers.iSayRhyme4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Reim 4, angry expression");
                Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Demon, Spiegel_VN.characters.Demon.pose.angry, Spiegel_VN.ƒS.positionPercent(70, 100));
                await Spiegel_VN.ƒS.Speech.clear();
                return Spiegel_VN.Chp01_02_ConvoMother();
                break;
            // }
        }
    }
    Spiegel_VN.MinigameDemon = MinigameDemon;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function RandomIntervall() {
        // function getRandomInt(min, max) {
        //   min = Math.ceil(min);
        //   max = Math.floor(max);
        //   return Math.floor(Math.random() * (max - min + 1)) + min;
        // }
        // let randomTextChp01Marketplace = ƒ.Random.default.(1, 5);
        // let setRandomInterval = (intervalFunction: number, minDelay: number, maxDelay: number) => {
        //     let timeout;
        //     const runInterval = () => {
        //       const timeoutFunction = () => {
        //         intervalFunction();
        //         runInterval();
        //       };
        //       const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
        //       timeout = setTimeout(timeoutFunction, delay);
        //     };
        //     runInterval();
        //     return {
        //       clear() { clearTimeout(timeout) },
        //     };
        //   };
        // ƒ.EventTimer.arguments(1, 5)
    }
    Spiegel_VN.RandomIntervall = RandomIntervall;
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
    async function testTunnel() {
        let locTunnel = {
            name: "Tunnel",
            background: "./Assets/Test_Minigame_Demon/Standbild_Test.png"
        };
        let demon = {
            name: "Demon",
            pose: { attack: "./Assets/Characters/Demon/Demon_smile.png" },
            origin: Spiegel_VN.ƒ.ORIGIN2D.CENTER
        };
        await Spiegel_VN.ƒS.Location.show(locTunnel);
        await Spiegel_VN.ƒS.Character.show(demon, demon.pose.attack, Spiegel_VN.ƒS.positionPercent(50, 50));
        let nodeDemon = Spiegel_VN.ƒS.Character.get(demon).poses.get(demon.pose.attack);
        let graph = Spiegel_VN.ƒS.Base.getGraph();
        console.log(graph);
        graph.addComponent(new Spiegel_VN.ƒ.ComponentTransform());
        let viewport = Reflect.get(Spiegel_VN.ƒS.Base, "viewport");
        let camera = viewport.camera;
        camera.projectCentral(camera.getAspect(), camera.getFieldOfView(), camera.getDirection(), camera.getNear(), 2 * camera.getFar());
        Spiegel_VN.ƒ.Loop.addEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, loopFrame);
        function loopFrame(_event) {
            if (Spiegel_VN.ƒ.Keyboard.isPressedOne([Spiegel_VN.ƒ.KEYBOARD_CODE.A, Spiegel_VN.ƒ.KEYBOARD_CODE.ARROW_LEFT])) {
                graph.mtxLocal.translateX(10);
            }
            if (Spiegel_VN.ƒ.Keyboard.isPressedOne([Spiegel_VN.ƒ.KEYBOARD_CODE.D, Spiegel_VN.ƒ.KEYBOARD_CODE.ARROW_RIGHT])) {
                graph.mtxLocal.translateX(-10);
            }
            if (Spiegel_VN.ƒ.Keyboard.isPressedOne([Spiegel_VN.ƒ.KEYBOARD_CODE.W, Spiegel_VN.ƒ.KEYBOARD_CODE.ARROW_UP])) {
                graph.mtxLocal.translateZ(-10);
            }
            if (Spiegel_VN.ƒ.Keyboard.isPressedOne([Spiegel_VN.ƒ.KEYBOARD_CODE.S, Spiegel_VN.ƒ.KEYBOARD_CODE.ARROW_DOWN])) {
                graph.mtxLocal.translateZ(10);
            }
            if (Spiegel_VN.ƒ.Keyboard.isPressedOne([Spiegel_VN.ƒ.KEYBOARD_CODE.Q])) {
                nodeDemon.mtxLocal.translateX(-10);
            }
            if (Spiegel_VN.ƒ.Keyboard.isPressedOne([Spiegel_VN.ƒ.KEYBOARD_CODE.E])) {
                nodeDemon.mtxLocal.translateX(10);
            }
            Spiegel_VN.ƒS.update(0);
        }
        let escape = {
            iEscape: "Escape"
        };
        await Spiegel_VN.ƒS.Menu.getInput(escape, "choicesCSSclass");
        graph.cmpTransform.mtxLocal = Spiegel_VN.ƒ.Matrix4x4.IDENTITY();
        Spiegel_VN.ƒ.Loop.removeEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, loopFrame);
        Spiegel_VN.ƒS.update(0);
    }
    Spiegel_VN.testTunnel = testTunnel;
})(Spiegel_VN || (Spiegel_VN = {}));
//# sourceMappingURL=Template.js.map