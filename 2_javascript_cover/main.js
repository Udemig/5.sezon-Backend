//! export edilen elemanları içe aktarma
// import { leaderTable } from "./constant.js";
import { leaderTable as table } from "./constant.js";
console.log(table);

// console.log(leaderTable);

// varsayılan export
import sifre from "./constant.js";
console.log(sifre);

export const deneme = 10;
export const deneme1 = 50;
export const deneme2 = 60;
export const deneme3 = 30;

//! DEĞİŞKENLER
//veri depolamak istediğimizde kullanıyoruz.

//* var :
//* eski sürümlerde kullanılan değişken tanımlama yöntemidir.

//* yeni sürümlerde yerini let ve const almıştır.
//* değeri sonradan değiştirilebilir.
//* hoisting mekanizması sayesinde değişkeni yıkarıya taşır
//* kullandıktan sonra tanımlayabiliriz.

var x = 40;
x = 50;

//* es6 let;
//* tanımlandğı blok içerisinde kullanılır.(block - scope)
//* değişkeni tanımlamadan önce kullanamyız.
//* değeri sonradan değiştirebiliriz.

let surname = "yıldız";
surname = "kaya";

//* es6 const;
//* const ile tanımlama değişken sadece bir kez atanabilir.
//* sonrasında değiştirrilemez.
//* obje ve nesne tanımlandığında kendisi değişitirilemese de
//* nesnenin içeriği değişebilir.

const user = {
  name: "ahmet",
  surname: "kara",
};

user.name = "Ali";
console.log(user);

const users = ["ali", "ayşe"];
console.log(users);
users[0] = "Mehmet";

//! Hoisting

//Hoisting, JavaScript'te değişken ve fonksiyon deklarasyonlarının, kod çalıştırılmadan önce otomatik olarak üst kısımlara taşınmasıdır. Bu, bir değişkeni veya fonksiyonu, tanımlandığı satırdan önce de kullanabileceğiniz anlamına gelir.
//javascriptte hoisitng bir değişkeni veya fonksiyonu
//tanımlamadan önce kullanılmasına olanak sağlar.
//bazen beklenemdik sonuçlar ortaya çıkabilir.
//var foo;
console.log(foo); //undefined
//console.log(bar);

var foo = 70;
console.log(foo); // 70

selamla();

function selamla() {
  console.log("selam");
}

//! Javascript Veri Türleri
//*String

let statuss = "react";

const text = "selam bugün 'nasıl' geçiyor";
const text2 = 'gayet güzel, hava "çok" güneşli';
const text3 = `
-${statuss} öğrendin mi ? //javascript
-Evet öğrendim.
`; // template literals > backtick

console.log(text3);

//*Number
const sayi = 4;
const sayi2 = 4.1;

console.log(sayi + sayi2);

//* Boolean
const is_premium = true;
const is_student = false;

//* Object (Nesne)
//* birden çok özelliği ve değeri içeren karmaşık veri yapılarıdır
//* {} içerisinde anahtar -  değer çiftleriyle kullanıyoruz.

var person = {
  name: "John",
  age: 40,
  has_licence: false,
};

//* Array (Dizi)
//* Sıralı ögelerin listesini temsil eder
var colors = ["kırmızı", true, 59, { name: "ad" }];
console.log(colors);

//* Undefined (Tanımsız)
var u;
console.log(u);

//* Null (boş)
// bir değişkenin bilinçli olarak boş bırakıldığı veya olmadığını temsil eder.

var student = {
  name: "Ali",
  surname: "kaya",
  hobby: null,
};
console.log(student);
console.log(student.hobby); //null
console.log(student.gender); //undefined

//! Function (Fonksiyonlar)
//* Belirli bir görevi yerine getiren veya sonuç döndüren  adlandırılmış ve yeniden kullanılabilir
//* kod bloklarıdır.

/*
- Fonksiyonun Adı: işlevin ne yaptığını açıklayan isim
- Fonskiyonun Gövdesi: gerçekleştireceği işlevi içeren kod bloğu
- Parametreler:Fonksiyonun çalışması için doşarıdan gönderilen değer
- Dönüş Değer (return):Ürettiği sonucu fonk çağrıldığı yere gönderir.
*/

function toplama() {
  const sonuc = 60 + 80;
  console.log(sonuc);
}

toplama(); //fonk.çağır

function toplama2(a, b) {
  const sonuc1 = a + b;
  console.log(sonuc1);
}

toplama2(50, 100);
toplama2(65743, 12000);

function toplama3(a, b) {
  const sonuc2 = a + b;
  return sonuc2;
}

const sum1 = toplama3(50, 100);
const sum2 = toplama3(65743, 12000);

document.write(sum1);
console.log(sum2);

//* Arrow Function (Ok Fonskiyon)

function test(name) {
  return "selam" + name;
}

//* tek parametre varsa paranteze gerek yok
//* return edilecek veri tek satırdaysa doğrudan yazılır
const test2 = (name) => "selam" + name;

//* return den önce hesaplamalar yapılacaksa  ()=>{}
const test3 = (a, b) => {
  let c = a + b;
  return c;
};

//* retun edilecek veri çok satırlıysa ()=>()

const test4 = () =>
  `  <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title></title>`;

//* return edilecek veri objeyse
const test5 = () => ({ name: "ali", age: 760 });
const test6 = () => {
  return { name: "ali", age: 760 };
};

