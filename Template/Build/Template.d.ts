declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundTheme: string;
        click: string;
    };
    let locations: {
        Forestwood: {
            name: string;
            background: string;
        };
        starry: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        Mama: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                sad: string;
            };
        };
        Mutti: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        score: number;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
