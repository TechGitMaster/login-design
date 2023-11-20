<template>
  <header class="fixed w-full top-0 z-20">
    <nav>
      <div class="px-[48px]">
        <div 
        class="w-full h-[68px] mt-[24px] p-[16px] rounded-[36px] 
        text-[12px] font-bold
        flex justify-between items-center shadow-lg bg-white" style="border:1px solid rgb(255, 255, 255);">
          <img :src="pngsAg.logo" alt="ico" class="h-[23px]">
          <div class="flex items-center gap-8 uppercase">
            <div>Why Choose AG</div> 
            <div>review programS</div> 
            <div>Face-to-face classes</div> 
            <div>live online classes</div>
            <div>Contact us</div>
            <img :src="pngsAg.Burger" alt="ico" class="h-6">
            <button class="rounded-[42px] bg-red uppercase text-white font-bold px-4 py-2">Enroll Now</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import pngsAg from '@/utilities/pngsAG';
</script>