// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const PRODUCTS_DATA = [
  {
    id: 1, name: "PEACE OF MIND", category: "fresh",
    notes: "Fresh · Calm · Comforting",
    price: 350000, badge: null, color: "#ffffff",
    img: "asset/product/peaceofmind.png",
    desc: "Ini tipe parfum yang bikin kamu terasa lebih rapi, lebih tenang, dan lebih confident tanpa berusaha terlalu keras. Kalau kamu suka wangi fresh tapi tetap hangat dan dewasa — Peace of Mind siap jadi comfort scent kamu.",
    sizes: ["10ml","55ml"],
    marketplace: {
      shopee:    "https://shopee.co.id/SHEM-PARFUM-PEACE-OF-MIND-i.42480258.29217791856?extraParams=%7B%22display_model_id%22%3A325586559973%2C%22model_selection_logic%22%3A3%7D",
      tokopedia: "https://tk.tokopedia.com/ZS9vFVMnX",
      tiktok:    "https://vt.tokopedia.com/t/ZS9FuGqNg4wqk-rt2pJ/"
    }
  },
  {
    id: 2, name: "VELVET BLOOM", category: "floral",
    notes: "Soft · Sweet · Irresistible",
    price: 350000, badge: null, color: "#ffffff",
    img: "asset/product/velvetbloom.png",
    desc: "Velvet Bloom adalah tipe wangi yang bikin orang bertanya, \"Pakai parfum apa sih?\".",
    sizes: ["10ml","55ml"],
    marketplace: {
      shopee:    "https://id.shp.ee/1gZ1EjuT",
      tokopedia: "https://tk.tokopedia.com/ZS9vFq7SP/",
      tiktok:    "https://vt.tokopedia.com/t/ZS9FuGCwykntg-hcseU/"
    }
  },
  {
    id: 3, name: "TOBACCO ROYALE", category: "woody",
    notes: "Warm · Sweet · Powerful",
    price: 350000, badge: "new", color: "#ffffff",
    img: "asset/product/tobaccoroyale.png",
    desc: "Bayangkan aroma tembakau yang hangat, elegan, dan mahal. Bukan bau rokok — tapi wangi tobacco yang smooth dan classy. Ini tipe parfum yang bikin kamu terasa lebih berwibawa dan berkelas. Kalau kamu suka wangi hangat, manis, dan powerful — Tobacco Royale siap bikin kamu makin standout.",
    sizes: ["10ml","55ml"],
    marketplace: {
      shopee:    "https://id.shp.ee/eUGi2ikH",
      tokopedia: "https://tk.tokopedia.com/ZS9vFqSU4/",
      tiktok:    "https://vt.tokopedia.com/t/ZS9FutJMyabkd-LsnIE/"
    }
  },
  {
    id: 4, name: "GREEN ENCHANTMENT", category: "fresh",
    notes: "Clean · Fresh · Powerful",
    price: 350000, badge: null, color: "#ffffff",
    img: "asset/product/greenenchantment.png",
    desc: "Ini tipe parfum yang bikin orang bilang: \"Wanginya enak banget, bersih ya.\" Kalau kamu suka wangi yang ringan, seger, dan bikin mood naik. Green Enchantment by SHEM wajib kamu punya.",
    sizes: ["10ml", "55ml"],
    marketplace: {
      shopee:    "https://id.shp.ee/55DDMRmL",
      tokopedia: "https://tk.tokopedia.com/ZS9vFqyjc/",
      tiktok:    "https://vt.tokopedia.com/t/ZS9FuGnxEbNmK-YcLxk/"
    }
  },
  {
    id: 5, name: "SCENT OF AMBITION", category: "oriental",
    notes: "Oud · Rose · Patchouli",
    price: 350000, badge: "new", color: "#ffffff",
    img: "asset/product/scentofambition.png",
    desc: "Scent of Ambition adalah pernyataan diri yang berani. Perpaduan Oud yang mewah, Rose yang romantis, dan Patchouli yang hangat menciptakan komposisi oriental yang kompleks dan penuh karakter. Untuk mereka yang tak takut bermimpi besar.",
    sizes: ["10ml", "55ml"],
    marketplace: {
      shopee:    "https://id.shp.ee/iGhrjZ89",
      tokopedia: "https://tk.tokopedia.com/ZS9vFDCQJ/",
      tiktok:    "https://vt.tokopedia.com/t/ZS9FuG7WgT9CM-CopI3/"
    }
  },
  {
    id: 6, name: "SPREAD LOVE", category: "floral",
    notes: "Pure · Elegant · Addictive",
    price: 350000, badge: null, color: "#ffffff",
    img: "asset/product/SPREADLOVE.png",
    desc: "Spread Love adalah wangi untuk kamu yang ingin terlihat lembut, tapi tetap punya karakter kuat. Bersih. Berkelas. Bikin orang ingin lebih dekat.",
    sizes: ["10ml","55ml"],
    marketplace: {
      shopee:    "https://id.shp.ee/MmtQXsLe",
      tokopedia: "https://tk.tokopedia.com/ZS9vFXMGX/",
      tiktok:    "https://vt.tokopedia.com/t/ZS9FuGbmFEpgq-0PeUW/"
    }
  },
  {
    id: 7, name: "WOODED NECTAR", category: "woody",
    notes: "Amberwood · Patchouli · Oakmoss",
    price: 350000, badge: null, color: "#ffffff",
    img: "asset/product/wooddednectar.png",
    desc: "Wooded Nectar adalah perpaduan unik antara manis yang lembut dan kayu yang elegan. Bukan manis yang childish, tapi manis yang dalam, hangat, dan sophisticated. Ini tipe wangi yang bikin orang bilang: \"Wanginya beda ya, enak banget.\"",
    sizes: ["10ml", "55ml"],
    marketplace: {
      shopee:    "https://id.shp.ee/tQqbw83f",
      tokopedia: "https://tk.tokopedia.com/ZS9vFHdQD/",
      tiktok:    "https://vt.tokopedia.com/t/ZS9FuGT8PmwWV-S49v8/"
    }
  },
  {
    id: 8, name: "FREESIA LAGOON", category: "fresh",
    notes: "Fresh · Sweet · Elegant",
    price: 350000, badge: null, color: "#ffffff",
    img: "asset/product/freesialagoon.png",
    desc: "Bayangkan kamu lagi di tepi laut, angin sepoi-sepoi, matahari hangat tapi nggak menyengat. Segar, tenang, tapi tetap feminin. Itu vibe dari Freesia Lagoon. Ini tipe wangi yang bikin orang merasa kamu itu cerah, ramah, dan easy to love.",
    sizes: ["10ml","55ml"],
    marketplace: {
      shopee:    "https://id.shp.ee/6QY5zstf",
      tokopedia: "https://tk.tokopedia.com/ZS9vFQ4Mo/",
      tiktok:    "https://vt.tokopedia.com/t/ZS9FuGsMKWjoD-AjH2f/"
    }
  },
  {
    id: 9, name: "ENERGIQUE BREEZE", category: "fresh",
    notes: "Fresh · Clean · Powerful",
    price: 350000, badge: null, color: "#ffffff",
    img: "asset/product/energiquebreeze.png",
    desc: "Bayangkan aroma citrus segar dari grapefruit dan lemon yang langsung bikin semangat. Ditambah sedikit mint dan pink pepper, ada sensasi fresh yang adem tapi tetap berkarakter.",
    sizes: ["10ml","55ml"],
    marketplace: {
      shopee:    "https://id.shp.ee/fVq78ywG",
      tokopedia: "https://tk.tokopedia.com/ZS9vFS712/",
      tiktok:    "https://vt.tokopedia.com/t/ZS9FuGEUNKmBA-Zt3D9/"
    }
  },
  {
    id: 10, name: "SPICE OF THE SEA", category: "woody",
    notes: "Fresh · Salty · Mysterious",
    price: 350000, badge: null, color: "#ffffff",
    img: "asset/product/spiceofthesea.png",
    desc: "Bayangkan angin laut sore hari. Segar, sedikit asin, tapi hangat di kulit. Ini tipe parfum yang bikin orang merasa kamu tenang, tapi punya kedalaman. Kalau kamu suka aroma laut yang elegan dan beda dari yang lain — Spice of the Sea wajib kamu coba.",
    sizes: ["10ml","55ml"],
    marketplace: {
      shopee:    "https://id.shp.ee/QtTbSbKV",
      tokopedia: "https://tk.tokopedia.com/ZS9vFxAYx/",
      tiktok:    "https://vt.tokopedia.com/t/ZS9Fute2kaUsj-sUXSc/"
    }
  },
  {
    id: 11, name: "SERENITY", category: "woody",
    notes: "Fresh · Calm · Soft",
    price: 350000, badge: null, color: "#ffffff",
    img: "asset/hehehe.png",
    desc: "Serenity bukan tentang menarik perhatian, tapi tentang membuat orang nyaman.",
    sizes: ["10ml", "55ml"],
    marketplace: {
      shopee:    "https://id.shp.ee/C29Vzec9",
      tokopedia: "",
      tiktok:    ""
    }
  },
  {
    id: 12, name: "BLOOMSCAPE", category: "woody",
    notes: "",
    price: 350000, badge: null, color: "#ffffff",
    img: "asset/hehehe.png",
    desc: "Bloomscape bukan tentang menarik perhatian, tapi tentang membuat orang pelan-pelan jatuh suka.",
    sizes: ["10ml","55ml"],
    marketplace: {
      shopee:    "https://id.shp.ee/QmwqLmry",
      tokopedia: "",
      tiktok:    ""
    }
  },
  {
    id: 13, name: "MOKSA", category: "woody",
    notes: "Fresh · Floral · Nature",
    price: 350000, badge: null, color: "#ffffff",
    img: "asset/hehehe.png",
    desc: "Moksa adalah wangi untuk mereka yang tau, kekuatan sejati tidak selalu bersuara keras.",
    sizes: ["10ml","55ml"],
    marketplace: {
      shopee:    "https://id.shp.ee/P8MxBTdg",
      tokopedia: "",
      tiktok:    ""
    }
  },
  {
    id: 14, name: "LUMINAIR", category: "woody",
    notes: "Fresh · Citrus · Nature",
    price: 350000, badge: null, color: "#ffffff",
    img: "asset/hehehe.png",
    desc: "Luminair adalah tipe parfum yang bikin orang merasa nyaman saat dekat kamu.",
    sizes: ["10ml", "55ml"],
    marketplace: {
      shopee:    "https://id.shp.ee/bwxQ42Ug",
      tokopedia: "",
      tiktok:    ""
    }
  }
];

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
let cart = [];
let activeFilter = "semua";

