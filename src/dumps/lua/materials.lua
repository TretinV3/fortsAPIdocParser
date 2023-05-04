-- ========== BEGIN MATERIALS DUMP ==========
Materials = 
{
    [1] = 
    {
        DegreesPerSecondMin = 20,
        MaxLinkLength = 218,
        ReflectionMomentumThreshold = 80,
        SpeedLossFactor = 1,
        HitPoints = 150,
        Mass = 0.25,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-fndstd",
                    angle = 145,
                },
                [2] = 
                {
                    material = "core-fndhvyroof",
                },
            },
            Priority = 2,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        SupportsDevices = true,
        AbsorptionMomentumThreshold = 30,
        NoCostRecession = true,
        AirDrag = 6.4000000953674,
        EnergyRepairCost = 0.75,
        MaxCompression = 0.89999997615814,
        MaxLength = 150,
        Sprite = "bracing",
        EnergyRunCost = 0,
        EnergyReclaim = 0,
        EnergyBuildCost = 0.5,
        DegreesPerSecondMax = 32,
        CatchesFire = true,
        Detail = "hud-detail-bracing",
        RicochetVariationFactor = 0,
        ReflectsBeams = false,
        RenderOrder = 1,
        BuildTime = 5,
        Context = "context-bracing",
        RecessionTargetSaveName = "backbracing",
        MaxExpansion = 1.1000000238419,
        SaveName = "bracing",
        SelectEffect = "ui/hud/materials/ui_materials",
        Icon = "hud-bracing-icon",
        MinLength = 37.5,
        MetalRepairCost = 0.10000000149012,
        FireDestroyEffect = "effects/destroy_fire.lua",
        Conversions = 
        {
            [1] = "bracing",
            [2] = "backbracing",
            [3] = "armour",
            [4] = "door",
            [5] = "shield",
            [6] = "portal",
        },
        IsBehindDevices = false,
        DoorTargetSaveName = "door",
        AttachesCladding = true,
        BuildEffect = "effects/build_bracing.lua",
        PenetrationMomentumThreshold = 1000,
        Stiffness = 200000,
        MetalReclaim = 0.025000000372529,
        DestroyEffect = "effects/bracing_destroy.lua",
        ArmorTargetSaveName = "armour",
        NodeImpacts = 
        {
            foundations = "effects/bounce_wood.lua",
            default = "effects/bounce_wood.lua",
            rocks01 = "effects/bounce_wood.lua",
        },
        ScrapTime = 3,
        KeySpriteByDamage = true,
        MetalBuildCost = 0.10000000149012,
    },
    [2] = 
    {
        DegreesPerSecondMin = 64,
        MaxLinkLength = 218,
        ReflectionMomentumThreshold = 80,
        SpeedLossFactor = 1,
        HitPoints = 100,
        CollidesWithEnemyProjectiles = false,
        Mass = 0.25,
        Detail = "hud-detail-bracingbg",
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-fndstd",
                    angle = 145,
                },
                [2] = 
                {
                    material = "core-fndhvyroof",
                },
            },
            Priority = 2,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        Context = "context-backbracing",
        SupportsDevices = false,
        AbsorptionMomentumThreshold = 30,
        NoCostRecession = true,
        AirDrag = 3.2000000476837,
        EnergyRepairCost = 0.75,
        ShowOnHUD = true,
        MaxCompression = 0.9200000166893,
        MaxLength = 150,
        Sprite = "bracing-bg",
        EnergyRunCost = 0,
        ConductsPower = true,
        EnergyReclaim = 0,
        EnergyBuildCost = 0.5,
        MaxExpansion = 1.0800000429153,
        SaveName = "backbracing",
        DegreesPerSecondMax = 92,
        MetalReclaim = 0.025000000372529,
        CatchesFire = true,
        CollidesWithFriendlyProjectiles = false,
        CollidesWithEnemyBeams = true,
        FogOfWarTargetSaveName = "bracing",
        RicochetVariationFactor = 0,
        ReflectsBeams = false,
        DoorTargetSaveName = "door",
        BuildTime = 5,
        SelectEffect = "ui/hud/materials/ui_materials",
        IsBehindDevices = true,
        AttachesCladding = true,
        BackgroundCladding = true,
        PoweredByDeviceOverlap = true,
        Icon = "hud-bg-bracing-icon",
        MinLength = 37.5,
        MetalRepairCost = 0.10000000149012,
        FireDestroyEffect = "effects/destroy_fire.lua",
        CollidesWithWind = false,
        CollidesWithFriendlyBeams = false,
        FullExtrusion = true,
        RenderOrder = 0,
        BuildEffect = "effects/build_bracing.lua",
        PenetrationMomentumThreshold = 1000,
        Stiffness = 200000,
        ForegroundTargetSaveName = "bracing",
        DestroyEffect = "effects/bracing_destroy.lua",
        ArmorTargetSaveName = "armour",
        NodeImpacts = 
        {
            foundations = "effects/bounce_wood.lua",
            default = "effects/bounce_wood.lua",
            rocks01 = "effects/bounce_wood.lua",
        },
        ScrapTime = 3,
        KeySpriteByDamage = true,
        MetalBuildCost = 0.10000000149012,
    },
    [3] = 
    {
        DegreesPerSecondMin = 20,
        MaxLinkLength = 218,
        ReflectionMomentumThreshold = 80,
        SpeedLossFactor = 1,
        HitPoints = 150,
        Mass = 0.25,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-fndstd",
                    angle = 145,
                },
                [2] = 
                {
                    material = "core-fndhvyroof",
                },
            },
            Priority = 2,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        SupportsDevices = true,
        AbsorptionMomentumThreshold = 30,
        NoCostRecession = true,
        AirDrag = 6.4000000953674,
        EnergyRepairCost = 0.75,
        MaxCompression = 0.89999997615814,
        MaxLength = 150,
        Sprite = "camo",
        EnergyRunCost = 0,
        EnergyReclaim = 0,
        EnergyBuildCost = 0.5,
        DegreesPerSecondMax = 32,
        CatchesFire = true,
        Detail = "hud-detail-bracing",
        RicochetVariationFactor = 0,
        ReflectsBeams = false,
        RenderOrder = 2,
        BuildTime = 5,
        AttachesCladding = true,
        RecessionTargetSaveName = "backbracing",
        MaxExpansion = 1.1000000238419,
        SaveName = "camo",
        SelectEffect = "ui/hud/materials/ui_materials",
        Icon = "hud-camo-icon",
        MinLength = 37.5,
        MetalRepairCost = 0.050000000745058,
        FireDestroyEffect = "effects/destroy_fire.lua",
        IsBehindDevices = false,
        DoorTargetSaveName = "door",
        ShowInEditor = false,
        Enabled = false,
        BuildEffect = "effects/build_bracing.lua",
        PenetrationMomentumThreshold = 1000,
        Stiffness = 200000,
        MetalReclaim = 0.025000000372529,
        DestroyEffect = "effects/bracing_destroy.lua",
        ArmorTargetSaveName = "armour",
        NodeImpacts = 
        {
            foundations = "effects/bounce_wood.lua",
            default = "effects/bounce_wood.lua",
            rocks01 = "effects/bounce_wood.lua",
        },
        ScrapTime = 3,
        KeySpriteByDamage = true,
        MetalBuildCost = 0.10000000149012,
    },
    [4] = 
    {
        MetalReclaim = 0.89999997615814,
        MaxLinkLength = 218,
        ReflectionMomentumThreshold = 1600,
        SpeedLossFactor = 0.94999998807907,
        HitPoints = 400,
        PostCreateTargetSaveName = "bracing",
        Mass = 0.5,
        IsFogOfWarArmour = true,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-fndstd",
                    angle = 145,
                },
                [2] = 
                {
                    material = "core-fndhvyroof",
                },
            },
            Priority = 2,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        SupportsDevices = false,
        AttachesCladding = true,
        IsBehindDevices = false,
        BeamPenetrationBlockDist = 90,
        KeySpriteByDamage = true,
        MaxLength = 150,
        Sprite = "armor",
        EnergyRunCost = 0,
        EnergyReclaim = 0,
        EnergyBuildCost = 1.5,
        Detail = "hud-detail-armor",
        RenderOrder = 5,
        Context = "context-armor",
        RicochetVariationFactor = 0.0099999997764826,
        ReflectsBeams = false,
        RecessionTargetSaveName = "backbracing",
        BuildTime = 8,
        SaveName = "armour",
        DoorOnClearanceOverlap = true,
        EnergyRepairCost = 3,
        FogOfWarTargetSaveName = "bracing",
        ArmorRemovalTargetSaveName = "bracing",
        Icon = "hud-armor-icon",
        MinLength = 37.5,
        MetalRepairCost = 0.40000000596046,
        SelectEffect = "ui/hud/materials/ui_materials",
        DoorTargetSaveName = "door",
        WeaponRecession = true,
        AirDrag = 6.4000000953674,
        PenetrationMomentumThreshold = 4000,
        MaxExpansion = 1.1000000238419,
        MaxCompression = 0.89999997615814,
        Stiffness = 250000,
        ForegroundTargetSaveName = "bracing",
        DestroyEffect = "effects/armor_destroy.lua",
        BuildEffect = "effects/build_armor.lua",
        NodeImpacts = 
        {
            foundations = "effects/bounce_metal.lua",
            default = "effects/bounce_metal.lua",
            rocks01 = "effects/bounce_metal.lua",
        },
        ScrapTime = 4,
        AbsorptionMomentumThreshold = 50,
        MetalBuildCost = 1.7999999523163,
    },
    [5] = 
    {
        MetalReclaim = 1,
        MaxLinkLength = 218,
        ReflectionMomentumThreshold = 1600,
        SpeedLossFactor = 0.94999998807907,
        HitPoints = 400,
        PostCreateTargetSaveName = "bracing",
        SpriteDoor = "armor",
        Mass = 0.5,
        IsFogOfWarArmour = true,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-fndstd",
                    angle = 145,
                },
                [2] = 
                {
                    material = "core-fndhvyroof",
                },
            },
            Priority = 2,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        SupportsDevices = false,
        AttachesCladding = true,
        PostCreateMaterialAlways = true,
        IsBehindDevices = false,
        BeamPenetrationBlockDist = 90,
        DoorSpeedClose = 50,
        KeySpriteByDamage = true,
        MaxLength = 150,
        Sprite = "door-rail",
        EnergyRunCost = 0,
        MaxCompression = 0.89999997615814,
        EnergyReclaim = 0,
        EnergyBuildCost = 2,
        DoorCap = "materials/door_cap.dds",
        Context = "context-door",
        Detail = "hud-detail-door",
        SaveName = "door",
        FogOfWarTargetSaveName = "bracing",
        BackgroundCladding = true,
        ArmorRemovalTargetSaveName = "bracing",
        PenetrationMomentumThreshold = 4000,
        RicochetVariationFactor = 0.0099999997764826,
        ReflectsBeams = false,
        RecessionTargetSaveName = "backbracing",
        BuildTime = 10,
        RenderOrder = 6,
        DoorTargetSaveName = "door",
        WeaponRecession = true,
        RepairRateMultiplier = 1.5,
        OpenEffect = "effects/operate_door.lua",
        Icon = "hud-door-icon",
        MinLength = 49,
        MetalRepairCost = 1,
        IsDoor = true,
        AirDrag = 6.4000000953674,
        SelectEffect = "ui/hud/materials/ui_materials",
        CloseEffect = "effects/operate_door.lua",
        DoorSpeed = 70,
        MaxExpansion = 1.1000000238419,
        DoorOpenMax = 10,
        Stiffness = 250000,
        EnergyRepairCost = 3.5,
        DestroyEffect = "effects/armor_destroy.lua",
        BuildEffect = "effects/build_door.lua",
        NodeImpacts = 
        {
            foundations = "effects/bounce_metal.lua",
            default = "effects/bounce_metal.lua",
            rocks01 = "effects/bounce_metal.lua",
        },
        ScrapTime = 4,
        AbsorptionMomentumThreshold = 50,
        MetalBuildCost = 2,
    },
    [6] = 
    {
        MetalReclaim = 0.75,
        ReflectionMomentumThreshold = 0,
        SpeedLossFactor = 1,
        HitPoints = 200,
        Mass = 0.40000000596046,
        EnergyProductionClearance = 500,
        NoProductionColour = 
        {
            [1] = 0.5,
            [2] = 0.5,
            [3] = 0.5,
            [4] = 1,
        },
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-fndstd",
                    angle = 145,
                },
                [2] = 
                {
                    material = "core-fndhvyroof",
                },
            },
            Priority = 2,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        SupportsDevices = false,
        AttachesCladding = true,
        IsBehindDevices = false,
        EnergyRepairCost = 3.5,
        MaxCompression = 0.89999997615814,
        MaxLength = 218,
        Sprite = "solarpanel",
        EnergyRunCost = -0.20000000298023,
        EnergyReclaim = 0,
        EnergyBuildCost = 2,
        MaxAngle = 20,
        RenderOrder = 3,
        MaxExpansion = 1.1000000238419,
        BuildTime = 12,
        EnergyMinEfficiency = 0.69999998807907,
        Icon = "hud-solar-icon",
        MinLength = 37.5,
        Enabled = false,
        ShowInEditor = false,
        CanAttachToGround = false,
        NodeImpacts = 
        {
            foundations = "effects/bounce_metal.lua",
            default = "effects/bounce_metal.lua",
            rocks01 = "effects/bounce_metal.lua",
        },
        SelectEffect = "ui/hud/materials/ui_materials",
        DestroyEffect = "effects/armor_destroy.lua",
        ReflectsBeams = false,
        KeySpriteByDamage = true,
        EnergyMaxHeight = 500,
        SaveName = "solar",
        MetalRepairCost = 3,
        Stiffness = 200000,
        ScrapTime = 4,
        RicochetVariationFactor = 0,
        MetalBuildCost = 1.5,
    },
    [7] = 
    {
        MetalReclaim = 1,
        MaxLinkLength = 218,
        ReflectionMomentumThreshold = 400,
        SpeedLossFactor = 0.85000002384186,
        HitPoints = 60,
        PostCreateTargetSaveName = "bracing",
        WarmUpTime = 10,
        Mass = 0.050000000745058,
        EndLinkOffset = -40,
        Context = "context-shield",
        SupportsDevices = false,
        AttachesCladding = true,
        PostCreateMaterialAlways = true,
        IsBehindDevices = false,
        EnergyRepairCost = 2,
        MaxCompression = 0.89999997615814,
        MaxLength = 150,
        Sprite = "energy_shield",
        EnergyRunCost = 0.20000000298023,
        ConductsPower = true,
        EnergyReclaim = 0,
        EnergyBuildCost = 2.5,
        Detail = "hud-detail-energyshield",
        WarmUpTimeDisabled = 12,
        BackgroundCladding = true,
        NodeImpacts = 
        {
            foundations = "effects/bounce_metal.lua",
            default = "effects/bounce_metal.lua",
            rocks01 = "effects/bounce_metal.lua",
        },
        RenderOrder = 4,
        MaxExpansion = 1.1000000238419,
        IsFogOfWarArmour = true,
        BuildTime = 15,
        SelectEffect = "ui/hud/materials/ui_materials",
        EnableEffect = "effects/shield_enable.lua",
        CollidesWithWind = false,
        WarmupEffect = "effects/shield_warmup.lua",
        DisableEffect = "effects/shield_disable.lua",
        Icon = "hud-shield-icon",
        MinLength = 90,
        MetalRepairCost = 1.7999999523163,
        CloseEffect = "effects/shield_warmup.lua",
        OpenEffect = "effects/shield_disable.lua",
        DestroyEffect = "effects/shield_destroy.lua",
        KeyEndCapByDamage = true,
        BuildEffect = "effects/build_shield.lua",
        FogOfWarTargetSaveName = "bracing",
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-fndstd",
                    angle = 145,
                },
                [2] = 
                {
                    material = "core-fndhvyroof",
                },
            },
            Priority = 2,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        EndCap = "energy-node",
        ReflectsBeams = true,
        SaveName = "shield",
        SpriteDeactivated = "materials/energy_shield_deactivated",
        Stiffness = 200000,
        ScrapTime = 4,
        RicochetVariationFactor = 0.0099999997764826,
        MetalBuildCost = 2,
    },
    [8] = 
    {
        MetalReclaim = 0.050000000745058,
        ReflectionMomentumThreshold = 30,
        SpeedLossFactor = 1,
        HitPoints = 50,
        CollidesWithEnemyProjectiles = false,
        Mass = 0.0010000000474975,
        ShowEndFireSegments = true,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-peg",
                },
            },
            Priority = 3,
            Plates = 
            {
                [1] = 
                {
                    material = "core-peg-preview",
                    mass = 0,
                },
                [2] = 
                {
                    material = "core-cableplate",
                    mass = 0.10000000149012,
                },
            },
            Pegs = 
            {
                [1] = 
                {
                    material = "core-peg",
                },
            },
        },
        Pretension = 0.019999999552965,
        SupportsDevices = false,
        SpringDamping = 100,
        AirDrag = 0.89999997615814,
        EnergyRepairCost = 1.2000000476837,
        MaxCompression = 0.60000002384186,
        MaxLength = 800,
        Sprite = "rope",
        EnergyRunCost = 0,
        ConductsPower = false,
        EnergyReclaim = 0,
        EnergyBuildCost = 0.5,
        FireLateralOffsetStdDev = 3,
        Detail = "hud-detail-cable",
        NodeImpacts = 
        {
            foundations = "",
            default = "",
            rocks01 = "",
        },
        CatchesFire = true,
        CollidesWithFriendlyProjectiles = false,
        CollidesWithEnemyBeams = true,
        SelectEffect = "ui/hud/materials/ui_materials",
        RenderOrder = 7,
        MaxExpansion = 1.5,
        AlignedLinksAllowed = true,
        BuildTime = 0,
        KeySpriteByDamage = true,
        CanBeTempBraced = false,
        BuildEffect = "effects/build_cable.lua",
        CollidesWithWind = false,
        IsBehindDevices = false,
        Icon = "hud-cable-icon",
        MinLength = 100,
        Enabled = true,
        AngleStressSecondaryThreshold = 360,
        AngleStressPrimaryThreshold = 360,
        CollidesWithFriendlyBeams = false,
        DegreesPerSecondMax = 100,
        DegreesPerSecondMin = 20,
        ReflectsBeams = false,
        AttachesCladding = false,
        RequiresFoundationSupport = false,
        MaxSegmentLength = 75,
        SaveName = "rope",
        MetalRepairCost = 0.20000000298023,
        Stiffness = 50000,
        ScrapTime = 0,
        RicochetVariationFactor = 0,
        MetalBuildCost = 0.10000000149012,
    },
    [9] = 
    {
        MetalReclaim = 0.075000002980232,
        ReflectionMomentumThreshold = 30,
        SpeedLossFactor = 1,
        HitPoints = 50,
        CollidesWithEnemyProjectiles = false,
        Mass = 0.0010000000474975,
        ShowEndFireSegments = true,
        FireSprite = "fuse_fire",
        Pretension = 0.019999999552965,
        SupportsDevices = false,
        SpringDamping = 100,
        NodeImpacts = 
        {
            foundations = "",
            default = "",
            rocks01 = "",
        },
        AirDrag = 0.89999997615814,
        EnergyRepairCost = 1.2000000476837,
        SelectEffect = "ui/hud/materials/ui_materials",
        MaxCompression = 0.60000002384186,
        MaxLength = 800,
        Sprite = "fuse",
        EnergyRunCost = 0,
        ConductsPower = false,
        EnergyReclaim = 0,
        EnergyBuildCost = 0.5,
        FireLateralOffsetStdDev = 3,
        KeySpriteByDamage = true,
        Detail = "hud-detail-cable",
        MetalRepairCost = 0.20000000298023,
        CatchesFire = true,
        CollidesWithFriendlyProjectiles = false,
        CollidesWithEnemyBeams = true,
        BuildEffect = "effects/build_cable.lua",
        RenderOrder = 8,
        MaxExpansion = 1.5,
        AlignedLinksAllowed = true,
        BuildTime = 0,
        CollidesWithWind = false,
        CanBeTempBraced = false,
        IsBehindDevices = false,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-peg",
                },
            },
            Priority = 3,
            Plates = 
            {
                [1] = 
                {
                    material = "core-peg-preview",
                    mass = 0,
                },
                [2] = 
                {
                    material = "core-cableplate",
                    mass = 0.10000000149012,
                },
            },
            Pegs = 
            {
                [1] = 
                {
                    material = "core-peg",
                },
            },
        },
        AngleStressSecondaryThreshold = 360,
        Icon = "hud-fuse-icon",
        MinLength = 100,
        Enabled = false,
        AngleStressPrimaryThreshold = 360,
        CollidesWithFriendlyBeams = false,
        DegreesPerSecondMax = 1000,
        DegreesPerSecondMin = 1000,
        Repairable = false,
        ReflectsBeams = false,
        AttachesCladding = false,
        RequiresFoundationSupport = false,
        MaxSegmentLength = 35,
        SaveName = "fuse",
        SmokeEffect = "effects/fuse_burn.lua",
        Stiffness = 50000,
        ScrapTime = 0,
        RicochetVariationFactor = 0,
        MetalBuildCost = 0.10000000149012,
    },
    [10] = 
    {
        MetalReclaim = 0.5,
        MaxLinkLength = 155,
        ReflectionMomentumThreshold = 0,
        SpeedLossFactor = 0,
        HitPoints = 60,
        CollidesWithEnemyProjectiles = true,
        PostCreateTargetSaveName = "bracing",
        WarmUpTime = 10,
        Mass = 0.5,
        EndLinkOffset = -40,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-fndstd",
                    angle = 145,
                },
                [2] = 
                {
                    material = "core-fndhvyroof",
                },
            },
            Priority = 2,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        SupportsDevices = false,
        AttachesCladding = true,
        Portal = true,
        IsBehindDevices = false,
        EnergyRepairCost = 1,
        MaxCompression = 0.89999997615814,
        MaxLength = 150,
        Sprite = "portal_team0",
        EnergyRunCost = 0.25,
        ConductsPower = true,
        EnergyReclaim = 0,
        EnergyBuildCost = 1.25,
        SplashMultiplier = 0.25,
        NodeImpacts = 
        {
            foundations = "effects/bounce_metal.lua",
            default = "effects/bounce_metal.lua",
            rocks01 = "effects/bounce_metal.lua",
        },
        Detail = "hud-detail-portal",
        IsFogOfWarArmour = true,
        SelectEffect = "ui/hud/materials/ui_materials",
        CollidesWithFriendlyProjectiles = true,
        CollidesWithEnemyBeams = true,
        CollidesWithWind = true,
        RenderOrder = 4,
        MaxExpansion = 1.1000000238419,
        CollidesWithFriendlyBeams = true,
        BuildTime = 8,
        WarmupEffect = "mods/dlc1_portal/effects/portal_warmup.lua",
        EnableEffect = "mods/dlc1_portal/effects/portal_enable.lua",
        DisableEffect = "mods/dlc1_portal/effects/portal_disable.lua",
        InvulnerableWhenBackground = true,
        DestroyEffect = "mods/dlc1_portal/effects/portal_destroy.lua",
        Icon = "hud-portal-icon",
        MinLength = 90,
        Sprite1 = "portal",
        BuildEffect = "mods/dlc1_portal/effects/portal_build.lua",
        PostCreateMaterialAlways = true,
        FogOfWarTargetSaveName = "portal",
        KeyEndCapByDamage = true,
        EndCap = "energy-node",
        ReflectsBeams = false,
        MaxLinkLengthMultiplierInEditor = 4,
        MetalRepairCost = 0.89999997615814,
        Sprite2 = "portal",
        SaveName = "portal",
        RicochetVariationFactor = 0,
        Stiffness = 200000,
        ScrapTime = 4,
        SpriteDeactivated = "mods/dlc1_portal/materials/portal_deactivated",
        MetalBuildCost = 1,
    },
    [11] = 
    {
        MetalReclaim = 0.89999997615814,
        MaxLinkLength = 2180,
        ReflectionMomentumThreshold = 1600,
        SpeedLossFactor = 0.94999998807907,
        Conversions = 
        {
        },
        Mass = 0.5,
        IsFogOfWarArmour = true,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-fndstd",
                    angle = 145,
                },
                [2] = 
                {
                    material = "core-fndhvyroof",
                },
            },
            Priority = 2,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        SupportsDevices = false,
        AttachesCladding = true,
        IsBehindDevices = false,
        BeamPenetrationBlockDist = 0,
        KeySpriteByDamage = false,
        MaxLength = 1500,
        Sprite = "mods/dlc_blastdoors/materials/tungsten.dds",
        EnergyRunCost = 0,
        EnergyReclaim = 0,
        EnergyBuildCost = 1.5,
        Detail = "hud-detail-barrier",
        Invulnerable = true,
        RecessionTargetSaveName = "",
        ReflectsBeams = false,
        BuildTime = 8,
        SelectEffect = "ui/hud/materials/ui_materials",
        AbsorptionMomentumThreshold = 50,
        RicochetVariationFactor = 0.0099999997764826,
        NodeImpacts = 
        {
            foundations = "effects/bounce_metal.lua",
            default = "effects/bounce_metal.lua",
            rocks01 = "effects/bounce_metal.lua",
        },
        Icon = "hud-barrier-icon",
        MinLength = 37.5,
        MetalRepairCost = 1,
        BuildEffect = "effects/build_armor.lua",
        DestroyEffect = "effects/armor_destroy.lua",
        EnergyRepairCost = 3,
        AirDrag = 6.4000000953674,
        MaxCompression = 0.5,
        MaxExpansion = 1.5,
        PenetrationMomentumThreshold = 4000,
        CanDeleteInGameplay = false,
        RenderOrder = 10,
        SaveName = "barrier",
        HitPoints = 100000,
        Stiffness = 500000,
        ScrapTime = 4,
        Enabled = false,
        MetalBuildCost = 1.7999999523163,
    },
    [12] = 
    {
        MetalReclaim = 0.89999997615814,
        MaxLinkLength = 2180,
        ReflectionMomentumThreshold = 1600,
        SpeedLossFactor = 0.94999998807907,
        Conversions = 
        {
        },
        CollidesWithEnemyProjectiles = false,
        Mass = 0.5,
        IsFogOfWarArmour = true,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-fndstd",
                    angle = 145,
                },
                [2] = 
                {
                    material = "core-fndhvyroof",
                },
            },
            Priority = 2,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        SupportsDevices = false,
        AttachesCladding = true,
        IsBehindDevices = true,
        BeamPenetrationBlockDist = 0,
        KeySpriteByDamage = false,
        MaxLength = 1500,
        Sprite = "mods/dlc_blastdoors/materials/tungsten-bg.dds",
        EnergyRunCost = 0,
        EnergyReclaim = 0,
        EnergyBuildCost = 1.5,
        Detail = "hud-detail-backbarrier",
        Invulnerable = true,
        BackgroundCladding = true,
        CollidesWithEnemyBeams = true,
        CollidesWithFriendlyProjectiles = false,
        RecessionTargetSaveName = "",
        ReflectsBeams = false,
        CollidesWithFriendlyBeams = false,
        BuildTime = 8,
        CollidesWithWind = false,
        SelectEffect = "ui/hud/materials/ui_materials",
        AbsorptionMomentumThreshold = 50,
        RicochetVariationFactor = 0.0099999997764826,
        NodeImpacts = 
        {
            foundations = "effects/bounce_metal.lua",
            default = "effects/bounce_metal.lua",
            rocks01 = "effects/bounce_metal.lua",
        },
        Icon = "hud-backbarrier-icon",
        MinLength = 37.5,
        MetalRepairCost = 1,
        BuildEffect = "effects/build_armor.lua",
        DestroyEffect = "effects/armor_destroy.lua",
        EnergyRepairCost = 3,
        AirDrag = 6.4000000953674,
        MaxCompression = 0.5,
        MaxExpansion = 1.5,
        PenetrationMomentumThreshold = 4000,
        CanDeleteInGameplay = false,
        RenderOrder = 9,
        SaveName = "backbarrier",
        HitPoints = 100000,
        Stiffness = 500000,
        ScrapTime = 4,
        Enabled = false,
        MetalBuildCost = 1.7999999523163,
    },
    [13] = 
    {
        MetalReclaim = 0.89999997615814,
        MaxLinkLength = 2180,
        ReflectionMomentumThreshold = 1600,
        SpeedLossFactor = 0.94999998807907,
        Conversions = 
        {
        },
        SpriteDoor = "mods/dlc_blastdoors/materials/tungsten.dds",
        Mass = 0.5,
        IsFogOfWarArmour = true,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-fndstd",
                    angle = 145,
                },
                [2] = 
                {
                    material = "core-fndhvyroof",
                },
            },
            Priority = 2,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        SupportsDevices = false,
        AttachesCladding = true,
        IsBehindDevices = false,
        BeamPenetrationBlockDist = 0,
        KeySpriteByDamage = false,
        MaxLength = 1500,
        Sprite = "mods/dlc_blastdoors/materials/tungsten-bg.dds",
        EnergyRunCost = 0,
        EnergyReclaim = 0,
        EnergyBuildCost = 1.5,
        DoorCap = "materials/door_cap.dds",
        Detail = "hud-detail-doorbarrier",
        MaxCompression = 0.5,
        Invulnerable = true,
        BackgroundCladding = true,
        OpenEffect = "effects/operate_door.lua",
        Enabled = false,
        RecessionTargetSaveName = "",
        ReflectsBeams = false,
        IsDoor = true,
        BuildTime = 8,
        AirDrag = 6.4000000953674,
        SelectEffect = "ui/hud/materials/ui_materials",
        AbsorptionMomentumThreshold = 50,
        RicochetVariationFactor = 0.0099999997764826,
        NodeImpacts = 
        {
            foundations = "effects/bounce_metal.lua",
            default = "effects/bounce_metal.lua",
            rocks01 = "effects/bounce_metal.lua",
        },
        Icon = "hud-doorbarrier-icon",
        MinLength = 37.5,
        MetalRepairCost = 1,
        BuildEffect = "effects/build_door.lua",
        DestroyEffect = "effects/armor_destroy.lua",
        EnergyRepairCost = 3,
        CloseEffect = "effects/operate_door.lua",
        DoorSpeed = 50,
        MaxExpansion = 1.5,
        PenetrationMomentumThreshold = 4000,
        CanDeleteInGameplay = false,
        RenderOrder = 11,
        SaveName = "doorbarrier",
        HitPoints = 100000,
        Stiffness = 500000,
        ScrapTime = 4,
        DefaultRecessionTarget = false,
        MetalBuildCost = 1.7999999523163,
    },
    [14] = 
    {
        MetalReclaim = 0.89999997615814,
        MaxLinkLength = 2180,
        ReflectionMomentumThreshold = 1600,
        SpeedLossFactor = 0.94999998807907,
        Conversions = 
        {
        },
        OpenedEffect = "mods/dlc_blastdoors/effects/blastdoor_open.lua",
        SpriteDoor = "mods/dlc_blastdoors/materials/blastdoor.dds",
        Mass = 0.5,
        IsFogOfWarArmour = true,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-blastdoor-foundation",
                },
            },
            Priority = 1,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        Enabled = false,
        SupportsDevices = false,
        AttachesCladding = true,
        EndCap = "blastdoor-light",
        IsBehindDevices = false,
        BeamPenetrationBlockDist = 0,
        DoorCap = "mods/dlc_blastdoors/materials/blastdoor_cap.dds",
        KeySpriteByDamage = false,
        MaxLength = 1500,
        Sprite = "blastdoor-rail",
        EnergyRunCost = 0,
        EndCapOverlay = true,
        EnergyReclaim = 0,
        EnergyBuildCost = 1.5,
        ClosedEffect = "mods/dlc_blastdoors/effects/blastdoor_shut.lua",
        MaxCompression = 0.5,
        Detail = "hud-detail-blastdoor",
        AirDrag = 6.4000000953674,
        Invulnerable = true,
        BackgroundCladding = true,
        EndCapOffset = -48,
        EnergyRepairCost = 3,
        RecessionTargetSaveName = "",
        ReflectsBeams = false,
        OpenEffect = "mods/dlc_blastdoors/effects/blastdoor_opening.lua",
        BuildTime = 8,
        IsDoor = true,
        SelectEffect = "ui/hud/materials/ui_materials",
        AbsorptionMomentumThreshold = 50,
        RicochetVariationFactor = 0.0099999997764826,
        NodeImpacts = 
        {
            foundations = "effects/bounce_metal.lua",
            default = "effects/bounce_metal.lua",
            rocks01 = "effects/bounce_metal.lua",
        },
        Icon = "hud-blastdoor-icon",
        MinLength = 37.5,
        MetalRepairCost = 1,
        BuildEffect = "effects/build_door.lua",
        DestroyEffect = "effects/armor_destroy.lua",
        PoweredWhenNeutral = true,
        CloseEffect = "mods/dlc_blastdoors/effects/blastdoor_closing.lua",
        DoorSpeed = 30,
        MaxExpansion = 1.5,
        PenetrationMomentumThreshold = 4000,
        CanDeleteInGameplay = false,
        RenderOrder = 12,
        SaveName = "blastdoor",
        HitPoints = 100000,
        Stiffness = 500000,
        ScrapTime = 4,
        DefaultRecessionTarget = false,
        MetalBuildCost = 1.7999999523163,
    },
    [15] = 
    {
        MetalReclaim = 0.89999997615814,
        MaxLinkLength = 218,
        ReflectionMomentumThreshold = 1600,
        SpeedLossFactor = 0.94999998807907,
        HitPoints = 400,
        Mass = 5,
        IsFogOfWarArmour = true,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-fndstd",
                    angle = 145,
                },
                [2] = 
                {
                    material = "core-fndhvyroof",
                },
            },
            Priority = 2,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        SupportsDevices = false,
        AbsorptionMomentumThreshold = 50,
        AirDrag = 6.4000000953674,
        BeamPenetrationBlockDist = 90,
        KeySpriteByDamage = true,
        MaxLength = 150,
        Sprite = "subskin",
        EnergyRunCost = 0,
        EnergyReclaim = 0,
        EnergyBuildCost = 1.5,
        Detail = "hud-detail-subskin",
        RicochetVariationFactor = 0.0099999997764826,
        MaxExpansion = 1.1000000238419,
        BuildTime = 8,
        Icon = "hud-subskin-icon",
        MinLength = 37.5,
        Enabled = false,
        NodeImpacts = 
        {
            foundations = "effects/bounce_metal.lua",
            default = "effects/bounce_metal.lua",
            rocks01 = "effects/bounce_metal.lua",
        },
        DestroyEffect = "effects/armor_destroy.lua",
        BuildEffect = "effects/build_armor.lua",
        AttachesCladding = true,
        IsBehindDevices = false,
        ReflectsBeams = false,
        MaxCompression = 0.89999997615814,
        EnergyRepairCost = 3,
        SaveName = "subskin",
        MetalRepairCost = 1,
        Stiffness = 250000,
        ScrapTime = 4,
        PenetrationMomentumThreshold = 4000,
        MetalBuildCost = 1.7999999523163,
    },
    [16] = 
    {
        MetalReclaim = 0.050000000745058,
        ReflectionMomentumThreshold = 30,
        SpeedLossFactor = 1,
        HitPoints = 100,
        CollidesWithEnemyProjectiles = false,
        Mass = 0.0010000000474975,
        ShowEndFireSegments = true,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-peg",
                },
            },
            Priority = 3,
            Plates = 
            {
                [1] = 
                {
                    material = "core-peg-preview",
                    mass = 0,
                },
                [2] = 
                {
                    material = "core-cableplate",
                    mass = 0.10000000149012,
                },
            },
            Pegs = 
            {
                [1] = 
                {
                    material = "core-peg",
                },
            },
        },
        MaxSegmentLength = 100,
        SupportsDevices = false,
        SpringDamping = 80,
        AirDrag = 0.89999997615814,
        EnergyRepairCost = 1.2000000476837,
        MaxCompression = 0.60000002384186,
        MaxLength = 800,
        Sprite = "chain",
        EnergyRunCost = 0,
        ConductsPower = false,
        EnergyReclaim = 0,
        EnergyBuildCost = 0.5,
        FireLateralOffsetStdDev = 3,
        Detail = "hud-detail-chain",
        CatchesFire = false,
        CollidesWithFriendlyProjectiles = false,
        CollidesWithEnemyBeams = true,
        NodeImpacts = 
        {
            foundations = "",
            default = "",
            rocks01 = "",
        },
        RenderOrder = 7,
        MaxExpansion = 1.3999999761581,
        AlignedLinksAllowed = true,
        BuildTime = 0,
        SelectEffect = "ui/hud/materials/ui_materials",
        CanBeTempBraced = false,
        KeySpriteByDamage = true,
        BuildEffect = "effects/build_cable.lua",
        CollidesWithWind = false,
        Icon = "hud-chain-icon",
        MinLength = 100,
        Enabled = false,
        IsBehindDevices = false,
        AngleStressSecondaryThreshold = 360,
        AngleStressPrimaryThreshold = 360,
        CollidesWithFriendlyBeams = false,
        DegreesPerSecondMax = 100,
        DegreesPerSecondMin = 20,
        ReflectsBeams = false,
        AttachesCladding = false,
        RequiresFoundationSupport = false,
        SaveName = "chain",
        MetalRepairCost = 0.20000000298023,
        Stiffness = 80000,
        ScrapTime = 0,
        RicochetVariationFactor = 0,
        MetalBuildCost = 0.10000000149012,
    },
    [17] = 
    {
        MetalReclaim = 0.89999997615814,
        PenetrationMomentumThreshold = 4000,
        ReflectionMomentumThreshold = 1600,
        SpeedLossFactor = 0.94999998807907,
        HitPoints = 400,
        Mass = 0.5,
        IsFogOfWarArmour = true,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-fndstd",
                    angle = 145,
                },
                [2] = 
                {
                    material = "core-fndhvyroof",
                },
            },
            Priority = 2,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        SupportsDevices = false,
        AttachesCladding = true,
        IsBehindDevices = false,
        BeamPenetrationBlockDist = 0,
        KeySpriteByDamage = false,
        MaxLength = 1500,
        Sprite = "mods/dlc2/materials/iron.dds",
        EnergyRunCost = 0,
        EnergyReclaim = 0,
        EnergyBuildCost = 1.5,
        Detail = "hud-detail-iron",
        Invulnerable = true,
        RenderOrder = 10,
        ReflectsBeams = false,
        BuildTime = 8,
        SelectEffect = "ui/hud/materials/ui_materials",
        Icon = "hud-iron-icon",
        MinLength = 37.5,
        MetalRepairCost = 1,
        AbsorptionMomentumThreshold = 50,
        AirDrag = 6.4000000953674,
        NodeImpacts = 
        {
            foundations = "effects/bounce_metal.lua",
            default = "effects/bounce_metal.lua",
            rocks01 = "effects/bounce_metal.lua",
        },
        BuildEffect = "effects/build_armor.lua",
        DestroyEffect = "effects/armor_destroy.lua",
        EnergyRepairCost = 3,
        RicochetVariationFactor = 0.0099999997764826,
        MaxCompression = 0.5,
        MaxExpansion = 1.5,
        SaveName = "iron",
        MaxLinkLength = 2180,
        Stiffness = 500000,
        ScrapTime = 4,
        Enabled = false,
        MetalBuildCost = 1.7999999523163,
    },
    [18] = 
    {
        MetalReclaim = 0.89999997615814,
        PenetrationMomentumThreshold = 4000,
        ReflectionMomentumThreshold = 1600,
        SpeedLossFactor = 0.94999998807907,
        HitPoints = 400,
        CollidesWithEnemyProjectiles = false,
        Mass = 0.5,
        IsFogOfWarArmour = true,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-fndstd",
                    angle = 145,
                },
                [2] = 
                {
                    material = "core-fndhvyroof",
                },
            },
            Priority = 2,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        SupportsDevices = false,
        AttachesCladding = true,
        IsBehindDevices = true,
        BeamPenetrationBlockDist = 0,
        KeySpriteByDamage = false,
        MaxLength = 1500,
        Sprite = "mods/dlc2/materials/iron-bg.dds",
        EnergyRunCost = 0,
        EnergyReclaim = 0,
        EnergyBuildCost = 1.5,
        Detail = "hud-detail-backiron",
        Invulnerable = true,
        BackgroundCladding = true,
        CollidesWithEnemyBeams = true,
        RenderOrder = 9,
        ReflectsBeams = false,
        BuildTime = 8,
        CollidesWithFriendlyProjectiles = false,
        CollidesWithFriendlyBeams = false,
        CollidesWithWind = false,
        SelectEffect = "ui/hud/materials/ui_materials",
        Icon = "hud-backiron-icon",
        MinLength = 37.5,
        MetalRepairCost = 1,
        AbsorptionMomentumThreshold = 50,
        AirDrag = 6.4000000953674,
        NodeImpacts = 
        {
            foundations = "effects/bounce_metal.lua",
            default = "effects/bounce_metal.lua",
            rocks01 = "effects/bounce_metal.lua",
        },
        BuildEffect = "effects/build_armor.lua",
        DestroyEffect = "effects/armor_destroy.lua",
        EnergyRepairCost = 3,
        RicochetVariationFactor = 0.0099999997764826,
        MaxCompression = 0.5,
        MaxExpansion = 1.5,
        SaveName = "backiron",
        MaxLinkLength = 2180,
        Stiffness = 500000,
        ScrapTime = 4,
        Enabled = false,
        MetalBuildCost = 1.7999999523163,
    },
    [19] = 
    {
        MetalReclaim = 0.89999997615814,
        PenetrationMomentumThreshold = 4000,
        ReflectionMomentumThreshold = 1600,
        SpeedLossFactor = 0.94999998807907,
        HitPoints = 400,
        SpriteDoor = "mods/dlc2/materials/iron.dds",
        Mass = 0.5,
        IsFogOfWarArmour = true,
        Node = 
        {
            Foundations = 
            {
                [1] = 
                {
                    material = "core-fndstd",
                    angle = 145,
                },
                [2] = 
                {
                    material = "core-fndhvyroof",
                },
            },
            Priority = 2,
            Plates = 
            {
                [1] = 
                {
                    material = "core-brc1",
                },
            },
        },
        SupportsDevices = false,
        AttachesCladding = true,
        IsBehindDevices = false,
        BeamPenetrationBlockDist = 0,
        KeySpriteByDamage = false,
        MaxLength = 1500,
        Sprite = "mods/dlc2/materials/iron-bg.dds",
        EnergyRunCost = 0,
        EnergyReclaim = 0,
        EnergyBuildCost = 1.5,
        Detail = "hud-detail-dooriron",
        Invulnerable = true,
        BackgroundCladding = true,
        DoorCap = "materials/door_cap.dds",
        RenderOrder = 11,
        ReflectsBeams = false,
        DestroyEffect = "effects/armor_destroy.lua",
        BuildTime = 8,
        OpenEffect = "effects/operate_door.lua",
        RecessionTargetSaveName = "backbracing",
        IsDoor = true,
        BuildEffect = "effects/build_door.lua",
        SelectEffect = "ui/hud/materials/ui_materials",
        Icon = "hud-dooriron-icon",
        MinLength = 37.5,
        MetalRepairCost = 1,
        AbsorptionMomentumThreshold = 50,
        AirDrag = 6.4000000953674,
        NodeImpacts = 
        {
            foundations = "effects/bounce_metal.lua",
            default = "effects/bounce_metal.lua",
            rocks01 = "effects/bounce_metal.lua",
        },
        CloseEffect = "effects/operate_door.lua",
        DoorSpeed = 50,
        EnergyRepairCost = 3,
        RicochetVariationFactor = 0.0099999997764826,
        MaxCompression = 0.5,
        MaxExpansion = 1.5,
        SaveName = "dooriron",
        MaxLinkLength = 2180,
        Stiffness = 500000,
        ScrapTime = 4,
        Enabled = false,
        MetalBuildCost = 1.7999999523163,
    },
}
-- ==========  END MATERIALS DUMP  ==========