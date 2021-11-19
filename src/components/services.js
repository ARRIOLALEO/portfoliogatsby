import React from "react";
import serviceOne from "../images/website.webp";
import websites from "../images/responsive.webp";
import ads from "../images/ads.webp";
const Services = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-800">
        <div class="container px-6 py-8 mx-auto">
          <h1 className="text-5xl font-bold text-center pb-8">НАШИ НАПРАВЛЕНИЯ </h1>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="content-center items-center">
              <h1 class="text-center mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                ПОДДЕРЖКА САЙТОВ
              </h1>
              <img src={serviceOne} className="m-auto pt-4 pb-4" />
              <p className="text-base text-gray-800 sm:mt-5 sm:text-lg  sm:mx-auto  text-center">
                Круглосуточная техническая поддержка, обновление, мониторинг и обслуживание
                веб-сайтов
              </p>
            </div>

            <div>
              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white text-center">
                РАЗРАБОТКА САЙТОВ
              </h1>
              <img src={websites} className="m-auto pt-4 pb-4" />
              <p className="text-center text-base text-gray-800 sm:mt-5 sm:text-lg  sm:mx-auto ">
                Разработаем индивидуальное решение для эффективности Вашего бизнеса в интернете.
              </p>
            </div>

            <div>
              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white text-center">
                КОНТЕКСТНАЯ РЕКЛАМА
              </h1>
              <img src={ads} className="m-auto pt-4 pb-4" />
              <p className="text-center text-base text-gray-800 sm:mt-5 sm:text-lg  sm:mx-auto ">
                Создание сайта для привлечения потенциальных покупателей из поисковых систем Google
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
