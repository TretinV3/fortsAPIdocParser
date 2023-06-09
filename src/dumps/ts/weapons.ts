//-- :::::::::: BEGIN WEAPONS DUMP ::::::::::
export const Weapons =
    [
        {
            Upgrades:
            {
                [1]:
                {
                    Enabled: true,
                    EnergyCost: 400,
                    SaveName: "minigun",
                    MetalCost: 125,
                },
            },
            MaxSpotterAssistance: 0,
            MaxUpAngle: 20,
            FireGroupWhenDoorBlocks: true,
            BuildTimeComplete: 20,
            Icon: "hud-machinegun-icon",
            MetalRepairCost: 7.5,
            MetalCost: 75,
            FileName: "weapons/machinegun.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            EnergyCost: 250,
            SaveName: "machinegun",
            BuildOnGroundOnly: false,
            EnergyRepairCost: 225,
            ScrapPeriod: 5,
            GroupButton: "hud-group-machinegun",
            Detail: "hud-detail-machinegun",
        },
        {
            MaxSpotterAssistance: 0,
            MaxUpAngle: 20,
            Prerequisite: "upgrade",
            BuildTimeComplete: 20,
            Icon: "hud-minigun-icon",
            Enabled: false,
            MetalCost: 200,
            FileName: "weapons/minigun.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 650,
            SaveName: "minigun",
            EnergyRepairCost: 250,
            MetalRepairCost: 15,
            ScrapPeriod: 5,
            GroupButton: "hud-group-minigun",
            Detail: "hud-detail-minigun",
        },
        {
            MaxWeaponGroupSize: 1,
            MaxSpotterAssistance: 0,
            MaxUpAngle: 20,
            BuildTimeComplete: 20,
            Icon: "hud-snipertower-icon",
            MetalRepairCost: 10,
            MetalCost: 100,
            Upgrades:
            {
                sniper2:
                {
                    Enabled: true,
                    EnergyCost: 400,
                    SaveName: "sniper2",
                    MetalCost: 150,
                },
            },
            FileName: "weapons/snipertower.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 300,
            SaveName: "sniper",
            SpotterFactor: 1,
            EnergyRepairCost: 150,
            ScrapPeriod: 5,
            GroupButton: "hud-group-sniper",
            Detail: "hud-detail-sniper",
        },
        {
            MaxWeaponGroupSize: 1,
            MaxSpotterAssistance: 0,
            MaxUpAngle: 20,
            Prerequisite: "upgrade",
            BuildTimeComplete: 25,
            Icon: "hud-apsniper-icon",
            Enabled: false,
            BuildOnGroundOnly: false,
            MetalCost: 250,
            DrawBlurredProjectile: true,
            FileName: "weapons/sniper-ap.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            EnergyRepairCost: 200,
            EnergyCost: 700,
            SaveName: "sniper2",
            SpotterFactor: 0,
            MetalRepairCost: 15,
            ScrapPeriod: 5,
            GroupButton: "hud-group-sniper",
            Detail: "hud-detail-sniperap",
        },
        {
            MaxSpotterAssistance: 0.10000000149012,
            MaxUpAngle: 20,
            Prerequisite: "workshop",
            BuildTimeComplete: 25,
            Icon: "hud-dome-icon",
            MetalRepairCost: 40,
            MetalCost: 150,
            DrawBlurredProjectile: true,
            FileName: "mods/dlc2/weapons/dome.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 800,
            SaveName: "dome",
            SpotterFactor: 0,
            EnergyRepairCost: 200,
            ScrapPeriod: 5,
            GroupButton: "hud-group-dome",
            Detail: "hud-detail-dome",
        },
        {
            Upgrades:
            {
                mortar2:
                {
                    Enabled: true,
                    EnergyCost: 800,
                    SaveName: "mortar2",
                    MetalCost: 100,
                },
            },
            MaxSpotterAssistance: 1,
            MaxUpAngle: 20,
            Prerequisite: "workshop",
            BuildTimeComplete: 30,
            Icon: "hud-incendiarymortar-icon",
            MetalRepairCost: 40,
            MetalCost: 150,
            FileName: "weapons/mortar-incendiary.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 1000,
            SaveName: "mortar",
            CompatibleGroupTypes:
            {
                [1]: "mortar2",
            },
            EnergyRepairCost: 1000,
            ScrapPeriod: 10,
            GroupButton: "hud-group-mortar",
            Detail: "hud-detail-mortar",
        },
        {
            MaxSpotterAssistance: 1,
            MaxUpAngle: 20,
            Prerequisite: "upgrade",
            BuildTimeComplete: 20,
            Icon: "hud-mortar-icon",
            Enabled: false,
            MetalCost: 250,
            EnergyRepairCost: 1000,
            FileName: "weapons/mortar.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 1800,
            SaveName: "mortar2",
            CompatibleGroupTypes:
            {
                [1]: "mortar",
            },
            MetalRepairCost: 40,
            ScrapPeriod: 10,
            GroupButton: "hud-group-mortar",
            Detail: "hud-detail-mortarhe",
        },
        {
            MetalReclaimMax: 0,
            MaxWeaponGroupSize: 1,
            EnergyReclaimMin: 0,
            MetalReclaimMin: 0,
            MaxUpAngle: 20,
            Prerequisite: "workshop",
            BuildTimeComplete: 35,
            Icon: "hud-buzzsaw-icon",
            MetalRepairCost: 50,
            MetalCost: 200,
            BuildOnGroundOnly: false,
            FileName: "mods/dlc1_weapons/weapons/buzzsaw.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            MaxSpotterAssistance: 0,
            EnergyCost: 2000,
            SaveName: "buzzsaw",
            GroupButton: "hud-group-buzzsaw",
            EnergyRepairCost: 1000,
            ScrapPeriod: 5,
            EnergyReclaimMax: 0,
            Detail: "hud-detail-buzzsaw",
        },
        {
            Upgrades:
            {
                [1]:
                {
                    Enabled: true,
                    EnergyCost: 6000,
                    SaveName: "runway2",
                    Prerequisite: "upgrade",
                    MetalCost: 500,
                },
            },
            MaxSpotterAssistance: 0.10000000149012,
            MaxUpAngle: 20,
            Prerequisite: "workshop",
            BuildTimeComplete: 80,
            Icon: "hud-runway-icon",
            BuildTimeIntermediate: 20,
            MetalRepairCost: 100,
            CompatibleGroupTypes:
            {
                [1]: "runway",
                [2]: "runway2",
            },
            MetalCost: 500,
            DrawBlurredProjectile: false,
            FileName: "mods/dlc2/weapons/runway.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 4000,
            SaveName: "runway",
            SpotterFactor: 0,
            EnergyRepairCost: 1000,
            ScrapPeriod: 5,
            GroupButton: "hud-group-runway",
            Detail: "hud-detail-runway",
        },
        {
            MaxSpotterAssistance: 0.10000000149012,
            MaxUpAngle: 20,
            Prerequisite: "workshop",
            BuildTimeComplete: 120,
            HideFromToolTipsAmmoFor: true,
            Icon: "hud-runway-icon",
            BuildTimeIntermediate: 30,
            MetalRepairCost: 400,
            BuildQueueModifier:
            {
                dlc2_runway: 1,
            },
            Enabled: false,
            Detail: "hud-detail-runway2",
            MetalCost: 1000,
            GroupButton: "hud-group-runway",
            FileName: "mods/dlc2_skirmish/mods/dlc2/weapons/runway2.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            ScrapPeriod: 5,
            EnergyCost: 10000,
            DrawBlurredProjectile: false,
            CompatibleGroupTypes:
            {
                [1]: "runway",
                [2]: "runway2",
            },
            EnergyRepairCost: 5000,
            SpotterFactor: 0,
            SaveName: "runway2",
            BuildOnGroundOnly: false,
        },
        {
            Upgrades:
            {
                missile2:
                {
                    Enabled: true,
                    EnergyCost: 2000,
                    SaveName: "missile2",
                    MetalCost: 200,
                },
            },
            RequiresSpotterToFire: true,
            MaxSpotterAssistance: 0,
            MaxUpAngle: 45,
            Prerequisite: "workshop",
            BuildTimeComplete: 70,
            Icon: "hud-missileswarm-icon",
            RequiresLand: true,
            AlignToCursorNormal: false,
            MetalRepairCost: 165,
            EnergyRepairCost: 1250,
            GroupButton: "hud-group-missile",
            AnimationScript: "weapons/missilelauncher_anim.lua",
            Detail: "hud-detail-missileswarm",
            FileName: "weapons/missileswarm.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            ScrapPeriod: 10,
            EnergyCost: 2500,
            SaveName: "missile",
            CompatibleGroupTypes:
            {
                [1]: "missile",
                [2]: "missileinv",
                [3]: "missile2",
                [4]: "missile2inv",
                [5]: "subswarm",
                [6]: "sublauncher",
            },
            MetalCost: 500,
            SpotterFactor: 0,
            InvertedType: "missileinv",
            BuildOnGroundOnly: true,
        },
        {
            Inverted: true,
            RequiresSpotterToFire: true,
            MaxSpotterAssistance: 0,
            MaxUpAngle: 45,
            Prerequisite: "workshop",
            BuildTimeComplete: 70,
            Icon: "hud-missileswarm-icon",
            Upgrades:
            {
                missile2inv:
                {
                    Enabled: true,
                    EnergyCost: 2000,
                    SaveName: "missile2inv",
                    MetalCost: 200,
                },
            },
            AlignToCursorNormal: false,
            GroupButton: "hud-group-missile",
            MetalRepairCost: 165,
            Enabled: true,
            AnimationScript: "weapons/missilelauncher_anim.lua",
            Detail: "hud-detail-missileswarm",
            FileName: "weapons/missileswarm_inverted.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            ScrapPeriod: 10,
            EnergyCost: 2500,
            SaveName: "missileinv",
            CompatibleGroupTypes:
            {
                [1]: "missile",
                [2]: "missileinv",
                [3]: "missile2",
                [4]: "missile2inv",
            },
            MetalCost: 500,
            SpotterFactor: 0,
            EnergyRepairCost: 1250,
            BuildOnGroundOnly: true,
        },
        {
            RequiresSpotterToFire: true,
            MaxSpotterAssistance: 0,
            MaxUpAngle: 45,
            Prerequisite: "upgrade",
            BuildTimeComplete: 95,
            RequiresLand: true,
            Icon: "hud-missile-icon",
            ScrapPeriod: 8,
            MetalRepairCost: 231.00001525879,
            Enabled: false,
            AlignToCursorNormal: false,
            Detail: "hud-detail-missile",
            AnimationScript: "weapons/missilelauncher_anim.lua",
            GroupButton: "hud-group-missile",
            FileName: "weapons/missilelauncher.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            MetalCost: 700,
            EnergyCost: 4500,
            SaveName: "missile2",
            CompatibleGroupTypes:
            {
                [1]: "missile",
                [2]: "missileinv",
                [3]: "missile2",
                [4]: "missile2inv",
                [5]: "subswarm",
                [6]: "sublauncher",
            },
            SpotterFactor: 0,
            EnergyRepairCost: 1250,
            InvertedType: "missile2inv",
            BuildOnGroundOnly: true,
        },
        {
            RequiresWater: true,
            Upgrades:
            {
                [1]:
                {
                    Enabled: true,
                    EnergyCost: 3000,
                    SaveName: "sublauncher",
                    MetalCost: 200,
                },
            },
            RequiresSpotterToFire: true,
            MaxSpotterAssistance: 0,
            MaxUpAngle: 20,
            Prerequisite: "workshop",
            BuildTimeComplete: 70,
            Icon: "hud-subswarm-icon",
            BuildTimeIntermediate: 8,
            MetalRepairCost: 198.00001525879,
            CompatibleGroupTypes:
            {
                [1]: "missile",
                [2]: "missile2",
                [3]: "sublauncher",
            },
            BuildOnGroundOnly: false,
            AnimationScript: "weapons/missilelauncher_anim.lua",
            AlignToCursorNormal: false,
            FileName: "mods/dlc2/weapons/subswarm.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            EnergyRepairCost: 1250,
            EnergyCost: 3000,
            SaveName: "subswarm",
            SpotterFactor: 0,
            MetalCost: 600,
            ScrapPeriod: 10,
            GroupButton: "hud-group-missile",
            Detail: "hud-detail-subswarm",
        },
        {
            RequiresWater: true,
            RequiresSpotterToFire: true,
            MaxSpotterAssistance: 0,
            MaxUpAngle: 20,
            Prerequisite: "upgrade",
            BuildTimeComplete: 95,
            Icon: "hud-sublauncher-icon",
            BuildTimeIntermediate: 8,
            Enabled: false,
            CompatibleGroupTypes:
            {
                [1]: "missile",
                [2]: "missile2",
                [3]: "subswarm",
            },
            MetalRepairCost: 80,
            AlignToCursorNormal: false,
            AnimationScript: "weapons/missilelauncher_anim.lua",
            BuildOnGroundOnly: false,
            FileName: "mods/dlc2/weapons/sublauncher.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            EnergyRepairCost: 1250,
            EnergyCost: 6000,
            SaveName: "sublauncher",
            SpotterFactor: 0,
            MetalCost: 800,
            ScrapPeriod: 8,
            GroupButton: "hud-group-missile",
            Detail: "hud-detail-sublauncher",
        },
        {
            MaxSpotterAssistance: 0.10000000149012,
            MaxUpAngle: 20,
            Prerequisite: "armoury",
            BuildTimeComplete: 25,
            Icon: "hud-harpoon-icon",
            MetalRepairCost: 40,
            MetalCost: 200,
            DrawBlurredProjectile: true,
            FileName: "mods/dlc2/weapons/harpoon.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 1200,
            SaveName: "harpoon",
            SpotterFactor: 0,
            EnergyRepairCost: 200,
            ScrapPeriod: 5,
            GroupButton: "hud-group-harpoon",
            Detail: "hud-detail-harpoon",
        },
        {
            MaxSpotterAssistance: 0.10000000149012,
            MaxUpAngle: 20,
            Prerequisite: "armoury",
            BuildTimeComplete: 25,
            Icon: "hud-smokebomb-icon",
            MetalRepairCost: 40,
            MetalCost: 200,
            DrawBlurredProjectile: true,
            FileName: "mods/dlc1_weapons/weapons/smokebomb.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 800,
            SaveName: "smokebomb",
            SpotterFactor: 0,
            EnergyRepairCost: 200,
            ScrapPeriod: 5,
            GroupButton: "hud-group-smokebomb",
            Detail: "hud-detail-smokebomb",
        },
        {
            Upgrades:
            {
                [1]:
                {
                    Enabled: true,
                    EnergyCost: 400,
                    SaveName: "shotgun",
                    MetalCost: 50,
                },
            },
            MaxSpotterAssistance: 0.10000000149012,
            MaxUpAngle: 20,
            Prerequisite: "armoury",
            BuildTimeComplete: 25,
            Icon: "hud-flak-icon",
            MetalRepairCost: 40,
            MetalCost: 200,
            DrawBlurredProjectile: true,
            FileName: "mods/weapon_pack/weapons/flak.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 800,
            SaveName: "flak",
            SpotterFactor: 0,
            EnergyRepairCost: 200,
            ScrapPeriod: 5,
            GroupButton: "hud-group-flak",
            Detail: "hud-detail-flak",
        },
        {
            MaxSpotterAssistance: 0.10000000149012,
            MaxUpAngle: 20,
            Prerequisite: "upgrade",
            BuildTimeComplete: 20,
            Icon: "hud-shotgun-icon",
            Enabled: false,
            BuildOnGroundOnly: false,
            MetalCost: 250,
            DrawBlurredProjectile: true,
            FileName: "mods/weapon_pack/weapons/shotgun.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            EnergyRepairCost: 400,
            EnergyCost: 1200,
            SaveName: "shotgun",
            SpotterFactor: 0,
            MetalRepairCost: 100,
            ScrapPeriod: 5,
            GroupButton: "hud-group-shotgun",
            Detail: "hud-detail-shotgun",
        },
        {
            Upgrades:
            {
                [1]:
                {
                    Enabled: true,
                    EnergyCost: 1500,
                    SaveName: "rocket",
                    MetalCost: 150,
                },
            },
            MaxSpotterAssistance: 0.10000000149012,
            MaxUpAngle: 20,
            Prerequisite: "armoury",
            BuildTimeComplete: 30,
            Icon: "hud-rocketemp-icon",
            Enabled: true,
            CompatibleGroupTypes:
            {
                [1]: "rocket",
            },
            BuildOnGroundOnly: false,
            MetalCost: 200,
            DrawBlurredProjectile: true,
            FileName: "mods/weapon_pack/weapons/rocketemp.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            EnergyRepairCost: 660,
            EnergyCost: 2000,
            SaveName: "rocketemp",
            SpotterFactor: 0,
            MetalRepairCost: 66,
            ScrapPeriod: 5,
            GroupButton: "hud-group-rocket",
            Detail: "hud-detail-rocketemp",
        },
        {
            MaxSpotterAssistance: 0.10000000149012,
            MaxUpAngle: 20,
            Prerequisite: "upgrade",
            BuildTimeComplete: 30,
            Icon: "hud-rocket-icon",
            Enabled: false,
            CompatibleGroupTypes:
            {
                [1]: "rocketemp",
            },
            BuildOnGroundOnly: false,
            MetalCost: 350,
            DrawBlurredProjectile: true,
            FileName: "mods/weapon_pack/weapons/rocket.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            EnergyRepairCost: 1320,
            EnergyCost: 3500,
            SaveName: "rocket",
            SpotterFactor: 0,
            MetalRepairCost: 132,
            ScrapPeriod: 5,
            GroupButton: "hud-group-rocket",
            Detail: "hud-detail-rocket",
        },
        {
            Inverted: true,
            RequiresSpotterToFire: true,
            MaxSpotterAssistance: 0,
            MaxUpAngle: 45,
            Prerequisite: "upgrade",
            BuildTimeComplete: 95,
            Icon: "hud-missile-icon",
            MetalRepairCost: 231.00001525879,
            Enabled: false,
            ScrapPeriod: 8,
            Detail: "hud-detail-missile",
            AnimationScript: "weapons/missilelauncher_anim.lua",
            GroupButton: "hud-group-missile",
            FileName: "weapons/missilelauncher_inverted.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            MetalCost: 700,
            EnergyCost: 4500,
            SaveName: "missile2inv",
            CompatibleGroupTypes:
            {
                [1]: "missile",
                [2]: "missileinv",
                [3]: "missile2",
                [4]: "missile2inv",
            },
            SpotterFactor: 0,
            EnergyRepairCost: 1250,
            AlignToCursorNormal: false,
            BuildOnGroundOnly: true,
        },
        {
            Upgrades:
            {
                [1]:
                {
                    Enabled: true,
                    EnergyCost: 2000,
                    SaveName: "turret",
                    MetalCost: 200,
                    Button: "hud-context-upgrade-deckgun",
                },
                [2]:
                {
                    Enabled: true,
                    EnergyCost: 2000,
                    SaveName: "orbital_laser",
                    MetalCost: 200,
                    Button: "hud-context-upgrade-orbitallaser",
                },
            },
            MaxSpotterAssistance: 1,
            MaxUpAngle: 20,
            Prerequisite: "armoury",
            BuildTimeComplete: 30,
            Icon: "hud-hardpoint-icon",
            BuildTimeIntermediate: 11,
            MetalRepairCost: 100,
            MetalCost: 500,
            FileName: "mods/dlc2/weapons/hardpoint.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            EnergyCost: 2000,
            SaveName: "hardpoint",
            BuildOnGroundOnly: false,
            EnergyRepairCost: 500,
            ScrapPeriod: 10,
            GroupButton: "hud-group-turret",
            Detail: "hud-detail-hardpoint",
        },
        {
            IgnitePlatformOnDestruct: true,
            MaxSpotterAssistance: 1,
            MaxUpAngle: 20,
            Prerequisite: "munitions",
            BuildTimeComplete: 70,
            Icon: "hud-20mmcannon-icon",
            MetalRepairCost: 200,
            MetalCost: 600,
            FileName: "mods/weapon_pack/weapons/20mmcannon.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 4000,
            SaveName: "cannon20mm",
            CompatibleGroupTypes:
            {
                [1]: "cannon",
            },
            EnergyRepairCost: 1500,
            ScrapPeriod: 8,
            GroupButton: "hud-group-cannon",
            Detail: "hud-detail-20mmcannon",
        },
        {
            MaxSpotterAssistance: 1,
            MaxUpAngle: 20,
            Prerequisite: "munitions",
            BuildTimeComplete: 110,
            Icon: "hud-cannon-icon",
            MetalRepairCost: 297,
            EnergyRepairCost: 3000,
            BuildOnGroundOnly: false,
            FileName: "weapons/cannon.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            Enabled: true,
            EnergyCost: 5000,
            SaveName: "cannon",
            CompatibleGroupTypes:
            {
                [1]: "cannon20mm",
            },
            MetalCost: 900,
            ScrapPeriod: 8,
            GroupButton: "hud-group-cannon",
            Detail: "hud-detail-cannon-wp",
        },
        {
            MetalRepairCost: 330,
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            MaxUpAngle: 20,
            MetalCost: 1000,
            EnergyRepairCost: 9000,
            FileName: "mods/dlc1_weapons/weapons/howitzer.lua",
            MaxSpotterAssistance: 1,
            ScrapPeriod: 10,
            EnergyCost: 9000,
            SaveName: "howitzer",
            Prerequisite: "munitions",
            BuildTimeComplete: 120,
            GroupButton: "hud-group-howitzer",
            Icon: "hud-howitzer-icon",
            Detail: "hud-detail-howitzer",
        },
        {
            Upgrades:
            {
                [1]:
                {
                    Enabled: true,
                    EnergyCost: 2000,
                    SaveName: "turret2",
                    MetalCost: 200,
                    Button: "hud-context-upgrade-deckgun2",
                },
            },
            ProxyUpgrades:
            {
                [1]:
                {
                    MetalCost: 200,
                    EnergyCost: 2000,
                    SaveName: "turret2_focus",
                },
            },
            MaxSpotterAssistance: 1,
            MaxUpAngle: 20,
            Prerequisite: "munitions",
            BuildTimeComplete: 90,
            Icon: "hud-turret-icon",
            BuildTimeIntermediate: 11,
            Enabled: false,
            MetalCost: 700,
            EnergyRepairCost: 500,
            FileName: "mods/dlc2/weapons/turret.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 4000,
            SaveName: "turret",
            CompatibleGroupTypes:
            {
                [1]: "turret2",
                [2]: "turret3",
                [3]: "turret2_focus",
                [4]: "turret3_focus",
            },
            MetalRepairCost: 100,
            ScrapPeriod: 10,
            GroupButton: "hud-group-turret",
            Detail: "hud-detail-turret",
        },
        {
            Upgrades:
            {
                [1]:
                {
                    Enabled: true,
                    EnergyCost: 1500,
                    SaveName: "turret3",
                    MetalCost: 150,
                    Button: "hud-context-upgrade-deckgun3",
                },
                [2]:
                {
                    Enabled: true,
                    CanDowngrade: false,
                    MetalCost: 0,
                    TransferReloadProgress: true,
                    EnergyCost: 0,
                    SaveName: "turret2_focus",
                    Prerequisite:
                    {
                        [1]:
                        {
                        },
                    },
                    Button: "hud-context-turret2-focus",
                    BuildDuration: 1,
                },
            },
            ProxyUpgrades:
            {
                [1]:
                {
                    MetalCost: 150,
                    EnergyCost: 1500,
                    SaveName: "turret3_focus",
                },
            },
            MaxSpotterAssistance: 1,
            MaxUpAngle: 20,
            Prerequisite: "munitions",
            BuildTimeComplete: 90,
            Icon: "hud-turret2-icon",
            BuildTimeIntermediate: 11,
            Enabled: false,
            MetalCost: 900,
            EnergyRepairCost: 500,
            FileName: "mods/dlc2/weapons/turret2.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 6000,
            SaveName: "turret2",
            CompatibleGroupTypes:
            {
                [1]: "turret",
                [2]: "turret3",
                [3]: "turret2_focus",
                [4]: "turret3_focus",
            },
            MetalRepairCost: 100,
            ScrapPeriod: 10,
            GroupButton: "hud-group-turret",
            Detail: "hud-detail-turret2-spread",
        },
        {
            Upgrades:
            {
                [1]:
                {
                    Enabled: true,
                    EnergyCost: 1500,
                    SaveName: "turret3_focus",
                    Prerequisite: "munitions",
                    MetalCost: 150,
                    HideFromToolTips: true,
                    CanDowngrade: false,
                    Button: "hud-context-upgrade-deckgun3",
                },
                [2]:
                {
                    Enabled: true,
                    CanDowngrade: false,
                    MetalCost: 0,
                    TransferReloadProgress: true,
                    EnergyCost: 0,
                    SaveName: "turret2",
                    Prerequisite:
                    {
                        [1]:
                        {
                        },
                    },
                    Button: "hud-context-turret2-spread",
                    BuildDuration: 1,
                },
            },
            MaxSpotterAssistance: 1,
            MaxUpAngle: 20,
            BuildTimeComplete: 0,
            Icon: "hud-turret2_focus-icon",
            BuildTimeIntermediate: 0,
            Enabled: false,
            MetalCost: 900,
            EnergyRepairCost: 500,
            FileName: "mods/dlc2/weapons/turret2_focus.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 6000,
            SaveName: "turret2_focus",
            CompatibleGroupTypes:
            {
                [1]: "turret",
                [2]: "turret2",
                [3]: "turret3",
                [4]: "turret3_focus",
            },
            MetalRepairCost: 100,
            ScrapPeriod: 10,
            GroupButton: "hud-group-turret",
            Detail: "hud-detail-turret2",
        },
        {
            Upgrades:
            {
                [1]:
                {
                    Enabled: true,
                    CanDowngrade: false,
                    MetalCost: 0,
                    TransferReloadProgress: true,
                    EnergyCost: 0,
                    SaveName: "turret3_focus",
                    Prerequisite:
                    {
                        [1]:
                        {
                        },
                    },
                    Button: "hud-context-turret3-focus",
                    BuildDuration: 1,
                },
            },
            MaxSpotterAssistance: 1,
            MaxUpAngle: 20,
            Prerequisite: "munitions",
            BuildTimeComplete: 90,
            Icon: "hud-turret3-icon",
            BuildTimeIntermediate: 11,
            Enabled: false,
            MetalCost: 1150,
            EnergyRepairCost: 500,
            FileName: "mods/dlc2/weapons/turret3.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 7500,
            SaveName: "turret3",
            CompatibleGroupTypes:
            {
                [1]: "turret",
                [2]: "turret2",
                [3]: "turret2_focus",
                [4]: "turret3_focus",
            },
            MetalRepairCost: 100,
            ScrapPeriod: 10,
            GroupButton: "hud-group-turret",
            Detail: "hud-detail-turret3-spread",
        },
        {
            Upgrades:
            {
                [1]:
                {
                    Enabled: true,
                    CanDowngrade: false,
                    MetalCost: 0,
                    TransferReloadProgress: true,
                    EnergyCost: 0,
                    SaveName: "turret3",
                    Prerequisite:
                    {
                        [1]:
                        {
                        },
                    },
                    Button: "hud-context-turret3-spread",
                    BuildDuration: 1,
                },
            },
            MaxSpotterAssistance: 1,
            MaxUpAngle: 20,
            BuildTimeComplete: 90,
            Icon: "hud-turret3_focus-icon",
            BuildTimeIntermediate: 11,
            Enabled: false,
            MetalCost: 1150,
            EnergyRepairCost: 500,
            FileName: "mods/dlc2/weapons/turret3_focus.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 7500,
            SaveName: "turret3_focus",
            CompatibleGroupTypes:
            {
                [1]: "turret",
                [2]: "turret2",
                [3]: "turret3",
                [4]: "turret2_focus",
            },
            MetalRepairCost: 100,
            ScrapPeriod: 10,
            GroupButton: "hud-group-turret",
            Detail: "hud-detail-turret3",
        },
        {
            IgnitePlatformOnDestruct: true,
            MaxSpotterAssistance: 0.5,
            MaxUpAngle: 20,
            Prerequisite: "factory",
            BuildTimeComplete: 75,
            Icon: "hud-firebeam-icon",
            MetalRepairCost: 132,
            MetalCost: 400,
            FileName: "mods/weapon_pack/weapons/firebeam.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 3000,
            SaveName: "firebeam",
            CompatibleGroupTypes:
            {
                [1]: "laser",
                [2]: "magnabeam",
            },
            EnergyRepairCost: 3000,
            ScrapPeriod: 8,
            GroupButton: "hud-group-laser",
            Detail: "hud-detail-firebeam",
        },
        {
            IgnitePlatformOnDestruct: true,
            MaxSpotterAssistance: 0.5,
            MaxUpAngle: 20,
            Prerequisite: "factory",
            BuildTimeComplete: 75,
            Icon: "hud-magnabeam-icon",
            MetalRepairCost: 200,
            MetalCost: 600,
            FileName: "mods/dlc1_weapons/weapons/magnabeam.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 5000,
            SaveName: "magnabeam",
            CompatibleGroupTypes:
            {
                [1]: "laser",
                [2]: "firebeam",
            },
            EnergyRepairCost: 3000,
            ScrapPeriod: 8,
            GroupButton: "hud-group-magnabeam",
            Detail: "hud-detail-magnabeam",
        },
        {
            MaxSpotterAssistance: 0.5,
            MaxUpAngle: 20,
            Prerequisite: "factory",
            BuildTimeComplete: 120,
            Icon: "hud-beamlaser-icon",
            MetalRepairCost: 330,
            EnergyRepairCost: 4000,
            BuildOnGroundOnly: false,
            FileName: "weapons/beamlaser.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            Enabled: true,
            EnergyCost: 6000,
            SaveName: "laser",
            CompatibleGroupTypes:
            {
                [1]: "firebeam",
                [2]: "magnabeam",
            },
            MetalCost: 1000,
            ScrapPeriod: 8,
            GroupButton: "hud-group-laser",
            Detail: "hud-detail-laser",
        },
        {
            Upgrades:
            {
                [1]:
                {
                    Enabled: true,
                    EnergyCost: 2000,
                    SaveName: "orbital_laser2",
                    MetalCost: 100,
                },
            },
            MaxSpotterAssistance: 1,
            MaxUpAngle: 20,
            Prerequisite: "factory",
            BuildTimeComplete: 130,
            Icon: "hud-orbital_laser-icon",
            BuildTimeIntermediate: 11,
            Enabled: false,
            MetalCost: 700,
            EnergyRepairCost: 500,
            FileName: "mods/dlc2/weapons/orbital_laser.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 4000,
            SaveName: "orbital_laser",
            CompatibleGroupTypes:
            {
                [1]: "orbital_laser2",
            },
            MetalRepairCost: 100,
            ScrapPeriod: 10,
            GroupButton: "hud-group-orbital_laser",
            Detail: "hud-detail-orbital_laser",
        },
        {
            MaxSpotterAssistance: 1,
            MaxUpAngle: 20,
            Prerequisite: "upgrade",
            BuildTimeComplete: 30,
            Icon: "hud-orbital_laser-icon",
            BuildTimeIntermediate: 5,
            Enabled: false,
            EnergyRepairCost: 500,
            MetalCost: 800,
            HideFromToolTipsAmmoFor: true,
            FileName: "mods/dlc2/weapons/orbital_laser2.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            BuildOnGroundOnly: false,
            EnergyCost: 6000,
            SaveName: "orbital_laser2",
            CompatibleGroupTypes:
            {
                [1]: "orbital_laser",
            },
            MetalRepairCost: 100,
            ScrapPeriod: 10,
            GroupButton: "hud-group-orbital_laser",
            Detail: "hud-detail-orbital_laser2",
        },
        {
            MetalReclaimMax: 0,
            HideFromEditor: true,
            Selectable: false,
            MetalReclaimMin: 0,
            MaxUpAngle: 90,
            EnergyRepairCost: 0,
            BuildTimeComplete: 0,
            dlc2_BuildAnywhere: true,
            Icon: "hud-orbital_laser-icon",
            BuildTimeIntermediate: 0,
            Enabled: false,
            BuildOnGroundOnly: true,
            MaxSpotterAssistance: 0,
            GroupButton: "hud-group-orbital_laser",
            ExcludeUnlockAll: true,
            EnergyReclaimMin: 0,
            FileName: "mods/dlc2/weapons/orbital_laser_source.lua",
            SelectEffect: "ui/hud/weapons/ui_weapons",
            MetalRepairCost: 0,
            EnergyCost: 0,
            SaveName: "orbital_laser_source",
            MetalCost: 0,
            ScrapPeriod: 0,
            Detail: "hud-detail-orbital_laser",
            EnergyReclaimMax: 0,
            SavedInEditor: false,
        },
    ]
//-- ::::::::::  END WEAPONS DUMP  ::::::::::