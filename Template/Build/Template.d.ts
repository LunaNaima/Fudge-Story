declare namespace Spiegel_VN {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
        scoreEmpathyPoints: number;
        EmpathyPointsSkala: string;
        scoreCouragePoints: number;
        scoreKnowledgePoints: number;
        pickedRightChoice: boolean;
        pickedIron: boolean;
        pickedChp08TrustFlynn: boolean;
        pickedChp10SingToBirds: boolean;
        pickedChoice: boolean;
        pickediAskAboutTrip: boolean;
        pickediAskAboutDecorations: boolean;
        pickedChp01_E_FlowerMerchantScene: boolean;
        pickedChp01_E_LeatherMerchantScene: boolean;
        pickedChp01_ConvoMother: boolean;
        pickedChp01_MirrorMerchant: boolean;
        pickedChp02_DinnerScene: boolean;
        pickedChp02_TestMirror: boolean;
        pickedChp02_TestWithElena: boolean;
        pickedChp02_TestWithKailani: boolean;
        pickedChp02_TestWithEvarius: boolean;
        pickedChp02_PickHerbsGarden: boolean;
        pickedChp02_FightNeighbor: boolean;
        pickedChp03_Dressmaker: boolean;
        pickedChp03_ChoresWithKailani: boolean;
        pickedChp03_WaterwellKailani: boolean;
        pickedChp03_WoodChoppingKailani: boolean;
        pickedChp04TalkToFamily: boolean;
        pickedChp04TalkToElena: boolean;
        pickedChp04ResearchLibrary: boolean;
        pickedChp05GoToClearing: boolean;
        pickedChp05GiveBirdsFood: boolean;
        pickedChp05SingToBirds: boolean;
        pickedChp07TravelToWhary: boolean;
        pickedChp07DiscoverBees: boolean;
        pickedChp07DiscoverFlowers: boolean;
        pickedChp08CatchFlynnAtGates: boolean;
        pickedChp08EnterCity: boolean;
        pickedChp08CatchFlynnInAlley: boolean;
        pickedChp08ChooseStay: boolean;
        pickedChp08GoWithFlynn: boolean;
        pickedChp08GoWithoutFlynn: boolean;
        pickedChp08ChooseContinueSearch: boolean;
        pickedChp09ResearchMarketplace: boolean;
        pickedChp09TalkToInnkeeper: boolean;
        pickedChp09TalkToCook: boolean;
        pickedChp09TalkToStablehand: boolean;
        pickedChp09DiscoverListenToVillagers: boolean;
        pickedChp09DiscoverMerchants: boolean;
        pickedChp09DiscoverSpeakToVillagers: boolean;
        pickedChp09SpeakToBeggar: boolean;
        pickedChp09MakeAWish: boolean;
        pickedChoiceChp10ExploreAfraid: boolean;
        pickedChoiceChp10ExploreAttention: boolean;
        pickedChoiceChp10ExploreSick: boolean;
        pickedChoiceChp10ExploreAll: boolean;
    };
    let inventory: {
        apple: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    function showCredits(): void;
}
declare namespace Spiegel_VN {
    let minPoints: number;
    let maxPoints: number;
    let points: number;
    function UpdateBar(): Promise<void>;
    function DisplaySanityBar(show: boolean): void;
    function SetPoints(num: number): void;
    function AddPoints(num: number): void;
    function SubPoints(num: number): void;
    function GetPoints(): number;
}
declare namespace Spiegel_VN {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
}
declare namespace Spiegel_VN {
    let characters: {
        maincharacter: {
            name: string;
        };
        narrator: {
            name: string;
        };
        Mama: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        Mutti: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        Kailani: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                worried: string;
                angry: string;
            };
        };
        Evarius: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        Flynn: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
            };
        };
        flowerMerchant: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        leatherMerchant: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        mirrorMerchant: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        Demon: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                neutralAngry: string;
                furious: string;
                distracted: string;
            };
        };
    };
}
declare namespace Spiegel_VN {
    function func_RandomNumberRange(// random nr zw 0-10. macht
    min?: number, max?: number): number;
}
declare namespace Spiegel_VN {
    let locations: {
        Chp01_01_IntroMarketplace: {
            name: string;
            background: string;
        };
        Chp01_02_ConvoMother: {
            name: string;
            background: string;
        };
        Chp01_E_FlowerMerchant: {
            name: string;
            background: string;
        };
        Chp01_E_LeatherMerchant: {
            name: string;
            background: string;
        };
        Chp01_03_IntroMirror: {
            name: string;
            background: string;
        };
        Chp01_CS_ArrivalHome: {
            name: string;
            background: string;
        };
        Chp02_01_Dinner: {
            name: string;
            background: string;
        };
        Chp02_02_LivingRoom: {
            name: string;
            background: string;
        };
        Chp02_03_PickHerbs: {
            name: string;
            background: string;
        };
        Chp02_04_FightNeighbor: {
            name: string;
            background: string;
        };
        Chp02_E_DiscoverBedroom: {
            name: string;
            background: string;
        };
        Chp02_E_DiscoverBedroomDiary: {
            name: string;
            background: string;
        };
        Chp02_E_DiscoverBedroomBooks: {
            name: string;
            background: string;
        };
        Chp02_E_DiscoverKitchen: {
            name: string;
            background: string;
        };
        Chp02_E_DiscoverKitchenOven: {
            name: string;
            background: string;
        };
        Chp02_E_DiscoverKitchenPantry: {
            name: string;
            background: string;
        };
        Chp02_CS_Sleep: {
            name: string;
            background: string;
        };
        Chp03_01_Dressmaker: {
            name: string;
            background: string;
        };
        Chp03_021_FirewoodKailani: {
            name: string;
            background: string;
        };
        Chp03_022_WaterwellKailani: {
            name: string;
            background: string;
        };
        Chp03_E_DiscoverDonkey: {
            name: string;
            background: string;
        };
        Chp03_E_DiscoverDonkeyCloseup: {
            name: string;
            background: string;
        };
        Chp03_E_DiscoverForest: {
            name: string;
            background: string;
        };
        Chp03_E_DiscoverLibraryOutside: {
            name: string;
            background: string;
        };
        Chp03_E_DiscoverLibraryInside: {
            name: string;
            background: string;
        };
        Chp03_E_DiscoverLibraryCloseup: {
            name: string;
            background: string;
        };
        Chp03_CS_KailaniMissing: {
            name: string;
            background: string;
        };
        black: {
            name: string;
            background: string;
        };
    };
}
declare namespace Spiegel_VN {
    let Music: {
        backgroundTheme_default: string;
        click: string;
    };
}
declare namespace Spiegel_VN {
    let score: {
        punkte: number;
        teeGetrunken: boolean;
    };
    let scoreMutti: {
        punkte: number;
        affection: number;
        introduced: boolean;
    };
}
declare namespace Spiegel_VN {
    let Soundeffekte: {
        click: string;
    };
}
declare namespace Spiegel_VN {
    let transitions: {
        fade: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_scn_00_IntroNarrator: {
        narratorEntry: {
            T0000: string;
            T0001: string;
            T0002: string;
            T0003: string;
            T0004: string;
            T0005: string;
            T0006: string;
            T0007: string;
            T0008: string;
            T0009: string;
            T0010: string;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_scn_01: {
        maincharacter: {
            T0000: string;
            T0001: string;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_scn_02: {
        maincharacter: {
            T0000: string;
            T0001: string;
        };
        Mama: {
            T0000: string;
            T0001: string;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_Chp01EntryMirrorMerchant: {
        mirrorMerchant: {
            T0000: string;
            T0001: string;
        };
        maincharacter: {
            T0000: string;
        };
    };
    let dlg_Chp01MirrorMerchantiSayUnsure: {
        maincharacter: {
            T0000: string;
            T0001: string;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_scn_E_10EmpathyPoints: {
        maincharacter: {
            T0000: string;
            T0001: string;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_scn_E_Flowermerchant: {
        maincharacter: {
            T0000: string;
            T0001: string;
        };
        flowerMerchant: {
            T0000: string;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_scn_E_Leathermerchant: {
        maincharacter: {
            T0000: string;
            T0001: string;
        };
        leatherMerchant: {
            T0000: string;
        };
    };
}
declare namespace Spiegel_VN {
    function Chp00_00_NameEntry(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_00_IntroNarration(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_01_IntroMarketplace(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_02_ConvoMother(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_03_IntroMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_E_FlowerMerchant(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_E_LeatherMerchant(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_CS_ArrivalHome(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_CS_PerchaseMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_01_Dinner(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_021_TestMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_03_PickHerbs(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_03_FightNeighbor(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_E_DiscoverBedroom(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_E_DiscoverKitchen(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_CS_NewDay(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_CS_Sleep(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_01_Dressmaker(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_021_ChoresWithKailani(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_E_DiscoverDonkey(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_E_DiscoverForest(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_E_DiscoverLibrary(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_CS_KailaniMissing(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_CS_TurmoilMarketplace(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_01_TalkWithFamily(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_02_TalkWithElena(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_03_ResearchLibrary(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_E_ExamineMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_E_SearchGarden(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_E_SearchGroundFloor(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_CS_EntryForest(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp05_01_Clearing(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp05_02_SingToBirds(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp05_03_FeedBirds(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp05_E_DiscoverOak(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp05_E_DiscoverRiver(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp05_CS_GoHome(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp06_02_ReceiveItemMama(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp06_03_DepartureRiver(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp06_CS_ArrivalMeadow(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp07_02_TravelToWhary(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp07_E_DiscoverBees(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp07_E_DiscoverFlowers(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp07_CS_LineAtGates(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_01_MeetFlynnAtGates(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_02_MeetFlynnInAlley(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_03_EnterCity(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_0411_NiceStayFlynn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_041_ChooseNiceStay(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_0421_UglyStayFlynn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_042_ChooseUglyStay(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_04_ChooseStay(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_E_DiscoverHay(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_E_DiscoverVillagers(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_E_DiscoverWindows(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_CS_TalkToFlynn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_CS_Sleep(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_011_Beggar(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_012_MakeAWish(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_01_ResearchMarketplace(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_02_TalkToInnkeeper(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_03_TalkToCook(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_04_TalkToStablehand(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_E_ListenToVillagers(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_E_TalkToMerchants(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_E_SpeakToVillagers(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_CS_ArrivalLake(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_01_HowToCross(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_02_OnTheRaft(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_03_CrossLake(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_041_SingToBirds(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_042_UseMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_04_AttackBirds(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_051_FriendlyBirds(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_052_BirdsDisappear(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_E_CityLightsWhary(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_E_DiscoverLake(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_E_DiscoverLakewater(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_CS_ArrivalOtherSide(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_01_SearchHidingPlace(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_02_FindIron(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_03_WatchFactory(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_04_TryBreakIn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_E_DiscoverForest(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_E_DiscoverHuts(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_E_DiscoverTower(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_CS_Sleep(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_011_SneakIn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_012_SneakAmongSlaves(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_02_EnterFactory(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_031_TalkToSlaves(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_032_SearchForKailani(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_033_ListenToGuards(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_051_BirdsOfferHelp(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_052_MakeAWish(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_04_BackToHidingPlace(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_E_DiscoverVillage(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_E_Productionsite(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_CS_TalkToFlynn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_01_EntryVillage(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_02_GetIntoTower(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_03_EntryTower(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_04_SneakPastDemon(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_E_DiscoverFamilyPortrait(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_E_DiscoverLockedDoor(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_E_DiscoverSneakAround(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_E_DiscoverTowerWindow(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_E_DiscoverWatchGuard(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_CS_EntryMirrorRoom(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp141_01_DestroyMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp141_02_DemonDies(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp14_CS_BalconyTower(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp142_01_RealizationMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp142_02_CaughtByDemon(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp142_03_TransformationSlaves(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp142_End_EmptyScene(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp15_01_ReunionKailani(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp15_E_DiscoverDemonRoom(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp15_E_DiscoverMirrorRoom(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp15_E_TalkToFreedVillagers(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp15_CS_GoToLake(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp16_01_ConfrontationFlynn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp16_021_GoHomeAlone(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp16_022_GoHomeWithFlynn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp16_02_MakeAWish(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp16_CS_ReunionFamily(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp16_End_EmptyScene(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
}
declare namespace Spiegel_VN {
    function Auswahlmöglichkeiten(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Diary(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function HowToMakeChoices(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function MinigameDemon(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function RandomIntervall(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function ScnTestzene01(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function ScnTestzene02(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function testTunnel(): ƒS.SceneReturn;
}
