// // function filter(arg) {
// //   let res = arg.filter(function (value) {
// //     return value.length >= 5 && typeof value == "number";
// //   });

// //   res = res.map(function (value) {
// //     value = value[0].toUpperCase() + value.slice(1);
// //     return value;
// //   });
// //   return res;
// // }

// // function findStudent(arg) {
// //   let user = arg.find(function (value) {
// //     return value.age > 20;
// //   });

// //   let res = user ? user.name.toUpperCase() : "Bunday talaba topilmadi.";
// //   return res;
// // }

// // function find(arg) {
// //   let res = arg.filter(function (value) {
// //     return value.age > 18;
// //   });

// //   return res;
// // }

// // let keys = Object.keys(objectName);
// // let values = Object.values(objectName);
// // let entries = Object.entries(objectName);
// // Object.freeze(objectName);

// function UserInfo(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// function ContactInfo(phone, email) {
//   this.phone = phone;
//   this.email = email;
// }

// function FamilyInfo(father, mother) {
//   this.father = father;
//   this.mother = mother;
// }

// function AddresInfo(country, street, house) {
//   this.country = country;
//   this.street = street;
//   this.house = house;
// }

// function StudentPoint(student, points) {
//   this.student = student;
//   this.points = points;
// }

// // let david = new User("david", 34, 70);
// // let john = new User("John", 45, 979564111);

// const userinfo = new UserInfo("Oyatillo", "Toshtemirov");

// const contactinfo = new ContactInfo(
//   "+998979564111",
//   "oyatillotoshtemirov071@mail.com"
// );

// const familyinfo = new FamilyInfo(
//   "Kamoliddin Masharipov",
//   "Mavjuda Masharipova"
// );

// const addressinfo = new AddresInfo("Uzbekistan", "Istirohat", 14);

// const studentPointinfo = new StudentPoint("Oyatillo Toshtemirov", 100);

// class ClassUser {
//   constructor(name, age, phone) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//   }
// }

// console.log(userinfo);
// console.log(contactinfo);
// console.log(familyinfo);
// console.log(addressinfo);
// console.log(studentPointinfo);

// class ClassUserInfo {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// class ClassContactInfo {
//   constructor(phone, email) {
//     this.phone = phone;
//     this.email = email;
//   }
// }

// class ClassFamilyInfo {
//   constructor(father, mother) {
//     this.father = father;
//     this.mother = mother;
//   }
// }

// class ClassAddressInfo {
//   constructor(country, street, house) {
//     this.country = country;
//     this.street = street;
//     this.house = house;
//   }
// }

// class ClassStudentPoint {
//   constructor(student, points) {
//     this.student = student;
//     this.points = points;
//   }
// }

// const user = new ClassUserInfo("Oyatillo", "Toshtemirov");

// const contact = new ClassContactInfo(
//   "+998979564111",
//   "oyatillotoshtemirov071@mail.com"
// );

// const family = new ClassFamilyInfo(
//   "Kamoliddin Masharipov",
//   "Mavjuda Masharipova"
// );

// const address = new ClassAddressInfo("Uzbekistan", "Istirohat", 14);

// const studentPoint = new ClassStudentPoint("Oyatillo Toshtemirov", 100);

// console.log(user);
// console.log(contact);
// console.log(family);
// console.log(address);
// console.log(studentPoint);

// //
// //
// //
// //
// //
// //

// // 1. **O'quvchilarni chiqarish**
// //  **Masala:** Berilgan o'quvchilar massivida har bir o'quvchining ism va yoshini ekranga chiqaruvchi funksiya yozing.

// const students = [
//   { name: "Zuhriddin", age: 18 },
//   { name: "Avazbek", age: 17 },
//   { name: "Oyatillo", age: 21 },
// ];

// function outstudents(students) {
//   students.forEach(function (student) {
//     console.log(`Ismi: ${student.name}, Yoshi: ${student.age}`);
//   });
// }

// outstudents(students);

// // 2. **Mahsulot narxini oshirish**
// // **Masala:** Berilgan mahsulotlar massivida har bir mahsulotning narxini 20% ga oshirib yangi massiv yaratuvchi funksiya yozing.

// const products = [
//   { name: "Olma", price: 100 },
//   { name: "Nok", price: 150 },
//   { name: "Banan", price: 200 },
// ];

// function newprice(products) {
//   products.forEach(function (product) {
//     product.price = product.price * 1.2;
//   });
// }

// newprice(products);

// console.log(products);

// // 3. **18 yoshdan katta o'quvchilarni tanlash**
// // **Masala:** O'quvchilar ro'yxatidagi barcha o'quvchilar 18 yoshdan katta bo'lsa, ularni tanlaydigan funksiya yozing.

