<template>
  <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 mt-auto">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023
        <a href="#" class="hover:underline"></a>
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="/" class="mr-4 hover:underline md:mr-6">Home</a>
        </li>
        <li>
          <router-link to="/by-name/:name" class="mr-4 hover:underline md:mr-6">Search Meals</router-link>
        </li>
        <li>
          <router-link to="/by-letter/:letter" class="mr-4 hover:underline md:mr-6">Meals By Letter</router-link>
        </li>
        <li>
          <router-link to="/ingredients/" class="mr-4 hover:underline md:mr-6">Ingredients</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

