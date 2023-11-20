<template>

  <main>
    <section>
      <div class="min-h-[100vh] flex">
        <div class="w-[55%] flex items-center justify-center py-[248px]">
          <div class="flex-1 flex flex-col gap-[103px]">
            <div class="font-poppins">
              <p class="text-center text-[20px]">Sign up to</p>
              <p class="text-center text-[40px] font-semibold">abc.com</p>
              <p class="text-center text-[16px] font-light text-[#8D8D8D]">Are you looking for a remote job or hireing remote talent?</p>
            </div>

            <div class="flex-1 flex justify-center">
              <div class="w-[70%] flex flex-col gap-7">
                <div class="borders-1 rounded-2xl flex-1 flex items-center gap-5 px-6 py-4 relative">
                  <div class="flex items-center">
                    <img :src="pngs.Ellipse" alt="ico" class="h-[35px]">
                    <img :src="pngs.Ellipse" alt="ico" class="h-[45px] -ml-[10px] z-10">
                    <img :src="pngs.Ellipse" alt="ico" class="h-[35px] -ml-[10px]">
                  </div>

                  <div class="font-poppins">
                    <p class="font-semibold text-[20px]">Im a remote worker</p>
                    <p class="font-light text-[16px]">Im an employee looking for a remote job</p>
                  </div>

                  <div class="absolute top-[10px] right-[12px]">
                    <input type="radio" class="h-[20px] w-[20px]">
                  </div>
                </div> 


                <div class="borders-black-1 rounded-2xl flex-1 flex items-center gap-5 px-6 py-4 relative">
                  <div class="flex items-center">
                    <img :src="pngs.Ellipse" alt="ico" class="h-[35px]">
                    <img :src="pngs.Ellipse" alt="ico" class="h-[45px] -ml-[10px] z-10">
                    <img :src="pngs.Ellipse" alt="ico" class="h-[35px] -ml-[10px]">
                  </div>

                  <div class="font-poppins">
                    <p class="font-semibold text-[20px]">I want to hire employees</p>
                    <p class="font-light text-[16px]">I'm on employer hiring remote talent</p>
                  </div>

                  <div class="absolute top-[10px] right-[12px]">
                    <input type="radio" class="h-[20px] w-[20px]">
                  </div>
                </div> 
              </div> 
            </div>

            <p class="font-poppins text-[16px] text-center">
              Already have an account? 
              <span class="ml-2 font-medium text-[20px] cursor-pointer">Sign in</span>
            </p>
          </div>  
        </div>

        <div 
          class="w-[45%] bg-no-repeat bg-cover px-[74px] py-[170px] font-poppins" 
          :style="{ 'background-image': `url('${ pngs.BgHome2 }')`}">

          <p class="font-semibold text-[24px] mb-[49px]">abc.com is the best place to find remote talent. We've been super impress by the quality of applicants.   </p>
          <p class="Madhushan text-[16px]">Madhushan sasanka</p>
          <p class="font-medium text-[#8C8C8C]">CEO, abc.com</p>
        </div>
      </div>
    </section>
  </main>

</template>

<script setup lang="ts">
  import pngs from '@/utilities/pngs';

</script>