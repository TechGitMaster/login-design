<template>
  <main class="min-h-[100vh] flex items-center pl-[136px] py-[96px] relative">
    <section class="z-10">
      <div class="flex flex-col gap-12 max-w-[504px]">
        <p class="font-poppins text-5xl font-bold">Sign Up</p>
        <div class="signUp font-poppins font-bold text-[16px] items-center text-pink">Sign up with</div>

        <!-- __External login__ -->
        <div class="flex gap-[14px]">
          <button 
            class="flex-1 flex justify-center items-center gap-3  rounded-lg px-3 py-4 font-poppins text-[12px] text-gray-light borders-2">
            <img :src="pngs.Google" alt="ico" class="h-[24px]">
            Continue with Google
          </button>

          <button 
            class="flex-1 rounded-lg px-3 py-4 font-poppins text-[12px] text-gray-light flex justify-center items-center gap-3" 
            style="border:2px solid #E8E8E8;">
            <img :src="pngs.Facebook" alt="ico" class="h-[24px]">
            Continue with Facebook
          </button>
        </div>

        <p class="w-full text-center font-poppins text-[20px] font-bold">or</p>

        <!-- __Internal login__ -->
        <div class="flex flex-col gap-6">
          <div class="flex gap-[14px]">

            <!-- ==Name== -->
            <div class="flex-1 flex flex-col gap-[14px] font-poppins text-[14px] ">
              <p>Name</p>
              <input type="text" class="w-full rounded-lg px-4 py-[14px] borders-2 " placeholder="abc">
            </div>
            
            <!-- ==Email== -->
            <div class="flex-1 flex flex-col gap-[14px] font-poppins text-[14px] ">
              <p>Email</p>
              <input type="text" class="w-full rounded-lg px-4 py-[14px] borders-2 " placeholder="abc@abc.com">
            </div>
          </div>

          <!-- ==Password== -->
          <div class="flex-1 flex flex-col gap-[14px] font-poppins text-[14px] ">
            <p>Password</p>
            <input type="password" class="w-full rounded-lg px-4 py-[14px] borders-2 " placeholder="*********">
          </div>

          <!-- ==Policy== -->
          <div class="flex gap-5">
            <input type="checkbox" 
            class="w-[20px] h-[20px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            style="border: 1px solid #E3E2E2">

            <p class="w-[70%] text-[14px] font-poppins">I've read and agree with terms of service and our privecy policy</p>
          </div>
        </div>

        <div>
          <button class="rounded-[40%] bg-pink shadow-xl p-[29px] mb-8">
            <img :src="pngs.Arrow" alt="ico" class="h-[22px]">
          </button>

          <p class="font-poppins text-[16px]">Already have an account? <span class="text-pink font-medium ml-2 cursor-pointer">Sign in</span></p>
        </div>
      </div>
    </section>

    <div class="absolute right-0 bottom-0">
      <div class="relative">
        <img :src="pngs.Pointer" alt="ico" class="absolute top-[52%] left-[18%] z-10 animate-bounce">
        <img :src="pngs.Happy" alt="ico" class="">
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import pngs from '@/utilities/pngs';
</script>