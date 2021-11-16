import React from "react";

const Services = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-800">
        <div class="container px-6 py-8 mx-auto">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                ПОДДЕРЖКА САЙТОВ
              </h1>

              <p class="mt-2 text-gray-500 dark:text-gray-400;">
                Круглосуточная техническая поддержка, обновление, мониторинг и обслуживание
                веб-сайтов
              </p>
            </div>

            <div>
              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                РАЗРАБОТКА САЙТОВ
              </h1>

              <p class="mt-2 text-gray-500 dark:text-gray-400">
                Разработаем индивидуальное решение для эффективности Вашего бизнеса в интернете.
              </p>
            </div>

            <div>
              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                КОНТЕКСТНАЯ РЕКЛАМА
              </h1>

              <p class="mt-2 text-gray-500 dark:text-gray-400">
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
