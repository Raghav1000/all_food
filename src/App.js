import "./App.css";

function App() {
  return (
    <div className="App">
      {" "}
      <body>
        {/*<!--Navbar-->*/}
        <nav class="navbar">
          <div class="navbar-container">
            <div class="logo">
              <a href="/">
                <img class="logo-image" src="./Assets/Logo.webp" alt="Logo" />
              </a>
            </div>
            <div class="navbar-options">
              <ul class="navbar-option">
                <li>
                  <a href="#Home"> Home </a>
                </li>
                <li>
                  <a href="#About"> About </a>
                </li>
                <li>
                  <a href="#Menu"> Menu </a>
                </li>
                <li>
                  <a href="#Blog"> Blog </a>
                </li>
                <li>
                  <a href="#Contact"> Contact </a>
                </li>
                <button class="order">Order Online</button>
              </ul>
            </div>
          </div>
        </nav>

        {/*<!--Landing Page Section -->*/}
        <section class="landing-section">
          <div>
            <img
              class="bg-image"
              src="./Assets//Landing-page-bg.webp"
              alt="background"
            />
          </div>
          <div class="landing-section-info">
            <h5>Discover your taste</h5>
            <h1>We believe good food offer great smile</h1>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat is aute irure.
            </p>
            <button class="reservation">Reservation</button>
          </div>
        </section>

        <section class="second-section">
          <div class="second-section-info">
            <h5>Discover your taste</h5>
            <h1>We believe good food offer great smile</h1>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat is aute irure.
            </p>

            <div class="icons-info-1">
              <div class="icon-info">
                <p>Ut enim ad minim veniam, quis nostrud exer.</p>

                <p>Ut enim ad minim veniam, quis nostrud exer.</p>
              </div>
            </div>

            <div class="icon-info-2">
              <div class="icon-info">
                <p>Ut enim ad minim veniam, quis nostrud exer.</p>

                <p>Ut enim ad minim veniam, quis nostrud exer.</p>
              </div>
            </div>
          </div>

          <div class="second-section-image">
            <img src="./Assets//cook-image.webp" alt="cook" />
          </div>
        </section>

        <section class="third-section">
          <div class="banner-image">
            <img src="./Assets/banner.webp" alt="banner" />
            <p>Our offered Menu</p>
            <h1>Some Trendy and Popular Courses Offered</h1>
            <div class="menu-sections">
              <ul>
                <li class="first">Special</li>
                <li>Lunch</li>
                <li>Breakfast</li>
                <li>Dinner</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="third-sub-section">
          <img src="./Assets//Gallery-1.webp" alt="" />

          <img src="./Assets//Gallery-2.webp" alt="" />

          <img src="./Assets//Gallery-3.webp" alt="" />

          <img src="./Assets//Gallery-4.webp" alt="" />
        </section>

        <section class="about-section">
          <div class="about-image">
            <img src="./Assets/about-rest-image.webp" alt="" />
          </div>
          <div class="about-description">
            <h5>About Our Restaurant</h5>
            <h1>We Provide Good Food For Your Family!</h1>
            <p>
              Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco
              laboris nisi ufsit aliquip ex ea commodo consequat is aute irure
              m, quis nostrud exer
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected our, or randomised words which don't look even slightly
              believab If you are going to use a passage.
            </p>
            <button class="learn-more">Learn More</button>
          </div>
        </section>

        <section class="bookTable-section">
          <img src="./Assets/book-a-table.webp" alt="" />

          <div class="bookTable-content">
            <p>About a Restaurant</p>
            <h1>Book a Restaurant</h1>

            <div class="booking-section">
              <select name="" id="">
                <option value="">1 Person</option>
                <option value="">2 Person</option>
                <option value="">3 Person</option>
                <option value="">4 Person</option>
              </select>
              <input type="text" placeholder="Date" />
              <input type="text" placeholder="Time" />
              <button class="booknow">Book Now</button>
            </div>
          </div>
        </section>

        <section class="best-services-section">
          <div class="best-services-info">
            <p>Services we offer</p>
            <h1>Our best Services</h1>
            <div class="service-cards">
              <div class="service-card-1">
                <h4>Best chef</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
              <div class="service-card-2">
                <h4>Quality Food</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
              <div class="service-card-3">
                <h4>Perfect Cook</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="subscription">
          <div class="subscription-info">
            <img src="./Assets/subscriptio-image.webp" alt="" />
            <div class="subscription-details">
              <h5>About Our Restaurant</h5>
              <h1>We Provide Good Food For Your Family!</h1>
              <p>
                Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco
                laboris nisi ufsit aliquip ex ea commodo consequat is aute irure
                m, quis nostrud exer
              </p>
              <input type="email" placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </section>

        <section class="blogs">
          <div class="blog">
            <h5>Our new Blog news</h5>
            <h1>Our recent news</h1>
            <div class="blog-section">
              <div class="blog-1">
                <img class="blog-image" src="./Assets/blog-1.webp" alt="" />
                <div class="blog-1-info">
                  <h4>6 JUNE,2021</h4>
                  <h3>The food addiction - First blog</h3>
                </div>
              </div>
              <div class="blog-2">
                <img class="blog-image" src="./Assets/blog-2.webp" alt="" />
                <div class="blog-1-info">
                  <h4>6 JUNE,2021</h4>
                  <h3>The food addiction - Second blog</h3>
                </div>
              </div>
              <div class="blog-3">
                <img class="blog-image" src="./Assets/blog-1.webp" alt="" />
                <div class="blog-1-info">
                  <h4>6 JUNE,2021</h4>
                  <h3>The food addiction - Third blog</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <img class="footer-cover" src="./Assets/header-bg.webp" alt="" />
          <div class="footer-section">
            <div class="footer-logo">
              <img src="./Assets/Logo.webp" alt="" />
            </div>
            <div class="navigation-info">
              <div class="navigation">
                <ul>
                  <p>Navigation</p>
                  <li>Home</li>
                  <li>Events</li>
                  <li>Testimonials</li>
                  <li>Categories</li>
                  <li>Contacts</li>
                </ul>
              </div>
              <div class="useful-links">
                <ul>
                  <p>Useful links</p>
                  <li>Registration</li>
                  <li>Login</li>
                  <li>Policy</li>
                  <li>Terms and Conditions</li>
                </ul>
              </div>
              <div class="insta-feed">
                <p>Instagram Feed</p>
                <div class="image-row-1">
                  <img src="./Assets/header-1.png" alt="" />
                  <img src="./Assets/header-2.png" alt="" />
                  <img src="./Assets/header-3.png" alt="" />
                </div>
                <div class="image-row-2">
                  <img src="./Assets/header -4.png" alt="" />
                  <img src="./Assets/header -5.png" alt="" />
                  <img src="./Assets/header-6.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="footer-last-part"></div>
        </footer>
      </body>{" "}
    </div>
  );
}

export default App;
