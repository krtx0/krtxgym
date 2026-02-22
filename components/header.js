class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="w-full bg-white border-b">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex items-center justify-between py-5">

            <!-- Logo -->
            <a href="/" class="flex items-center gap-2">
              <i data-feather="activity" class="w-6 h-6 text-orange-600"></i>
              <span class="text-xl font-extrabold text-gray-900">
                KRTX GYM
              </span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center gap-8 font-medium text-gray-700">
              <a href="index.html" class="hover:text-gray-900">Home</a>
              <a href="about.html" class="hover:text-gray-900">About</a>
              <a href="#equipment" class="hover:text-gray-900">Equipment</a>
              <a href="#programs" class="hover:text-gray-900">Programs</a>
              <a href="#trial"
                 class="ml-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full transition">
                Claim Your Free Trial
              </a>
            </nav>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-button" class="md:hidden text-gray-800">
              <i data-feather="menu" class="w-6 h-6"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
          <div class="px-6 py-4 space-y-4 font-medium text-gray-700">
            <a href="#about" class="block">About</a>
            <a href="#equipment" class="block">Equipment</a>
            <a href="#programs" class="block">Programs</a>
            <a href="#reviews" class="block">Reviews</a>

            <a href="#trial"
               class="block bg-orange-600 text-white text-center py-2 rounded-full">
              Claim Your Free Trial
            </a>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('custom-header', CustomHeader);
