<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Medical Clinic</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Custom styles for circular clip */
    .circle-clip {
      clip-path: circle(65% at right center);
    }
  </style>
</head>

<body class="bg-[#dcf4eb] font-poppins relative">

  <!-- Navigation Bar -->
  <nav class="flex items-center justify-between bg-gradient-to-r from-[#4bdfca] to-[#5edaba] rounded-[4.5rem] mx-4 mt-4 py-3 px-8 shadow-md">
    <!-- Logo -->
    <div class="flex items-center space-x-3">
      <img src="https://i.postimg.cc/rF52W2Wf/medilogo.png" alt="Logo" class="w-10 h-10 rounded-full object-cover" />
    </div>

    <!-- Menu -->
    <ul class="flex space-x-10 font-semibold text-black">
      <li><a href="#" class="hover:text-[#2d2d2d]">Home</a></li>
      <li><a href="#" class="hover:text-[#2d2d2d]">Services</a></li>
      <li><a href="#" class="hover:text-[#2d2d2d]">About Us</a></li>
      <li><a href="#" class="hover:text-[#2d2d2d]">Appointment</a></li>
      <li><a href="#" class="hover:text-[#2d2d2d]">Contact</a></li>
      <li><a href="#" class="hover:text-[#2d2d2d]">Privacy Policy</a></li>
    </ul>

    <!-- Sign In Button -->
    <button class="flex items-center gap-2 rounded-[2rem] border border-black/40 bg-gradient-to-r from-[#61e1c6] to-[#5edaba] py-2 px-5 text-black text-base font-normal hover:brightness-90 transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="black" viewBox="0 0 24 24" stroke="none">
        <path d="M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 11.001-7.999A4 4 0 0112 10z" />
      </svg>
      Sign in / Sign Up
    </button>
  </nav>

  <!-- Main Section -->
  <main class="px-10 mt-12 flex max-w-7xl mx-auto">
    <!-- Left Text Content -->
    <section class="flex-1 relative">
      <p class="text-green-400 tracking-widest font-semibold mb-3">WELCOME</p>
      <h1 class="text-5xl font-extralight mb-1 text-black">Medical Clinic that</h1>
      <h2 class="text-5xl font-extralight text-[#67b6aa] mb-4">You can Trust.</h2>
      <p class="max-w-lg text-sm text-black/80 mb-8">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </p>
      <button class="border-2 border-[#67b6aa] rounded-full px-8 py-2 text-[#67b6aa] font-semibold hover:bg-[#67b6aa] hover:text-white transition">
        Read More
      </button>

      <!-- Social media vertical fixed -->
      <div class="fixed top-[50%] left-0 flex flex-col space-y-4 bg-[#4bdfca] rounded-tr-lg rounded-br-lg py-4 px-2">
        <!-- Twitter -->
        <a href="#" class="text-white text-xl hover:text-black transition"><svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.1 9.1 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.12 12.85 12.85 0 01-9.3-4.7 4.52 4.52 0 001.4 6.05 4.48 4.48 0 01-2.05-.56v.06a4.53 4.53 0 003.63 4.44 4.53 4.53 0 01-2.04.08 4.54 4.54 0 004.22 3.17A9.06 9.06 0 013 19.54a12.84 12.84 0 006.96 2.04c8.36 0 12.93-6.92 12.93-12.93 0-.2 0-.39-.02-.58A9.22 9.22 0 0023 3z" />
          </svg></a>
        <!-- Facebook -->
        <a href="#" class="text-white text-xl hover:text-black transition"><svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
            <path
              d="M22 12a10 10 0 10-11.5 9.9v-7h-3.5v-3h3.5V9a4.5 4.5 0 014.7-4.9 18 18 0 012.7.2v3H16a1.5 1.5 0 00-1.5 1.5V12h3l-.5 3h-2.5v7A10 10 0 0022 12z" />
          </svg></a>
        <!-- Instagram -->
        <a href="#" class="text-white text-xl hover:text-black transition"><svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
            <path
              d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm1.25 3.5h5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm4.75-.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
          </svg></a>
        <!-- Youtube -->
        <a href="#" class="text-white text-xl hover:text-black transition"><svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
            <path
              d="M10 15l5-3-5-3v6zM12 2C6.48 2 2 6.48 2 12c0 2.18.72 4.19 1.91 5.83L4 22l4.17-.02A10 10 0 1012 2z" />
          </svg></a>
      </div>

    </section>

    <!-- Right Image with 27/7 badge -->
    <section class="relative w-96 ml-16">
      <img src="https://i.postimg.cc/MT5JdM9r/town-hospital.jpg" alt="Medical Clinic" class="rounded-lg shadow-lg" />
      <div
        class="absolute top-6 left-[-72px] w-44 h-44 circle-clip bg-[#4b9e9a] text-white shadow-lg flex flex-col items-center justify-center text-center font-semibold select-none">
        <p class="text-6xl font-light leading-none">27/7</p>
        <p class="tracking-widest text-sm mt-2">AVAILABLE</p>
      </div>
    </section>
  </main>

  <!-- Bottom service section -->
  <section class="flex justify-around mt-16 bg-[#5edaba] py-16 text-white max-w-7xl mx-auto rounded-lg shadow-inner">
    <div class="flex-1 max-w-xs text-center px-6 mx-2 hover:bg-[#4b9e9a] transition rounded-lg py-12 cursor-pointer">
      <h3 class="font-bold mb-2">Medical Advice and Checkups</h3>
      <p>Book your Appointment</p>
    </div>
    <div class="flex-1 max-w-xs text-center px-6 mx-2 hover:bg-[#3f7c78] transition rounded-lg py-12 cursor-pointer">
      <h3 class="font-bold mb-2">Medicines</h3>
      <p>Order your medicines</p>
    </div>
    <div class="flex-1 max-w-xs text-center px-6 mx-2 hover:bg-[#4b9e9a] transition rounded-lg py-12 cursor-pointer">
      <h3 class="font-bold mb-2">Emergency Help</h3>
    </div>
  </section>

</body>

</html>