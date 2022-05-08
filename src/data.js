export const hues = [200, 320, 80, 160, 0, 240, 120, 280, 40];

export const size = {
  default: 1,
  hover: 8
};

export const nodes = {
  1: { name: "1", edgeWidth: 1, hue: 200 },
  2: { name: "2", edgeWidth: 1, hue: 160 },
  3: { name: "3", edgeWidth: 1, hue: 320 },
  4: { name: "4", edgeWidth: 1, hue: 160 },
  5: { name: "5", edgeWidth: 1, hue: 80 },
  6: { name: "6", edgeWidth: 1, hue: 160 },
  7: { name: "7", edgeWidth: 1, hue: 160 },
  8: { name: "8", edgeWidth: 1, hue: 160 }
};

export const edges = [
  { source: "1", target: "2", edgeWidth: 1, hue: 200 },
  { source: "1", target: "3", edgeWidth: 1, hue: 200 },

  { source: "2", target: "8", edgeWidth: 1, hue: 80 },

  { source: "3", target: "4", edgeWidth: 1, hue: 320 },
  { source: "3", target: "5", edgeWidth: 1, hue: 320 },
  { source: "3", target: "7", edgeWidth: 1, hue: 320 },

  { source: "2", target: "6", edgeWidth: 1, hue: 160 },
  { source: "4", target: "7", edgeWidth: 1, hue: 160 },
  { source: "4", target: "2", edgeWidth: 1, hue: 160 },

  { source: "5", target: "6", edgeWidth: 1, hue: 80 },
  { source: "5", target: "7", edgeWidth: 1, hue: 80 },
  { source: "8", target: "7", edgeWidth: 1, hue: 80 }
];
