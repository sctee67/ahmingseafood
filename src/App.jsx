import "./App.css";

function App() {
  const googleMapsUrl =
      "https://www.google.com/maps/place/Ah+Ming+Seafood+Restaurant+(%E4%BA%9A%E6%98%8E%E6%B5%B7%E9%B2%9C%E5%A4%A7%E7%82%92)/@2.7295744,101.924864,15z/data=!4m6!3m5!1s0x31cddd120c7f9bb5:0x69733bbd159d14fd!8m2!3d2.7413857!4d101.9229574!16s%2Fg%2F11c6q7kkyc";

  return (
      <div className="website">

        {/* ================= NAVBAR ================= */}
        <header className="navbar">
          <a href="#home" className="brand">
            <img src="/logo.png" alt="Ah Ming Seafood Restaurant" />
            <div className="brand-text">
              <strong>AH MING</strong>
              <span>SEAFOOD RESTAURANT</span>
              <small>亚明海鲜大炒</small>
            </div>
          </a>

          <nav>
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#menu">MENU</a>
            <a href="#contact">CONTACT</a>
          </nav>

          <a
              className="nav-button"
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
          >
            📍 GET DIRECTIONS
          </a>
        </header>

        {/* ================= HERO ================= */}
        <section id="home" className="hero">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="gold-line">
              <span></span>
              亚 明 海 鲜 大 炒
              <span></span>
            </div>

            <p className="hero-small">FRESH SEAFOOD • LOCAL FAVOURITE</p>

            <h1>
              GOOD FOOD.
              <br />
              <span>GREAT MEMORIES.</span>
            </h1>

            <p className="hero-description">
              Fresh seafood, generous portions and delicious Chinese-style
              cooking. Come together with family and friends at Ah Ming Seafood
              Restaurant.
            </p>

            <div className="hero-buttons">
              <a href="#menu" className="btn btn-red">
                🍽 VIEW OUR MENU
              </a>

              <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
              >
                📍 FIND US
              </a>
            </div>
          </div>

          <div className="scroll-indicator">
            SCROLL TO EXPLORE
            <span>↓</span>
          </div>
        </section>

        {/* ================= INFO BAR ================= */}
        <section className="info-bar">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <div>
              <small>LOCATION</small>
              <p>
                No. 39, Taman Bukit Dawn,
                <br />
                Jalan Tun Dr. Ismail, 70200 Seremban
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">☎</div>
            <div>
              <small>PHONE</small>
              <p>019-276 5728</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">◷</div>
            <div>
              <small>OPENING HOURS</small>
              <p>
                2:00 PM – 11:00 PM
                <br />
                <span className="closed">Wednesday OFF</span>
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">★</div>
            <div>
              <small>GOOGLE RATING</small>
              <p>
                <strong>4.0 ★★★★★</strong>
                <br />
                217 Google Reviews
              </p>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="about section">
          <div className="about-image">
            <div className="image-frame">
              <img
                  src="/ah-ming-logo.png"
                  alt="Ah Ming Seafood Restaurant logo"
              />
            </div>
          </div>

          <div className="about-content">
            <p className="section-label">ABOUT AH MING</p>

            <h2>
              A TRADITION OF
              <br />
              <span>GREAT SEAFOOD</span>
            </h2>

            <div className="gold-divider"></div>

            <p>
              Ah Ming Seafood Restaurant (亚明海鲜大炒) is a place for families
              and friends to enjoy delicious seafood and Chinese-style dishes
              in Seremban.
            </p>

            <p>
              From fresh seafood to generous set menus, we focus on good food,
              satisfying portions and a warm dining experience.
            </p>

            <a href="#menu" className="text-button">
              DISCOVER OUR MENU →
            </a>
          </div>
        </section>

        {/* ================= MENU ================= */}
        <section id="menu" className="menu-section section">
          <div className="section-heading">
            <p className="section-label">OUR MENU</p>

            <h2>
              SOMETHING DELICIOUS
              <br />
              <span>FOR EVERYONE</span>
            </h2>

            <p>
              Explore our current set menus and additional dishes.
            </p>
          </div>

          <div className="menu-layout">
            <div className="menu-text">
              <div className="menu-badge">CHEF'S SELECTION</div>

              <h3>
                SEAFOOD
                <br />
                <span>SET MENUS</span>
              </h3>

              <p>
                Our current set packages are designed for groups and families,
                with tea and rice included.
              </p>

              <div className="price-list">
                <div>
                  <strong>RM188</strong>
                  <span>PACKAGE</span>
                </div>

                <div>
                  <strong>RM218</strong>
                  <span>PACKAGE</span>
                </div>

                <div>
                  <strong>RM258</strong>
                  <span>PACKAGE</span>
                </div>
              </div>

              <a
                  href="/menu.jpg"
                  target="_blank"
                  className="btn btn-red"
              >
                VIEW FULL MENU
              </a>
            </div>

            <div className="menu-image">
              <img src="/menu.jpg" alt="Ah Ming Seafood Restaurant menu" />
            </div>
          </div>
        </section>

        {/* ================= SPECIALTIES ================= */}
        <section className="specialties section">
          <div className="section-heading">
            <p className="section-label">WHAT WE SERVE</p>

            <h2>
              FRESH FROM
              <br />
              <span>THE SEA</span>
            </h2>
          </div>

          <div className="specialty-grid">
            <div className="specialty-card">
              <div className="specialty-icon">🦀</div>
              <h3>CRAB</h3>
              <p>Fresh crab prepared with delicious seafood flavours.</p>
            </div>

            <div className="specialty-card">
              <div className="specialty-icon">🦐</div>
              <h3>PRAWNS</h3>
              <p>Juicy prawns cooked with aromatic Chinese-style sauces.</p>
            </div>

            <div className="specialty-card">
              <div className="specialty-icon">🐟</div>
              <h3>FRESH FISH</h3>
              <p>Fresh fish prepared to complement every family meal.</p>
            </div>

            <div className="specialty-card">
              <div className="specialty-icon">🦑</div>
              <h3>SQUID</h3>
              <p>Tender squid cooked with delicious local flavours.</p>
            </div>
          </div>
        </section>

        {/* ================= PACKAGE ================= */}
        <section className="package-banner">
          <div className="package-decoration">✦</div>

          <div>
            <p>GROUP DINING</p>
            <h2>BRING YOUR FAMILY & FRIENDS</h2>
            <span>
            TABLE PACKAGES AVAILABLE FOR GROUPS OF 10 PAX
          </span>
          </div>

          <a href="#contact" className="btn btn-gold">
            CONTACT US
          </a>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="contact section">
          <div className="contact-heading">
            <p className="section-label">VISIT US</p>

            <h2>
              COME & DINE
              <br />
              <span>WITH US</span>
            </h2>

            <p>
              Good food. Good people. Great memories.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-box">
              <span>📍</span>
              <h3>ADDRESS</h3>
              <p>
                No. 39, Taman Bukit Dawn,
                <br />
                Jalan Tun Dr. Ismail,
                <br />
                70200 Seremban,
                <br />
                Negeri Sembilan
              </p>

              <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
              >
                OPEN GOOGLE MAPS →
              </a>
            </div>

            <div className="contact-box">
              <span>☎</span>
              <h3>CONTACT</h3>

              <p>
                <strong>Phone</strong>
                <br />
                019-276 5728
              </p>

              <p>
                <strong>WhatsApp</strong>
                <br />
                012-6583395
                <br />
                012-6722259
              </p>

              <a href="tel:0192765728">CALL US →</a>
            </div>

            <div className="contact-box">
              <span>◷</span>
              <h3>OPENING HOURS</h3>

              <p>
                Monday – Tuesday
                <br />
                2:00 PM – 11:00 PM
              </p>

              <p>
                Thursday – Sunday
                <br />
                2:00 PM – 11:00 PM
              </p>

              <strong className="closed-big">
                WEDNESDAY OFF
              </strong>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer>
          <div className="footer-brand">
            <img src="/logo.png" alt="Ah Ming logo" />

            <div>
              <h3>AH MING</h3>
              <p>SEAFOOD RESTAURANT</p>
              <span>亚明海鲜大炒</span>
            </div>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-contact">
            <strong>019-276 5728</strong>
            <span>70200 Seremban, Negeri Sembilan</span>
          </div>

          <div className="copyright">
            © 2026 Ah Ming Seafood Restaurant. All rights reserved.
          </div>
        </footer>

      </div>
  );
}

export default App;