'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';

const SystemAdminPresentation = () => {
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-900 text-gray-100 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Head>
        <title>Системный администратор | Full-stack разработчик</title>
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className={`mb-16 text-center ${glitchEffect ? 'text-purple-400' : 'text-blue-400'} transition-colors duration-300`}>
          <h1 className="md:text-5xl text-3xl md:text-7xl font-bold mb-4">
            <span className="inline-block md:mr-6 mb-4 transition-transform">ГОРБУНОВ СЕРГЕЙ</span>
            <span className="inline-block  transition-transform">СИСТЕМНЫЙ АДМИНИСТРАТОР</span>
          </h1>
          <p className="text-xl md:text-2xl mt-6">И немного фронтенд-разработчик</p>
        </section>

        {/* About Section */}
        <section className="mb-16 bg-gray-800 rounded-xl p-8 shadow-2xl hover:shadow-blue-500/50 transition-shadow">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">ОБО МНЕ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Технический специалист с <span className="font-bold text-blue-300">разносторонним опытом</span> - от системного администрирования до фронтенд-разработки.
              </p>
              <p className="mb-4">
                Обожаю <span className="font-bold text-purple-300">автоматизировать процессы</span> и находить технологичные решения для бизнес-задач.
              </p>
              <p>
                Ответственный, трудолюбивый и постоянно развивающийся профессионал.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Мои навыки:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-400 mr-2 rounded-full"></span>
                    Администрирование Linux/Windows
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-400 mr-2 rounded-full"></span>
                    JavaScript/React (Middle)
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-400 mr-2 rounded-full"></span>
                    Docker, Docker-compose, Portainer
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-400 mr-2 rounded-full"></span>
                    Настройка и поддержка 1С
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-400 mr-2 rounded-full"></span>
                    Организация рабочих процессов (Kanban/Scrum)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">ОПЫТ РАБОТЫ</h2>
          
          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500 md:left-1/2 md:-ml-0.5"></div>
            
            {/* Timeline items */}
            <div className="relative pl-12 md:pl-0 md:flex md:odd:flex-row-reverse">
              <div className="md:w-1/2 md:px-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow">
                  <h3 className="text-xl font-bold text-blue-300 mb-2">Системотехник дежурный</h3>
                  <p className="text-gray-400 mb-2">ООО "ОАЗИС" | 04.2023 - настоящее время</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>Поддержка технической инфраструктуры склада</li>
                    <li>Контроль складских ТМЦ</li>
                    <li>Обработка входящих заявок</li>
                    <li>Обслуживание рабочих мест</li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center md:left-1/2 md:-ml-4">
                <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
              </div>
            </div>

            {/* Other timeline items */}
            <div className="relative pl-12 md:pl-0 md:flex md:odd:flex-row-reverse">
              <div className="md:w-1/2 md:px-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow">
                  <h3 className="text-xl font-bold text-blue-300 mb-2">Frontend разработчик (React)</h3>
                  <p className="text-gray-400 mb-2">ИП Коротков А.E. | 06.2023 - 02.2024</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>Разработка клиентской части приложений</li>
                    <li>Работа по методологии Kanban</li>
                    <li>Исправление ошибок и оптимизация кода</li>
                    <li>Участие в планировании проектов</li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center md:left-1/2 md:-ml-4">
                <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
              </div>
            </div>

            <div className="relative pl-12 md:pl-0 md:flex md:odd:flex-row-reverse">
              <div className="md:w-1/2 md:px-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow">
                  <h3 className="text-xl font-bold text-blue-300 mb-2">Грузчик</h3>
                  <p className="text-gray-400 mb-2">ИП Коротков А.E. | 09.2022 - 04.2023</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>Комплектация товарных заказов</li>
                    <li>Погрузочно-разгрузочные работы</li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center md:left-1/2 md:-ml-4">
                <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
              </div>
            </div>
            
            <div className="relative pl-12 md:pl-0 md:flex md:odd:flex-row-reverse">
              <div className="md:w-1/2 md:px-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow">
                  <h3 className="text-xl font-bold text-blue-300 mb-2">Специалист ОПП</h3>
                  <p className="text-gray-400 mb-2">ООО 'Альфа-М' | 03.2022 - 08.2022</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>Операционная работа с кассовым оборудованием</li>
                    <li>управление товарными запасами</li>
                    <li>минимизация потерь в торговой точке</li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center md:left-1/2 md:-ml-4">
                <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
              </div>
            </div>

            {/* Previous experiences */}
            <div className="relative pl-12 md:pl-0 md:flex md:odd:flex-row-reverse">
              <div className="md:w-1/2 md:px-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow">
                  <h3 className="text-xl font-bold text-blue-300 mb-2">Системный администратор</h3>
                  <p className="text-gray-400 mb-2">ИП Горбунова Л.А. | 01.2021 - 03.2022</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>Настройка технической инфраструктуры магазина</li>
                    <li>Подбор и внедрение 1С и торгового оборудования</li>
                    <li>Обеспечение бесперебойной работы систем</li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center md:left-1/2 md:-ml-4">
                <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
              </div>
            </div>

            <div className="relative pl-12 md:pl-0 md:flex md:odd:flex-row-reverse">
              <div className="md:w-1/2 md:px-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow">
                  <h3 className="text-xl font-bold text-blue-300 mb-2">Системный администратор</h3>
                  <p className="text-gray-400 mb-2">ИП Холомеев Е.В. | 04.2020 - 01.2021</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>Поддержка торговой инфраструктуры</li>
                    <li>Обслуживание компьютерной техники</li>
                    <li>Установка и настройка систем видеонаблюдения</li>
                    <li>Техническое сопровождение открытия магазинов</li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center md:left-1/2 md:-ml-4">
                <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="bg-gray-800 rounded-xl p-8 shadow-2xl hover:shadow-purple-500/50 transition-shadow">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">СЕРТИФИКАТЫ И КУРСЫ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-bold text-purple-300 mb-2">Официальные курсы 1С</h3>
              <p className="text-gray-300">Интенсивное обучение программированию в 1С</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-bold text-purple-300 mb-2">1С программирование</h3>
              <p className="text-gray-300">Курс для начинающих от Василия Еремина</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-bold text-purple-300 mb-2">1С программирование</h3>
              <p className="text-gray-300">Углубленный курс от Василия Еремина</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-gray-500">
        <p>Готов к новым вызовам и сложным проектам</p>
        <p className="mt-2">© {new Date().getFullYear()} Системный администратор | Frontend разработчик</p>
      </footer>
    </div>
  );
};

export default SystemAdminPresentation;