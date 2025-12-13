const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan nama dan umur (contoh: Budi, 17): ", (input) => {
  const [nama, umur] = input.split(", ");
  const age = parseInt(umur);

  if (age < 21) {
    console.log(`Maaf ${nama}, umur kamu kurang ${21 - age} tahun lagi`);
  } else {
    console.log("Umur memenuhi syarat");
  }

  rl.close();
});