// const adultStudents = [
//   { name: "Dilorom", age: 20 },
//   { name: "Shahrizoda", age: 17 },
//   { name: "Akbar", age: 19 },
// ];

// function adultStudentFilt(student) {
//   let res = adultStudents.filter(function (student) {
//     return student.age > 18;
//   });
//   return res;
// }

// let adultSt = adultStudentFilt(adultStudents);
// console.log(adultStudents);

// console.log(adultSt);

// // 4. **Kitob mualliflarini formatlash**
// //  **Masala:** Berilgan kitoblar massivida kitoblarning mualliflarini bir xil qilib yozadigan funksiya yarating.

// const kitoblar = [
//   { nom: "Kitob A", muallif: "Said Ahmad" },
//   { nom: "Kitob B", muallif: "Zokir Khoshimov" },
//   { nom: "Kitob C", muallif: "Murodjon Abduqodirov" },
// ];
// console.log(kitoblar);

// // misolda nima nazarda tutulganini aniq tushunmadim shuning uchun uch xil usulda bajardim
// function changeAutors(arg) {
//   // let autor = arg[0].muallif;
//   let res = arg.map(function (arg) {
//     return { nom: arg.nom, muallif: arg.muallif.toUpperCase() };
//     // return { nom: arg.nom, muallif: arg.muallif.toLowerCase() };
//     // return { nom: arg.nom, muallif: autor };
//   });

//   return res;
// }

// let newbooks = changeAutors(kitoblar);
// console.log(newbooks);

// //

// // 5. **Ish haqini oshirish**
// // **Masala:** Berilgan xodimlar massivida har bir xodimning ish haqini 10% ga oshiruvchi funksiya yozing va yangilangan ish haqlarini ekranga chiqaruvchi funksiya yarating.

// const xodimlar = [
//   { ism: "Rashid", ishHaqi: 3000 },
//   { ism: "Dilshod", ishHaqi: 2500 },
//   { ism: "Farhod", ishHaqi: 4000 },
// ];

// function newSalary(arg) {
//   let res = arg.map(function (arg) {
//     return Math.trunc(arg.ishHaqi * 1.1);
//   });
//   return res;
// }

// let salary = newSalary(xodimlar);
// console.log(xodimlar);
// console.log(salary);

// // 6. **Ism prefiksini qo'shish**
// //  **Masala:** O'quvchilar ro'yxatida ismlarini "Mr." prefiksi bilan ko'rsatadigan funksiya yozing.

// const mrOquvchilar = [
//   { ism: "Jasur", yosh: 21 },
//   { ism: "Sardorbek", yosh: 22 },
//   { ism: "Azizbek", yosh: 20 },
// ];

// function mrPref(arg) {
//   let res = arg.map(function (value) {
//     return {
//       ism: "Mr " + value.ism,
//       yosh: value.yosh,
//     };
//   });
//   return res;
// }
// console.log(mrOquvchilar);

// let prefiks = mrPref(mrOquvchilar);
// console.log(prefiks);

// // 7. **Elektr avtomobillarini tanlash**
// //  **Masala:** Berilgan avtomobillar massividan faqat elektr avtomobillarini tanlaydigan funksiya yozing.

// const avtomobillar = [
//   { nom: "Tesla", tur: "elektr" },
//   { nom: "Toyota", tur: "benzin" },
//   { nom: "Nissan Leaf", tur: "elektr" },
// ];

// function filtElectro(arg) {
//   let res = arg.filter(function (value) {
//     return value.tur == "elektr";
//   });
//   return res;
// }

// console.log(avtomobillar);
// let elektrAuto = filtElectro(avtomobillar);
// console.log(elektrAuto);

// // Foydalanuvchi ma'lumotlarini qaytarish**
// //  **Masala:** Berilgan foydalanuvchilar massivida foydalanuvchi ma'lumotlarini (ism, email) qaytaruvchi funksiya yarating.

// const foydalanuvchilar = [
//   { ism: "Aziz", email: "aziz@example.com" },
//   { ism: "Nodir", email: "nodir@example.com" },
//   { ism: "Malika", email: "malika@example.com" },
// ];

// function returnUser(arg) {
//   return arg.map(function (value) {
//     return { ism: value.ism, email: value.email };
//   });
// }

// console.log(foydalanuvchilar);
// let returnUsers = returnUser(foydalanuvchilar);
// console.log(returnUsers);

// const mahsulotlar = [
//   { nom: "Televizor", narx: 500 },
//   { nom: "Konditsioner", narx: 700 },
//   { nom: "Butler", narx: 300 },
// ];

