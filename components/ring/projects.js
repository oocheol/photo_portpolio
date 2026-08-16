// Ring order, not filename order. Art is dealt straight down this list, so
// entry n sits one slot along from n-1 and the column can count 01..18 as the
// carousel turns. Reordering these rows moves the ring, the column and the
// numbering together; nothing else needs touching.
//
export const PROJECTS = [
  { file: "water-01.webp", name: "water", type: "Photography", year: "2026" },
  { file: "water-02.webp", name: "water", type: "Photography", year: "2026" },
  { file: "water-03.webp", name: "water", type: "Photography", year: "2026" },
  { file: "water-04.webp", name: "water", type: "Photography", year: "2026" },
  { file: "water-05.webp", name: "water", type: "Photography", year: "2026" },
  { file: "water-06.webp", name: "water", type: "Photography", year: "2026" },
  { file: "water-07.webp", name: "water", type: "Photography", year: "2026" },
  { file: "water-08.webp", name: "water", type: "Photography", year: "2026" },
  { file: "water-09.webp", name: "water", type: "Photography", year: "2026" },
  { file: "water-10.webp", name: "water", type: "Photography", year: "2026" },
  { file: "water-11.webp", name: "water", type: "Photography", year: "2026" },
  { file: "water-12.webp", name: "water", type: "Photography", year: "2026" },
  { file: "water-13.webp", name: "water", type: "Photography", year: "2026" },
];

export const IMAGE_FILES = PROJECTS.map((p) => p.file);
