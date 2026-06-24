// === TOAST NOTIFICATION UTILITY ===
// Mengganti fungsionalitas browser alert() dengan toast yang elegan
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = `flex items-center gap-3 p-4 rounded-2xl shadow-xl border backdrop-blur-md transition-all duration-300 transform translate-y-5 opacity-0 pointer-events-auto max-w-xs sm:max-w-sm ${
    type === "success"
      ? "bg-emerald-50 border-emerald-100 text-emerald-900"
      : "bg-indigo-50 border-indigo-100 text-indigo-900"
  }`;

  const iconBg = type === "success" ? "bg-emerald-500" : "bg-indigo-600";
  const icon = type === "success" ? "fa-check" : "fa-info-circle";

  toast.innerHTML = `
                <div class="p-2 rounded-xl ${iconBg} text-white flex items-center justify-center flex-shrink-0">
                    <i class="fas ${icon} text-sm"></i>
                </div>
                <div class="flex-1">
                    <p class="font-bold text-xs uppercase tracking-wider text-zinc-500">${type === "success" ? "Sukses" : "Informasi"}</p>
                    <p class="text-sm font-semibold mt-0.5">${message}</p>
                </div>
            `;

  container.appendChild(toast);

  // Animasi masuk
  setTimeout(() => {
    toast.classList.remove("translate-y-5", "opacity-0");
  }, 50);

  // Animasi keluar setelah beberapa detik
  setTimeout(() => {
    toast.classList.add("opacity-0", "-translate-y-2");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

// === MOBILE DRAWER NAVIGATION ===
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const drawer = menu.querySelector(".drawer-transition");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    setTimeout(() => {
      drawer.classList.remove("-translate-x-full");
    }, 50);
  } else {
    drawer.classList.add("-translate-x-full");
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 300);
  }
}

// === HERO SLIDER INTERACTIVE LOGIC ===
let slideIndex = 0;
const slidesWrapper = document.getElementById("slider-wrapper");
const dots = document.querySelectorAll(".dot");
const totalSlides = 3;
let slideInterval;

function updateSlider() {
  slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.className =
        "dot w-10 h-3.5 rounded-full bg-white cursor-pointer transition-all duration-300 shadow-md";
    } else {
      dot.className =
        "dot w-3.5 h-3.5 rounded-full bg-white/40 hover:bg-white/60 cursor-pointer transition-all duration-300";
    }
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function goToSlide(index) {
  slideIndex = index;
  updateSlider();
  resetSlideTimer();
}

function startSlideTimer() {
  slideInterval = setInterval(nextSlide, 6000);
}

function resetSlideTimer() {
  clearInterval(slideInterval);
  startSlideTimer();
}

// Mulai Timer Slider Otomatis saat halaman dimuat
startSlideTimer();
updateSlider();

