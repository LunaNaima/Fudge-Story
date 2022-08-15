namespace Spiegel_VN {
  export async function testTunnel(): ƒS.SceneReturn {

    let locTunnel = {
      name: "Tunnel",
      background:
        "./Assets/Test_Minigame_Demon/Standbild_Test.png"
    };

    await ƒS.Location.show(locTunnel);

    let graph: ƒ.Node = ƒS.Base.getGraph();
    console.log(graph);
    graph.addComponent(new ƒ.ComponentTransform());

    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, loopFrame);
    function loopFrame(_event: Event): void {
      graph.mtxLocal.translateX(10);
      // if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.ESC])) {

      // }
      ƒS.update(0);
    }

    let escape = {
      iEscape: "Escape"
    };

    await ƒS.Menu.getInput(escape, "choicesCSSclass");


    graph.cmpTransform.mtxLocal = ƒ.Matrix4x4.IDENTITY();
    ƒ.Loop.removeEventListener(ƒ.EVENT.LOOP_FRAME, loopFrame);
    ƒS.update(0);
  }
}