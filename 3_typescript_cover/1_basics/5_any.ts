// any bir verinin tipini belli olmadığı zaman kullanılır.
//kullanımı ts aykırıdır.
// sadece geçici olarak veya acil durumlarda kullanılabilir.

let foo: any;

foo = "ts";
foo = 33;
foo = {};
foo = true;
foo = null;

let bar: string;
bar = "aaaaa";

// bar = 40;