// === DATABASE PRODUK & DATA MANAGEMEN ===
const daftarProduk = [
  {
    id: 1,
    nama: "Signature Heavyweight Tee",
    kategori: "Baju",
    tag: "NEW ARRIVAL",
    deskripsi:
      "Kaos premium dari katun organik dengan ketebalan 240 Gsm. Jatuh sempurna di badan, adem, dan sangat lembut.",
    img: "https://images.unsplash.com/photo-1693443687750-611ad77f3aba?q=80&w=870",
    harga: 165000,
  },
  {
    id: 2,
    nama: "Classic Flannel Overshirt",
    kategori: "Baju",
    tag: "BEST SELLER",
    deskripsi:
      "Kemeja flanel berpotongan relax-fit bermotif kotak klasik Jepang. Ideal dijadikan luaran casual harian Anda.",
    img: "https://huckberry.imgix.net/spree/products/785741/original/93789_Flint_and_Tinder_The_Cabin_Flannel_Coffee_Twill_01_Product_on_White.jpg?",
    harga: 289000,
  },
  {
    id: 3,
    nama: "Selvedge Slim-Fit Denim",
    kategori: "Celana",
    tag: "PREMIUM ESSENTIAL",
    deskripsi:
      "Celana denim berpotongan ramping modern dengan detail selvedge merah khas yang kokoh dan memberikan karakter elegan.",
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800",
    harga: 420000,
  },
  {
    id: 4,
    nama: "Urban Chino Shorts",
    kategori: "Celana",
    tag: "LIMITED",
    deskripsi:
      "Celana chino pendek berteknologi stretch fabric yang memberikan kebebasan fleksibilitas bergerak secara optimal.",
    img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800",
    harga: 185000,
  },
  {
    id: 5,
    nama: "Classic Corduroy Cap",
    kategori: "Topi",
    tag: "RETRO SERIES",
    deskripsi:
      "Topi bertekstur korduroi premium berdesain vintage dengan sabuk kulit pengatur ukuran di belakang.",
    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800",
    harga: 95000,
  },
  {
    id: 6,
    nama: "Minimalist Knit Beanie",
    kategori: "Topi",
    tag: "NEW ARRIVAL",
    deskripsi:
      "Topi rajut bertekstur elastisitas pas. Hangat dipakai saat cuaca dingin dan tetap nyaman di ruangan ber-AC.",
    img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=800",
    harga: 75000,
  },
  {
    id: 7,
    nama: "Saffiano Leather Cardholder",
    kategori: "Aksesoris",
    tag: "LUXURY",
    deskripsi:
      "Dompet kartu berbahan kulit Saffiano asli yang anti-gores dengan 6 slot fungsional yang sangat minimalis.",
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800",
    harga: 145000,
  },
  {
    id: 8,
    nama: "Minimalist Chrono Watch",
    kategori: "Aksesoris",
    tag: "BEST SELLER",
    deskripsi:
      "Jam tangan analog premium berpelindung kaca safir anti-pantul dan strap stainless-steel hitam legam.",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    harga: 650000,
  },
  {
    id: 9,
    nama: "Leather Belt Premium",
    kategori: "Aksesoris",
    tag: "NEW ARRIVAL",
    deskripsi: "Ikat pinggang kulit premium dengan desain minimalis elegan.",
    img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80&w=800",
    harga: 120000
}
];

let keranjangBelanja = [];

// Format Angka ke IDR (Rupiah)
const formatRupiah = (angka) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
};

// Render Tampilan Awal Galeri Produk
function tampilkanProduk(kategoriDipilih = "Semua") {
  const grid = document.getElementById("grid-produk");
  grid.innerHTML = "";

  const produkDifilter =
    kategoriDipilih === "Semua"
      ? daftarProduk
      : daftarProduk.filter((p) => p.kategori === kategoriDipilih);

  produkDifilter.forEach((item) => {
    const card = `
                    <div class="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-zinc-100 overflow-hidden group p-5 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1">
                        <div>
                            <!-- Media Frame dengan Badge -->
                            <div class="relative aspect-[4/3] overflow-hidden bg-zinc-50 rounded-2xl mb-5 shadow-inner">
                                <span class="absolute top-3 left-3 bg-zinc-900/90 text-white text-[9px] font-extrabold tracking-widest px-3 py-1 rounded-full backdrop-blur-sm z-10 border border-white/10 uppercase">${item.tag}</span>
                                <img src="${item.img}" alt="${item.nama}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
                            </div>
                            <span class="text-zinc-400 font-bold text-[10px] tracking-widest uppercase mb-1 block">${item.kategori}</span>
                            <h3 class="font-extrabold text-lg text-zinc-900 mb-2 tracking-tight group-hover:text-indigo-600 transition-colors line-clamp-1">${item.nama}</h3>
                            <p class="text-xs text-zinc-400 mb-4 leading-relaxed line-clamp-2 font-light">${item.deskripsi}</p>
                        </div>
                        <div class="flex items-center justify-between gap-2 mt-2 pt-3 border-t border-zinc-50">
                            <span class="text-indigo-600 font-extrabold text-base whitespace-nowrap">${formatRupiah(item.harga)}</span>
                            <button onclick="tambahItem(${item.id})" class="flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all duration-300">
                                <i class="fas fa-plus text-[9px]"></i> Add
                            </button>
                        </div>
                    </div>
                `;
    grid.innerHTML += card;
  });
}

// Handler Event Tombol Filter Kategori
function filterProduk(kategori) {
  tampilkanProduk(kategori);
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    if (
      btn.innerText === kategori ||
      (kategori === "Semua" && btn.innerText === "SEMUA")
    ) {
      btn.className =
        "filter-btn px-6 py-2.5 bg-black text-white rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md whitespace-nowrap";
    } else {
      btn.className =
        "filter-btn px-6 py-2.5 bg-white text-zinc-600 border border-zinc-200 rounded-full font-bold text-xs tracking-wider uppercase hover:border-black hover:text-black transition-all whitespace-nowrap";
    }
  });
}

