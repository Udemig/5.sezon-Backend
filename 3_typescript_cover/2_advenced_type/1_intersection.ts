// ıntersection (kesişim tipler)
// iki veya daha fazla tiğpi birlikte kullanmamızı sağlar

type Car = {
  make: string;
  model: string;
};

type Electric = {
  voltage: number;
  charge_time: number;
};

const tesla: Car & Electric = {
  make: "Tesla",
  model: "Model S",
  voltage: 40,
  charge_time: 6,
};
