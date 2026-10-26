export const PRESERVED_UNFIXED = {
  title: "Preserved, Unfixed",
  href: "/exhibitions/preserved-unfixed",
  artist: "Yasy Bachurina",
  dates: "17–29 October 2026",
  venue: "Studiya Gallery",
  city: "Seoul",
  description:
    "Objects are collected, named, and preserved, allowing us to return to what has not entirely disappeared. This possibility of return is part of what draws Yasy Bachurina to museums. Yet even when an object remains unchanged, the way we encounter and understand it may shift over time. To preserve something is not to fix a single interpretation, and even familiar forms may hold possibilities yet to be discovered. In this exhibition, paintings and objects coexist without reconstructing a particular period or resolving into a single narrative. Recognition does not bring our relationship with a thing to an end.",
} as const;

const VIEW_DESCRIPTIONS = [
  "Paintings and green sculptural objects in the gallery",
  "Red-toned painting on the gallery wall",
  "Painting extending onto the floor beneath three small wall works",
  "Detail of the floor-based painting",
  "Suspended pale sculpture in a corner of the gallery",
  "Detail of the suspended sculpture with a dark central opening",
  "Large painting installed against a white gallery wall",
  "Upright wood sculpture on a concrete base",
  "Objects arranged inside a circle on the gallery floor",
  "Detail of an object and the circle marked on the floor",
  "Small sculptural installation on a wooden support",
  "Wall-mounted relief with a small object beneath it",
  "Exhibition view with paintings, sculpture and a display table",
  "Objects displayed against red fabric inside a glass case",
  "Hanging wooden object in the gallery",
  "Detail of the green sculptural objects beneath two paintings",
  "Green-toned painting on the gallery wall",
] as const;

export const PRESERVED_UNFIXED_VIEWS = VIEW_DESCRIPTIONS.map((description, index) => ({
  src: `/exhibitions/Yasy/${index + 1}.webp`,
  alt: `${PRESERVED_UNFIXED.title} — ${description.toLowerCase()}`,
}));
