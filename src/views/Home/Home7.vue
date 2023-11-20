<template>
  <main class="font-jakarta text-darkPrimary">
    
    <!-- __Header navigation__ -->
    <!--<v-header></v-header>-->

    <section>

      <!-- __Get in Touch__ -->
      <div class="mt-[56px] md:p-[84px] pb-[32px] px-4 flex flex-col gap-[64px]">
        <div>
          <p class="font-Gloria-Hallelujah md:leading-[33px] text-red2 md:text-[1.375rem] text-base text-center">Get in Touch</p>
          <p class="font-jakarta md:leading-[40px] leading-7 font-bold md:text-[2rem] text-[1.75rem] text-center">We're Here to Assist You</p>
        </div>

        <!-- __Information__ -->
        <div class="flex md:flex-row flex-col gap-[24px] font-jakarta">

          <!-- __Image__ -->
          <div class="flex-1"></div>

          <div class="flex-1 flex flex-col gap-[24px]">

            <!-- __Address__ -->
            <div>
              <p class="mb-[16px] font-semibold leading-[28px] md:text-[1.5rem] text-[1.25rem]">Address</p>

              <div class="flex flex-col gap-[16px] ml-[16px]">
                <div  
                  v-for="(text, index) in infoAddress"
                  class="flex gap-[8px]">
                  <img :src="pngsAg.Pin" alt="ico" class="h-[24px]">
                  <div>
                    <div class="font-medium text-[#232027B8] text-base mb-[8px]">
                      <p>{{ text.Title }}</p>

                      {{ text.TitleInfo }}
                    </div>
                    
                    <p class="leading-[22px] text-[#232027B8] text-[0.875rem]">{{ text.Info }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- __AG Contact Numbers__ -->
            <div>
              <p class="mb-[16px] font-semibold leading-[30px] text-[1.5rem]">AG Contact Numbers</p>
              <div class="flex flex-col gap-[16px] pl-[16px]">
                <div 
                  v-for="(text, index) in infoAGContact"
                  class="flex flex-col gap-[16px]">
                  <p class="font-medium text-[#232027B8] text-base">{{ text.Title }}</p>

                  <div 
                    v-for="(info, index) in text.ContactInfo"
                    class="flex items-center gap-[8px]">
                    <img 
                      :src="info.Img" 
                      alt="ico" 
                      :class="{ 'h-[18px]': info.ImgName === null,
                                'h-[24px]': info.ImgName === 'message' }">

                    <p class="font-medium text-[#232027B8] text-base">{{ info.Contact }}</p>
                  </div>
                </div>

              </div>
            </div>

            <!-- __Social Media__ -->
            <div>
              <p class="mb-[16px] font-semibold leading-[28px] text-[1.5rem]">Social Media</p>
              <div class="flex flex-col gap-[16px] ml-[16px]">
                <div class="flex gap-[8px]">
                  <img :src="pngsAg.Facebook" alt="ico" class="h-[24px]">
                  <div class="md:flex block gap-2">
                    <a href="https://www.facebook.com/academicgatewaytestprepcenterph" target="_blank" class="font-medium text-[#3062D4] text-base underline">Facebook</a>
                    <p class="font-medium text-[#232027B8] text-base">Academic Gateway Test Prep PH</p>
                  </div>
                </div>

                <div class="flex gap-[8px]">
                  <img :src="pngsAg.Insta" alt="ico" class="h-[24px]">
                  <div class="md:flex block gap-2">
                    <a href="https://www.instagram.com/academicgatewayph" target="_blank" class="font-medium text-[#3062D4] text-base underline">Instagram</a>
                    <p class="font-medium text-[#232027B8] text-base">Academic Gateway</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- __Got Questions?__ -->
      <div class="md:py-[84px] py-[64px] px-[16px]">
        <div>
          <p class="font-Gloria-Hallelujah md:leading-[33px] text-red2 md:text-[1.375rem] text-base text-center">FAQ</p>
          <p class="font-jakarta md:leading-[40px] leading-[36px] font-bold md:text-[2rem] text-[1.75rem] text-center">Got Questions? We've Got Answers!</p>
        </div>

        <!-- __Information__ -->
        <div class="mx-auto max-w-[900px] md:my-[64px] my-[32px] flex flex-col gap-[12px] font-jakarta "> 
          <Disclosure v-slot="{ open }" v-for="(text, index) in infoGotQuestion">
            <DisclosureButton>
              <div class="pb-[12px]" style="border-bottom: 1px solid #2222223D">
                <div class="flex justify-between items-center p-3">
                  <span class="leading-[28px] font-bold md:text-[1.5rem] text-[1.25rem] !text-left">{{ text }}</span>
                  <img 
                    :src="pngsAg.Arrow" 
                    alt="ico" 
                    class="w-[44px] h-[37px]" 
                    :class="!open && 'rotate-180'" >
                </div>
              </div>
            </DisclosureButton>
            <DisclosurePanel>
              <div class="px-[24px] pb-[24px] font-medium text-[#232027B8] text-base">
                Our review program is designed for students preparing for college admissions tests, such as the UPCAT. It is open to high school students aspiring to gain admission to top universities in the Philippines.
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>

        <div class="flex justify-center">
          <p class="font-jakarta font-medium text-red2 text-base text-center mx-auto cursor-pointer">Load More</p>
        </div>
      </div>

    </section>
  </main>
</template>

<script setup lang="ts">
  import pngsAg from '@/utilities/pngsAG';
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';


  // Address _________________
  const infoAddress = [
    {
      Title: 'Academic Gateway Katipunan',
      TitleInfo: '2nd Floor Unit 207 Xanland Place Condominium 323 Katipunan Avenue, Loyola Heights, Quezon City',
      Info: 'In front of Ateneo Gate 3, in the same building with Security Bank Katipunan, near KFC'
    },
    {
      Title: 'Academic Gateway Taft-Vito Cruz',
      TitleInfo: 'Lower Ground Floor Torre Lorenzo 1Taft Avenue corner Vito Cruz, Manila',
      Info: 'In the same building with Starbucks Vito Cruz across Jollibee, near De La Salle Taft and the LRT Vito Cruz Station'
    },
    {
      Title: 'Academic Gateway North EDSA-West Ave',
      TitleInfo: '5th Floor West Insula Condominium 135 West Avenue, Quezon City',
      Info: 'Near the corner of EDSA and West Avenue across SM City North EDSA, walking distance from the MRT North Avenue Station, landmarks: beside Jollibee West Avenue-EDSA, near Emerson'
    },
  ];


  // AG Contact Numbers _________________
  const infoAGContact = [
    {
      'Title': 'Landline',
      'ContactInfo': [ { 
        Img: pngsAg.Landline,
        Contact: '02) 8805-2609'
       },
       { 
        Img: pngsAg.Landline,
        Contact: '(02) 7978-3388'
       } ]
    },
    {
      'Title': 'Mobile',
      'ContactInfo': [ { 
        Img: pngsAg.Landline,
        Contact: '0917-875-5188'
       },
       { 
        Img: pngsAg.Landline,
        Contact: '0917-880-2441'
       },
       { 
        Img: pngsAg.Message,
        ImgName: 'message',
        Contact: 'registrar@academicgateway.eduction'
       } ]
    }
  ];

  
  // Got Question? ___________________________
  const infoGotQuestion = ['How much is the tuition fee for the review classes', 
                            'What are the class schedules offered?', 
                            'What are the discount offers?', 'How to Enroll'];

</script> 