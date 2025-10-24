# 🚀 Pixel Studio - Digital Agency Website

Website company profile untuk Digital Agency yang dibangun dengan HTML, CSS, JavaScript/jQuery, dan PHP.

## 📋 Daftar Isi
- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Instalasi](#instalasi)
- [Struktur File](#struktur-file)
- [Cara Menggunakan](#cara-menggunakan)
- [Fitur Detail](#fitur-detail)
- [Troubleshooting](#troubleshooting)

---

## ✨ Fitur

### Halaman Home (index.html)
- Hero section dengan animated gradient background
- Services section dengan 4 card interaktif
- Statistics counter animation (Projects, Clients, Years, Team)
- Call-to-action section

### Halaman Portfolio (portfolio.php)
- Dynamic project rendering dengan PHP
- Filter portfolio berdasarkan kategori (All, Web, Mobile, Design)
- Hover effect dengan overlay information
- 6 project cards dengan smooth animations

### Halaman Contact (contact.php)
- Contact form dengan real-time validation
- PHP form processing & data saving
- Character counter untuk textarea
- Contact information display
- Social media links

---

## 🛠️ Teknologi

### Client Side:
- **HTML5** - Semantic markup
- **CSS3** - Modern styling dengan Flexbox & Grid
- **JavaScript** - Vanilla JS & Intersection Observer
- **jQuery 3.6.0** - DOM manipulation & animations

### Server Side:
- **PHP 7.4+** - Form processing & dynamic content

### External:
- Google Fonts (Poppins, Inter)
- Unsplash Images (placeholder)

---

## 📦 Instalasi

### Prasyarat
- **Laragon** sudah terinstall ([Download Laragon](https://laragon.org/download/))
- PHP 7.4 atau lebih tinggi
- Browser modern (Chrome, Firefox, Edge)

### Langkah Instalasi dengan Laragon

#### 1. Download Project
Download semua file project dan simpan dalam satu folder.

#### 2. Setup di Laragon

**Cara A: Menggunakan Root Folder Laragon**
```bash
# Copy folder project ke:
C:\laragon\www\pixel-studio\

# Struktur folder:
C:\laragon\www\pixel-studio\
├── index.html
├── portfolio.php
├── contact.php
├── style.css
├── script.js
└── (inquiries.txt akan otomatis dibuat)
```

**Cara B: Membuat Virtual Host (Recommended)**
1. Copy folder `pixel-studio` ke `C:\laragon\www\`
2. Klik kanan icon Laragon di system tray
3. Pilih **"Quick app" > "Configuration"**
4. Atau buat manual:
   - Buka Laragon → Menu → Preferences → Auto Virtual Hosts
   - Format: `{name}.test`
5. Restart Laragon

#### 3. Start Laragon
1. Buka aplikasi **Laragon**
2. Klik tombol **"Start All"**
3. Tunggu hingga Apache dan MySQL aktif (hijau)

#### 4. Set Permissions (Penting!)
```bash
# Pastikan folder bisa menulis file inquiries.txt
# Klik kanan folder pixel-studio → Properties → Security
# Berikan Full Control untuk user Anda
```

#### 5. Akses Website

**Jika menggunakan Root Folder:**
```
http://localhost/pixel-studio/
```

**Jika menggunakan Virtual Host:**
```
http://pixel-studio.test/
```

---

## 📁 Struktur File

```
pixel-studio/
│
├── index.html              # Homepage
├── portfolio.php           # Portfolio dengan filter
├── contact.php             # Contact form & processing
├── style.css               # Semua styling
├── script.js               # JavaScript/jQuery
│
└── inquiries.txt           # Data form (auto-created)
```

**Total: 5 File Utama**

---

## 🎯 Cara Menggunakan

### 1. Navigasi Website
- Klik menu navigasi atau scroll untuk berpindah section
- Menu akan otomatis highlight sesuai posisi scroll

### 2. Melihat Portfolio
- Buka halaman **Portfolio**
- Klik button filter: All, Web Development, Mobile Apps, UI/UX Design
- Hover pada project card untuk melihat detail

### 3. Mengirim Pesan
- Buka halaman **Contact**
- Isi form: Name, Email, Service, Message
- Sistem akan validasi real-time
- Data akan tersimpan di `inquiries.txt`

### 4. Melihat Data Form
```bash
# Buka file:
C:\laragon\www\pixel-studio\inquiries.txt

# Format data:
---New Inquiry---
Date: 2025-10-24 15:30:00
Name: John Doe
Email: john@example.com
Service: Web Development
Message: Hello, I need a website...
```

---

## 🎨 Fitur Detail

### HTML Features
✅ Semantic HTML5 (header, nav, section, footer)
✅ Form dengan validation attributes
✅ Responsive meta viewport
✅ SEO-friendly structure

### CSS Features
✅ CSS Variables untuk color theming
✅ Flexbox & Grid layouts
✅ Gradient backgrounds & animations
✅ Hover effects & transitions
✅ Card designs dengan shadows
✅ Responsive breakpoints (@media queries)
✅ Custom scrollbar (optional)

### JavaScript/jQuery Features
✅ **Smooth Scroll** - Navigation yang halus
✅ **Sticky Navbar** - Background berubah saat scroll
✅ **Mobile Menu** - Hamburger toggle animation
✅ **Counter Animation** - Stats counting up
✅ **Portfolio Filter** - Show/hide by category
✅ **Form Validation** - Real-time error messages
✅ **Character Counter** - Textarea max 500 chars
✅ **Scroll Animations** - Intersection Observer API
✅ **Active Menu Highlight** - Auto-detect scroll position

### PHP Features
✅ **Dynamic Portfolio** - Loop array untuk render projects
✅ **Form Processing** - POST method handling
✅ **Data Validation** - Server-side validation
✅ **File Writing** - Save to inquiries.txt
✅ **Data Sanitization** - htmlspecialchars untuk security
✅ **Success/Error Messages** - User feedback

---

## 🎮 Testing Features

### 1. Test Smooth Scroll
- Klik menu "Services" atau "About"
- Page akan smooth scroll ke section

### 2. Test Mobile Responsive
- Resize browser menjadi kecil (< 768px)
- Hamburger menu akan muncul
- Klik untuk toggle menu

### 3. Test Portfolio Filter
- Buka halaman Portfolio
- Klik "Web Development" → hanya web projects muncul
- Klik "All Projects" → semua muncul kembali

### 4. Test Form Validation
- Buka halaman Contact
- Coba submit form kosong → error muncul
- Isi email salah (tanpa @) → error format email
- Isi semua dengan benar → success message & data tersimpan

### 5. Test Counter Animation
- Scroll ke section Stats
- Angka akan counting up dari 0

---

## 🔧 Troubleshooting

### ❌ Problem: Website tidak bisa diakses

**Solusi:**
1. Pastikan Laragon sudah running (Apache hijau)
2. Check URL: `http://localhost/pixel-studio/index.html`
3. Restart Laragon: Stop All → Start All

### ❌ Problem: Form tidak menyimpan data

**Solusi:**
```bash
# 1. Check permissions folder
Klik kanan folder → Properties → Security → Edit
Berikan "Full Control" untuk Users

# 2. Check PHP error
Tambahkan di awal contact.php:
error_reporting(E_ALL);
ini_set('display_errors', 1);

# 3. Manual create file
Buat file inquiries.txt di folder yang sama
Klik kanan → Properties → Uncheck "Read-only"
```

### ❌ Problem: CSS/JS tidak load

**Solusi:**
```html
<!-- Pastikan path benar di HTML -->
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>

<!-- BUKAN -->
<link rel="stylesheet" href="/style.css">
```

### ❌ Problem: jQuery tidak bekerja

**Solusi:**
1. Check koneksi internet (jQuery load dari CDN)
2. Atau download jQuery dan simpan lokal:
```html
<!-- Ganti dengan local file -->
<script src="jquery-3.6.0.min.js"></script>
```

### ❌ Problem: Portfolio filter tidak jalan

**Solusi:**
```bash
# Check console browser (F12)
# Pastikan tidak ada error JavaScript
# Pastikan jQuery loaded sebelum script.js
```

### ❌ Problem: Virtual Host tidak bisa diakses

**Solusi:**
```bash
# 1. Check file hosts
C:\Windows\System32\drivers\etc\hosts

# Harus ada:
127.0.0.1 pixel-studio.test

# 2. Flush DNS
# Buka CMD as Administrator:
ipconfig /flushdns

# 3. Restart Laragon
```

---

## 🎯 Customization

### Mengubah Warna Theme
Edit file `style.css`:
```css
:root {
    --primary: #6366F1;    /* Ganti warna primary */
    --secondary: #EC4899;  /* Ganti warna secondary */
    --accent: #10B981;     /* Ganti warna accent */
}
```

### Menambah Project Portfolio
Edit file `portfolio.php`:
```php
$projects = [
    // ... existing projects
    [
        'id' => 7,
        'title' => 'New Project',
        'category' => 'web',  // web, mobile, atau design
        'description' => 'Project description',
        'image' => 'https://your-image-url.com/image.jpg'
    ]
];
```

### Mengubah Konten Text
- **Hero Title**: Edit di `index.html` → `.hero-title`
- **Services**: Edit di `index.html` → `.service-card`
- **Stats Numbers**: Edit di `index.html` → `data-target="150"`

---

## 📊 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Opera | 76+ | ✅ Full Support |

---

## 📝 Credits

- **Fonts**: Google Fonts (Poppins, Inter)
- **Images**: Unsplash (placeholder)
- **Icons**: SVG inline icons
- **jQuery**: v3.6.0 from CDN

---

## 📄 License

Project ini dibuat untuk keperluan tugas kuliah.
Bebas digunakan dan dimodifikasi sesuai kebutuhan.

---

## 👨‍💻 Developer

**Pixel Studio Website**
Dibuat dengan ❤️ menggunakan HTML, CSS, JavaScript/jQuery, dan PHP

---

## 📞 Support

Jika ada pertanyaan atau masalah:
1. Check bagian [Troubleshooting](#troubleshooting)
2. Review kode di setiap file
3. Check console browser (F12) untuk error

---

**🎉 Selamat Menggunakan Pixel Studio!**

Semoga website ini membantu tugas Anda dan mendapat nilai bagus! 💯