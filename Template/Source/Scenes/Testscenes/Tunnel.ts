namespace Spiegel_VN {
  export async function testTunnel(): ƒS.SceneReturn {

    let locTunnel = {
      name: "Tunnel",
      background:
      "./Assets/Test_Minigame_Demon/Standbild_Test.png"
    };

    await ƒS.Location.show(locTunnel);
    ƒS.update(0);
    await ƒS.Speech.tell("Test", "Test");
  }
}