// Ring order, not filename order. Art is dealt straight down this list, so
// entry n sits one slot along from n-1 and the column can count 01..24 as the
// carousel turns. Reordering these rows moves the ring, the column and the
// numbering together; nothing else needs touching.
//
export const PROJECTS = [
  { file: "parang-01.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-02.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-03.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-04.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-05.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-06.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-07.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-08.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-09.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-10.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-11.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-12.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-13.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-14.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-15.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-16.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-17.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-18.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-19.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-20.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-21.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-22.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-23.webp", name: "PARANG", type: "Photography", year: "2026" },
  { file: "parang-24.webp", name: "PARANG", type: "Photography", year: "2026" },
];

export const IMAGE_FILES = PROJECTS.map((p) => p.file);
