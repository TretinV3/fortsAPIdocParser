//-- :::::::::: BEGIN PROJECTILES DUMP ::::::::::
export const Projectiles =
    [
        {
            DeflectedByShields: true,
            ProjectileDrag: 0.020999999716878,
            ProjectileType: "bullet",
            SpeedIndicatorFactor: 5,
            MaxAge: 20,
            ProjectileMass: 0.25,
            Effects:
            {
                ImpactDevice:
                {
                    sandbags: "effects/bullet_sandbag_hit.lua",
                },
                Deflect:
                {
                    armour: "effects/bullet_armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    blastdoor: "effects/bullet_armor_ricochet.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/bullet_bracing_hit.lua",
                    barrier: "effects/bullet_armor_ricochet.lua",
                    backbarrier: "effects/bullet_armor_ricochet.lua",
                    door: "effects/bullet_armor_ricochet.lua",
                },
                Impact:
                {
                    foundations: "effects/ground_hit.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Effect: "effects/small_arms_flare.lua",
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingmachinegun",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                        Terminate: true,
                    },
                    armour: "effects/bullet_armor_hit.lua",
                    device: "effects/impact_light.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    blastdoor: "effects/bullet_armor_hit.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/impact_light.lua",
                    rocks01: "effects/ground_hit.lua",
                    barrier: "effects/bullet_armor_hit.lua",
                    shield: "effects/impact_light.lua",
                    backbarrier: "effects/bullet_armor_hit.lua",
                    door: "effects/bullet_armor_hit.lua",
                },
            },
            TrailEffect: "effects/bullet_trail.lua",
            MinAge: 2.5,
            BeamScrollRate: 0,
            BeamTileRate: 0.019999999552965,
            ProjectileThickness: 2,
            ProjectileDamage: 6,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            WeaponDamageBonus: 6,
            ImpactMomentumLimit: 2000,
            ProjectileShootDownRadius: 14,
            ProjectileSpriteMipMap: false,
            Impact: 10000,
            ProjectileSprite: "weapons/media/bullet",
            SaveName: "machinegun",
            DrawBlurredProjectile: true,
            DeflectedByTerrain: false,
            CollidesWithBeams: true,
            ExplodeOnTouch: false,
            ExpiresOnFreeFall: true,
        },
        {
            DeflectedByShields: true,
            ProjectileDrag: 0.014999999664724,
            ProjectileType: "bullet",
            ProjectileMass: 0.25,
            TrailEffect: "effects/bullet_trail.lua",
            BeamScrollRate: 0,
            Effects:
            {
                ImpactDevice:
                {
                    sandbags: "effects/bullet_sandbag_hit.lua",
                },
                Deflect:
                {
                    armour: "effects/bullet_armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    blastdoor: "effects/bullet_armor_ricochet.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/bullet_bracing_hit.lua",
                    barrier: "effects/bullet_armor_ricochet.lua",
                    backbarrier: "effects/bullet_armor_ricochet.lua",
                    door: "effects/bullet_armor_ricochet.lua",
                },
                Impact:
                {
                    foundations: "effects/ground_hit.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Effect: "effects/small_arms_flare.lua",
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingminigun",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                        Terminate: true,
                    },
                    armour: "effects/bullet_armor_hit.lua",
                    device: "effects/impact_light.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    blastdoor: "effects/bullet_armor_hit.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/impact_light.lua",
                    rocks01: "effects/ground_hit.lua",
                    barrier: "effects/bullet_armor_hit.lua",
                    shield: "effects/impact_light.lua",
                    backbarrier: "effects/bullet_armor_hit.lua",
                    door: "effects/bullet_armor_hit.lua",
                },
            },
            ProjectileThickness: 2,
            ProjectileDamage: 17.5,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 1.5,
                    SaveName: "bracing",
                    Splash: 1,
                },
                [2]:
                {
                    Direct: 5,
                    SaveName: "sandbags",
                    Splash: 1,
                },
                [3]:
                {
                    Direct: 2.4000000953674,
                    SaveName: "machinegun",
                    Splash: 1,
                },
                [4]:
                {
                    Direct: 3,
                    SaveName: "rocketemp",
                    Splash: 1,
                },
                [5]:
                {
                    Direct: 3,
                    SaveName: "rocket",
                    Splash: 1,
                },
                [6]:
                {
                    Direct: 3,
                    SaveName: "shotgun",
                    Splash: 1,
                },
                [7]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
                [8]:
                {
                    Direct: 3,
                    SaveName: "rocketemp",
                    Splash: 1,
                },
                [9]:
                {
                    Direct: 3,
                    SaveName: "rocket",
                    Splash: 1,
                },
                [10]:
                {
                    Direct: 3,
                    SaveName: "shotgun",
                    Splash: 1,
                },
            },
            SpeedIndicatorFactor: 5,
            Impact: 10000,
            ProjectileShootDownRadius: 12,
            ProjectileSpriteMipMap: false,
            BeamTileRate: 0.019999999552965,
            ProjectileSprite: "weapons/media/bullet",
            SaveName: "minigun",
            ImpactMomentumLimit: 2000,
            WeaponDamageBonus: -5,
            CollidesWithBeams: true,
            ExplodeOnTouch: false,
            DrawBlurredProjectile: true,
        },
        {
            DeflectedByShields: true,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            PassesThroughMaterials: false,
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileMass: 0.20000000298023,
            Effects:
            {
                ImpactDevice:
                {
                    sandbags: "effects/bullet_sandbag_hit.lua",
                },
                Deflect:
                {
                    bracing: "effects/bullet_bracing_hit.lua",
                    blastdoor: "effects/bullet_armor_ricochet.lua",
                    armour: "effects/bullet_armor_ricochet.lua",
                    barrier: "effects/bullet_armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    backbarrier: "effects/bullet_armor_ricochet.lua",
                    door: "effects/bullet_armor_ricochet.lua",
                },
                Impact:
                {
                    foundations: "effects/ground_hit.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Effect: "effects/small_arms_flare.lua",
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingsniper",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                        Terminate: true,
                    },
                    armour: "effects/bullet_armor_hit.lua",
                    device: "effects/impact_light.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    blastdoor: "effects/bullet_armor_hit.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/impact_light.lua",
                    rocks01: "effects/ground_hit.lua",
                    barrier: "effects/bullet_armor_hit.lua",
                    shield: "effects/impact_light.lua",
                    backbarrier: "effects/bullet_armor_hit.lua",
                    door: "effects/bullet_armor_hit.lua",
                },
            },
            BeamScrollRate: 0,
            TrailEffect: "effects/sniper_trail.lua",
            ProjectileThickness: 2,
            ProjectileDamage: 15,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            WeaponDamageBonus: 115,
            BeamTileRate: 0.019999999552965,
            ProjectileShootDownRadius: 15,
            ProjectileSpriteMipMap: false,
            ImpactMomentumLimit: 2000,
            ProjectileSprite: "weapons/media/bullet",
            SaveName: "sniper",
            Impact: 30000,
            DeflectedByTerrain: false,
            CollidesWithBeams: true,
            ExplodeOnTouch: false,
            DrawBlurredProjectile: true,
        },
        {
            MomentumThreshold:
            {
                shield:
                {
                    Reflect: 400,
                    Penetrate: 9000,
                },
            },
            DeflectedByShields: false,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileMass: 1,
            Effects:
            {
                ImpactDevice:
                {
                    sandbags: "effects/bullet_sandbag_hit.lua",
                },
                Deflect:
                {
                    bracing: "effects/bullet_bracing_hit.lua",
                    blastdoor: "effects/bullet_armor_ricochet.lua",
                    armour: "effects/bullet_armor_ricochet.lua",
                    barrier: "effects/bullet_armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    backbarrier: "effects/bullet_armor_ricochet.lua",
                    door: "effects/bullet_armor_ricochet.lua",
                },
                Penetrate:
                {
                    bracing: "effects/bullet_bracing_hit.lua",
                    armour: "effects/bullet_armor_hit.lua",
                    blastdoor: "effects/bullet_armor_hit.lua",
                    shield:
                    {
                        Terminate: false,
                        Effect: "effects/energy_shield_ricochet.lua",
                    },
                    barrier: "effects/bullet_armor_hit.lua",
                    backbarrier: "effects/bullet_armor_hit.lua",
                    door: "effects/bullet_armor_hit.lua",
                },
                Impact:
                {
                    foundations: "effects/ground_hit.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Effect: "effects/small_arms_flare.lua",
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingsniper2",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                        Terminate: true,
                    },
                    armour: "effects/bullet_armor_hit.lua",
                    device: "effects/impact_light.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    blastdoor: "effects/bullet_armor_hit.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/impact_light.lua",
                    rocks01: "effects/ground_hit.lua",
                    barrier: "effects/bullet_armor_hit.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbarrier: "effects/bullet_armor_hit.lua",
                    door: "effects/bullet_armor_hit.lua",
                },
            },
            BeamScrollRate: 0,
            TrailEffect: "effects/sniper_trail.lua",
            ProjectileThickness: 4,
            ProjectileDamage: 30,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "shotgun",
                    Direct: 2,
                },
                [2]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            WeaponDamageBonus: 100,
            Impact: 30000,
            ProjectileShootDownRadius: 15,
            ProjectileSpriteMipMap: true,
            PenetrationDamage: 600,
            ProjectileSprite: "weapons/media/bullet",
            SaveName: "sniper2",
            BeamTileRate: 0.019999999552965,
            PenetrationSpeedMultiplier: 0.5,
            CollidesWithBeams: true,
            ExplodeOnTouch: false,
            DrawBlurredProjectile: true,
        },
        {
            ProjectileIncendiary: true,
            DeflectedByShields: false,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            ProjectileSplashDamage: 40,
            AntiAirDamage: 20,
            Effects:
            {
                Deflect:
                {
                    armour: "effects/armor_ricochet.lua",
                    blastdoor: "effects/armor_ricochet.lua",
                    barrier: "effects/armor_ricochet.lua",
                    backbarrier: "effects/armor_ricochet.lua",
                    door: "effects/armor_ricochet.lua",
                },
                Impact:
                {
                    bracing: "effects/impact_mortar_incendiary.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Terminate: true,
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingmortar",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                    },
                    default: "effects/impact_mortar_incendiary_no_fire.lua",
                    antiair: "effects/mortar_air_burst.lua",
                },
            },
            BeamScrollRate: 0,
            ProjectileMass: 20,
            ProjectileThickness: 4,
            ProjectileDamage: 10,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            Projectile:
            {
                Root:
                {
                    Sprite: "objects/projectiles/mortar/mortar-incendiary.dds",
                    Angle: 0,
                    Name: "Root",
                },
            },
            ProjectileSplashDamageMaxRadius: 120,
            ProjectileShootDownRadius: 15,
            Impact: 200000,
            SpeedIndicatorFactor: 0.050000000745058,
            TrailEffect: "effects/mortar_trail_upgrade.lua",
            SaveName: "mortar",
            BeamTileRate: 0.019999999552965,
            IgnitesBackgroundMaterials: true,
            CollidesWithBeams: true,
            ExplodeOnTouch: true,
            DrawBlurredProjectile: false,
        },
        {
            ProjectileIncendiary: false,
            DeflectedByShields: false,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            ProjectileSplashDamage: 90,
            Effects:
            {
                Deflect:
                {
                    armour: "effects/armor_ricochet.lua",
                    blastdoor: "effects/armor_ricochet.lua",
                    barrier: "effects/armor_ricochet.lua",
                    backbarrier: "effects/armor_ricochet.lua",
                    door: "effects/armor_ricochet.lua",
                },
                Impact:
                {
                    antiair: "effects/mortar_air_burst.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Terminate: true,
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingmortar2",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                    },
                    default: "effects/impact_medium.lua",
                },
            },
            BeamScrollRate: 0,
            ProjectileMass: 20,
            ProjectileThickness: 4,
            ProjectileDamage: 60,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            DisableShields: true,
            ProjectileSplashDamageMaxRadius: 130,
            ProjectileShootDownRadius: 15,
            Impact: 200000,
            SpeedIndicatorFactor: 0.050000000745058,
            TrailEffect: "effects/mortar_trail.lua",
            SaveName: "mortar2",
            BeamTileRate: 0.019999999552965,
            Projectile:
            {
                Root:
                {
                    Sprite: "objects/projectiles/mortar/mortar.dds",
                    Angle: 0,
                    Name: "Root",
                },
            },
            CollidesWithBeams: true,
            ExplodeOnTouch: true,
            DrawBlurredProjectile: false,
        },
        {
            DeflectedByShields: false,
            EMPSensitivity: 4,
            ProjectileDrag: 64,
            EnemyCanTeleport: false,
            DisableShields: false,
            MaxAge: 60,
            ProjectileSplashDamage: 0,
            EMPMissileProbabilityOfCircling: 0.5,
            BeamScrollRate: 0,
            ProjectileDamage: 50,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            ProjectileShootDownRadius: 12,
            Impact: 75000,
            TrailEffect: "effects/swarm_trail.lua",
            ProjectileMass: 4,
            ExplodeOnTouch: true,
            ProjectileIncendiary: true,
            ProjectileSplashDamageMaxRadius: 150,
            BeamTileRate: 0.019999999552965,
            IncendiaryOffset: -10,
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileType: "missile",
            IncendiaryRadius: 30,
            ProjectileThickness: 2,
            AlwaysIncendiary: true,
            Missile:
            {
                DecoyFramesToRedirect: 6,
                RocketThrust: 120000,
                LaunchThrust: 105000,
                ErraticAnglePeriodStdDev: 0.15000000596046,
                ErraticAnglePeriodMean: 0.60000002384186,
                MaxSteerPerSecond: 150,
                TargetRearOffsetDistance: 100000,
                CruiseTargetDistance: 2000,
                MinTargetUpdateDistance: 2000,
                ErraticThrustMagneticField: 0.69999998807907,
                ErraticThrust: 0.5,
                ErraticAngleExtentMax: 10,
                MaxSteerPerSecondErratic: 200,
                CruiseTargetDuration: 0.5,
                ErraticAngleExtentStdDev: 5,
                ThrustAngleExtent: 25,
            },
            Effects:
            {
                Deflect:
                {
                    default: "effects/mortar_air_burst.lua",
                },
                Impact:
                {
                    default: "effects/mortar_air_burst.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Terminate: true,
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingmissile",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                    },
                },
            },
            DrawBlurredProjectile: false,
            ProjectileSplashMaxForce: 10000,
            Projectile:
            {
                Root:
                {
                    Sprite: "objects/projectiles/missile/missileswarm.dds",
                    Angle: 0,
                    Name: "Root",
                    ChildrenInFront:
                    {
                        [1]:
                        {
                            Offset:
                            {
                                [1]: 0,
                                [2]: 0.5,
                            },
                            Name: "Flame",
                            Sprite: "missile_swarm_tail",
                            Angle: 0,
                            Pivot:
                            {
                                [1]: 0,
                                [2]: 0.5,
                            },
                            PivotOffset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                        },
                    },
                },
            },
            CollidesWithBeams: true,
            IncendiaryRadiusHeated: 30,
            SaveName: "missile",
        },
        {
            DeflectedByShields: false,
            EMPSensitivity: 8,
            ProjectileDrag: 64,
            ProjectileType: "missile",
            ProjectileMass: 5,
            DisableShields: true,
            AntiAirDamage: 100,
            MaxAge: 60,
            ProjectileSplashDamage: 140,
            Effects:
            {
                Deflect:
                {
                    armour: "effects/armor_ricochet.lua",
                    blastdoor: "effects/armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    barrier: "effects/armor_ricochet.lua",
                    backbarrier: "effects/armor_ricochet.lua",
                    door: "effects/armor_ricochet.lua",
                },
                AirDestroy:
                {
                    howitzer:
                    {
                        Terminate: true,
                        Effect: "effects/missile_structure_hit.lua",
                    },
                },
                Impact:
                {
                    foundations: "effects/missile_ground_hit.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Terminate: true,
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingmissile2",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                    },
                    default: "effects/missile_structure_hit.lua",
                    shield: "effects/missile_structure_hit.lua",
                    rocks01: "effects/missile_ground_hit.lua",
                    antiair:
                    {
                        Splash: false,
                        Effect: "effects/mortar_air_burst.lua",
                        Projectile:
                        {
                            Count: 1,
                            Type: "damagedmissile2",
                        },
                        KeepLifespan: true,
                        Terminate: true,
                        KeepAge: true,
                    },
                    device: "effects/missile_structure_hit.lua",
                },
            },
            EMPMissileProbabilityOfCircling: 0.75,
            BeamTileRate: 0.019999999552965,
            BeamScrollRate: 0,
            ProjectileSplashDamageMaxRadius: 350,
            ProjectileThickness: 2,
            ProjectileDamage: 300,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            FlipSpriteFacingLeft: false,
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileShootDownRadius: 14,
            Impact: 120000,
            Missile:
            {
                DecoyFramesToRedirect: 6,
                RocketThrust: 115000,
                LaunchThrust: 105000,
                ErraticAnglePeriodStdDev: 0.10000000149012,
                ErraticAnglePeriodMean: 0.5,
                MaxSteerPerSecond: 150,
                TargetRearOffsetDistance: 100000,
                CruiseTargetDistance: 2000,
                MinTargetUpdateDistance: 2000,
                ErraticThrustMagneticField: 0.69999998807907,
                ErraticThrust: 0.5,
                ErraticAngleExtentMax: 5,
                MaxSteerPerSecondErratic: 250,
                CruiseTargetDuration: 0.5,
                ErraticAngleExtentStdDev: 2.5,
                ThrustAngleExtent: 25,
            },
            TrailEffect: "effects/missile_trail.lua",
            SaveName: "missile2",
            ProjectileSplashMaxForce: 80000,
            Projectile:
            {
                Root:
                {
                    Sprite: "warhead",
                    Name: "Root",
                    ChildrenInFront:
                    {
                        [1]:
                        {
                            Offset:
                            {
                                [1]: 0,
                                [2]: 0.5,
                            },
                            Name: "Flame",
                            Sprite: "missile_tail",
                            Angle: 0,
                            Pivot:
                            {
                                [1]: 0,
                                [2]: 0.10000000149012,
                            },
                            PivotOffset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                        },
                    },
                    Angle: 0,
                    Pivot:
                    {
                        [1]: 0,
                        [2]: 0.34999999403954,
                    },
                },
            },
            CollidesWithBeams: true,
            ExplodeOnTouch: true,
            DrawBlurredProjectile: false,
        },
        {
            MomentumThreshold:
            {
                armour:
                {
                    Reflect: 0,
                    Penetrate: 4000,
                },
                door:
                {
                    Reflect: 0,
                    Penetrate: 4000,
                },
            },
            DeflectedByShields: false,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            SpeedIndicatorFactor: 0.25,
            PassesThroughMaterials: false,
            ProjectileSplashDamage: 40,
            CollidesWithBeams: true,
            Impact: 20000,
            Effects:
            {
                Deflect:
                {
                    armour: "effects/armor_ricochet.lua",
                    blastdoor: "effects/armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    barrier: "effects/armor_ricochet.lua",
                    backbarrier: "effects/armor_ricochet.lua",
                    door: "effects/armor_ricochet.lua",
                },
                Impact:
                {
                    foundations: "effects/impact_heavy_ground.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Terminate: true,
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingcannon",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                    },
                    armour: "effects/impact_heavy.lua",
                    rocks01: "effects/impact_heavy_ground.lua",
                    blastdoor: "effects/impact_heavy.lua",
                    bracing: "effects/impact_heavy.lua",
                    default: "effects/impact_heavy.lua",
                    device: "effects/impact_heavy.lua",
                    barrier: "effects/impact_heavy.lua",
                    backbarrier: "effects/impact_heavy.lua",
                    door: "effects/impact_heavy.lua",
                },
            },
            BeamScrollRate: 0,
            TrailEffect: "effects/cannon_trail.lua",
            ProjectileThickness: 10,
            ProjectileDamage: 700,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            ProjectileMass: 16,
            ProjectileSplashDamageMaxRadius: 230,
            ProjectileShootDownRadius: 60,
            ProjectileSpriteMipMap: false,
            BeamTileRate: 0.019999999552965,
            ProjectileSprite: "weapons/media/bullet",
            SaveName: "cannon",
            ProjectileSplashMaxForce: 10000,
            DestroyShields: true,
            AntiAirHitpoints: 120,
            ExplodeOnTouch: false,
            DrawBlurredProjectile: true,
        },
        {
            ProjectileIncendiary: true,
            DeflectedByShields: true,
            ProjectileDrag: 0,
            ProjectileType: "beam",
            ImpactSize: 50,
            BeamOcclusionDistanceWater: 1000,
            BeamOcclusionDistance: 1200,
            BeamScrollRate: -10,
            Effects:
            {
                Deflect:
                {
                    armour: "effects/beam_hit.lua",
                    blastdoor: "effects/beam_hit.lua",
                    shield: "effects/beam_hit.lua",
                    barrier: "effects/beam_hit.lua",
                    backbarrier: "effects/beam_hit.lua",
                    door: "effects/beam_hit.lua",
                },
                Impact:
                {
                    foundations: "effects/beam_hit_ground.lua",
                    default: "effects/beam_hit.lua",
                    antiair: "effects/beam_antiair.lua",
                    rocks01: "effects/beam_hit_ground.lua",
                    shield: "effects/energy_absorb.lua",
                },
            },
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileDamage: 10,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "machinegun",
                    AntiAir: 0,
                },
                [2]:
                {
                    SaveName: "minigun",
                    AntiAir: 0,
                },
                [3]:
                {
                    SaveName: "sniper",
                    AntiAir: 0,
                },
                [4]:
                {
                    SaveName: "sniper2",
                    AntiAir: 0,
                },
                [5]:
                {
                    SaveName: "cannon",
                    AntiAir: 0,
                },
                [6]:
                {
                    SaveName: "shotgun",
                    AntiAir: 0,
                },
                [7]:
                {
                    SaveName: "cannon20mm",
                    AntiAir: 0,
                },
                [8]:
                {
                    SaveName: "shrapnel",
                    AntiAir: 0,
                },
                [9]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
                [10]:
                {
                    SaveName: "howitzer",
                    AntiAir: 0.00011999999696855,
                },
            },
            ProjectileThickness: 30,
            Impact: 50000,
            ProjectileMass: 1,
            ProjectileSpriteMipMap: true,
            DeflectedByTerrain: false,
            ProjectileSprite: "weapons/media/beam",
            SaveName: "laser",
            DrawBlurredProjectile: false,
            IgnitesBackgroundMaterials: true,
            IgnitesBackgroundMaterialsPassing: true,
            ExplodeOnTouch: false,
            IgnitesBackgroundMaterialsPassingSource: false,
        },
        {
            DeflectedByShields: false,
            EMPSensitivity: 4,
            ProjectileSplashDamageMaxRadius: 350,
            BeamTileRate: 0.019999999552965,
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileDrag: 64,
            DrawBlurredProjectile: false,
            MaxAge: 60,
            ProjectileSplashDamage: 140,
            ProjectileType: "missile",
            AntiAirDamage: 100,
            DisableShields: true,
            BeamScrollRate: 0,
            FlipSpriteFacingLeft: false,
            ProjectileThickness: 2,
            ProjectileDamage: 300,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            SaveName: "damagedmissile2",
            Impact: 120000,
            ProjectileShootDownRadius: 14,
            Effects:
            {
                Deflect:
                {
                    armour: "effects/armor_ricochet.lua",
                    door: "effects/armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    barrier: "effects/armor_ricochet.lua",
                    backbarrier: "effects/armor_ricochet.lua",
                    blastdoor: "effects/armor_ricochet.lua",
                },
                Impact:
                {
                    foundations: "effects/missile_ground_hit.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Terminate: true,
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingdamagedmissile2",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                    },
                    default: "effects/missile_structure_hit.lua",
                    antiair: "effects/missile_structure_hit.lua",
                    shield: "effects/missile_structure_hit.lua",
                    device: "effects/missile_structure_hit.lua",
                    rocks01: "effects/missile_ground_hit.lua",
                },
            },
            Missile:
            {
                RocketThrust: 90000,
                ErraticAnglePeriodStdDev: 0.10000000149012,
                ErraticAnglePeriodMean: 1.5,
                MaxSteerPerSecond: 120,
                TargetRearOffsetDistance: 100000,
                CruiseTargetDistance: 2000,
                MinTargetUpdateDistance: 2000,
                ErraticThrustMagneticField: 0.80000001192093,
                ErraticThrust: 0.5,
                ErraticAngleExtentMax: 20,
                MaxSteerPerSecondErratic: 600,
                CruiseTargetDuration: 0.5,
                ErraticAngleExtentStdDev: 10,
                ThrustAngleExtent: 35,
            },
            TrailEffect: "mods/skirmish/effects/missile_trail_damaged.lua",
            ProjectileMass: 5,
            ProjectileSplashMaxForce: 80000,
            Projectile:
            {
                Root:
                {
                    Sprite: "warhead",
                    Name: "Root",
                    ChildrenInFront:
                    {
                        [1]:
                        {
                            Sprite: "missile_tail",
                            Name: "Flame",
                            Offset:
                            {
                                [1]: 0,
                                [2]: 0.5,
                            },
                            Angle: 0,
                            Pivot:
                            {
                                [1]: 0,
                                [2]: 0.10000000149012,
                            },
                            PivotOffset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                        },
                    },
                    Angle: 0,
                    Pivot:
                    {
                        [1]: 0,
                        [2]: 0.34999999403954,
                    },
                },
            },
            CollidesWithBeams: true,
            ExplodeOnTouch: true,
            EMPMissileProbabilityOfCircling: 0.25,
        },
        {
            DeflectedByShields: false,
            ProjectileDrag: 0,
            ProjectileType: "bullet",
            AntiAirDamage: 0,
            Effects:
            {
                Deflect:
                {
                    bracing: "effects/bullet_bracing_hit.lua",
                    armour: "effects/bullet_armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/bullet_bracing_hit.lua",
                    door: "effects/bullet_armor_ricochet.lua",
                },
                Age:
                {
                    t200:
                    {
                        Projectile:
                        {
                            Speed: 4000,
                            Type: "shrapnel",
                            Count: 12,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -120,
                        Effect: "mods/weapon_pack/effects/flak_explode.lua",
                    },
                },
                Impact:
                {
                    foundations:
                    {
                        Projectile:
                        {
                            Speed: 4000,
                            Type: "shrapnel",
                            Count: 12,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -120,
                        Effect: "mods/weapon_pack/effects/flak_explode.lua",
                    },
                    firebeam:
                    {
                        Projectile:
                        {
                            Speed: 4000,
                            Type: "shrapnel",
                            Count: 12,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -120,
                        Effect: "mods/weapon_pack/effects/flak_explode.lua",
                    },
                    armour:
                    {
                        Projectile:
                        {
                            Speed: 4000,
                            Type: "shrapnel",
                            Count: 12,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -120,
                        Effect: "mods/weapon_pack/effects/flak_explode.lua",
                    },
                    device:
                    {
                        Projectile:
                        {
                            Speed: 4000,
                            Type: "shrapnel",
                            Count: 12,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -120,
                        Effect: "mods/weapon_pack/effects/flak_explode.lua",
                    },
                    backbracing:
                    {
                        Projectile:
                        {
                            Speed: 4000,
                            Type: "shrapnel",
                            Count: 12,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -120,
                        Effect: "mods/weapon_pack/effects/flak_explode.lua",
                    },
                    bracing:
                    {
                        Projectile:
                        {
                            Speed: 4000,
                            Type: "shrapnel",
                            Count: 12,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -120,
                        Effect: "mods/weapon_pack/effects/flak_explode.lua",
                    },
                    default:
                    {
                        Projectile:
                        {
                            Speed: 4000,
                            Type: "shrapnel",
                            Count: 12,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -120,
                        Effect: "mods/weapon_pack/effects/flak_explode.lua",
                    },
                    shield:
                    {
                        Projectile:
                        {
                            Speed: 4000,
                            Type: "shrapnel",
                            Count: 12,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -120,
                        Effect: "mods/weapon_pack/effects/flak_explode.lua",
                    },
                    rocks01:
                    {
                        Projectile:
                        {
                            Speed: 4000,
                            Type: "shrapnel",
                            Count: 12,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -120,
                        Effect: "mods/weapon_pack/effects/flak_explode.lua",
                    },
                    door:
                    {
                        Projectile:
                        {
                            Speed: 4000,
                            Type: "shrapnel",
                            Count: 12,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -120,
                        Effect: "mods/weapon_pack/effects/flak_explode.lua",
                    },
                },
            },
            BeamScrollRate: 0,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "default",
                    Direct: 0,
                },
                [2]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            ProjectileThickness: 2,
            ProjectileDamage: 6,
            ProjectileShootDownRadiusBeamWidth: 15,
            BeamTileRate: 0.019999999552965,
            SpeedIndicatorFactor: 5,
            ProjectileShootDownRadius: 150,
            ProjectileSpriteMipMap: false,
            CollisionLookaheadDist: 120,
            ProjectileSprite: "weapons/media/bullet",
            SaveName: "flak",
            Impact: 10000,
            WeaponDamageBonus: 6,
            ProjectileMass: 0.20000000298023,
            ExplodeOnTouch: true,
            DrawBlurredProjectile: true,
        },
        {
            DeflectedByShields: true,
            ProjectileDrag: 0.020999999716878,
            ProjectileType: "bullet",
            DrawFromAge: 0.079999998211861,
            MaxAge: 0.25,
            ProjectileMass: 0.25,
            BeamTileRate: 0.019999999552965,
            Effects:
            {
                ImpactDevice:
                {
                    sandbags: "effects/bullet_sandbag_hit.lua",
                },
                Deflect:
                {
                    bracing: "effects/bullet_bracing_hit.lua",
                    armour: "effects/bullet_armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/bullet_bracing_hit.lua",
                    door: "effects/bullet_armor_ricochet.lua",
                },
                Impact:
                {
                    foundations: "effects/ground_hit.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Effect: "effects/small_arms_flare.lua",
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingshrapnel",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                        Terminate: true,
                    },
                    armour: "effects/bullet_armor_hit.lua",
                    device: "effects/impact_light.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/impact_light.lua",
                    shield: "effects/impact_light.lua",
                    rocks01: "effects/ground_hit.lua",
                    door: "effects/bullet_armor_hit.lua",
                },
            },
            BeamScrollRate: 0,
            MinAge: 0.25,
            ProjectileThickness: 2,
            ProjectileDamage: 6,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0.60000002384186,
                    SaveName: "mortar",
                    Splash: 1,
                },
                [2]:
                {
                    Direct: 0.60000002384186,
                    SaveName: "mortar2",
                    Splash: 1,
                },
                [3]:
                {
                    Direct: 0.20000000298023,
                    SaveName: "machinegun",
                    Splash: 1,
                },
                [4]:
                {
                    Direct: 0.20000000298023,
                    SaveName: "minigun",
                    Splash: 1,
                },
                [5]:
                {
                    SaveName: "weapon",
                    Direct: 0.40000000596046,
                },
                [6]:
                {
                    SaveName: "device",
                    Direct: 0.40000000596046,
                },
                [7]:
                {
                    SaveName: "howitzer",
                    AntiAir: 0.28000000119209,
                },
                [8]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            SpeedIndicatorFactor: 5,
            WeaponDamageBonus: 12,
            ProjectileShootDownRadius: 9,
            ProjectileSpriteMipMap: false,
            ImpactMomentumLimit: 2000,
            ProjectileSprite: "weapons/media/bullet",
            SaveName: "shrapnel",
            Impact: 10000,
            DeflectedByTerrain: false,
            CollidesWithBeams: true,
            ExplodeOnTouch: false,
            DrawBlurredProjectile: true,
        },
        {
            DeflectedByShields: true,
            ProjectileDrag: 0,
            ProjectileType: "bullet",
            ProjectileMass: 0.20000000298023,
            BeamScrollRate: 0,
            Effects:
            {
                ImpactDevice:
                {
                    sandbags: "effects/bullet_sandbag_hit.lua",
                },
                Deflect:
                {
                    bracing: "effects/bullet_bracing_hit.lua",
                    armour: "effects/bullet_armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    door: "effects/bullet_armor_ricochet.lua",
                },
                Impact:
                {
                    foundations: "effects/ground_hit.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Effect: "effects/small_arms_flare.lua",
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingshotgun",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                        Terminate: true,
                    },
                    armour: "effects/bullet_armor_hit.lua",
                    device: "effects/impact_light.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/impact_light.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    rocks01: "effects/ground_hit.lua",
                    door: "effects/bullet_armor_hit.lua",
                },
            },
            ProjectileThickness: 2,
            ProjectileDamage: 40,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0.25,
                    SaveName: "sniper",
                    Splash: 1,
                },
                [2]:
                {
                    Direct: 0.25,
                    SaveName: "sniper2",
                    Splash: 1,
                },
                [3]:
                {
                    Direct: 0.25,
                    SaveName: "minigun",
                    Splash: 1,
                },
                [4]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            BeamTileRate: 0.019999999552965,
            SpeedIndicatorFactor: 5,
            ProjectileShootDownRadius: 14,
            ProjectileSpriteMipMap: false,
            Impact: 10000,
            ProjectileSprite: "weapons/media/bullet",
            SaveName: "shotgun",
            ImpactMomentumLimit: 2000,
            WeaponDamageBonus: -5,
            CollidesWithBeams: true,
            ExplodeOnTouch: false,
            DrawBlurredProjectile: true,
        },
        {
            DeflectedByShields: false,
            EMPSensitivity: 0,
            ProjectileDrag: 13,
            EnemyCanTeleport: false,
            DisableShields: true,
            ProjectileSplashDamage: 40,
            AntiAirDamage: 60,
            BeamScrollRate: 0,
            ProjectileDamage: 100,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0,
                    SaveName: "shield",
                    Splash: 0.5,
                },
                [2]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            ProjectileShootDownRadius: 15,
            Impact: 100000,
            TrailEffect: "mods/weapon_pack/effects/emp_trail.lua",
            ProjectileMass: 5,
            IgnitesBackgroundMaterials: true,
            ExplodeOnTouch: true,
            IgnitesBackgroundMaterialsPassingSource: false,
            IgnitesBackgroundMaterialsPassing: true,
            EMPOffset: 50,
            ProjectileSplashDamageMaxRadius: 120,
            Gravity: 0,
            EMPRadius: 150,
            SpeedIndicatorFactor: 0.050000000745058,
            BeamTileRate: 0.019999999552965,
            Effects:
            {
                Deflect:
                {
                },
                Impact:
                {
                    foundations: "mods/weapon_pack/effects/impact_emp.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Terminate: true,
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingrocketemp",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                    },
                    default: "mods/weapon_pack/effects/impact_emp.lua",
                    device: "mods/weapon_pack/effects/impact_emp.lua",
                    shield: "mods/weapon_pack/effects/impact_emp.lua",
                    rocks01: "mods/weapon_pack/effects/impact_emp.lua",
                    antiair:
                    {
                        Terminate: true,
                        Effect: "mods/weapon_pack/effects/impact_emp.lua",
                    },
                },
            },
            ProjectileType: "missile",
            Missile:
            {
                RocketThrust: 10000,
                Flags: 1,
                ErraticAnglePeriodStdDev: 0.050000000745058,
                ErraticAnglePeriodMean: 0.30000001192093,
                MaxSteerPerSecond: 200,
                TargetRearOffsetDistance: 100000,
                RocketThrustChange: 8000,
                MinTargetUpdateDistance: 2000,
                CruiseTargetDistance: 300,
                ErraticThrust: 1.3999999761581,
                ErraticAngleExtentMax: 0.60000002384186,
                MaxSteerPerSecondErratic: 300,
                CruiseTargetDuration: 0.5,
                ErraticAngleExtentStdDev: 0.30000001192093,
                ThrustAngleExtent: 30,
            },
            EMPDuration: 10,
            SaveName: "rocketemp",
            ProjectileSplashMaxForce: 50000,
            Projectile:
            {
                Root:
                {
                    Sprite: "mods/weapon_pack/weapons/rocketemp/projectile",
                    Name: "Root",
                    ChildrenInFront:
                    {
                        [1]:
                        {
                            Offset:
                            {
                                [1]: 0,
                                [2]: 0.80000001192093,
                            },
                            Name: "Flame",
                            Sprite: "missile_tail",
                            Angle: 0,
                            Pivot:
                            {
                                [1]: 0,
                                [2]: 0.10000000149012,
                            },
                            PivotOffset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                        },
                    },
                    Angle: 0,
                    Pivot:
                    {
                        [1]: 0,
                        [2]: 0.34999999403954,
                    },
                },
            },
            CollidesWithBeams: true,
            DrawBlurredProjectile: false,
            ProjectileThickness: 4,
        },
        {
            IgnitesBackgroundMaterialsPassing: true,
            DeflectedByShields: false,
            EMPSensitivity: 0,
            ProjectileDrag: 13,
            ProjectileType: "missile",
            DisableShields: true,
            DrawBlurredProjectile: false,
            Effects:
            {
                Deflect:
                {
                },
                Impact:
                {
                    foundations: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Terminate: true,
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingrocket",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                    },
                    default: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                    device: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                    rocks01: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                    antiair: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                },
            },
            BeamTileRate: 0.019999999552965,
            ProjectileSplashDamage: 45,
            ProjectileSplashDamageMaxRadius: 200,
            AntiAirDamage: 60,
            Projectile:
            {
                Root:
                {
                    Sprite: "mods/weapon_pack/weapons/rocket/projectile",
                    Name: "Root",
                    ChildrenInFront:
                    {
                        [1]:
                        {
                            Offset:
                            {
                                [1]: 0,
                                [2]: 0.80000001192093,
                            },
                            Name: "Flame",
                            Sprite: "missile_tail",
                            Angle: 0,
                            Pivot:
                            {
                                [1]: 0,
                                [2]: 0.10000000149012,
                            },
                            PivotOffset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                        },
                    },
                    Angle: 0,
                    Pivot:
                    {
                        [1]: 0,
                        [2]: 0.34999999403954,
                    },
                },
            },
            BeamScrollRate: 0,
            Gravity: 0,
            ProjectileThickness: 4,
            ProjectileDamage: 110,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0.25,
                    SaveName: "shield",
                    Splash: 0.25,
                },
                [2]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            ProjectileMass: 5,
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileShootDownRadius: 15,
            Impact: 100000,
            Missile:
            {
                RocketThrust: 10000,
                Flags: 1,
                ErraticAnglePeriodStdDev: 0.050000000745058,
                ErraticAnglePeriodMean: 0.30000001192093,
                MaxSteerPerSecond: 200,
                TargetRearOffsetDistance: 100000,
                RocketThrustChange: 8000,
                MinTargetUpdateDistance: 2000,
                CruiseTargetDistance: 300,
                ErraticThrust: 1.3999999761581,
                ErraticAngleExtentMax: 0.60000002384186,
                MaxSteerPerSecondErratic: 350,
                CruiseTargetDuration: 0.5,
                ErraticAngleExtentStdDev: 0.30000001192093,
                ThrustAngleExtent: 30,
            },
            TrailEffect: "mods/weapon_pack/effects/rocket_trail.lua",
            SaveName: "rocket",
            ProjectileSplashMaxForce: 75000,
            IgnitesBackgroundMaterials: true,
            CollidesWithBeams: true,
            ExplodeOnTouch: true,
            IgnitesBackgroundMaterialsPassingSource: false,
        },
        {
            IgnitesBackgroundMaterialsPassing: true,
            DeflectedByShields: false,
            EMPSensitivity: 0,
            ProjectileSplashDamageMaxRadius: 200,
            BeamTileRate: 0.019999999552965,
            ProjectileDrag: 13,
            Gravity: 0,
            ProjectileType: "missile",
            DisableShields: true,
            ProjectileSplashDamage: 45,
            IgnitesBackgroundMaterials: true,
            AntiAirDamage: 60,
            ProjectileMass: 5,
            BeamScrollRate: 0,
            SaveName: "armouredrocket",
            ProjectileThickness: 4,
            ProjectileDamage: 110,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0.25,
                    SaveName: "shield",
                    Splash: 0.25,
                },
                [2]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            SpeedIndicatorFactor: 0.050000000745058,
            Impact: 100000,
            ProjectileShootDownRadius: 15,
            Effects:
            {
                Deflect:
                {
                },
                Impact:
                {
                    foundations: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Terminate: true,
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingrocket",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                    },
                    default: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                    device: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                    antiair:
                    {
                        Offset: 0,
                        PosT: 1,
                        Effect: "effects/missile_armor_debris.lua",
                        Projectile:
                        {
                            Type: "rocket",
                            Count: 1,
                            StdDev: 0,
                        },
                        KeepLifespan: true,
                        Terminate: true,
                        Splash: false,
                    },
                    rocks01: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                },
            },
            Missile:
            {
                RocketThrust: 10000,
                ErraticAnglePeriodMean: 0.30000001192093,
                ErraticAngleExtentStdDev: 0.30000001192093,
                MaxSteerPerSecond: 200,
                TargetRearOffsetDistance: 100000,
                MaxSteerPerSecondErratic: 350,
                MinTargetUpdateDistance: 2000,
                CruiseTargetDistance: 300,
                ErraticThrust: 1.3999999761581,
                ErraticAngleExtentMax: 0.60000002384186,
                ErraticAnglePeriodStdDev: 0.050000000745058,
                CruiseTargetDuration: 0.5,
                RocketThrustChange: 8000,
                ThrustAngleExtent: 30,
            },
            TrailEffect: "mods/weapon_pack/effects/rocket_trail.lua",
            DrawBlurredProjectile: false,
            ProjectileSplashMaxForce: 75000,
            Projectile:
            {
                Root:
                {
                    Sprite: "mods/weapon_pack/weapons/rocket/projectile_armoured.dds",
                    Name: "Root",
                    ChildrenInFront:
                    {
                        [1]:
                        {
                            Sprite: "missile_tail",
                            Name: "Flame",
                            Offset:
                            {
                                [1]: 0,
                                [2]: 0.80000001192093,
                            },
                            Angle: 0,
                            Pivot:
                            {
                                [1]: 0,
                                [2]: 0.10000000149012,
                            },
                            PivotOffset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                        },
                    },
                    Angle: 0,
                    Pivot:
                    {
                        [1]: 0,
                        [2]: 0.34999999403954,
                    },
                },
            },
            AntiAirHitpoints: 1,
            ExplodeOnTouch: true,
            IgnitesBackgroundMaterialsPassingSource: false,
        },
        {
            DeflectedByShields: true,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            CollidesWithBeams: true,
            PassesThroughMaterials: false,
            ProjectileSplashDamage: 20,
            Impact: 20000,
            Effects:
            {
                Deflect:
                {
                    shield:
                    {
                        Effect: "effects/energy_shield_ricochet.lua",
                    },
                    armour:
                    {
                        Effect: "effects/armor_ricochet.lua",
                    },
                    door:
                    {
                        Effect: "effects/armor_ricochet.lua",
                    },
                },
                Impact:
                {
                    default: "effects/impact_medium.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Terminate: true,
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingcannon20mm",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                    },
                },
            },
            TrailEffect: "mods/weapon_pack/effects/20mmcannon_trail.lua",
            BeamScrollRate: 0,
            SpeedIndicatorFactor: 0.25,
            ProjectileThickness: 5,
            ProjectileDamage: 100,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0.60000002384186,
                    SaveName: "sandbags",
                    Splash: 0.60000002384186,
                },
                [2]:
                {
                    SaveName: "shield",
                    Splash: 0,
                },
                [3]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            ProjectileMass: 16,
            ProjectileSplashDamageMaxRadius: 100,
            ProjectileShootDownRadius: 60,
            ProjectileSpriteMipMap: false,
            BeamTileRate: 0.019999999552965,
            ProjectileSprite: "weapons/media/bullet",
            SaveName: "cannon20mm",
            ProjectileSplashMaxForce: 10000,
            DisableShields: false,
            AntiAirHitpoints: 40,
            ExplodeOnTouch: false,
            DrawBlurredProjectile: true,
        },
        {
            ProjectileIncendiary: true,
            DeflectedByShields: true,
            ProjectileDrag: 0,
            ProjectileType: "beam",
            IncendiaryRadius: 40,
            Impact: 0,
            Effects:
            {
                Deflect:
                {
                    shield: "mods/weapon_pack/effects/firebeam_hit.lua",
                    armour: "mods/weapon_pack/effects/firebeam_hit.lua",
                    door: "mods/weapon_pack/effects/firebeam_hit.lua",
                },
                Impact:
                {
                    foundations: "mods/weapon_pack/effects/firebeam_hit_ground.lua",
                    shield: "mods/weapon_pack/effects/firebeam_absorb.lua",
                    default: "mods/weapon_pack/effects/firebeam_hit.lua",
                    rocks01: "mods/weapon_pack/effects/firebeam_hit_ground.lua",
                },
            },
            ProjectileThickness: 30,
            BeamOcclusionDistanceWater: 400,
            AntiAirDamage: 1,
            BeamOcclusionDistance: 200,
            BeamScrollRate: -10,
            MinPenetration: 160,
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileDamage: 50,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0,
                    SaveName: "reactor",
                    Splash: 0,
                },
                [2]:
                {
                    SaveName: "smoke",
                    AntiAir: 65,
                },
            },
            ExplodeOnTouch: false,
            DeflectedByTerrain: false,
            DrawBlurredProjectile: false,
            ProjectileSpriteMipMap: true,
            IgnitesBackgroundMaterialsPassing: true,
            ProjectileSprite: "mods/weapon_pack/weapons/firebeam/beam",
            SaveName: "firebeam",
            IncendiaryOffset: 25,
            IgnitesBackgroundMaterials: true,
            ProjectileMass: 1,
            IncendiaryRadiusHeated: 40,
            IgnitesBackgroundMaterialsPassingSource: false,
        },
        {
            ProjectileIncendiary: true,
            DeflectedByShields: true,
            SaveName: "flamingmachinegun",
            ProjectileDrag: 0.020999999716878,
            ProjectileType: "mortar",
            IncendiaryRadius: 0,
            IncendiaryOffset: 0,
            IncendiaryRadiusHeated: 0,
            AlwaysIncendiary: true,
            MaxAge: 0.20000000298023,
            SpeedIndicatorFactor: 5,
            ExplodeOnTouch: false,
            MinAge: 2.5,
            DeflectedByTerrain: false,
            BeamScrollRate: 0,
            DrawBlurredProjectile: true,
            ProjectileThickness: 2,
            ProjectileDamage: 7.5,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            ProjectileSprite: "weapons/media/bullet",
            Impact: 10000,
            ProjectileShootDownRadius: 14,
            Effects:
            {
                Deflect:
                {
                    armour: "effects/bullet_armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    blastdoor: "effects/bullet_armor_ricochet.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/bullet_bracing_hit.lua",
                    door: "effects/bullet_armor_ricochet.lua",
                    backbarrier: "effects/bullet_armor_ricochet.lua",
                    barrier: "effects/bullet_armor_ricochet.lua",
                },
                ImpactDevice:
                {
                    sandbags: "effects/bullet_sandbag_hit.lua",
                },
                Impact:
                {
                    foundations: "effects/ground_hit.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    armour: "effects/bullet_armor_hit.lua",
                    device: "effects/impact_light.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    blastdoor: "effects/bullet_armor_hit.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/impact_light.lua",
                    door: "effects/bullet_armor_hit.lua",
                    rocks01: "effects/ground_hit.lua",
                    shield: "effects/impact_light.lua",
                    backbarrier: "effects/bullet_armor_hit.lua",
                    barrier: "effects/bullet_armor_hit.lua",
                },
            },
            ProjectileSpriteMipMap: false,
            TrailEffect: "mods/weapon_pack/effects/flaming_sniper_trail.lua",
            ProjectileMass: 0.25,
            BeamTileRate: 0.019999999552965,
            WeaponDamageBonus: 7.5,
            CollidesWithBeams: true,
            ImpactMomentumLimit: 2000,
            ExpiresOnFreeFall: true,
        },
        {
            ProjectileIncendiary: true,
            DeflectedByShields: true,
            ProjectileDrag: 0.020999999716878,
            IncendiaryOffset: 0,
            BeamTileRate: 0.019999999552965,
            IncendiaryRadius: 0,
            IncendiaryRadiusHeated: 0,
            AlwaysIncendiary: true,
            DrawFromAge: 0.079999998211861,
            MaxAge: 0.20000000298023,
            TrailEffect: "mods/weapon_pack/effects/flaming_sniper_trail.lua",
            DrawBlurredProjectile: true,
            ExplodeOnTouch: false,
            SpeedIndicatorFactor: 5,
            BeamScrollRate: 0,
            DeflectedByTerrain: false,
            ProjectileThickness: 2,
            ProjectileDamage: 7.5,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0.60000002384186,
                    SaveName: "mortar",
                    Splash: 1,
                },
                [2]:
                {
                    Direct: 0.60000002384186,
                    SaveName: "mortar2",
                    Splash: 1,
                },
                [3]:
                {
                    Direct: 0.20000000298023,
                    SaveName: "machinegun",
                    Splash: 1,
                },
                [4]:
                {
                    Direct: 0.20000000298023,
                    SaveName: "minigun",
                    Splash: 1,
                },
                [5]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            Impact: 10000,
            SaveName: "flamingshrapnel",
            ProjectileShootDownRadius: 9,
            Effects:
            {
                Deflect:
                {
                    bracing: "effects/bullet_bracing_hit.lua",
                    armour: "effects/bullet_armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/bullet_bracing_hit.lua",
                    door: "effects/bullet_armor_ricochet.lua",
                },
                ImpactDevice:
                {
                    sandbags: "effects/bullet_sandbag_hit.lua",
                },
                Impact:
                {
                    foundations: "effects/ground_hit.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    armour: "effects/bullet_armor_hit.lua",
                    device: "effects/impact_light.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/impact_light.lua",
                    shield: "effects/impact_light.lua",
                    rocks01: "effects/ground_hit.lua",
                    door: "effects/bullet_armor_hit.lua",
                },
            },
            MinAge: 0.25,
            ProjectileSprite: "weapons/media/bullet",
            ProjectileMass: 0.25,
            ProjectileSpriteMipMap: false,
            WeaponDamageBonus: 15,
            CollidesWithBeams: true,
            ImpactMomentumLimit: 2000,
            ProjectileType: "mortar",
        },
        {
            ProjectileIncendiary: true,
            DeflectedByShields: true,
            ProjectileDrag: 0.014999999664724,
            ProjectileType: "mortar",
            IncendiaryRadius: 0,
            IncendiaryOffset: 0,
            MaxAge: 0.20000000298023,
            IncendiaryRadiusHeated: 0,
            AlwaysIncendiary: true,
            DrawBlurredProjectile: true,
            ExplodeOnTouch: false,
            BeamScrollRate: 0,
            Effects:
            {
                Deflect:
                {
                    armour: "effects/bullet_armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    blastdoor: "effects/bullet_armor_ricochet.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/bullet_bracing_hit.lua",
                    door: "effects/bullet_armor_ricochet.lua",
                    backbarrier: "effects/bullet_armor_ricochet.lua",
                    barrier: "effects/bullet_armor_ricochet.lua",
                },
                ImpactDevice:
                {
                    sandbags: "effects/bullet_sandbag_hit.lua",
                },
                Impact:
                {
                    foundations: "effects/ground_hit.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    armour: "effects/bullet_armor_hit.lua",
                    device: "effects/impact_light.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    blastdoor: "effects/bullet_armor_hit.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/impact_light.lua",
                    door: "effects/bullet_armor_hit.lua",
                    rocks01: "effects/ground_hit.lua",
                    shield: "effects/impact_light.lua",
                    backbarrier: "effects/bullet_armor_hit.lua",
                    barrier: "effects/bullet_armor_hit.lua",
                },
            },
            ProjectileThickness: 2,
            ProjectileDamage: 21.875,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 1.5,
                    SaveName: "bracing",
                    Splash: 1,
                },
                [2]:
                {
                    Direct: 5,
                    SaveName: "sandbags",
                    Splash: 1,
                },
                [3]:
                {
                    Direct: 2.4000000953674,
                    SaveName: "machinegun",
                    Splash: 1,
                },
                [4]:
                {
                    Direct: 3,
                    SaveName: "rocketemp",
                    Splash: 1,
                },
                [5]:
                {
                    Direct: 3,
                    SaveName: "rocket",
                    Splash: 1,
                },
                [6]:
                {
                    Direct: 3,
                    SaveName: "shotgun",
                    Splash: 1,
                },
                [7]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            BeamTileRate: 0.019999999552965,
            ProjectileSpriteMipMap: false,
            ProjectileShootDownRadius: 12,
            Impact: 10000,
            SaveName: "flamingminigun",
            TrailEffect: "mods/weapon_pack/effects/flaming_sniper_trail.lua",
            ProjectileMass: 0.25,
            ProjectileSprite: "weapons/media/bullet",
            WeaponDamageBonus: -6.25,
            CollidesWithBeams: true,
            ImpactMomentumLimit: 2000,
            SpeedIndicatorFactor: 5,
        },
        {
            ProjectileIncendiary: true,
            DeflectedByShields: true,
            ProjectileDrag: 0,
            DeflectedByTerrain: false,
            BeamTileRate: 0.019999999552965,
            IncendiaryRadius: 0,
            MaxAge: 0.20000000298023,
            IncendiaryOffset: 0,
            PassesThroughMaterials: false,
            IncendiaryRadiusHeated: 0,
            AlwaysIncendiary: true,
            DrawBlurredProjectile: true,
            ExplodeOnTouch: false,
            BeamScrollRate: 0,
            ProjectileType: "mortar",
            ProjectileThickness: 2,
            ProjectileDamage: 18.75,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            Impact: 30000,
            SaveName: "flamingsniper",
            ProjectileShootDownRadius: 15,
            Effects:
            {
                Deflect:
                {
                    bracing: "effects/bullet_bracing_hit.lua",
                    door: "effects/bullet_armor_ricochet.lua",
                    armour: "effects/bullet_armor_ricochet.lua",
                    barrier: "effects/bullet_armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    backbarrier: "effects/bullet_armor_ricochet.lua",
                    blastdoor: "effects/bullet_armor_ricochet.lua",
                },
                ImpactDevice:
                {
                    sandbags: "effects/bullet_sandbag_hit.lua",
                },
                Impact:
                {
                    foundations: "effects/ground_hit.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    armour: "effects/bullet_armor_hit.lua",
                    device: "effects/impact_light.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    blastdoor: "effects/bullet_armor_hit.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/impact_light.lua",
                    door: "effects/bullet_armor_hit.lua",
                    rocks01: "effects/ground_hit.lua",
                    shield: "effects/impact_light.lua",
                    backbarrier: "effects/bullet_armor_hit.lua",
                    barrier: "effects/bullet_armor_hit.lua",
                },
            },
            ProjectileSprite: "weapons/media/bullet",
            TrailEffect: "mods/weapon_pack/effects/flaming_sniper_trail.lua",
            ProjectileMass: 0.20000000298023,
            ProjectileSpriteMipMap: false,
            WeaponDamageBonus: 143.75,
            CollidesWithBeams: true,
            ImpactMomentumLimit: 2000,
            SpeedIndicatorFactor: 0.050000000745058,
        },
        {
            MomentumThreshold:
            {
                shield:
                {
                    Reflect: 400,
                    Penetrate: 9000,
                },
            },
            DeflectedByShields: false,
            PenetrationDamage: 600,
            PenetrationSpeedMultiplier: 0.5,
            ProjectileType: "mortar",
            IncendiaryRadius: 0,
            IncendiaryRadiusHeated: 0,
            IncendiaryOffset: 0,
            MaxAge: 0.20000000298023,
            AlwaysIncendiary: true,
            ProjectileIncendiary: true,
            DrawBlurredProjectile: true,
            ProjectileSpriteMipMap: true,
            BeamScrollRate: 0,
            Effects:
            {
                Deflect:
                {
                    bracing: "effects/bullet_bracing_hit.lua",
                    door: "effects/bullet_armor_ricochet.lua",
                    armour: "effects/bullet_armor_ricochet.lua",
                    barrier: "effects/bullet_armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    backbarrier: "effects/bullet_armor_ricochet.lua",
                    blastdoor: "effects/bullet_armor_ricochet.lua",
                },
                ImpactDevice:
                {
                    sandbags: "effects/bullet_sandbag_hit.lua",
                },
                Penetrate:
                {
                    bracing: "effects/bullet_bracing_hit.lua",
                    armour: "effects/bullet_armor_hit.lua",
                    door: "effects/bullet_armor_hit.lua",
                    shield:
                    {
                        Effect: "effects/energy_shield_ricochet.lua",
                        Terminate: false,
                    },
                    barrier: "effects/bullet_armor_hit.lua",
                    backbarrier: "effects/bullet_armor_hit.lua",
                    blastdoor: "effects/bullet_armor_hit.lua",
                },
                Impact:
                {
                    foundations: "effects/ground_hit.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    armour: "effects/bullet_armor_hit.lua",
                    device: "effects/impact_light.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    blastdoor: "effects/bullet_armor_hit.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/impact_light.lua",
                    door: "effects/bullet_armor_hit.lua",
                    rocks01: "effects/ground_hit.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbarrier: "effects/bullet_armor_hit.lua",
                    barrier: "effects/bullet_armor_hit.lua",
                },
            },
            ProjectileThickness: 4,
            ProjectileDamage: 37.5,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            BeamTileRate: 0.019999999552965,
            SaveName: "flamingsniper2",
            ProjectileShootDownRadius: 15,
            Impact: 30000,
            ProjectileSprite: "weapons/media/bullet",
            TrailEffect: "mods/weapon_pack/effects/flaming_sniper_trail.lua",
            ProjectileMass: 1,
            ProjectileDrag: 0,
            WeaponDamageBonus: 125,
            CollidesWithBeams: true,
            ExplodeOnTouch: false,
            SpeedIndicatorFactor: 0.050000000745058,
        },
        {
            ProjectileIncendiary: true,
            DeflectedByShields: false,
            ProjectileSplashDamageMaxRadius: 120,
            ProjectileType: "mortar",
            IncendiaryRadius: 40,
            SpeedIndicatorFactor: 0.050000000745058,
            IncendiaryOffset: 20,
            MaxAge: 2,
            ProjectileSplashDamage: 53.200000762939,
            IncendiaryRadiusHeated: 40,
            AntiAirDamage: 20,
            AlwaysIncendiary: true,
            BeamScrollRate: 0,
            DrawBlurredProjectile: false,
            ProjectileThickness: 4,
            ProjectileDamage: 10,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            ProjectileDrag: 0,
            IgnitesBackgroundMaterials: true,
            ProjectileShootDownRadius: 15,
            Impact: 200000,
            BeamTileRate: 0.019999999552965,
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileMass: 20,
            SaveName: "flamingmortar",
            Projectile:
            {
                Root:
                {
                    Sprite: "objects/projectiles/mortar/mortar-incendiary.dds",
                    Angle: 0,
                    Name: "Root",
                },
            },
            CollidesWithBeams: true,
            ExplodeOnTouch: true,
            Effects:
            {
                Deflect:
                {
                    armour: "effects/armor_ricochet.lua",
                    door: "effects/armor_ricochet.lua",
                    barrier: "effects/armor_ricochet.lua",
                    backbarrier: "effects/armor_ricochet.lua",
                    blastdoor: "effects/armor_ricochet.lua",
                },
                Age:
                {
                    t1000000:
                    {
                        Terminate: true,
                        Effect: "effects/mortar_air_burst.lua",
                    },
                },
                Impact:
                {
                    bracing: "effects/impact_mortar_incendiary.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    default: "effects/impact_mortar_incendiary_no_fire.lua",
                    antiair: "effects/mortar_air_burst.lua",
                },
            },
        },
        {
            ProjectileIncendiary: true,
            DeflectedByShields: false,
            ProjectileSplashDamageMaxRadius: 130,
            DisableShields: true,
            IncendiaryRadius: 50,
            Impact: 200000,
            MaxAge: 2,
            ProjectileSplashDamage: 119.70000457764,
            IncendiaryOffset: 25,
            IncendiaryRadiusHeated: 50,
            AlwaysIncendiary: true,
            BeamScrollRate: 0,
            DrawBlurredProjectile: false,
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileDamage: 60,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            ProjectileDrag: 0,
            ProjectileThickness: 4,
            ProjectileShootDownRadius: 15,
            Effects:
            {
                Deflect:
                {
                    armour: "effects/armor_ricochet.lua",
                    door: "effects/armor_ricochet.lua",
                    barrier: "effects/armor_ricochet.lua",
                    backbarrier: "effects/armor_ricochet.lua",
                    blastdoor: "effects/armor_ricochet.lua",
                },
                Age:
                {
                    t1000000:
                    {
                        Terminate: true,
                        Effect: "effects/mortar_air_burst.lua",
                    },
                },
                Impact:
                {
                    antiair: "effects/mortar_air_burst.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    default: "effects/impact_medium.lua",
                },
            },
            BeamTileRate: 0.019999999552965,
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileMass: 20,
            SaveName: "flamingmortar2",
            Projectile:
            {
                Root:
                {
                    Sprite: "objects/projectiles/mortar/mortar.dds",
                    Angle: 0,
                    Name: "Root",
                },
            },
            CollidesWithBeams: true,
            ExplodeOnTouch: true,
            ProjectileType: "mortar",
        },
        {
            DeflectedByShields: false,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            MaxAge: 0.40000000596046,
            ProjectileSplashDamage: 50,
            BeamScrollRate: 0,
            ProjectileDamage: 700,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            ProjectileShootDownRadius: 60,
            Effects:
            {
                Deflect:
                {
                    armour: "effects/armor_ricochet.lua",
                    door: "effects/armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    barrier: "effects/armor_ricochet.lua",
                    backbarrier: "effects/armor_ricochet.lua",
                    blastdoor: "effects/armor_ricochet.lua",
                },
                Impact:
                {
                    foundations: "effects/impact_heavy_ground.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    armour: "effects/impact_heavy.lua",
                    rocks01: "effects/impact_heavy_ground.lua",
                    blastdoor: "effects/impact_heavy.lua",
                    bracing: "effects/impact_heavy.lua",
                    default: "effects/impact_heavy.lua",
                    door: "effects/impact_heavy.lua",
                    device: "effects/impact_heavy.lua",
                    backbarrier: "effects/impact_heavy.lua",
                    barrier: "effects/impact_heavy.lua",
                },
            },
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileMass: 16,
            ExplodeOnTouch: false,
            ProjectileIncendiary: true,
            ProjectileSplashDamageMaxRadius: 230,
            BeamTileRate: 0.019999999552965,
            IncendiaryRadius: 80,
            PassesThroughMaterials: false,
            SpeedIndicatorFactor: 0.25,
            MomentumThreshold:
            {
                armour:
                {
                    Reflect: 0,
                    Penetrate: 4000,
                },
                door:
                {
                    Reflect: 0,
                    Penetrate: 4000,
                },
            },
            IncendiaryOffset: 40,
            DestroyShields: true,
            AlwaysIncendiary: true,
            DrawBlurredProjectile: true,
            ProjectileSpriteMipMap: false,
            Impact: 20000,
            ProjectileSprite: "weapons/media/bullet",
            SaveName: "flamingcannon",
            ProjectileSplashMaxForce: 10000,
            AntiAirHitpoints: 120,
            CollidesWithBeams: true,
            IncendiaryRadiusHeated: 80,
            ProjectileThickness: 10,
        },
        {
            DeflectedByShields: false,
            EMPSensitivity: 4,
            ProjectileDrag: 64,
            EnemyCanTeleport: false,
            DisableShields: false,
            MaxAge: 3,
            ProjectileSplashDamage: 0,
            EMPMissileProbabilityOfCircling: 0.5,
            BeamScrollRate: 0,
            AlwaysIncendiary: true,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            ProjectileShootDownRadius: 12,
            Effects:
            {
                Deflect:
                {
                    default: "effects/mortar_air_burst.lua",
                },
                Age:
                {
                    t1000000:
                    {
                        Terminate: true,
                        Effect: "effects/mortar_air_burst.lua",
                    },
                },
                Impact:
                {
                    default: "effects/mortar_air_burst.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                },
            },
            TrailEffect: "mods/weapon_pack/effects/flaming_swarm_trail.lua",
            ProjectileMass: 4,
            ExplodeOnTouch: true,
            ProjectileIncendiary: true,
            ProjectileSplashDamageMaxRadius: 150,
            BeamTileRate: 0.019999999552965,
            IncendiaryRadius: 85,
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileType: "missile",
            IncendiaryOffset: 42.5,
            DrawBlurredProjectile: false,
            ProjectileDamage: 50,
            Missile:
            {
                MaxSteerPerSecond: 150,
                RocketThrust: 120000,
                DecoyFramesToRedirect: 6,
                LaunchThrust: 105000,
                ErraticThrustMagneticField: 0.69999998807907,
                ErraticAnglePeriodMean: 0.60000002384186,
                TargetRearOffsetDistance: 100000,
                MaxSteerPerSecondErratic: 200,
                MinTargetUpdateDistance: 2000,
                CruiseTargetDistance: 2000,
                ErraticThrust: 0.5,
                ErraticAngleExtentMax: 10,
                ErraticAnglePeriodStdDev: 0.15000000596046,
                CruiseTargetDuration: 0.5,
                ErraticAngleExtentStdDev: 5,
                ThrustAngleExtent: 25,
            },
            ProjectileThickness: 2,
            SaveName: "flamingmissile",
            ProjectileSplashMaxForce: 10000,
            Projectile:
            {
                Root:
                {
                    Sprite: "objects/projectiles/missile/missileswarm.dds",
                    Angle: 0,
                    Name: "Root",
                    ChildrenInFront:
                    {
                        [1]:
                        {
                            Sprite: "missile_swarm_tail",
                            Name: "Flame",
                            Offset:
                            {
                                [1]: 0,
                                [2]: 0.5,
                            },
                            Angle: 0,
                            Pivot:
                            {
                                [1]: 0,
                                [2]: 0.5,
                            },
                            PivotOffset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                        },
                    },
                },
            },
            CollidesWithBeams: true,
            IncendiaryRadiusHeated: 85,
            Impact: 75000,
        },
        {
            DeflectedByShields: false,
            EMPSensitivity: 4,
            ProjectileDrag: 64,
            DisableShields: true,
            MaxAge: 4,
            ProjectileSplashDamage: 175,
            AntiAirDamage: 100,
            BeamScrollRate: 0,
            FlipSpriteFacingLeft: false,
            ProjectileDamage: 300,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            ProjectileShootDownRadius: 14,
            Effects:
            {
                Deflect:
                {
                    armour: "effects/armor_ricochet.lua",
                    door: "effects/armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    barrier: "effects/armor_ricochet.lua",
                    backbarrier: "effects/armor_ricochet.lua",
                    blastdoor: "effects/armor_ricochet.lua",
                },
                AirDestroy:
                {
                    howitzer:
                    {
                        Terminate: true,
                        Effect: "effects/missile_structure_hit.lua",
                    },
                },
                Age:
                {
                    t1000000:
                    {
                        Terminate: true,
                        Effect: "effects/missile_structure_hit.lua",
                    },
                },
                Impact:
                {
                    foundations: "effects/missile_ground_hit.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    default: "effects/missile_structure_hit.lua",
                    shield: "effects/missile_structure_hit.lua",
                    device: "effects/missile_structure_hit.lua",
                    antiair:
                    {
                        Effect: "effects/mortar_air_burst.lua",
                        Projectile:
                        {
                            Count: 1,
                            Type: "flamingdamagedmissile2",
                        },
                        KeepLifespan: true,
                        Terminate: true,
                        Splash: false,
                    },
                    rocks01: "effects/missile_ground_hit.lua",
                },
            },
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileMass: 5,
            ExplodeOnTouch: true,
            ProjectileIncendiary: true,
            ProjectileSplashDamageMaxRadius: 350,
            BeamTileRate: 0.019999999552965,
            IncendiaryRadius: 150,
            SpeedIndicatorFactor: 0.050000000745058,
            IncendiaryOffset: 75,
            ProjectileThickness: 2,
            AlwaysIncendiary: true,
            DrawBlurredProjectile: false,
            ProjectileType: "missile",
            Missile:
            {
                MaxSteerPerSecond: 150,
                RocketThrust: 115000,
                DecoyFramesToRedirect: 6,
                LaunchThrust: 105000,
                ErraticThrustMagneticField: 0.69999998807907,
                ErraticAnglePeriodMean: 0.5,
                TargetRearOffsetDistance: 100000,
                MaxSteerPerSecondErratic: 250,
                MinTargetUpdateDistance: 2000,
                CruiseTargetDistance: 2000,
                ErraticThrust: 0.5,
                ErraticAngleExtentMax: 5,
                ErraticAnglePeriodStdDev: 0.10000000149012,
                CruiseTargetDuration: 0.5,
                ErraticAngleExtentStdDev: 2.5,
                ThrustAngleExtent: 25,
            },
            EMPMissileProbabilityOfCircling: 0.25,
            SaveName: "flamingmissile2",
            ProjectileSplashMaxForce: 80000,
            Projectile:
            {
                Root:
                {
                    Sprite: "warhead",
                    Name: "Root",
                    ChildrenInFront:
                    {
                        [1]:
                        {
                            Sprite: "missile_tail",
                            Name: "Flame",
                            Offset:
                            {
                                [1]: 0,
                                [2]: 0.5,
                            },
                            Angle: 0,
                            Pivot:
                            {
                                [1]: 0,
                                [2]: 0.10000000149012,
                            },
                            PivotOffset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                        },
                    },
                    Angle: 0,
                    Pivot:
                    {
                        [1]: 0,
                        [2]: 0.34999999403954,
                    },
                },
            },
            CollidesWithBeams: true,
            IncendiaryRadiusHeated: 150,
            Impact: 120000,
        },
        {
            DeflectedByShields: false,
            EMPSensitivity: 4,
            ProjectileDrag: 64,
            DisableShields: true,
            MaxAge: 4,
            ProjectileSplashDamage: 175,
            AntiAirDamage: 100,
            BeamScrollRate: 0,
            FlipSpriteFacingLeft: false,
            ProjectileDamage: 300,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            ProjectileShootDownRadius: 14,
            Impact: 120000,
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileMass: 5,
            ExplodeOnTouch: true,
            ProjectileIncendiary: true,
            ProjectileSplashDamageMaxRadius: 350,
            BeamTileRate: 0.019999999552965,
            IncendiaryRadius: 150,
            SpeedIndicatorFactor: 0.050000000745058,
            IncendiaryOffset: 75,
            SaveName: "flamingdamagedmissile2",
            ProjectileType: "missile",
            AlwaysIncendiary: true,
            EMPMissileProbabilityOfCircling: 0.25,
            Missile:
            {
                RocketThrust: 90000,
                ErraticAnglePeriodMean: 1.5,
                ErraticThrustMagneticField: 0.80000001192093,
                MaxSteerPerSecond: 120,
                TargetRearOffsetDistance: 100000,
                MaxSteerPerSecondErratic: 600,
                MinTargetUpdateDistance: 2000,
                CruiseTargetDistance: 2000,
                ErraticThrust: 0.5,
                ErraticAngleExtentMax: 20,
                ErraticAnglePeriodStdDev: 0.10000000149012,
                CruiseTargetDuration: 0.5,
                ErraticAngleExtentStdDev: 10,
                ThrustAngleExtent: 35,
            },
            ProjectileThickness: 2,
            DrawBlurredProjectile: false,
            ProjectileSplashMaxForce: 80000,
            Projectile:
            {
                Root:
                {
                    Sprite: "warhead",
                    Name: "Root",
                    ChildrenInFront:
                    {
                        [1]:
                        {
                            Offset:
                            {
                                [1]: 0,
                                [2]: 0.5,
                            },
                            Name: "Flame",
                            Sprite: "missile_tail",
                            Angle: 0,
                            Pivot:
                            {
                                [1]: 0,
                                [2]: 0.10000000149012,
                            },
                            PivotOffset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                        },
                    },
                    Angle: 0,
                    Pivot:
                    {
                        [1]: 0,
                        [2]: 0.34999999403954,
                    },
                },
            },
            CollidesWithBeams: true,
            IncendiaryRadiusHeated: 150,
            Effects:
            {
                Deflect:
                {
                    armour: "effects/armor_ricochet.lua",
                    blastdoor: "effects/armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    barrier: "effects/armor_ricochet.lua",
                    backbarrier: "effects/armor_ricochet.lua",
                    door: "effects/armor_ricochet.lua",
                },
                Age:
                {
                    t1000000:
                    {
                        Terminate: true,
                        Effect: "effects/missile_structure_hit.lua",
                    },
                },
                Impact:
                {
                    foundations: "effects/missile_ground_hit.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    default: "effects/missile_structure_hit.lua",
                    antiair: "effects/missile_structure_hit.lua",
                    rocks01: "effects/missile_ground_hit.lua",
                    device: "effects/missile_structure_hit.lua",
                    shield: "effects/missile_structure_hit.lua",
                },
            },
        },
        {
            ProjectileIncendiary: true,
            DeflectedByShields: true,
            ProjectileDrag: 0,
            BeamTileRate: 0.019999999552965,
            IncendiaryRadius: 0,
            IncendiaryOffset: 0,
            MaxAge: 0.20000000298023,
            IncendiaryRadiusHeated: 0,
            AlwaysIncendiary: true,
            TrailEffect: "mods/weapon_pack/effects/flaming_sniper_trail.lua",
            DrawBlurredProjectile: true,
            BeamScrollRate: 0,
            ExplodeOnTouch: false,
            SpeedIndicatorFactor: 5,
            ProjectileDamage: 50,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0.25,
                    SaveName: "sniper",
                    Splash: 1,
                },
                [2]:
                {
                    Direct: 0.25,
                    SaveName: "sniper2",
                    Splash: 1,
                },
                [3]:
                {
                    Direct: 0.25,
                    SaveName: "minigun",
                    Splash: 1,
                },
                [4]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            ProjectileSpriteMipMap: false,
            ProjectileThickness: 2,
            ProjectileShootDownRadius: 14,
            Impact: 10000,
            ProjectileType: "mortar",
            ProjectileSprite: "weapons/media/bullet",
            ProjectileMass: 0.20000000298023,
            SaveName: "flamingshotgun",
            WeaponDamageBonus: -6.25,
            CollidesWithBeams: true,
            ImpactMomentumLimit: 2000,
            Effects:
            {
                Deflect:
                {
                    bracing: "effects/bullet_bracing_hit.lua",
                    armour: "effects/bullet_armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    door: "effects/bullet_armor_ricochet.lua",
                },
                ImpactDevice:
                {
                    sandbags: "effects/bullet_sandbag_hit.lua",
                },
                Impact:
                {
                    foundations: "effects/ground_hit.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    armour: "effects/bullet_armor_hit.lua",
                    device: "effects/impact_light.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    bracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/impact_light.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    rocks01: "effects/ground_hit.lua",
                    door: "effects/bullet_armor_hit.lua",
                },
            },
        },
        {
            DeflectedByShields: false,
            EMPSensitivity: 0,
            ProjectileDrag: 13,
            ProjectileType: "missile",
            MaxAge: 2.2999999523163,
            ProjectileSplashDamage: 59.850002288818,
            AntiAirDamage: 60,
            BeamScrollRate: 0,
            ProjectileDamage: 110,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0.25,
                    SaveName: "shield",
                    Splash: 0.25,
                },
                [2]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            ProjectileShootDownRadius: 15,
            Effects:
            {
                Deflect:
                {
                },
                Age:
                {
                    t1000000:
                    {
                        Terminate: true,
                        Effect: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                    },
                },
                Impact:
                {
                    foundations: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    default: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                    device: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                    antiair: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                    rocks01: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                },
            },
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileMass: 5,
            IgnitesBackgroundMaterials: true,
            ExplodeOnTouch: true,
            IgnitesBackgroundMaterialsPassingSource: false,
            ProjectileIncendiary: true,
            ProjectileSplashDamageMaxRadius: 200,
            Gravity: 0,
            IncendiaryRadius: 75,
            SpeedIndicatorFactor: 0.050000000745058,
            IncendiaryOffset: 37.5,
            ProjectileThickness: 4,
            IgnitesBackgroundMaterialsPassing: true,
            AlwaysIncendiary: true,
            BeamTileRate: 0.019999999552965,
            DisableShields: true,
            Missile:
            {
                RocketThrust: 10000,
                ErraticAnglePeriodMean: 0.30000001192093,
                ErraticAngleExtentStdDev: 0.30000001192093,
                MaxSteerPerSecond: 200,
                TargetRearOffsetDistance: 100000,
                MaxSteerPerSecondErratic: 350,
                MinTargetUpdateDistance: 2000,
                CruiseTargetDistance: 300,
                ErraticThrust: 1.3999999761581,
                ErraticAngleExtentMax: 0.60000002384186,
                ErraticAnglePeriodStdDev: 0.050000000745058,
                CruiseTargetDuration: 0.5,
                RocketThrustChange: 8000,
                ThrustAngleExtent: 30,
            },
            SaveName: "flamingrocket",
            DrawBlurredProjectile: false,
            ProjectileSplashMaxForce: 75000,
            Projectile:
            {
                Root:
                {
                    Sprite: "mods/weapon_pack/weapons/rocket/projectile",
                    Name: "Root",
                    ChildrenInFront:
                    {
                        [1]:
                        {
                            Sprite: "missile_tail",
                            Name: "Flame",
                            Offset:
                            {
                                [1]: 0,
                                [2]: 0.80000001192093,
                            },
                            Angle: 0,
                            Pivot:
                            {
                                [1]: 0,
                                [2]: 0.10000000149012,
                            },
                            PivotOffset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                        },
                    },
                    Angle: 0,
                    Pivot:
                    {
                        [1]: 0,
                        [2]: 0.34999999403954,
                    },
                },
            },
            CollidesWithBeams: true,
            IncendiaryRadiusHeated: 75,
            Impact: 100000,
        },
        {
            DeflectedByShields: false,
            EMPSensitivity: 0,
            ProjectileDrag: 13,
            EnemyCanTeleport: false,
            ProjectileType: "missile",
            MaxAge: 2.2999999523163,
            ProjectileSplashDamage: 53.200000762939,
            AntiAirDamage: 60,
            BeamScrollRate: 0,
            ProjectileDamage: 100,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0,
                    SaveName: "shield",
                    Splash: 0.5,
                },
                [2]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            ProjectileShootDownRadius: 15,
            Impact: 100000,
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileMass: 5,
            IgnitesBackgroundMaterials: true,
            ExplodeOnTouch: true,
            IgnitesBackgroundMaterialsPassingSource: false,
            IgnitesBackgroundMaterialsPassing: true,
            EMPOffset: 50,
            ProjectileSplashDamageMaxRadius: 120,
            BeamTileRate: 0.019999999552965,
            IncendiaryRadius: 75,
            IncendiaryOffset: 37.5,
            EMPRadius: 150,
            SpeedIndicatorFactor: 0.050000000745058,
            Gravity: 0,
            AlwaysIncendiary: true,
            ProjectileIncendiary: true,
            ProjectileThickness: 4,
            DrawBlurredProjectile: false,
            DisableShields: true,
            Missile:
            {
                RocketThrust: 10000,
                ErraticAnglePeriodMean: 0.30000001192093,
                ErraticAngleExtentStdDev: 0.30000001192093,
                MaxSteerPerSecond: 200,
                TargetRearOffsetDistance: 100000,
                MaxSteerPerSecondErratic: 300,
                MinTargetUpdateDistance: 2000,
                CruiseTargetDistance: 300,
                ErraticThrust: 1.3999999761581,
                ErraticAngleExtentMax: 0.60000002384186,
                ErraticAnglePeriodStdDev: 0.050000000745058,
                CruiseTargetDuration: 0.5,
                RocketThrustChange: 8000,
                ThrustAngleExtent: 30,
            },
            EMPDuration: 10,
            SaveName: "flamingrocketemp",
            ProjectileSplashMaxForce: 50000,
            Projectile:
            {
                Root:
                {
                    Sprite: "mods/weapon_pack/weapons/rocketemp/projectile",
                    Name: "Root",
                    ChildrenInFront:
                    {
                        [1]:
                        {
                            Sprite: "missile_tail",
                            Name: "Flame",
                            Offset:
                            {
                                [1]: 0,
                                [2]: 0.80000001192093,
                            },
                            Angle: 0,
                            Pivot:
                            {
                                [1]: 0,
                                [2]: 0.10000000149012,
                            },
                            PivotOffset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                        },
                    },
                    Angle: 0,
                    Pivot:
                    {
                        [1]: 0,
                        [2]: 0.34999999403954,
                    },
                },
            },
            CollidesWithBeams: true,
            IncendiaryRadiusHeated: 75,
            Effects:
            {
                Deflect:
                {
                },
                Age:
                {
                    t1000000:
                    {
                        Terminate: true,
                        Effect: "mods/weapon_pack/effects/rocket_structure_hit.lua",
                    },
                },
                Impact:
                {
                    foundations: "mods/weapon_pack/effects/impact_emp.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    default: "mods/weapon_pack/effects/impact_emp.lua",
                    device: "mods/weapon_pack/effects/impact_emp.lua",
                    antiair:
                    {
                        Effect: "mods/weapon_pack/effects/impact_emp.lua",
                        Terminate: true,
                    },
                    rocks01: "mods/weapon_pack/effects/impact_emp.lua",
                    shield: "mods/weapon_pack/effects/impact_emp.lua",
                },
            },
        },
        {
            DeflectedByShields: true,
            ProjectileDrag: 0,
            DisableShields: false,
            MaxAge: 0.15999999642372,
            ProjectileSplashDamage: 25,
            BeamScrollRate: 0,
            ProjectileDamage: 90,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0.60000002384186,
                    SaveName: "sandbags",
                    Splash: 0.60000002384186,
                },
                [2]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            ProjectileShootDownRadius: 60,
            Effects:
            {
                Deflect:
                {
                    shield:
                    {
                        Effect: "effects/energy_shield_ricochet.lua",
                    },
                    armour:
                    {
                        Effect: "effects/armor_ricochet.lua",
                    },
                    door:
                    {
                        Effect: "effects/armor_ricochet.lua",
                    },
                },
                Impact:
                {
                    default: "effects/impact_medium.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                },
            },
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileMass: 16,
            ExplodeOnTouch: false,
            ProjectileIncendiary: true,
            ProjectileSplashDamageMaxRadius: 100,
            BeamTileRate: 0.019999999552965,
            IncendiaryRadius: 70,
            PassesThroughMaterials: false,
            ProjectileThickness: 5,
            IncendiaryOffset: 35,
            ProjectileType: "mortar",
            AntiAirHitpoints: 40,
            AlwaysIncendiary: true,
            ProjectileSpriteMipMap: false,
            DrawBlurredProjectile: true,
            ProjectileSprite: "weapons/media/bullet",
            SaveName: "flamingcannon20mm",
            ProjectileSplashMaxForce: 10000,
            Impact: 20000,
            CollidesWithBeams: true,
            IncendiaryRadiusHeated: 70,
            SpeedIndicatorFactor: 0.25,
        },
        {
            DeflectedByShields: false,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            MaxAge: 120,
            ProjectileSplashDamage: 40,
            MagneticModifierEnemy: 0.10000000149012,
            BeamScrollRate: 0,
            ProjectileDamage: 450,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "laser",
                    Block: 200,
                },
                [2]:
                {
                    Direct: 1,
                    Block: 200,
                    SaveName: "firebeam",
                    Splash: 1,
                },
                [3]:
                {
                    Direct: 1,
                    Block: 200,
                    SaveName: "magnabeam",
                    Splash: 1,
                },
                [4]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
                [5]:
                {
                    Direct: 1,
                    SaveName: "bracing",
                    Splash: 4.8000001907349,
                },
                [6]:
                {
                    Direct: 1,
                    SaveName: "backbracing",
                    Splash: 3.2000000476837,
                },
            },
            FieldRadius: 60,
            ProjectileShootDownRadius: 80,
            Impact: 100000,
            TrailEffect: "mods/dlc1_weapons/effects/howitzer_fly.lua",
            ProjectileMass: 16,
            FieldType: 4,
            ExplodeOnTouch: false,
            MomentumThreshold:
            {
                default:
                {
                    Reflect: 1,
                    Penetrate: 0,
                },
            },
            FieldCreatesImpactProjectile: true,
            ProjectileSplashDamageMaxRadius: 230,
            CollidesWithBackgroundMaterials: true,
            Gravity: 200,
            PassesThroughMaterials: false,
            CollidesWithLike: true,
            ProjectileSplashOffset: 50,
            CollidesWithLikeTag: "howitzer",
            Effects:
            {
                Deflect:
                {
                    shield: "effects/energy_shield_ricochet.lua",
                    armour: "effects/armor_ricochet.lua",
                    door: "effects/armor_ricochet.lua",
                },
                Impact:
                {
                    firebeam:
                    {
                        Offset: 0,
                        Effect: "effects/small_arms_flare.lua",
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flaminghowitzer",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                        Terminate: true,
                    },
                    default: "mods/dlc1_weapons/effects/impact_howitzer.lua",
                    antiair: "mods/dlc1_weapons/effects/impact_howitzer_mid-air.lua",
                    backbracing:
                    {
                        Terminate: true,
                        Splash: true,
                        Effect: "mods/dlc1_weapons/effects/impact_howitzer.lua",
                    },
                    backbarrier:
                    {
                        LifeSpan: 120,
                    },
                },
            },
            ProjectileThickness: 10,
            SpeedIndicatorFactor: 0.25,
            DetonatesOnExpiry: true,
            BeamTileRate: 0.019999999552965,
            CollidesWithBeams: true,
            MagneticModifierFriendly: 0.10000000149012,
            ProjectileSpriteMipMap: false,
            CanBeShotDown: true,
            ProjectileSprite: "mods/dlc1_weapons/weapons/media/howitzer",
            SaveName: "howitzer",
            ProjectileSplashMaxForce: 80000,
            FieldIntersectionNearest: false,
            AntiAirHitpoints: 60,
            DestroyShields: true,
            DrawBlurredProjectile: false,
        },
        {
            RayOffset: -0.10000000149012,
            ProjectileDrag: 0.014999999664724,
            ProjectileType: "mortar",
            RayIncendiaryRadius: 0,
            ProjectileSplashDamage: 50,
            RayStopAtForeground: false,
            BeamScrollRate: 0,
            ProjectileDamage: 13.333999633789,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 11.699999809265,
                    Ray: 18.75,
                    SaveName: "bracing",
                    Splash: 1,
                },
                [2]:
                {
                    Direct: 7.8000001907349,
                    Ray: 12.5,
                    SaveName: "backbracing",
                    Splash: 1,
                },
                [3]:
                {
                    Direct: 11.249438285828,
                    SaveName: "rope",
                    Ray: 11.249438285828,
                },
                [4]:
                {
                    Direct: 1,
                    Ray: 0,
                    SaveName: "default",
                    Splash: 0,
                },
                [5]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
                [6]:
                {
                    Direct: 2,
                    Ray: 2,
                    SaveName: "portal",
                    Splash: 0,
                },
            },
            ProjectileShootDownRadius: 60,
            Impact: 10000,
            TrailEffect: "mods/dlc1_weapons/effects/buzzsaw_fly.lua",
            ProjectileMass: 0.25,
            WeaponDamageBonus: 7,
            ExplodeOnTouch: false,
            RayExcludeBackground: false,
            ProjectileSplashDamageMaxRadius: 80,
            CollidesWithBackgroundMaterials: true,
            BeamTileRate: 0.019999999552965,
            RayDamage: 7.5,
            RayLength: 50.099998474121,
            CollidesWithConstruction: true,
            SpeedIndicatorFactor: 5,
            ProjectileSplashOffset: -81,
            DeflectedByShields: true,
            ProjectileSpriteMipMap: false,
            DrawBlurredProjectile: true,
            ProjectileSprite: "mods/dlc1_weapons/weapons/media/buzzsaw",
            SaveName: "buzzsaw",
            RayDamageLimit: 3000,
            Effects:
            {
                ImpactDevice:
                {
                    sandbags: "effects/bullet_sandbag_hit.lua",
                },
                Deflect:
                {
                    shield:
                    {
                        SpeedLossFactor: 0,
                        Effect: "effects/energy_shield_ricochet.lua",
                    },
                    default: "mods/dlc1_weapons/effects/buzzsaw_ricochet.lua",
                },
                Impact:
                {
                    firebeam:
                    {
                        Offset: 0,
                        Effect: "effects/small_arms_flare.lua",
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingbuzzsaw",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                        Terminate: true,
                    },
                    armour: "mods/dlc1_weapons/effects/impact_buzzsaw_armour.lua",
                    device: "mods/dlc1_weapons/effects/impact_buzzsaw_armour.lua",
                    blastdoor: "mods/dlc1_weapons/effects/impact_buzzsaw_armour.lua",
                    bracing: "mods/dlc1_weapons/effects/impact_buzzsaw.lua",
                    default: "mods/dlc1_weapons/effects/impact_buzzsaw.lua",
                    ground: "mods/dlc1_weapons/effects/impact_buzzsaw_ground.lua",
                    shield:
                    {
                        KeepLifespan: true,
                        SpeedLossFactor: 0,
                        Reflect: true,
                        Effect: "effects/energy_shield_ricochet.lua",
                    },
                    door: "mods/dlc1_weapons/effects/impact_buzzsaw_armour.lua",
                    backbarrier: "mods/dlc1_weapons/effects/impact_buzzsaw_armour.lua",
                    barrier: "mods/dlc1_weapons/effects/impact_buzzsaw_armour.lua",
                },
            },
            CollidesWithBeams: true,
            ProjectileThickness: 10,
            Gravity: 50,
        },
        {
            DeflectedByShields: false,
            ProjectileDrag: 0,
            CollidesWithBackgroundMaterials: false,
            ProjectileType: "mortar",
            CanBeShotDown: false,
            TrailEffect: "effects/sniper_trail.lua",
            ProjectileMass: 0.20000000298023,
            AntiAirDamage: 0,
            Effects:
            {
                Deflect:
                {
                    bracing: "effects/bullet_bracing_hit.lua",
                    armour: "effects/bullet_armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/bullet_bracing_hit.lua",
                    door: "effects/bullet_armor_ricochet.lua",
                },
                Age:
                {
                    t200:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -220,
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                    },
                },
                Impact:
                {
                    foundations:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -220,
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                    },
                    firebeam:
                    {
                        Offset: 0,
                        Effect: "effects/small_arms_flare.lua",
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingsmokebomb",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                        Terminate: true,
                    },
                    armour:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -220,
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                    },
                    device:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -220,
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                    },
                    backbracing:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -220,
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                    },
                    bracing:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -220,
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                    },
                    default:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -220,
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                    },
                    shield:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -220,
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                    },
                    rocks01:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -220,
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                    },
                    door:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -220,
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                    },
                },
            },
            BeamScrollRate: 0,
            Projectile:
            {
                Root:
                {
                    Sprite: "mods/dlc1_weapons/weapons/media/smokebomb",
                    Angle: 0,
                    Name: "Root",
                },
            },
            ProjectileThickness: 2,
            ProjectileDamage: 0,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            BeamTileRate: 0.019999999552965,
            SpeedIndicatorFactor: 5,
            ProjectileShootDownRadius: 20,
            ProjectileSpriteMipMap: false,
            CollisionLookaheadDist: 200,
            ProjectileSprite: "mods/dlc1_weapons/weapons/media/smokebomb",
            SaveName: "smokebomb",
            Impact: 10000,
            WeaponDamageBonus: 0,
            CollidesWithBeams: true,
            ExplodeOnTouch: true,
            DrawBlurredProjectile: false,
        },
        {
            ProjectileIncendiary: false,
            DeflectedByShields: false,
            ProjectileDrag: 1,
            Effects:
            {
                AirImpact:
                {
                    missile:
                    {
                        ChanceOfTangent: 0.0099999997764826,
                        GuidanceError: 1200,
                        Effect: "mods/dlc1_weapons/effects/missile_disrupt.lua",
                        ChanceOfCircling: 0.03999999910593,
                        ChanceOfError: 0.94999998807907,
                    },
                    missile2:
                    {
                        ChanceOfTangent: 0.0099999997764826,
                        GuidanceError: 1200,
                        Effect: "mods/dlc1_weapons/effects/missile_disrupt.lua",
                        ChanceOfCircling: 0.03999999910593,
                        ChanceOfError: 0.94999998807907,
                    },
                },
            },
            ProjectileType: "mortar",
            MagneticModifierFriendly: 0,
            BeamTileRate: 0,
            Gravity: 0,
            AntiAirHitpoints: 50,
            MaxAge: 10,
            CollidesWithProjectiles: true,
            SpeedIndicatorFactor: 0,
            ProjectileSplashDamageMaxRadius: 0,
            ProjectileSplashDamage: 0,
            BeamScrollRate: 0,
            CollidesWithStructure: false,
            ProjectileThickness: 200,
            ProjectileDamage: 0,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "laser",
                    Block: 0.89999997615814,
                },
                [2]:
                {
                    SaveName: "magnabeam",
                    Block: 0.30000001192093,
                },
                [3]:
                {
                    SaveName: "default",
                    Direct: 0,
                },
                [4]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            FieldRadius: 200,
            DisableShields: false,
            ProjectileShootDownRadius: 200,
            ProjectileSpriteMipMap: false,
            Impact: 0,
            TrailEffect: "mods/dlc1_weapons/effects/smoke.lua",
            SaveName: "smoke",
            FieldType: 29,
            FieldIntersectionNearest: true,
            CollidesWithBeams: true,
            ExplodeOnTouch: false,
            ProjectileMass: 1,
        },
        {
            ProjectileIncendiary: false,
            DeflectedByShields: true,
            ProjectileDrag: 0,
            ProjectileType: "beam",
            ImpactSize: 50,
            MinPenetration: 0,
            Effects:
            {
                Deflect:
                {
                    shield: "mods/dlc1_weapons/effects/magnabeam_hit.lua",
                },
                Impact:
                {
                    shield: "mods/dlc1_weapons/effects/magnabeam_absorb.lua",
                    default:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "magneticfield",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Terminate: true,
                        Offset: -220,
                        Effect: "mods/dlc1_weapons/effects/magnabeam_hit.lua",
                    },
                },
            },
            AntiAirDamage: 0,
            BeamOcclusionDistance: 200,
            BeamScrollRate: -10,
            ProjectileThickness: 30,
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileDamage: 0,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            BeamOcclusionDistanceWater: 1600,
            Impact: 0,
            ProjectileMass: 1,
            ProjectileSpriteMipMap: true,
            DeflectedByTerrain: false,
            ProjectileSprite: "mods/dlc1_weapons/weapons/magnabeam/beam",
            SaveName: "magnabeam",
            DrawBlurredProjectile: false,
            IgnitesBackgroundMaterials: false,
            IgnitesBackgroundMaterialsPassing: false,
            ExplodeOnTouch: false,
            IgnitesBackgroundMaterialsPassingSource: false,
        },
        {
            ProjectileIncendiary: false,
            DeflectedByShields: false,
            ProjectileDrag: 1,
            Impact: 0,
            ProjectileType: "mortar",
            Gravity: 0,
            AntiAirHitpoints: 0,
            SpeedIndicatorFactor: 0,
            ProjectileSplashDamageMaxRadius: 0,
            MaxAge: 10,
            CollidesWithProjectiles: false,
            ProjectileSplashDamage: 0,
            DisableShields: false,
            BeamTileRate: 0,
            BeamScrollRate: 0,
            CollidesWithStructure: false,
            ProjectileThickness: 200,
            ProjectileDamage: 0,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            FieldRadius: 2000,
            FieldStrengthMax: 50000,
            ProjectileShootDownRadius: 200,
            ProjectileSpriteMipMap: false,
            MagneticModifierFriendly: 0,
            ProjectileSprite: "impact_magnabeam",
            SaveName: "magneticfield",
            FieldType: 2,
            FieldStrengthFalloffPower: 0.5,
            CollidesWithBeams: false,
            ExplodeOnTouch: false,
            ProjectileMass: 1,
        },
        {
            DetonatesOnExpiry: true,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            MaxAge: 60,
            ProjectileSplashDamage: 41.650001525879,
            MagneticModifierEnemy: 0.10000000149012,
            BeamScrollRate: 0,
            ProjectileDamage: 450,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "laser",
                    Block: 200,
                },
                [2]:
                {
                    Direct: 1,
                    Block: 200,
                    SaveName: "firebeam",
                    Splash: 1,
                },
                [3]:
                {
                    Direct: 1,
                    Block: 200,
                    SaveName: "magnabeam",
                    Splash: 1,
                },
                [4]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
                [5]:
                {
                    Direct: 1,
                    SaveName: "bracing",
                    Splash: 4.8000001907349,
                },
                [6]:
                {
                    Direct: 1,
                    SaveName: "backbracing",
                    Splash: 3.2000000476837,
                },
            },
            FieldRadius: 60,
            ProjectileShootDownRadius: 80,
            Impact: 100000,
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileMass: 16,
            FieldType: 4,
            ExplodeOnTouch: false,
            MomentumThreshold:
            {
                default:
                {
                    Reflect: 1,
                    Penetrate: 0,
                },
            },
            FieldCreatesImpactProjectile: true,
            ProjectileSplashDamageMaxRadius: 191.58999633789,
            CollidesWithBackgroundMaterials: true,
            Gravity: 200,
            IncendiaryRadius: 149.94000244141,
            ProjectileSplashOffset: 50,
            IncendiaryOffset: 74.970001220703,
            PassesThroughMaterials: false,
            CollidesWithLike: true,
            SpeedIndicatorFactor: 0.25,
            AlwaysIncendiary: true,
            ProjectileIncendiary: true,
            CollidesWithLikeTag: "howitzer",
            DrawBlurredProjectile: false,
            ProjectileThickness: 10,
            DestroyShields: true,
            AntiAirHitpoints: 60,
            BeamTileRate: 0.019999999552965,
            MagneticModifierFriendly: 0.10000000149012,
            DeflectedByShields: false,
            ProjectileSpriteMipMap: false,
            CanBeShotDown: true,
            ProjectileSprite: "mods/dlc1_weapons/weapons/media/howitzer",
            SaveName: "flaminghowitzer",
            ProjectileSplashMaxForce: 80000,
            FieldIntersectionNearest: false,
            CollidesWithBeams: true,
            IncendiaryRadiusHeated: 149.94000244141,
            Effects:
            {
                Deflect:
                {
                    shield: "effects/energy_shield_ricochet.lua",
                    armour: "effects/armor_ricochet.lua",
                    door: "effects/armor_ricochet.lua",
                },
                Impact:
                {
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    default: "mods/dlc1_weapons/effects/impact_howitzer.lua",
                    antiair: "mods/dlc1_weapons/effects/impact_howitzer_mid-air.lua",
                    backbracing:
                    {
                        Terminate: true,
                        Splash: true,
                        Effect: "mods/dlc1_weapons/effects/impact_howitzer.lua",
                    },
                    backbarrier:
                    {
                        LifeSpan: 120,
                    },
                },
            },
        },
        {
            DeflectedByShields: true,
            ProjectileDrag: 0.014999999664724,
            ProjectileType: "mortar",
            RayIncendiaryRadius: 0,
            MaxAge: 60,
            ProjectileSplashDamage: 50,
            RayStopAtForeground: false,
            BeamScrollRate: 0,
            ProjectileDamage: 16.667499542236,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 11.699999809265,
                    Ray: 18.75,
                    SaveName: "bracing",
                    Splash: 1,
                },
                [2]:
                {
                    Direct: 7.8000001907349,
                    Ray: 12.5,
                    SaveName: "backbracing",
                    Splash: 1,
                },
                [3]:
                {
                    Direct: 11.249438285828,
                    SaveName: "rope",
                    Ray: 11.249438285828,
                },
                [4]:
                {
                    Direct: 1,
                    Ray: 0,
                    SaveName: "default",
                    Splash: 0,
                },
                [5]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
                [6]:
                {
                    Direct: 2,
                    Ray: 2,
                    SaveName: "portal",
                    Splash: 0,
                },
            },
            ProjectileShootDownRadius: 60,
            Impact: 10000,
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileMass: 0.25,
            WeaponDamageBonus: 7,
            ExplodeOnTouch: false,
            RayExcludeBackground: false,
            ProjectileIncendiary: true,
            ProjectileSplashDamageMaxRadius: 80,
            CollidesWithBackgroundMaterials: true,
            Gravity: 50,
            IncendiaryRadius: 80,
            RayDamage: 7.5,
            RayLength: 50.099998474121,
            CollidesWithConstruction: true,
            ProjectileThickness: 10,
            ProjectileSplashOffset: -81,
            RayDamageLimit: 3000,
            RayOffset: -0.10000000149012,
            BeamTileRate: 0.019999999552965,
            IncendiaryOffset: 40,
            ProjectileSpriteMipMap: false,
            SpeedIndicatorFactor: 5,
            ProjectileSprite: "mods/dlc1_weapons/weapons/media/buzzsaw",
            SaveName: "flamingbuzzsaw",
            AlwaysIncendiary: true,
            DrawBlurredProjectile: true,
            CollidesWithBeams: true,
            IncendiaryRadiusHeated: 80,
            Effects:
            {
                Deflect:
                {
                    shield:
                    {
                        Effect: "effects/energy_shield_ricochet.lua",
                        SpeedLossFactor: 0,
                    },
                    default: "mods/dlc1_weapons/effects/buzzsaw_ricochet.lua",
                },
                ImpactDevice:
                {
                    sandbags: "effects/bullet_sandbag_hit.lua",
                },
                Impact:
                {
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    armour: "mods/dlc1_weapons/effects/impact_buzzsaw_armour.lua",
                    device: "mods/dlc1_weapons/effects/impact_buzzsaw_armour.lua",
                    blastdoor: "mods/dlc1_weapons/effects/impact_buzzsaw_armour.lua",
                    bracing: "mods/dlc1_weapons/effects/impact_buzzsaw.lua",
                    default: "mods/dlc1_weapons/effects/impact_buzzsaw.lua",
                    barrier: "mods/dlc1_weapons/effects/impact_buzzsaw_armour.lua",
                    backbarrier: "mods/dlc1_weapons/effects/impact_buzzsaw_armour.lua",
                    shield:
                    {
                        KeepLifespan: true,
                        Effect: "effects/energy_shield_ricochet.lua",
                        Reflect: true,
                        SpeedLossFactor: 0,
                    },
                    ground: "mods/dlc1_weapons/effects/impact_buzzsaw_ground.lua",
                    door: "mods/dlc1_weapons/effects/impact_buzzsaw_armour.lua",
                },
            },
        },
        {
            ProjectileIncendiary: true,
            DeflectedByShields: false,
            WeaponDamageBonus: 0,
            ProjectileDrag: 0,
            CollidesWithBackgroundMaterials: false,
            BeamTileRate: 0.019999999552965,
            IncendiaryRadius: 80,
            IncendiaryRadiusHeated: 80,
            IncendiaryOffset: 40,
            MaxAge: 1,
            AlwaysIncendiary: true,
            DrawBlurredProjectile: false,
            AntiAirDamage: 0,
            ProjectileType: "mortar",
            BeamScrollRate: 0,
            ProjectileSpriteMipMap: false,
            ProjectileThickness: 2,
            ProjectileDamage: 0,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 10,
                },
            },
            Impact: 10000,
            SaveName: "flamingsmokebomb",
            ProjectileShootDownRadius: 20,
            Effects:
            {
                Deflect:
                {
                    bracing: "effects/bullet_bracing_hit.lua",
                    armour: "effects/bullet_armor_ricochet.lua",
                    shield: "effects/energy_shield_ricochet.lua",
                    backbracing: "effects/bullet_bracing_hit.lua",
                    default: "effects/bullet_bracing_hit.lua",
                    door: "effects/bullet_armor_ricochet.lua",
                },
                Age:
                {
                    t200:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                        Offset: -220,
                        Terminate: true,
                    },
                },
                Impact:
                {
                    foundations:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                        Offset: -220,
                        Terminate: true,
                    },
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    armour:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                        Offset: -220,
                        Terminate: true,
                    },
                    device:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                        Offset: -220,
                        Terminate: true,
                    },
                    backbracing:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                        Offset: -220,
                        Terminate: true,
                    },
                    bracing:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                        Offset: -220,
                        Terminate: true,
                    },
                    default:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                        Offset: -220,
                        Terminate: true,
                    },
                    shield:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                        Offset: -220,
                        Terminate: true,
                    },
                    rocks01:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                        Offset: -220,
                        Terminate: true,
                    },
                    door:
                    {
                        Projectile:
                        {
                            Speed: 0.10000000149012,
                            Type: "smoke",
                            Count: 1,
                            StdDev: 1.1000000238419,
                        },
                        Effect: "mods/dlc1_weapons/effects/smoke_explode.lua",
                        Offset: -220,
                        Terminate: true,
                    },
                },
            },
            ProjectileSprite: "mods/dlc1_weapons/weapons/media/smokebomb",
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileMass: 0.20000000298023,
            CollisionLookaheadDist: 200,
            Projectile:
            {
                Root:
                {
                    Sprite: "mods/dlc1_weapons/weapons/media/smokebomb",
                    Angle: 0,
                    Name: "Root",
                },
            },
            CollidesWithBeams: true,
            ExplodeOnTouch: true,
            SpeedIndicatorFactor: 5,
        },
        {
            DeflectedByShields: false,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            CollidesWithProjectiles: true,
            AntiAirDamage: 20,
            Effects:
            {
                Deflect:
                {
                    default: "effects/energy_shield_ricochet.lua",
                },
                Impact:
                {
                    antiair:
                    {
                        Offset: -120,
                        Terminate: true,
                        Effect: "mods/dlc2/effects/impact_decoy.lua",
                    },
                    default:
                    {
                        Offset: -120,
                        Terminate: true,
                        Effect: "mods/dlc2/effects/impact_decoy.lua",
                    },
                },
            },
            CanBeShotDown: true,
            CollisionLookaheadDist: 120,
            ProjectileThickness: 0.0099999997764826,
            ProjectileDamage: 0,
            DecoyMinTargetAge: 3,
            FieldRadius: 2000,
            Gravity: 245.25,
            ProjectileShootDownRadius: 30,
            ProjectileSpriteMipMap: false,
            Impact: 10000,
            TrailEffect: "mods/dlc2/effects/decoy_fly.lua",
            SaveName: "decoy",
            FieldType: 96,
            Projectile:
            {
                Root:
                {
                    Sprite: "pulse",
                    Name: "Root",
                    ChildrenInFront:
                    {
                        [1]:
                        {
                            Offset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                            Sprite: "pulse_anim",
                            Name: "Pulse",
                            Additive: true,
                            Scale: 2,
                            Angle: 0,
                            Pivot:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                            PivotOffset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                        },
                    },
                    Angle: 0,
                    Pivot:
                    {
                        [1]: 0,
                        [2]: 0.34999999403954,
                    },
                },
            },
            AntiAirHitpoints: 18,
            ExplodeOnTouch: false,
            ProjectileMass: 10,
        },
        {
            ProjectileIncendiary: false,
            DeflectedByShields: true,
            ProjectileDrag: 0,
            ProjectileType: "beam",
            Gravity: 0,
            Impact: 50000,
            ProjectileThickness: 30,
            ImpactSize: 50,
            MaxAge: 1,
            DrawBlurredProjectile: false,
            DrawFromAge: 0.03999999910593,
            AntiAirDamage: 1000000,
            BeamOcclusionDistance: 1200,
            BeamScrollRate: -10,
            BeamOcclusionDistanceWater: 1000,
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileDamage: 10,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0,
                    AntiAir: 1,
                    SaveName: "default",
                    Splash: 0,
                },
                [2]:
                {
                    Ray: 0,
                    SaveName: "thunderbolt",
                    Splash: 0,
                    Direct: 0,
                    Fire: 0,
                    Block: 0,
                    AntiAir: 0,
                },
                [3]:
                {
                    Ray: 0,
                    SaveName: "nighthawk",
                    Splash: 0,
                    Direct: 0,
                    Fire: 0,
                    Block: 0,
                    AntiAir: 0,
                },
            },
            IgnitesBackgroundMaterialsPassing: false,
            IgnitesBackgroundMaterials: false,
            ProjectileShootDownRadius: 50,
            Effects:
            {
                Deflect:
                {
                    armour: "effects/beam_hit.lua",
                    door: "effects/beam_hit.lua",
                    shield: "effects/beam_hit.lua",
                    barrier: "effects/beam_hit.lua",
                    backbarrier: "effects/beam_hit.lua",
                    blastdoor: "effects/beam_hit.lua",
                },
                Impact:
                {
                    foundations: "effects/beam_hit_ground.lua",
                    default: "effects/beam_hit.lua",
                    antiair: "effects/beam_antiair.lua",
                    shield: "effects/energy_absorb.lua",
                    rocks01: "effects/beam_hit_ground.lua",
                },
            },
            SaveName: "dome_barrier",
            ProjectileSprite: "weapons/media/beam",
            ProjectileMass: 1,
            ProjectileSpriteMipMap: true,
            DeflectedByTerrain: false,
            AntiAirHitpoints: 1000000,
            ExplodeOnTouch: false,
            IgnitesBackgroundMaterialsPassingSource: false,
        },
        {
            DeflectedByShields: false,
            ProjectileDrag: 0,
            ProjectileType: "bullet",
            Additive: true,
            CollidesWithProjectiles: false,
            AntiAirDamage: 0,
            BeamScrollRate: 0,
            Effects:
            {
                Deflect:
                {
                    default:
                    {
                        Terminate: true,
                        Effect: "",
                    },
                },
                Age:
                {
                    t200:
                    {
                        Projectile:
                        {
                            Speed: 5,
                            Type: "dome_barrier",
                            Count: 1,
                            StdDev: 0.5,
                        },
                        Terminate: true,
                        Offset: -60,
                        Effect: "mods/dlc2/effects/dome_fx.lua",
                    },
                },
                Impact:
                {
                    default:
                    {
                        Terminate: true,
                        Effect: "",
                    },
                },
            },
            ProjectileThickness: 2,
            ProjectileDamage: 0,
            ScattershotNoTrajectory: true,
            BeamTileRate: 0.019999999552965,
            SpeedIndicatorFactor: 5,
            ProjectileShootDownRadius: 150,
            ProjectileSpriteMipMap: false,
            CanBeShotDown: false,
            ProjectileSprite: "mods/dlc2/weapons/media/energy_bolt.dds",
            SaveName: "dome",
            Impact: 10000,
            Gravity: 9.9999997473788e-05,
            ProjectileMass: 9.9999997473788e-05,
            ExplodeOnTouch: false,
            DrawBlurredProjectile: true,
        },
        {
            ProjectileIncendiary: true,
            DeflectedByShields: true,
            ProjectileDrag: 0,
            ProjectileType: "beam",
            ImpactSize: 50,
            MaxAge: 0.10000000149012,
            DrawBlurredProjectile: false,
            DrawFromAge: 0.03999999910593,
            Impact: 50000,
            BeamOcclusionDistance: 1200,
            BeamScrollRate: -10,
            BeamOcclusionDistanceWater: 1000,
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileDamage: 10,
            IgnitesBackgroundMaterialsPassing: true,
            IgnitesBackgroundMaterials: true,
            ProjectileShootDownRadius: 9,
            Effects:
            {
                Deflect:
                {
                    armour: "effects/beam_hit.lua",
                    door: "effects/beam_hit.lua",
                    shield: "effects/beam_hit.lua",
                    barrier: "effects/beam_hit.lua",
                    backbarrier: "effects/beam_hit.lua",
                    blastdoor: "effects/beam_hit.lua",
                },
                Impact:
                {
                    foundations: "effects/beam_hit_ground.lua",
                    default: "effects/beam_hit.lua",
                    antiair: "effects/beam_antiair.lua",
                    shield: "effects/energy_absorb.lua",
                    rocks01: "effects/beam_hit_ground.lua",
                },
            },
            SaveName: "decoyimpact",
            ProjectileSprite: "weapons/media/beam",
            ProjectileMass: 1,
            ProjectileSpriteMipMap: true,
            DeflectedByTerrain: false,
            ProjectileThickness: 30,
            ExplodeOnTouch: false,
            IgnitesBackgroundMaterialsPassingSource: false,
        },
        {
            DeflectedByShields: false,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            ProjectileSplashDamage: 30,
            MagneticModifierEnemy: 0,
            FlipSpriteFacingLeft: true,
            ProjectileDamage: 120,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "plane",
                    AntiAir: 10,
                },
            },
            FieldRadius: 60,
            ProjectileShootDownRadius: 150,
            Impact: 100000,
            TrailEffect: "mods/dlc2/effects/trail_thunderbolt.lua",
            ProjectileMass: 16,
            FieldType: 4,
            ExplodeOnTouch: true,
            ProjectileIncendiary: true,
            FieldCreatesImpactProjectile: true,
            ProjectileSplashDamageMaxRadius: 150,
            CollidesWithBackgroundMaterials: false,
            Gravity: 9.9999997473788e-05,
            IncendiaryOffset: 50,
            PassesThroughMaterials: false,
            CollidesWithLike: true,
            CollidesWithLikeTag: "plane",
            ProjectileThickness: 2,
            Effects:
            {
                Age:
                {
                    t10000:
                    {
                        Terminate: true,
                        Effect: "mods/dlc2/effects/thunderbolt_banking.lua",
                    },
                },
                Impact:
                {
                    default:
                    {
                        AlignedToNegVel: true,
                        Effect: "mods/dlc2/effects/thunderbolt_explode.lua",
                    },
                    firebeam:
                    {
                        Offset: 0,
                        Effect: "effects/small_arms_flare.lua",
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingthunderbolt",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                        Terminate: true,
                    },
                },
            },
            dlc2_Bombs:
            {
                BankEffect: "mods/dlc2/effects/thunderbolt_banking.lua",
                AIAnticipatesDelivery: true,
                AbortLookahead: 0,
                OffsetX: 0,
                Period: 0.059999998658895,
                Count: 4,
                Projectile: "bomb",
                Speed: 1000,
                OffsetY: 180,
                BankingLookahead: 2500,
                FireEffect: "mods/dlc2/effects/bomb_release.lua",
            },
            IncendiaryRadius: 80,
            AntiAirHitpoints: 150,
            ProjectileSpriteMipMap: false,
            DetonatesOnExpiry: true,
            ProjectileSprite: "mods/dlc2/weapons/media/thunderbolt_jet.dds",
            SaveName: "thunderbolt",
            MagneticModifierFriendly: 0,
            FieldIntersectionNearest: false,
            CollidesWithBeams: true,
            CanBeShotDown: true,
            DrawBlurredProjectile: false,
        },
        {
            ProjectileIncendiary: false,
            DeflectedByShields: false,
            ProjectileSplashDamageMaxRadius: 130,
            DisableShields: true,
            DrawFromAge: 0.03999999910593,
            MaxAge: 5,
            ProjectileSplashDamage: 90,
            DetonatesOnExpiry: true,
            ProjectileSprite: "mods/dlc2/weapons/media/bomb.dds",
            DrawBlurredProjectile: false,
            BeamScrollRate: 0,
            ProjectileType: "mortar",
            ProjectileThickness: 4,
            ProjectileDamage: 60,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileDrag: 0.5,
            ProjectileShootDownRadius: 9,
            Impact: 200000,
            BeamTileRate: 0.019999999552965,
            TrailEffect: "effects/mortar_trail.lua",
            ProjectileMass: 20,
            SaveName: "bomb",
            WeaponDamageBonus: 12,
            CollidesWithBeams: true,
            ExplodeOnTouch: true,
            Effects:
            {
                Impact:
                {
                    default: "mods/dlc2/effects/impact_bombs.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Effect: "effects/small_arms_flare.lua",
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingbomb",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                        Terminate: true,
                    },
                },
            },
        },
        {
            DeflectedByShields: false,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            ProjectileSplashDamage: 30,
            MagneticModifierEnemy: 0,
            FlipSpriteFacingLeft: true,
            ProjectileDamage: 120,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "plane",
                    AntiAir: 10,
                },
            },
            FieldRadius: 60,
            ProjectileShootDownRadius: 150,
            Impact: 100000,
            TrailEffect: "mods/dlc2/effects/trail_nighthawk.lua",
            ProjectileMass: 16,
            FieldType: 4,
            ExplodeOnTouch: true,
            ProjectileIncendiary: true,
            FieldCreatesImpactProjectile: true,
            ProjectileSplashDamageMaxRadius: 150,
            CollidesWithBackgroundMaterials: false,
            Gravity: 9.9999997473788e-05,
            IncendiaryOffset: 50,
            CollidesWithLike: true,
            CollidesWithLikeTag: "plane",
            ProjectileThickness: 2,
            Effects:
            {
                Age:
                {
                    t10000:
                    {
                        Terminate: true,
                        Effect: "mods/dlc2/effects/nighthawk_banking.lua",
                    },
                },
                Impact:
                {
                    default:
                    {
                        AlignedToVel: true,
                        Effect: "mods/dlc2/effects/nighthawk_explode.lua",
                    },
                    firebeam:
                    {
                        Offset: 0,
                        Effect: "effects/small_arms_flare.lua",
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingnighthawk",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                        Terminate: true,
                    },
                },
            },
            dlc2_Bombs:
            {
                BankEffect: "mods/dlc2/effects/nighthawk_banking.lua",
                AIAnticipatesDelivery: true,
                AbortLookahead: 0,
                AutoDrop:
                {
                    Delay2: 0.40000000596046,
                    Delay1: 0.050000000745058,
                    TestDistX: 9200,
                    Debug: false,
                    DelayDist1: 3500,
                    DelayDist2: 5800,
                    TestDistY: 10000,
                },
                OffsetX: 0,
                Period: 0.059999998658895,
                Count: 1,
                Projectile: "paveway",
                Speed: 1000,
                OffsetY: 180,
                BankingLookahead: 2500,
                FireEffect: "mods/dlc2/effects/bomb_release.lua",
            },
            IncendiaryRadius: 100,
            AntiAirHitpoints: 150,
            ProjectileSpriteMipMap: false,
            DetonatesOnExpiry: true,
            ProjectileSprite: "mods/dlc2/weapons/media/nighthawk_jet.dds",
            SaveName: "nighthawk",
            MagneticModifierFriendly: 0,
            FieldIntersectionNearest: false,
            CollidesWithBeams: true,
            CanBeShotDown: true,
            DrawBlurredProjectile: false,
        },
        {
            DeflectedByShields: false,
            ProjectileDrag: 0.5,
            ProjectileType: "mortar",
            MaxAge: 5,
            ProjectileSplashDamage: 40,
            BeamScrollRate: 0,
            StructureSplashDamage: 240,
            ProjectileDamage: 450,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "bracing",
                    Splash: 5,
                },
                [2]:
                {
                    SaveName: "backbracing",
                    Splash: 5,
                },
            },
            IncendiaryOnPenetration: false,
            ProjectileShootDownRadius: 9,
            Impact: 20000,
            TrailEffect: "mods/dlc2/effects/deck_gun_projectile_fly.lua",
            ProjectileMass: 16,
            WeaponDamageBonus: 12,
            ExplodeOnTouch: false,
            ProjectileIncendiary: true,
            ProjectileSplashDamageMaxRadius: 230,
            BeamTileRate: 0.019999999552965,
            IncendiaryRadius: 250,
            DrawFromAge: 0.03999999910593,
            PassesThroughMaterials: false,
            StructureSplashDamageMaxRadius: 200,
            IncendiaryOnDeviceCollision: false,
            AlwaysIncendiary: true,
            DestroyShields: true,
            ProjectileThickness: 10,
            DetonatesOnExpiry: true,
            MomentumThreshold:
            {
                armour:
                {
                    Reflect: 0,
                    Penetrate: 4000,
                },
                door:
                {
                    Reflect: 0,
                    Penetrate: 4000,
                },
            },
            CanBeShotDown: true,
            ProjectileIncendiaryDevicePlatform: false,
            DrawBlurredProjectile: false,
            ProjectileSpriteMipMap: false,
            SpeedIndicatorFactor: 0.25,
            ProjectileSprite: "mods/dlc2/weapons/media/paveway.dds",
            SaveName: "paveway",
            ProjectileSplashMaxForce: 10000,
            AntiAirHitpoints: 24,
            CollidesWithBeams: true,
            IncendiaryRadiusHeated: 300,
            Effects:
            {
                Impact:
                {
                    default: "mods/dlc2/effects/impact_paveway.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Effect: "effects/small_arms_flare.lua",
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingpaveway",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                        Terminate: true,
                    },
                },
            },
        },
        {
            DeflectedByShields: false,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            MaxAge: 120,
            ProjectileSplashDamage: 40,
            MagneticModifierEnemy: 0.10000000149012,
            BeamScrollRate: 0,
            ProjectileDamage: 400,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0,
                    SaveName: "bracing",
                    Splash: 5,
                },
                [2]:
                {
                    Direct: 0,
                    SaveName: "backbracing",
                    Splash: 5,
                },
                [3]:
                {
                    Direct: 0.28000000119209,
                    SaveName: "shrapnel",
                    Splash: 0,
                },
                [4]:
                {
                    SaveName: "laser",
                    Block: 200,
                },
                [5]:
                {
                    Direct: 0,
                    Block: 200,
                    SaveName: "firebeam",
                    Splash: 0,
                },
                [6]:
                {
                    Direct: 0,
                    Block: 200,
                    SaveName: "magnabeam",
                    Splash: 0,
                },
            },
            FieldRadius: 60,
            ProjectileShootDownRadius: 40,
            Impact: 20000,
            TrailEffect: "mods/dlc2/effects/deck_gun_projectile_fly.lua",
            ProjectileMass: 16,
            FieldType: 4,
            ExplodeOnTouch: true,
            FieldCreatesImpactProjectile: true,
            ProjectileSplashDamageMaxRadius: 170,
            CollidesWithBackgroundMaterials: false,
            Gravity: 200,
            PassesThroughMaterials: false,
            CollidesWithLike: false,
            Effects:
            {
                Deflect:
                {
                    shield: "effects/energy_shield_ricochet.lua",
                    armour: "effects/armor_ricochet.lua",
                    door: "effects/armor_ricochet.lua",
                },
                Impact:
                {
                    antiair: "mods/dlc2/effects/explosion_airburst.lua",
                    firebeam:
                    {
                        Offset: 0,
                        Effect: "effects/small_arms_flare.lua",
                        KeepHitpointLoss: true,
                        Splash: false,
                        Projectile:
                        {
                            Type: "flamingturret",
                            Count: 1,
                            StdDev: 0,
                        },
                        PosT: 1,
                        KeepLifespan: true,
                        Terminate: true,
                    },
                    default: "mods/dlc2/effects/impact_turret.lua",
                    shield: "effects/impact_shield.lua",
                },
            },
            ProjectileThickness: 7,
            SpeedIndicatorFactor: 0.25,
            DetonatesOnExpiry: true,
            BeamTileRate: 0.019999999552965,
            CollidesWithBeams: true,
            MagneticModifierFriendly: 0.10000000149012,
            ProjectileSpriteMipMap: false,
            CanBeShotDown: true,
            ProjectileSprite: "mods/dlc2/weapons/media/turret",
            SaveName: "turret",
            ProjectileSplashMaxForce: 10000,
            FieldIntersectionNearest: false,
            AntiAirHitpoints: 50,
            DestroyShields: true,
            DrawBlurredProjectile: false,
        },
        {
            DetonatesOnExpiry: true,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            MaxAge: 120,
            ProjectileSplashDamage: 0,
            MagneticModifierEnemy: 0.10000000149012,
            BeamScrollRate: 0,
            ProjectileDamage: 10,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0,
                    SaveName: "bracing",
                    Splash: 5,
                },
                [2]:
                {
                    Direct: 0,
                    SaveName: "backbracing",
                    Splash: 5,
                },
                [3]:
                {
                    Direct: 0.28000000119209,
                    SaveName: "shrapnel",
                    Splash: 0,
                },
                [4]:
                {
                    SaveName: "laser",
                    Block: 200,
                },
                [5]:
                {
                    Direct: 0,
                    Block: 200,
                    SaveName: "firebeam",
                    Splash: 0,
                },
                [6]:
                {
                    Direct: 0,
                    Block: 200,
                    SaveName: "magnabeam",
                    Splash: 0,
                },
            },
            FieldRadius: 60,
            ProjectileShootDownRadius: 40,
            Impact: 20000,
            TrailEffect: "mods/dlc2/effects/ol_sweep_projectile_fly.lua",
            ProjectileMass: 16,
            FieldType: 4,
            ExplodeOnTouch: true,
            FieldCreatesImpactProjectile: true,
            ProjectileSplashDamageMaxRadius: 0,
            CollidesWithBackgroundMaterials: false,
            Gravity: 200,
            ImpactSize: 100,
            PassesThroughMaterials: false,
            CollidesWithLike: false,
            Projectile:
            {
                Root:
                {
                    Sprite: "mods/dlc2/weapons/media/ol_marker_sweep.dds",
                    Name: "Root",
                    ChildrenInFront:
                    {
                        [1]:
                        {
                            Offset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                            Name: "Pulse",
                            Sprite: "ol_sweep_projectile",
                            Scale: 2,
                            Angle: 0,
                            Pivot:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                            PivotOffset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                        },
                    },
                    Angle: 0,
                    Pivot:
                    {
                        [1]: 0,
                        [2]: 0.34999999403954,
                    },
                },
            },
            dlc2_orbital:
            {
                LeadTime: 0.5,
                TestExcludesNeutral: true,
                Speed: 125,
                Ammo: "ol_beam_sweep",
                Delay: 3,
                Duration: 5,
            },
            BeamTileRate: 0.019999999552965,
            DrawBlurredProjectile: false,
            ProjectileThickness: 7,
            DestroyShields: false,
            AntiAirHitpoints: 50,
            DoesNotReflectDuringFadeOut: true,
            MagneticModifierFriendly: 0.10000000149012,
            CanBeShotDown: true,
            ProjectileSpriteMipMap: false,
            DeflectedByShields: false,
            ProjectileSprite: "mods/dlc2/weapons/media/ol_marker_sweep.dds",
            SaveName: "ol_marker_sweep",
            ProjectileSplashMaxForce: 10000,
            FieldIntersectionNearest: false,
            CollidesWithBeams: true,
            SpeedIndicatorFactor: 0.25,
            Effects:
            {
                Impact:
                {
                    antiair: "mods/dlc2/effects/explosion_airburst_electrical.lua",
                    default: "mods/dlc2/effects/impact_ol_projectile_sweep.lua",
                },
            },
        },
        {
            DetonatesOnExpiry: true,
            ProjectileDrag: 0,
            dlc2_orbital:
            {
                TestExcludesNeutral: true,
                LeadTime: 0,
                TestOffset: 90,
                Speed: 0,
                Ammo: "ol_beam_focus",
                Delay: 3,
                Duration: 5,
            },
            MaxAge: 120,
            ProjectileSplashDamage: 0,
            MagneticModifierEnemy: 0.10000000149012,
            BeamScrollRate: 0,
            ProjectileDamage: 10,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0,
                    SaveName: "bracing",
                    Splash: 5,
                },
                [2]:
                {
                    Direct: 0,
                    SaveName: "backbracing",
                    Splash: 5,
                },
                [3]:
                {
                    Direct: 0.28000000119209,
                    SaveName: "shrapnel",
                    Splash: 0,
                },
                [4]:
                {
                    SaveName: "laser",
                    Block: 200,
                },
                [5]:
                {
                    Direct: 0,
                    Block: 200,
                    SaveName: "firebeam",
                    Splash: 0,
                },
                [6]:
                {
                    Direct: 0,
                    Block: 200,
                    SaveName: "magnabeam",
                    Splash: 0,
                },
            },
            FieldRadius: 60,
            ProjectileShootDownRadius: 40,
            Impact: 20000,
            TrailEffect: "mods/dlc2/effects/ol_focus_projectile_fly.lua",
            ProjectileMass: 16,
            FieldType: 4,
            ExplodeOnTouch: true,
            FieldCreatesImpactProjectile: true,
            ProjectileSplashDamageMaxRadius: 0,
            CollidesWithBackgroundMaterials: false,
            BeamTileRate: 0.019999999552965,
            ImpactSize: 100,
            PassesThroughMaterials: false,
            CollidesWithLike: false,
            Effects:
            {
                Impact:
                {
                    antiair: "mods/dlc2/effects/explosion_airburst_electrical.lua",
                    default: "mods/dlc2/effects/impact_ol_projectile.lua",
                },
            },
            SpeedIndicatorFactor: 0.25,
            CollidesWithBeams: true,
            FieldIntersectionNearest: false,
            ProjectileThickness: 7,
            ProjectileType: "mortar",
            SaveName: "ol_marker_focus",
            DoesNotReflectDuringFadeOut: true,
            MagneticModifierFriendly: 0.10000000149012,
            DeflectedByShields: false,
            ProjectileSpriteMipMap: false,
            CanBeShotDown: true,
            ProjectileSprite: "mods/dlc2/weapons/media/ol_marker_sweep.dds",
            DrawBlurredProjectile: false,
            ProjectileSplashMaxForce: 10000,
            Projectile:
            {
                Root:
                {
                    Sprite: "mods/dlc2/weapons/media/ol_marker_focus.dds",
                    Name: "Root",
                    ChildrenInFront:
                    {
                        [1]:
                        {
                            Offset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                            Name: "Pulse",
                            Sprite: "ol_focus_projectile",
                            Scale: 2,
                            Angle: 0,
                            Pivot:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                            PivotOffset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                        },
                    },
                    Angle: 0,
                    Pivot:
                    {
                        [1]: 0,
                        [2]: 0.34999999403954,
                    },
                },
            },
            AntiAirHitpoints: 50,
            DestroyShields: false,
            Gravity: 200,
        },
        {
            ProjectileIncendiary: true,
            DeflectedByShields: true,
            ProjectileDrag: 0,
            ProjectileType: "beam",
            BeamCollisionThickness: `loadstring(Base64dec(
                [[G0x1YVEAAQQEBAQAAwAAAD0 / ALkDAAC7AwAAAAEABQcAAABFAAAAhUAAAMAAAAABgQAAXQAAAl4AAAAeAIAAAwAAAAQRAAAASW50ZXJwb2xhdGVUYWJsZQAECgAAAEJlYW1UYWJsZQADAACAQAAAAAAAAAAAAAAAAAAAAAA: ]]
            ))`,
            BeamDamage: `loadstring(Base64dec(
                [[G0x1YVEAAQQEBAQAAwAAAD0 / ALUDAAC3AwAAAAEABQcAAABFAAAAhUAAAMAAAAABgQAAXQAAAl4AAAAeAIAAAwAAAAQRAAAASW50ZXJwb2xhdGVUYWJsZQAECgAAAEJlYW1UYWJsZQADAABAQAAAAAAAAAAAAAAAAAAAAAA: ]]
            ))`,
            BeamThickness: `loadstring(Base64dec(
                [[G0x1YVEAAQQEBAQAAwAAAD0 / ALEDAACzAwAAAAEABQcAAABFAAAAhUAAAMAAAAABgQAAXQAAAl4AAAAeAIAAAwAAAAQRAAAASW50ZXJwb2xhdGVUYWJsZQAECgAAAEJlYW1UYWJsZQADAAAAQAAAAAAAAAAAAAAAAAAAAAA: ]]
            ))`,
            BeamTileRate: 576,
            Beam:
            {
                CollisionSprite:
                {
                    Sprite: "ol_collision",
                    Scale: 0.5,
                    ThicknessFunction: "BeamCollisionThickness",
                    Additive: true,
                },
                Sprites:
                {
                    [1]:
                    {
                        Sprite: "ol_beam",
                        TileRate: 1200,
                        ThicknessFunction: "BeamThickness",
                        ScrollRate: -2,
                    },
                    [2]:
                    {
                        Sprite: "ol_beam4",
                        ThicknessFunction: "BeamThickness",
                        ScrollRate: -2,
                        TileRate: 1200,
                        Additive: true,
                    },
                    [3]:
                    {
                        Sprite: "ol_beam6",
                        ThicknessFunction: "BeamThickness",
                        ScrollRate: -3,
                        TileRate: 2400,
                        Additive: true,
                    },
                    [4]:
                    {
                        Sprite: "ol_beam2",
                        ThicknessFunction: "BeamThickness",
                        ScrollRate: -6,
                        TileRate: 2400,
                        Additive: true,
                    },
                    [5]:
                    {
                        Sprite: "ol_beam5",
                        ThicknessFunction: "BeamThickness",
                        ScrollRate: -7,
                        TileRate: 1800,
                        Additive: true,
                    },
                },
            },
            DeflectedByTerrain: false,
            BeamOcclusionDistance: 1200,
            BeamScrollRate: -15,
            Effects:
            {
                Deflect:
                {
                    shield: "mods/dlc2/effects/ol_beam_hit.lua",
                    armour: "mods/dlc2/effects/ol_beam_hit.lua",
                    door: "mods/dlc2/effects/ol_beam_hit.lua",
                },
                Impact:
                {
                    foundations: "mods/dlc2/effects/ol_beam_hit.lua",
                    default: "mods/dlc2/effects/ol_beam_hit.lua",
                    rocks01: "mods/dlc2/effects/ol_beam_hit.lua",
                    whitecaps:
                    {
                        Terminate: false,
                        Effect: "mods/dlc2_oceans_base/effects/splash_large.lua",
                    },
                    antiair: "effects/beam_antiair.lua",
                    shield: "effects/energy_absorb.lua",
                },
            },
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileDamage: 10,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "machinegun",
                    AntiAir: 0,
                },
                [2]:
                {
                    SaveName: "minigun",
                    AntiAir: 0,
                },
                [3]:
                {
                    SaveName: "sniper",
                    AntiAir: 0,
                },
                [4]:
                {
                    SaveName: "sniper2",
                    AntiAir: 0,
                },
                [5]:
                {
                    SaveName: "cannon",
                    AntiAir: 0,
                },
            },
            ProjectileThickness: 30,
            BeamOcclusionDistanceWater: 1000000,
            Impact: 50000,
            ProjectileSpriteMipMap: true,
            ProjectileMass: 1,
            ProjectileSprite: "mods/dlc2/weapons/media/ol_beam.dds",
            SaveName: "ol_beam_sweep",
            DrawBlurredProjectile: false,
            IgnitesBackgroundMaterials: true,
            IgnitesBackgroundMaterialsPassing: true,
            ExplodeOnTouch: false,
            IgnitesBackgroundMaterialsPassingSource: false,
        },
        {
            ProjectileIncendiary: true,
            DeflectedByShields: true,
            ProjectileDrag: 0,
            ProjectileType: "beam",
            BeamCollisionThickness: `loadstring(Base64dec(
                [[G0x1YVEAAQQEBAQAAwAAAD0 / ABkEAAAbBAAAAAEABQcAAABFAAAAhUAAAMAAAAABgQAAXQAAAl4AAAAeAIAAAwAAAAQRAAAASW50ZXJwb2xhdGVUYWJsZQAECgAAAEJlYW1UYWJsZQADAACAQAAAAAAAAAAAAAAAAAAAAAA: ]]
            ))`,
            BeamDamage: `loadstring(Base64dec(
                [[G0x1YVEAAQQEBAQAAwAAAD0 / ABUEAAAXBAAAAAEABQcAAABFAAAAhUAAAMAAAAABgQAAXQAAAl4AAAAeAIAAAwAAAAQRAAAASW50ZXJwb2xhdGVUYWJsZQAECgAAAEJlYW1UYWJsZQADAABAQAAAAAAAAAAAAAAAAAAAAAA: ]]
            ))`,
            BeamThickness: `loadstring(Base64dec(
                [[G0x1YVEAAQQEBAQAAwAAAD0 / ABEEAAATBAAAAAEABQcAAABFAAAAhUAAAMAAAAABgQAAXQAAAl4AAAAeAIAAAwAAAAQRAAAASW50ZXJwb2xhdGVUYWJsZQAECgAAAEJlYW1UYWJsZQADAAAAQAAAAAAAAAAAAAAAAAAAAAA: ]]
            ))`,
            BeamTileRate: 576,
            Beam:
            {
                CollisionSprite:
                {
                    Sprite: "ol_focus_collision",
                    Scale: 0.75,
                    ThicknessFunction: "BeamCollisionThickness",
                    Additive: true,
                },
                Sprites:
                {
                    [1]:
                    {
                        Sprite: "ol_beam_focus",
                        TileRate: 1200,
                        ThicknessFunction: "BeamThickness",
                        ScrollRate: -2,
                    },
                    [2]:
                    {
                        Sprite: "ol_beam_focus4",
                        ThicknessFunction: "BeamThickness",
                        ScrollRate: -2,
                        TileRate: 1200,
                        Additive: true,
                    },
                    [3]:
                    {
                        Sprite: "ol_beam_focus6",
                        ThicknessFunction: "BeamThickness",
                        ScrollRate: -3,
                        TileRate: 2400,
                        Additive: true,
                    },
                    [4]:
                    {
                        Sprite: "ol_beam_focus2",
                        ThicknessFunction: "BeamThickness",
                        ScrollRate: -3,
                        TileRate: 2400,
                        Additive: true,
                    },
                    [5]:
                    {
                        Sprite: "ol_beam_focus5",
                        ThicknessFunction: "BeamThickness",
                        ScrollRate: 3,
                        TileRate: 1800,
                        Additive: true,
                    },
                },
            },
            DeflectedByTerrain: false,
            BeamOcclusionDistance: 1200,
            BeamScrollRate: -15,
            Effects:
            {
                Deflect:
                {
                    shield: "mods/dlc2/effects/ol_beam_focus_hit.lua",
                    armour: "mods/dlc2/effects/ol_beam_focus_hit.lua",
                    door: "mods/dlc2/effects/ol_beam_focus_hit.lua",
                },
                Impact:
                {
                    foundations: "mods/dlc2/effects/ol_beam_focus_hit.lua",
                    default: "mods/dlc2/effects/ol_beam_focus_hit.lua",
                    rocks01: "mods/dlc2/effects/ol_beam_focus_hit.lua",
                    whitecaps:
                    {
                        Terminate: false,
                        Effect: "mods/dlc2_oceans_base/effects/splash_large.lua",
                    },
                    antiair: "effects/beam_antiair.lua",
                    shield: "effects/energy_absorb.lua",
                },
            },
            SpeedIndicatorFactor: 0.050000000745058,
            ProjectileDamage: 10,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "machinegun",
                    AntiAir: 0,
                },
                [2]:
                {
                    SaveName: "minigun",
                    AntiAir: 0,
                },
                [3]:
                {
                    SaveName: "sniper",
                    AntiAir: 0,
                },
                [4]:
                {
                    SaveName: "sniper2",
                    AntiAir: 0,
                },
                [5]:
                {
                    SaveName: "cannon",
                    AntiAir: 0,
                },
            },
            ProjectileThickness: 30,
            BeamOcclusionDistanceWater: 1000000,
            Impact: 50000,
            ProjectileSpriteMipMap: true,
            ProjectileMass: 1,
            ProjectileSprite: "mods/dlc2/weapons/media/ol_beam_focus.dds",
            SaveName: "ol_beam_focus",
            DrawBlurredProjectile: false,
            IgnitesBackgroundMaterials: true,
            IgnitesBackgroundMaterialsPassing: true,
            ExplodeOnTouch: false,
            IgnitesBackgroundMaterialsPassingSource: false,
        },
        {
            DeflectedByShields: false,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            MaxAge: 120,
            ProjectileSplashDamage: 40,
            MagneticModifierEnemy: 0.10000000149012,
            BeamScrollRate: 0,
            AlwaysIncendiary: true,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0,
                    SaveName: "bracing",
                    Splash: 5,
                },
                [2]:
                {
                    Direct: 0,
                    SaveName: "backbracing",
                    Splash: 5,
                },
                [3]:
                {
                    Direct: 0.28000000119209,
                    SaveName: "shrapnel",
                    Splash: 0,
                },
                [4]:
                {
                    SaveName: "laser",
                    Block: 200,
                },
                [5]:
                {
                    Direct: 0,
                    Block: 200,
                    SaveName: "firebeam",
                    Splash: 0,
                },
                [6]:
                {
                    Direct: 0,
                    Block: 200,
                    SaveName: "magnabeam",
                    Splash: 0,
                },
            },
            FieldRadius: 60,
            IncendiaryOnPenetration: false,
            ProjectileShootDownRadius: 60,
            Impact: 20000,
            TrailEffect: "mods/dlc2/effects/flaming_boulder_trail.lua",
            ProjectileMass: 16,
            FieldType: 4,
            ExplodeOnTouch: true,
            ProjectileIncendiary: true,
            FieldCreatesImpactProjectile: true,
            ProjectileSplashDamageMaxRadius: 170,
            CollidesWithBackgroundMaterials: false,
            Gravity: 200,
            IncendiaryRadius: 150,
            PassesThroughMaterials: false,
            CollidesWithLike: false,
            Effects:
            {
                Deflect:
                {
                    shield: "effects/energy_shield_ricochet.lua",
                    armour: "effects/armor_ricochet.lua",
                    door: "effects/armor_ricochet.lua",
                },
                Impact:
                {
                    shield: "effects/impact_shield.lua",
                    default: "mods/dlc2/effects/impact_paveway.lua",
                },
            },
            SpeedIndicatorFactor: 0.25,
            CanBeShotDown: true,
            ProjectileThickness: 10,
            ProjectileDamage: 200,
            BeamTileRate: 0.019999999552965,
            CollidesWithBeams: true,
            MagneticModifierFriendly: 0.10000000149012,
            DestroyShields: true,
            ProjectileSpriteMipMap: false,
            DetonatesOnExpiry: true,
            ProjectileSprite: "mods/dlc2/weapons/media/flaming_boulder",
            SaveName: "flaming_boulder",
            ProjectileSplashMaxForce: 10000,
            FieldIntersectionNearest: false,
            AntiAirHitpoints: 30,
            IncendiaryRadiusHeated: 200,
            DrawBlurredProjectile: false,
        },
        {
            DetonatesOnExpiry: true,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            MaxAge: 10,
            ProjectileSplashDamage: 30,
            MagneticModifierEnemy: 0,
            FlipSpriteFacingLeft: true,
            ProjectileDamage: 500,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "plane",
                    AntiAir: 10,
                },
            },
            FieldRadius: 60,
            ProjectileShootDownRadius: 150,
            Impact: 100000,
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileMass: 16,
            FieldType: 4,
            ExplodeOnTouch: false,
            ProjectileIncendiary: true,
            FieldCreatesImpactProjectile: true,
            ProjectileSplashDamageMaxRadius: 200,
            CollidesWithBackgroundMaterials: false,
            Gravity: 490.5,
            IncendiaryRadius: 60,
            PassesThroughMaterials: false,
            CollidesWithLike: true,
            CollisionLookaheadDist: 0,
            CollidesWithLikeTag: "plane",
            AntiAirHitpoints: 150,
            ProjectileThickness: 2,
            AlwaysIncendiary: true,
            DrawBlurredProjectile: false,
            CanBeShotDown: true,
            CollidesWithBeams: true,
            IncendiaryOffset: 30,
            ProjectileSpriteMipMap: false,
            MagneticModifierFriendly: 0,
            ProjectileSprite: "mods/dlc2/weapons/media/thunderbolt_jet.dds",
            SaveName: "flamingthunderbolt",
            DeflectedByShields: false,
            FieldIntersectionNearest: false,
            IncendiaryRadiusHeated: 60,
            Effects:
            {
                Age:
                {
                    t10000:
                    {
                        Effect: "mods/dlc2/effects/thunderbolt_explode.lua",
                        AlignedToNegVel: true,
                    },
                },
                Impact:
                {
                    default:
                    {
                        Effect: "mods/dlc2/effects/thunderbolt_explode.lua",
                        AlignedToNegVel: true,
                    },
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                },
            },
        },
        {
            DetonatesOnExpiry: true,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            MaxAge: 10,
            ProjectileSplashDamage: 30,
            MagneticModifierEnemy: 0,
            FlipSpriteFacingLeft: true,
            ProjectileDamage: 600,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "plane",
                    AntiAir: 10,
                },
            },
            FieldRadius: 60,
            ProjectileShootDownRadius: 150,
            Impact: 100000,
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileMass: 16,
            FieldType: 4,
            ExplodeOnTouch: false,
            ProjectileIncendiary: true,
            FieldCreatesImpactProjectile: true,
            ProjectileSplashDamageMaxRadius: 250,
            CollidesWithBackgroundMaterials: false,
            Gravity: 490.5,
            IncendiaryRadius: 80,
            CollidesWithLike: true,
            CollisionLookaheadDist: 0,
            CollidesWithLikeTag: "plane",
            AntiAirHitpoints: 150,
            ProjectileThickness: 2,
            AlwaysIncendiary: true,
            DrawBlurredProjectile: false,
            CanBeShotDown: true,
            CollidesWithBeams: true,
            IncendiaryOffset: 40,
            ProjectileSpriteMipMap: false,
            MagneticModifierFriendly: 0,
            ProjectileSprite: "mods/dlc2/weapons/media/nighthawk_jet.dds",
            SaveName: "flamingnighthawk",
            DeflectedByShields: false,
            FieldIntersectionNearest: false,
            IncendiaryRadiusHeated: 80,
            Effects:
            {
                Age:
                {
                    t10000:
                    {
                        Effect: "mods/dlc2/effects/nighthawk_explode.lua",
                        AlignedToVel: true,
                    },
                },
                Impact:
                {
                    default:
                    {
                        Effect: "mods/dlc2/effects/nighthawk_explode.lua",
                        AlignedToVel: true,
                    },
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                },
            },
        },
        {
            ProjectileIncendiary: true,
            DeflectedByShields: false,
            ProjectileSplashDamageMaxRadius: 130,
            IncendiaryOffset: 30,
            ProjectileType: "mortar",
            IncendiaryRadius: 60,
            IncendiaryRadiusHeated: 60,
            AlwaysIncendiary: true,
            DrawFromAge: 0.03999999910593,
            MaxAge: 2,
            ProjectileSplashDamage: 119.70000457764,
            Effects:
            {
                Impact:
                {
                    default: "mods/dlc2/effects/impact_bombs.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                },
            },
            SpeedIndicatorFactor: 0.050000000745058,
            DetonatesOnExpiry: true,
            BeamScrollRate: 0,
            ProjectileDrag: 0.5,
            ProjectileThickness: 4,
            ProjectileDamage: 60,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "smoke",
                    AntiAir: 0,
                },
            },
            SaveName: "flamingbomb",
            ProjectileMass: 20,
            ProjectileShootDownRadius: 9,
            Impact: 200000,
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileSprite: "mods/dlc2/weapons/media/bomb.dds",
            DrawBlurredProjectile: false,
            BeamTileRate: 0.019999999552965,
            WeaponDamageBonus: 12,
            CollidesWithBeams: true,
            ExplodeOnTouch: true,
            DisableShields: true,
        },
        {
            DetonatesOnExpiry: true,
            ProjectileDrag: 0.5,
            ProjectileType: "mortar",
            MaxAge: 2,
            ProjectileSplashDamage: 53.200000762939,
            BeamScrollRate: 0,
            StructureSplashDamage: 240,
            AlwaysIncendiary: true,
            DamageMultiplier:
            {
                [1]:
                {
                    SaveName: "bracing",
                    Splash: 5,
                },
                [2]:
                {
                    SaveName: "backbracing",
                    Splash: 5,
                },
            },
            IncendiaryOnPenetration: false,
            ProjectileShootDownRadius: 9,
            Impact: 20000,
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileMass: 16,
            WeaponDamageBonus: 12,
            ExplodeOnTouch: false,
            MomentumThreshold:
            {
                armour:
                {
                    Reflect: 0,
                    Penetrate: 4000,
                },
                door:
                {
                    Reflect: 0,
                    Penetrate: 4000,
                },
            },
            ProjectileSplashDamageMaxRadius: 230,
            BeamTileRate: 0.019999999552965,
            IncendiaryRadius: 270,
            StructureSplashDamageMaxRadius: 200,
            PassesThroughMaterials: false,
            IncendiaryOffset: 135,
            Effects:
            {
                Impact:
                {
                    default: "mods/dlc2/effects/impact_paveway.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                },
            },
            DestroyShields: true,
            CollidesWithBeams: true,
            ProjectileThickness: 10,
            IncendiaryOnDeviceCollision: false,
            CanBeShotDown: true,
            SaveName: "flamingpaveway",
            ProjectileIncendiaryDevicePlatform: false,
            SpeedIndicatorFactor: 0.25,
            ProjectileIncendiary: true,
            ProjectileSpriteMipMap: false,
            DeflectedByShields: false,
            ProjectileSprite: "mods/dlc2/weapons/media/paveway.dds",
            DrawBlurredProjectile: false,
            ProjectileSplashMaxForce: 10000,
            DrawFromAge: 0.03999999910593,
            AntiAirHitpoints: 24,
            IncendiaryRadiusHeated: 270,
            ProjectileDamage: 450,
        },
        {
            DetonatesOnExpiry: true,
            ProjectileDrag: 0,
            ProjectileType: "mortar",
            MaxAge: 3,
            ProjectileSplashDamage: 53.200000762939,
            MagneticModifierEnemy: 0.10000000149012,
            BeamScrollRate: 0,
            ProjectileDamage: 400,
            DamageMultiplier:
            {
                [1]:
                {
                    Direct: 0,
                    SaveName: "bracing",
                    Splash: 5,
                },
                [2]:
                {
                    Direct: 0,
                    SaveName: "backbracing",
                    Splash: 5,
                },
                [3]:
                {
                    Direct: 0.28000000119209,
                    SaveName: "shrapnel",
                    Splash: 0,
                },
                [4]:
                {
                    SaveName: "laser",
                    Block: 200,
                },
                [5]:
                {
                    Direct: 0,
                    Block: 200,
                    SaveName: "firebeam",
                    Splash: 0,
                },
                [6]:
                {
                    Direct: 0,
                    Block: 200,
                    SaveName: "magnabeam",
                    Splash: 0,
                },
            },
            FieldRadius: 60,
            ProjectileShootDownRadius: 40,
            Impact: 20000,
            TrailEffect: "mods/weapon_pack/effects/flaming_trail.lua",
            ProjectileMass: 16,
            FieldType: 4,
            ExplodeOnTouch: true,
            ProjectileIncendiary: true,
            FieldCreatesImpactProjectile: true,
            ProjectileSplashDamageMaxRadius: 170,
            CollidesWithBackgroundMaterials: false,
            Gravity: 200,
            IncendiaryRadius: 80,
            PassesThroughMaterials: false,
            CollidesWithLike: false,
            IncendiaryOffset: 40,
            SpeedIndicatorFactor: 0.25,
            AlwaysIncendiary: true,
            DrawBlurredProjectile: false,
            ProjectileThickness: 7,
            DestroyShields: true,
            AntiAirHitpoints: 50,
            BeamTileRate: 0.019999999552965,
            MagneticModifierFriendly: 0.10000000149012,
            CanBeShotDown: true,
            ProjectileSpriteMipMap: false,
            DeflectedByShields: false,
            ProjectileSprite: "mods/dlc2/weapons/media/turret",
            SaveName: "flamingturret",
            ProjectileSplashMaxForce: 10000,
            FieldIntersectionNearest: false,
            CollidesWithBeams: true,
            IncendiaryRadiusHeated: 80,
            Effects:
            {
                Deflect:
                {
                    shield: "effects/energy_shield_ricochet.lua",
                    armour: "effects/armor_ricochet.lua",
                    door: "effects/armor_ricochet.lua",
                },
                Impact:
                {
                    antiair: "mods/dlc2/effects/explosion_airburst.lua",
                    firebeam:
                    {
                        Terminate: false,
                        Splash: false,
                    },
                    default: "mods/dlc2/effects/impact_turret.lua",
                    shield: "effects/impact_shield.lua",
                },
            },
        },
        {
            DeflectedByShields: false,
            ProjectileDrag: 7,
            ProjectileType: "mortar",
            Effects:
            {
                Deflect:
                {
                    default: "effects/energy_shield_ricochet.lua",
                },
                Impact:
                {
                    default: "mods/dlc2_ammo_control/effects/impact_cp.lua",
                },
            },
            DetonatesOnExpiry: true,
            PassesThroughMaterials: false,
            CollidesWithProjectiles: true,
            Projectile:
            {
                Root:
                {
                    Sprite: "pulse_cp",
                    Name: "Root",
                    ChildrenInFront:
                    {
                        [1]:
                        {
                            Offset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                            Sprite: "pulse_cp_anim",
                            Name: "Pulse_cp",
                            Additive: false,
                            Scale: 2,
                            Angle: 0,
                            Pivot:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                            PivotOffset:
                            {
                                [1]: 0,
                                [2]: 0,
                            },
                        },
                    },
                    Angle: 0,
                    Pivot:
                    {
                        [1]: 0,
                        [2]: 0.34999999403954,
                    },
                },
            },
            AntiAirDamage: 0,
            dlc2_control:
            {
                Neutral:
                {
                    ControlFlags: 5,
                    Spawn: "minireactor",
                },
            },
            ScattershotNoTrajectory: true,
            CanBeShotDown: true,
            ProjectileThickness: 0.0099999997764826,
            ProjectileDamage: 0,
            Impact: 10000,
            FieldRadius: 60,
            FieldCreatesImpactProjectile: true,
            ProjectileShootDownRadius: 40,
            ProjectileSpriteMipMap: false,
            DestroyShields: false,
            TrailEffect: "mods/dlc2_ammo_control/effects/control_trail.lua",
            SaveName: "control",
            FieldType: 4,
            FieldIntersectionNearest: false,
            AntiAirHitpoints: 10,
            ExplodeOnTouch: true,
            ProjectileMass: 10,
        },
    ]
//-- ::::::::::  END PROJECTILES DUMP  ::::::::::