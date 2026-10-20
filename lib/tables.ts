export type TableOption = {
  id: string;
  name: string;
  rate: string;
  ratePerHour: number;
};

export const TABLES: TableOption[] = [
  {
    id: "T1",
    name: "Table 1 - Standard 8-Ball",
    rate: "₹250/hr",
    ratePerHour: 250,
  },
  {
    id: "T2",
    name: "Table 2 - Standard 8-Ball",
    rate: "₹250/hr",
    ratePerHour: 250,
  },
  {
    id: "T3",
    name: "Table 3 - Deluxe 9-Ball",
    rate: "₹300/hr",
    ratePerHour: 300,
  },
  {
    id: "T4",
    name: "Table 4 - Tournament Snooker",
    rate: "₹400/hr",
    ratePerHour: 400,
  },
  {
    id: "T5",
    name: "Table 5 - Professional Snooker",
    rate: "₹500/hr",
    ratePerHour: 500,
  },
  {
    id: "T6",
    name: "Table 6 - VIP Private Room",
    rate: "₹800/hr",
    ratePerHour: 800,
  },
];

export function getTable(id: string): TableOption | undefined {
  return TABLES.find((table) => table.id === id);
}
