import React from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import 'font-awesome/css/font-awesome.css';
//import { PeopleAlt } from '@material-ui/icons';

// const nodes3 = [{
//     value: 'mars',
//     label: 'Mars',
//     children: [
//         { value: 'phobos', label: 'Phobos' },
//         { value: 'deimos', label: 'Deimos' },
//     ],
// }];

const nodesGMI = [{"value":"39806","label":"Integrated SC Mindset","children":[{"value":"39807","label":"Explains Key Enablers to Logistics Networks"},{"value":"39808","label":"Demonstrates Basic Tenets of Zero Loss Philosophy"},{"value":"39809","label":"Identifies Tools and Techniques"},{"value":"39810","label":"Recognizes Qualities that Provide Advantaged Contract Management"}]},{"value":"39811","label":"Business Partnership","children":[{"value":"39812","label":"Explains Customer Strategies"},{"value":"39813","label":"Describes Supply Chain Concepts"},{"value":"39814","label":"Shares Point of View Openly"},{"value":"39815","label":"Defines How Role Enables Org Goals"}]},{"value":"39816","label":"Data & Process Driven Decision Making","children":[{"value":"39817","label":"Describes Data-Based Decision Making"},{"value":"39818","label":"Demonstrates Adherence to Processes"},{"value":"39819","label":"Applies Data Tools"},{"value":"39820","label":"Utilizes Digital Data"}]},{"value":"39821","label":"Initiative Mgmt","children":[{"value":"39822","label":"Establishes Policies and Procedures"},{"value":"39823","label":"Estimates Types and Quantities of Materials"},{"value":"39824","label":"Monitors Status of Project and Product Scope"},{"value":"39825","label":"Collaborates to Keep Project Costs Within Budget"}]},{"value":"39826","label":"Financial Acumen","children":[{"value":"39827","label":"Explains KPIs"},{"value":"39828","label":"Utlizies Supply Chain Metrics to Tell Stories"},{"value":"39829","label":"Demonstrates Budgeting Principles"},{"value":"39830","label":"Demonstrates a Strong Profit and Loss Perspective"}]},{"value":"39831","label":"Strategic Influence","children":[{"value":"39832","label":"Explains Goals in Simple Terms"},{"value":"39833","label":"Negotiates Skillfully"},{"value":"39834","label":"Refers to Broad Range of Ideas"},{"value":"39835","label":"Takes Initiative"}]},{"value":"39836","label":"External Focus","children":[{"value":"39837","label":"Recognizes Market Environment"},{"value":"39838","label":"Gives Examples of Outside Factors that Affect GMI"},{"value":"39839","label":"Accurately Judges New Ideas"},{"value":"39840","label":"Effectively Communicates How Ideas Relate to Business Goals"}]},{"value":"39841","label":"Integrated SC Planning","children":[{"value":"39842","label":"Explains Logistical Strategies"},{"value":"39843","label":"Understands Inventory Strategy"},{"value":"39844","label":"Explains System Rates, Bottlenecks, and Available Days"},{"value":"39845","label":"Translates Projected Demand into Strategy"}]},{"value":"39846","label":"Coaching for Capability Building","children":[{"value":"39847","label":"Designs Practices and Procedures for Autonomous Teams"},{"value":"39848","label":"Shares Expertise As a Teacher"},{"value":"39849","label":"Explains Efficient Work Flows"},{"value":"39850","label":"Demonstrates Commitment to Continuous Improvement"}]},{"value":"39851","label":"Sourcing Skills","children":[{"value":"39852","label":"Supplier relationship management"},{"value":"39853","label":"Supplier risk assessment"},{"value":"39854","label":"Spend analysis"},{"value":"39855","label":"Contracting"},{"value":"39856","label":"Category management"},{"value":"39857","label":"Industry knowledge/market analysis"},{"value":"39858","label":"Purchase order/requisition processing"},{"value":"39859","label":"Market research"},{"value":"39860","label":"Statistical analysis"},{"value":"39861","label":"Commercial management"}]}]

