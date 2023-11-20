<template>

  <main>
    <section>
      <div class="min-h-[100vh] flex font-poppins">
        <div class="w-[55%] pt-[100px] pb-[35px] pl-[66px] pr-[136px] text-white bg-no-repeat bg-center bg-cover flex flex-col justify-between" 
        :style="{ 'background-image': `url('${pngs.BgHome3}')` }">
          <p class="font-bold text-[40px]">abc.com</p>
          <p class="font-medium text-[32px] -mt-[40px]">abc.com is the best place to find remote talent. We’ve been super impress by the quality of applicants.</p>
          
          <div>
            <p class="text-[20px]">Madhushan sasanka</p>
            <p class="font-medium text-[16px]">CEO, abc.com</p>
          </div>
        </div>

        <div class="w-[45%] pt-[200px] pb-[41px] px-[99px]">
          <div class="flex flex-col gap-[154px]">
            <div class="flex flex-col gap-[68px]">
              <div>
                <p class="font-medium text-[32px]">Create an account</p>
                <p class="font-light text-[16px] text-[#8D8D8D]">Let's get started with your 30 days free trial</p>
              </div>

              <div class="flex flex-col gap-7">
                <div class="text-[16px]">
                  <p>Name</p>
                  <input type="text" class="w-full py-[10px] focus:outline-none"  placeholder="First Name" style="border-bottom: 1px solid black;">
                </div>
                <div class="text-[16px]">
                  <p>Email</p>
                  <input type="text" class="w-full py-[10px] focus:outline-none"  placeholder="Email" style="border-bottom: 1px solid black;">
                </div>
                <div class="text-[16px]">
                  <p>Password</p>
                  <input type="text" class="w-full py-[10px] focus:outline-none"  placeholder="Password" style="border-bottom: 1px solid black;">
                </div>
              </div>


              <div class="flex flex-col gap-[20px]">
                <button class="flex-1 bg-black p-[18px] text-white text-[18px] font-medium rounded-2xl">Create Account</button>
                <button 
                  class="flex-1 p-[18px] text-[18px] font-medium rounded-2xl flex justify-center items-center borders-black-1"> 
                  <img :src="pngs.GoogleBlack" alt="ico" class="h-[23px] mr-4">
                  Sign up with Google
                </button>
              </div>
            </div>


            <p class="text-center text-[16px]">Already have an account? <span class="text-[#3EC1F3] font-medium ml-2 text-[20px] cursor-pointer">Sign in</span></p>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<script setup lang="ts">
  import pngs from '@/utilities/pngs';
</script>