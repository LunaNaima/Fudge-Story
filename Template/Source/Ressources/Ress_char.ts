namespace Spiegel_VN {
  export let characters = {
    // hier sollten alle char rein // char in richtiger größe!
    maincharacter: {
      name: "",
    },

    narrator: {
      name: "Erzählerin",
    },

    Mama: {
      name: "Leijla",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      //   pose: {
      //     angry: "/Pfad", //nicht nur pose, sondern auch Mimik beschreiben
      //     happy: "/Pfad",
      //     sad: "/Pfad",
      //   },
    },

    Mutti: {
      name: "Elena",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      //   pose: {
      //     angry: "",
      //   },
    },

    Kailani: {
      name: "Kailani",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        worried: "./Assets/Characters/Kailani_3_4_worried.png",
        angry: "./Assets/Characters/Kailani_3_4_worried_v2.png",
      },
    },

    Evarius: {
      name: "Evarius",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      // pose: {

      // }
    },

    Flynn: {
      name: "Flynn",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        angry: "./Assets/Characters/Flynn_Whary_angry.png",
      },
    },

    flowerMerchant: {
      name: "Blumenhändler",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
    },

    leatherMerchant: {
      name: "Lederhändler",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
    },

    mirrorMerchant: {
      name: "Spiegelhändler",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
    },

    Demon: {
      name: "Dämon",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        angry: "",
        neutralAngry: "",
        furious: "",
        distracted: "",
      },
    },
  };
}
