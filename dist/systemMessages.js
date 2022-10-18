export const systemMessages = [
  {
    id: 0,
    message: "ADC1 ALT EC -ADC1 altitude error correction is unavailable.",
    description:
      "GDC1 is reporting that the altitude error correction is unavailable."
  },
  {
    id: 1,
    message: "ADC1 AS EC -ADC1 airspeed error correction is unavailable.",
    description:
      "GDC1 is reporting that the airspeed error correction is unavailable."
  },
  {
    id: 2,
    message: "ADC2 ALT EC -ADC2 altitude error correction is unavailable.",
    description:
      "GDC2 is reporting that the altitude error correction is unavailable."
  },
  {
    id: 3,
    message: "ADC2 AS EC -ADC2 airspeed error correction is unavailable.",
    description:
      "GDC2 is reporting that the airspeed error correction is unavailable."
  },
  {
    id: 4,
    message: "AHRS MAG DB-AHRS magnetic model database version mismatch.",
    description:
      "The #1 AHRS and #2 AHRS magnetic model database versions do not match."
  },
  {
    id: 5,
    message: "AHRS1 CAL-AHRS1 calibration version error. Srvc req'd.",
    description:
      "The AHRS1 calibration version error. The system should be serviced."
  },
  {
    id: 6,
    message: "AHRS1 CONFIG -AHRS1 config\nerror. Config service req'd.",
    description:
      "AHRS configuration settings do not match those of backup configuration memory.  The system should be serviced."
  },
  {
    id: 7,
    message: "AHRS1 GPS-AHRS1 not receiving any GPS information.",
    description:
      "The #1 AHRS is not receiving any or any useful GPS information.  Check AFMS limitations. The system should be serviced."
  },
  {
    id: 8,
    message: "AHRS1 GPS -AHRS1 not receiving backup GPS information.",
    description:
      "The #1 AHRS is not receiving backup GPS information.  The system should be serviced."
  },
  {
    id: 9,
    message: "AHRS1 GPS -AHRS1 operating exclusively in no-GPS mode.",
    description:
      "The #1 AHRS is operating exclusively in no-GPS mode.  The system should be serviced."
  },
  {
    id: 10,
    message: "AHRS1 GPS-AHRS1 using backup GPS source.",
    description:
      "The #1 AHRS is using the backup GPS path.  Primary GPS path has failed. The system should be serviced when possible."
  },
  {
    id: 11,
    message: "AHRS1 SRVC-AHRS 1 Magnetic-field model needs update.",
    description:
      "The #1 AHRS earth magnetic field model is out of date.  Update magnetic field model when practical."
  },
  {
    id: 12,
    message: "AHRS1 TAS -AHRS1 not receiving airspeed.",
    description:
      "The #1 AHRS is not receiving true airspeed from the air data computer.  The AHRS relies on GPS information to augment the lack of airspeed.  The system should be\nservice d."
  },
  {
    id: 13,
    message: "AHRS2 CAL -AHRS2 calibration version error. Srvc req'd.",
    description:
      "The AHRS2 calibration version error. The system should be serviced."
  },
  {
    id: 14,
    message: "AHRS2 CONFIG -AHRS2 config\nerror. Config service req 'd.",
    description:
      "AHRS configuration settings do not match those of backup configuration memory. The system should be serviced."
  },
  {
    id: 15,
    message: "AHRS2 GPS -AHRS2 not receiving any GPS information.",
    description:
      "The #2 AHRS is not receiving any or any useful GPS information.  Check AFMS limitations.  The system should be serviced."
  },
  {
    id: 16,
    message: "AHRS2 GPS -AHRS2 not receiving backup GPS information.",
    description:
      "The #2 AHRS is not receiving backup GPS information.  The system should be serviced."
  },
  {
    id: 17,
    message: "AHRS2 GPS -AHRS2 operating exclusively in no-GPS mode.",
    description:
      "The #2 AHRS is operating exclusively in no-GPS mode.  The system should be serviced."
  },
  {
    id: 18,
    message: "AHRS2 GPS -AHRS2 using backup GPS source.",
    description:
      "The #2 AHRS is using the backup GPS path.  Primary GPS path has failed. The system should be serviced when possible."
  },
  {
    id: 19,
    message: "AHRS2 SRVC -AHRS2 Magnetic-field model needs update.",
    description:
      "The #2 AHRS earth magnetic field model is out of date.  Update magnetic field model when practical."
  },
  {
    id: 20,
    message: "AHRS2 TAS -AHRS2 not receiving airspeed.",
    description:
      "The #2 AHRS is not receiving true airspeed from the air data computer.  The AHRS\nrelies on GPS information to augment the lack of airspeed.  The system should be serviced."
  },
  {
    id: 21,
    message: "APR INACTV -Approach is not active.",
    description:
      "The system notifies the pilot that the loaded approach is not active.  Activate approach when required."
  },
  {
    id: 22,
    message: "ARSPC AHEAD -Airspace ahead less than 10 minutes.",
    description:
      "Special use airspace is ahead of aircraft.  The aircraft will penetrate the airspace within 10 minutes."
  },
  {
    id: 23,
    message: "ARSPC NEAR -Airspace near -  less than 2 nm.",
    description: "Special use airspace is within 2 nm of the aircrah position."
  },
  {
    id: 24,
    message: "ARSPC NEAR -Airspace near and ahead.",
    description:
      "Special use airspace is near and ahead of the aircraft position."
  },
  {
    id: 25,
    message: "AUDIO MANIFEST - Audio software mismatch, communication halted.",
    description:
      "The GDC 74B has incorrect software installed. The system should be serv iced."
  },
  {
    id: 26,
    message: "CHECK CRS -  Database course for LOC1 / [LOC ID] is [CRS] 0  ?",
    description:
      "Selected course for LOC 1 differs from published localizer course by more than 10 degrees."
  },
  {
    id: 27,
    message: "CHECK CRS -  Database course for LOC2 / [LOC ID] is [CRS] 0  ?",
    description:
      "Selected course for LOC2 differs from published localizer course by more than 10 degrees."
  },
  {
    id: 28,
    message: "CNFG MODULE -  PFD1 configuration module is inoperative.",
    description:
      "The PFD1 configuration module backup memory has failed. The system should be serviced."
  },
  {
    id: 29,
    message: "COM1 CONFIG -  COM1 config error. Config service req'd.",
    description:
      "The COM1 configuration settings do not match backup configuration memory. The system should be serviced."
  },
  {
    id: 30,
    message: "COM 1 MANIFEST -  COM1 software mismatch, communication halted.",
    description:
      "The COM1 has incorrect software installed.  The system should be serviced."
  },
  {
    id: 31,
    message: "COM1 PTT -  COM1 push-to-talk key is stuck.",
    description:
      'The COM1 external push-to-talk switch is stuck in the enable (or "pressed") position. Press the PTT switch again to cycle its operation.\nIf the problem persists, the system should be serviced.'
  },
  {
    id: 32,
    message: "COM1 RMT XFR -  COM1 remote\ntransfer key is stuck.",
    description:
      'The COM1 transfer switch is stuck in the enabled (or "pressed") position.  Press the\ntransfer switch again to cycle its operation.  If the problem persists, the system should be serviced.'
  },
  {
    id: 33,
    message: "COM1 SERVICE -  COM1 needs\nserv ice. Return unit for repair.",
    description:
      "The system has detected a failure in COM 1.  COM1 may still be usable.  The system should be serviced when possible."
  },
  {
    id: 34,
    message: "COM1 TEMP -  COM1 over temp. Reducing transmitter power.",
    description:
      "The system has detected an over temperature condition in COM1. The transmitter is operating at reduced power.  If the problem persists, the system should be serviced."
  },
  {
    id: 35,
    message: "COM2 CONFIG -  COM2 config error. Config service req'd .",
    description:
      "The COM2 configuration settings do not match backup configuration memory.  The system should be serviced."
  },
  {
    id: 36,
    message: "COM 2 MANIFEST -  COM2 software mismatch, communication halted.",
    description:
      "The COM2 has incorrect software installed . The system should be serviced."
  },
  {
    id: 37,
    message: "COM2 PTT -  COM2 push-to-talk key is stuck.",
    description:
      'The COM2 external push-to-talk switch is stuck in the enable (or "pressed") position. Press the PTT switch again to cycle its operation.\nIf the problem persists, the system should be serviced.'
  },
  {
    id: 38,
    message: "COM2 RMT XFR -  COM2 remote\ntransfer key is stuck.",
    description:
      'The COM2 transfer switch is stuck in the enabled (or "pressed") position. Press the transfer switch again to cycle its operation.  If the problem persists, the system should be serviced.'
  },
  {
    id: 39,
    message: "COM2 SERVICE -  COM2 needs\nserv ice. Return unit for repair.",
    description:
      "The system has detected a failure in COM2.  COM2 may still be usable.  The system should be serviced when possible."
  },
  {
    id: 40,
    message: "COM2 TEMP -  COM2 over temp. Reducing transmitter power.",
    description:
      "The system has detected an over temperature condition in COM2.  The transmitter is operating at reduced power.  If the problem persists, the system should be serviced."
  },
  {
    id: 41,
    message: "CRUISE I -  Cruise I conditions met.",
    description: "Cruise I engine trend data log has been captured."
  },
  {
    id: 42,
    message: "CRUISE II - Cruise II conditions met.",
    description: "Cruise II engine trend data log has been captured."
  },
  {
    id: 43,
    message: "DATA LOST -  Pilot stored data was lost.  Recheck settings.",
    description:
      "The pilot profile data was lost.  System reverts to default pilot profile and se ttings. The pilot may reconfigure the MFD & PFDs with preferred settings, if desired."
  },
  {
    id: 44,
    message: "DB CHANGE -  Database changed. Verify user modified procedures.",
    description:
      "This occurs when a stored flight plan contains procedures that have been manually\nedited.  This alert is issued only after an navigation database update.  Verify that the user-modified procedures in stored flight plans are correct and up to date."
  },
  {
    id: 45,
    message: "DB CHANGE -  Database changed. Verify stored airways.",
    description:
      "This occurs when a stored flight plan contains an airway that is no longer consistent\nwith the navigation database. This alert is issued only after an navigation database update. Verify use of airways in stored flight plans and reload airways as needed."
  },
  {
    id: 46,
    message: "DB MISMATCH -  Navigation database mismatch.  Xtalk is off.",
    description:
      "The PFDs and MFD have different navigation database versions or regions installed. Crossfill is off.  Check the Aux-System Status Page to determine versions or regions. Also, check the Aux-System Status Page for a database synchronization function not\ncompleted.  After synchronization is complete, power must be turned off, then on."
  },
  {
    id: 47,
    message: "DB MISMATCH -  Obstacle database misma tch.",
    description:
      "The PFDs and MFD have different obstacle database versions or regions instal led. Check the Aux-System Status Page to determine versions or regions.  Also, check the Aux-System Status Page for a database synchronization function not completed.  After\nsynchronization is complete, power must be turned off, then on."
  },
  {
    id: 48,
    message: "DB MISMATCH -  Standby Navigation database mismatch.",
    description:
      "The PFDs and MFD have different standby navigation database versions or regions installed.  Check the Aux-System Status Page to determine versions or regions.  Also, check the Aux-System Status Page for a database synchronization function not\ncompleted.  After synchronization is complete, power must be turned off, then on."
  },
  {
    id: 49,
    message: "DB MISMATCH -  Terrain database mismatch.",
    description:
      "The PFDs and MFD have different terrain database versions or regions installed. Check the Aux-System Status Page to determine versions or regions.  Also, check the\nAux-System Status Page for a database synchronization function not comp leted. After\nsynchronization is complete, power must be turned off, then on."
  },
  {
    id: 50,
    message:
      "DME CHECK RANGE -  DME range\ndisagreement. Check position sensors.",
    description:
      "A failure or disagreement has been detected in a DME receiver.  Check position sensors."
  },
  {
    id: 51,
    message: "ECS -  Service required.",
    description: "The Environmental Control System has failed."
  },
  {
    id: 52,
    message: "EPS -  Service required.",
    description: "Electrical Power System needs servicing."
  },
  {
    id: 53,
    message: "EPS -  S/G speed sensor failed.",
    description: "Starter Generator speed sensor has failed."
  },
  {
    id: 54,
    message: "ESP CONFIG -  ESP config error. Config service req'd .",
    description:
      "ESP is not configured properly.  The system should be serviced."
  },
  {
    id: 55,
    message: "EXCEEDANCE -  Exceedance data is being logged.",
    description: "An exceedance log has been cap tured."
  },
  {
    id: 56,
    message: "FAILED PATH -A   data path has failed.",
    description: "A data path connected to the GDU or the GIA 63/W has failed."
  },
  {
    id: 57,
    message: "FPL WPT LOCK -  Flight plan waypoint is locked.",
    description:
      "Upon power-up, the system detects that a stored flight plan waypoint is locked.  This occurs when an navigation database update eliminates an obsolete waypoint.  The flight plan cannot find the specified waypoint and flags this message. This can also occur with user waypoints in a flight plan that is deleted.\nRemove the waypoint from the flight plan if it no longer exists in any database,\nOr\nupdate the waypoint name/identifier to reflect the new information."
  },
  {
    id: 58,
    message: "FPL WPT MOVE -  Flight plan waypoint moved.",
    description:
      "The system has detected that a waypoint coordinate has changed due to a new\nnavigation database update.  Verify that stored flight plans contain correct waypoint locations."
  },
  {
    id: 59,
    message: "FPL TRUNC -  Flight plan has been truncated.",
    description:
      "This occurs when a newly installed navigation database eliminates an obsolete approach or arrival used by a stored flight plan. The obsolete procedure is removed\nfrom the flight plan. Update flight plan with current arrival or approach ."
  },
  {
    id: 60,
    message: "FS510 CARD ERROR -  FS 510 not\ndetected in MFD Bottom Slot.",
    description:
      "The SD card was removed from the bottom card slot of the MFD. The SD card needs to be reinserted."
  },
  {
    id: 61,
    message: "G/S1 FAIL- G/S1 is inoperative.",
    description:
      "A failure has been detected in glideslope receiver 1. The system should be serviced."
  },
  {
    id: 62,
    message: "G/S1 SERVICE -  G/S1 needs service. Return unit for repair.",
    description:
      "A failure has been detected in glideslope receiver 1. The receiver may still be available.  The system should be serviced when possible."
  },
  {
    id: 63,
    message: "G/S2 FAIL -  G/S2 is inoperative.",
    description:
      "A failure has been detected in glideslope receiver 2. The system should be serviced."
  },
  {
    id: 64,
    message: "G/S2 SERVICE -  G/S2 needs serv ice. Return unit for repair.",
    description:
      "A failure has been detected in glideslope receiver 2. The receiver may still be available.  The system should be serviced when possible."
  },
  {
    id: 65,
    message: "GCU CNFG -  GCU Config error. Config service req'd .",
    description:
      "GCU 475 configuration settings do not match those of backup configuration memory. The system should be serviced."
  },
  {
    id: 66,
    message: "GCU FAIL -  GCU is inoperative.",
    description:
      "A failure has been detected in the GCU 475. The GCU 475 is unavailable."
  },
  {
    id: 67,
    message: "GCU KEYSTK -  GCU [key name] Key is stuck.",
    description:
      "A key is stuck on the GCU 475 bezel.  Attempt to free the stuck key by pressing it several times. The system should be serviced if the problem persists."
  },
  {
    id: 68,
    message: "GCU MANIFEST -  GCU software mismatch, communication halted.",
    description:
      "The GCU 475 has incorrect software installed.  The system should be serviced."
  },
  {
    id: 69,
    message: "GDC1 MANIFEST -  GDC1 software mismatch, communication halted.",
    description:
      "The GDC 74B has incorrect software installed. The system should be serv iced."
  },
  {
    id: 70,
    message: "GDC2 MANIFEST -  GDC2 software mismatch, communication halted.",
    description:
      "The GDC 74B has incorrect software installed.  The system should be serv iced."
  },
  {
    id: 71,
    message: "GDL MANIFEST -  GDL software mismatch, communication halted.",
    description:
      "The GDL 69A SXM has incorrect software installed.  The system should be serviced."
  },
  {
    id: 72,
    message: "GDL69 CONFIG -  GDL 69 config\nerror.  Config service req'd.",
    description:
      "GDL 69A SXM configuration settings do not match those of backup configuration memory.  The system should be serviced."
  },
  {
    id: 73,
    message: "GDL69 FAIL -  GDL 69 has failed.",
    description:
      "A failure has been detected in the GDL 69A SX M. The receiver is unavailable. The system should be serviced"
  },
  {
    id: 74,
    message: "GEA1 CONFIG -  GEA1 config error. Config service req'd.",
    description:
      "The GEA1 configuration settings do not match those of backup configuration memory. The system should be serviced."
  },
  {
    id: 75,
    message: "GEA1 MANIFEST -  GEA1 software mismatch, communication halted.",
    description:
      "The #1 GEA 71 has incorrect software installed. The system should be serviced."
  },
  {
    id: 76,
    message: "GEA2 CONFIG -  GEA2 config error. Config service req'd .",
    description:
      "The GEA2 configuration settings do not match those of backup configuration memory. The system should be serv iced ."
  },
  {
    id: 77,
    message: "GEA2 MANIFEST -  GEA2 software mismatch, communication halted.",
    description:
      "The #2 GEA 71 has incorrect software installed . The system should be serviced."
  },
  {
    id: 78,
    message: "GEO LIMITS-AHRS1 too far North/ South, no magnetic compass.",
    description:
      "The aircraft is outside geographical limits for approved AHRS operation. Heading is flagged as invalid ."
  },
  {
    id: 79,
    message: "GEO LIMITS-AHRS2 too far North/ South, no magnetic compass.",
    description: ""
  },
  {
    id: 80,
    message: "GFC MANIFEST -  GFC software mismatch, communication halted.",
    description:
      "Incorrect servo software is installed, or gain settings are incorrect."
  },
  {
    id: 81,
    message: "GIA1 CONFIG -  GIA1 audio config error.  Config service req'd.",
    description:
      "The GIA1 have an error in the audio configuration. The system should be serviced."
  },
  {
    id: 82,
    message: "GIA1 CONFIG -  GIA1 config error. Config service req'd.",
    description:
      "The GIA1 configuration settings do not match backup configuration memory.  The system should be serviced."
  },
  {
    id: 83,
    message: "GIA1 COOLING -  GIA1 over\ntemperature.",
    description:
      "The GIA1 temperature is too high.  If problem persists, the system should be serviced."
  },
  {
    id: 84,
    message: "GIA1 COOLING -  GIA1 temperature too low.",
    description:
      "he GIA1 configuration settings do not match backup configuration memory.  The system should be serv iced ."
  },
  {
    id: 85,
    message: "GIA1 MANIFEST -  GIA1 software mismatch, communication halted.",
    description:
      "The GIA1 has incorrect software installed. The system should be serv iced."
  },
  {
    id: 86,
    message: "GIA1 SERVICE -  GIA1 needs service. Return the unit for repair.",
    description:
      "The GIA1 self-test has detected a problem in the unit. The system should be serviced."
  },
  {
    id: 87,
    message: "GIA2 CONFIG -  GIA2 config error. Config service req'd.",
    description:
      "The GIA2 configuration settings do not match backup configuration memory.  The system should be serviced."
  },
  {
    id: 88,
    message: "GIA2 CONFIG -  GIA2 audio config error.  Config service req'd.",
    description:
      "The GIA2 have an error in the audio configuration. The system should be serviced."
  },
  {
    id: 89,
    message: "GIA2 COOLING -  GIA2 temperature too low.",
    description:
      "The GIA2 temperature is too low to operate correctly.  Allow units to warm up to operating tempera ture."
  },
  {
    id: 90,
    message: "GIA2 COOLING -  GIA2 over\ntemperature.",
    description:
      "The GIA2 temperature is too high.  If problem persists, the system should be serviced."
  },
  {
    id: 91,
    message: "GIA2 MANIFEST -  GIA2 software mismatch, communication halted.",
    description:
      "The GIA 2 has incorrect software installed.  The system should be serviced."
  },
  {
    id: 92,
    message: "GIA2 SERVICE -  GIA2 needs service. Return the unit for repair.",
    description:
      "The GIA2 self-test has detected a problem in the unit. The system should be serviced."
  },
  {
    id: 93,
    message: "GMA XTALK -  GMA crosstalk error has occurred.",
    description:
      "An error has occurred in transferring data between the two GMAs. The system should be serviced."
  },
  {
    id: 94,
    message:
      "GMA1 AUX MANIFEST -GMA 1 AUX\nsoftware mismatch, communication halted.",
    description:
      "The digital audio controller has incorrect software installed.  The system should be serviced."
  },
  {
    id: 95,
    message:
      "GMA1 CONFIG -  GMA1 config error.    The audio panel configuration settings do not match backup configuration memory. Config service req'd.                         The system should be serviced.",
    description: ""
  },
  {
    id: 96,
    message:
      "GMA1 FAIL -  GMA 1 is inoperative.       The audio panel self-test has detected a failure.  The audio panel is unavailable.  The",
    description: ""
  },
  {
    id: 97,
    message: "",
    description: "system should be serviced."
  },
  {
    id: 98,
    message: "GMA1 MANIFEST -  GMA1 software mismatch, communication halted.",
    description:
      "The audio panel has incorrect software installed.  The system should be serviced."
  },
  {
    id: 99,
    message: "GMA1 SERVICE -  GMA1 needs ser? vice.  Return unit for repair.",
    description:
      "The audio panel self-test has detected a problem in the unit.  Certain audio functions may still be available, and the audio panel may still be usable. The system should be serviced when possible."
  },
  {
    id: 100,
    message: "GMA2 CONFIG -  GMA2 config error. Config service req'd .",
    description:
      "The audio panel configuration settings do not match backup configuration memory. The system should be serviced."
  },
  {
    id: 101,
    message: "GMA2 FAIL -  GMA2 is inoperative.",
    description:
      "The audio panel self-test has detected a failure.  The audio panel is unavailable.  The system should be serviced."
  },
  {
    id: 102,
    message: "GMA2 MANIFEST -GMA2 software mismatch, communication halted.",
    description:
      "The audio panel has incorrect software installed.  The system should be serviced."
  },
  {
    id: 103,
    message: "GMA2 SERVICE -  GMA2 needs ser? vice.  Return unit for repair.",
    description:
      "The audio panel self-test has detected a problem in the unit.  Certain audio functions may\nstill be available, and the audio panel may still be usable. The system should be serviced when possible."
  },
  {
    id: 104,
    message: "GMC CONFIG -  GMC Config error. Config service req'd.",
    description: "Error in the configuration of the GMC 710 ."
  },
  {
    id: 105,
    message: "GMC FAIL- GMC is inoperative.",
    description:
      "A failure has been detected in the GMC 710. The GMC 710 is unavailable."
  },
  {
    id: 106,
    message: "GMC KEYSTK -  GMC [key name] Key is stuck.",
    description:
      "A key is stuck on the GMC 710 bezel.  Attempt to free the stuck key by pressing it several times. The system should be serviced if the problem persists."
  },
  {
    id: 107,
    message: "GMC MANIFEST -  GMC software mismatch.  Communication halted.",
    description:
      "The GMC 710 has incorrect software installed.  The system should be serviced."
  },
  {
    id: 108,
    message: "GMU1 MANIFEST -  GMU1 software mismatch, communication halted.",
    description:
      "The GMU 44 has incorrect software installed.  The system should be serviced."
  },
  {
    id: 109,
    message: "GMU2 MANIFEST -  GMU2 software mismatch, communication halted.",
    description:
      "he GMU 44 has incorrect software installed.  The system should be serviced."
  },
  {
    id: 110,
    message:
      "GPS NAV LOST -  Loss of GPS\nnavigation. Insufficient satellites.",
    description: "Loss of GPS navigation due to insufficient satellites."
  },
  {
    id: 111,
    message: "GPS NAV LOST -  Loss of GPS\nnavigation. Position error.",
    description: "Loss of GPS navigation due to position error."
  },
  {
    id: 112,
    message: "GPS NAV LOST -  Loss of GPS\nnavigation. GPS fail.",
    description: "Loss of GPS navigation due to GPS failure."
  },
  {
    id: 113,
    message: "GPS1 SERVICE-GPS1 needs serv ice. Return unit for repair.",
    description:
      "A failure has been detected in the GPS1 and/or GPS2 receiver.  The receiver may still be available. The system should be serviced."
  },
  {
    id: 114,
    message: "GPS2 SERVICE -  GPS2 needs serv ice. Return unit for repair.",
    description: ""
  },
  {
    id: 115,
    message: "GRA1 CAL -  GRA1 calibration. Service req'd.",
    description:
      "GRA1 has improper calibration.  The system should be serviced."
  },
  {
    id: 116,
    message: "GRA1 CONFIG -  GRA1 config error. Config service req'd .",
    description: "The GRA and GDU have incompatible configurations."
  },
  {
    id: 117,
    message: "GRA1 MANIFEST -  GRA1 software mismatch, communication halted.",
    description:
      "The GRA has incorrect software installed.  The system should be serviced."
  },
  {
    id: 118,
    message: "GRA1 SERVICE- GRA1 needs service. Return unit for repair",
    description:
      "The GRA self-test has detected a problem in the unit. The system should be serviced."
  },
  {
    id: 119,
    message: "GRA1 TEMP-GRA1 over\ntemperature.",
    description:
      "The system has detected an over temperature condition in GRA1."
  },
  {
    id: 120,
    message: "GRS1 CONFIG- GRS1 config error. Config service req'd .",
    description:
      "GRS configuration settings do not match those of backup configuration memory.  The system should be serviced."
  },
  {
    id: 121,
    message: "GRS1 MANIFEST -  GRS1 sohware\nmismatch, communication halted.",
    description:
      "The #1 AHRS has incorrect software installed. The system should be serv iced."
  },
  {
    id: 122,
    message: "GRS1 SERVICE -  GRS1 needs serv ice. Return unit for repair.",
    description: "The AHRS1 should be serviced when practical."
  },
  {
    id: 123,
    message: "GRS2 CONFIG -  GRS2 config error. Config service req'd.",
    description:
      "GRS configuration settings do not match those of backup configuration memory.  The system should be serviced."
  },
  {
    id: 124,
    message: "GRS2 MANIFEST -  GRS2 sohware\nmismatch, communication halted.",
    description:
      "The #2 AHRS has incorrect software installed.  The system should be serv iced."
  },
  {
    id: 125,
    message: "GRS2 SERVICE -  GRS1 needs serv ice. Return unit for repair.",
    description: "The AHRS1 should be serviced when practical."
  },
  {
    id: 126,
    message: "GSR1 FAIL -  GSR1 has failed.",
    description:
      "A failure has been detected in the #1 GSR 56. The system should be serviced."
  },
  {
    id: 127,
    message: "GTS CONFIG -  GTS config error. Config service req'd .",
    description:
      "The GTS and GDU have incompatible configurations. This alert is also set when the GTS has an invalid mode S address configured or the mode S address does not match both XPDR mode S addresses."
  },
  {
    id: 128,
    message: "GTS MANIFEST -  GTS software mismatch, communication halted.",
    description:
      "The GTS has incorrect software installed.  The system should be serviced."
  },
  {
    id: 129,
    message: "GTX1 MANIFEST -  GTX1 software mismatch, communication halted.",
    description:
      "The transponder has incorrect software installed.  The system should be serviced."
  },
  {
    id: 130,
    message: "GTX2 MANIFEST -  GTX2 software mismatch, communication halted.",
    description:
      "The transponder has incorrect software installed.  The system should be serviced."
  },
  {
    id: 131,
    message: "GWX CONFIG -  GWX config error. Config service req'd.",
    description:
      "GWX 68 or GWX 70 configuration settings do not match those of the GDU configuration. The system should be serviced."
  },
  {
    id: 132,
    message: "GWX MANIFEST -  GWX software mismatch, communication halted.",
    description:
      "The GWX 68/GWX 70 has incorrect software installed.  The system should be serviced."
  },
  {
    id: 133,
    message: "GWX SERVICE -  GWX needs service. Return unit for repair.",
    description:
      "A failure has been detected in the GWX 68 or GWX 70. The GWX 68 or GWX 70may still be usable."
  },
  {
    id: 134,
    message: "HDG FAULT -AHRS1 magnetometer fault has occurred.",
    description:
      "A fault has occurred in the #1 GMU 44. Heading is flagged as invalid.  The AHRS uses GPS for backup mode operation.  The system should be serviced."
  },
  {
    id: 135,
    message: "HDG FAULT -AHRS2 magnetometer fault has occurred.",
    description:
      "A fault has occurred in the #2 GMU 44. Heading is flagged as inva lid. The AHRS uses GPS for backup mode operation.  The system should be serviced."
  },
  {
    id: 136,
    message: "HOLD EXPIRED -  Holding EFC time expired.",
    description:
      "Expect Further Clearance (EFC) time has expired for the User Defined Hold."
  },
  {
    id: 137,
    message:
      "HW MISMATCH -  GIA hardware\nmismatch.  GIA1 communication halted.",
    description:
      "A GIA mismatch has been detected, where only one is SBAS capable."
  },
  {
    id: 138,
    message:
      "HW MISMATCH -  GIA hardware mismatch.  GIA2 communication halted.",
    description:
      "A GIA mismatch has been detected, where only one is SBAS capable."
  },
  {
    id: 139,
    message: "INSIDE ARSPC -  Inside airspace.",
    description: "The aircraft is inside the special use airspace."
  },
  {
    id: 140,
    message: "INVALID ADM -  Invalid ADM: ATN\ncommunication halted.",
    description:
      "Data link avionics were not configured correctly and therefore will not be able to communicate with the ground network."
  },
  {
    id: 141,
    message: "LOCKED FPL -  Cannot navigate locked flight plan.",
    description:
      "This occurs when the pilot attempts to activate a stored flight plan that contains\nlocked waypoint.  Remove locked waypoint from flight plan.  Update flight plan with current waypoint."
  },
  {
    id: 142,
    message: "LOI -  GPS integrity lost. Crosscheck with other NAVS.",
    description:
      "GPS integrity is insufficient for the current phase of flight."
  },
  {
    id: 143,
    message: "LOSS OF GPS NAVIGATION -  Poor\nSatellite Coverage .",
    description:
      "Loss of GPS navigation due to insufficient/poor satellite coverage."
  },
  {
    id: 144,
    message: "LOW BANK ACTIVE -  Disengage for app roach.",
    description: "Low Bank mode is active. Disengage to continue approach."
  },
  {
    id: 145,
    message: "LOW BANK ACTIVE -  Disengage for RNP less than 1.0.",
    description: "Low Bank mode is active. Disengage to continue RNP 1.0."
  },
  {
    id: 146,
    message: "LRG MAG VAR -Verify all course angles.",
    description:
      "The GDU's internal model cannot determine the exact magnetic variance for geographic locations near the magnetic poles.  Displayed magnetic course angles may differ from the actual magnetic heading by more than 2�."
  },
  {
    id: 147,
    message: "MFD1 CONFIG -  MFD1 config error. Config service req'd .",
    description:
      "The MFD configuration settings do not match backup configuration memory.  The system should be serviced."
  },
  {
    id: 148,
    message: "MFD1 COOLING -  MFD1 has poor cooling.  Reducing power usage.",
    description:
      "The MFD is overheating and is reducing power consumption by dimming the display. If problem persists, the system should be serviced."
  },
  {
    id: 149,
    message: "MFD1 DB ERR -  MFD1 navigation database error exists.",
    description:
      "The MFD detected a failure in the navigation database. Attempt to reload the navigation database.  If problem persists, the system should be serviced."
  },
  {
    id: 150,
    message: "MFD1 DB ERR- MFD1 basemap database error exists.",
    description: "The MFD detected a failure in the basemap database."
  },
  {
    id: 151,
    message: "MFD1 DB ERR- MFD1 basemap database is incompatible.",
    description: "The MFD detected a that the basemap database is incompatible."
  },
  {
    id: 152,
    message: "MFD1 DB ERR -  MFD1 terrain database error exists.",
    description:
      "The MFD detected a failure in the terrain database. Ensure that the terrain card is properly inserted in display.  Replace terrain card.  If problem persists, The system\nshould be service d."
  },
  {
    id: 153,
    message: "MFD1 DB ERR -  MFD1 terrain database missing.",
    description:
      "The terrain database is present on another LRU, but is missing on the specified LRU."
  },
  {
    id: 154,
    message: "MFD1 DB ERR -  MFD1 Chartview database error exists.",
    description:
      "The MFD detected a failure in the ChartView database (optional feature). Ensure\nthe data card is properly inserted. Replace data card.  If problem persists, the system should be serviced."
  },
  {
    id: 155,
    message: "MFD1 DB ERR -  MFD1 FliteCharts database error exists.",
    description:
      "The MFD detected a failure in the FliteCharts database (optional feature). Ensure\nthe data card is properly inserted.  Replace data card . If problem persists, the system should be serviced."
  },
  {
    id: 156,
    message: "MFD1 DB ERR -  MFD1 Airport\nDirectory database error exists.",
    description:
      "The MFD detected a failure in the Airport Directory database.  Ensure the data card is properly inserted. Replace data card.  If problem persists, the system should be serviced."
  },
  {
    id: 157,
    message: "MFD1 DB ERR -  MFD1 obstacle database error exists.",
    description:
      "The MFD detected a failure in the obstacle database.  Ensure that the data card\nis properly inserted.  Replace data card . If problem persists, The system should be service d."
  },
  {
    id: 158,
    message: "MFD1 DB ERR -  MFD1 obstacle database missing.",
    description:
      "The obstacle database is present on another LRU, but is missing on the specified LRU."
  },
  {
    id: 159,
    message: "MFD1 DB ERR -  MFD1 Safe Taxi\ndatabase error exists.",
    description:
      "The MFD detected a failure in the Safe Taxi database.  Ensure that the data card\nis properly inser ted. Replace data card . If problem persists, The system should be service d."
  },
  {
    id: 160,
    message: "MFD1 KEYSTK- MFD [key name] Key is stuck.",
    description:
      "A key is stuck on the PFD and /or MFD bezel.  Attempt to free the stuck key by pressing it several times.  The system should be serviced if the problem persists."
  },
  {
    id: 161,
    message: "MFD1 MANIFEST -  MFD1 software mismatch, communication halted.",
    description:
      "The MFD has incorrect software installed.  The system should be serv iced ."
  },
  {
    id: 162,
    message: "MFD1 SERVICE -  MFD1 needs\nserv ice. Return unit for repair.",
    description:
      "The MFD self-test has detected a problem.  The system should be serviced."
  },
  {
    id: 163,
    message: "MFD1 VOLTAGE -  MFD1 has low\nvoltage.  Reducing power usage",
    description: "The MFD voltage is low. The system should be serviced."
  },
  {
    id: 164,
    message: "NAV1 MANIFEST -  NAV1 software mismatch, communication halted.",
    description:
      "The NAV1 has incorrect software installed.  The system should be serviced."
  },
  {
    id: 165,
    message: "NAV1 RMT XFR -  NAV1 remote\ntransfer key is stuck.",
    description:
      'The remote NAV1 transfer switch is stuck in the enabled (or "pressed") state.  Press\nthe transfer switch again to cycle its operation.  If the problem persists, the system should be serviced.'
  },
  {
    id: 166,
    message:
      "NAV1 SERVICE -  NAV1 needs service.   A failure has been detected in the NAV1 receiver. The receiver may still be available. Return unit for repair.                        The system should be serviced.",
    description: ""
  },
  {
    id: 167,
    message:
      "NAV2 MANIFEST -  NAV2 software       The NAV2 has incorrect software installed. The system should be service d. mismatch, communication halted.",
    description: ""
  },
  {
    id: 168,
    message: "NAV2 RMT XFR -  NAV2 remote\ntransfer key is stuck.",
    description:
      'The remote NAV2 transfer switch is stuck in the enabled (or "pressed") state.  Press\nthe transfer switch again to cycle its operation.  If the problem persists, the system should be serviced.'
  },
  {
    id: 169,
    message:
      "NAV2 SERVICE -  NAV2 needs service.   A failure has been detected in the NAV2 receiver.  The receiver may still be available. Return unit for repair.                        The system should be serviced.",
    description: ""
  },
  {
    id: 170,
    message:
      "NAV DB UPDATED -Active                System has updated the active navigation database from the standby navigation navigation database updated.             database.",
    description: ""
  },
  {
    id: 171,
    message:
      "NON-MAG UNITS -  Non-magnetic       Navigation angle is not set to MAGNETIC at power-up. NAV ANGLE display units are active.",
    description: ""
  },
  {
    id: 172,
    message: "NON WGS84 WPT -  Do not use GPS for navigation to [xxxx]",
    description:
      "The position of the selected waypoint [xxxx] is not calculated based on the WGS84 map reference datum and may be positioned in error as displayed.  Do not use GPS to navigate to the selected non-WGS84 waypo int."
  },
  {
    id: 173,
    message:
      "PFD POSITIONS DIFFERENT -  PFD\npositions mismatch.  Check position sensors .",
    description:
      "There is a mismatch in the position sensed by the PFDs. Check position sensor settings. If message persists the system should be serviced."
  },
  {
    id: 174,
    message: "PFD1 CONFIG -  PFD1 config error. Config service req'd .",
    description:
      "The PFD configuration settings do not match backup configuration memory.  The system should be serviced."
  },
  {
    id: 175,
    message: "PFD1 COOLING -  PFD1 has poor cooling.  Reducing power usage.",
    description:
      "The PFD is overheating and is reducing power consumption by dimming the display. If problem persists, the system should be serviced."
  },
  {
    id: 176,
    message: "PFD1 DB ERR -  PFD1 basemap database error exists.",
    description: "The PFD detected a failure in the basemap database."
  },
  {
    id: 177,
    message: "PFD1 DB ERR -  PFD1 multiple database errors exists.",
    description:
      "The PFD detected a failure in more than one database.  If problem persists, the system should be serviced."
  },
  {
    id: 178,
    message: "PFD1 DB ERR -  PFD1\nnavigation database error exists.",
    description:
      "The PFD detected a failure in the navigation database.  Attempt to reload the navigation database . If problem persists, the system should be serv iced."
  },
  {
    id: 179,
    message: "PFD1 DB ERR -  PFD1 obstacle database error exists.",
    description:
      "The PFD detected a failure in the obstacle database.  Ensure that the data card is properly inserted. Replace data card . If problem persists, The system should be service d."
  },
  {
    id: 180,
    message: "PFD1 DB ERR -  PFD1 obstacle database missing.",
    description:
      "The obstacle database is present on another LRU, but is missing on the specified LRU."
  },
  {
    id: 181,
    message: "PFD1 DB ERR -  PFD1 Safe Taxi\ndatabase error exists.",
    description:
      "The PFD detected a failure in the Safe Taxi database . Ensure that the data card is properly inserted. Replace data card . If proble   m persists, the system should be service d."
  },
  {
    id: 182,
    message: "PFD1 DB ERR -  PFD1 terrain database error exists.",
    description:
      "The PFD detected a failure in the terrain database.  Ensure that the terrain card is\nproperly inserted in display. Replace terrain card . If problem persists, the system should be serviced."
  },
  {
    id: 183,
    message: "PFD1 DB ERR -  PFD1 terrain database missing.",
    description:
      "The terrain database is present on another LRU, but is missing on the specified LRU."
  },
  {
    id: 184,
    message: "PFD1 KEYSTK -  PFD1 [key name] is stuck.",
    description:
      "A key is stuck on the PFD bezel.  Attempt to free the stuck key by pressing it several times. The system should be serviced if the problem persists."
  },
  {
    id: 185,
    message: "PFD1 CARD 1 REM -  Card 1 was\nremoved.  Reinsert card.",
    description:
      "The SD card was removed from the top card slot of the specified PFD or MFD. The SD card needs to be reinserted."
  },
  {
    id: 186,
    message: "PFD1 CARD 2 REM -  Card 2 was\nremoved.  Reinsert card.",
    description:
      "The SD card was removed from the bottom card slot of the specified PFD or MFD. The SD card needs to be reinserted."
  },
  {
    id: 187,
    message: "PFD1 CARD 1 ERR -  Card 1 is invalid.",
    description:
      "The SD card in the top card slot of the specified PFD or MFD contains invalid data."
  },
  {
    id: 188,
    message: "PFD1 CARD 2 ERR -  Card 2 is invalid.",
    description:
      "The SD card in the bottom card slot of the specified PFD or MFD contains invalid data."
  },
  {
    id: 189,
    message: "PFD1 SERVICE -  PFD1 needs service. Return unit for repair.",
    description:
      "The PFD self-test has detected a problem. The system should be serviced."
  },
  {
    id: 190,
    message: "PFD1 VOLTAGE -  PFD1 has low\nvoltage.  Reducing power usage",
    description: "The PFD1 voltage is low. The system should be serv iced ."
  },
  {
    id: 191,
    message: "PFD2 CARD 1 REM -  Card 1 was\nremoved.  Reinsert card.",
    description:
      "The SD card was removed from the top card slot of the specified PFD or MFD. The SD card needs to be reinserted."
  },
  {
    id: 192,
    message: "PFD2 CARD 2 REM -  Card 2 was\nremoved.  Reinsert card.",
    description:
      "The SD card was removed from the bottom card slot of the specified PFD or MFD. The SD card needs to be reinserted."
  },
  {
    id: 193,
    message: "PFD2 CARD 1 ERR -  Card 1 is invalid.",
    description:
      "The SD card in the top card slot of the specified PFD or MFD contains invalid data."
  },
  {
    id: 194,
    message: "PFD2 CARD 2 ERR -  Card 2 is invalid.",
    description:
      "The SD card in the bottom card slot of the specified PFD or MFD contains invalid data."
  },
  {
    id: 195,
    message: "PFD2 CONFIG -  PFD2 config error. Config service req'd .",
    description:
      "The PFD configuration settings do not match backup configuration memory.  The system should be serviced."
  },
  {
    id: 196,
    message: "PFD2 COOLING -  PFD2 has poor cooling.  Reducing power usage.",
    description:
      "The PFD is overheating and is reducing power consumption by dimming the display. If problem persists, the system should be serviced."
  },
  {
    id: 197,
    message: "PFD2 DB ERR -  PFD2 basemap database error exists.",
    description: "The PFD detected a failure in the basemap database."
  },
  {
    id: 198,
    message: "PFD2 DB ERR -  PFD2 basemap database is incompa tible.",
    description: "The PFD detected a that the basemap database is incompatible."
  },
  {
    id: 199,
    message: "PFD2 DB ERR -  PFD2 navigation database error exists.",
    description:
      "The PFD detected a failure in the navigation database.  Attempt to reload the navigation database.  If problem persists, the system should be serviced."
  },
  {
    id: 200,
    message: "PFD2 DB ERR -  PFD2 obstacle database error exists.",
    description:
      "The PFD detected a failure in the obstacle database. Ensure that the data card is properly inserted. Replace data card . If problem persists, The system should be\nservice d."
  },
  {
    id: 201,
    message: "PFD2 DB ERR -  PFD2 obstacle database missing.",
    description:
      "The obstacle database is present on another LRU, but is missing on the specified LRU."
  },
  {
    id: 202,
    message: "PFD2 DB ERR -  PFD2 Safe Taxi\ndatabase error exists.",
    description:
      "The PFD detected a failure in the Safe Taxi database.  Ensure that the data card is properly inserted. Replace data card . If problem persists, The system should be\nservice d."
  },
  {
    id: 203,
    message: "PFD2 DB ERR -  PFD2 terrain database error exists.",
    description:
      "The PFD detected a failure in the terrain database. Ensure that the terrain card is\nproperly inserted in display.  Replace terrain card.  If problem persists, The system should be serviced."
  },
  {
    id: 204,
    message: "PFD2 DB ERR -  PFD2 terrain database missing.",
    description:
      "The terrain database is present on another LRU, but is missing on the specified LRU."
  },
  {
    id: 205,
    message: "PFD2 KEYSTK -  PFD2 [key name] Key is stuck.",
    description:
      "A key is stuck on the PFD bezel.  Attempt to free the stuck key by pressing it several times. The system should be serviced if the problem persists."
  },
  {
    id: 206,
    message: "PF2 MANIFEST -  PFD2 software mismatch, communication halted.",
    description:
      "The PFD has incorrect software installed.  The system should be serv iced ."
  },
  {
    id: 207,
    message: "PFD2 SERVICE -  PFD2 needs service. Return unit for repair.",
    description:
      "The PFD self-test has detected a problem.  The system should be serv iced."
  },
  {
    id: 208,
    message: "PFD2 VOLTAGE -  PFD2 has low\nvoltage.  Reducing power usage",
    description: "The PFD2 voltage is low. The system should be serviced."
  },
  {
    id: 209,
    message: "PILOT RADIOS MUTED -  Pilot\nradios are muted.",
    description: "The pilot radios are set on mute."
  },
  {
    id: 210,
    message: "PTK FAIL -  Parallel track unavailable: invalid leg type.",
    description: "Invalid leg type for parallel offset."
  },
  {
    id: 211,
    message: "PTK FAIL -  Parallel track unavailable: past IAF.",
    description: "IAF waypoint for parallel offset has been passed."
  },
  {
    id: 212,
    message: "PTK FAIL -  Parallel track unavailable: bad geometry.",
    description: "Bad parallel track geometry."
  },
  {
    id: 213,
    message: "RAIM UNAVAIL- RAIM is not\navailable from FAF to MAP waypoints.",
    description:
      "GPS satellite coverage is insufficient to perform Receiver Autonomous Integrity Monitoring (RAIM) from the FAF to the MAP waypoints."
  },
  {
    id: 214,
    message: "RECORDER SERVICE REQUIRED -\nThe CVDR needs service.",
    description: "The CVDR should be serviced."
  },
  {
    id: 215,
    message:
      "REGISTER CONNEXT -  Data services are inoperative, register w/ Connext.",
    description:
      "The system is not registered with Garmin Connext, or its current registration data has failed authentication."
  },
  {
    id: 216,
    message: "SCHEDULER [#] -  <message>.",
    description: "Message criteria entered by the user."
  },
  {
    id: 217,
    message: "SLCT FREQ -  Select appropriate frequency for approach.",
    description:
      "The system notifies the pilot to load the approach frequency for the appropriate NAV receiver. Select the correct frequency for the approach."
  },
  {
    id: 218,
    message: "SLCT MAG -  Select MAGNETIC NAV\nANGLE display units.",
    description:
      "The system notifies the pilot to set the Nav Angle units on the Avioncs Settings Screen to Magnetic."
  },
  {
    id: 219,
    message: "SLCT NON-MAG -  Select alternate NAV ANGLE display units.",
    description:
      "The system notifies the pilot to set the Nav Angle units on the Avioncs Settings Screen to True."
  },
  {
    id: 220,
    message: "STEEP TURN -  Steep turn ahead .",
    description: "A steep turn is 15 seconds ahead . Prepare to turn."
  },
  {
    id: 221,
    message: "STRMSCP FAIL -  Stormscope has failed.",
    description: "Stormscope has failed. The system should be serviced."
  },
  {
    id: 222,
    message: "SVT -  SVT DISABLED: Out of available terrain region.",
    description:
      "Synthetic Vision is disabled because the aircraft is not within the boundaries of the installed terrain database."
  },
  {
    id: 223,
    message: "SVT -  SVT DISABLED: Terrain DB\nresolution too low.",
    description:
      "Synthetic Vision is disabled because a terrain database of sufficient resolution (9 arc? second or better) is not currently installed."
  },
  {
    id: 224,
    message: "SW MISMATCH -  GDU software version misma tch. Xtalk is off.",
    description:
      "The MFD and PFDs have different software versions installed . The system should be serviced."
  },
  {
    id: 225,
    message:
      "TERRAIN DSP- [PFD1, PFD2 or\nMFD1] Terrain awareness display unavailable.",
    description:
      "One of the terrain, or obstacle databases required for TAWS in the specified PFD or MFD is missing or invalid."
  },
  {
    id: 226,
    message: "TIMER EXPIRD -  Timer has expired.",
    description: "The system notifies the pilot that the timer has expired ."
  },
  {
    id: 227,
    message: "UNABLE V WPT -  Can't reach current vertical waypoint.",
    description:
      "The current vertical waypoint can not be reached within the maximum flight path\nangle and vertical speed constraints.  The system automatically transitions to the next vertical waypoint."
  },
  {
    id: 228,
    message: "VNV UNAVAILABLE -  Excessive crosstrack error.",
    description:
      "The current crosstrack exceeds the limit, causing vertical deviation to go invalid."
  },
  {
    id: 229,
    message: "VNV UNAVAILABLE -  Unavailable. Excessive track angle error.",
    description:
      "The current track angle error exceeds the limit, causing the vertical deviation to go invalid."
  },
  {
    id: 230,
    message: "VNV UNAVAILABLE -  Parallel course selected.",
    description:
      "A parallel course has been selected, causing the vertical deviation to go invalid."
  },
  {
    id: 231,
    message: "VNV UNAVAILABLE -  Unsupported leg type in flight plan.",
    description:
      "The lateral flight plan contains a procedure turn, vector, or other unsupported leg\ntype prior to the active vertical waypoint.  This prevents vertical guidance to the active vertical waypoint."
  },
  {
    id: 232,
    message:
      "WPT ARRIVAL -Arriving at waypoint\n-[xxxx]                                          Arriving at waypoint [xxxx], where [xxxx] is the waypoint name.",
    description: ""
  },
  {
    id: 233,
    message:
      "WX ALERT -  Possible severe weather    The GWX 68/GWX 70 indicates severe weather within �10� of the aircraft heading at ahead .                                          a range of 80 to 320 nm.",
    description: ""
  },
  {
    id: 234,
    message: "XPDR1 ADS-B 1090 -  Datalinik: ADS-B 1090 receiver has failed.",
    description: "A failure has been detected in the 1090 receiver."
  },
  {
    id: 235,
    message:
      "XPDR1 ADS-B NO POS -\nTransponder: ADS-B is not transmitting position.",
    description: "The transponder is not able to receive position information."
  },
  {
    id: 236,
    message: "XPDR1 ADS-B TRFC -  Transponder: ADS-B traffic has failed",
    description:
      "The Transponder is incapable of processing traffic information."
  },
  {
    id: 237,
    message: "XPDR1 ADS-B UAT -  Datalink: ADS-B in UAT receiver has failed.",
    description: "A failure has been detected in the UAT receiver."
  },
  {
    id: 238,
    message: "XPDR1 CONFIG -  XPDR1 config error. Config service req'd.",
    description:
      "The transponder configuration settings do not match those of backup configuration memory.  The  system should be serviced."
  },
  {
    id: 239,
    message: "XPDR1 SRVC -  XPDR1 needs serv ice. Return unit for repair.",
    description: "The #1 transponder should be serviced when possible."
  },
  {
    id: 240,
    message: "XPDR2 ADS-B 1090 -  Datalinik: ADS-B 1090 receiver has failed.",
    description: "A failure has been detected in the 1090 receiver."
  },
  {
    id: 241,
    message:
      "XPDR2 ADS-B NO POS -\nTransponder: ADS-B is not transmitting position.",
    description: "The transponder is not able to receive position information."
  },
  {
    id: 242,
    message: "XPDR2 ADS-B TRFC -  Transponder: ADS-B traffic has failed",
    description:
      "The Transponder is incapable of processing traffic information."
  },
  {
    id: 243,
    message: "XPDR2 ADS-B UAT -  Datalink: ADS-B in UAT receiver has failed.",
    description: "A failure has been detected in the UAT receiver."
  },
  {
    id: 244,
    message: "XPDR2 CONFIG -  XPDR2 config error. Config service req'd .",
    description:
      "The transponder configuration settings do not match those of backup configuration memory.  The  system should be service d."
  },
  {
    id: 245,
    message: "XPDR2 SRVC -  XPDR2 needs serv ice. Return unit for repair.",
    description: "The #2 transponder should be serviced when possible."
  },
  {
    id: 246,
    message: "XTALK ERROR -A   flight display crosstalk error has occurred.",
    description:
      "The MFD and PFDs are not communicating with each other. The system should be serviced."
  }
];