// === SHOPPING CART SYSTEM ===
function toggleKeranjang() {
  const sidebar = document.getElementById("sidebar-keranjang");
  const panel = document.getElementById("sidebar-panel");

  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
    setTimeout(() => {
      panel.classList.remove("translate-x-full");
    }, 50);
    renderKeranjang();
  } else {
    panel.classList.add("translate-x-full");
    setTimeout(() => {
      sidebar.classList.add("hidden");
    }, 300);
  }
}

// Tambah Item ke List Keranjang
function tambahItem(id) {
  const produkDipilih = daftarProduk.find((p) => p.id === id);
  const itemSudahAda = keranjangBelanja.find((item) => item.id === id);

  if (itemSudahAda) {
    itemSudahAda.jumlah += 1;
  } else {
    keranjangBelanja.push({ ...produkDipilih, jumlah: 1 });
  }

  perbaruiBadgeNavigasi();
  showToast(`Berhasil menambahkan ${produkDipilih.nama} ke keranjang!`);
}

// Tambah kuantitas langsung dari keranjang
function tambahJumlahItem(id) {
  const item = keranjangBelanja.find((item) => item.id === id);
  if (item) {
    item.jumlah += 1;
    perbaruiBadgeNavigasi();
    renderKeranjang();
  }
}

// Kurangi kuantitas langsung dari keranjang
function kurangiJumlahItem(id) {
  const item = keranjangBelanja.find((item) => item.id === id);
  if (item) {
    item.jumlah -= 1;
    if (item.jumlah <= 0) {
      hapusItem(id);
    } else {
      perbaruiBadgeNavigasi();
      renderKeranjang();
    }
  }
}

// Hapus Item
function hapusItem(id) {
  const item = keranjangBelanja.find((item) => item.id === id);
  keranjangBelanja = keranjangBelanja.filter((item) => item.id !== id);
  perbaruiBadgeNavigasi();
  renderKeranjang();
  if (item) {
    showToast(`Menghapus ${item.nama} dari keranjang.`, "info");
  }
}

