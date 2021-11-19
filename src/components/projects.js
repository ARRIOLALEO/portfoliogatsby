import React from "react";
import project001 from "../images/project001";
import project002 from "../images/project002";
import project003 from "../images/project003";
import project004 from "../images/project004";
import project005 from "../images/project005";
import project006 from "../images/project006";
import project007 from "../images/project007";
import project008 from "../images/project008";
import project009 from "../images/project009";

const Projects = () => {
    return (
        <>
            <section className="bg-coolGray-100 text-coolGray-800">
                <h1 class="text-5xl font-bold text-center pt-10  pb-2"> Наши работы</h1>
                <h3 className="text-xl font-bold text-center pt-2 pb-10">
                    {" "}
                    Здесь некоторые выполненные нами проекты:
                </h3>{" "}
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <a
                            href="http://proekt-invest.kg/"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50"
                        >
                            <img
                                role="presentation"
                                className="w-full rounded h-44 bg-coolGray-500"
                                src={project001}
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    Проект invest | Строительная компания
                                </h3>
                            </div>
                        </a>
                        <a
                            href="https://porter-taxi-bishkek.netlify.app/"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50"
                        >
                            <img
                                role="presentation"
                                className="w-full rounded h-44 bg-coolGray-500"
                                src={project002}
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    портер такси в бишкеке - быстрые всего 30 минут
                                </h3>
                            </div>
                        </a>
                        <a
                            href="https://autopark.kg/"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50"
                        >
                            <img
                                role="presentation"
                                className="w-full rounded h-44 bg-coolGray-500"
                                src={project003}
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    AutoPark.kg - Аренда и прокат автомобилей
                                </h3>
                            </div>
                        </a>
                        <a
                            href="http://kyrgyz-adventure.com/"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50"
                        >
                            <img
                                role="presentation"
                                className="w-full rounded h-44 bg-coolGray-500"
                                src={project004}
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    Kyrgyz Adventure &#8211; Time to Discover Central Asia
                                </h3>
                            </div>
                        </a>
                        <a
                            href="https://swissinasia.com/"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50 hidden sm:block"
                        >
                            <img
                                role="presentation"
                                className="w-full rounded h-44 bg-coolGray-500"
                                src={project005}
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    лечение в корее бишкекSwiss in Asia
                                </h3>
                            </div>
                        </a>
                        <a
                            href="http://libmed.kg/"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50"
                        >
                            <img
                                role="presentation"
                                className="full rounded h-44 bg-coolGray-500"
                                src={project006}
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    скорая помощь бишкек Либерти-Мед
                                </h3>
                            </div>
                        </a>{" "}
                        <a
                            href="https://oimotravel.com/"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50 hidden sm:block"
                        >
                            <img
                                role="presentation"
                                className="w-full rounded h-44 bg-coolGray-500"
                                src={project007}
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    Oimo &#8211; Oimo Travel freut sich, Sie in Zentralasien
                                    begrüßen zu dürfen.
                                </h3>
                            </div>
                        </a>{" "}
                        <a
                            href="https://key-bishkek.kg/"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50 hidden sm:block"
                        >
                            <img
                                role="presentation"
                                className="w-full rounded h-44 bg-coolGray-500"
                                src={project008}
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    Аварийное вскрытие по Бишкеку!
                                </h3>
                            </div>
                        </a>{" "}
                        <a
                            href="http://kyrgyzstantravel.kg/"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-coolGray-50 hidden sm:block"
                        >
                            <img
                                role="presentation"
                                className="w-full rounded h-44 bg-coolGray-500"
                                src={project009}
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    Travel agency in Kyrgyzstan | Tailor-made tours
                                </h3>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Projects;
