export const data = [
  {
    buttonName: "Top",
    level: 0,
    desc: "Display the PFD Map display settings softkeys",
    ancestors: "none",
    labels: [
      "",
      "MAP/HSI",
      "TFC Map",
      "PFD Opt",
      "OBS",
      "CDI",
      "DME",
      "XPDR",
      "Ident",
      "Tmr/Ref",
      "Nearest",
      "Alerts"
    ],
    toggle: false,
    ref: [123, 143],
    unit: "pfd",
    id: 0,
    buttonType: "bezelMenu"
  },
  {
    buttonName: "MAP/HSI",
    level: 1,
    desc: "Display the PFD Map display settings softkeys",
    ancestors: ["Top"],
    labels: [
      "Layout",
      "Detail",
      "Traffic",
      "TER",
      "WX LGND",
      "NEXRAD",
      "METAR",
      "Lightning",
      "Wx Radar",
      "RDR Opt",
      "Back",
      "Alerts"
    ],
    toggle: false,
    ref: [123, 143],
    unit: "pfd",
    id: 1,
    buttonType: "bezelMenu"
  },
  {
    buttonName: "Layout",
    level: 2,
    desc: "Displays the PFD Map Selection Softkeys",
    ancestors: ["Top", "MAP/HSI"],
    labels: [
      "Map Off",
      "Inset Map",
      "HSI Map",
      "Inset Trfc",
      "HSI Trfc",
      "",
      "",
      "",
      "",
      "",
      "Back",
      "Alerts"
    ],
    toggle: false,
    ref: [169],
    unit: "pfd",
    id: 2,
    lightArray: [0, 1, 2, 3, 4],
    buttonType: "bezelMenu"
  },
  {
    buttonName: "Map Off",
    level: 3,
    desc: "Removes the PFD map from display",
    ancestors: ["Top", "MAP/HSI", "Layout"],
    labels: null,
    toggle: true,
    ref: [169],
    unit: "pfd",
    id: 3,
    buttonType: "bezelGroup"
  },
  {
    buttonName: "Inset Map",
    level: 3,
    desc: "Displays the Inset Map",
    ancestors: ["Top", "MAP/HSI", "Layout"],
    labels: null,
    toggle: true,
    ref: [169],
    unit: "pfd",
    id: 4,
    buttonType: "bezelGroup"
  },
  {
    buttonName: "HSI Map",
    level: 3,
    desc: "Displays the HSI Map",
    ancestors: ["Top", "MAP/HSI", "Layout"],
    labels: null,
    toggle: true,
    ref: [169],
    unit: "pfd",
    id: 5,
    buttonType: "bezelGroup"
  },
  {
    buttonName: "Inset Trfc",
    level: 3,
    desc: "Displays traffic in Inset Map",
    ancestors: ["Top", "MAP/HSI", "Layout"],
    labels: null,
    toggle: true,
    ref: [169],
    unit: "pfd",
    id: 6,
    buttonType: "bezelGroup"
  },
  {
    buttonName: "HSI Trfc",
    level: 3,
    desc: "Displays traffic in HSI",
    ancestors: ["Top", "MAP/HSI", "Layout"],
    labels: null,
    toggle: true,
    ref: [169],
    unit: "pfd",
    id: 7,
    buttonType: "bezelGroup"
  },
  {
    buttonName: "Detail",
    level: 2,
    desc: "Selects desired amount of inset map detail",
    ancestors: ["Top", "MAP/HSI"],
    labels: null,
    toggle: true,
    toggleValues: ["All", "Detail 3", "Detail 2", "Detail 1"],
    ref: [169],
    unit: "pfd",
    id: 8,
    buttonType: "toggle"
  },
  {
    buttonName: "Traffic",
    level: 2,
    desc: "Displays traffic information on PFD Map",
    ancestors: ["Top", "MAP/HSI"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [169],
    unit: "pfd",
    id: 9,
    buttonType: "display"
  },
  {
    buttonName: "TER",
    level: 2,
    desc: "Displays terrain on the PFD Map",
    ancestors: ["Top", "MAP/HSI"],
    labels: null,
    toggle: true,
    toggleValues: ["Off", "Topo", "REL"],
    ref: [169],
    unit: "pfd",
    id: 10,
    buttonType: "display"
  },
  {
    buttonName: "WX LGND",
    level: 2,
    desc:
      "Displays/Removes the name of the selected daa link weather provider and the weather product icon and age box.",
    ancestors: ["Top", "MAP/HSI"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [170],
    unit: "pfd",
    id: 11,
    buttonType: "display"
  },
  {
    buttonName: "NEXRAD",
    level: 2,
    desc: "Displays XM NEXRAD weather and coverage on PFD Map.",
    ancestors: ["Top", "MAP/HSI"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [171],
    unit: "pfd",
    id: 12,
    buttonType: "display"
  },
  {
    buttonName: "METAR",
    level: 2,
    desc: "Displays METAR information on Inset Map",
    ancestors: ["Top", "MAP/HSI"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [172],
    unit: "pfd",
    id: 13,
    buttonType: "display"
  },
  {
    buttonName: "Lightning",
    level: 2,
    desc:
      "Adds/removes the display of SiriusXM lightning information on PFD Map",
    ancestors: ["Top", "MAP/HSI"],
    labels: [
      "LTNG OFF",
      "Datalink",
      "STRMSCP",
      "",
      "",
      "",
      "",
      "",
      "",
      "",

      "Back",
      "Alerts"
    ],
    toggle: false,
    toggleValues: [null],
    ref: [172],
    unit: "pfd",
    id: 14,
    buttonType: "bezelMenu",
    lightArray: [0, 1, 2]
  },
  {
    buttonName: "LTNG Off",
    level: 3,
    desc:
      "Disables lightning function on PFD Map. The softkey annunciator is green when the lightning function is off",
    ancestors: ["Top", "MAP/HSI", "Lightning"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [172],
    unit: "pfd",
    id: 15,
    buttonType: "display"
  },
  {
    buttonName: "Datalink",
    level: 3,
    desc: "Selects the data link weather source for the PFD Map",
    ancestors: ["Top", "MAP/HSI", "Lightning"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [172],
    unit: "pfd",
    id: 16,
    buttonType: "display"
  },
  {
    buttonName: "STRMSCP",
    level: 3,
    desc:
      "Adds or removes the display of the Stormscope information on the PFD Map. The softkey annuciator is green when the function is on.  Where the function is off, the annunciator is gray(optional).",
    ancestors: ["Top", "MAP/HSI", "Lightning"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [172],
    unit: "pfd",
    id: 17,
    buttonType: "display"
  },
  {
    buttonName: "Wx Radar",
    level: 2,
    desc:
      "When enabled, displays the airborne weather radar overlay on HSI Map",
    ancestors: ["Top", "MAP/HSI"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [172],
    unit: "pfd",
    id: 18,
    buttonType: "display"
  },
  {
    buttonName: "RDR Opt",
    level: 2,
    desc: "Displays softkeys of airborne weather radar options",
    ancestors: ["Top", "MAP/HSI", "Mode SEL"],
    labels: [
      "Mode SEL",
      "Gain -",
      "Gain +",
      "WX ALRT",
      "STAB",
      "ACT",
      "",
      "",
      "",
      "",
      "Back",
      "Alerts"
    ],
    toggle: false,
    toggleValues: [null],
    ref: [174],
    unit: "pfd",
    id: 19,
    buttonType: "bezelMenu",
    lightArray: [3, 4, 5]
  },
  {
    buttonName: "Mode SEL",
    level: 3,
    desc: "Displays softkeys of weather radar mode selection",
    ancestors: ["Top", "MAP/HSI", "RDR Opt"],
    labels: [
      "Standby",
      "Weather",
      "Ground",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Back",
      "Alerts"
    ],
    toggle: false,
    toggleValues: [null],
    ref: [174],
    unit: "pfd",
    id: 20,
    buttonType: "bezelMenu",
    lightArray: [0, 1, 2]
  },
  {
    buttonName: "Standby",
    level: 4,
    desc: "Selects Standby weather radar mode.",
    ancestors: ["Top", "MAP/HSI", "RDR Opt", "Mode SEL"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [174],
    unit: "pfd",
    id: 21,
    buttonType: "display"
  },
  {
    buttonName: "Weather",
    level: 4,
    desc: "Activates Weather radar Mode",
    ancestors: ["Top", "MAP/HSI", "RDR Opt", "Mode SEL"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [174],
    unit: "pfd",
    id: 22,
    buttonType: "display"
  },
  {
    buttonName: "Ground",
    level: 4,
    desc: "Activates Ground Map radar Mode",
    ancestors: ["Top", "MAP/HSI", "RDR Opt", "Mode SEL"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [174],
    unit: "pfd",
    id: 23,
    buttonType: "display"
  },
  {
    buttonName: "Gain -",
    level: 3,
    desc: "Decreases weather radar gain setting.",
    ancestors: ["Top", "MAP/HSI", "RDR Opt"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [174],
    unit: "pfd",
    id: 24,
    buttonType: "display"
  },
  {
    buttonName: "Gain +",
    level: 3,
    desc: "Increases weather radar gain setting.",
    ancestors: ["Top", "MAP/HSI", "RDR Opt"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [174],
    unit: "pfd",
    id: 25,
    buttonType: "display"
  },
  {
    buttonName: "WX ALRT",
    level: 3,
    desc: "When enabled, displays weather alerts as system messages.",
    ancestors: ["Top", "MAP/HSI", "RDR Opt"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [174],
    unit: "pfd",
    id: 26,
    buttonType: "display"
  },
  {
    buttonName: "STAB",
    level: 3,
    desc: "Activates antenna stabilization feature",
    ancestors: ["Top", "MAP/HSI", "RDR Opt"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [174],
    unit: "pfd",
    id: 27,
    buttonType: "display"
  },
  {
    buttonName: "ACT",
    level: 3,
    desc: "Activates Altitude Compensated Tilt feature",
    ancestors: ["Top", "MAP/HSI", "RDR Opt"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [174],
    unit: "pfd",
    id: 28,
    buttonType: "display"
  },
  {
    buttonName: "TFC Map",
    level: 1,
    desc: "Replaces the PFD Map with a dedicated traffic display",
    ancestors: ["Top"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [174],
    unit: "pfd",
    id: 29,
    buttonType: "display"
  },
  {
    buttonName: "PFD Opt",
    level: 1,
    desc: "Displays second-level softkeys for additional PFD options.",
    ancestors: ["Top"],
    labels: [
      "SVT",
      "AOA",
      "Wind",
      "DME",
      "Bearing 1",
      "Sensors",
      "Bearing 2",
      "ALT Units",
      "STD Baro",
      "",
      "Back",
      "Alerts"
    ],
    toggle: false,
    toggleValues: [null],
    ref: [200],
    unit: "pfd",
    id: 30,
    buttonType: "bezelMenu"
  },
  {
    buttonName: "SVT",
    level: 2,
    desc: "Displays additional SVT overlay softkeys.",
    ancestors: ["Top", "PFD Opt"],
    labels: [
      "Pathways",
      "Terrain",
      "HDG LBL",
      "APT Sign",
      "",
      "",
      "",
      "",
      "",
      "",
      "Back",
      "Alerts"
    ],
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 31,
    buttonType: "bezelMenu",
    lightArray: [0, 1, 2, 3]
  },
  {
    buttonName: "Pathways",
    level: 3,
    desc: "Displays Pathway Boxes on the Synthetic Vision Display.",
    ancestors: ["Top", "PFD Opt", "SVT"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 32,
    buttonType: "display"
  },
  {
    buttonName: "Terrain",
    level: 3,
    desc: "Enables synthetic terrain depiction.",
    ancestors: ["Top", "PFD Opt", "SVT"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 33,
    buttonType: "display"
  },
  {
    buttonName: "HDG LBL",
    level: 3,
    desc: "Displays compass heading along the Zero-Pitch line.",
    ancestors: ["Top", "PFD Opt", "SVT"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 34,
    buttonType: "display"
  },
  {
    buttonName: "APT Sign",
    level: 3,
    desc:
      "Displays position markers for airports within approximately 15 nm of the current aircraft position. Airport identifiers are displayed when the airport is within approximately 9 nm.",
    ancestors: ["Top", "PFD Opt", "SVT"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 35,
    buttonType: "display"
  },
  {
    buttonName: "AOA",
    level: 2,
    desc:
      "Selects the display mode for the Angle of Attack (AOA) indicator on the PFD: Auto: Displays AOA indicator on the PFD. Off: Removes AOA indicator from the PFD.",
    ancestors: ["Top", "PFD Opt"],
    labels: null,
    toggle: true,
    toggleValues: ["Auto", "Off"],
    ref: [201],
    unit: "pfd",
    id: 36,
    buttonType: "display"
  },
  {
    buttonName: "Wind",
    level: 2,
    desc: "Displays the wind option softkeys.",
    ancestors: ["Top", "PFD Opt"],
    labels: [
      "Off",
      "Option 1",
      "Option 2",
      "Option 3",
      "",
      "",
      "",
      "",
      "",
      "",
      "Back",
      "Alerts"
    ],
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 37,
    buttonType: "bezelMenu",
    lightArray: [0, 1, 2, 3]
  },
  {
    buttonName: "Off",
    level: 3,
    desc: "Wind information not displayed",
    ancestors: ["Top", "PFD Opt", "Wind"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 38,
    buttonType: "bezelGroup",
    divId: "pfdWindData",
    imageClass: "hidden"
  },
  {
    buttonName: "Option 1",
    level: 3,
    desc: "Headwind/Tailwind and crosswind components.",
    ancestors: ["Top", "PFD Opt", "Wind"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 39,
    buttonType: "bezelGroup",
    divId: "pfdWindData",
    imageClass: "option1"
  },
  {
    buttonName: "Option 2",
    level: 3,
    desc: "Wind direction arrow and speed.",
    ancestors: ["Top", "PFD Opt", "Wind"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 40,
    buttonType: "bezelGroup",
    divId: "pfdWindData",
    imageClass: "option2"
  },
  {
    buttonName: "Option 3",
    level: 3,
    desc: "Wind direction arrow with direction and speed.",
    ancestors: ["Top", "PFD Opt", "Wind"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 41,
    buttonType: "bezelGroup",
    divId: "pfdWindData",
    imageClass: "option3"
  },
  {
    buttonName: "DME",
    level: 2,
    desc: "Displays DME Information Window (optional).",
    ancestors: ["Top", "PFD Opt"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 42,
    buttonType: "display"
  },
  {
    buttonName: "Bearing 1",
    level: 2,
    desc:
      "Cycles the Bearing 1 Information Window through NAV1, NAV2, GPS/waypoint identifier and GPS-derived distance information, ADF/frequency, and Off.",
    ancestors: ["Top", "PFD Opt"],
    labels: null,
    toggle: true,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 43,
    buttonType: "display"
  },
  {
    buttonName: "Sensors",
    level: 2,
    desc: "Displays the sensor selection softkeys.",
    ancestors: ["Top", "PFD Opt"],
    labels: ["", "ADC", "", "", "AHRS", "", "", "", "", "", "Back", "Alerts"],
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 44,
    buttonType: "bezelMenu"
  },
  {
    buttonName: "ADC",
    level: 3,
    desc: "Displays ADC selection softkeys.",
    ancestors: ["Top", "PFD Opt", "Sensors"],
    labels: [
      "ADC 1",
      "ADC 2",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Back",
      "Alerts"
    ],
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 45,
    buttonType: "bezelMenu",
    lightArray: [0, 1]
  },
  {
    buttonName: "ADC 1",
    level: 4,
    desc: "Selects the #1 ADC.",
    ancestors: ["Top", "PFD Opt", "Sensors", "ADC"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 46,
    buttonType: "bezelGroup"
  },
  {
    buttonName: "ADC 2",
    level: 4,
    desc: "Selects the #2 ADC.",
    ancestors: ["Top", "PFD Opt", "Sensors", "ADC"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 47,
    buttonType: "bezelGroup"
  },
  {
    buttonName: "AHRS",
    level: 3,
    desc: "Displays the AHRS selection softkeys.",
    ancestors: ["Top", "PFD Opt", "Sensors"],
    labels: [
      "AHRS 1",
      "AHRS 2",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Back",
      "Alerts"
    ],
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 48,
    buttonType: "bezelMenu",
    lightArray: [0, 1]
  },
  {
    buttonName: "AHRS 1",
    level: 4,
    desc: "Selects the #1 AHRS.",
    ancestors: ["Top", "PFD Opt", "Sensors", "AHRS"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 49,
    buttonType: "bezelGroup"
  },
  {
    buttonName: "AHRS 2",
    level: 4,
    desc: "Slects the #2 AHRS.",
    ancestors: ["Top", "PFD Opt", "Sensors", "AHRS"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 50,
    buttonType: "bezelGroup"
  },
  {
    buttonName: "Bearing 2",
    level: 2,
    desc:
      "Cycles the Bearing 2 Information Window through NAV1, NAV2, GPS/waypoint identifier and GPS-derived distance information, ADF/frequency, and Off.",
    ancestors: ["Top", "PFD Opt"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 51,
    buttonType: "display"
  },
  {
    buttonName: "ALT Units",
    level: 2,
    desc: "Displays softkeys to select altitude unit parameters.",
    ancestors: ["Top", "PFD Opt"],
    labels: [
      "Meters",
      "IN",
      "HPA",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Back",
      "Alerts"
    ],
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 52,
    buttonType: "bezelMenu",
    lightArray: [0, 1, 2]
  },
  {
    buttonName: "Meters",
    level: 3,
    desc: "When enabled, displays altimeter in meters.",
    ancestors: ["Top", "PFD Opt", "ALT Units"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 53,
    buttonType: "display"
  },
  {
    buttonName: "IN",
    level: 3,
    desc: "Press to display the BARO setting as inches of mercury.",
    ancestors: ["Top", "PFD Opt", "ALT Units"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 54,
    buttonType: "display"
  },
  {
    buttonName: "HPA",
    level: 3,
    desc: "Press to display the BARO setting as hectopascals.",
    ancestors: ["Top", "PFD Opt", "ALT Units"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 55,
    buttonType: "display"
  },
  {
    buttonName: "STD Baro",
    level: 2,
    desc:
      "Sets barometric pressure to 29.92 in Hg (1013 hPa if metric units are selected).",
    ancestors: ["Top", "PFD Opt"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 56,
    buttonType: "display"
  },
  {
    buttonName: "OBS",
    level: 1,
    desc:
      "Selects OBS mode on the CDI when navigating by GPS (only available with active leg). When OBS is on, the softkey annunciator is green.",
    ancestors: ["Top"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 57,
    buttonType: "display"
  },
  {
    buttonName: "CDI",
    level: 1,
    desc: "Cycles through FMS, NAV1, and NAV2 navigation modes on the CDI.",
    ancestors: ["Top"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 58,
    buttonType: "display"
  },
  {
    buttonName: "DME",
    level: 1,
    desc:
      "Displays the ADF/DME Tuning Window, allowing tuning and selection of the ADF/ DME (optional).",
    ancestors: ["Top"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 59,
    buttonType: "display"
  },
  {
    buttonName: "XPDR",
    level: 1,
    desc: "Displays the transponder selection softkeys.",
    ancestors: ["Top"],
    labels: [
      "XPDR 1",
      "XPDR 2",
      "Standby",
      "On",
      "ALT",
      "",
      "VFR",
      "Code",
      "Ident",
      "",
      "Back",
      "Alerts"
    ],
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 60,
    buttonType: "bezelMenu",
    lightArray: [0, 1, 2, 3, 4, 5, 6]
  },
  {
    buttonName: "XPDR 1",
    level: 2,
    desc: "Selects the #1 transponder as active.",
    ancestors: ["Top", "XPDR"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 61,
    buttonType: "display"
  },
  {
    buttonName: "XPDR 2",
    level: 2,
    desc: "Selects the #2 transponder as active.",
    ancestors: ["Top", "XPDR"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 62,
    buttonType: "display"
  },
  {
    buttonName: "Standby",
    level: 2,
    desc:
      "Selects transponder Standby Mode (transponder does not reply to any interrogations).",
    ancestors: ["Top", "XPDR"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 63,
    buttonType: "display"
  },
  {
    buttonName: "On",
    level: 2,
    desc:
      "Activates transponder (transponder replies to identification interrogations).",
    ancestors: ["Top", "XPDR"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 64,
    buttonType: "display"
  },
  {
    buttonName: "ALT",
    level: 2,
    desc:
      "Altitude Reporting Mode (transponder replies to identification and altitude interrogations).",
    ancestors: ["Top", "XPDR"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 65,
    buttonType: "display"
  },
  {
    buttonName: "VFR",
    level: 2,
    desc: "Automatically enters the VFR code (1200 in the U.S.A. only).",
    ancestors: ["Top", "XPDR"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 66,
    buttonType: "display"
  },
  {
    buttonName: "Code",
    level: 2,
    desc: "Displays transponder code selection softkeys 0-7.",
    ancestors: ["Top", "XPDR"],
    labels: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "Ident",
      "BKSP",

      "Back",
      "Alerts"
    ],
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 67,
    buttonType: "bezelMenu"
  },
  {
    buttonName: "BKSP",
    level: 3,
    desc: "Removes numbers entered, one at a time.",
    ancestors: ["Top", "XPDR", "Code"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 68,
    buttonType: "display"
  },
  {
    buttonName: "Ident",
    level: 2,
    desc:
      "Activates the Special Position Identification (SPI) pulse for 18 seconds, identifying the transponder return on the ATC screen.",
    ancestors: ["Top", "XPDR"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 69,
    buttonType: "display"
  },
  {
    buttonName: "Ident",
    level: 1,
    desc:
      "Activates the Special Position Identification (SPI) pulse for 18 seconds, identifying the transponder return on the ATC screen.",
    ancestors: ["Top", "XPDR"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 70,
    buttonType: "display"
  },
  {
    buttonName: "Tmr/Ref",
    level: 1,
    desc: "Displays Timer/References Window.",
    ancestors: ["Top"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 71,
    buttonType: "display"
  },
  {
    buttonName: "Alerts",
    level: 1,
    desc:
      "Displays the Alerts Window when pressed. System generated messages cause the Alerts Softkey label to change to a flashing ‘Message’ label. Pressing the Message Softkey opens the Alerts Window, acknowledges the message, and the softkey reverts to the ‘Alerts’ label.",
    ancestors: ["Top"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 72,
    buttonType: "display"
  },
  {
    buttonName: "Back",
    level: 1,
    desc:
      "Displays the Alerts Window when pressed. System generated messages cause the Alerts Softkey label to change to a flashing ‘Message’ label. Pressing the Message Softkey opens the Alerts Window, acknowledges the message, and the softkey reverts to the ‘Alerts’ label.",
    ancestors: ["Top"],
    labels: null,
    toggle: false,
    toggleValues: [null],
    ref: [201],
    unit: "pfd",
    id: 73,
    buttonType: "bezelMenu"
  }
];
