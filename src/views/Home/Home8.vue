<template>
  <main class="font-jakarta text-darkPrimary">
    <!-- __Header navigation__ -->
    <!--<v-header></v-header>-->

    <section>
        <div class="mt-[56px] md:py-[84px] px-[16px]">

          <!-- __About Us__ -->
          <div class="mx-auto max-w-[700px] flex flex-col gap-[24px]">
            <div>
              <p class="font-Gloria-Hallelujah font-normal md:leading-[33px] leading-[24px] text-red2 md:text-[1.375rem] text-[1rem]">ABout Us</p>
              <p class="md:leading-[48px] leading-[36px] font-bold md:text-[2.5rem] text-[1.75rem]">Our Journey to Your Brighter Future</p>
            </div>

            <p class=" font-medium text-[#232027B8] text-base">We understand the pressures college admissions tests bring, but here at Academic Gateway (AG) 
              we are here to help! Our services are distinguished by our highly experienced young alumni and 
              scholars from the University of the Philippines Diliman and Ateneo de Manila University, who provide
              complete and high quality test preparation for competitive College Admissions Tests at the most reasonable cost.
              <br/><br/>
              As we are driven by our core belief that every student has the ability to succeed with the right resources, 
              preparation, and mindset, we have developed innovative teaching methods and test preparation curriculum to 
              help students achieve their test score potential and gain a better education for their future. 
              With Academic Gateway, ace that college admissions test and unlock the doors to a brighter 
              future! #AGBrightFuture #CollegeAdmissionsSuccess #TestPrep #HighQualityEducation</p>
          </div>
        </div>


        <!-- __Our Core Values__ -->
        <div class="md:pt-[84px] md:pb-[84px] py-[64px] px-[16px] relative">
          <div class="lg:mb-[97px] mb-[35px] mx-auto max-w-[700px]">
            <div class="mb-[24px]">
              <p class="font-Gloria-Hallelujah font-normal leading-[22px] text-red2 md:text-[1.125rem] text-[1rem]">Our Core Values</p>
              <p class="md:leading-[48px] leading-[36px] font-bold md:text-[2.5rem] text-[1.75rem]">Guiding Principles for Your Success</p>
            </div>

            <p class="font-medium text-[#232027B8] text-base">At Academic Gateway, our guiding principles drive everything we do. 
              We're committed to providing opportunities that break down financial barriers, offering expert support and mentorship
              from those who have been in your shoes, and continually exploring new approaches to help you excel.
              These principles form the foundation of our mission to empower you on your path to success.</p>
          </div>

          <div class="flex flex-wrap justify-center items-center md:gap-[72px] gap-[41.13px] font-jakarta">
            <div class="w-[300px]">
              <div class="h-[450px] min-w-[300px] p-2 relative flex">
                
                <!-- __Accessibility__ -->
                <div class="flex-1 bg-[#2D880C] -rotate-3 py-[61px] px-[24px] flex flex-col gap-[24px] z-10">
                  <div class="flex justify-center">
                    <img :src="pngsAg.Accessibility" alt="ico">
                  </div>
                  <p class="lg:leading-[40px] leading-[36px] font-bold text-white lg:text-[2rem] text-[1.75rem]">Accessibility</p>
                  <p class="font-medium text-white text-base">We believe everyone should have access to top-quality education, so we make it affordable and within reach for all aspiring students.</p>
                </div>

                <!-- __Intersect__ -->
                <p v-html="svgs.Intersect" class="h-full absolute left-[-3%] top-[-2%] text-[#2D880C]"></p>
              </div>
            </div>
            
            <!-- __Innovation__ -->
            <div class="w-[300px]">
              <div class="min-h-[450px] min-w-[300px] p-2 relative flex">
                <div class="flex-1 bg-[#9C1C1C] rotate-[1.7deg] py-[26px] px-[24px] flex flex-col gap-[24px] z-10">
                  <div class="flex justify-center -m-2">
                    <img :src="pngsAg.Innvogation" alt="ico">
                  </div>
                  <p class="lg:leading-[40px] leading-[36px] font-bold text-white lg:text-[2rem] text-[1.75rem]">Innovation</p>
                  <p class="font-medium text-white text-base">We stay ahead by constantly evolving our teaching methods and test preparation curricula. This commitment ensures you're well-equipped to excel in your exams and secure a brighter future.</p>
                </div>

                <!-- __Intersect__ -->
                <p v-html="svgs.Intersect" class="min-h-full absolute left-[-3%] top-[-2%] rotate-[5deg] text-[#9C1C1C]"></p>
              </div>
            </div>

            <!-- __Expertise__ --> 
            <div class="w-[300px]">
              <div class="h-[450px] min-w-[300px] p-2 relative flex">
                <div class="flex-1 bg-[#1623A4] -rotate-3 p-6 flex flex-col gap-[24px] z-10">
                  <div class="flex justify-center">
                    <img :src="pngsAg.Expertise" alt="ico">
                  </div>
                  <p class="lg:leading-[40px] leading-[36px] font-bold text-white lg:text-[1rem] text-[1.75rem]">Expertise</p>
                  <p class="font-medium text-white text-base">Our experienced alumni bring a unique perspective to your test preparation, having successfully navigated the journey themselves. They're here to guide you every step of the way.</p>
                </div>

                <!-- __Intersect__ -->
                <p v-html="svgs.Intersect" class="h-full absolute left-[-3%] top-[-2%] text-[#1623A4]"></p>
              </div>
            </div>
          </div>

  
        </div>


        <!-- __AG Faculty__ -->
        <div class="bg-no-repeat bg-cover bg-top md:py-[84px] py-[64.95px] px-[16px] relative" :style="{ 'background-image': `url('${pngsAg.Bg}')` }">

          <!-- __Intersect__ -->
          <img :src="pngsAg.Intersect" alt="ico" class="min-w-full min-h-[21px] absolute top-0 left-0" />
          
          <div class="mb-[84px] mx-auto max-w-[700px]">
            <div class="mb-[24px]">
              <p class="font-Gloria-Hallelujah font-normal md:leading-[22px] text-red2 md:text-[1.125rem] text-base">About Us</p>
              <p class="md:leading-[48px] leading-[36px] font-bold md:text-[2.5rem] text-[1.5rem]">The AG Faculty</p>
            </div>

            <p class="font-medium text-[#232027B8] text-base">
              Are you or someone you love applying for college? Here at AG, we have the perfect solution! 
              Our instructors are the best of the best – top graduates of UP Diliman and staff members at UP Diliman,
               Ateneo, and De La Salle. With their expertise, they’ll help build student confidence and assist with 
               long-term strategies, techniques, and skills that can be applied to the challenging College Admissions Tests. 
               AG instructors focus on providing lasting positive impacts that can help you or your student achieve success. 
               So, don’t miss this opportunity and get started with AG!
              <br/><br/>
              AG instructors are experts in their field. AG instructors can break complex topics down into easier-to-understand parts. 
              They explain the subject using simple language and provide examples to help the reader understand the material.
            </p>
          </div>

          <!-- __Teachers, Faculty__ -->
          <div class="mx-auto max-w-[1200px] flex flex-wrap justify-center md:gap-[32px] gap-[16px] font-jakarta">
            <div v-for="(text, index) in agFaculity" class="flex flex-col gap-[24px] md:w-[30%] w-[47%]">
              <div class="px-[21.92px]">
                <div 
                v-if="text.Info !== 'Faculty'"
                class="flex justify-center"> 
                  <div class="w-full h-[400px] bg-gray-light"></div>
                </div>
              </div>
              <div class="flex-1 flex md:px-[38.5px]">
                <div class="flex-1 flex flex-col justify-center bg-white py-2 px-4">
                  <p class="font-bold text-base text-red2 text-center w-full mb-[2px]">{{ text.Name }}</p>
                  <p class="leading-[22px] font-medium text-[0.875rem] text-[#232027B8] text-center">{{ text.Info }}</p>
                </div>
              </div>
            </div> 
          </div>
        </div>


        <!-- __Message to Students__ -->
        <div class="md:py-[84px] pt-[84px] pb-[64px]">
          <div class="w-full flex flex-col gap-12">
            <div class="px-[16px]">
              <p class="font-Gloria-Hallelujah font-normal md:leading-[33px] text-red2 md:text-[1.125rem] text-base text-center">Words of Wisdom from Our Faculty</p>
              <p class="md:leading-[48px] leading-[36px] font-bold md:text-[2.5rem] text-[1.75rem] text-center">Faculty Messages to Students</p>
            </div>

            <div class="mx-auto md:max-w-[1200px] w-full px-4">
              <swiper 
              :slides-per-view="1.2"
              :spaceBetween="24"
              :breakpoints="{
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 3.2 },
                640: { slidesPerView: 2.2 },
              }">
                <swiper-slide 
                v-for="(text, index) in faculityMessage">
                  <div class="h-[400px] rounded-3xl bg-gray-light"></div>
                  <div>
                    <p class="font-bold text-base text-red2 text-center w-full mb-[2px]">{{ text.Name }}</p>
                    <p class="leading-[22px] font-medium text-[0.875rem] text-[#232027B8] text-center">{{ text.Info }}</p>
                  </div>
                </swiper-slide>  
              </swiper>
            </div>
          </div>
        </div>


        <!-- __Memorable Moments__ -->
        <div class="md:px-[84px] px-[16px] md:pt-[42px] pb-[126px]">
        
          <div class="mx-auto max-w-[1200px]">
            <div class="mb-[64px]">
              <p class="font-Gloria-Hallelujah font-normal md:leading-[33px] text-red2 md:text-[1.125rem] text-base text-center">Memorable Moments</p>
              <p class="md:leading-[48px] leading-[36px] font-bold md:text-[2.5rem] text-[1.75rem] text-center">Captured Times We'll Treasure</p>
            </div>
          
            <div class="flex flex-col items-center gap-[115px]">
              <div class="flex gap-6">
                <div class="w-[500px] h-[375px] rounded-3xl bg-gray-light"></div>
                <div class="w-[500px] h-[375px] rounded-3xl bg-gray-light"></div>
              </div>
            
              <div class="flex gap-6">
                <div class="w-[500px] h-[375px] rounded-3xl bg-gray-light"></div>
                <div class="w-[500px] h-[375px] rounded-3xl bg-gray-light"></div>
              </div>
            </div>
          </div>

        </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import pngsAg from '@/utilities/pngsAG';
  import svgs from '@/utilities/svgsAG';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  import 'swiper/css';

  import 'swiper/css/free-mode';
  import 'swiper/css/pagination';

  // AG Faculty ______________________
  let agFaculity = [
    {
      Name: 'Marvin Gonzales',
      Info: 'Master of Science, Architecture, University of the Philippines Diliman, 2013'
    },
    {
      Name: 'Rowena Cabrera',
      Info: 'Master of Arts in Urban and Regional Planning, University of the Philippines Diliman, 1992'
    },
    {
      Name: 'Mina Tamayo',
      Info: 'Master of Arts in Urban and Regional Planning, University of the Philippines Diliman, 1992'
    },
    {
      Name: 'Jessa Delos Santos',
      Info: 'Master of Fine Arts, University of the Philippines Diliman (ongoing)'
    },
    {
      Name: 'Arianne Dee',
      rotation: -6,
      Info: 'Bachelor of Science in Architecture, Polytechnic University of the Philippines, 1994'
    },
    {
      Name: 'Glen Jann Cordova',
      rotation: -6,
      Info: 'Master of Science, Architecture, University of Santo Tomas, 2007'
    }
  ];

  agFaculity = [...agFaculity, ...`Talan Vetrovs,Jaylon George,Justin George,Zaire Rosser,Jaxson Stanton,Randy Workman,
  Nolan Torff,Desirae Press,Ashlynn Dokidis,Kaylynn Workman,Cooper Levin,Alena Westervelt,Ann Vetrovs,Angel Saris,Dulce Bergson,
  Anika Mango,Craig Gouse,Lincoln Westervelt,Dulce Carder,Kadin Carder,Ahmad Rhiel Madsen`
  .split(',')
  .map((a) => { return { Name: a, Info: 'Faculty' } })]


  // Faculity Message _________________
  const faculityMessage = 'Marvin Gonzales,Arianne Dee,Mina Tamayo,Sebastian Reyes'.split(',').map((a) => { return { Name: a, Info: 'Faculty' } });


</script>