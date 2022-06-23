namespace Spiegel_VN {
  export async function Chp141_01_DestroyMirror(): ƒS.SceneReturn {
    // hier counter einbauen: beim dritten mal klicken gehts weiter
    await ƒS.Speech.tell(
      "Ich",
      "Wir müssen die Spiegel zerstören! Hinweis: schau in dein Inventar (Eisen holen)"
    );
    await ƒS.Sound.play; // vielleicht einfach 3x?
    return "14.1_02 Demon dies";
  }
}
