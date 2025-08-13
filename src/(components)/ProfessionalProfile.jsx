// components/ProfessionalProfile.js
'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function ProfessionalProfile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      company: "ИП Холомеев",
      period: "Апр 2020 - Янв 2021",
      position: "Системный администратор",
      description: "Обеспечение стабильной работы IT-инфраструктуры торговой сети. Обслуживание компьютерной техники, техническое сопровождение открытия новых магазинов, развертывание систем IP-видеонаблюдения."
    },
    {
      company: "ИП Горбунова",
      period: "Янв 2021 - Мар 2022",
      position: "Технический специалист",
      description: "Комплексная подготовка технической инфраструктуры магазина. Подбор и внедрение торгового оборудования, установка и настройка ПО 1С, обеспечение бесперебойной работы всех систем."
    },
    {
      company: "ООО 'Альфа-М'",
      period: "Мар 2022 - Авг 2022",
      position: "Специалист ОПП",
      description: "Операционная работа с кассовым оборудованием, управление товарными запасами, минимизация потерь в торговой точке."
    },
    {
      company: "ООО 'ОАЗИС'",
      period: "Сен 2022 - Апр 2023",
      position: "Грузчик",
      description: "Комплектация товарных заказов, погрузочно-разгрузочные работы, работа со складской документацией."
    },
    {
      company: "ООО 'ОАЗИС'",
      period: "Апр 2023 - Настоящее время",
      position: "Системотехник",
      description: "Техническое обслуживание складской инфраструктуры, контроль ТМЦ, обработка инцидентов, поддержка пользователей."
    },
    {
      company: "Студия Коротковых",
      period: "Июн 2023 - Фев 2024",
      position: "Frontend разработчик (React)",
      description: "Разработка пользовательских интерфейсов на React, исправление ошибок, работа по методологии Kanban, командное взаимодействие."
    }
  ];

  const skills = [
    { 
      category: "Операционные системы",
      items: ["Linux (Администрирование)", "Windows/Windows Server (Администрирование)"]
    },
    { 
      category: "Программирование",
      items: ["JavaScript (Middle)", "React (Middle)", "Redux (Middle)", "1C (Разработка)"]
    },
    { 
      category: "Методологии",
      items: ["Agile (Scrum)", "Kanban", "Автоматизация процессов"]
    },
    { 
      category: "Профессиональные качества",
      items: ["Ответственность", "Трудолюбие", "Обучаемость", "Внимание к деталям"]
    }
  ];

  const certificates = [
    { title: "Интенсивное обучение программированию в 1С", author: "Официальные курсы 1С" },
    { title: "1С программирование для начинающих", author: "Василий Еремин" },
    { title: "1С программирование. Углубленный курс", author: "Василий Еремин" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            <span className="block">Системный администратор</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              & Frontend разработчик
            </span>
          </motion.h1>
          <motion.div 
            className="h-1 bg-gradient-to-r from-blue-500 to-teal-400 w-24 mx-auto mt-6"
            variants={itemVariants}
          />
          <motion.p 
            className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Эксперт в IT-инфраструктуре и веб-разработке с фокусом на автоматизацию процессов и повышение эффективности систем
          </motion.p>
        </motion.div>

        {/* Раздел с опытом работы */}
        <motion.div 
          className="mb-24"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Профессиональный опыт
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-lg text-gray-700">{exp.company}</p>
                  </div>
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium self-start">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-4 text-gray-600">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Раздел с навыками */}
        <motion.div 
          className="mb-24"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Профессиональные навыки
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Раздел с сертификатами */}
        <motion.div 
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Сертификаты и обучение
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border-t-4 border-teal-500 hover:shadow-lg transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{cert.title}</h3>
                </div>
                <p className="text-gray-600">{cert.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Блок "О себе" */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 text-white"
          variants={itemVariants}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ключевые качества</h2>
            
            <div className="space-y-4 text-lg">
              <p className="flex items-start">
                <span className="mr-3">⚙️</span>
                <span><strong>Автоматизация процессов</strong> - Моя ключевая компетенция. Разрабатываю решения для оптимизации рутинных операций, от скриптов администрирования до React-компонентов.</span>
              </p>
              
              <p className="flex items-start">
                <span className="mr-3">🔧</span>
                <span><strong>Ответственность</strong> - Подхожу к задачам системно, всегда довожу проекты до завершения с гарантией качества результата.</span>
              </p>
              
              <p className="flex items-start">
                <span className="mr-3">💪</span>
                <span><strong>Трудолюбие</strong> - Способен эффективно работать в различных областях IT, постоянно расширяя профессиональные компетенции.</span>
              </p>
              
              <p className="flex items-start">
                <span className="mr-3">🚀</span>
                <span><strong>Цель</strong> - Создание надежных IT-систем, решающих бизнес-задачи и повышающих эффективность работы.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Контактная информация */}
        <motion.footer 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <div className="mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:scale-[1.03] transition-transform duration-300 shadow-lg shadow-blue-500/20">
              Связаться со мной
            </button>
          </div>
          <p className="mt-8 text-gray-600">© {new Date().getFullYear()} Профессиональное резюме</p>
        </motion.footer>
      </div>
    </motion.div>
  );
}