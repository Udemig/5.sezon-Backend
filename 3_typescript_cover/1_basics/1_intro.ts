/*
* Typscript, js'in önemli açıklarını düzeltmek için microsoft tarafından geliştirilen bir programlama dili.

* js'de tanımlanan bir değişkene her türde değer ataması yapılabilir.
* js'de otomatik tamalama özelliği yok.
* js'de kodu çalıştırmadan hataları göremiyoruz.



* * typscript kodları doğrudan çalışrılamaz.
* * yazılan ts kodunu js koduna derlemeliyiz.
* 
* TSC : Typscript Complier
* yazılan ts kodnunu js koduna derliyor.
*/
//1) tip koruması
let user = "ahmet";

user = "mehmet";

// user = 40;

//2) otomatik tamamlama

const teacher = {
  name: "ali",
  age: "30",
};

teacher.name;
teacher.age;
// teacher.asdfdffv;

console.log("selam");
