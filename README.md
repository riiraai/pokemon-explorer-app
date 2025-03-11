# Aplikasi Pokemon Explorer

Proyek ini dibuat sebagai bagian dari tes online untuk proses rekrutmen (Frontend Reactjs - Remote) di PT. Digdaya Olah Teknologi (DOT) Indonesia.

## Deskripsi

Aplikasi Pokemon Explorer adalah aplikasi web yang memungkinkan pengguna untuk menjelajahi dan menelusuri data Pokemon dari PokeAPI. Pengguna dapat mencari Pokemon, dan melihat detail mereka.

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal hal-hal berikut:

-   Node.js (versi 20.x atau lebih baru)
-   npm (versi 10.x atau lebih baru) atau Yarn (versi 1.22.x atau lebih baru)
-   Git

## Instalasi

Ikuti langkah-langkah berikut untuk mengatur proyek secara lokal:

1. Kloning repositori

    ```bash
    git clone https://github.com/riiraai/pokemon-explorer-app.git
    cd pokemon-explorer-app
    ```

2. Instal dependensi
    ```bash
    npm install
    # atau
    yarn install
    ```

## Menjalankan Aplikasi

### Mode Pengembangan

```bash
npm run dev
# atau
yarn dev
```

Aplikasi akan tersedia di `http://localhost:5173`

### Build Produksi

```bash
npm run build
npm run preview
# atau
yarn build
yarn preview
```

## Fitur

-   **Daftar Pokemon**: Jelajahi semua Pokemon yang tersedia dengan dukungan pagination
-   **Fungsi Pencarian**: Cari Pokemon berdasarkan nama
-   **Detail Pokemon**: Lihat informasi detail tentang setiap Pokemon termasuk statistik, kemampuan, dan tipe
-   **Desain Responsif**: Dioptimalkan untuk perangkat desktop maupun mobile

## Teknologi yang Digunakan

-   **Framework Frontend**: React.js + Vite + TypeScript
-   **Manajemen State**: Context API
-   **Routing**: React Router
-   **HTTP Client**: Axios
-   **Styling**: Styled Components
-   **Code Quality**: ESLint + Prettier

## Struktur Proyek

```
pokemon-explorer-app/
├── public/               # File statis
├── src/
│   ├── components/       # Komponen
│       ├── core/         # Komponen inti aplikasi (header, footer, dll.)
│       ├── layouts/      # Komponen layout (sidebar, main content, dll.)
│       ├── shared/       # Komponen bersama (button, input, dll.)
│       └── ui/           # Komponen kecil yang dapat digunakan kembali (card, modal, dll.)
│   ├── contexts/         # Context API untuk manajemen state
│   ├── hooks/            # Custom hooks yang dapat digunakan kembali
│   ├── pages/            # Halaman aplikasi (home, dll.)
│   ├── services/         # Layanan API
│   ├── styles/           # Tema dan konfigurasi styled-components
│   ├── types/            # TypeScript types dan interfaces
│   ├── App.jsx           # Komponen App utama
│   └── index.jsx         # Entry point aplikasi
├── .gitignore            # File yang diabaikan oleh Git
├── eslint.config.js      # Konfigurasi ESLint
├── index.html            # Entry point HTML
├── package.json          # Dependensi proyek
├── vite.config.ts        # Konfigurasi Vite
├── README.md             # Dokumentasi proyek
├── tsconfig.json         # Konfigurasi TypeScript
├── tsconfig.app.json     # Konfigurasi TypeScript untuk Vite
├── tsconfig.node.json    # Konfigurasi TypeScript untuk Node
└── vite.config.ts        # Konfigurasi Vite
```

## Informasi Pengguna Default

Gunakan informasi pengguna default berikut untuk login:

-   **Email**: default@example.com
-   **Password**: password123

## Referensi API

Proyek ini menggunakan [PokeAPI](https://pokeapi.co/) untuk mengambil data Pokemon sebagai external API. Berikut adalah endpoint utama yang digunakan:

-   `/pokemon`: Mendapatkan daftar Pokemon
-   `/pokemon/{name}`: Mendapatkan detail Pokemon tertentu

## Penulis

Ari Saputra - [riiraai](https://github.com/riiraai)
