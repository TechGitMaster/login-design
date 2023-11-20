<template>

  <main>
    <section>
      <div class="min-h-screen flex font-poppins z-10 relative" style="background: linear-gradient(to right, #f18db7, #FFFF);">
      <img :src="pngs.Happy2" alt="ico" class="absolute left-0  bottom-0">
        <div class="w-[46%] py-[55px]">
          <p class="text-[40px] font-semibold ml-[66px]">abc.com</p>
        </div>

        <div class="w-[54%] pt-[200px] pb-[37px]">
          <div class="flex flex-col gap-[118px]">
            <div>
              <p class="text-[32px] font-medium">Create an account</p>
              <p class="text-[16px] font-light text-[#8D8D8D]">Share your thoughts with the world from today </p>
            </div>
            <div class="flex flex-col gap-[56px]">
              <p class="text-[16px] text-[#8D8D8D]">Continue with...</p>

              <div class="flex gap-[18px] pr-[66px] ">
                <div class="flex-1 flex flex-col justify-center h-[200px] borders-pink p-2 rounded-lg">
                  <div class="flex justify-center">
                    <img :src="pngs.FacebookBlack" alt="ico" class="h-[31px]" />
                  </div>
                  <p class="text-[20px] text-center font-medium mt-[20px]">Facebook</p>
                </div>

                <div class="flex-1 flex flex-col justify-center h-[200px] borders-pink p-2 rounded-lg">
                  <div class="flex justify-center">
                    <img :src="pngs.GoogleBlack" alt="ico" class="h-[31px]" />
                  </div>
                  <p class="text-[20px] text-center font-medium mt-[20px]">Google</p>
                </div>

                <div class="flex-1 flex flex-col justify-center h-[200px] borders-pink p-2 rounded-lg">
                  <div class="flex justify-center">
                    <img :src="pngs.EmailBlack" alt="ico" class="h-[31px]" />
                  </div>
                  <p class="text-[20px] text-center font-medium mt-[20px]">Email address</p>
                </div>
              </div>

              <p class="text-[16px]">Already have an account? <span class="font-medium text-[20px] text-[#FA5D9E] cursor-pointer">Sign in</span></p>
            </div>

            <p class="text-[#8D8D8D] text-[16px] mt-[50px]">By Register you agree with <span class="text-[#FA5D9E]">terms and conditions</span> and <span class="text-[#FA5D9E]">privercy policy</span></p>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<script setup lang="ts">
  import pngs from '@/utilities/pngs';
</script>