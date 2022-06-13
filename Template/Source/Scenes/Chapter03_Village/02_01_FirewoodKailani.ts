namespace Spiegel_VN {
  export async function Chp03_021_FirewoodKailani(): ƒS.SceneReturn {
    dataForSave.pickedChp03_FirewoodKailani = true;
    await ƒS.Speech.tell("Ich", "Kailani und ich gehen Holzhacken.");
    return "02_CS New day";
  }
}