console.log(test5());

//! Diziler
// aynı türdeki verilerin belirli bir sırayla saklandığı ve her bir öğeye indeks numarasıyla erişilebilen bir veri yapısıdır. Diziler, bellekte ardışık olarak depolanır ve sabit boyutludur.

console.table(table);

// push: dizinin sonuna ekleme
table.push({
  id: "11lmno01",
  name: "Laura",
  point: 2500,
  isActive: false,
});
console.table(table);

// unshift: dizinin sonuna ekleme
table.unshift({
  id: "11lmno01",
  name: "selin",
  point: 27700,
  isActive: false,
});
console.table(table);

// shift(): dizinin başında ki elemanı çıkart
const removedItem = table.shift();
console.table(removedItem);
console.table(table);

//pop(): dizinin sonunda elemanı çıkart
const removedItem2 = table.pop();
console.table(removedItem2);
console.table(table);

// diziden belirli bir parçayı kesip aşma
//slice seçtiğim,z elemanlardan yeni bir dizi oluşturur
//ana dizide bir değişiklik olmaz

const part = table.slice(4, 7);
console.table(part);
console.table(table);

//* find
//* bir özelliğini bildiğimiz elemanı dizi de bulmaya yarar
//* sadece bir eleman döndürür

const foundUser = table.find((user) => user.id === "1asdk123");

console.log("Bulundu", foundUser);

//* forEach
//* bir eylemi dizide ki bütün elemanlar için tekrar etmek
//*istiyorsak kullanılır.dizide ki herbir eleman için
//* fonk. çalıştı. param. olarak elemanı gönderir.

function ekranaBas(user) {
  console.log(
    `<b> ${user.name}</b> kullanıcın aldığı puan <b> ${user.point}</b> `
  );
}

table.forEach(ekranaBas);

//* map
//* dizide ki herbir eleman için fonks.çalıştırır.
//* elemanı çalıştırdığı fonk. parametre olarak gönderir.
//* çalışan fonk.dan return edilen verilerle yeni dizi  oluşturur.

const decide = (user) => ({
  ...user, // user objesind eki verileri buraya aktar
  point: user.point + 200,
});

const newTable = table.map(decide);

console.table(table);
console.table(newTable);

/*
! Promise
JavaScript'te bir Promise, asenkron işlemlerle çalışmayı kolaylaştıran bir nesnedir. Temel olarak, gelecekte bir değer döneceği veya bir hata oluşacağı vaat edilen bir işlemi temsil eder.
Promise işlemin sonucunu temsil eder.
normalde promise biz oluşturmayız.hngi durumlarda oluşu rpeki
API isteği promise oluşur.3.parti paketlerle istek attığımız da promise deveye girer.
kednimiz bir promise oluşturcaz
Bir Promise, üç farklı durumda bulunabilir:

Pending (Beklemede): Promise oluşturulduğunda, işlem henüz tamamlanmamıştır.
Fulfilled (Tamamlandı): Asenkron işlem başarılı bir şekilde tamamlandığında, Promise bu durumda olur.olumlu.
Rejected (Reddedildi): Asenkron işlem bir hata ile sonuçlandığında, Promise bu durumda olur.reddedilidi.veri tabanının bize cevap vermemsi
*/

const apiRequest = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(resolve, 3000);
    resolve("Başarılı Sonuç");
  } else {
    setTimeout(reject, 2000);
    //reject("Üzgünüz Hata Oluştu"); bunu sonradan kaldır
  }
});

console.log("selam");

console.log(apiRequest);

//belirli bir süre sonra bir kere fonk.çalıştırır.
setTimeout(() => console.log("selam"), 3000);

//belirli bir süre bir fonks.çalıştırır.
setInterval(() => console.log("selam"), 3000);

//! Promise Yapıları Almak

// 1.yol > then > catch > finally
apiRequest
  // Ancak Promise başarıyla sonuçlanırsa çalışır
  .then((data) => {
    console.log("Başarıyla sonuçlandı");
  })
  // Başarısız olarak sonuçlanırsa çalışır
  .catch(() => {
    console.log("Başarısız oldu");
  })
  // Her iki durumda da çalışır
  .finally(() => {
    console.log("API isteği çalıştı");
  });

//* 2. yol > async > await
//* promise'leri daha okunaklı hale getiren es6 ile gelen js öözelliği
//* async > promise dönürüen fonklar tanımlanailir
//* await > asenkton bir fonksiyon içerisinde promise'in cevap vermesini bekler
async function getData() {
  const data = await apiRequest;
  console.log("api başarılı");
}
async function getData() {
  try {
    // kodu çalıştırmayı dener
    const data = await apiRequest;
    console.log("api den başarılı cevap geldi");
  } catch (err) {
    // hata olursa bu blok çalışır
    console.log("promise başlarısz oldu");
  }
}

getData();

//! Asenkron

// aseknron terimi: bir işlemin başlatılması ve sonuç alması
// arasındaa beklemey karar vermeden devam edebilmesi anlamına gelir
// fetch > http istekleri  atmaya yarar
//ağ istekelri dosya okuma yzma zamanlayıcılar(sett) bazı kullanıcı etkileşiöeir veri tabanı

const getDataa = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  console.table(data);
};

getDataa();