const nodesCNA =[
  {
    "value": "34635",
    "label": "CNA Insurance ",
    "children": [
      {
        "value": "34636",
        "label": "P&C Coverages"
      },
      {
        "value": "34637",
        "label": "Underwriting Process"
      },
      {
        "value": "34638",
        "label": "Claims Process"
      },
      {
        "value": "34639",
        "label": "Knowledge of CNAs Segments"
      },
      {
        "value": "34640",
        "label": "Loss Trends"
      }
    ]
  },
  {
    "value": "34641",
    "label": "RC Process",
    "children": [
      {
        "value": "34642",
        "label": "Risk Assessment"
      },
      {
        "value": "34643",
        "label": "Basic RC Client Services "
      },
      {
        "value": "34644",
        "label": "Loss Analysis"
      }
    ]
  },
  {
    "value": "34645",
    "label": "Professional RC Skills ",
    "children": [
      {
        "value": "34646",
        "label": "Analytical & Proactive Thinking"
      },
      {
        "value": "34647",
        "label": "Business Writing"
      },
      {
        "value": "34648",
        "label": "Delivery Effectiveness"
      },
      {
        "value": "34649",
        "label": "Time Management"
      },
      {
        "value": "34650",
        "label": "Interpersonal Skills"
      },
      {
        "value": "34651",
        "label": "Interviewing Skills"
      }
    ]
  },
  {
    "value": "34652",
    "label": "Cyber Basics  ",
    "children": [
      {
        "value": "34653",
        "label": "Software Security"
      },
      {
        "value": "34654",
        "label": "Vendor Management"
      },
      {
        "value": "34655",
        "label": "Network Communications"
      },
      {
        "value": "34656",
        "label": "Data Security"
      },
      {
        "value": "34657",
        "label": "Privacy Rights"
      }
    ]
  },
  {
    "value": "34658",
    "label": "E&O Basics ",
    "children": [
      {
        "value": "34659",
        "label": "E&O Coverage "
      },
      {
        "value": "34660",
        "label": "Intellectual Property"
      },
      {
        "value": "34661",
        "label": "Employment Practices Liability (EPL)"
      }
    ]
  },
  {
    "value": "34662",
    "label": "Construction",
    "children": [
      {
        "value": "34663",
        "label": "Construction ISO Classification "
      },
      {
        "value": "34664",
        "label": "Firewalls"
      },
      {
        "value": "34665",
        "label": "Roofing"
      }
    ]
  },
  {
    "value": "34666",
    "label": "Occupany",
    "children": [
      {
        "value": "34667",
        "label": "Common Hazards "
      },
      {
        "value": "34668",
        "label": "Insurance to Value (ITV) CNA"
      },
      {
        "value": "34669",
        "label": "Special Hazards"
      }
    ]
  },
  {
    "value": "34670",
    "label": "Protection ",
    "children": [
      {
        "value": "34671",
        "label": "Burglary & Theft"
      },
      {
        "value": "34672",
        "label": "Public Protection"
      },
      {
        "value": "34673",
        "label": "Fire Alarm Systems"
      },
      {
        "value": "34674",
        "label": "Sprinkler Analysis"
      },
      {
        "value": "34675",
        "label": "Specialized Protection Systems"
      },
      {
        "value": "34676",
        "label": "Protection Systems"
      },
      {
        "value": "34677",
        "label": "Sprinkler Plan Review"
      },
      {
        "value": "34678",
        "label": "Commodity Classification"
      },
      {
        "value": "34679",
        "label": "Commercial Cooking "
      }
    ]
  },
  {
    "value": "34680",
    "label": "Exposures",
    "children": [
      {
        "value": "34681",
        "label": "Internal & External Exposures"
      },
      {
        "value": "34682",
        "label": "Knowledge of Inland Marine"
      },
      {
        "value": "34683",
        "label": "Commodity Classification"
      },
      {
        "value": "34879",
        "label": "Natural Hazards"
      }
    ]
  },
  {
    "value": "34684",
    "label": "Reporting Requirements",
    "children": [
      {
        "value": "34685",
        "label": "Description of Operations"
      },
      {
        "value": "34686",
        "label": "Basic knowledge of Business Interruption (BI)"
      },
      {
        "value": "34687",
        "label": "Aerial imagery & photos"
      },
      {
        "value": "34688",
        "label": "PML Evaluations"
      }
    ]
  },
  {
    "value": "34689",
    "label": "Codes & Regulations - Property",
    "children": [
      {
        "value": "34690",
        "label": "NFPA"
      },
      {
        "value": "34691",
        "label": "Local Building Codes"
      }
    ]
  },
  {
    "value": "34692",
    "label": "Equipment & Machinery",
    "children": [
      {
        "value": "34693",
        "label": "Machine Safeguarding"
      },
      {
        "value": "34694",
        "label": "Equipment Used for Material Handling"
      },
      {
        "value": "34695",
        "label": "Industrial Trucks & Lifts"
      },
      {
        "value": "34696",
        "label": "Ladder & Scaffold"
      },
      {
        "value": "34697",
        "label": "Tools"
      }
    ]
  },
  {
    "value": "34698",
    "label": "Injury Mgmt - RTW",
    "children": [
      {
        "value": "34699",
        "label": "Medical Management"
      },
      {
        "value": "34700",
        "label": "Indemnity Management"
      },
      {
        "value": "34701",
        "label": "RTW "
      },
      {
        "value": "34702",
        "label": "IBNR"
      }
    ]
  },
  {
    "value": "34703",
    "label": "Employee Health & Safety",
    "children": [
      {
        "value": "34704",
        "label": "PPE for Workforce"
      },
      {
        "value": "34705",
        "label": "Tool Safety"
      },
      {
        "value": "34706",
        "label": "Office Ergonomics"
      },
      {
        "value": "34707",
        "label": "Industrial Hygiene"
      },
      {
        "value": "34708",
        "label": "Workplace Safety"
      },
      {
        "value": "34709",
        "label": "Walkway Safety"
      },
      {
        "value": "34710",
        "label": "Background Screening"
      },
      {
        "value": "34711",
        "label": "Occupational Diseases"
      },
      {
        "value": "34712",
        "label": "Driver Safety - Bodily Injury"
      },
      {
        "value": "36685",
        "label": "Occupational Diseases and Musculoskeletal Disorders"
      }
    ]
  },
  {
    "value": "34713",
    "label": "Workflow Efficiency",
    "children": [
      {
        "value": "34714",
        "label": "Workflow Process"
      }
    ]
  },
  {
    "value": "34715",
    "label": "Codes & Regulations - WC",
    "children": [
      {
        "value": "34716",
        "label": "Federal/State OSHA"
      },
      {
        "value": "34717",
        "label": "ADA (Americans w/ Disabilities Act)"
      },
      {
        "value": "36662",
        "label": "ANSI (American National Standard Institute)"
      }
    ]
  },
  {
    "value": "34718",
    "label": "Driver Selection",
    "children": [
      {
        "value": "34719",
        "label": "Background Check"
      },
      {
        "value": "34720",
        "label": "MVR"
      }
    ]
  },
  {
    "value": "34721",
    "label": "Codes & Regulations - Auto",
    "children": [
      {
        "value": "34722",
        "label": "FMCSR (Federal Motor Carrier Safety Regulation) "
      },
      {
        "value": "34723",
        "label": "CDL (Commercial Drivers License)"
      },
      {
        "value": "34724",
        "label": "DOT (Dept. of Transportation) "
      }
    ]
  },
  {
    "value": "34725",
    "label": "Fleet/Vehicle",
    "children": [
      {
        "value": "34726",
        "label": "Fleet Classification"
      },
      {
        "value": "34727",
        "label": "Vehicle Usage"
      },
      {
        "value": "34728",
        "label": "Vehicle Inspection & Maintenance"
      }
    ]
  },
  {
    "value": "34730",
    "label": "Company, Policies & Practices",
    "children": [
      {
        "value": "34731",
        "label": "Hired/Non-Owned"
      },
      {
        "value": "34732",
        "label": "Negligent Entrustment"
      },
      {
        "value": "34733",
        "label": "Personal Use"
      },
      {
        "value": "34734",
        "label": "Driver Distraction"
      }
    ]
  },
  {
    "value": "34735",
    "label": "Public Protection on Insured's Premise",
    "children": [
      {
        "value": "34736",
        "label": "Pedestrian Walkway Safety "
      },
      {
        "value": "34737",
        "label": "Life Safety & Emergency Planning"
      },
      {
        "value": "34738",
        "label": "Security (Personal & Physical) including special events"
      },
      {
        "value": "34739",
        "label": "Attractive Nuisances"
      }
    ]
  },
  {
    "value": "34740",
    "label": "Off Premise",
    "children": [
      {
        "value": "34741",
        "label": "Knowledge of Delivery & Installation, Maintenance operations"
      },
      {
        "value": "34742",
        "label": "Identification of Sales/Consulting operations"
      }
    ]
  },
  {
    "value": "34743",
    "label": "Contracts",
    "children": [
      {
        "value": "34744",
        "label": "Hold Harmless"
      },
      {
        "value": "34745",
        "label": "Risk Transfer"
      },
      {
        "value": "34746",
        "label": "Warranties"
      },
      {
        "value": "34747",
        "label": "Sub-Contractors"
      }
    ]
  },
  {
    "value": "34748",
    "label": "PIAI (Personal Injury Advertising Injury)",
    "children": [
      {
        "value": "34749",
        "label": "Libel/Slander"
      },
      {
        "value": "34750",
        "label": "Copyright Infringement"
      },
      {
        "value": "34751",
        "label": "Misappropriation of Use"
      },
      {
        "value": "34752",
        "label": "Invasion of Privacy"
      }
    ]
  },
  {
    "value": "34753",
    "label": "Design of Products",
    "children": [
      {
        "value": "34754",
        "label": "Product Research and Development"
      },
      {
        "value": "34755",
        "label": "Labels, Warnings & Instructions"
      },
      {
        "value": "34756",
        "label": "Product Use, Misuse & Failure"
      },
      {
        "value": "34757",
        "label": "Product Design Processes & Specifications"
      }
    ]
  },
  {
    "value": "34758",
    "label": "Manufacturing of Products",
    "children": [
      {
        "value": "34759",
        "label": "Product Manufacturing, including QA, packaging & Storage"
      },
      {
        "value": "34760",
        "label": "Product Traceability"
      },
      {
        "value": "34761",
        "label": "Product Tiering e.g., after market products"
      },
      {
        "value": "34762",
        "label": "Supply Chain of Product Build Out"
      }
    ]
  },
  {
    "value": "34763",
    "label": "Product in Marketplace",
    "children": [
      {
        "value": "34764",
        "label": "Complaint Handling Capabilities"
      },
      {
        "value": "34765",
        "label": "Recall Management"
      }
    ]
  },
  {
    "value": "34766",
    "label": "Product End Life",
    "children": [
      {
        "value": "34767",
        "label": "Product Disposal"
      },
      {
        "value": "34768",
        "label": "Public Notification of Product End Life"
      }
    ]
  },
  {
    "value": "34769",
    "label": "Codes & Regulations -PL",
    "children": [
      {
        "value": "34770",
        "label": "UL (Underwriting Laboratories)"
      },
      {
        "value": "34771",
        "label": "CE Marking - conformity of EHS standard"
      },
      {
        "value": "34772",
        "label": "ANSI (American National Standard Institute)"
      }
    ]
  },
  {
    "value": "34773",
    "label": "Property - Construction",
    "children": [
      {
        "value": "34774",
        "label": "Builder's Risk"
      },
      {
        "value": "34775",
        "label": "Contractors & Equipment"
      }
    ]
  },
  {
    "value": "34776",
    "label": "Auto - Construction",
    "children": [
      {
        "value": "34777",
        "label": "Transportation of Hazardous Materials"
      },
      {
        "value": "34778",
        "label": "Transportation of Flammable Materials"
      },
      {
        "value": "34779",
        "label": "Cranes & Riggings"
      }
    ]
  },
  {
    "value": "34780",
    "label": "GL - Construction",
    "children": [
      {
        "value": "34781",
        "label": "Traffic Control"
      },
      {
        "value": "34782",
        "label": "Faulty Construction"
      }
    ]
  },
  {
    "value": "34783",
    "label": "PL - Construction",
    "children": [
      {
        "value": "34784",
        "label": "Knowledge of Constructability Standards (mixing & erecting) e.g., ACI standards"
      }
    ]
  },
  {
    "value": "34785",
    "label": "Property - Durable Goods",
    "children": [
      {
        "value": "34786",
        "label": "Sprinkler Analysis"
      },
      {
        "value": "34787",
        "label": "Commodity Classification"
      }
    ]
  },
  {
    "value": "34788",
    "label": "Auto - Durable Goods",
    "children": [
      {
        "value": "34789",
        "label": "Transportation of Hazardous Materials"
      },
      {
        "value": "34790",
        "label": "Transportation of Flammable Materials"
      },
      {
        "value": "34791",
        "label": "Regulated Fleet - DOT"
      }
    ]
  },
  {
    "value": "34792",
    "label": "Property - Cultural Institutions",
    "children": [
      {
        "value": "34793",
        "label": "Knowledge of Water Damage & Control"
      }
    ]
  },
  {
    "value": "34794",
    "label": "Property - Manufacturing",
    "children": [
      {
        "value": "34795",
        "label": "Knowledge of Combustible Dust"
      }
    ]
  },
  {
    "value": "34796",
    "label": "Property - Manufacturing (Metals Automotive Component Parts)",
    "children": [
      {
        "value": "34797",
        "label": "Knowledge of Machine Values"
      }
    ]
  },
  {
    "value": "34798",
    "label": "Property - Manufacturing (Furniture, Apparel, Commercial Paper & Printing, Wood)",
    "children": [
      {
        "value": "34799",
        "label": "Commodity Classification - Storage arrangement & Protection"
      }
    ]
  },
  {
    "value": "34801",
    "label": "WC - Manufacturing (Metals Automotive Component Parts)",
    "children": [
      {
        "value": "34802",
        "label": "Industrial Hygiene - noise, respiratory"
      },
      {
        "value": "34803",
        "label": "Welding & Torching"
      },
      {
        "value": "34804",
        "label": "Machines including Plasma Cutting"
      },
      {
        "value": "34805",
        "label": "Solvents, equipment pressurized gas, adhesives, sealants, cutting oils, explosive metals"
      },
      {
        "value": "36690",
        "label": "Industrial Ergonomics"
      }
    ]
  },
  {
    "value": "34806",
    "label": "WC - Manufacturing (Furniture, Apparel, Commercial Paper & Printing, Wood)",
    "children": [
      {
        "value": "34807",
        "label": "Faulty Construction"
      },
      {
        "value": "34808",
        "label": "Finishes & Solvents"
      },
      {
        "value": "34809",
        "label": "Industrial Hygiene - noise, respiratory, airborne hazards"
      },
      {
        "value": "34810",
        "label": "Tailoring Tools"
      },
      {
        "value": "34811",
        "label": "Irons"
      },
      {
        "value": "36693",
        "label": "Industrial Ergonomics"
      }
    ]
  },
  {
    "value": "34812",
    "label": "Auto - Manufacturing",
    "children": [
      {
        "value": "34813",
        "label": "Transportation of Hazardous Materials"
      },
      {
        "value": "34814",
        "label": "Transportation of Flammable Materials"
      },
      {
        "value": "34815",
        "label": "Regulated Fleet - DOT"
      }
    ]
  },
  {
    "value": "34816",
    "label": "GL - Manufacturing",
    "children": [
      {
        "value": "34817",
        "label": "PIAI - Libel/Slander, Copyright, Misappropriation of Use, Invasion of privacy"
      }
    ]
  },
  {
    "value": "34818",
    "label": "PL - Manufacturing (Furniture, Apparel, Commercial Paper &  Printing, Wood)",
    "children": [
      {
        "value": "34819",
        "label": "Product Application"
      }
    ]
  },
  {
    "value": "34820",
    "label": "Property - Real Estate",
    "children": [
      {
        "value": "34821",
        "label": "Knowledge of Theft Exposure"
      },
      {
        "value": "34822",
        "label": "Knowledge of Water Damage & Control"
      }
    ]
  },
  {
    "value": "34823",
    "label": "GL - Real Estate",
    "children": [
      {
        "value": "34824",
        "label": "PIAI - Libel/Slander, Copyright, Misappropriation of Use, Invasion of Privacy"
      }
    ]
  },
  {
    "value": "34825",
    "label": "GL - Professional Services (Architects, Engineers, & Design Consultants)",
    "children": [
      {
        "value": "34826",
        "label": "Construction Safety"
      }
    ]
  },
  {
    "value": "34865",
    "label": "Claims Investigation",
    "children": [
      {
        "value": "34866",
        "label": "Claims Investigation"
      }
    ]
  },
  {
    "value": "34867",
    "label": "Management Skills",
    "children": [
      {
        "value": "34868",
        "label": "Mentoring"
      },
      {
        "value": "34869",
        "label": "Project Management"
      }
    ]
  },
  {
    "value": "34870",
    "label": "Business Skills",
    "children": [
      {
        "value": "34871",
        "label": "Strategy Execution"
      },
      {
        "value": "34872",
        "label": "Enterprise Contribution"
      }
    ]
  },
  {
    "value": "34873",
    "label": "Cyber Monoline",
    "children": [
      {
        "value": "34874",
        "label": "Software Security"
      },
      {
        "value": "34875",
        "label": "Vendor Management"
      },
      {
        "value": "34876",
        "label": "Network Communications"
      },
      {
        "value": "34877",
        "label": "Data Security"
      },
      {
        "value": "34878",
        "label": "Privacy Rights - Payment Card Industry (PCI), HIPPA, COPA (Child Online Protection Act), Fair Credit Reporting Act"
      }
    ]
  },
  {
    "value": "34880",
    "label": "CNA Insurance - Construction",
    "children": [
      {
        "value": "34881",
        "label": "Knowledge of Inland Marine"
      },
      {
        "value": "34882",
        "label": "Knowledge of CCIP/OCIP"
      }
    ]
  },
  {
    "value": "34883",
    "label": "WC - Construction (Utility Contractors)",
    "children": [
      {
        "value": "34884",
        "label": "Excavation"
      },
      {
        "value": "34885",
        "label": "Cross Bore Worker Safety"
      },
      {
        "value": "34886",
        "label": "Shoring & Trenching"
      }
    ]
  },
  {
    "value": "34887",
    "label": "WC - Construction (Roofers)",
    "children": [
      {
        "value": "34888",
        "label": "Fall Protection"
      },
      {
        "value": "34889",
        "label": "Torch Use (CERTA)"
      }
    ]
  },
  {
    "value": "34890",
    "label": "WC - Construction (Street & Road)",
    "children": [
      {
        "value": "34891",
        "label": "Cranes, Slings, Rigging"
      },
      {
        "value": "34892",
        "label": "Utility Locate & Protocols"
      },
      {
        "value": "34893",
        "label": "Water tests & Groundwater info"
      },
      {
        "value": "34894",
        "label": "Shoring & Trenching"
      }
    ]
  },
  {
    "value": "34895",
    "label": "WC - Construction (Tunnels, Bridge Erection)",
    "children": [
      {
        "value": "34896",
        "label": "Fall Protection"
      },
      {
        "value": "34897",
        "label": "Industrial Hygiene - Silica"
      },
      {
        "value": "34898",
        "label": "Cranes, Slings, Rigging"
      },
      {
        "value": "34899",
        "label": "Water tests & groundwater info"
      },
      {
        "value": "36694",
        "label": "Industrial Ergonomics"
      }
    ]
  },
  {
    "value": "34900",
    "label": "GL - Construction (Pools/Spas)",
    "children": [
      {
        "value": "34901",
        "label": "Pool Pop Prevention"
      },
      {
        "value": "34902",
        "label": "Water Intrusion"
      }
    ]
  },
  {
    "value": "34903",
    "label": "CNA Insurance - Manufacturing",
    "children": [
      {
        "value": "34904",
        "label": "Knowledge of Transit Coverage"
      }
    ]
  },
  {
    "value": "34905",
    "label": "E&O - Manufacturing",
    "children": [
      {
        "value": "34906",
        "label": "E&O Coverage"
      },
      {
        "value": "34907",
        "label": "Intellectual Property"
      },
      {
        "value": "34908",
        "label": "3rd Party Recall"
      }
    ]
  },
  {
    "value": "34909",
    "label": "Property - Manufacturing (Industrial Machinery, Commercial Electrical Equipment/Appliances, Transporation Equipment)",
    "children": [
      {
        "value": "34910",
        "label": "Business Interruption (BI)"
      }
    ]
  },
  {
    "value": "34911",
    "label": "Property - Manufacturing (Plastics)",
    "children": [
      {
        "value": "34912",
        "label": "Commodity Classification - Storage Arrangement & Protection"
      }
    ]
  },
  {
    "value": "34913",
    "label": "WC - Manufacturing (Electronic Component & Hardware Manufacturing)",
    "children": [
      {
        "value": "34914",
        "label": "Industrial Hygiene  (e.g., chemical exposures, lasers, nano technology) "
      },
      {
        "value": "36689",
        "label": "Industrial Ergonomics"
      }
    ]
  },
  {
    "value": "34915",
    "label": "WC - Manufacturing (Industrial Machinery, Commercial Electrical, Equipment/Appliances, Transportation Equipment",
    "children": [
      {
        "value": "34916",
        "label": "Industrial Hygiene - noise, respiratory"
      },
      {
        "value": "34917",
        "label": "Crime - Employee Dishonesty & Pilferage"
      },
      {
        "value": "34918",
        "label": "Welding & Torching"
      },
      {
        "value": "34919",
        "label": "Machines including Plasma Cutting"
      },
      {
        "value": "34920",
        "label": "Solvents, equipment pressurized gas, adhesives, sealants, cutting oils, explosive metals"
      },
      {
        "value": "36691",
        "label": "Industrial Ergonomics"
      }
    ]
  },
  {
    "value": "34921",
    "label": "WC - Manufacturing (Plastics)",
    "children": [
      {
        "value": "34922",
        "label": "Machinery Fluid Management"
      },
      {
        "value": "34923",
        "label": "Industrial Hygiene - airborne, biological, fumes/gases hazards"
      },
      {
        "value": "34924",
        "label": "Solvents, equipment pressurized gas, adhesives, sealants, cutting oils, explosive metals"
      },
      {
        "value": "36692",
        "label": "Industrial Ergonomics"
      }
    ]
  },
  {
    "value": "34925",
    "label": "WC - Manufacturing (Pre Cast)",
    "children": [
      {
        "value": "34926",
        "label": "Heavy Machinery"
      },
      {
        "value": "34927",
        "label": "Silica"
      },
      {
        "value": "34928",
        "label": "Bridge Cranes"
      },
      {
        "value": "34929",
        "label": "Welding & Torching"
      },
      {
        "value": "34930",
        "label": "Toxic chemicals spills - air pollution & wastewater contamination"
      }
    ]
  },
  {
    "value": "34931",
    "label": "PL - Manufacturing (Electronic Component & Hardware Manufacturing)",
    "children": [
      {
        "value": "34932",
        "label": "Nano Technology"
      }
    ]
  },
  {
    "value": "34933",
    "label": "E&O - Technology",
    "children": [
      {
        "value": "34934",
        "label": "E&O Coverage"
      },
      {
        "value": "34935",
        "label": "Intellectual Property"
      },
      {
        "value": "34936",
        "label": "3rd party recall"
      }
    ]
  },
  {
    "value": "34937",
    "label": "Property - Technology (Electronic Component & Hardware Manufcaturing w/Semi Conductor Fabless)",
    "children": [
      {
        "value": "34938",
        "label": "Clean Room"
      }
    ]
  },
  {
    "value": "34939",
    "label": "Property - Technology (Electronic Component & Hardware Manufcaturing w/Semi Conductor Fabrication)",
    "children": [
      {
        "value": "34940",
        "label": "Specialized Protection System"
      },
      {
        "value": "34941",
        "label": "Protection Systems"
      },
      {
        "value": "34942",
        "label": "Fire Alarm Systems"
      },
      {
        "value": "34943",
        "label": "Burglary & Theft"
      },
      {
        "value": "34944",
        "label": "Common Hazards (e.g., electrical & HVAC) "
      },
      {
        "value": "34945",
        "label": "Special Hazards - flammable liquids"
      },
      {
        "value": "34946",
        "label": "Clean Room w/ wet benches"
      }
    ]
  },
  {
    "value": "34950",
    "label": "Property - Technology (Software & IT Services/Data Center)",
    "children": [
      {
        "value": "34951",
        "label": "Specialized Protection Systems"
      },
      {
        "value": "34952",
        "label": "Protection Systems"
      },
      {
        "value": "34953",
        "label": "Fire Alarm Systems"
      },
      {
        "value": "34954",
        "label": "Burglary & Theft"
      },
      {
        "value": "34955",
        "label": "Common Hazards  (e.g., electrical & HVAC)"
      }
    ]
  },
  {
    "value": "34956",
    "label": "E&O - Healthcare",
    "children": [
      {
        "value": "34957",
        "label": "E&O Coverage"
      },
      {
        "value": "34958",
        "label": "Intellectual Property"
      },
      {
        "value": "34959",
        "label": "3rd party recall"
      }
    ]
  },
  {
    "value": "34960",
    "label": "Property - Healthcare",
    "children": [
      {
        "value": "34961",
        "label": "Special Hazards"
      },
      {
        "value": "34962",
        "label": "Specialized Protection Systems"
      },
      {
        "value": "34963",
        "label": "Sprinkler Plan Review"
      },
      {
        "value": "34964",
        "label": "Inland Marine"
      },
      {
        "value": "34965",
        "label": "Business interruption  (BI)"
      },
      {
        "value": "34966",
        "label": "Knowledge of Machine Values"
      },
      {
        "value": "34967",
        "label": "Knowledge of Water Damage & Control"
      }
    ]
  },
  {
    "value": "34968",
    "label": "WC - Healthcare (Hospital)",
    "children": [
      {
        "value": "34969",
        "label": "Laboratory Employee Safety (e.g., biohazards)"
      },
      {
        "value": "34970",
        "label": "Chemistry Knowledge"
      },
      {
        "value": "34971",
        "label": "IH - Biological exposures"
      },
      {
        "value": "34972",
        "label": "IH - Radiation"
      },
      {
        "value": "36688",
        "label": "Patient Handling"
      }
    ]
  },
  {
    "value": "34973",
    "label": "Auto - Healthcare",
    "children": [
      {
        "value": "34974",
        "label": "Para Transport"
      },
      {
        "value": "34975",
        "label": "Non-emergency Medical Transport"
      }
    ]
  },
  {
    "value": "34976",
    "label": "GL - Healthcare",
    "children": [
      {
        "value": "34977",
        "label": "Life Safety & Emergency Planning"
      }
    ]
  },
  {
    "value": "34978",
    "label": "Property - Life Science",
    "children": [
      {
        "value": "34979",
        "label": "Specialized Protection Systems"
      },
      {
        "value": "34980",
        "label": "Knowledge of Certified Production Lines"
      },
      {
        "value": "34981",
        "label": "Clean Room & Laboratory"
      },
      {
        "value": "34982",
        "label": "Vivarium Exposure"
      },
      {
        "value": "34983",
        "label": "Identification of finished goods"
      },
      {
        "value": "34984",
        "label": "Specialized hazards - combustible, dust & flammable liquids"
      },
      {
        "value": "34985",
        "label": "Business Interruption (BI)"
      },
      {
        "value": "34986",
        "label": "Specialized operations e.g. nano, laser, sterilization"
      }
    ]
  },
  {
    "value": "34987",
    "label": "WC - Life Science",
    "children": [
      {
        "value": "34988",
        "label": "Laboratory Employee Safety (e.g., biohazards)"
      },
      {
        "value": "34989",
        "label": "Chemistry Knowledge"
      },
      {
        "value": "34990",
        "label": "IH - Biological Exposures"
      },
      {
        "value": "34991",
        "label": "Occupational Diseases"
      },
      {
        "value": "36686",
        "label": "Lab Ergonomics"
      }
    ]
  },
  {
    "value": "34992",
    "label": "WC - Life Science (Pharmaceutical Companies)",
    "children": [
      {
        "value": "34993",
        "label": "Active Pharmaceutical  Ingredient Chemistry  Knowledge"
      },
      {
        "value": "34994",
        "label": "Radioactive materials"
      },
      {
        "value": "34995",
        "label": "Microbiology"
      },
      {
        "value": "34996",
        "label": "Occupational Diseases"
      },
      {
        "value": "36687",
        "label": "Lab Ergonomics"
      }
    ]
  },
  {
    "value": "34997",
    "label": "Auto - Life Science",
    "children": [
      {
        "value": "34998",
        "label": "Knowledge of Special Transportation of Hazardous Materials, Chemicals"
      }
    ]
  },
  {
    "value": "34999",
    "label": "GL - Life Science",
    "children": [
      {
        "value": "35000",
        "label": "Contracts"
      }
    ]
  },
  {
    "value": "35001",
    "label": "PL - Life Science",
    "children": [
      {
        "value": "35002",
        "label": "Knowledge of Production"
      },
      {
        "value": "35003",
        "label": "FDA including product recall & CAPA"
      }
    ]
  },
  {
    "value": "35004",
    "label": "PL - Life Science (Academic Institutions/Healthcare Org)",
    "children": [
      {
        "value": "35005",
        "label": "Sub-contractor Relationships to Meet Regulatory Standards"
      }
    ]
  },
  {
    "value": "35006",
    "label": "PL - Life Science (Contractors, Manufacturing Org (CMO), Research Org (CRO), Service Org (CSO))",
    "children": [
      {
        "value": "35007",
        "label": "Sub-contractor Relationships to Meet Regulatory Standards"
      }
    ]
  },
  {
    "value": "35008",
    "label": "PL - Life Science (Medical Device Manufacturers)",
    "children": [
      {
        "value": "35009",
        "label": "Specified Regulations e.g., FDA"
      }
    ]
  },
  {
    "value": "35010",
    "label": "WC - Federal Gov Contractors",
    "children": [
      {
        "value": "35011",
        "label": "Knowledge of US Long Shore & Harbor Safety Act"
      }
    ]
  },
  {
    "value": "35012",
    "label": "GL - Federal Gov Contractors",
    "children": [
      {
        "value": "35013",
        "label": "Knowledge of DBA (Defense Base Act)"
      }
    ]
  },
  {
    "value": "35014",
    "label": "Facility Equipment & Systems",
    "children": [
      {
        "value": "35015",
        "label": "Pressure Vessels"
      },
      {
        "value": "35016",
        "label": "Backup Generator"
      },
      {
        "value": "35017",
        "label": "High Pressure Boiler"
      },
      {
        "value": "35018",
        "label": "Air Condition System"
      },
      {
        "value": "35019",
        "label": "Electrical Switchgear, Transformer & Distribution Components"
      },
      {
        "value": "35020",
        "label": "Low Pressure Boiler"
      },
      {
        "value": "35021",
        "label": "Steam Production"
      },
      {
        "value": "35022",
        "label": "Refrigeration Systems"
      },
      {
        "value": "35023",
        "label": "Production Machinery"
      }
    ]
  },
  {
    "value": "35024",
    "label": "Codes & Regulations - EB",
    "children": [
      {
        "value": "35025",
        "label": "ASME Boiler & Vessel Code"
      },
      {
        "value": "35026",
        "label": "National Board Regulations"
      },
      {
        "value": "35027",
        "label": "Jurisdictional Codes"
      },
      {
        "value": "35028",
        "label": "NFPA (e.g., 85, 86, 87)"
      },
      {
        "value": "35029",
        "label": "National Electrical Codes"
      }
    ]
  },
  {
    "value": "35030",
    "label": "Business Interruption of Machinery",
    "children": [
      {
        "value": "35031",
        "label": "Operational Impact"
      },
      {
        "value": "35032",
        "label": "Contingency Planning"
      },
      {
        "value": "35033",
        "label": "Business Income Loss"
      }
    ]
  },
  {
    "value": "35034",
    "label": "Jurisdictional Inspections",
    "children": [
      {
        "value": "35035",
        "label": "Vessel"
      },
      {
        "value": "35036",
        "label": "Boiler"
      }
    ]
  },
  {
    "value": "35037",
    "label": "Equipment Maintenance & Testing",
    "children": [
      {
        "value": "35038",
        "label": "Maintenance Standards"
      },
      {
        "value": "35039",
        "label": "Non Destructive Testing (NDT)"
      }
    ]
  },
  {
    "value": "35041",
    "label": "Spoilage and Contamination",
    "children": [
      {
        "value": "35042",
        "label": "Operational Impact including PML"
      },
      {
        "value": "35043",
        "label": "Knowledge of Failure Modes"
      }
    ]
  },
  {
    "value": "36663",
    "label": "EB - Manufacturing",
    "children": [
      {
        "value": "36664",
        "label": "Production Machinery"
      },
      {
        "value": "36665",
        "label": "National Electrical Codes"
      },
      {
        "value": "36666",
        "label": "Steam & Combustion Turbine"
      }
    ]
  },
  {
    "value": "36667",
    "label": "EB - Healthcare (Hospital)",
    "children": [
      {
        "value": "36668",
        "label": "Medical Diagnostic Equipment Related to Patients"
      },
      {
        "value": "36669",
        "label": "Facility Equipment & Systems"
      }
    ]
  },
  {
    "value": "36670",
    "label": "EB - Manufacturing (Food)",
    "children": [
      {
        "value": "36671",
        "label": "Food Contamination & Spoilage"
      },
      {
        "value": "36672",
        "label": "Refrigeration & Storage"
      },
      {
        "value": "36673",
        "label": "Knowledge of FDA (Manufacturing)"
      }
    ]
  },
  {
    "value": "36674",
    "label": "EB - Technology (IT Software)",
    "children": [
      {
        "value": "36680",
        "label": "Data Center"
      },
      {
        "value": "36681",
        "label": "National Electrical Codes"
      }
    ]
  },
  {
    "value": "36675",
    "label": "EB - Technology (Electronic Component & Hardware Manufacturing)",
    "children": [
      {
        "value": "36682",
        "label": "Clean Room (Technology)"
      },
      {
        "value": "36683",
        "label": "Semi-conductor"
      },
      {
        "value": "36684",
        "label": "Microchip & Nano"
      }
    ]
  },
  {
    "value": "36676",
    "label": "EB - Life Science",
    "children": [
      {
        "value": "36677",
        "label": "Knowledge of FDA (Life Science)"
      },
      {
        "value": "36678",
        "label": "Facility Equipment & Systems (Competency Level)"
      },
      {
        "value": "36679",
        "label": "Clean Room (Life Science)"
      }
    ]
  }
]
//const nodes2 = [{"value":"root","label":"Skills","children":[{"value":"39806","label":"Integrated SC Mindset","children":[{"value":"39807","label":"Explains Key Enablers to Logistics Networks"},{"value":"39808","label":"Demonstrates Basic Tenets of Zero Loss Philosophy"},{"value":"39809","label":"Identifies Tools and Techniques"},{"value":"39810","label":"Recognizes Qualities that Provide Advantaged Contract Management"}]},{"value":"39811","label":"Business Partnership","children":[{"value":"39812","label":"Explains Customer Strategies"},{"value":"39813","label":"Describes Supply Chain Concepts"},{"value":"39814","label":"Shares Point of View Openly"},{"value":"39815","label":"Defines How Role Enables Org Goals"}]},{"value":"39816","label":"Data & Process Driven Decision Making","children":[{"value":"39817","label":"Describes Data-Based Decision Making"},{"value":"39818","label":"Demonstrates Adherence to Processes"},{"value":"39819","label":"Applies Data Tools"},{"value":"39820","label":"Utilizes Digital Data"}]},{"value":"39821","label":"Initiative Mgmt","children":[{"value":"39822","label":"Establishes Policies and Procedures"},{"value":"39823","label":"Estimates Types and Quantities of Materials"},{"value":"39824","label":"Monitors Status of Project and Product Scope"},{"value":"39825","label":"Collaborates to Keep Project Costs Within Budget"}]},{"value":"39826","label":"Financial Acumen","children":[{"value":"39827","label":"Explains KPIs"},{"value":"39828","label":"Utlizies Supply Chain Metrics to Tell Stories"},{"value":"39829","label":"Demonstrates Budgeting Principles"},{"value":"39830","label":"Demonstrates a Strong Profit and Loss Perspective"}]},{"value":"39831","label":"Strategic Influence","children":[{"value":"39832","label":"Explains Goals in Simple Terms"},{"value":"39833","label":"Negotiates Skillfully"},{"value":"39834","label":"Refers to Broad Range of Ideas"},{"value":"39835","label":"Takes Initiative"}]},{"value":"39836","label":"External Focus","children":[{"value":"39837","label":"Recognizes Market Environment"},{"value":"39838","label":"Gives Examples of Outside Factors that Affect GMI"},{"value":"39839","label":"Accurately Judges New Ideas"},{"value":"39840","label":"Effectively Communicates How Ideas Relate to Business Goals"}]},{"value":"39841","label":"Integrated SC Planning","children":[{"value":"39842","label":"Explains Logistical Strategies"},{"value":"39843","label":"Understands Inventory Strategy"},{"value":"39844","label":"Explains System Rates, Bottlenecks, and Available Days"},{"value":"39845","label":"Translates Projected Demand into Strategy"}]},{"value":"39846","label":"Coaching for Capability Building","children":[{"value":"39847","label":"Designs Practices and Procedures for Autonomous Teams"},{"value":"39848","label":"Shares Expertise As a Teacher"},{"value":"39849","label":"Explains Efficient Work Flows"},{"value":"39850","label":"Demonstrates Commitment to Continuous Improvement"}]},{"value":"39851","label":"Sourcing Skills","children":[{"value":"39852","label":"Supplier relationship management"},{"value":"39853","label":"Supplier risk assessment"},{"value":"39854","label":"Spend analysis"},{"value":"39855","label":"Contracting"},{"value":"39856","label":"Category management"},{"value":"39857","label":"Industry knowledge/market analysis"},{"value":"39858","label":"Purchase order/requisition processing"},{"value":"39859","label":"Market research"},{"value":"39860","label":"Statistical analysis"},{"value":"39861","label":"Commercial management"}]}]}]





export default class CheckboxWidget extends React.Component {
    // state = {
    //     checked: [],
    //     expanded: [],
    //     nodes: null
    // };

    constructor(props) {
      super(props);

      var nodes
      if (this.props.Partner.PartnerID === 395) {
        nodes = nodesCNA
      }
      else {
        nodes = nodesGMI
      }
      this.state = {
        checked: [],
        expanded: [],
        nodes: nodes
      };
    }

    render() {
        return (
            <CheckboxTree
            onlyLeafCheckboxes={false}
            showNodeIcon={false}
                nodes={this.state.nodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => {
                  this.props.onCheck(checked)
                  this.setState({ checked })
                }}
                onCheck2={checked => {
                  console.log(checked)
                  this.setState({ checked })
                }}
                onExpand={expanded => this.setState({ expanded })}
            />
        );
    }
}