// ─────────────────────────────────────────────
// BOTTLE SVG (fallback jika tidak ada foto)
// ─────────────────────────────────────────────
function bottleSVG(color) {
  return `<svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="32" width="20" height="12" rx="2" fill="#c8aa7e"/>
    <rect x="46" y="22" width="28" height="14" rx="3" fill="#b89a6a"/>
    <rect x="50" y="17" width="20" height="10" rx="2" fill="#9a8055"/>
    <path d="M32 52 Q28 62 26 82 L26 148 Q26 162 60 162 Q94 162 94 148 L94 82 Q92 62 88 52 Z" fill="${color}"/>
    <path d="M32 52 Q28 62 26 82 L26 148 Q26 162 60 162 Q94 162 94 148 L94 82 Q92 62 88 52 Z" fill="rgba(184,154,106,0.12)"/>
    <path d="M32 68 Q28 78 26 98 L26 148 Q26 160 60 160 Q94 160 94 148 L94 98 Q92 78 88 68 Z" fill="rgba(184,154,106,0.22)"/>
    <rect x="38" y="95" width="44" height="52" rx="1" fill="rgba(255,255,255,0.8)"/>
    <line x1="42" y1="107" x2="78" y2="107" stroke="#b89a6a" stroke-width="0.4"/>
    <line x1="42" y1="138" x2="78" y2="138" stroke="#b89a6a" stroke-width="0.4"/>
    <text x="60" y="120" text-anchor="middle" font-family="serif" font-size="7" fill="#1a1612" font-style="italic">SHEM</text>
    <text x="60" y="130" text-anchor="middle" font-family="sans-serif" font-size="4" fill="#6b5f52" letter-spacing="1.5">PARFUM</text>
    <path d="M40 60 Q37 85 37 125" stroke="rgba(255,255,255,0.55)" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`;
}

