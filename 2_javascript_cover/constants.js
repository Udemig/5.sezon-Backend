import * as ages from "./main.js";
console.log(ages);

/*
Modul yapısı
! export (dışa akatrma)

*/

export const leaderTable1 = [
  {
    id: "1asdkdfjnc",
    name: "Ali",
    point: 8090,
    isActive: true,
  },
];

export const leaderTable = [
  { id: "1asdkdfjnc", name: "Ali", point: 8090, isActive: true },
  { id: "2bsdkdfjnd", name: "Ayşe", point: 7650, isActive: true },
  { id: "3csdkdfjnd", name: "Mehmet", point: 7320, isActive: false },
  { id: "4dsdkdfjnd", name: "Fatma", point: 6980, isActive: true },
  { id: "5esdkdfjnd", name: "Ahmet", point: 6820, isActive: true },
  { id: "6fsdkdfjnd", name: "Zeynep", point: 6540, isActive: false },
  { id: "7gsdkdfjnd", name: "Emre", point: 6380, isActive: true },
  { id: "8hsdkdfjnd", name: "Elif", point: 6120, isActive: true },
  { id: "9isdkdfjnd", name: "Can", point: 5990, isActive: true },
  { id: "10jsdkdfjnd", name: "Burcu", point: 5800, isActive: false },
];

//varsayılan olarak dışa aktarılan eleman
// her dosya da sadece 1 y-tane varsayılan ol.dışa aktarım hakkımız vardır.

const adminPass = "sdffgfghghjhj";
export default adminPass;
