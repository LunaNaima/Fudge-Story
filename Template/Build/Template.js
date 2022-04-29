"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    //vorher kommentieren, was man hier macht, in dem fall export transitions
    Template.transition = {
        puzzle: {
            duration: 1,
            alpha: "/Tutorial_WS21/FreeTransitions/Jigsaw",
            edge: 1,
        },
    };
    Template.sound = {
        //themes
        backgroundTheme: "/Tutorial_WS21/Audio/Nightclub.ogg",
        //Soundeffekte SFX
        click: "Pfad",
    };
    Template.locations = {
        nighttime_sil: {
            name: "",
            background: "./Images/nighttime_sil.jpg",
        },
        starry: {
            name: "starry",
            background: "Pfad",
        },
    };
    Template.characters = {
        narrator: {
            //welcher character
            name: "Name",
        },
        Mama: {
            name: "Leijla",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "/Pfad",
                happy: "/Pfad",
                sad: "/Pfad",
            },
        },
        Mutti: {
            name: "Elena",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "",
            },
        },
    };
    let scenes = [
        { scene: Template.Scene, name: "Luna Scene" },
    ];
    Template.ƒS.Progress.go(scenes);
    Template.dataForSave = {
        // hier kommt alles rein, was gespeichert werden soll. Der Spielstand wird von Beginn der jeweiligen Szene gespeichert.
        nameProtagonist: "",
        score: 0, // wenn es zb Punktestand gibt
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [{ scene: Template.Scene, name: "Scene" }];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
    let uiElement = document.querySelector("[type=interface]");
    Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
})(Template || (Template = {}));
;
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            Narrator: {
                T0001: "",
                T0002: "",
            },
            Protagonistin: {
                T0000: "Was geht",
                T0001: "Funktioniert das?",
                T0002: "Ich hoffe doch!",
            },
        };
        Template.ƒS.Sound.play(Template.sound.click, 1); //bei volume: zwischen 0-1, bisschen mehr als 1 ist schon zu laut. Loopen geht auch, loop = true (dann loopts sichs)
        Template.ƒS.Sound.fade(Template.sound.click, 1, 2); // 1 ist das max, also bis hier hin wird der sound steigen. 2 = duration. true bezieht sich auf loop. sound wird einmal gefadet, bleibt dann konstant laut
        await Template.ƒS.Location.show(Template.locations.nighttime_sil); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
        await Template.ƒS.update(Template.transition.puzzle.duration, Template.transition.puzzle.alpha, Template.transition.puzzle.edge //edge ist der Härtegrad
        );
        await Template.ƒS.Character.show(Template.characters.Mama, Template.characters.Mama.pose.angry, // pose muss in der main sein
        Template.ƒS.positions.bottomcenter //bei positions: gibts die normalen angaben (topleft ..) bei positionpercentage: gebe ich koordinaten an in pixel 70 in x und 100 in y
        // ƒS.positionPercent(70,100)
        ); //char anzeigen lassen. immer im hover schauen, was ich angeben muss!
        Template.ƒS.Character.hideAll(); //hier muss man nichts angeben. danach machts sinn, nen fade rein zu tun, damit die char ausgefadet werden
        // ƒS.Character.hide(characters.Mama)
        await Template.ƒS.Speech.tell(Template.characters.Mama, text.Protagonistin.T0001); //class für Speech, wait for signal oder await heißt: wir warten auf Nutzerinteraktion,
        //ist optional. wenn text automatisch weitergehen soll: mit true oder false angeben
        Template.ƒS.Speech.clear(); // hier wird text aus dem feld gelöscht
        await Template.ƒS.update(3); // dann kommt text 3 sek später
        await Template.ƒS.Speech.tell(Template.characters.Mama, text.Protagonistin.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Mama, "Neuer Text.");
        Template.ƒS.Speech.hide(); // das textfeld wird ausgeblendet
        await Template.ƒS.update();
        Template.ƒS.Sound.fade(Template.sound.click, 1, 2); //hier ausfaden
        let firstDialogueElementAnswers = {
            //fightbetweenMamaundMutti  normalerweise sinnvolle namen verwendet, damit ich weiß, was für welche entscheidung steht
            iSayOk: "Okay.",
            iSayYes: "Ja.",
            iSayNo: "Nein.", // mit ich-perspektive vom spieler ausgehen. diese antwortmöglichkeiten stehen der spielerin zur verfügung, ich nehm "isay" damit ich weiß, dass spielerin spricht
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "individualCSSclass"); // wir weisen input element zu. await bedeutet: wir warten, bis nutzer interagiert
        switch (firstDialogueElement // zu welchem case soll es hinswitchen, je nach getroffener option
        ) {
            case firstDialogueElementAnswers.iSayOk:
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.Mama, "Hi");
                Template.ƒS.Speech.clear(); // das gesprochene oder auch char hier clearen
                break;
            case firstDialogueElementAnswers.iSayYes:
                // continue here
                await Template.ƒS.Character.show(Template.characters.Mama, Template.characters.Mama.pose.angry, Template.ƒS.positions.bottomcenter);
                break;
            case firstDialogueElementAnswers.iSayNo:
                await Template.ƒS.Character.show(Template.characters.Mutti, Template.characters.Mutti.pose.angry, Template.ƒS.positionPercent(70, 100));
        }
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map