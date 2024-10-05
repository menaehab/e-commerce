<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Layout</title>
  <script src="https://unpkg.com/scrollreveal"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
  <link rel="stylesheet" href="/style/layout.css">
  <link rel="stylesheet" href="style\Product.css">
</head>

<body>
  <!-- Navbar Start -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid container">
      <a class="navbar-brand nav-logo" href="#">EXCLUSIVE</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Sign up</a></li>
        </ul>
        <div class="d-flex align-items-center nav-items">
          <form class="d-flex nav-form">
            <input class="form-control me-2 nav-input" type="search" placeholder="Search Here..." aria-label="Search">
            <button class="btn nav-search" type="submit"><i class="fas fa-magnifying-glass"></i></button>
          </form>
          <i class="fa-regular fa-heart ms-3 nav-heart"></i>
          <i class="fa fa-cart-shopping ms-3 nav-cart"></i>
        </div>
      </div>
    </div>
  </nav>
  <!-- Navbar End -->

  <!-- start play station -->
  <div class="containerr">
    <div class="breadcrumbs">
      <a href="#">Account</a> / <a href="#">Gaming</a> / <a href="#" style="font-weight: bold; color: rgb(35, 35, 35);">
        Havic HV G-92 Gamepad </a>
    </div>
    <div class="product-page">
      <!-- Left Section: Image Gallery -->
      <div class="image-gallery">
        <div class="main-image">
          <img src="image\play1.png" alt="Gamepad Main Image">
        </div>
        <div class="thumbnail-images">

          <img src="image\play3.png" style="height: 115px; width: 133px; padding: 10px;" alt="Gamepad Thumbnail 1">

          <img src="image\play5.png" style="height: 115px; width: 133px; padding: 10px;" alt="Gamepad Thumbnail 2">
          <img src="image\play3.png" style="height: 115px; width: 133px; padding: 10px;" alt="Gamepad Thumbnail 3">
          <img src="image\play5.png" style="height: 115px; width: 133px; padding: 10px;" alt="Gamepad Thumbnail 3">
        </div>
      </div>

      <!-- Right Section: Product Details -->
      <div class="product-details">
        <h1>Havic HV G-92 Gamepad</h1>
        <div class="rating">
          ★★★★☆ <p href="#" style="display: inline-block; color: rgb(56, 56, 56);">(150 Reviews) | </p>
          <p href="#" style="display: inline-block; color: rgb(67, 181, 6);">In stock</p>
        </div>
        <p class="price">$192.00</p>
        <hr>
        <p class="description">
          PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble-free install & mess
          free removal. Pressure sensitive.
        </p>

        <!-- Color Options -->
        <div class="colors">
          <div class="color-options">
            <p>Colours:</p>
            <span class="color" style="background-color: hsl(0, 100%, 69%);"></span>
            <span class="color" style="background-color: rgb(116, 141, 251);"></span>
          </div>
        </div>

        <!-- Size Options -->
        <div class="sizes">
          <div class="size-options">
            <p style="padding-top: 11px;">Size:</p>
            <button>XS</button>
            <button>S</button>
            <button class="selected" style="background-color:hsl(0, 100%, 69%);">M</button>
            <button>L</button>
            <button>XL</button>
          </div>
        </div>

        <!-- start Quantity and Buy Button -->
        <div class="purchase-section" style="margin-top:35px;">
          <div class="quantity">
            <button class="minus-btn">−</button>
            <input type="number" value="2" style="width: 70px; height: 30px;">
            <button class="plus-btn" style="padding: 0 10px; background-color: hsl(0, 100%, 69%); margin: 0;">+</button>
          </div>
          <button class="buy-now"
            style="padding: 0 30px; border: none; background-color: hsl(0, 100%, 69%); border-radius: 7px;">Buy
            Now</button><i class="nav-heart fa-regular fa-heart" style="padding: 10px 0px;"></i>
        </div>
        <!-- end Quantity and Buy Button -->

        <!-- start Delivery Info -->
        <div class="card" style="width: 300px; margin-top: 40px">
          <ul class="list-group list-group-flush">
            <p style="padding-top: 10px;padding-left: 30px; display: inline-block;"> <a
                style="display: inline-block; padding: 0 5;">
                <svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  class="size-6">
                  <image href="image\car2.png" x="0" y="0" height="24" width="24" />
                </svg></a>Free Delivery
            </p>
        </div>
        <div class="card" style="width: 300px; margin-top: 10px;">
          <ul class="list-group list-group-flush">
            <p style="padding-top: 10px;padding-left: 30px; display: inline-block;"> <a
                style="display: inline-block; padding: 0 5;">
                <svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  class="size-6">
                  <image href="image\Return.png" x="0" y="0" height="24" width="24" />
                </svg></a>Return Delivery #30 Days
            </p>
        </div>
        <!-- end Delivery Info -->

      </div>
    </div>
  </div>
  <!-- play station -->
  <!--Just For You Start-->
  <section class="section">
    <div class="container">
      <div class="section-category">
        <p class="paragraph" style="font-weight: bold;">Related Item</p>
      </div>
      <div class="section-header">
        <p id="timer"></p>
      </div>
    </div>
    <div class="swiper mySwiper container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slider">
            <div class="card-top">
              <img src="image\slide1.png" alt="slide1" class="card-img">
              <div class="card-tag">-40%</div>
              <div class="card-icons">
                <svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  class="size-6">
                  <image href="image\visibility.png" x="0" y="0" height="24" width="24" />
                </svg>
              </div>
            </div>
            <a href="#" class="add-too-cart">Add To Cart</a>
            <div class="card-body">
              <h3 class="card-title" style="margin-top:15px ;">HAVIT HV-G92 Gamepad</h3>
              <p class="card-price">$120 <span>$160</span></p>
            </div>
          </div>
          <div class="card-rating">
            <div class="card-stars">
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
            </div>
            <p class="card-rating-number">(88)</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider">
            <div class="card-top">
              <img src="image\slide2.png" alt="slide1" class="card-img">
              <div class="card-tag">-35%</div>
              <div class="card-icons">
                <svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  class="size-6">
                  <image href="image\visibility.png" x="0" y="0" height="24" width="24" />
                </svg>
              </div>
            </div>
            <a href="#" class="add-too-cart">Add To Cart</a>
            <div class="card-body">
              <h3 class="card-title" style="margin-top:15px ;">AK-900 Wired Keyboard</h3>
              <p class="card-price">$960 <span>$1160</span></p>
            </div>
          </div>
          <div class="card-rating">
            <div class="card-stars">
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star"></i>
            </div>
            <p class="card-rating-number">(75)</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider">
            <div class="card-top">
              <img src="image\slide3.png" alt="slide1" class="card-img">
              <div class="card-tag">-30%</div>
              <div class="card-icons">
                <svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  class="size-6">
                  <image href="image\visibility.png" x="0" y="0" height="24" width="24" />
                </svg>
              </div>
            </div>
            <a href="#" class="add-too-cart">Add To Cart</a>
            <div class="card-body">
              <h3 class="card-title" style="margin-top:15px ;">IPS LCD Gaming Monitor</h3>
              <p class="card-price">$370 <span>$400</span></p>
            </div>
          </div>
          <div class="card-rating">
            <div class="card-stars">
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
            </div>
            <p class="card-rating-number">(99)</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider">
            <div class="card-top">
              <img src="image\slide7.png" alt="slide1" class="card-img">
              <div class="card-icons">
                <svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  class="size-6">
                  <image href="image\visibility.png" x="0" y="0" height="24" width="24" />
                </svg>
              </div>
            </div>
            <a href="#" class="add-too-cart">Add To Cart</a>
            <div class="card-body">
              <h3 class="card-title" style="margin-top:15px ;">RGB liquid CPU cooler</h3>
              <p class="card-price">$160 <span>$170</span></p>
            </div>
          </div>
          <div class="card-rating">
            <div class="card-stars">
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star active"></i>
              <i class="fas fa-star-half-alt active"></i>
            </div>
            <p class="card-rating-number">(65)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Just For You End-->


  <!-- Footer Start -->
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-item">
        <a href="#" class="footer-logo">Exclusive</a>
        <div class="footer-p">Shopify is a user-friendly e-commerce platform that helps small businesses build an online
          store.</div>
      </div>
      <div class="footer-item">
        <h3 class="footer-title">Support</h3>
        <ul class="footer-list">
          <li class="footer-list-item">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
          <li class="footer-list-item">exclusive@gmail.com</li>
          <li class="footer-list-item">+88015-88888-9999</li>
        </ul>
      </div>
      <div class="footer-item">
        <h3 class="footer-title">Account</h3>
        <ul class="footer-list">
          <li class="footer-list-item">My Account</li>
          <li class="footer-list-item">Login / Register</li>
          <li class="footer-list-item">Cart</li>
          <li class="footer-list-item">Wishlist</li>
          <li class="footer-list-item">Shop</li>
        </ul>
      </div>
      <div class="footer-item">
        <h3 class="footer-title">Quick Link</h3>
        <ul class="footer-list">
          <li class="footer-list-item">Privacy Policy</li>
          <li class="footer-list-item">Terms Of Use</li>
          <li class="footer-list-item">FAQ</li>
          <li class="footer-list-item">Contact</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-container">
        <div class="footer-copyright">&#169; Copyright 2024. All right reserved</div>
      </div>
    </div>
  </footer>
  <!-- Footer End -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="/script/layout.js"></script>
  <script src="script\Product.js"></script>
</body>
</html>