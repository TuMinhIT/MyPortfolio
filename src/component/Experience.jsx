import React from "react";

const Experience = () => {
  return (
    <>
      <section
        id="experience"
        class="flex flex-col items-start self-stretch mt-4 sm:mt-20"
        aria-labelledby="experience-heading"
      >
        <div class="lg:hidden sticky top-0 z-30 bg-white py-2 w-full left-0 right-0 mt-8 px-2 pl-4">
          <span class="text-base font-bold uppercase tracking-wide text-gray-900">
            Experiences
          </span>
        </div>
        <div class="hidden lg:block w-full mb-6 px-2 pl-4">
          <span class="text-base font-bold uppercase tracking-wide text-gray-900">
            Experiences
          </span>
        </div>
        <h2 id="experience-heading" class="sr-only">
          Work experience
        </h2>
        <div class="flex flex-col items-start gap-2 self-stretch">
          <div class="relative p-4 rounded-lg transition-colors duration-300 self-stretch hover:bg-[#FDF3DB]/80">
            <div class="h-4 text-gray-600 font-bold text-xs leading-4 tracking-wide uppercase mb-2">
              FEB 2025 - APR 2025
            </div>
            <div class="mb-3">
              <a
                href="https://www.ycombinator.com/companies/relate"
                target="_blank"
                class="flex items-center gap-1 cursor-pointer"
              >
                <span class="text-gray-900 font-normal text-base leading-5 transition-colors duration-300">
                  Software Engineer, Product · Pixelic, Inc
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.48602 12.464C4.59852 12.5764 4.75102 12.6395 4.91002 12.6395C5.06902 12.6395 5.22152 12.5764 5.33402 12.464L11.11 6.688V11.24C11.11 11.3991 11.1732 11.5517 11.2858 11.6643C11.3983 11.7768 11.5509 11.84 11.71 11.84C11.8691 11.84 12.0218 11.7768 12.1343 11.6643C12.2468 11.5517 12.31 11.3991 12.31 11.24V5.24C12.31 5.08087 12.2468 4.92826 12.1343 4.81574C12.0218 4.70321 11.8691 4.64 11.71 4.64H5.71002C5.55089 4.64 5.39828 4.70321 5.28575 4.81574C5.17323 4.92826 5.11002 5.08087 5.11002 5.24C5.11002 5.39913 5.17323 5.55174 5.28575 5.66426C5.39828 5.77679 5.55089 5.84 5.71002 5.84H10.262L4.48602 11.616C4.37366 11.7285 4.31055 11.881 4.31055 12.04C4.31055 12.199 4.37366 12.3515 4.48602 12.464Z"
                    fill="#ffca4a"
                  ></path>
                </svg>
              </a>
            </div>
            <p class="text-gray-700 text-sm font-normal leading-[21px] mb-4">
              At Pixelic, a YCombinator startup, I developed and maintained core
              CRM features, including scalable bulk contact import
              functionality. I led the technical integration of Imweb's site
              builder platform into Spread, our email marketing service,
              implementing OAuth flows, automated data synchronization using
              external APIs, and Stripe billing logic.
            </p>
          </div>

          <div class="relative p-4 rounded-lg transition-colors duration-300 self-stretch hover:bg-[#FDF3DB]/80">
            <div class="h-4 text-gray-600 font-bold text-xs leading-4 tracking-wide uppercase mb-2">
              Oct 2021 – Aug 2022
            </div>
            <div class="mb-3">
              <a
                href="https://www.crunchbase.com/organization/frograms"
                target="_blank"
                class="flex items-center gap-1 cursor-pointer"
              >
                <span class="text-gray-900 font-normal text-base leading-5 transition-colors duration-300">
                  Backend Software Engineer · Watcha
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.48602 12.464C4.59852 12.5764 4.75102 12.6395 4.91002 12.6395C5.06902 12.6395 5.22152 12.5764 5.33402 12.464L11.11 6.688V11.24C11.11 11.3991 11.1732 11.5517 11.2858 11.6643C11.3983 11.7768 11.5509 11.84 11.71 11.84C11.8691 11.84 12.0218 11.7768 12.1343 11.6643C12.2468 11.5517 12.31 11.3991 12.31 11.24V5.24C12.31 5.08087 12.2468 4.92826 12.1343 4.81574C12.0218 4.70321 11.8691 4.64 11.71 4.64H5.71002C5.55089 4.64 5.39828 4.70321 5.28575 4.81574C5.17323 4.92826 5.11002 5.08087 5.11002 5.24C5.11002 5.39913 5.17323 5.55174 5.28575 5.66426C5.39828 5.77679 5.55089 5.84 5.71002 5.84H10.262L4.48602 11.616C4.37366 11.7285 4.31055 11.881 4.31055 12.04C4.31055 12.199 4.37366 12.3515 4.48602 12.464Z"
                    fill="#ffca4a"
                  ></path>
                </svg>
              </a>
            </div>
            <p class="text-gray-700 text-sm font-normal leading-[21px] mb-4">
              Watcha is a Series D OTT startup offering services similar to
              Netflix. At Watcha, I developed W-Algorithm, a recommendation
              feature that increased content savings by 28% and playtime by 35%
              within a month of release for Watcha TV users. I also collaborated
              on building a personalized content feed, contributing directly to
              user engagement and retention metrics for the streaming platform.
            </p>
          </div>
        </div>
        <a
          href="/Resume.pdf"
          download=""
          class="flex justify-start items-end gap-1 cursor-pointer mt-6 text-gray-900 font-medium text-base leading-5 transition-colors duration-300 hover:underline pl-4"
        >
          View Full Resume
          <svg
            width="16"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.07005 2.19998C9.07005 2.04085 9.00684 1.88823 8.89432 1.77571C8.78179 1.66319 8.62918 1.59998 8.47005 1.59998C8.31092 1.59998 8.15831 1.66319 8.04579 1.77571C7.93327 1.88823 7.87005 2.04085 7.87005 2.19998V9.09118L5.50605 6.58798C5.45244 6.52879 5.38755 6.4809 5.31519 6.44712C5.24283 6.41333 5.16446 6.39434 5.08466 6.39123C5.00486 6.38813 4.92525 6.40099 4.85049 6.42906C4.77572 6.45713 4.70732 6.49984 4.64927 6.55469C4.59123 6.60953 4.54472 6.67542 4.51247 6.74847C4.48022 6.82153 4.46288 6.90029 4.46146 6.98013C4.46004 7.05998 4.47458 7.1393 4.50421 7.21346C4.53385 7.28761 4.57799 7.3551 4.63405 7.41198L8.03405 11.012C8.09013 11.0713 8.15772 11.1185 8.23269 11.1508C8.30766 11.1831 8.38843 11.1998 8.47005 11.1998C8.55168 11.1998 8.63245 11.1831 8.70742 11.1508C8.78238 11.1185 8.84998 11.0713 8.90605 11.012L12.3061 7.41198C12.4114 7.29566 12.467 7.14269 12.4609 6.98587C12.4548 6.82905 12.3875 6.68086 12.2735 6.57307C12.1594 6.46528 12.0076 6.40648 11.8507 6.40926C11.6938 6.41205 11.5442 6.47621 11.4341 6.58798L9.07005 9.09118V2.19998Z"
              fill="#ffca4a"
            ></path>
            <path
              d="M3.27001 10.2C3.27001 10.0408 3.20679 9.88823 3.09427 9.77571C2.98175 9.66319 2.82914 9.59998 2.67001 9.59998C2.51088 9.59998 2.35827 9.66319 2.24574 9.77571C2.13322 9.88823 2.07001 10.0408 2.07001 10.2V12.2C2.07001 12.7835 2.30179 13.343 2.71437 13.7556C3.12695 14.1682 3.68653 14.4 4.27001 14.4H12.67C13.2535 14.4 13.8131 14.1682 14.2256 13.7556C14.6382 13.343 14.87 12.7835 14.87 12.2V10.2C14.87 10.0408 14.8068 9.88823 14.6943 9.77571C14.5817 9.66319 14.4291 9.59998 14.27 9.59998C14.1109 9.59998 13.9583 9.66319 13.8457 9.77571C13.7332 9.88823 13.67 10.0408 13.67 10.2V12.2C13.67 12.752 13.222 13.2 12.67 13.2H4.27001C3.71801 13.2 3.27001 12.752 3.27001 12.2V10.2Z"
              fill="#ffca4a"
            ></path>
          </svg>
        </a>
      </section>
    </>
  );
};

export default Experience;
