namespace Spiegel_VN {
  export async function Chp01_00_IntroNarration(): ƒS.SceneReturn {
    ƒS.Sound.fade(Music.backgroundTheme_default, 0.8, 0.1, true);

    // ***BEGINN SZENE***
    for (let diaSequence of Object.values(
      dlg_scn_00_IntroNarrator.narratorEntry
    )) {
      await ƒS.Speech.tell(characters.narrator.name, diaSequence);
    }

    await ƒS.Location.show(locations.Chp01_01_IntroMarketplace);

    await ƒS.update(
      transitions.fade.duration,
      transitions.fade.alpha,
      transitions.fade.edge //edge ist der Härtegrad
    );

    await ƒS.Speech.tell(
      characters.maincharacter.name,
      dlg_scn_00_IntroNarrator.maincharacter.T0000
    );
    await ƒS.Speech.tell(
      characters.maincharacter.name,
      dlg_scn_00_IntroNarrator.maincharacter.T0001
    );
    await ƒS.Speech.tell(
      characters.maincharacter.name,
      dlg_scn_00_IntroNarrator.maincharacter.T0002
    );
    return "01_01 Intro Marketplace";
  }
}
