# Drug Management App

Aplikasi untuk Monitoring Perpindahan Obat

## Live: https://react-drug-management-app.vercel.app

Aplikasi versi live dideploy menggunakan Vercel, dan database dimigrasi dari MySQL ke PostgreSQL dan dihost dengan Supabase.

## Fitur

- Membuat transaksi perpindahan obat antar depo.
- Mencari obat dengan fitur Search dan Autocomplete.
- Mengatur obat yang dipilih saat transaksi (jenis dan banyak)
- Menghapus obat yang dipilih saat membuat transaksi.
- Melihat rincian transaksi yang sudah dilakukan.
- Menghapus transaksi.

## Teknologi

Aplikasi ini menggunakan library open-source diantaranya:

- ReactJS, sebagai front-end
- Material UI, sebagai styling
- NodeJS, sebagai back-end dan environment antar front-end dan back-end
- Vite, sebagai pengelola ekosistem Javascript
- MySQL, sebagai database
- Axios dan Express sebagai jembatan back-end dengan database

Project yang dikerjakan terhubung dengan Git dan ditampung di Github sebagai repository online.

## Instalasi

Aplikasi membutuhkan NodeJS untuk menjalankan aplikasi dan MySQL untuk menjalankan database.

Yang harus dilakukan untuk menjalankan aplikasi: 

```sh
git clone https://github.com/destbreak/react-drug-management-app.git
cd react-drug-management-app
git checkout main
npm install
npm run dev
```

Yang harus dilakukan untuk menjalankan database: 
```sh
cd react-drug-management-app
git checkout main
cd backend
npm install
node index.js
```
Apabila pertama kali menjalankan aplikasi, import `drug-management-app.sql` yang telah tersedia di folder `database`.

## License

MIT

**Free Software, Hell Yeah!**
