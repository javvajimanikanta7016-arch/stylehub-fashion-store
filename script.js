/* ============================================================
   STYLEHUB – Redefine Your Style
   Interactive JavaScript
   Features: Cart, Wishlist, Quick View, Search,
             Newsletter, Mobile Nav, Scroll Animations
   ============================================================ */

(function () {
    'use strict';

    /* ========================================================
       1. PRODUCT DATA
       ======================================================== */
    const PRODUCTS = [
        {
            id: 'p1',
            name: 'Classic Oversized T-Shirt',
            category: 'Men • T-Shirts',
            img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
            price: 1299,
            oldPrice: 1899,
            rating: 4.5,
            reviews: 128,
            discount: 30,
            tags: ['sale'],
            desc: 'Premium combed cotton oversized tee with a relaxed drop-shoulder fit. Breathable, durable, and effortlessly stylish for everyday wear.'
        },
        {
            id: 'p2',
            name: 'Premium Denim Jacket',
            category: 'Men • Jackets',
            img: 'https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=600&q=80',
            price: 3499,
            oldPrice: 4999,
            rating: 5,
            reviews: 86,
            discount: 30,
            tags: ['sale'],
            desc: 'Crafted from heavyweight Japanese denim with a vintage wash. A timeless wardrobe staple designed to age beautifully.'
        },
        {
            id: 'p3',
            name: 'Casual White Sneakers',
            category: 'Unisex • Footwear',
            img: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80',
            price: 2799,
            oldPrice: 3999,
            rating: 4.5,
            reviews: 214,
            discount: 30,
            tags: ['sale', 'hot'],
            desc: 'Minimalist leather sneakers with a cushioned insole and durable rubber outsole. Versatile comfort that goes with everything.'
        },
        {
            id: 'p4',
            name: "Women's Summer Dress",
            category: 'Women • Dresses',
            img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80',
            price: 2199,
            oldPrice: 3199,
            rating: 5,
            reviews: 97,
            discount: 30,
            tags: ['sale'],
            desc: 'Flowy midi dress in breathable rayon with a flattering cinched waist. Designed for warm-weather elegance.'
        },
        {
            id: 'p5',
            name: 'Slim Fit Formal Shirt',
            category: 'Men • Shirts',
            img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80',
            price: 1799,
            oldPrice: 2499,
            rating: 4.5,
            reviews: 152,
            discount: 28,
            tags: ['sale'],
            desc: 'Crisp poplin formal shirt with a tailored slim fit. Wrinkle-resistant fabric for all-day polish.'
        },
        {
            id: 'p6',
            name: 'Leather Handbag',
            category: 'Women • Bags',
            img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
            price: 4299,
            oldPrice: 6499,
            rating: 5,
            reviews: 64,
            discount: 34,
            tags: ['sale', 'hot'],
            desc: 'Handcrafted full-grain leather handbag with gold-tone hardware. A statement of refined craftsmanship.'
        },
        {
            id: 'p7',
            name: 'Cargo Pants',
            category: 'Men • Bottoms',
            img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80',
            price: 2299,
            oldPrice: 3299,
            rating: 4.5,
            reviews: 110,
            discount: 30,
            tags: ['sale'],
            desc: 'Utility-inspired cargo pants in durable cotton twill with multi-pocket detailing and a tapered fit.'
        },
        {
            id: 'p8',
            name: 'Premium Wristwatch',
            category: 'Unisex • Watches',
            img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
            price: 6999,
            oldPrice: 9999,
            rating: 5,
            reviews: 73,
            discount: 30,
            tags: ['sale'],
            desc: 'Automatic movement, sapphire crystal, and a genuine Italian leather strap. Timeless precision in every detail.'
        }
    ];

    const NEW_ARRIVALS = [
        {
            id: 'n1',
            name: 'Wool Blend Overcoat',
            category: 'Men • Outerwear',
            img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80',
            price: 8999,
            oldPrice: 11999,
            rating: 5,
            reviews: 24,
            discount: 25,
            tags: ['new'],
            desc: 'Tailored wool-blend overcoat with a clean double-breasted silhouette. Cold-weather luxury, perfected.'
        },
        {
            id: 'n2',
            name: 'Silk Wrap Blouse',
            category: 'Women • Tops',
            img: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&q=80',
            price: 3299,
            oldPrice: 4299,
            rating: 4.5,
            reviews: 38,
            discount: 23,
            tags: ['new'],
            desc: 'Pure mulberry silk wrap blouse with a fluid drape. An elevated essential for day-to-night transitions.'
        },
        {
            id: 'n3',
            name: 'Chunky Knit Sweater',
            category: 'Women • Knitwear',
            img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80',
            price: 2799,
            oldPrice: 3799,
            rating: 5,
            reviews: 51,
            discount: 26,
            tags: ['new'],
            desc: 'Oversized chunky knit in a soft wool blend. Cozy texture with a relaxed, modern fit.'
        },
        {
            id: 'n4',
            name: 'Tailored Wool Trousers',
            category: 'Men • Bottoms',
            img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80',
            price: 3499,
            oldPrice: 4499,
            rating: 4.5,
            reviews: 19,
            discount: 22,
            tags: ['new'],
            desc: 'Sharp pleated wool trousers with a tapered leg. A versatile foundation for any tailored look.'
        }
    ];

    /* ========================================================
       2. STATE
       ======================================================== */
    let cart = [];           // { id, name, img, price, oldPrice, category, qty }
    let wishlist = new Set();
    const allProducts = [...PRODUCTS, ...NEW_ARRIVALS];

    /* ========================================================
       3. UTILITIES
       ======================================================== */
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    const formatINR = (n) => '\u20B9' + n.toLocaleString('en-IN');

    const buildStars = (rating) => {
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5;
        let html = '';
        for (let i = 0; i < full; i++) html += '<i class="fa-solid fa-star"></i>';
        if (half) html += '<i class="fa-solid fa-star-half-stroke"></i>';
        for (let i = full + (half ? 1 : 0); i < 5; i++) html += '<i class="fa-regular fa-star"></i>';
        return html;
    };

    const findProduct = (id) => allProducts.find(p => p.id === id);

    /* ========================================================
       4. RENDER PRODUCT CARD
       ======================================================== */
    function renderProductCard(p) {
        const badges = (p.tags || []).map(tag => {
            const map = {
                sale: `<span class="badge-tag badge-tag--sale">${p.discount}% OFF</span>`,
                new: `<span class="badge-tag badge-tag--new">New Arrival</span>`,
                hot: `<span class="badge-tag badge-tag--hot">Hot</span>`
            };
            return map[tag] || '';
        }).join('');

        const isWishlisted = wishlist.has(p.id);

        return `
            <article class="product-card reveal" data-id="${p.id}">
                <div class="product-card__media">
                    <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80'">
                    <div class="product-card__badges">${badges}</div>
                    <button class="product-card__wishlist ${isWishlisted ? 'active' : ''}" data-action="wishlist" data-id="${p.id}" aria-label="Add to wishlist">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                    <button class="product-card__quickview" data-action="quickview" data-id="${p.id}">Quick View</button>
                </div>
                <div class="product-card__body">
                    <p class="product-card__category">${p.category}</p>
                    <h3 class="product-card__name">${p.name}</h3>
                    <div class="product-card__rating">
                        <span class="stars">${buildStars(p.rating)}</span>
                        <span>(${p.reviews})</span>
                    </div>
                    <div class="product-card__price">
                        <span class="price-now">${formatINR(p.price)}</span>
                        <span class="price-old">${formatINR(p.oldPrice)}</span>
                    </div>
                    <button class="product-card__add" data-action="add" data-id="${p.id}">
                        <i class="fa-solid fa-bag-shopping"></i> Add to Cart
                    </button>
                </div>
            </article>`;
    }

    function renderGrids() {
        $('#trendingGrid').innerHTML = PRODUCTS.map(renderProductCard).join('');
        $('#newArrivalsGrid').innerHTML = NEW_ARRIVALS.map(renderProductCard).join('');
        observeReveal();
    }

    /* ========================================================
       5. CART LOGIC
       ======================================================== */
    function addToCart(id) {
        const p = findProduct(id);
        if (!p) return;
        const existing = cart.find(i => i.id === id);
        if (existing) {
            existing.qty++;
        } else {
            cart.push({
                id: p.id, name: p.name, img: p.img,
                price: p.price, oldPrice: p.oldPrice,
                category: p.category, qty: 1
            });
        }
        renderCart();
        updateCounts();
        showToast(`<i class="fa-solid fa-check-circle"></i> ${p.name} added to bag`);
        // Pulse the cart icon
        const cartBtn = $('#cartToggle');
        cartBtn.style.transform = 'scale(1.2)';
        setTimeout(() => cartBtn.style.transform = '', 200);
    }

    function removeFromCart(id) {
        cart = cart.filter(i => i.id !== id);
        renderCart();
        updateCounts();
    }

    function changeQty(id, delta) {
        const item = cart.find(i => i.id === id);
        if (!item) return;
        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(id);
            return;
        }
        renderCart();
        updateCounts();
    }

    function renderCart() {
        const body = $('#cartBody');
        const foot = $('#cartFoot');
        const count = cart.reduce((s, i) => s + i.qty, 0);
        $('#cartCountInner').textContent = count;

        if (cart.length === 0) {
            body.innerHTML = `
                <div class="cart-empty">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <p>Your shopping bag is empty.<br>Start adding your favourite pieces!</p>
                    <button class="btn btn--dark btn--sm" id="emptyShopBtn">Continue Shopping</button>
                </div>`;
            foot.innerHTML = '';
            const btn = $('#emptyShopBtn');
            if (btn) btn.addEventListener('click', closeCart);
            return;
        }

        body.innerHTML = cart.map(i => `
            <div class="cart-item" data-id="${i.id}">
                <img class="cart-item__img" src="${i.img}" alt="${i.name}">
                <div class="cart-item__info">
                    <h4>${i.name}</h4>
                    <p class="cat">${i.category}</p>
                    <div class="cart-item__price">${formatINR(i.price)}<span class="old">${formatINR(i.oldPrice)}</span></div>
                    <div class="qty-control">
                        <button data-action="dec" data-id="${i.id}" aria-label="Decrease">\u2212</button>
                        <span>${i.qty}</span>
                        <button data-action="inc" data-id="${i.id}" aria-label="Increase">+</button>
                    </div>
                </div>
                <button class="cart-item__remove" data-action="remove" data-id="${i.id}" aria-label="Remove">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>`).join('');

        const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
        const original = cart.reduce((s, i) => s + i.oldPrice * i.qty, 0);
        const savings = original - subtotal;
        const shipping = subtotal >= 999 ? 0 : 79;
        const total = subtotal + shipping;

        foot.innerHTML = `
            <div class="cart-line"><span>Subtotal (${count} items)</span><span>${formatINR(subtotal)}</span></div>
            ${savings > 0 ? `<div class="cart-line"><span>You Save</span><span style="color:#2d8659;">\u2212 ${formatINR(savings)}</span></div>` : ''}
            <div class="cart-line"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : formatINR(shipping)}</span></div>
            <div class="cart-line total"><span>Total</span><span>${formatINR(total)}</span></div>
            ${shipping > 0 ? `<p style="font-size:0.78rem;color:var(--grey);text-align:center;">Add ${formatINR(999 - subtotal)} more for FREE shipping</p>` : ''}
            <button class="btn btn--dark" id="checkoutBtn"><i class="fa-solid fa-lock"></i> Proceed to Checkout</button>
            <button class="btn btn--outline" id="continueBtn" style="margin-top:10px;">Continue Shopping</button>`;

        $('#checkoutBtn').addEventListener('click', checkout);
        $('#continueBtn').addEventListener('click', closeCart);
    }

    function checkout() {
        if (cart.length === 0) return;
        showToast('<i class="fa-solid fa-check-circle"></i> Order placed successfully! Thank you for shopping with STYLEHUB.');
        cart = [];
        renderCart();
        updateCounts();
        setTimeout(closeCart, 1200);
    }

    function updateCounts() {
        const cartCount = cart.reduce((s, i) => s + i.qty, 0);
        $('#cartCount').textContent = cartCount;
        $('#cartCount').style.display = cartCount > 0 ? 'flex' : 'none';
        $('#wishlistCount').textContent = wishlist.size;
        $('#wishlistCount').style.display = wishlist.size > 0 ? 'flex' : 'none';
    }

    /* ========================================================
       6. WISHLIST
       ======================================================== */
    function toggleWishlist(id) {
        const p = findProduct(id);
        if (wishlist.has(id)) {
            wishlist.delete(id);
            showToast(`<i class="fa-solid fa-heart-crack"></i> Removed from wishlist`);
        } else {
            wishlist.add(id);
            showToast(`<i class="fa-solid fa-heart" style="color:#c0392b;"></i> ${p.name} added to wishlist`);
        }
        // Update all wishlist buttons for this product
        $$(`.product-card__wishlist[data-id="${id}"]`).forEach(btn => {
            btn.classList.toggle('active', wishlist.has(id));
        });
        updateCounts();
    }

    /* ========================================================
       7. QUICK VIEW MODAL
       ======================================================== */
    function openQuickView(id) {
        const p = findProduct(id);
        if (!p) return;
        const isWishlisted = wishlist.has(id);
        const save = p.oldPrice - p.price;
        const savePct = Math.round((save / p.oldPrice) * 100);

        $('#quickViewContent').innerHTML = `
            <img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80'">
            <div class="modal__detail">
                <p class="cat">${p.category}</p>
                <h3>${p.name}</h3>
                <div class="rating">${buildStars(p.rating)} <span>(${p.reviews} reviews)</span></div>
                <div class="price">
                    <span class="now">${formatINR(p.price)}</span>
                    <span class="old">${formatINR(p.oldPrice)}</span>
                    <span class="save">Save ${savePct}%</span>
                </div>
                <p class="desc">${p.desc}</p>
                <div class="actions">
                    <button class="btn btn--dark" data-action="add" data-id="${p.id}"><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button>
                    <button class="btn btn--outline ${isWishlisted ? 'active-wish' : ''}" data-action="wishlist" data-id="${p.id}">
                        <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i> ${isWishlisted ? 'Wishlisted' : 'Wishlist'}
                    </button>
                </div>
                <div class="meta">
                    <div><i class="fa-solid fa-truck-fast"></i> Free shipping on orders above ${formatINR(999)}</div>
                    <div><i class="fa-solid fa-rotate-left"></i> 7-day easy returns &amp; exchanges</div>
                    <div><i class="fa-solid fa-shield-halved"></i> 100% authentic &amp; quality assured</div>
                </div>
            </div>`;
        $('#quickViewModal').classList.add('open');
        $('#overlay').classList.add('open');
        document.body.classList.add('no-scroll');
    }

    function closeQuickView() {
        $('#quickViewModal').classList.remove('open');
        if (!$('#cartDrawer').classList.contains('open')) {
            $('#overlay').classList.remove('open');
            document.body.classList.remove('no-scroll');
        }
    }

    /* ========================================================
       8. CART DRAWER OPEN/CLOSE
       ======================================================== */
    function openCart() {
        $('#cartDrawer').classList.add('open');
        $('#overlay').classList.add('open');
        document.body.classList.add('no-scroll');
    }
    function closeCart() {
        $('#cartDrawer').classList.remove('open');
        if (!$('#quickViewModal').classList.contains('open')) {
            $('#overlay').classList.remove('open');
            document.body.classList.remove('no-scroll');
        }
    }

    /* ========================================================
       9. SEARCH
       ======================================================== */
    function toggleSearch() {
        const bar = $('#searchBar');
        bar.classList.toggle('open');
        if (bar.classList.contains('open')) {
            setTimeout(() => $('#searchInput').focus(), 200);
        }
    }

    function runSearch(query) {
        query = query.trim().toLowerCase();
        if (!query) return;
        const matches = allProducts.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
        if (matches.length > 0) {
            openQuickView(matches[0].id);
            showToast(`<i class="fa-solid fa-check-circle"></i> Found ${matches.length} product(s) matching "${query}"`);
        } else {
            showToast(`<i class="fa-solid fa-circle-info"></i> No products found for "${query}"`);
        }
        $('#searchBar').classList.remove('open');
        $('#searchInput').value = '';
    }

    /* ========================================================
       10. NEWSLETTER
       ======================================================== */
    function handleNewsletter(e) {
        e.preventDefault();
        const email = $('#newsletterEmail').value.trim();
        const msg = $('#newsletterMsg');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            msg.style.color = '#ff8a80';
            msg.textContent = 'Please enter a valid email address.';
            return;
        }
        msg.style.color = 'var(--beige-dark)';
        msg.textContent = 'Thank you! Your 15% off code is on its way to ' + email + '.';
        $('#newsletterEmail').value = '';
        showToast('<i class="fa-solid fa-check-circle"></i> Subscribed successfully!');
    }

    /* ========================================================
       11. TOAST NOTIFICATIONS
       ======================================================== */
    let toastTimer;
    function showToast(html) {
        const toast = $('#toast');
        toast.innerHTML = html;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
    }

    /* ========================================================
       12. SCROLL REVEAL ANIMATIONS
       ======================================================== */
    let revealObserver;
    function observeReveal() {
        if (!('IntersectionObserver' in window)) {
            // Fallback: just show everything
            $$('.reveal').forEach(el => el.classList.add('in-view'));
            return;
        }
        if (!revealObserver) {
            revealObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, idx) => {
                    if (entry.isIntersecting) {
                        const delay = parseInt(entry.target.dataset.delay || '0', 10);
                        setTimeout(() => entry.target.classList.add('in-view'), delay);
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.05, rootMargin: '0px 0px 80px 0px' });
        }
        $$('.reveal:not(.in-view)').forEach((el, i) => {
            // Stagger by data attribute if present, otherwise no delay
            if (!el.dataset.delay) el.dataset.delay = '0';
            revealObserver.observe(el);
        });
    }

    /* ========================================================
       13. ACTIVE NAV ON SCROLL
       ======================================================== */
    function handleScroll() {
        const header = $('#header');
        if (window.scrollY > 30) header.classList.add('scrolled');
        else header.classList.remove('scrolled');

        // Section spy
        const sections = ['home', 'categories', 'trending', 'collections', 'new-arrivals'];
        let current = 'home';
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el && window.scrollY >= el.offsetTop - 140) current = id;
        });
        $$('.nav-links__item').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + current);
        });
    }

    /* ========================================================
       14. EVENT DELEGATION (single listener for all product clicks)
       ======================================================== */
    function handleProductClick(e) {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const action = btn.dataset.action;
        const id = btn.dataset.id;

        switch (action) {
            case 'add': addToCart(id); break;
            case 'wishlist': toggleWishlist(id); break;
            case 'quickview': openQuickView(id); break;
            case 'inc': changeQty(id, 1); break;
            case 'dec': changeQty(id, -1); break;
            case 'remove': removeFromCart(id); break;
        }
    }

    /* ========================================================
       15. MOBILE NAV
       ======================================================== */
    function toggleMobileNav() {
        $('#navLinks').classList.toggle('open');
    }

    /* ========================================================
       16. INIT
       ======================================================== */
    function init() {
        renderGrids();
        renderCart();
        updateCounts();
        observeReveal();

        // Add reveal class to section heads & category cards
        $$('.section__head, .category-card, .feature-card, .featured-tile, .offer-banner__inner, .newsletter__inner, .footer__top').forEach(el => {
            el.classList.add('reveal');
        });
        observeReveal();

        // Header buttons
        $('#cartToggle').addEventListener('click', openCart);
        $('#cartClose').addEventListener('click', closeCart);
        $('#wishlistBtn').addEventListener('click', () => {
            showToast(wishlist.size > 0
                ? `<i class="fa-solid fa-heart" style="color:#c0392b;"></i> You have ${wishlist.size} item(s) in your wishlist`
                : '<i class="fa-solid fa-circle-info"></i> Your wishlist is empty. Tap the heart icon on products to save them.');
        });

        // Search
        $('#searchToggle').addEventListener('click', toggleSearch);
        $('#searchClose').addEventListener('click', toggleSearch);
        $('#searchSubmit').addEventListener('click', () => runSearch($('#searchInput').value));
        $('#searchInput').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') runSearch($('#searchInput').value);
        });

        // Mobile nav
        $('#menuToggle').addEventListener('click', toggleMobileNav);
        $$('.nav-links__item').forEach(a => a.addEventListener('click', () => {
            $('#navLinks').classList.remove('open');
        }));

        // Quick view close
        $('#quickViewClose').addEventListener('click', closeQuickView);

        // Overlay click closes everything
        $('#overlay').addEventListener('click', () => {
            closeCart();
            closeQuickView();
        });

        // Newsletter
        $('#newsletterForm').addEventListener('submit', handleNewsletter);

        // Global click delegation for product buttons
        document.addEventListener('click', handleProductClick);

        // Scroll
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Escape key closes drawers/modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeCart();
                closeQuickView();
                $('#searchBar').classList.remove('open');
                $('#navLinks').classList.remove('open');
            }
        });

        // Smooth-scroll for in-page anchors (compensate for sticky header)
        $$('a[href^="#"]').forEach(a => {
            a.addEventListener('click', (e) => {
                const target = a.getAttribute('href');
                if (target.length > 1 && document.querySelector(target)) {
                    e.preventDefault();
                    const el = document.querySelector(target);
                    const top = el.getBoundingClientRect().top + window.scrollY - 90;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            });
        });

        console.log('%cSTYLEHUB ', 'background:#0a0a0a;color:#d4c5b0;font-size:18px;font-weight:bold;padding:6px 12px;border-radius:4px;', 'Redefine Your Style — loaded successfully.');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Remove no-js class immediately so reveal animations can work
    document.documentElement.classList.remove('no-js');

    // Safety fallback: if IntersectionObserver hasn't revealed elements after 4s,
    // reveal them all (handles cases where layout didn't trigger observation properly).
    setTimeout(() => {
        document.querySelectorAll('.reveal:not(.in-view)').forEach(el => el.classList.add('in-view'));
    }, 4000);
})();