namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      Narrator: {
        T0001: "", //Text Nr. 1
        T0002: "",
      },
      Protagonistin: {
        T0001: "",
      },
    };

    await ƒS.Speech.tell(characters.Mama, text.Protagonistin.T0001); //class für Speech, wait for signal oder await heißt: wir warten auf Nutzerinteraktion, ist optional. wenn text automatisch weitergehen soll: mit true oder false angeben
    await ƒS.Speech.tell(characters.Mama, "Neuer Text");
  }
}
