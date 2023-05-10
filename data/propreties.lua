---@meta




---@class Device
---@field TeamOwned boolean
---@field AllowOverlap boolean
---@field SpotterTarget boolean
---@field MaxUpAngle number
---@field BuildTimeComplete number
---@field NoReclaim boolean
---@field Icon string
---@field Enabled boolean
---@field MetalCost number
---@field ScoreWeight number
---@field FileName string
---@field SelectEffect string
---@field BuildOnGroundOnly boolean
---@field EnergyCost number
---@field SaveName string
---@field EnergyRepairCost number
---@field MetalRepairCost number
---@field ScrapPeriod number
---@field ShowDetails boolean
---@field Detail string
---@field RequiresLand boolean
---@field BuildOnOreOnly boolean
---@field Upgrades any
---@field AlignToCursorNormal boolean
---@field Prerequisite string
---@field RequiresWater boolean
---@field BuildTimeIntermediate number
---@field CanMirrorFacing boolean
---@field MinBuildDepth number
---@field MetalReclaimMax number
---@field EnergyReclaimMin number
---@field MetalReclaimMin number
---@field HasDummy boolean
---@field EnergyReclaimMax number
---@field CanMove boolean
---@field HideFromEditor boolean
---@field Tech boolean
---@field PopulationCap number
---@field IgnitePlatformOnDestruct boolean
---@field PrerequisiteAlt string

---@type Device[]
Devices = {}


---@class Sprite
---@field Name string
---@field States any

---@type Sprite[]
Sprites = {}


---@class Material
---@field DegreesPerSecondMin number
---@field MaxLinkLength number
---@field ReflectionMomentumThreshold number
---@field SpeedLossFactor number
---@field HitPoints number
---@field Mass number
---@field Node any
---@field SupportsDevices boolean
---@field AbsorptionMomentumThreshold number
---@field NoCostRecession boolean
---@field AirDrag number
---@field EnergyRepairCost number
---@field MaxCompression number
---@field MaxLength number
---@field Sprite string
---@field EnergyRunCost number
---@field EnergyReclaim number
---@field EnergyBuildCost number
---@field DegreesPerSecondMax number
---@field CatchesFire boolean
---@field Detail string
---@field RicochetVariationFactor number
---@field ReflectsBeams boolean
---@field RenderOrder number
---@field BuildTime number
---@field Context string
---@field RecessionTargetSaveName string
---@field MaxExpansion number
---@field SaveName string
---@field SelectEffect string
---@field Icon string
---@field MinLength number
---@field MetalRepairCost number
---@field FireDestroyEffect string
---@field Conversions any
---@field IsBehindDevices boolean
---@field DoorTargetSaveName string
---@field AttachesCladding boolean
---@field BuildEffect string
---@field PenetrationMomentumThreshold number
---@field Stiffness number
---@field MetalReclaim number
---@field DestroyEffect string
---@field ArmorTargetSaveName string
---@field NodeImpacts any
---@field ScrapTime number
---@field KeySpriteByDamage boolean
---@field MetalBuildCost number
---@field CollidesWithEnemyProjectiles boolean
---@field ShowOnHUD boolean
---@field ConductsPower boolean
---@field CollidesWithFriendlyProjectiles boolean
---@field CollidesWithEnemyBeams boolean
---@field FogOfWarTargetSaveName string
---@field BackgroundCladding boolean
---@field PoweredByDeviceOverlap boolean
---@field CollidesWithWind boolean
---@field CollidesWithFriendlyBeams boolean
---@field FullExtrusion boolean
---@field ForegroundTargetSaveName string
---@field ShowInEditor boolean
---@field Enabled boolean
---@field PostCreateTargetSaveName string
---@field IsFogOfWarArmour boolean
---@field BeamPenetrationBlockDist number
---@field DoorOnClearanceOverlap boolean
---@field ArmorRemovalTargetSaveName string
---@field WeaponRecession boolean
---@field SpriteDoor string
---@field PostCreateMaterialAlways boolean
---@field DoorSpeedClose number
---@field DoorCap string
---@field RepairRateMultiplier number
---@field OpenEffect string
---@field IsDoor boolean
---@field CloseEffect string
---@field DoorSpeed number
---@field DoorOpenMax number
---@field EnergyProductionClearance number
---@field NoProductionColour any
---@field MaxAngle number
---@field EnergyMinEfficiency number
---@field CanAttachToGround boolean
---@field EnergyMaxHeight number
---@field WarmUpTime number
---@field EndLinkOffset number
---@field WarmUpTimeDisabled number
---@field EnableEffect string
---@field WarmupEffect string
---@field DisableEffect string
---@field KeyEndCapByDamage boolean
---@field EndCap string
---@field SpriteDeactivated string
---@field ShowEndFireSegments boolean
---@field Pretension number
---@field SpringDamping number
---@field FireLateralOffsetStdDev number
---@field AlignedLinksAllowed boolean
---@field CanBeTempBraced boolean
---@field AngleStressSecondaryThreshold number
---@field AngleStressPrimaryThreshold number
---@field RequiresFoundationSupport boolean
---@field MaxSegmentLength number
---@field FireSprite string
---@field Repairable boolean
---@field SmokeEffect string
---@field Portal boolean
---@field SplashMultiplier number
---@field InvulnerableWhenBackground boolean
---@field Sprite1 string
---@field MaxLinkLengthMultiplierInEditor number
---@field Sprite2 string
---@field Invulnerable boolean
---@field CanDeleteInGameplay boolean
---@field DefaultRecessionTarget boolean
---@field OpenedEffect string
---@field EndCapOverlay boolean
---@field ClosedEffect string
---@field EndCapOffset number
---@field PoweredWhenNeutral boolean

