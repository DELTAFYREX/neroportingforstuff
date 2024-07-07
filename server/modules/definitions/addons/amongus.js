	//UNCOMMENT LINE 11 TO DISABLE
	//return
	console.log('[AMONG US CREWMATE] Addon running');

	Class.OSAmongus_basebody = {
		PARENT: ["genericTank"],
		LABEL: "",
		SHAPE: "M -0.731 1.979 Q -1.279 -2.215 -0.005 -2.244 Q 1.635 -2.31 1.485 0 Q 1.415 1.801 0.992 1.822 Q 0.599 1.847 0.591 1.342 Q 0.888 1.29 1.078 1.056 Q 0.551 1.132 0.03 1.073 L -0.008 1.871 Q -0.304 2.162 -0.727 1.982",
	}
	Class.OSAmongus_basebodyshadow = {
		PARENT: ["genericTank"],
		LABEL: "",
		BORDERLESS: true,
		SHAPE: "M 0.431 0.765 C -0.809 0.861 -0.8 -0.981 -0.573 -1.968 C -0.451 -2.449 1.348 -2.396 1.331 -1.051 C 1.829 0.495 0.85 0.826 0.423 0.774",
	}
	Class.OSAmongus_backpack= {
		PARENT: ["genericTank"],
		LABEL: "",
		SHAPE: "M-.6.9-1 1Q-1.615 1.258-1.567-.014-1.581-1.214-1.094-1.014L-1.095-1.009-.7-.9",
	}
	Class.OSAmongus_backpackshadow= {
		PARENT: ["genericTank"],
		BORDERLESS: true,
		LABEL: "",
		SHAPE: "M -1.11 -0.781 C -1.125 -0.812 -1.481 -0.806 -1.532 -0.734 C -1.507 -0.874 -1.517 -1.033 -1.316 -1.033 C -1.073 -1.069 -1.053 -1.028 -1.11 -0.791",
	}
	Class.OSAmongus_visor= {
		PARENT: ["genericTank"],
		LABEL: "",
		SHAPE: "M 0.004 -1.131 C -0.007 -0.231 1.655 -0.524 1.649 -1.097 C 1.741 -1.807 0.027 -1.962 -0.001 -1.131",
	}
	Class.OSAmongus_visorshadow= {
		PARENT: ["genericTank"],
		BORDERLESS: true,
		LABEL: "",
		SHAPE: "M 0.178 -1.402 C 0.05 -0.851 1.667 -0.668 1.642 -1.374 C 1.654 -1.609 0.251 -1.785 0.175 -1.411",
	}
	Class.OSAmongus_visorhighlight= {
		PARENT: ["genericTank"],
		BORDERLESS: true,
		LABEL: "",
		SHAPE: "M 0.178 -1.402 C 0.05 -0.851 1.667 -0.668 1.642 -1.374 C 1.654 -1.609 0.251 -1.785 0.175 -1.411",
	}
	Class.OSAmongus_crewmatebase= {
		PARENT: ["genericTank"],
		LABEL: "AMONG US",
		SHAPE: "M 0.178",
		COLOR: 12,
		TURRETS:[
			{
				POSITION: [10, 0, 0, 0, 0, 1],
				TYPE: ["OSAmongus_backpack", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: -15,}}],
			},
			{
				POSITION: [10, 0, 0, 0, 0, 1],
				TYPE: ["OSAmongus_backpackshadow", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 0,}}],
			},
			{
				POSITION: [10, 0, 0, 0, 0, 1],
				TYPE: ["OSAmongus_basebody", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: -15,}}],
			},
			{
				POSITION: [10, 0, 0, 0, 0, 1],
				TYPE: ["OSAmongus_basebodyshadow", {MIRROR_MASTER_ANGLE: true, COLOR:{BASE: -1, BRIGHTNESS_SHIFT: 0,}}],
			},
			{
				POSITION: [10, 0, 0, 0, 0, 1],
				TYPE: ["OSAmongus_visor", {MIRROR_MASTER_ANGLE: true, COLOR:{BASE: 10, BRIGHTNESS_SHIFT: -15,}}],
			},
			{
				POSITION: [10, 0, 0, 0, 0, 1],
				TYPE: ["OSAmongus_visorshadow", {MIRROR_MASTER_ANGLE: true, COLOR:{BASE: 10, BRIGHTNESS_SHIFT: 0,}}],
			},
			{
				POSITION: [5, 2.75, -4, 0, 0, 1],
				TYPE: ["OSAmongus_visorhighlight", {MIRROR_MASTER_ANGLE: true, COLOR:{BASE: 8, BRIGHTNESS_SHIFT: 0,}}],
			},
		],  
	}
	Class.addons.UPGRADES_TIER_0.push("OSAmongus_crewmatebase");
	Class.OSAmongus_crewmatebase.UPGRADES_TIER_0 = [];
	const colors = [
	"red",
	"orange",
	"gold",
	"brown",
	"green",
	"blue",
	"cyan",
	"teal",
	"pink",
	"purple",
	"magenta",
	"veryLightGray",
	"darkGray",
	"animatedLesbian",
	"animatedTrans",
	"rainbow",
	]
	for (let i = 0; i < colors.length; i++) {
    Class["OSAmongus_" + colors[i] + "crewmate"] = {
		PARENT: ["OSAmongus_crewmatebase"],
		COLOR: colors[i]
		
	};
	
	Class.OSAmongus_crewmatebase.UPGRADES_TIER_0.push("OSAmongus_" + colors[i] + "crewmate");
}