// function maxPrice(arg) {
//   let maxPrice = mahsulotlar[0];
//   arg.forEach(function (value) {
//     if (value.narx > maxPrice.narx) {
//       maxPrice = value;
//     }
//   });
//   return maxPrice;
// }

// let maxProductPrice = maxPrice(mahsulotlar);
// console.log(mahsulotlar);
// console.log(maxProductPrice);

// 10. **O'quvchi ballarini tenglashtirish**
// **Masala:** O'quvchilar ro'yxatida har bir o'quvchining ballarini umumiy qiymatga tenglashtiruvchi funksiya yozing.

// const oquvchilar = [
//   { ism: "Zarina", ball: 85 },
//   { ism: "Doston", ball: 90 },
//   { ism: "Gulbahor", ball: 95 },
// ];

// function point(arg) {
//   let sum = 0;
//   let counter = 0;
//   arg.forEach(function (value) {
//     sum += value.ball;
//     counter++;
//   });

//   return arg.map(function (value) {
//     return { ism: value.ism, ball: sum / counter };
//   });
// }
// let pointst = point(oquvchilar);
// console.log(pointst);

//                                          String metodiga oid masalalar

// 1. **Satrni kichik harflarga o‘girish**
//  Berilgan satrni kichik harflarga o‘girish va natijani ekranga chiqaruvchi funksiya yozing.

// function lowerStr(str) {
//  return str.toLowerCase();
// }

// let string = lowerStr(
//   "Berilgan satrni kichik harflarga o'girish va natijani ekranga chiqaruvchi funksiya yozing"
// );
// console.log(string);

// 2. **Satrning uzunligini hisoblash**
//  Berilgan satrning uzunligini hisoblaydigan funksiya yozing va natijani ekranga chiqaring.

// function lengthStr(string) {
//   return string.length;
// }
// console.log(
//   lengthStr(
//     "Berilgan satrning uzunligini hisoblaydigan funksiya yozing va natijani ekranga chiqaring"
//   )
// );

// 3. **Satrning boshlanishi va tugashi**
//  Berilgan satrning "Hello" bilan boshlanishi va "!" bilan tugashi haqida ma'lumot beruvchi funksiya yozing.

// function strStartAndEnd(string) {
//   let withHello = string.startsWith("Hello");
//   let withExclamation = string.endsWith("!");

//   return withHello == true && withExclamation == true ? "Rost" : "Yolg'on";
// }

// const result = strStartAndEnd(
//   "Hello berilgan satrning 'Hello' bilan boshlanishi va '!' bilan tugashi haqida ma'lumot beruvchi funksiya yozing!"
// );

// console.log(result);

// 4. **Satrni qisqartirish**
// Berilgan satrni 10 ta belgidan iborat qilib qisqartiruvchi funksiya yozing va natijani ekranga chiqaruvchi funksiya yarating.

// function strShort(string) {
//   let res = string.slice(0, 10);
//   return res;
// }
// console.log(
//   strShort(
//     "Berilgan satrni 10 ta belgidan iborat qilib qisqartiruvchi funksiya yozing va natijani ekranga chiqaruvchi funksiya yarating."
//   )
// );

// 5. **Satr ichidagi belgilarni almashtirish**

// function replaceChar(string) {
//   return string.replace(/a/g, "o");
// }

// console.log(
//   replaceChar(
//     "Berilgan satrda 'a' harfini 'o' harfiga almashtiruvchi funksiya yozing va natijani ekranga chiqaring."
//   )
// );

// 6. **Satrning ma'lum bir indeksidagi belgi**
//  Berilgan satrning 5-indeksidagi belgi haqida ma'lumot beruvchi funksiya yozing.

// function fiveEl(string) {
//   return string.length > 5
//     ? "Satrdagi 5-chi element:  " + " " + string[5]
//     : "Satr 5 ta elementdan kichik";
// }

// console.log(
//   fiveEl(
//     "Berilgan satrning 5-indeksidagi belgi haqida ma'lumot beruvchi funksiya yozing."
//   )
// );

// 7. **Satr ichida qidiruv**
//  Berilgan satrda "JavaScript" so'zining mavjudligini tekshiruvchi funksiya yozing va natijani ekranga chiqaring.

// function checkJS(string) {
//   return string.includes("JavaScript") ? "Mavjud" : "Mavjud emas";
// }
// console.log(
//   checkJS(
//     "Berilgan satrda 'JavaScript' so'zining mavjudligini tekshiruvchi funksiya yozing va natijani ekranga chiqaring."
//   )
// );
