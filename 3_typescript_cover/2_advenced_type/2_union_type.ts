// bir verinin tipi için birden fazla seçenek bulunuyorsa bu ifadeyi kullanırız.

let phone: string | number;

phone = "111-11-111";

phone = 1232342342;

type Laptop = {
  ram: number;
  cpu: string;
};

type Desktop = {
  desk_ram: number;
  desk_cpu: string;
  desk_gpu: string;
  monitor: string;
};

//bu tiplerden bütün değerlerin tanımlanması zorunlu dğildir
const pc: Laptop | Desktop = {
  ram: 16,
  cpu: "intel",
  desk_cpu: "safas",
  monitor: "asds",
};
