# STYLEHUB – Redefine Your Style

A modern, premium, fully responsive **online fashion store** built with HTML5, CSS3, and vanilla JavaScript.

![STYLEHUB](https://img.shields.io/badge/STYLEHUB-Fashion_Store-0a0a0a?style=for-the-badge)

## Overview

STYLEHUB is a professionally designed fashion e-commerce website that resembles a real-world premium clothing brand. It features a sophisticated black, white, beige, and soft grey colour palette, modern typography (Playfair Display + Inter), high-quality fashion photography, smooth transitions, and an elegant luxury-inspired layout.

## Features

### Design
- Sophisticated colour palette: black, white, beige, and soft grey with gold accents
- Modern typography: Playfair Display (headings) + Inter (body text)
- High-quality fashion photography from Unsplash
- Smooth transitions, hover effects, subtle animations, and elegant shadows
- Clean, spacious, luxury-inspired layout
- Fully responsive: desktop, tablet, and mobile

### Sections
1. **Promo Bar** — free shipping notice, promo code, contact
2. **Sticky Navigation** — logo, 7 nav links, search, wishlist, cart with badge, login button
3. **Hero Section** — full-width fashion model, animated heading, dual CTAs, scroll indicator
4. **Shop By Category** — 6 image-based category cards with hover zoom
5. **Trending Products** — 8 products in a responsive grid with badges, ratings, prices
6. **Featured Collection** — asymmetrical editorial layout with 3 lifestyle tiles
7. **Mega Sale Banner** — promotional section with STYLE50 discount code
8. **New Arrivals** — 4 latest products with "New Arrival" badges
9. **Why Shop With Us** — 4 feature cards (free shipping, secure payments, returns, support)
10. **Newsletter** — email subscription with 15% off incentive
11. **Footer** — brand info, quick links, categories, support, contact, social & payment icons

### Interactive Functionality (JavaScript)
- **Shopping Cart** — add/remove items, quantity controls, auto-calculated subtotal/savings/shipping/total, empty-cart state, checkout flow, free-shipping threshold logic
- **Wishlist** — toggle heart icons, live count badge, toast notifications
- **Quick View Modal** — product detail popup with image, rating, price, save %, description, shipping/returns info
- **Search** — slide-down search bar, matches products by name or category
- **Toast Notifications** — elegant feedback for all user actions
- **Scroll Reveal Animations** — IntersectionObserver-based fade-up animations
- **Active Nav Highlighting** — section spy on scroll
- **Mobile Navigation** — slide-in hamburger menu with full nav links
- **Newsletter Validation** — email format validation with success/error messages

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — Flexbox, Grid, CSS variables, media queries
- **JavaScript (ES6+)** — vanilla JS, no frameworks, IIFE pattern

## Project Structure

```
stylehub-fashion-store/
├── index.html      # HTML structure (all 13 sections)
├── style.css        # Complete styling (~1350 lines, responsive)
├── script.js        # Cart, wishlist, search, quick view, animations
└── README.md        # This file
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/javvajimanikanta7016-arch/stylehub-fashion-store.git
   ```
2. Open `index.html` in your browser, or serve locally:
   ```bash
   cd stylehub-fashion-store
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

## Sample Products

The store includes 12 sample products with INR (₹) pricing:
- Classic Oversized T-Shirt, Premium Denim Jacket, Casual White Sneakers
- Women's Summer Dress, Slim Fit Formal Shirt, Leather Handbag
- Cargo Pants, Premium Wristwatch
- Wool Blend Overcoat, Silk Wrap Blouse, Chunky Knit Sweater, Tailored Wool Trousers

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Uses IntersectionObserver, CSS Grid, and CSS custom properties.

## License

This project is open source and available under the MIT License.

---
Crafted with passion in India.