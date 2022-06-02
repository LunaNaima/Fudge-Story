namespace Spiegel_VN {
  export async function Chp00_00_NameEntry(): ƒS.SceneReturn {
    dataForSave.nameProtagonist = await ƒS.Speech.getInput();
    characters.maincharacter.name = dataForSave.nameProtagonist;
  }
}
