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
  photo: "assets/photo.jpg",
  cv: "",                             // e.g. "assets/cv.pdf" — leave "" to hide the download button

  summary:
    "Geotechnical engineer specialising in subsurface investigation, seismic liquefaction hazard assessment and deep-foundation analysis. My work spans the full chain from field and laboratory testing to design: multi-method liquefaction triggering and consequence assessment, and axial pile capacity evaluation that combines analytical methods with PLAXIS-based numerical load-test simulation, delivered to BNBC 2020 and AASHTO LRFD.",

  contact: {
    email: "hetauhid.tonmoy.ak@gmail.com",
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

  /* ---------- Projects ----------
     tags must be one or more of: "Investigation", "Liquefaction", "Foundation design", "Supervision"  */
  projects: [
    { title: "Urban Resilience Project, RAJUK (Component S-05)", tags: ["Supervision", "Investigation"],
      text: "Supervision of 400 SPT, 400 SDHT, 140 CPT and 400 SCPT tests executed by sub-consultants.", show: true },
    { title: "Matarbari Coal-Fired Power Plant", tags: ["Investigation", "Liquefaction"],
      text: "SPT, CPT and SDHT field investigation; laboratory testing including triaxial; liquefaction analysis.", show: true },
    { title: "Padma Bridge Rail Link", tags: ["Investigation"],
      text: "SPT, CPT and pile integrity testing; laboratory testing including triaxial.", show: true },
    { title: "Dhaka Subway", tags: ["Investigation"],
      text: "Seismic cone penetration testing and SCPT reporting.", show: true },
    { title: "Kalshi Flyover", tags: ["Investigation"],
      text: "SPT field investigation and laboratory testing.", show: true },
    { title: "Lantabur Group industrial facilities", tags: ["Investigation", "Foundation design"],
      text: "Investigation and design of shallow and pile foundations: bearing capacity, settlement, lateral springs and footing reinforcement.", show: true },
    { title: "Masco Group, CKL Knitting Blocks 02–03 and warehouse", tags: ["Investigation", "Foundation design"],
      text: "Shallow and pile foundation capacity, settlement and lateral-spring analysis.", show: true },
    { title: "DSCC 14-storey commercial building", tags: ["Foundation design"],
      text: "Mat bearing capacity and settlement; braced excavation design in GEO5.", show: true },
    { title: "SSL 8-storey factory building", tags: ["Investigation", "Foundation design"],
      text: "Investigation, mat bearing capacity and settlement.", show: true },
    { title: "PSA plants at 35 hospitals", tags: ["Investigation", "Foundation design"],
      text: "Investigation, bearing capacity, settlement and foundation sizing.", show: true }
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
