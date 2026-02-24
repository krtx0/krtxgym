class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="w-full bg-white/95 backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 z-50">

        <div class="max-w-7xl mx-auto px-6">

          <div class="flex items-center justify-between h-16">

            <!-- Logo -->
            <a href="/" class="flex items-center gap-3">
              <i data-feather="activity" class="w-6 h-6 text-orange-600"></i>
              <span class="text-lg font-extrabold text-gray-900 tracking-wide">
                KRTX GYM
              </span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center gap-8
                        text-sm uppercase tracking-wider
                        font-medium text-gray-700">

              <a href="index.html" class="hover:text-gray-900 transition">Home</a>
              <a href="about.html" class="hover:text-gray-900 transition">About</a>
              <a href="#equipment" class="hover:text-gray-900 transition">Equipment</a>
              <a href="#programs" class="hover:text-gray-900 transition">Programs</a>

              <a href="#trial"
                 class="ml-2 bg-orange-600 hover:bg-orange-700
                        text-white font-semibold px-5 py-2
                        rounded-full transition-all duration-300">
                Claim Your Free Trial
              </a>

            </nav>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-button"
              class="md:hidden w-10 h-10 flex items-center justify-center
                     rounded-lg border border-gray-200 bg-gray-50">
              <i data-feather="menu" class="w-5 h-5 text-gray-800"></i>
            </button>

          </div>

        </div>

        <!-- MOBILE MENU (CENTERED) -->
        <div id="mobile-menu"
          class="hidden md:hidden bg-white border-t border-gray-200">

          <div class="flex flex-col items-center text-center
                      text-sm uppercase tracking-wider
                      font-medium text-gray-700
                      py-8 space-y-6">

            <a href="index.html" class="hover:text-gray-900 transition">Home</a>
            <a href="about.html" class="hover:text-gray-900 transition">About</a>
            <a href="#equipment" class="hover:text-gray-900 transition">Equipment</a>
            <a href="#programs" class="hover:text-gray-900 transition">Programs</a>
            <a href="#reviews" class="hover:text-gray-900 transition">Reviews</a>

            <a href="#trial"
              class="mt-2 bg-orange-600 hover:bg-orange-700
                     text-white font-semibold px-8 py-3
                     rounded-full transition">
              Claim Your Free Trial
            </a>

          </div>

        </div>

      </header>
    `;

    // mobile toggle
    const btn = this.querySelector("#mobile-menu-button");
    const menu = this.querySelector("#mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    if (typeof feather !== "undefined") {
      feather.replace();
    }
  }
}

customElements.define('custom-header', CustomHeader);
