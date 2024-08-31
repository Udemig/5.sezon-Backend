// fonksiyonların tipini tanımlamak dediğimiz zaman fonksiyonların parametrelerrinin ve return değerlerinin tipini tanımlamaktan bahsediyoruz.

function hesaplama(a: number, b: number): string {
  return "Sonucunuz" + a + b;
}

// fonksiyonu çağırırken parametreye göre hata kontrolü yapar
hesaplama(12, 45);

// örnek

// kişinin bulunduğu konumu ve oranın hava derecesinin parametre olarak alıp
// "Merhaba, .... konumunda ki hava derecesi ... derece" metninii döndüren fonksiyonu yazınız.

const useLoc = (loc: string, degree: number): string => {
  return `Merhaba, ${loc} konumunda ki hava dercesini ${degree} derece`;
};

useLoc("Türkiye", 35);
