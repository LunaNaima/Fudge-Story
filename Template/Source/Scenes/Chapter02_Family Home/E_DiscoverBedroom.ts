namespace Spiegel_VN {
  export async function Chp02_E_DiscoverBedroom(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp02_E_DiscoverBedroom); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden

    // await ƒS.Location.show(location.Chp01_01_IntroMarketplace);
    // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);

    await ƒS.update(
      transitions.fade.duration,
      transitions.fade.alpha,
      transitions.fade.edge //edge ist der Härtegrad
    );
    await ƒS.Speech.tell(
      "Player",
      "My eigenes Reich. Wenigstens hier habe ich ein bisschen Privatsphäre..."
    );
  }
}
