namespace Tutorial_WS21 {
  export async function End(): ƒS.SceneReturn {
    console.log("Intro");


    let text = {
      narrator: {
        T0000: "",
        T0001: ""
      },
      aisaka: {
        T0000: "Hi",
        T0001: ""
      },
      kohana: {
        T0000: "Test"
      }
    };



    //  Name field
    dataForSave.nameProtagonist = await ƒS.Speech.getInput();
    console.log(dataForSave.nameProtagonist);

    await ƒS.Location.show(locations.bedroom);
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
    await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positionPercent(30, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.aisaka, text.aisaka.T0000);
    await ƒS.Speech.tell(characters.aisaka, text.aisaka.T0000 + dataForSave.nameProtagonist);
    await ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromRightToLeft());
    await ƒS.Speech.tell(characters.aisaka, "Hi2.");
    await ƒS.Character.hide(characters.aisaka);


    

  }

}

