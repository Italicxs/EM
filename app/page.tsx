import Image from 'next/image'
import Me from '@/public/selfie.jpg'

export default function Home() {
  
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Home
        </h1>
      </div>

      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image alt="" src={Me} className="h-48 w-48 rounded-full object-cover object-top"></Image>
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">Emiliano Machado</h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">
            Freelancer, Developer, I create web experiences for end-users and sales
          </p>

          <div className="flex space-x-5 pt-6">
          <a href='https://drive.google.com/file/d/1pwXHpRZqS5xMJMDLixH_-DO0oB3tUZdJ/view?usp=sharing' target="_blank" rel="noopener noreferrer">
          <svg 
          viewBox="0 0 24 24"
          fill="currentColor"
          className='w-8 h-8 text-[#ffbe0b] hover:text-[#ffbe0b]'
          >
      <path d="M18 2h-6v7L9.5 7.5 7 9V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4a2 2 0 00-2-2m-.32 16.41c-.11.09-1.21.84-1.63 1.09-.42.29-2.05 1.22-1.79-.58.63-3.64 1.85-5.8.39-4.86-.38.23-.6.37-.74.44-.13.11-.12.1-.23-.09s-.15-.18-.01-.28c0 0 2.23-1.79 3.05-1.85.78-.07.59.89.52 1.33-.46 1.85-1.3 4.54-1.17 4.93.11.39.93-.23 1.37-.54 0 0 .06-.07.17.05.11.17.22.25.07.36m-.71-7.35c-.57 0-1.03-.46-1.03-1.03 0-.57.46-1.03 1.03-1.03.57 0 1.03.46 1.03 1.03 0 .57-.46 1.03-1.03 1.03z" />
    </svg>
          </a>
          <a href="www.linkedin.com/in/emiliano-machado-9b3aaa203" target="_blank">
          <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          className='w-8 h-8 text-[#ffbe0b] hover:text-[#ffbe0b]'
        >
          <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
        </svg>
          </a>
          <a href="/Contact" target="_blank">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            className='w-8 h-8 text-[#ffbe0b] hover:text-[#ffbe0b]'
          >
            <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
          </svg>
          </a>
          <a href="/" target="_blank">
          <svg
        viewBox="0 0 512 512"
        fill="currentColor"
        className='w-8 h-8 text-[#ffbe0b] hover:text-[#ffbe0b]'
        >   
        <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
        <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
    </svg>
          </a>
        </div>


        </div>
        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <p>
            Hi! I am Emiliano Machado, a young man passionate about programming, data analysis, and sales.
          </p>
          <p>
            From an early age, I immersed myself in the exciting world of technology and business. Every line of code I write reflects my constant search for technical perfection, while data analysis allows me to discover hidden patterns and make informed decisions.
          </p>
          <p>
            My passion for sales and business drives me to create effective strategies and cultivate strong client relationships. In short, I constantly seek to grow and excel in these areas that I am passionate about.
          </p>
        </div>
      </div>
      <div className="py-8 text-center mt-4 mb-4">
        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-200">SKILLS</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className='w-20 h-20 text-[#ffbe0b]'
          >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M5 8v12h4V8H5zM3 7l4-5 4 5v15H3V7zm16 9v-2h-3v-2h3v-2h-2V8h2V6h-4v14h4v-2h-2v-2h2zM14 4h6a1 1 0 011 1v16a1 1 0 01-1 1h-6a1 1 0 01-1-1V5a1 1 0 011-1z" />
    </svg>

          <h3 className="text-xl font-extrabold text-gray-800 dark:text-gray-200 mt-2">UI & UX DESIGN</h3>

          <p className="text-gray-600 dark:text-gray-300 mt-2">I design beautiful web interfaces with Figma</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className='w-20 h-20 text-[#ffbe0b]'
          
            >
          <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z" />
          <path d="M9.293 9.293L5.586 13l3.707 3.707 1.414-1.414L8.414 13l2.293-2.293zm5.414 0l-1.414 1.414L15.586 13l-2.293 2.293 1.414 1.414L18.414 13z" />
        </svg>

          <h3 className="text-xl font-extrabold text-gray-800 dark:text-gray-200 mt-2">WEB DEVELOPMENT</h3>

          <p className="text-gray-600 dark:text-gray-300 mt-2">I create beautiful iterfaces with simple HTML5, CSS3, JavaScript and also frameworks like ReactJS</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <svg
            viewBox="0 0 448 512"
            fill="currentColor"
            className='w-16 h-16 text-[#ffbe0b]'
            
          >
            <path d="M388.32 104.1a4.66 4.66 0 00-4.4-4c-2 0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76 472s-54.04-365.5-54.44-367.9zm-99.67-33.63a116.67 116.67 0 00-7.21-17.61C271 32.85 255.42 22 237 22a15 15 0 00-4 .4c-.4-.8-1.2-1.2-1.6-2-8-8.77-18.4-12.77-30.82-12.4-24 .8-48 18-67.25 48.83-13.61 21.62-24 48.84-26.82 70.06-27.62 8.4-46.83 14.41-47.23 14.81-14 4.4-14.41 4.8-16 18-1.2 10-38 291.82-38 291.82L307.86 504V65.67a41.66 41.66 0 00-4.4.4s-5.6 1.6-14.81 4.4zm-55.24 17.22c-16 4.8-33.63 10.4-50.84 15.61 4.8-18.82 14.41-37.63 25.62-50 4.4-4.4 10.41-9.61 17.21-12.81 6.81 14.37 8.41 33.99 8.01 47.2zm-32.83-63.25A27.49 27.49 0 01215 28c-6.4 3.2-12.81 8.41-18.81 14.41-15.21 16.42-26.82 42-31.62 66.45-14.42 4.41-28.83 8.81-42 12.81 8.76-38.39 41.18-96.43 78.01-97.23zm-46.43 220.17c1.6 25.61 69.25 31.22 73.25 91.66 2.8 47.64-25.22 80.06-65.65 82.47-48.83 3.2-75.65-25.62-75.65-25.62l10.4-44s26.82 20.42 48.44 18.82c14-.8 19.22-12.41 18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44 27.22-93.27 94.47-97.68 26-1.6 39.23 4.81 39.23 4.81l-15.21 57.6s-17.21-8-37.63-6.4c-29.62 2.01-30.02 20.81-29.62 25.62zm95.27-161.73c0-12-1.6-29.22-7.21-43.63 18.42 3.6 27.22 24 31.23 36.43q-10.81 3-24.02 7.2z" />
          </svg>

          <h3 className="text-xl font-extrabold text-gray-800 dark:text-gray-200 mt-2">SALES</h3>

          <p className="text-gray-600 dark:text-gray-300 mt-2">I am passionate about salesmanship and growth, channeling my energy into effective strategies that drive positive results.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            className='w-16 h-16 text-[#ffbe0b]'
          >
            <path
              fill="none"
              d="M336 80H176a16 16 0 00-16 16v16h192V96a16 16 0 00-16-16z"
            />
            <path d="M496 176a64.07 64.07 0 00-64-64h-48V96a48.05 48.05 0 00-48-48H176a48.05 48.05 0 00-48 48v16H80a64.07 64.07 0 00-64 64v48h480zm-144-64H160V96a16 16 0 0116-16h160a16 16 0 0116 16zM336 264a24 24 0 01-24 24H200a24 24 0 01-24-24v-4a4 4 0 00-4-4H16v144a64 64 0 0064 64h352a64 64 0 0064-64V256H340a4 4 0 00-4 4z" />
          </svg>

          <h3 className="text-xl font-extrabold text-gray-800 dark:text-gray-200 mt-2">BUSSINESS MANAGMENT</h3>

          <p className="text-gray-600 dark:text-gray-300 mt-2">Combining technical expertise and business vision, I generate effective strategies based on my knowledge of the market.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className='w-16 h-16 text-[#ffbe0b]'
          >
            <path d="M12 12h7c-.53 4.11-3.28 7.78-7 8.92V12H5V6.3l7-3.11M12 1L3 5v6c0 5.55 3.84 10.73 9 12 5.16-1.27 9-6.45 9-12V5l-9-4z" />
          </svg>

          <h3 className="text-xl font-extrabold text-gray-800 dark:text-gray-200 mt-2">CYBERSECURITY</h3>

          <p className="text-gray-600 dark:text-gray-300 mt-2">Complementing my background in Cybersecurity, I bring an advanced approach and techniques to safeguard data & systems.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <svg fill="none" viewBox="0 0 24 24" className='w-16 h-16 text-[#ffbe0b]'>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 21a9 9 0 100-18 9 9 0 000 18zm2.806-2.585a7.004 7.004 0 004.175-5.89c-.823.449-1.861.817-3.044 1.073-.149 1.87-.554 3.54-1.131 4.817zM9.195 5.585a7.016 7.016 0 00-3.973 4.659c.232.22.626.49 1.226.757.45.2.973.379 1.557.529.054-2.324.498-4.415 1.19-5.945zm.906 8.326c.156 1.457.484 2.71.898 3.64.294.662.593 1.074.823 1.293.082.078.14.12.178.14a.983.983 0 00.178-.14c.23-.22.529-.63.823-1.292.414-.932.742-2.184.898-3.641a20.034 20.034 0 01-3.798 0zm-2.038-.313c.149 1.87.554 3.54 1.131 4.817a7.004 7.004 0 01-4.175-5.89c.823.449 1.861.817 3.044 1.073zM14 11.89c-.631.07-1.3.11-2 .11s-1.369-.04-2-.11c.014-2.226.423-4.145 1-5.442.293-.661.592-1.073.822-1.292a.988.988 0 01.178-.14.988.988 0 01.178.14c.23.22.529.63.823 1.292.576 1.297.986 3.216.999 5.442zm1.995-.36c-.053-2.324-.498-4.415-1.19-5.945a7.016 7.016 0 013.973 4.659c-.232.22-.626.49-1.226.757-.45.2-.973.379-1.557.529z"
              clipRule="evenodd"
            />
          </svg>

          <h3 className="text-xl font-extrabold  text-gray-800 dark:text-gray-200 mt-2">CRM</h3>

          <p className="text-gray-600 dark:text-gray-300 mt-2">I apply my skills in business management, integrating CRM solutions and web programming to drive growth.</p>
        </div>
        <div className='mt-4 mb-4'>

        </div>

      </div>
    </div>
  );
}
