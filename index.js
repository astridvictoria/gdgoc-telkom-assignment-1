const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  "Masukkan nama, umur, dan uang (contoh: Andi, 25, 100000): ",
  (input) => {
    const parts = input.split(", ");
    const nama = parts[0];
    const age = parseInt(parts[1]);
    const money = parseInt(parts[2]);

    if (age < 21) {
      console.log(`Maaf ${nama}, umur kamu kurang ${21 - age} tahun lagi`);
      rl.close();
      return;
    }

    if (money < 500000) {
      console.log(
        `Maaf ${nama}, uang kamu cuma ${money}, datang lagi lain kali`
      );
      rl.close();
      return;
    }

    console.log(`Selamat datang ${nama}`);
    rl.close();
  }
);

