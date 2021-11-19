import React from "react";
const Testimonials = () => {
    return (
        <>
            <section className="bg-coolGray-100 text-coolGray-800">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold">
                                Создаем и продвигаем продающие сайты в Бишкеке
                            </h2>
                            <p className="text-coolGray-600">
                                минимальное требование для ведения современного бизнеса. Это
                                экономный инструмент рекламы. Создайте свой сайт, продвигайте, и
                                результат не заставит долго ждать. Прежде чем заказать веб-сайт,
                                необходимо выбрать систему управления. Приобретая дизайн, подключая
                                к готовому шаблону CMS, бизнесмен не может решить все задачи
                                бизнеса. Рынок требует новые коммерческие инструменты, а шаблоны
                                имеют ограничения. Приходится процессы адаптировать к функциональным
                                возможностям платформы или менять CMS.
                            </p>
                        </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md bg-coolGray-50">
                                        <p>
                                            представляет ограниченную информацию о деятельности.
                                            Имеет несколько стандартных страниц: главная, услуги,
                                            компания, цены, контакты. Серьезный функционал здесь
                                            отсутствует, но всегда возможно сделать доработку,
                                            добавить новые функции, блог, инструменты электронной
                                            коммерции.
                                        </p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <div>
                                                <p className="text-lg font-semibold">
                                                    Сайт визитка
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md bg-coolGray-50">
                                        <p>
                                            предназначена для краткосрочных акций. Одностраничник
                                            также подходит для презентации одного товара или услуги.
                                            Серьезный недостаток лендинга - отсутствие возможностей
                                            классического SEO продвижения в поисковых системах.
                                        </p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <div>
                                                <p className="text-lg font-semibold">
                                                    Посадочная страница
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md bg-coolGray-50">
                                        <p>
                                            подразумевает серьезный уровень взаимоотношений с
                                            посетителями. Конструкция позволяет управлять разделами,
                                            категориями, добавлять страницы, создать галереи,
                                            редактировать контент, поднимать в топ-10 выдачи
                                            благодаря уникальным текстам и полезному контенту.
                                        </p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <div>
                                                <p className="text-lg font-semibold">
                                                    Корпоративный сайт
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md bg-coolGray-50">
                                        <p>
                                            решает одну задачу - предоставить полезные торговые
                                            возможности покупателям в сайтах. Обычно заказчики
                                            начинают с программирования каталога, развивают проект,
                                            наполняют товары, раскручивают, вторым этапом подключают
                                            личный кабинет, платежные системы и другие функции
                                            полноценного интернет магазина.
                                        </p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <div>
                                                <p className="text-lg font-semibold">
                                                    Создание интернет магазина
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
