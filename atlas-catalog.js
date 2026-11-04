// Additional bodies can use kind 'moon', 'asteroid', or 'cluster'.
// Set parent to a host body's id and orbit to a distance from that host.
const atlasCatalog = [
  {
    "id": "microcosm",
    "title": "Microcosm",
    "world": "Mercury",
    "kind": "planet",
    "parent": null,
    "category": "Design",
    "discipline": "Web design",
    "description": "Build a one-page website from a preset, preview it at two screen sizes, and export the HTML.",
    "action": "Build a page",
    "file": "SiteGenerator.html",
    "tags": [
      "web design",
      "HTML"
    ],
    "date": "2025-06-05",
    "mark": "M6 3h8l5 5v13H6z M14 3v6h5 M9 13h7 M9 16h5",
    "color": "#bda383",
    "radius": 1.05,
    "orbit": 10,
    "phase": 2.6
  },
  {
    "id": "sprouts",
    "title": "Singing with Sprouts",
    "world": "Venus",
    "kind": "planet",
    "parent": null,
    "category": "Design",
    "discipline": "Illustration",
    "description": "Explore an illustrated site for children’s music parties.",
    "action": "Visit Singing with Sprouts",
    "file": "https://xyz693.github.io/SingingwithSprouts/SingingWithSprouts.html",
    "tags": [
      "music",
      "illustration"
    ],
    "date": "2025-07-12",
    "mark": "M10 18V6l8-2v4l-8 2 M10 14Q3 14 3 8q7 0 7 6 M10 17c-4-2-7 2-4 4 2 1 4-1 4-4",
    "color": "#dfb787",
    "radius": 1.6,
    "orbit": 16,
    "phase": 4.4
  },
  {
    "id": "beach",
    "title": "Beach Walk Planner",
    "world": "Earth",
    "kind": "planet",
    "parent": null,
    "category": "Local",
    "discipline": "Coastal tools",
    "description": "Compare Daytona Beach tides, sunset, and moonlight to pick a time for a walk.",
    "action": "Plan a beach walk",
    "file": "TideClock.html",
    "tags": [
      "tides",
      "Daytona Beach"
    ],
    "date": "2025-04-18",
    "mark": "M11 4c3 0 4 4 2 7l-3 3-3-2c-1-3 1-8 4-8z M8 15l2 2-2 2-2-2z M2 21q3-2 6 0t6 0t7 0",
    "color": "#5ba7af",
    "radius": 1.8,
    "orbit": 23,
    "phase": 0.25
  },
  {
    "id": "launch",
    "title": "T-minus KSC",
    "world": "Mars",
    "kind": "planet",
    "parent": null,
    "category": "Local",
    "discipline": "Space Coast",
    "description": "Follow the countdown to an upcoming launch from Cape Canaveral or Kennedy Space Center.",
    "action": "View countdown",
    "file": "TMinusKSC.html",
    "tags": [
      "spaceflight",
      "countdown"
    ],
    "date": "2025-05-25",
    "mark": "M8 14c1-5 6-10 13-11-1 7-5 12-11 14z M8 12l-4 1-1 4 5-2 M12 17l-1 5 4-2 1-5 M7 18l-4 4 M15 8a1.5 1.5 0 1 0 .1 0",
    "color": "#bd7459",
    "radius": 1.4,
    "orbit": 30,
    "phase": 3.4
  },
  {
    "id": "webtrek",
    "title": "WebTrek",
    "world": "Jupiter",
    "kind": "planet",
    "parent": null,
    "category": "Utility",
    "discipline": "Network tools",
    "description": "Check network response times and test connections from a starship-style console.",
    "action": "Open network console",
    "file": "Webtrek.html",
    "tags": [
      "networks",
      "diagnostics"
    ],
    "date": "2025-08-24",
    "mark": "M12 2a10 10 0 1 0 10 10 M12 6a6 6 0 1 0 6 6 M12 12l8-8 M8 15h.1",
    "color": "#cda888",
    "radius": 2.8,
    "orbit": 39,
    "phase": 5.3
  },
  {
    "id": "silver",
    "title": "Silver Meteor",
    "world": "Saturn",
    "kind": "planet",
    "parent": null,
    "category": "Utility",
    "discipline": "Rail travel",
    "description": "Trace the Silver Meteor route and explore its stations on an interactive map.",
    "action": "Explore the rail map",
    "file": "Silver.html",
    "tags": [
      "rail",
      "maps"
    ],
    "date": "2025-05-25",
    "mark": "M2 21c3-8 12-5 13-13 M6 22c4-6 11-5 12-12 M5 16l4 3 M10 13l3 3 M15 3l2 2 4-1-2 4 1 3-4-1-3 2 1-4-2-2z",
    "color": "#c6bc9e",
    "radius": 2.4,
    "orbit": 50,
    "phase": 1.1
  },
  {
    "id": "mark-studio",
    "title": "Animated SVG Mark Studio",
    "world": "Uranus",
    "parent": null,
    "kind": "planet",
    "category": "Design",
    "discipline": "Vector animation",
    "description": "Draw a path or place some lettering, set it in motion, and take it home as an animated SVG.",
    "action": "Animate a mark",
    "file": "projects/ReefStudio.html",
    "tags": [
      "Vector animation",
      "planet"
    ],
    "mark": "M4 20l3-7L18 2l4 4-11 11z M4 20l7-3 M3 5q3-4 6-1",
    "color": "#89d5c9",
    "radius": 2.1,
    "orbit": 59,
    "phase": 2.03
  },
  {
    "id": "ambigram",
    "title": "Ambigram Vector Looper",
    "world": "Miranda",
    "parent": "mark-studio",
    "kind": "moon",
    "category": "Design",
    "discipline": "Lettering",
    "description": "Compare a LOVE/HATE lettering study in two orientations, try mutations, and export a candidate as an SVG.",
    "action": "Explore the lettering",
    "file": "projects/ambigram_vector_looper.html",
    "tags": [
      "Lettering",
      "moon"
    ],
    "mark": "M3 9a9 9 0 0 1 16-3l2 3 M21 4v5h-5 M21 15a9 9 0 0 1-16 3l-2-3 M3 20v-5h5",
    "color": "#d4b2e8",
    "radius": 0.72,
    "orbit": 5.8,
    "phase": 3.4
  },
  {
    "id": "reaction-atlas",
    "title": "Reaction Atlas",
    "world": "Neptune",
    "parent": null,
    "kind": "planet",
    "category": "Science",
    "discipline": "Organic chemistry",
    "description": "Scrub a Diels–Alder reaction to watch two reactants form a six-membered ring.",
    "action": "Explore the reaction",
    "file": "projects/Reaction_Atlas_0.1.html",
    "tags": [
      "Organic chemistry",
      "planet"
    ],
    "mark": "M3 8l7-4 7 4v8l-7 4-7-4z M6 10v5 M17 8l4-3",
    "color": "#88afeb",
    "radius": 2.2,
    "orbit": 70,
    "phase": 4.65
  }
];
