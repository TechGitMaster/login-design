<template>
  <main>
    <div class="min-h-screen w-full font-inter bg-[#F0F0F0]">
      <header>
        <div class="flex justify-between items-center py-[26px] px-[34px] bg-white">
          <p class="text-[16px] font-bold">Jobored</p>
          <nav class="flex gap-[40px]">
            <p class="text-[12px] text-[#31B465] font-semibold">Find Projects</p>
            <p class="text-[12px] font-semibold">Reports</p>
            <p class="text-[12px] font-semibold">My Contracts</p>
            <p class="text-[12px] font-semibold">Request Project</p>
          </nav>
          <div class="flex items-center gap-[20px]">
            <img :src="pngs.Notif" alt="ico" class="h-[20px]">
            <img :src="pngs.Mark" alt="ico" class="h-[20px]">
            <img :src="pngs.Email" alt="ico" class="h-[20px]">
            <img :src="pngs.IcoPicture" alt="ico" class="h-[30px]">
          </div>
        </div>  
      </header>

      <section>
        <div class="gridHome5 py-[36px] px-[43px]">
          <div class="flex flex-col gap-4">
            <div class="w-full rounded-lg bg-white py-[7px] px-[5px] grid grid-cols-3">
              <div class="text-[11px] text-white text-center rounded-lg bg-black py-2 px-6 flex items-center justify-center">Best Matches</div>
              <div class="text-[11px] text-[#939393] text-center rounded-lg  py-3 px-6 flex items-center justify-center">Featured</div>
              <div class="text-[11px] text-[#939393] text-center rounded-lg  py-3 px-6 flex items-center justify-center">Most Recent</div>
            </div>


            <div v-for="(data, index) in '...'.split('')" class="py-[25px] px-[26px] rounded-lg bg-white flex flex-col gap-4">
                <div class="flex justify-between gap-[30px]">
                  <div class="flex gap-[14px]">
                    <img :src="pngs.Licon" alt="ico" class="h-[49px]">
                    <div class="flex flex-col gap-1">
                      <p class="font-semibold text-sm">Figma Designer</p>
                      <p class="font-medium text-[11px] text-[#6C6C6C]">We are looking for figma designers who can help desiging the entire mobile application ...</p>
                    </div>
                  </div>

                  <img :src="pngs.Mark" alt="ico" class="h-[20px]">
                </div>

                <div class="flex gap-2">
                  <div class="rounded-md bg-[#EFEFEF] py-1 px-2 font-medium text-[10px] text-[#656565]">Ui Designer</div>
                  <div class="rounded-md bg-[#EFEFEF] py-1 px-2 font-medium text-[10px] text-[#656565]">Figma</div>
                  <div class="rounded-md bg-[#EFEFEF] py-1 px-2 font-medium text-[10px] text-[#656565]">Landing Page</div>
                </div>

                <div class="flex justify-between items-center">
                  <img :src="pngs.Star" alt="ico" class="h-[11px]">

                  <div class="flex items-center gap-[14px]">
                    <div class="flex items-center gap-[4px]">
                      <img :src="pngs.FactCheck" alt="ico" class="h-[12px]">
                      <p class="font-medium text-[12px] text-[#838383]">Project Verified</p>
                    </div>

                    <p class="text-[12px] font-medium"><span>Proposals:</span> <span class="text-[#838383]">10 to 15</span></p>
                  </div>
                </div>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="w-full rounded-lg bg-white py-[7px] px-[5px] grid grid-cols-3">
              <div class="text-[11px] text-white text-center rounded-lg bg-black py-2 px-6 flex items-center justify-center">Best Matches</div>
              <div class="text-[11px] text-[#939393] text-center rounded-lg  py-3 px-6 flex items-center justify-center">Featured</div>
              <div class="text-[11px] text-[#939393] text-center rounded-lg  py-3 px-6 flex items-center justify-center">Most Recent</div>
            </div> 

            <div class="w-full rounded-lg bg-white flex flex-col gap-[52px] px-[21px] py-[23px]">
              <div class="flex justify-between">
                <div class="flex gap-[16px]">
                  <img :src="pngs.Licon" alt="ico" class="h-[49px]">
                  <div class="font-semibold">
                    <p class="text-[12px] text-[#6D6D6D]">ELITE LIMITED</p>
                    <p class="text-[18px]">Figma Designer</p>
                  </div>
                </div>

                <img :src="pngs.Mark" alt="ico" class="h-[20px]">
              </div>


              <div class="flex flex-col gap-[24px] ">
                <div class="flex flex-col gap-[9px]">
                  <p class="text-[14px] font-semibold ">Project Overview</p>
                  <p class="text-[12px] font-medium text-[#6C6C6C]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, itaque culpa? Modi placeat, corrupti magnam adipisci, perspiciatis repellendus possimus numquam tempora dolore hic voluptatum minus, voluptatibus exercitationem architecto totam a?</p>
                </div>  

                <div class="flex flex-col gap-[15px]">
                  <p class="text-[14px] font-semibold">Skills</p>
                  <div class="flex gap-[11px]">
                    <div class="rounded-sm bg-[#EFEFEF] py-[6px] px-[12px] text-[11px] font-medium text-[#656565]">Ui Designer</div>
                    <div class="rounded-sm bg-[#EFEFEF] py-[6px] px-[12px] text-[11px] font-medium text-[#656565]">Figma</div>
                    <div class="rounded-sm bg-[#EFEFEF] py-[6px] px-[12px] text-[11px] font-medium text-[#656565]">Landing Page</div>
                  </div>
                </div>

                <div class="w-full flex flex-col gap-[13px]">
                  <p class="text-[14px] font-semibold">Detail Project</p>
                  <div class="flex gap-[83px]">
                    <div>
                      <p class="text-[12px] font-medium mb-[9px]">5.00 of 48 reviews</p>
                      <img :src="pngs.Star" alt="ico" class="h-[12px]">
                    </div>

                    <div>
                      <p class="text-[12px] font-medium mb-[9px]">28 success project</p>
                      <div class="flex items-center gap-[4px]">
                        <img :src="pngs.FactCheck" alt="ico" class="h-[12px]">
                        <p class="font-medium text-[10px] text-[#838383]">Project Verified</p>
                      </div>
                    </div>

                    <div>
                      <p class="text-[12px] font-medium mb-[9px]">$60k+ total spent</p>
                      <div class="flex items-center gap-[4px]">
                        <img :src="pngs.FactCheck" alt="ico" class="h-[12px]">
                        <p class="font-medium text-[10px] text-[#838383]">Project Verified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex gap-[29px]">
                <div class="w-[60%] flex justify-between rounded-[4px] bg-[#EDEDED] py-[12px] px-[12px]">
                  <p class="text-[11px] font-medium text-[#646464]">https://jobored.com/job/8ffsys78</p>
                </div>
                <div class="w-[40%]">
                  <button class="w-full h-full rounded-[4px] bg-[#239852] text-[11px] text-white">Submit a Proposal</button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <div class="w-[228px] rounded-lg bg-white pb-5 pt-[33px] px-6 flex flex-col justify-between gap-[33px]">
              <div class="flex flex-col gap-[15px]">
                <div class="flex justify-center">
                  <img :src="pngs.IcoPicture2" alt="ico" class="h-[68px]">
                </div>

                <div>
                  <p class="text-[14px] text-center font-semibold w-full">Laura Sullivan</p>
                  <p class="text-[10px] text-center font-medium w-full text-[#A8A8A8]">Product Designer</p>
                </div>
              </div>

              <button class="flex-1 p-[12px] bg-[#EFEFEF] rounded-lg text-[11px] font-semibold">Edit Profile</button>
            </div>


            <div class="w-[228px] rounded-lg bg-white py-[20px] px-[23px] flex flex-col gap-[22px]">
              <div>
                <p class="text-[12px] font-semibold">Availabilty</p>
                <div class="rounded-[10px] inline-block bg-[#1DB75A] px-[8px] py-[4px] text-[10px] text-white font-semibold">🔥 Available for work</div>
              </div>
              
              <div>
                <p class="text-[12px] font-semibold">Connect & Amount</p>
                <p class="text-[10px] font-medium text-[#239852]">18 Available Connects</p>
                <p class="text-[10px] font-medium text-[#239852]">2 Submitted Proposal</p>
              </div>

              <div class="text-[#656565] text-[10px] font-medium">
                <p class="text-[12px] font-semibold">Skills and Expertise</p>
                <div class="inline-block rounded-md bg-[#EFEFEF] py-[6px] px-[8px] mt-[5px] mr-[5px]">
                  UI Designer
                </div>

                <div class="inline-block rounded-md bg-[#EFEFEF] py-[6px] px-[8px] mt-[5px] mr-[5px]">
                  UX Designer
                </div>

                <div class="inline-block rounded-md bg-[#EFEFEF] py-[6px] px-[8px] mt-[5px] mr-[5px]">
                  User Research
                </div>

                <div class="inline-block rounded-md bg-[#EFEFEF] py-[6px] px-[8px] mt-[5px] mr-[5px]">
                  Animation
                </div>

                <div class="inline-block rounded-md bg-[#EFEFEF] py-[6px] px-[8px] mt-[5px] mr-[5px]">
                  Landing Page
                </div>

                <div class="inline-block rounded-md bg-[#EFEFEF] py-[6px] px-[8px] mt-[5px] mr-[5px]">
                  Figma
                </div>
              </div>


              <button class="py-[12px] w-full rounded-lg bg-black text-white text-[11px] font-semibold text-center">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
  import pngs from '@/utilities/pngs';
</script>