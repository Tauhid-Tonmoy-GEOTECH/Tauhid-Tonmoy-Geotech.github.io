/* =====================================================================
   CONTENT FILE — the only file you need to edit to update your website.
   Rules: keep the quotes "..." and commas exactly as they are.
   To add an item, copy an existing { ... } block, paste it, and edit it.
   To hide an item without deleting it, set  show: false
   ===================================================================== */

window.CONTENT = {

  name: "Md. Tauhidul Islam Akanda Tonmoy",
  shortName: "Tauhidul Islam Tonmoy",
  role: "Geotechnical Engineer",
  location: "Dhaka, Bangladesh",
  careerStart: "2018-07",            // used to calculate years of experience automatically
  photo: "photo.jpg",
  cv: "",                             // e.g. "cv.pdf" — leave "" to hide the download button

  summary: [
    "Geotechnical engineer practising in Bangladesh since 2018, covering the full project cycle: planning and supervising subsurface investigations, managing laboratory testing programmes, and translating the results into safe, economical foundation designs.",
    "My specialist areas are seismic liquefaction hazard assessment, using multiple triggering and consequence methods, and axial pile capacity evaluation that combines analytical methods with PLAXIS-based numerical load-test simulation.",
    "I have delivered this work on power, transmission, transport and urban-resilience infrastructure, as well as industrial and commercial buildings, in accordance with BNBC 2020 and AASHTO LRFD."
  ],

  contact: {
    email: "tauhid.tonmoy.ak@gmail.com",
    phone: "",                        // leave "" to keep your phone number off the public site
    linkedin: "",                     // e.g. "https://www.linkedin.com/in/your-id"
    researchgate: "",
    scholar: ""
  },

  /* ---------- Technical competencies ---------- */
  competencies: [
    {
      title: "Liquefaction hazard assessment",
      text: "Triggering analysis from SPT, CPT and shear-wave velocity data using the probabilistic and deterministic SPT-based procedure of Cetin et al. [1] and the SPT/CPT-based procedure of Boulanger and Idriss [2]. Consequences are quantified through the Liquefaction Potential Index (LPI) [3], the Lateral Displacement Index (LDI) and lateral spreading displacement [4], with inter-method comparison to bound predictive uncertainty.",
      show: true
    },
    {
      title: "Pile foundation analysis",
      text: "Axial capacity of precast, driven and bored piles by static analytical methods (α- and β-methods, Vesić, Tomlinson) under BNBC 2020 and AASHTO LRFD. Numerical verification in PLAXIS 2D through staged-construction simulation of a static load test, with ultimate capacity interpreted from the load–settlement curve at 12 mm settlement and at 10% of pile diameter.",
      show: true
    },
    {
      title: "Settlement analysis",
      text: "Immediate and consolidation settlement of shallow, mat and pile foundations by empirical and analytical methods, cross-checked with numerical analysis in GEO5 and PLAXIS 2D.",
      show: true
    },
    {
      title: "Site investigation and testing",
      text: "Planning and supervision of SPT, CPT, SCPT and seismic downhole (SDHT) testing, pile integrity (PIT) and static load tests; laboratory programmes including unconfined compression, consolidation and triaxial testing; shear-wave record processing for site characterisation.",
      show: true
    }
  ],

  /* ---------- Software (grouped by purpose) ---------- */
  software: [
    { group: "Numerical and geotechnical analysis", items: ["PLAXIS 2D", "GEO5 suite"] },
    { group: "Deep foundations and excavations",    items: ["DeepFND", "DeepEX", "LPILE", "AllPile"] },
    { group: "Liquefaction and geophysics",         items: ["NovoLIQ", "ReflexW (shear-wave analysis)"] }
  ],

  /* ---------- Experience (newest first) ---------- */
  experience: [
    {
      from: "2022-02", to: "present",
      role: "Geotechnical Engineer",
      org: "ES Lab Ltd.", place: "Dhaka",
      points: [
        "Lead field and laboratory investigation programmes and translate results into foundation design.",
        "Perform liquefaction hazard assessment and specify ground-improvement measures.",
        "Carry out pile capacity, settlement and lateral-spring analysis for industrial and commercial buildings.",
        "Prepare geotechnical reports and advise clients and design teams on foundation selection."
      ],
      show: true
    },
    {
      from: "2020-03", to: "2021-12",
      role: "Supervision Engineer",
      org: "JV of NKY–Protek Yapı & Sheltech", place: "Dhaka",
      points: [
        "Supervised sub-consultant geotechnical investigations for the Urban Resilience Project (RAJUK, Component S-05).",
        "Guided site supervisors on test procedures and specifications; monitored laboratory testing weekly.",
        "Conducted Rapid Visual Assessments of buildings and critical facilities for Risk-Sensitive Land Use Planning."
      ],
      show: true
    },
    {
      from: "2018-07", to: "2020-02",
      role: "Assistant Geotechnical Engineer",
      org: "Amin Design & Consultancy", place: "Dhaka",
      points: [
        "Conducted site investigations, CPT and SCPT testing, and laboratory testing (UCS, consolidation, triaxial).",
        "Prepared investigation reports with recommendations, technical and financial proposals, and BOQs."
      ],
      show: true
    }
  ],

  /* ---------- Key project experience ----------
     tags must be one or more of: "Field supervision", "Laboratory testing", "Liquefaction", "Foundation design"
     sector: a short line shown under the title (client, sector or role)  */
  projects: [
    { title: "Urban Resilience Project, RAJUK (Component S-05)",
      sector: "Client: RAJUK | NKY–Protek Yapı–Sheltech JV | Role: Supervision Engineer",
      tags: ["Field supervision", "Laboratory testing"],
      text: "Supervised a city-scale subsurface investigation programme for risk-sensitive land-use planning in Dhaka, comprising 400 SPT boreholes, 400 seismic downhole tests (SDHT), 140 CPT and 400 SCPT soundings executed by sub-consultants. I verified field procedures and data quality against the project specifications, reviewed borelogs and geophysical records, and audited the laboratory testing of recovered samples on a weekly basis. I also carried out Rapid Visual Assessments of buildings and critical facilities to validate the planning database.", show: true },

    { title: "Matarbari Coal-Fired Power Plant Project",
      sector: "Energy infrastructure",
      tags: ["Field supervision", "Laboratory testing", "Liquefaction"],
      text: "Executed the geotechnical field investigation for a major coastal power-generation facility, combining SPT boreholes, CPT soundings and seismic downhole testing. I supervised drilling, sampling and in-situ testing, and coordinated a laboratory programme on the recovered samples that included triaxial testing for design strength parameters. The field and laboratory data were then integrated into a liquefaction assessment of the saturated coastal deposits, providing input to foundation and ground-improvement decisions.", show: true },

    { title: "Power Grid Strengthening Project",
      sector: "Client: PGCB | CCCE–ETERN–FEPAC Consortium | Power transmission",
      tags: ["Field supervision", "Laboratory testing", "Foundation design"],
      text: "Conducted the geotechnical investigation and foundation assessment for power-grid strengthening works. My role covered supervision of SPT boreholes and sampling, laboratory classification and strength testing, and interpretation of subsurface profiles for each site. Using these results, I evaluated the bearing capacity, pile capacity and settlement of the proposed foundations, and prepared geotechnical reports with design recommendations for the consortium's engineering team.", show: true },

    { title: "Dhaka and Western Zone Transmission Line Expansion Project",
      sector: "Client: PGCB | CCCE–ETERN Consortium | Power transmission",
      tags: ["Field supervision", "Laboratory testing", "Foundation design"],
      text: "Delivered geotechnical investigation and foundation design input for transmission-line expansion works across the Dhaka and Western zones. The work involved coordinating field drilling and SPT testing at multiple locations with widely varying ground conditions, and supervising the associated laboratory testing programme. I derived design parameters from the combined data set and assessed foundation capacity and settlement, providing the contractor with site-specific recommendations for tower foundations.", show: true },

    { title: "Padma Bridge Rail Link Project",
      sector: "Transport infrastructure",
      tags: ["Field supervision", "Laboratory testing"],
      text: "Performed geotechnical investigation along the rail-link alignment using SPT boreholes and CPT soundings, together with pile integrity testing (PIT) on constructed piles. I coordinated sample handling and a laboratory testing programme, including triaxial tests, to establish strength parameters for design. I then compiled the field, laboratory and integrity-test results into factual reports that supported both the design team and the quality assurance of pile construction.", show: true },

    { title: "Dhaka Subway Project",
      sector: "Transport infrastructure",
      tags: ["Field supervision"],
      text: "Conducted seismic cone penetration testing (SCPT) to obtain continuous profiles of cone resistance, sleeve friction, pore-water pressure and shear-wave velocity. I processed the seismic records to derive shear-wave velocity (Vs) profiles for dynamic site characterisation, and interpreted the cone data for soil stratigraphy. The results were compiled into the SCPT report, providing parameters for seismic site-response analysis and underground-structure design.", show: true },

    { title: "Kalshi Flyover Project",
      sector: "Transport infrastructure",
      tags: ["Field supervision", "Laboratory testing"],
      text: "Carried out SPT-based subsurface investigation along the flyover alignment, including borehole logging, sampling and groundwater observation. I scheduled and monitored the laboratory classification and strength testing needed to characterise the foundation soils. The field and laboratory results were combined into stratigraphic profiles and design parameters to support the deep-foundation design of the flyover.", show: true },

    { title: "Refat Garments Ltd. (Ha-Meem Group)",
      sector: "Industrial building",
      tags: ["Field supervision", "Laboratory testing", "Foundation design"],
      text: "Undertook the geotechnical investigation and foundation design for an industrial garment-manufacturing facility. I supervised SPT boreholes and sampling, and directed the laboratory programme used to classify the soils and establish strength and compressibility parameters. Based on these results, I evaluated the bearing capacity and settlement of shallow and pile foundation options and recommended the most suitable foundation type for the building loads.", show: true },

    { title: "Lantabur Group: Lantabur Apparels, Taqwa Fabrics and Lantabur Textile",
      sector: "Industrial buildings",
      tags: ["Field supervision", "Laboratory testing", "Foundation design"],
      text: "Delivered the geotechnical investigation and complete foundation design for three industrial units of the Lantabur Group. The design scope covered shallow foundation bearing capacity and settlement, footing reinforcement, and axial capacity and settlement of pile foundations. I also derived lateral soil springs for the structural model, so that soil–structure interaction was represented consistently in the structural designer's analysis.", show: true },

    { title: "Masco Group: CKL Knitting Blocks 02 and 03, and Warehouse",
      sector: "Industrial buildings",
      tags: ["Field supervision", "Laboratory testing", "Foundation design"],
      text: "Conducted the geotechnical investigation and foundation design for two knitting production blocks and an associated warehouse. I evaluated shallow and pile foundation alternatives for bearing capacity and settlement under heavy industrial loading. Lateral soil springs were provided for structural analysis, and the findings were presented in a design report comparing the performance and practicality of the foundation options.", show: true },

    { title: "14-Storey Commercial Building, Dhaka South City Corporation (DSCC)",
      sector: "Commercial building",
      tags: ["Foundation design"],
      text: "Performed the mat foundation design, evaluating bearing capacity and total and differential settlement under the building loads. For the basement construction, I designed the temporary earth-retaining and bracing system in GEO5, checking earth pressures, member forces, wall deflection and overall stability. Adjacent structures and site constraints were taken into account throughout, to arrive at a buildable and safe excavation scheme.", show: true },

    { title: "8-Storey Factory Building, SSL",
      sector: "Industrial building",
      tags: ["Field supervision", "Laboratory testing", "Foundation design"],
      text: "Carried out the geotechnical investigation and mat foundation design for a multi-storey factory building. I supervised the field and laboratory work used to establish the subsurface profile and design parameters. I then evaluated mat bearing capacity and consolidation and immediate settlement, and set out the resulting allowable pressures and recommendations in the geotechnical report.", show: true },

    { title: "PSA Plants at 35 Hospitals",
      sector: "Healthcare infrastructure (multi-site)",
      tags: ["Field supervision", "Laboratory testing", "Foundation design"],
      text: "Managed geotechnical investigations at 35 hospital sites for new PSA plant installations, coordinating field teams and laboratory testing across widely dispersed locations. For each site, I assessed bearing capacity and settlement and recommended foundation sizes suited to the local ground conditions. Consistent reporting across all sites allowed the installations to proceed in parallel on a common design basis.", show: true }
  ],

  /* ---------- Research ----------  set show: true when you are ready to make it public */
  research: [
    { title: "PHC pipe piles: capacity, seismic detailing and pile–cap connection",
      text: "Research and development on prestressed high-strength concrete spun piles.", status: "Ongoing", show: false },
    { title: "Seawater sea-sand concrete with recycled brick aggregate for marine durability",
      text: "Thesis research on chloride binding, sulphate attack and reinforcement corrosion for coastal structures in Bangladesh.", status: "Ongoing", show: false }
  ],

  /* ---------- Publications (IEEE format) ---------- */
  publications: [
    // { text: "M. T. I. A. Tonmoy and A. B. Author, \"Title of paper,\" Journal, vol. X, no. Y, pp. 1–10, 2026, doi: ...", show: true }
  ],

  education: [
    { degree: "B.Sc. in Civil Engineering", org: "Ahsanullah University of Science and Technology", from: "2014", to: "2018", show: true }
  ],

  /* ---------- Methods cited on the site (IEEE) ---------- */
  references: [
    "K. O. Cetin et al., \"SPT-based probabilistic and deterministic assessment of seismic soil liquefaction triggering hazard,\" Soil Dyn. Earthq. Eng., vol. 115, pp. 698–709, 2018, doi: 10.1016/j.soildyn.2018.09.012.",
    "R. W. Boulanger and I. M. Idriss, \"CPT and SPT based liquefaction triggering procedures,\" Center for Geotech. Modeling, Univ. California, Davis, CA, USA, Rep. UCD/CGM-14/01, 2014.",
    "T. Iwasaki, F. Tatsuoka, K. Tokida, and S. Yasuda, \"A practical method for assessing soil liquefaction potential based on case studies at various sites in Japan,\" in Proc. 2nd Int. Conf. Microzonation, San Francisco, CA, USA, 1978, pp. 885–896.",
    "G. Zhang, P. K. Robertson, and R. W. I. Brachman, \"Estimating liquefaction-induced lateral displacements using the standard penetration test or cone penetration test,\" J. Geotech. Geoenviron. Eng., vol. 130, no. 8, pp. 861–871, 2004."
  ]
};
