<template>
  <div class="bg-gray-100 h-full">
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <!-- Logo -->
          <div class="flex flex-shrink-0 items-center">
            <router-link class="text-xl text-white" :to="{ name: 'home' }">
              Wez
            </router-link>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden sm:block">
            <div class="flex space-x-4">
              <router-link
                to="/"
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                active-class="bg-gray-900 text-white"
              >
                Home
              </router-link>
              <router-link
                to="/by-name/:name"
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                active-class="bg-gray-900 text-white"
              >
                Search Meals
              </router-link>
              <router-link
                to="/by-letter/:letter"
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                active-class="bg-gray-900 text-white"
              >
                Meals by Letter
              </router-link>
              <router-link
                to="/ingredients/"
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                active-class="bg-gray-900 text-white"
              >
                Meals By Ingredients
              </router-link>
            </div>
          </div>

          <!-- Mobile Menu -->
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden"
          >
            <!-- Mobile menu button-->
            <button
              type="button"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <!-- Menu icon when menu is closed -->
              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <!-- Menu icon when menu is open -->
              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <router-link
            :to="{ name: 'home' }"
            class="text-white block rounded-md px-3 py-2 text-base font-medium"
            active-class="bg-gray-900"
          >
            Home
          </router-link>
          <router-link
            to="/by-name/:name"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Search Meals
          </router-link>

          <router-link
            to="/by-letter/:letter"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Meals by Letter
          </router-link>
          <router-link
            to="/ingredients/"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Meals By Ingredients
          </router-link>
        </div>
      </div>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>
