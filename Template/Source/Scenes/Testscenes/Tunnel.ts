namespace Spiegel_VN {
  export async function testTunnel(): ƒS.SceneReturn {
    let locTunnel = {
      name: "Tunnel",
      background: "./Assets/Test_Minigame_Demon/Standbild_Test.png",
    };

    let demon: ƒS.CharacterDefinition = {
      name: "Demon",
      pose: { attack: "./Assets/Characters/Demon/Demon_smile.png" },
      origin: ƒ.ORIGIN2D.CENTER,
    };

    let mirror: ƒS.CharacterDefinition = {
      name: "Mirror",
      pose: { normal: "./Assets/Items/Mirror_silver_front.png" },
      origin: ƒ.ORIGIN2D.CENTER,
    };

    await ƒS.Location.show(locTunnel);
    await ƒS.Character.show(
      mirror,
      mirror.pose.normal,
      ƒS.positionPercent(50, 50)
    );
    await ƒS.Character.show(
      demon,
      demon.pose.attack,
      ƒS.positionPercent(50, 50)
    );
    let nodeDemon: ƒ.Node = ƒS.Character.get(demon).poses.get(
      demon.pose.attack
    );
    let nodeMirror: ƒ.Node = ƒS.Character.get(mirror).poses.get(
      mirror.pose.normal
    );

    let graph: ƒ.Node = ƒS.Base.getGraph();
    console.log(graph);
    graph.addComponent(new ƒ.ComponentTransform());
    let viewport: ƒ.Viewport = Reflect.get(ƒS.Base, "viewport");
    let camera: ƒ.ComponentCamera = viewport.camera;
    camera.projectCentral(
      camera.getAspect(),
      camera.getFieldOfView(),
      camera.getDirection(),
      camera.getNear(),
      2 * camera.getFar()
    );

    viewport.getCanvas().addEventListener("mousemove", moveMirror);
    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, loopFrame);

    function moveMirror(_event: MouseEvent): void {
      nodeMirror.mtxLocal.translateX(_event.movementX);
      nodeMirror.mtxLocal.translateY(-_event.movementY);
      // let offset: ƒ.Vector2 = new ƒ.Vector2(_event.offsetX, _event.offsetY);
      // let pos: ƒ.Vector2 = viewport.pointClientToProjection(offset);
      // console.log(pos.toString());
    }

    let demonMovement: ƒ.Vector2 = ƒ.Vector2.ZERO();

    function loopFrame(_event: Event): void {
      if (
        ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A, ƒ.KEYBOARD_CODE.ARROW_LEFT])
      ) {
        graph.mtxLocal.translateX(20); // wie schnell wir uns bewegen
      }
      if (
        ƒ.Keyboard.isPressedOne([
          ƒ.KEYBOARD_CODE.D,
          ƒ.KEYBOARD_CODE.ARROW_RIGHT,
        ])
      ) {
        graph.mtxLocal.translateX(-20);
      }

      if (
        ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.S, ƒ.KEYBOARD_CODE.ARROW_DOWN])
      ) {
        graph.mtxLocal.translateZ(-20);
      }
      if (
        ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.W, ƒ.KEYBOARD_CODE.ARROW_UP])
      ) {
        graph.mtxLocal.translateZ(20);
      }

      if (ƒ.Random.default.getNorm() < 0.04)
        demonMovement = ƒ.Random.default.getVector2(
          ƒ.Vector2.ONE(-8),
          ƒ.Vector2.ONE(8)
        );
      nodeDemon.mtxLocal.translate(demonMovement.toVector3());

      ƒS.update(0);
    }

    await ƒS.getKeypress(ƒ.KEYBOARD_CODE.SPACE);

    graph.cmpTransform.mtxLocal = ƒ.Matrix4x4.IDENTITY();
    ƒ.Loop.removeEventListener(ƒ.EVENT.LOOP_FRAME, loopFrame);
    viewport.getCanvas().removeEventListener("mousemove", moveMirror);
    ƒS.update(0);
  }
}