---@type Material[]
Materials = {}


---@class Projectile
---@field DeflectedByShields boolean
---@field ProjectileDrag number
---@field ProjectileType string
---@field SpeedIndicatorFactor number
---@field MaxAge number
---@field ProjectileMass number
---@field Effects any
---@field TrailEffect string
---@field MinAge number
---@field BeamScrollRate number
---@field BeamTileRate number
---@field ProjectileThickness number
---@field ProjectileDamage number
---@field DamageMultiplier any
---@field WeaponDamageBonus number
---@field ImpactMomentumLimit number
---@field ProjectileShootDownRadius number
---@field ProjectileSpriteMipMap boolean
---@field Impact number
---@field ProjectileSprite string
---@field SaveName string
---@field DrawBlurredProjectile boolean
---@field DeflectedByTerrain boolean
---@field CollidesWithBeams boolean
---@field ExplodeOnTouch boolean
---@field ExpiresOnFreeFall boolean
---@field PassesThroughMaterials boolean
---@field MomentumThreshold any
---@field PenetrationDamage number
---@field PenetrationSpeedMultiplier number
---@field ProjectileIncendiary boolean
---@field ProjectileSplashDamage number
---@field AntiAirDamage number
---@field Projectile any
---@field ProjectileSplashDamageMaxRadius number
---@field IgnitesBackgroundMaterials boolean
---@field DisableShields boolean
---@field EMPSensitivity number
---@field EnemyCanTeleport boolean
---@field EMPMissileProbabilityOfCircling number
---@field IncendiaryOffset number
---@field IncendiaryRadius number
---@field AlwaysIncendiary boolean
---@field Missile any
---@field ProjectileSplashMaxForce number
---@field IncendiaryRadiusHeated number
---@field FlipSpriteFacingLeft boolean
---@field DestroyShields boolean
---@field AntiAirHitpoints number
---@field ImpactSize number
---@field BeamOcclusionDistanceWater number
---@field BeamOcclusionDistance number
---@field IgnitesBackgroundMaterialsPassing boolean
---@field IgnitesBackgroundMaterialsPassingSource boolean
---@field ProjectileShootDownRadiusBeamWidth number
---@field CollisionLookaheadDist number
---@field DrawFromAge number
---@field EMPOffset number
---@field Gravity number
---@field EMPRadius number
---@field EMPDuration number
---@field MinPenetration number
---@field MagneticModifierEnemy number
---@field FieldRadius number
---@field FieldType number
---@field FieldCreatesImpactProjectile boolean
---@field CollidesWithBackgroundMaterials boolean
---@field CollidesWithLike boolean
---@field ProjectileSplashOffset number
---@field CollidesWithLikeTag string
---@field DetonatesOnExpiry boolean
---@field MagneticModifierFriendly number
---@field CanBeShotDown boolean
---@field FieldIntersectionNearest boolean
---@field RayOffset number
---@field RayIncendiaryRadius number
---@field RayStopAtForeground boolean
---@field RayExcludeBackground boolean
---@field RayDamage number
---@field RayLength number
---@field CollidesWithConstruction boolean
---@field RayDamageLimit number
---@field CollidesWithProjectiles boolean
---@field CollidesWithStructure boolean
---@field FieldStrengthMax number
---@field FieldStrengthFalloffPower number
---@field DecoyMinTargetAge number
---@field Additive boolean
---@field ScattershotNoTrajectory boolean
---@field dlc2_Bombs any
---@field StructureSplashDamage number
---@field IncendiaryOnPenetration boolean
---@field StructureSplashDamageMaxRadius number
---@field IncendiaryOnDeviceCollision boolean
---@field ProjectileIncendiaryDevicePlatform boolean
---@field dlc2_orbital any
---@field DoesNotReflectDuringFadeOut boolean
---@field BeamCollisionThickness string
---@field BeamDamage string
---@field BeamThickness string
---@field Beam any
---@field dlc2_control any

---@type Projectile[]
Projectiles = {}


---@class Weapon
---@field Upgrades any
---@field MaxSpotterAssistance number
---@field MaxUpAngle number
---@field FireGroupWhenDoorBlocks boolean
---@field BuildTimeComplete number
---@field Icon string
---@field MetalRepairCost number
---@field MetalCost number
---@field FileName string
---@field SelectEffect string
---@field EnergyCost number
---@field SaveName string
---@field BuildOnGroundOnly boolean
---@field EnergyRepairCost number
---@field ScrapPeriod number
---@field GroupButton string
---@field Detail string
---@field Prerequisite string
---@field Enabled boolean
---@field MaxWeaponGroupSize number
---@field SpotterFactor number
---@field DrawBlurredProjectile boolean
---@field CompatibleGroupTypes any
---@field MetalReclaimMax number
---@field EnergyReclaimMin number
---@field MetalReclaimMin number
---@field EnergyReclaimMax number
---@field BuildTimeIntermediate number
---@field HideFromToolTipsAmmoFor boolean
---@field BuildQueueModifier any
---@field RequiresSpotterToFire boolean
---@field RequiresLand boolean
---@field AlignToCursorNormal boolean
---@field AnimationScript string
---@field InvertedType string
---@field Inverted boolean
---@field RequiresWater boolean
---@field IgnitePlatformOnDestruct boolean
---@field ProxyUpgrades any
---@field HideFromEditor boolean
---@field Selectable boolean
---@field dlc2_BuildAnywhere boolean
---@field ExcludeUnlockAll boolean
---@field SavedInEditor boolean

---@type Weapon[]
Weapons = {}