// ─────────────────────────────────────────────
// RENDER PRODUCTS
// ─────────────────────────────────────────────
function renderProducts(products) {
  const grid = document.getElementById("productsGrid");
  if (!products.length) {
    grid.innerHTML = `<p style="color:var(--mid);padding:2rem;grid-column:1/-1;text-align:center;">Tidak ada produk ditemukan.</p>`;
    return;
  }
  grid.innerHTML = products.map(p => `
    <div class="product-card" data-category="${p.category}" data-id="${p.id}" onclick="openModal(${p.id})" style="cursor:pointer;">
      <div class="product-img" style="background:${p.color};">
        ${p.badge === "new"  ? '<span class="badge-new">New</span>'   : ''}
        ${p.badge === "sale" ? '<span class="badge-sale">Sale</span>' : ''}
        ${p.img
          ? `<img src="${p.img}" alt="${p.name}" class="product-bottle-img" />`
          : bottleSVG(p.color)
        }
      </div>
      <div class="product-info">
        <p class="product-category">${p.category}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-notes">${p.notes}</p>
        <div class="product-footer">
          <div class="product-price">
            ${p.originalPrice ? `<span class="original">Rp ${p.originalPrice.toLocaleString("id-ID")}</span>` : ""}
            Rp ${p.price.toLocaleString("id-ID")}
          </div>
          <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${p.id})" title="Tambah ke keranjang">+</button>
        </div>
      </div>
    </div>
  `).join("");
}

