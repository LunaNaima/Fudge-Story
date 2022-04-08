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
        Forestwood: {
            name: "",
            background: "Tutorial_WS21",
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
            name: "Hannah",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "",
            },
        },
    };
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
})(Template || (Template = {}));
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
                T0001: "",
            },
        };
        await Template.ƒS.Speech.tell(Template.characters.Mama, text.Protagonistin.T0001); //class für Speech, wait for signal oder await heißt: wir warten auf Nutzerinteraktion, ist optional. wenn text automatisch weitergehen soll: mit true oder false angeben
        await Template.ƒS.Speech.tell(Template.characters.Mama, "Neuer Text");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map