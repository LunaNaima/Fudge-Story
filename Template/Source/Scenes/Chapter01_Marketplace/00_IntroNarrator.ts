namespace Spiegel_VN {
  export async function Chp01_00_IntroNarration(): ƒS.SceneReturn {
    ƒS.Sound.fade(Music.backgroundTheme_default, 0.8, 0.1, true);

    // ***BEGINN SZENE***
    // for (let diaSequence of Object.values(
    //   dlg_scn_00_IntroNarrator.narratorEntry
    // )) {
    //   await ƒS.Speech.tell(characters.narrator.name, diaSequence);
    // }

    await ƒS.Speech.tell(
      characters.narrator.name,
      dlg_scn_00_IntroNarrator.narratorEntry.T0000
    );

    await ƒS.Speech.tell(
      characters.narrator.name,
      dlg_scn_00_IntroNarrator.narratorEntry.T0001
    );
    await ƒS.Speech.tell(
      characters.narrator.name,
      dlg_scn_00_IntroNarrator.narratorEntry.T0002
    );

    dataForSave.nameProtagonist = await ƒS.Speech.getInput();
    characters.maincharacter.name = dataForSave.nameProtagonist;

    await ƒS.Speech.tell(
      characters.narrator.name,
      dlg_scn_00_IntroNarrator.narratorEntry.T0003
    );
    await ƒS.Speech.tell(
      characters.narrator.name,
      dlg_scn_00_IntroNarrator.narratorEntry.T0004
    );
    await ƒS.Speech.tell(
      characters.narrator.name,
      dlg_scn_00_IntroNarrator.narratorEntry.T0005
    );
    await ƒS.Speech.tell(
      characters.narrator.name,
      dlg_scn_00_IntroNarrator.narratorEntry.T0006
    );

    await ƒS.Location.show(locations.Chp01_01_IntroMarketplace);

    await ƒS.update(
      transitions.fade.duration,
      transitions.fade.alpha,
      transitions.fade.edge //edge ist der Härtegrad
    );

    await ƒS.Speech.tell(
      characters.narrator.name,
      dlg_scn_00_IntroNarrator.narratorEntry.T0007
    );

    await ƒS.Speech.tell(
      characters.narrator.name,
      dlg_scn_00_IntroNarrator.narratorEntry.T0008
    );

    await ƒS.Speech.tell(
      characters.narrator.name,
      dlg_scn_00_IntroNarrator.narratorEntry.T0009
    );

    return "01_01 Intro Marketplace";
  }
}