function filterProducts(cat, btn) {
  activeFilter = cat;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const filtered = cat === "semua"
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category.toLowerCase() === cat.toLowerCase());
  renderProducts(filtered);
}

// ─────────────────────────────────────────────
// PRODUCT MODAL
// ─────────────────────────────────────────────
function openModal(productId) {
  const p = PRODUCTS_DATA.find(function(x) { return x.id === productId; });
  if (!p) return;

  document.getElementById('modalImg').src = p.img || '';
  document.getElementById('modalImg').alt = p.name;
  document.getElementById('modalBadge').textContent = p.badge ? p.badge.toUpperCase() : '';
  document.getElementById('modalBadge').style.display = p.badge ? 'inline-block' : 'none';
  document.getElementById('modalCategory').textContent = p.category.toUpperCase();
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalNotes').textContent = p.notes;
  document.getElementById('modalDesc').textContent = p.desc || '';
  document.getElementById('modalPrice').textContent = 'Rp ' + p.price.toLocaleString('id-ID');
  document.getElementById('modalOriginalPrice').textContent = p.originalPrice
    ? 'Rp ' + p.originalPrice.toLocaleString('id-ID') : '';
  document.getElementById('modalOriginalPrice').style.display = p.originalPrice ? 'inline' : 'none';

  // Sizes
  var sizesEl = document.getElementById('modalSizes');
  sizesEl.innerHTML = '';
  var buyBtn = document.getElementById('modalBuy');

  // Nonaktifkan tombol beli sampai size dipilih
  buyBtn.disabled = true;
  buyBtn.classList.add('btn-disabled');

  (p.sizes || []).forEach(function(size) {
    var btn = document.createElement('button');
    btn.className = 'size-btn';
    btn.textContent = size;
    btn.addEventListener('click', function() {
      sizesEl.querySelectorAll('.size-btn').forEach(function(b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      buyBtn.disabled = false;
      buyBtn.classList.remove('btn-disabled');
    });
    sizesEl.appendChild(btn);
  });

  // Jika hanya 1 ukuran, langsung aktifkan tombol beli
  if (p.sizes && p.sizes.length === 1) {
    sizesEl.querySelector('.size-btn').classList.add('active');
    buyBtn.disabled = false;
    buyBtn.classList.remove('btn-disabled');
  }

  // Tombol + Keranjang
  document.getElementById('modalAddCart').onclick = function() {
    addToCart(p.id);
    closeModal();
  };

  // Tombol Beli → buka marketplace modal
  buyBtn.onclick = function() {
    if (buyBtn.disabled) return;
    closeModal();
    openMarketModal(p.name, p.marketplace, p.id);
  };

  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

function handleModalClick(e) {
  if (e.target === document.getElementById('productModal')) closeModal();
}

// ─────────────────────────────────────────────
// MARKETPLACE MODAL
// ─────────────────────────────────────────────
var currentMarketProductId = null;

function openMarketModal(productName, marketplace, productId) {
  document.getElementById('marketProductName').textContent = productName;
  document.getElementById('linkShopee').href    = (marketplace && marketplace.shopee)    ? marketplace.shopee    : '#';
  document.getElementById('linkTokopedia').href = (marketplace && marketplace.tokopedia) ? marketplace.tokopedia : '#';
  document.getElementById('linkTiktok').href    = (marketplace && marketplace.tiktok)    ? marketplace.tiktok    : '#';
  currentMarketProductId = productId;
  document.getElementById('marketModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMarketModal() {
  document.getElementById('marketModal').classList.remove('open');
  document.body.style.overflow = '';
}

function buyOnWebsite() {
  if (currentMarketProductId) addToCart(currentMarketProductId);
  closeMarketModal();
}

// Event listener tombol X dan klik luar marketplace modal
window.addEventListener('load', function() {
  var closeBtn = document.getElementById('marketCloseBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeMarketModal();
    });
  }
  var overlay = document.getElementById('marketModal');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeMarketModal();
    });
  }
});

