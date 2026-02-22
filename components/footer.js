class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        footer {
          background: #0f172a;
          color: #cbd5e1;
          padding: 80px 24px 32px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 48px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .muted {
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.7;
        }

        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .links a {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #94a3b8;
          text-decoration: none;
          font-size: 14px;
          margin-bottom: 12px;
          transition: all 0.2s ease;
        }

        .links a:hover {
          color: #f97316;
          transform: translateX(4px);
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          font-size: 14px;
        }

        .stars i {
          color: #f97316;
          width: 16px;
          height: 16px;
        }

        .cta {
          margin-top: 24px;
          display: inline-block;
          background: #f97316;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 999px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .cta:hover {
          background: #ea580c;
        }

        .bottom {
          margin-top: 64px;
          padding-top: 24px;
          border-top: 1px solid #1e293b;
          text-align: center;
          font-size: 13px;
          color: #64748b;
        }
      </style>

      <footer>
        <div class="container">

          <!-- Brand -->
          <div>
            <div class="brand">
              <i data-feather="activity"></i>
              KRTX GYM
            </div>
            <p class="muted">
              Mumbai’s premium gym built for serious training,
              elite equipment, and real physical transformation.
            </p>
            <p class="muted" style="margin-top:12px; display:flex; align-items:center; gap:6px;">
              <i data-feather="map-pin" style="width:14px;height:14px;"></i>Mumbai
            </p>
          </div>

          <!-- Links -->
          <div class="links">
            <div class="section-title">Quick Links</div>
            <a href="/"><i data-feather="chevron-right"></i> Home</a>
            <a href="#about"><i data-feather="chevron-right"></i> About</a>
            <a href="#equipment"><i data-feather="chevron-right"></i> Equipment</a>
            <a href="#programs"><i data-feather="chevron-right"></i> Programs</a>
            <a href="#reviews"><i data-feather="chevron-right"></i> Reviews</a>
            <a href="#contact"><i data-feather="chevron-right"></i> Contact</a>
          </div>

          <!-- Ratings -->
          <div>
            <div class="section-title">Our Reputation</div>

            <div class="rating">
              <div class="stars">
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
              </div>
              <span>5.0 Google Rating (50+ Reviews)</span>
            </div>

            <div class="rating">
              <i data-feather="award" style="color:#f97316;"></i>
              <span>#1 Rated Gym</span>
            </div>

            <a href="#trial" class="cta">Book Free Trial</a>
          </div>

        </div>

        <div class="bottom">
          © 2025 KRTX GYM Gym. All rights reserved.
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