// Perbarui Jumlah Badge Bulatan Navbar
function perbaruiBadgeNavigasi() {
  const totalItem = keranjangBelanja.reduce(
    (acc, item) => acc + item.jumlah,
    0,
  );
  const badge = document.getElementById("cart-count");

  if (totalItem > 0) {
    badge.innerText = totalItem;
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
}

// Render isi daftar belanja di sidebar
function renderKeranjang() {
  const listContainer = document.getElementById("list-keranjang");
  const footerKeranjang = document.getElementById("footer-keranjang");
  const sidebarCount = document.getElementById("cart-sidebar-count");

  const totalItem = keranjangBelanja.reduce(
    (acc, item) => acc + item.jumlah,
    0,
  );
  sidebarCount.innerText = totalItem;

  if (keranjangBelanja.length === 0) {
    listContainer.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full min-h-[300px] text-zinc-400 space-y-4">
                        <div class="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100">
                            <i class="fas fa-shopping-cart text-3xl text-zinc-300"></i>
                        </div>
                        <p class="text-sm font-semibold text-zinc-500">Daftar belanja Anda kosong.</p>
                        <button onclick="toggleKeranjang()" class="text-xs bg-indigo-600 text-white px-5 py-2 rounded-xl font-bold uppercase hover:bg-indigo-700 transition-colors shadow-md">Belanja Sekarang</button>
                    </div>
                `;
    footerKeranjang.classList.add("hidden");
    return;
  }

  listContainer.innerHTML = "";
  let totalHarga = 0;

  keranjangBelanja.forEach((item) => {
    totalHarga += item.harga * item.jumlah;
    const itemHTML = `
                    <div class="flex gap-4 items-center bg-zinc-50 p-3.5 rounded-2xl border border-zinc-100 relative group/item">
                        <img src="${item.img}" alt="${item.nama}" class="w-16 h-16 object-cover rounded-xl border border-zinc-200 shadow-sm">
                        <div class="flex-1">
                            <h4 class="font-extrabold text-zinc-900 line-clamp-1 text-sm">${item.nama}</h4>
                            <p class="text-indigo-600 font-extrabold text-xs mt-0.5">${formatRupiah(item.harga)}</p>
                            
                            <!-- Kuantitas Control -->
                            <div class="flex items-center gap-2.5 mt-2">
                                <button onclick="kurangiJumlahItem(${item.id})" class="w-6 h-6 rounded-md bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-600 flex items-center justify-center text-xs transition-colors">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="text-xs font-bold text-zinc-800">${item.jumlah}</span>
                                <button onclick="tambahJumlahItem(${item.id})" class="w-6 h-6 rounded-md bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-600 flex items-center justify-center text-xs transition-colors">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button onclick="hapusItem(${item.id})" class="absolute top-3.5 right-3.5 p-2 text-zinc-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors md:opacity-0 group-hover/item:opacity-100" aria-label="Hapus Item">
                            <i class="fas fa-trash-alt text-sm"></i>
                        </button>
                    </div>
                `;
    listContainer.innerHTML += itemHTML;
  });

  document.getElementById("total-harga").innerText = formatRupiah(totalHarga);
  footerKeranjang.classList.remove("hidden");
}

// === INTERACTIVE CHECKOUT & MODAL SYSTEM ===
let metodePembayaranDipilih = "Transfer";

function selectPayment(metode) {
  metodePembayaranDipilih = metode;
  const bTransfer = document.getElementById("label-pay-transfer");
  const bCod = document.getElementById("label-pay-cod");

  if (metode === "Transfer") {
    bTransfer.className =
      "border-2 border-indigo-600 bg-indigo-50/20 p-3 rounded-xl cursor-pointer flex items-center gap-2 select-none";
    bCod.className =
      "border-2 border-zinc-200 p-3 rounded-xl cursor-pointer flex items-center gap-2 select-none";
  } else {
    bTransfer.className =
      "border-2 border-zinc-200 p-3 rounded-xl cursor-pointer flex items-center gap-2 select-none";
    bCod.className =
      "border-2 border-indigo-600 bg-indigo-50/20 p-3 rounded-xl cursor-pointer flex items-center gap-2 select-none";
  }
}

function bukaModalCheckout() {
  // Tutup sidebar terlebih dahulu
  toggleKeranjang();

  const modal = document.getElementById("modal-checkout");
  const mainContent = document.getElementById("checkout-main-content");
  const successContent = document.getElementById("checkout-success-content");
  const listSummary = document.getElementById("ringkasan-produk-checkout");

  // Reset view state modal
  mainContent.classList.remove("hidden");
  successContent.classList.add("hidden");

  // Kosongkan form input
  document.getElementById("checkout-nama").value = "";
  document.getElementById("checkout-telp").value = "";
  document.getElementById("checkout-alamat").value = "";
  selectPayment("Transfer");

  // Render Ringkasan Produk
  listSummary.innerHTML = "";
  let totalTagihan = 0;
  keranjangBelanja.forEach((item) => {
    totalTagihan += item.harga * item.jumlah;
    listSummary.innerHTML += `
                    <div class="flex justify-between items-center text-xs">
                        <span class="text-zinc-600 font-medium truncate max-w-[250px]">${item.nama} <span class="font-bold text-zinc-900">x${item.jumlah}</span></span>
                        <span class="font-semibold text-zinc-800">${formatRupiah(item.harga * item.jumlah)}</span>
                    </div>
                `;
  });

  document.getElementById("total-tagihan-checkout").innerText =
    formatRupiah(totalTagihan);

  // Buka Modal dengan transisi css
  modal.classList.remove("hidden");
}

function tutupModalCheckout() {
  const modal = document.getElementById("modal-checkout");
  modal.classList.add("hidden");
}

function selesaikanCheckout() {
  const nama = document.getElementById("checkout-nama").value.trim();
  const telp = document.getElementById("checkout-telp").value.trim();
  const alamat = document.getElementById("checkout-alamat").value.trim();

  if (!nama || !telp || !alamat) {
    showToast("Mohon lengkapi semua data pengiriman Anda!", "info");
    return;
  }

  // Ganti modal ke tampilan Berhasil
  document.getElementById("checkout-main-content").classList.add("hidden");
  const successView = document.getElementById("checkout-success-content");
  successView.classList.remove("hidden");

  // Isi rincian sukses
  document.getElementById("success-nama").innerText = nama;
  document.getElementById("success-metode").innerText =
    metodePembayaranDipilih === "Transfer"
      ? "Transfer Bank"
      : "COD (Bayar di Tempat)";

  // Bersihkan Keranjang
  keranjangBelanja = [];
  perbaruiBadgeNavigasi();
  showToast("Pesanan Anda berhasil dikonfirmasi!", "success");
}

// Jalankan render tampilan awal produk saat load
tampilkanProduk("Semua");
