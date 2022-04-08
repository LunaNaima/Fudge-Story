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
    Forestwood: {
      name: "",
      background: "Tutorial_WS21",
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
      name: "Hannah",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "",
      },
    },
  };

  export let dataForSave = {
    // hier kommt alles rein, was gespeichert werden soll. Der Spielstand wird von Beginn der jeweiligen Szene gespeichert.
    nameProtagonist: "", // können Eingabefeld machen, wo die Spielerin den Name eingeben kann
    score: 0, // wenn es zb Punktestand gibt
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [{ scene: Scene, name: "Scene" }];

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
