const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/belajar-nodejs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// // menambahkan 1 data
// const contact1 = new Contact({
//   nama: "Hisoka",
//   nohp: "08188765254",
//   email: "hisoka@gmail.com",
// });

// // simpan ke collection
// contact1.save().then((contact) => {
//   console.log(contact);
// });
