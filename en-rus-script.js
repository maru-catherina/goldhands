document.addEventListener("DOMContentLoaded", function() {
    // Translations for English and Russian
    const translations = {
        "en": {
            "aboutuslink": "About us",
            "serviceslink": "Services",
            "contactuslink": "Contact us",
            "enlink":"EN",
            "ruslink":"RUS",
            "getintouch": "Get in touch anytime!",
            "bookservice": "Book a service",
            "aboutustitle": "ABOUT US",
            "aboutustext": "With years of experience in transportation, moving assistance, furniture assembly, and equipment installation, I have developed a reputation for delivering high-quality services tailored to my clients’ needs. I have collaborated with both private customers and large companies, ensuring projects are completed efficiently and on time.",
            "expertise": "My expertise includes:",
            "expertisefirstline": "Coordinating and executing transportation services, including the safe handling of oversized and fragile items.",
            "expertisesecondline": "Professional assembly of all types of furniture, including complex structures.",
            "expertisethirdline": "Installation of household and office equipment with precision and care.",
            "expertisefourthline": "Providing handyman services, including minor repairs and maintenance tasks.",
            "expertiselastline": "I pride myself on professionalism, punctuality, and a personalized approach to every project. My goal is to make every client’s experience seamless and stress-free. Let me help you with your next project—your satisfaction is my priority!",
            "servicetitle": "OUR MAIN SERVICES",
            "service1title": "Delivery",
            "service2title": "Assembly",
            "service3title": "Moving",
            "service4title": "Other Services",
            "service1titledetailed": "Delivery",
            "service2titledetailed": "Assembly",
            "service3titledetailed": "Moving",
            "service4titledetailed": "Other services",
            "service1descriptiondetailed": "Our delivery service is a fast and reliable way to get your items delivered on time and to the right place. We guarantee that your items are delivered safely and efficiently. Our delivery service is ideal for individual clients and businesses that require reliable and fast delivery.",
            "service2descriptiondetailed": "Our assembly service is designed for those who need professional assistance with assembling furniture, equipment, and other items. Our team will help you assemble your items quickly and efficiently. We offer various assembly options, including furniture assembly, equipment assembly, and other item assembly.",
            "service3descriptiondetailed": "Our moving service is designed for those who need professional assistance with relocating. Our team of experienced moving specialists will help you pack, transport, and unload your belongings to your new location. We offer various moving options, including local and long-distance moving.",
            "service4descriptiondetailed": "Detailed info about other services",
            "contact-title": "CONTACT US",
            "contact-text": "Our dedicated team is available to assist you daily from 7 am to 7 pm.",
            "phonecontact": "Phone: +1 (347) 562-39-25",
            "emailcontact": "Email: russellsky5@gmail.com",
            "social-media": "Find us on social media:",
            "name": "Your name *",
            "email": "Your email *",
            "message": "How Can We Assist You? *",
            "submit": "Book a service",
            "notification": "Your request has been received. Our team will connect you ASAP.",
            "notification-error": "Error: Please check the following: Name , Email , Message field cannot be empty",
            "reviewtext":"Gold Hands by Sky Rus Inc. has completely elevated my expectations of service! The meticulous approach and unwavering dedication to quality made a significant difference in my experience.",
            "reviewsectiontitle":"WHAT OUR CUSTOMERS SAY ABOUT US",
            "footertext": "Need a website? Check out our portfolio here: https://devzonestudio.com",
            "copirighttext": "2025 DevZone Studio. All rights reserved."
        },
        "ru": {
            "enlink":"АНГ",
            "ruslink":"РУС",
            "aboutuslink": "О нас",
            "serviceslink": "Услуги",
            "contactuslink": "Контакты",
            "getintouch": "Свяжитесь с нами в любое время!",
            "bookservice": "Забронировать услугу",
            "aboutustitle": "О нас",
            "aboutustext": "С многолетним опытом в области транспортировки, помощи при переездах, сборки мебели и установки оборудования, я зарекомендовал себя как поставщик высококачественных услуг, ориентированных на потребности клиентов. Я работал как с частными клиентами, так и с крупными компаниями, обеспечивая эффективное и своевременное выполнение проектов.",
            "expertise": "Моя экспертиза включает:",
            "expertisefirstline": "Координацию и выполнение транспортных услуг, включая безопасную обработку громоздких и хрупких предметов.",
            "expertisesecondline": "Профессиональную сборку всех типов мебели, включая сложные конструкции",
            "expertisethirdline": "Установку бытового и офисного оборудования с точностью и заботой.",
            "expertisefourthline": "Предоставление услуг мастера, включая мелкие ремонты и задачи по обслуживанию.",
            "expertiselastline": "Я горжусь своей  профессиональностью, пунктуальностью и индивидуальным подходом к каждому проекту. Моя цель — сделать опыт каждого клиента беззаботным и беспроблемным. Позвольте мне помочь вам с вашим следующим проектом — ваше удовлетворение является моим приоритетом!",
            "servicetitle": "Наши основные услуги",
            "service1title": "Доставка",
            "service2title": "Сборка",
            "service3title": "Переезд",
            "service4title": "Другие услуги",
            "service1titledetailed": "Доставка",
            "service2titledetailed": "Сборка",
            "service3titledetailed": "Переезд",
            "service4titledetailed": "Другие услуги",
            "service1descriptiondetailed": "Наша служба доставки - это быстрый и надежный способ доставки ваших товаров в нужное место и вовремя. Мы гарантируем, что ваши товары будут доставлены безопасно и эффективно. Наша служба доставки идеально подходит как для частных клиентов, так и для бизнеса, который требует надежной и быстрой доставки.",
            "service2descriptiondetailed": "Наша служба сборки предназначена для тех, кому требуется профессиональная помощь в сборке мебели, оборудования и других предметов. Наша команда поможет вам собрать ваши вещи быстро и эффективно. Мы предлагаем различные варианты сборки, включая сборку мебели, сборку оборудования и другие виды сборки.",
            "service3descriptiondetailed": "Наша служба переезда предназначена для тех, кто нуждается в профессиональной помощи при переезде. Наша команда опытных специалистов поможет вам упаковать, перевезти и разгрузить ваши вещи в новое место. Мы предлагаем различные варианты переезда, включая местные и дальние переезды.",
            "service4descriptiondetailed": "Подробная информация о других услугах",
            "contact-title": "Контакты",
            "contact-text": "Наша команда доступна для вас ежедневно с 7:00 до 19:00.",
            "phonecontact": "Телефон: +1 (347) 562-39-25",
            "emailcontact": "Электронная почта: russellsky5@gmail.com",
            "social-media": "Найдите нас в социальных сетях:",
            "name": "Ваше имя *",
            "email": "Ваш email *",
            "message": "Как мы можем вам помочь? *",
            "submit": "Забронировать услугу",
            "notification": "Ваш запрос принят. Наша команда свяжется с вами как можно скорее.",
            // "notification-error": "Ошибка: Пожалуйста, проверьте следующее: Поле имени и Поле сообщения не могут быть пустыми. Адрес электронной почты должен быть действительным.  ",
            
            "footertext": "Нужен сайт? Ознакомьтесь с нашим портфолио здесь: https://devzonestudio.com",
            "copyrightext": "2025 DevZone Studio. Все права защишены."
        
        }
    };

    // Switch language based on user selection
    const langSwitchButtons = document.querySelectorAll('.lang-switch');
    langSwitchButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Function to update text content based on selected language
    function switchLanguage(language) {
        Object.keys(translations[language]).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    // If it's an input or textarea, update the placeholder
                    element.setAttribute('placeholder', translations[language][id]);
                }   else {
                    // Update textContent for other elements
                    element.textContent = translations[language][id];
                }
            }
        });
    }
});
