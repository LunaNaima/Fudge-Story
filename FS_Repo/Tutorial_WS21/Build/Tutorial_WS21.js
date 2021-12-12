"use strict";
var Tutorial_WS21;
(function (Tutorial_WS21) {
    async function Introduction() {
        console.log("Intro");
        let text = {
            narrator: {
                T0000: "",
                T0001: ""
            },
            aisaka: {
                T0000: "Hi",
                T0001: ""
            },
            kohana: {
                T0000: "Test"
            }
        };
        // test: `test ${123} klappt`
        Tutorial_WS21.ƒS.Sound.fade(Tutorial_WS21.sound.backgroundTheme, 0.2, 0.1, true);
        let animationDone = Tutorial_WS21.ƒS.Character.animate(Tutorial_WS21.characters.aisaka, Tutorial_WS21.characters.aisaka.pose.happy, Tutorial_WS21.fromRightToLeft());
        let animationDone2 = Tutorial_WS21.ƒS.Character.animate(Tutorial_WS21.characters.aisaka, Tutorial_WS21.characters.aisaka.pose.happy, Tutorial_WS21.fromRightToOutOfCanvas());
        //  Name field
        // dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        // console.log(dataForSave.nameProtagonist);
        await Tutorial_WS21.ƒS.Location.show(Tutorial_WS21.locations.bedroom);
        await Tutorial_WS21.ƒS.update(Tutorial_WS21.transitions.clock.duration, Tutorial_WS21.transitions.clock.alpha, Tutorial_WS21.transitions.clock.edge);
        await Tutorial_WS21.ƒS.Character.show(Tutorial_WS21.characters.aisaka, Tutorial_WS21.characters.aisaka.pose.happy, Tutorial_WS21.ƒS.positionPercent(30, 100));
        await Tutorial_WS21.ƒS.update(1);
        // Animationen parallel abspielen
        await Tutorial_WS21.ƒS.Speech.tell(Tutorial_WS21.characters.aisaka, text.aisaka.T0000);
        await Tutorial_WS21.ƒS.Speech.tell(Tutorial_WS21.characters.aisaka, text.aisaka.T0000 + Tutorial_WS21.dataForSave.nameProtagonist);
        // LOOP Animations
        // await ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromRightToLeft());
        // await ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromRightToOutOfCanvas());
        await Tutorial_WS21.ƒS.Speech.tell(Tutorial_WS21.characters.aisaka, "Hi2.");
        await animationDone;
        await animationDone2;
        await Tutorial_WS21.ƒS.Character.hide(Tutorial_WS21.characters.aisaka);
        let firstDialogueElementOptions = {
            iSayOk: "Okay.",
            iSayYes: "Ja.",
            iSayNo: "Nein."
        };
        let firstDialogueElement = await Tutorial_WS21.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayOk:
                await Tutorial_WS21.ƒS.Speech.tell(Tutorial_WS21.characters.aisaka, "Hi2.");
                break;
            case firstDialogueElementOptions.iSayYes:
                await Tutorial_WS21.ƒS.Character.show(Tutorial_WS21.characters.kohana, Tutorial_WS21.characters.kohana.pose.angry, Tutorial_WS21.ƒS.positions.center);
                break;
            case firstDialogueElementOptions.iSayNo:
                await Tutorial_WS21.ƒS.Speech.tell(Tutorial_WS21.characters.kohana, text.kohana.T0000);
                break;
        }
        await Tutorial_WS21.ƒS.Speech.tell(Tutorial_WS21.characters.aisaka, text.aisaka.T0000);
        Tutorial_WS21.ƒS.Sound.fade(Tutorial_WS21.sound.backgroundTheme, 0, 1);
        await Tutorial_WS21.ƒS.Character.hideAll();
        await Tutorial_WS21.ƒS.update(1);
        // return "Szene2";
    }
    Tutorial_WS21.Introduction = Introduction;
})(Tutorial_WS21 || (Tutorial_WS21 = {}));
var Tutorial_WS21;
(function (Tutorial_WS21) {
    async function Scene2() {
        console.log("Szene2");
        let text = {
            narrator: {
                T0000: "",
                T0001: ""
            },
            aisaka: {
                T0000: "HEY",
                T0001: ""
            },
            kohana: {
                T0000: "HII"
            }
        };
        await Tutorial_WS21.ƒS.Location.show(Tutorial_WS21.locations.bedroom);
        await Tutorial_WS21.ƒS.update(1);
        await Tutorial_WS21.ƒS.Character.show(Tutorial_WS21.characters.aisaka, Tutorial_WS21.characters.aisaka.pose.happy, Tutorial_WS21.ƒS.positionPercent(30, 100));
        await Tutorial_WS21.ƒS.update(1);
        // Novel Page
        Tutorial_WS21.ƒS.Text.print("Lies mich.");
        Tutorial_WS21.ƒS.Text.setClass("text");
        await Tutorial_WS21.ƒS.Speech.tell(Tutorial_WS21.characters.aisaka, text.aisaka.T0000);
        await Tutorial_WS21.ƒS.Speech.tell(Tutorial_WS21.characters.aisaka, "Helloo");
        await Tutorial_WS21.ƒS.Character.hide(Tutorial_WS21.characters.aisaka);
        await Tutorial_WS21.ƒS.update(1);
    }
    Tutorial_WS21.Scene2 = Scene2;
})(Tutorial_WS21 || (Tutorial_WS21 = {}));
var Tutorial_WS21;
(function (Tutorial_WS21) {
    async function End() {
        console.log("Intro");
        let text = {
            narrator: {
                T0000: "",
                T0001: ""
            },
            aisaka: {
                T0000: "Hi",
                T0001: ""
            },
            kohana: {
                T0000: "Test"
            }
        };
        //  Name field
        Tutorial_WS21.dataForSave.nameProtagonist = await Tutorial_WS21.ƒS.Speech.getInput();
        console.log(Tutorial_WS21.dataForSave.nameProtagonist);
        await Tutorial_WS21.ƒS.Location.show(Tutorial_WS21.locations.bedroom);
        await Tutorial_WS21.ƒS.update(Tutorial_WS21.transitions.clock.duration, Tutorial_WS21.transitions.clock.alpha, Tutorial_WS21.transitions.clock.edge);
        await Tutorial_WS21.ƒS.Character.show(Tutorial_WS21.characters.aisaka, Tutorial_WS21.characters.aisaka.pose.happy, Tutorial_WS21.ƒS.positionPercent(30, 100));
        await Tutorial_WS21.ƒS.update(1);
        await Tutorial_WS21.ƒS.Speech.tell(Tutorial_WS21.characters.aisaka, text.aisaka.T0000);
        await Tutorial_WS21.ƒS.Speech.tell(Tutorial_WS21.characters.aisaka, text.aisaka.T0000 + Tutorial_WS21.dataForSave.nameProtagonist);
        await Tutorial_WS21.ƒS.Character.animate(Tutorial_WS21.characters.aisaka, Tutorial_WS21.characters.aisaka.pose.happy, Tutorial_WS21.fromRightToLeft());
        await Tutorial_WS21.ƒS.Speech.tell(Tutorial_WS21.characters.aisaka, "Hi2.");
        await Tutorial_WS21.ƒS.Character.hide(Tutorial_WS21.characters.aisaka);
    }
    Tutorial_WS21.End = End;
})(Tutorial_WS21 || (Tutorial_WS21 = {}));
var Tutorial_WS21;
(function (Tutorial_WS21) {
    Tutorial_WS21.ƒ = FudgeCore;
    Tutorial_WS21.ƒS = FudgeStory;
    console.log("Tutorial_WS21 starting");
    // define transitions
    Tutorial_WS21.transitions = {
        clock: {
            duration: 1,
            alpha: "./FreeTransitions/JigsawThemedTransitions/puzzle.png",
            edge: 1
        }
    };
    Tutorial_WS21.sound = {
        // music
        backgroundTheme: "./Audio/Dystopian.ogg",
        // sound
        click: ""
    };
    Tutorial_WS21.locations = {
        bedroom: {
            name: "Bedroom",
            background: "./Images/Backgrounds/Bedroom.png"
        },
        kitchen: {
            name: "",
            background: ""
        }
    };
    // Stilfrage - Eigenen Styleguide für FS veröffentlichen? 
    Tutorial_WS21.characters = {
        narrator: {
            name: ""
        },
        aisaka: {
            name: "Aisaka",
            origin: Tutorial_WS21.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/aisaka_angry.png",
                happy: "./Images/Characters/aisaka_happy.png",
                upset: "./Images/Characters/aisaka_upset.png"
            }
        },
        kohana: {
            name: "Kohana",
            origin: Tutorial_WS21.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/kohana_angry.png",
                happy: "./Images/Characters/kohana_happy.png",
                upset: "./Images/Characters/kohana_upset.png"
            }
        }
    };
    // Animations
    // export function jirkaAnimation(): ƒS.AnimationDefinition {
    //   return {
    //     start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0) },
    //     end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
    //     duration: 1,
    //     playmode: ƒS.ANIMATION_PLAYMODE.LOOP
    //   };
    // }
    // Animationen
    function fromRightToOutOfCanvas() {
        return {
            start: { translation: Tutorial_WS21.ƒS.positionPercent(30, 100) },
            end: { translation: Tutorial_WS21.ƒS.positionPercent(120, 100) },
            duration: 1,
            playmode: Tutorial_WS21.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Tutorial_WS21.fromRightToOutOfCanvas = fromRightToOutOfCanvas;
    function fromRightToLeft() {
        return {
            start: { translation: Tutorial_WS21.ƒS.positions.bottomright },
            end: { translation: Tutorial_WS21.ƒS.positions.bottomleft },
            duration: 1,
            playmode: Tutorial_WS21.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Tutorial_WS21.fromRightToLeft = fromRightToLeft;
    Tutorial_WS21.dataForSave = {
        nameProtagonist: "",
        started: false,
        ended: false
    };
    // Branching path zeigen, wie's geht; Szenenstruktur erklären
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Tutorial_WS21.Introduction, name: "Introduction to FS" },
            // { scene: Scene2, name: "Szene2" }
            // { id: "Szene2", scene: Scene2, name: "Szene Zwei", next: "" },
            // { id: "End", scene: End, name: "The End"}
        ];
        let uiElement = document.querySelector("[type=interface]");
        Tutorial_WS21.dataForSave = Tutorial_WS21.ƒS.Progress.setData(Tutorial_WS21.dataForSave, uiElement);
        // start the sequence
        Tutorial_WS21.ƒS.Progress.go(scenes);
    }
})(Tutorial_WS21 || (Tutorial_WS21 = {}));
//# sourceMappingURL=Tutorial_WS21.js.map