// ─────────────────────────────────────────────
// CART
// ─────────────────────────────────────────────
function addToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  showToast(product.name + " ditambahkan ke keranjang!");
}

function updateQty(productId, delta) {
  const item = cart.find(c => c.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = "Rp " + total.toLocaleString("id-ID");

  const itemsEl = document.getElementById("cartItems");
  const emptyEl = document.getElementById("cartEmpty");

  if (!cart.length) {
    emptyEl.style.display = "flex";
    itemsEl.querySelectorAll(".cart-item").forEach(e => e.remove());
    return;
  }
  emptyEl.style.display = "none";
  itemsEl.querySelectorAll(".cart-item").forEach(e => e.remove());

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="cart-item-img">${bottleSVG(item.color)}</div>
      <div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">Rp ${item.price.toLocaleString("id-ID")}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <div class="cart-item-price">Rp ${(item.price * item.qty).toLocaleString("id-ID")}</div>
    `;
    itemsEl.appendChild(div);
  });
}

function toggleCart() {
  document.getElementById("cartOverlay").classList.toggle("open");
  document.getElementById("cartSidebar").classList.toggle("open");
}

function handleCheckout() {
  if (!cart.length) { showToast("Keranjang kosong!"); return; }
  showToast("Menghubungkan ke pembayaran... (backend semangat ya sayang!!!!)");
}

// ─────────────────────────────────────────────
// INSTAGRAM FEED (LOCAL)
// ─────────────────────────────────────────────
const igPost = [
  {
    img: 'asset/post/postshem6.png',
    caption: 'Take what you need today and walk through your day with your head held high 👀',
    link: 'https://www.instagram.com/p/DYGHIJAk96J/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=='
  },
  {
    img: 'asset/post/postshem1.png',
    caption: 'SHEM Parfum from morning briefings to late evenings, a scent that stays with you, all day long ⏳✨',
    link: 'https://www.instagram.com/p/DXthbj0CR44/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    img: 'asset/post/postshem2.png',
    caption: 'Be a pretty girl, with a pretty heart, a pretty mind, and pretty vibes 🤍',
    link: 'https://www.instagram.com/p/DXalPnkCbpE/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=='
  },
  {
    img: 'asset/post/postshem3.png',
    caption: 'Dalam rangka memeriahkan Hari Kartini, SHEM mengajak kamu ikut merayakan semangat perempuan Indonesia ✨',
    link: 'https://www.instagram.com/p/DXYx43EiV6R/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=='
  },
  {
    img: 'asset/post/postshem4.png',
    caption: 'Yuk, sempatkan waktu untuk mampir dan coba langsung koleksi Extrait de Parfum dari SHEM Parfum ✨',
    link: 'https://www.instagram.com/p/DWyTUtiice7/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=='
  },
  {
    img: 'asset/post/postshem5.png',
    caption: 'SHEM Parfum punya promo spesial untuk kamu. Pembelian 2 pcs box besar mendapatkan sajadah!',
    link: 'https://www.instagram.com/p/DV_StR8CYNA/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=='
  },
];

function loadIgFeed() {
  const grid = document.getElementById('igFeedGrid');
  if (!grid) return;
  igPost.forEach(function(post) {
    var link = post.link;
    var item = document.createElement('div');
    item.className = 'ig-feed-item';
    item.innerHTML = `
      <img src="${post.img}" alt="${post.caption}" loading="lazy"/>
      <div class="ig-feed-overlay">
        <p class="ig-feed-caption">${post.caption}</p>
      </div>
    `;
    item.addEventListener('click', function() {
      window.open(link, '_blank', 'noopener');
    });
    grid.appendChild(item);
  });
}

// ─────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2800);
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
renderProducts(PRODUCTS_DATA);
updateCartUI();
loadIgFeed();

/*
 * ──────────────────────────────────────────────────
 * CATATAN UNTUK BACKEND (teman lo):
 *
 * 1. Ganti PRODUCTS_DATA dengan fetch ke GET /api/products
 * 2. handleCheckout() → POST /api/orders dengan data cart
 * 3. Semua fungsi render, cart, dan filter tidak perlu diubah —
 *    cukup ganti data source di atas.
 * ──────────────────────────────────────────────────
 */
