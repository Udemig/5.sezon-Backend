//dizinin veri tipini tanımlarken diziniin içerisinde ki elemanların tipini söyleriz.

const students: string[] = ["ahmet", "mehmet", "ayşe", "40"];

//bütün dizi methodları dizinin tipibni dikkate alır.
students.push("ali");
// students.push([])

const ages: number[] = [12, 45, 56, 687, 78];

const licences: boolean[] = [true, false, true];

//normalde dizin tek bir veritipinden oluşmasını bekleriz.
// bazı durumlarda birden fazla farklı veri tipinden oluşabilir.
// union type kullanarak 'ya bu olsun ya bu olsun |

const teachers: (string | null | number)[] = ["uğur", null, "40", null, 70];
