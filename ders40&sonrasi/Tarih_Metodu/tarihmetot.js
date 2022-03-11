let tarih = new Date();

console.log(typeof tarih);
console.log(tarih); //full date
console.log(tarih.getFullYear()); //hangi yildayiz
console.log(tarih.getMonth()+1); //tam olarak hangi ayda oldugumuzu görmek icin +1 ekleyelim cunku 0'dan basliyor saymaya
console.log(tarih.getDate()); //ayin hangi günü
console.log(tarih.getDay()); //haftanin hangi günü

console.log(tarih.getHours()); //hangi saatteyiz
console.log(tarih.getMinutes()); //dakika
console.log(tarih.getSeconds()); //saniye

console.log(tarih.toLocaleString()); //duzenli olan tarih ve saat formati.