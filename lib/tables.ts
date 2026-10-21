export type TableOption = {
  id: string;
  name: string;
  rate: string;
  ratePerHour: number;
  game: string;
  size: string;
};

export const TABLES: TableOption[] = [
  {
    id: "T1",
    name: "Table 1 - Standard 8-Ball",
    rate: "₹250/hr",
    ratePerHour: 250,
    game: "8-Ball",
    size: "7 FT",
  },
  {
    id: "T2",
    name: "Table 2 - Standard 8-Ball",
    rate: "₹250/hr",
    ratePerHour: 250,
    game: "8-Ball",
    size: "7 FT",
  },
  {
    id: "T3",
    name: "Table 3 - Deluxe 9-Ball",
    rate: "₹300/hr",
    ratePerHour: 300,
    game: "9-Ball",
    size: "9 FT",
  },
  {
    id: "T4",
    name: "Table 4 - Tournament Snooker",
    rate: "₹400/hr",
    ratePerHour: 400,
    game: "Snooker",
    size: "12 FT",
  },
  {
    id: "T5",
    name: "Table 5 - Professional Snooker",
    rate: "₹500/hr",
    ratePerHour: 500,
    game: "Snooker",
    size: "12 FT",
  },
  {
    id: "T6",
    name: "Table 6 - VIP Private Room",
    rate: "₹800/hr",
    ratePerHour: 800,
    game: "Private",
    size: "VIP",
  },
];

export function getTable(id: string): TableOption | undefined {
  return TABLES.find((table) => table.id === id);
}
