// Ring order, not filename order. Art is dealt straight down this list, so
// entry n sits one slot along from n-1 and the column can count 01..18 as the
// carousel turns. Reordering these rows moves the ring, the column and the
// numbering together; nothing else needs touching.
//
export const PROJECTS = [
  { file: "10.webp", name: "Afterglow", type: "Editorial", year: "2026" },
  { file: "12.webp", name: "Salt Lines", type: "Landscape", year: "2025" },
  { file: "14.webp", name: "Soft Machinery", type: "Still Life", year: "2024" },
  { file: "16.webp", name: "Low Tide", type: "Documentary", year: "2026" },
  { file: "18.webp", name: "Quiet Hours", type: "Portrait", year: "2026" },
  { file: "2.webp", name: "Field Notes", type: "Travel", year: "2025" },
  { file: "4.webp", name: "Blue Hour", type: "Landscape", year: "2024" },
  { file: "6.webp", name: "Material Study", type: "Still Life", year: "2025" },
  { file: "8.webp", name: "Northbound", type: "Editorial", year: "2026" },
  { file: "9.webp", name: "Nocturne", type: "Portrait", year: "2024" },
  { file: "7.webp", name: "Open Air", type: "Documentary", year: "2023" },
  { file: "5.webp", name: "In Bloom", type: "Still Life", year: "2025" },
  { file: "3.webp", name: "Drift", type: "Landscape", year: "2024" },
  { file: "1.webp", name: "Daybreak", type: "Travel", year: "2024" },
  { file: "17.webp", name: "Fallow", type: "Editorial", year: "2025" },
  { file: "15.webp", name: "Memory Lane", type: "Portrait", year: "2025" },
  { file: "13.webp", name: "Passing Light", type: "Documentary", year: "2026" },
  { file: "11.webp", name: "Quiet Signal", type: "Architecture", year: "2025" },
];

export const IMAGE_FILES = PROJECTS.map((p) => p.file);
