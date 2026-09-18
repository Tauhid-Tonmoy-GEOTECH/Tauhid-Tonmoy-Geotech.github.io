/* =====================================================================
   CONTENT FILE — the only file you need to edit to update your website.
   Rules: keep the quotes "..." and commas exactly as they are.
   To add an item, copy an existing { ... } block, paste it, and edit it.
   To hide an item without deleting it, set  show: false
   ===================================================================== */

window.CONTENT = {

  name: "Md. Tauhidul Islam Akanda Tonmoy",
  shortName: "Md. Tauhidul Islam Akanda Tonmoy",   // name shown in the top bar
  role: "Geotechnical Engineer",
  location: "Dhaka, Bangladesh",
  careerStart: "2018-07",            // used to calculate years of experience automatically
  photo: "photo.jpg",
  cv: "",                             // e.g. "cv.pdf" — leave "" to hide the download button

  summary: [
    "Geotechnical design engineer practising in Bangladesh since 2018. My role has progressed from subsurface investigation into foundation and earth-retaining design and the technical management of project teams.",
    "Routine design work spans shallow, mat and pile foundations, including the selection of founding depth, the derivation of lateral soil springs, liquefaction hazard assessment, and the design of braced excavations and cantilever sheet-pile walls.",
    "Every design is verified independently. Software results from GEO5, DeepFND, DeepEX and PLAXIS 2D are cross-checked against in-house spreadsheets, and every spreadsheet output is backed by hand calculation.",
    "Projects cover power, transmission, transport and urban-resilience infrastructure as well as industrial and commercial buildings, delivered to BNBC 2020 and AASHTO LRFD."
  ],

  contact: {
    email: "tauhid.tonmoy.ak@gmail.com",
    phone: "",                        // leave "" to keep your phone number off the public site
    linkedin: "https://www.linkedin.com/in/md-tauhidul-islam-akanda-tonmoy-5209bb1aa",                     // paste your LinkedIn profile link here, e.g. "https://www.linkedin.com/in/your-id"
    researchgate: "",
    scholar: ""
  },

  /* ---------- Technical competencies ---------- */
  competencies: [
    {
      title: "Liquefaction hazard assessment",
      text: "Liquefaction triggering is evaluated from SPT, CPT and shear-wave velocity data, using the probabilistic and deterministic SPT-based procedure of Cetin et al. [1] and the SPT/CPT-based procedure of Boulanger and Idriss [2]. The consequences are then quantified through the Liquefaction Potential Index (LPI) [3], the Lateral Displacement Index (LDI) and lateral spreading displacement [4]. Results from the different methods are compared to bound predictive uncertainty and to inform foundation and ground-improvement decisions.",
      show: true
    },
    {
      title: "Pile foundation design",
      text: "Pile type, diameter and founding depth are selected from axial capacity computed by static analytical methods (α- and β-methods, Vesić, Tomlinson) under BNBC 2020 and AASHTO LRFD. Capacity is verified numerically in PLAXIS 2D through a staged-construction static load-test simulation, interpreted at 12 mm settlement and at 10% of pile diameter. Lateral soil springs for soil–structure interaction are derived in GEO5, DeepFND and Excel.",
      show: true
    },
    {
      title: "Shallow and mat foundation design",
      text: "The founding depth and size of isolated, combined and mat foundations are selected from bearing capacity and from immediate and consolidation settlement. Settlement is estimated by empirical and analytical methods and cross-checked with numerical analysis in GEO5 and PLAXIS 2D. The assessment covers differential settlement and subgrade reaction for the structural model.",
      show: true
    },
    {
      title: "Excavation and earth-retaining design",
      text: "Braced-cut excavations and cantilever sheet-pile walls are designed in GEO5 and DeepEX, covering embedment, strut and member forces, and overall stability. Where adjacent structures are sensitive, wall and ground deformations are confirmed in PLAXIS 2D.",
      show: true
    },
    {
      title: "Design verification",
      text: "Each design passes through independent layers of checking. Software results are compared against in-house Excel design tools, and every spreadsheet outcome is supported by a traceable hand calculation. Where software and spreadsheet results disagree, the adequacy of the design is confirmed manually before issue.",
      show: true
    },
    {
      title: "Site investigation and testing",
      text: "I plan and supervise SPT, CPT, SCPT and seismic downhole (SDHT) testing, as well as pile integrity (PIT) and static load tests. Laboratory programmes include unconfined compression, consolidation and triaxial testing, and shear-wave records are processed for dynamic site characterisation.",
      show: true
    }
  ],

  /* ---------- Software (grouped by purpose) ---------- */
  software: [
    { group: "Numerical and geotechnical analysis", items: ["PLAXIS 2D", "GEO5 suite"] },
    { group: "Deep foundations and excavations",    items: ["DeepFND", "DeepEX", "LPILE", "AllPile"] },
    { group: "Liquefaction and geophysics",         items: ["NovoLIQ", "ReflexW (shear-wave analysis)"] },
    { group: "Design tools and verification",       items: ["Microsoft Excel (in-house design spreadsheets with hand-calculation checks)"] }
  ],

  /* ---------- Experience (newest first) ---------- */
  experience: [
    {
      from: "2022-02", to: "present",
      role: "Geotechnical Engineer (Design and Project Management)",
      org: "ES Lab", place: "Dhaka",
      points: [
        "Lead the geotechnical design of shallow, mat and pile foundations, including the selection of founding depth and the derivation of lateral soil springs for structural models.",
        "Design braced excavations and cantilever sheet-pile walls in GEO5 and DeepEX, and confirm deformations in PLAXIS 2D where required.",
        "Perform liquefaction hazard assessment and recommend foundation or ground-improvement measures.",
        "Verify all design outputs across software, in-house spreadsheets and hand calculations before issue.",
        "Manage project teams, coordinate field and laboratory programmes, and advise clients and structural designers on foundation solutions."
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
     tags must be one or more of: "Foundation design", "Excavation design", "Liquefaction", "Field supervision", "Laboratory testing"
     status: write "Ongoing" for a running project, or leave it out
     sector: a short line shown under the title (client, sector or role)  */
  projects: [
    { title: "Power Grid Strengthening Project",
      sector: "Client: PGCB | CCCE–ETERN–FEPAC Consortium | Power transmission",
      tags: ["Foundation design", "Liquefaction", "Field supervision", "Laboratory testing"],
      text: "Leading the geotechnical design for power-grid strengthening works, where field investigation and laboratory testing feed directly into foundation design. I select foundation type and founding depth from pile and shallow foundation capacity and settlement analyses, and assess the liquefaction potential of the site soils. Lateral soil springs are derived in GEO5, DeepFND and Excel, and all design outputs are verified by hand calculation before issue to the consortium's engineering team.", show: true },

    { title: "Dhaka and Western Zone Transmission Line Expansion Project",
      sector: "Client: PGCB | CCCE–ETERN Consortium | Power transmission",
      tags: ["Foundation design", "Liquefaction", "Field supervision", "Laboratory testing"],
      text: "Geotechnical design lead for transmission-line expansion works across the Dhaka and Western zones, where ground conditions vary widely from site to site. I coordinate field and laboratory programmes and translate the results into site-specific foundation designs, covering pile founding depth, axial and lateral capacity, lateral soil springs and settlement. Liquefaction susceptibility is screened at each location, and every design is checked across software, spreadsheet and hand calculation.", show: true },

    { title: "Refat Garments Ltd. (Ha-Meem Group)",
      sector: "Industrial building",
      tags: ["Foundation design", "Liquefaction", "Field supervision", "Laboratory testing"],
      text: "Geotechnical design of the foundations for an industrial garment-manufacturing facility. I directed the investigation and laboratory programme, then evaluated shallow and pile foundation options for bearing capacity, settlement and optimum founding depth. The work included liquefaction assessment of the site soils and lateral soil springs for the structural model. The recommended foundation system was verified independently in software, in spreadsheets and by hand calculation.", show: true },

    { title: "Lantabur Group: Lantabur Apparels, Taqwa Fabrics and Lantabur Textile",
      sector: "Industrial buildings",
      tags: ["Foundation design", "Liquefaction", "Field supervision", "Laboratory testing"],
      text: "Complete foundation design for three industrial units of the Lantabur Group, from investigation through to final design recommendations. The scope covered the founding depth, bearing capacity, settlement and reinforcement of shallow foundations, together with the axial capacity and founding depth of piles. Liquefaction potential was assessed, and lateral soil springs were derived in GEO5, DeepFND and Excel so that the structural designer's model represented soil–structure interaction consistently.", show: true },

    { title: "Masco Group: CKL Knitting Blocks 02 and 03, and Warehouse",
      sector: "Industrial buildings",
      tags: ["Foundation design", "Liquefaction", "Field supervision", "Laboratory testing"],
      text: "Foundation design for two knitting production blocks and an associated warehouse under heavy industrial loading. I compared shallow and pile foundation alternatives for capacity, settlement and practicality, and selected the founding depth for the adopted system. Lateral soil springs were provided for the structural analysis and liquefaction potential was checked. All results were verified by independent spreadsheet and hand calculation before the design report was issued.", show: true },

    { title: "14-Storey Commercial Building, Dhaka South City Corporation (DSCC)",
      sector: "Commercial building",
      tags: ["Foundation design", "Excavation design"],
      text: "Mat foundation design, covering bearing capacity, total and differential settlement, and subgrade reaction for the structural model. For the basement construction, I designed the temporary braced-excavation system in GEO5, checking earth pressures, strut and member forces, wall deflection and overall stability. The influence of adjacent structures and site constraints was assessed so that the excavation scheme is both buildable and safe.", show: true },

    { title: "8-Storey Factory Building, SSL",
      sector: "Industrial building",
      tags: ["Field supervision", "Laboratory testing", "Foundation design"],
      text: "Investigation and mat foundation design for a multi-storey factory building. The field and laboratory results were used to establish design parameters. From these, I determined the mat founding depth, allowable bearing pressure, and immediate and consolidation settlement. The design outputs were cross-checked between software, spreadsheet and hand calculation, and issued as clear recommendations to the structural design team.", show: true },

    { title: "PSA Plants at 35 Hospitals",
      sector: "Healthcare infrastructure (multi-site)",
      tags: ["Field supervision", "Laboratory testing", "Foundation design"],
      text: "Managed a multi-site programme covering geotechnical investigation and foundation design at 35 hospital sites for new PSA plant installations. I coordinated field teams and laboratory testing across widely dispersed locations. For each site, I selected foundation depth and size from bearing capacity and settlement analyses. A common design basis and consistent verification allowed the installations at all sites to proceed in parallel.", show: true },

    { title: "Matarbari Coal-Fired Power Plant Project",
      sector: "Client: POSCO E&C | Energy infrastructure",
      tags: ["Field supervision", "Laboratory testing", "Liquefaction"],
      text: "Executed the geotechnical field investigation for a major coastal power-generation facility, combining SPT boreholes, CPT soundings and seismic downhole testing. I supervised drilling, sampling and in-situ testing, and coordinated a laboratory programme on the recovered samples that included triaxial testing for design strength parameters. The field and laboratory data were then integrated into a liquefaction assessment of the saturated coastal deposits, providing input to foundation and ground-improvement decisions.", show: true },

    { title: "Urban Resilience Project, RAJUK (Component S-05)",
      sector: "Client: RAJUK | NKY–Protek Yapı–Sheltech JV | Role: Supervision Engineer",
      tags: ["Field supervision", "Laboratory testing"],
      text: "Supervised a city-scale subsurface investigation programme for risk-sensitive land-use planning in Dhaka, comprising 400 SPT boreholes, 400 seismic downhole tests (SDHT), 140 CPT and 400 SCPT soundings executed by sub-consultants. I verified field procedures and data quality against the project specifications, reviewed borelogs and geophysical records, and audited the laboratory testing of recovered samples on a weekly basis. I also carried out Rapid Visual Assessments of buildings and critical facilities to validate the planning database.", show: true },

    { title: "Padma Bridge Rail Link Project",
      sector: "Client: Construction Supervision Consortium (CSC) | Owner: Bangladesh Railway",
      tags: ["Field supervision", "Laboratory testing"],
      text: "Performed geotechnical investigation along the rail-link alignment using SPT boreholes and CPT soundings, together with pile integrity testing (PIT) on constructed piles. I coordinated sample handling and a laboratory testing programme, including triaxial tests, to establish strength parameters for design. I then compiled the field, laboratory and integrity-test results into factual reports that supported both the design team and the quality assurance of pile construction.", show: true },

    { title: "Dhaka Subway Project",
      sector: "Client: TYPSA Bangladesh | Owner: Bangladesh Bridge Authority",
      tags: ["Field supervision"],
      text: "Conducted seismic cone penetration testing (SCPT) to obtain continuous profiles of cone resistance, sleeve friction, pore-water pressure and shear-wave velocity. I processed the seismic records to derive shear-wave velocity (Vs) profiles for dynamic site characterisation, and interpreted the cone data for soil stratigraphy. The results were compiled into the SCPT report, providing parameters for seismic site-response analysis and underground-structure design.", show: true },

    { title: "Kalshi Flyover Project",
      sector: "Transport infrastructure",
      tags: ["Field supervision", "Laboratory testing"],
      text: "Carried out SPT-based subsurface investigation along the flyover alignment, including borehole logging, sampling and groundwater observation. I scheduled and monitored the laboratory classification and strength testing needed to characterise the foundation soils. The field and laboratory results were combined into stratigraphic profiles and design parameters to support the deep-foundation design of the flyover.", show: true }
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

  /* ---------- Reports and field observations ----------
     1. Upload the PDF to GitHub (Add file > Upload files). Use a simple file name without spaces, e.g. "liquefaction-note-2026.pdf"
     2. Copy one block below, set file: to that exact name, and set show: true
     type: "Technical report", "Field observation", "Design note" or "Presentation"
     IMPORTANT: only upload documents you have permission to share (remove client names and confidential data if needed) */
  documents: [
    { title: "Example: Liquefaction assessment note",
      type: "Technical report",
      date: "2026-09",
      file: "example.pdf",
      text: "One or two sentences describing what the document covers.",
      show: false }
  ],

  /* ---------- Blog / design notes ----------
     1. Write your article in a text file ending in .md (see example-post.md for the format) and upload it to GitHub
     2. Copy one block below, set slug: to the file name WITHOUT .md, and set show: true
     Newest posts first. */
  blog: [
    { title: "Example: Lessons from selecting pile founding depth in soft Dhaka clay",
      slug: "example-post",
      date: "2026-09-18",
      summary: "A two-line summary shown on the home page. Keep it specific; it also helps Google understand the article.",
      tags: ["Pile design", "Soft clay"],
      show: false }
  ],

  memberships: [
    { name: "Member, Institution of Engineers, Bangladesh (IEB)", id: "", show: true }   // add your membership number in id: "M-xxxxx" if you wish
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
