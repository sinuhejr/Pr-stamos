{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Funci\'f3n para mostrar la barra de progreso\
function showProgressBar() \{\
    const progressBar = document.getElementById("progress-bar");\
    progressBar.style.width = "0%";\
    progressBar.style.display = "block";\
    let width = 0;\
    const interval = setInterval(() => \{\
        if (width >= 100) \{\
            clearInterval(interval);\
            progressBar.style.display = "none"; // Ocultar barra de progreso al llegar a 100%\
            document.getElementById("installingMessage").innerText = "Instalaci\'f3n completada.";\
        \} else \{\
            width++;\
            progressBar.style.width = width + "%";\
        \}\
    \}, 50); // Ajusta el tiempo seg\'fan la velocidad de la barra\
\}\
\
// Generar datos aleatorios\
function generateReport() \{\
    const userName = "Juan P\'e9rez"; // Nombre de usuario aleatorio\
    const reportContent = `\
    Datos del Usuario:\
    Nombre: $\{userName\}\
    \
    Datos del Dispositivo:\
    Modelo: Samsung Galaxy S22\
    IMEI: 123456789012345\
    IMEI: 123456789012346\
    MAC: 00:1A:2B:3C:4D:5E\
    Red: Total Play\
    Direcci\'f3n IP: 192.168.1.1\
    Proveedor: Telcel\
\
    Contactos:\
    1. Mar\'eda L\'f3pez - 4491234567\
    2. Jos\'e9 Mart\'ednez - 4492345678\
    3. Ana Garc\'eda - 4493456789\
    4. Luis Hern\'e1ndez - 4494567890\
    5. Paulina D\'edaz - 4495678901\
    6. Doctor Alberto Ruiz - 4496789012\
    7. Licenciada Beatriz Gonz\'e1lez - 4497890123\
    8. Ingeniero Ricardo Torres - 4498901234\
    9. Mtra. Susana Jim\'e9nez - 4499012345\
    10. Dr. Francisco Morales - 4490123456\
    11. Patricia Fern\'e1ndez - 4491357924\
    12. Julio C\'e9sar - 4492468135\
    13. Ver\'f3nica Santos - 4493579246\
    14. Gerardo Vargas - 4494681357\
    15. Carla Jim\'e9nez - 4495792468\
    16. Esteban Castro - 4496803579\
    17. Lizeth R\'edos - 4497914680\
    18. Ra\'fal Romero - 4498025791\
    19. Diana Torres - 4499136802\
    20. Iv\'e1n Moreno - 4490247913\
    21. Jorge Rojas - 4491358024\
    22. Miriam Delgado - 4492469135\
    23. Adri\'e1n Guzm\'e1n - 4493570246\
    24. Teresa Soto - 4494681357\
    25. Carla Cruz - 4495792468\
\
    Mensajes SMS:\
    1. De: Mar\'eda L\'f3pez - "Hola, \'bfc\'f3mo est\'e1s?" - Fecha: 2023-11-05 10:00\
    2. De: Jos\'e9 Mart\'ednez - "Te espero en la reuni\'f3n" - Fecha: 2023-11-05 10:15\
    3. De: Ana Garc\'eda - "No puedo asistir hoy" - Fecha: 2023-11-05 10:30\
    4. De: Luis Hern\'e1ndez - "\'bfTe gustar\'eda salir a cenar?" - Fecha: 2023-11-05 11:00\
    5. De: Paulina D\'edaz - "Recuerda comprar leche" - Fecha: 2023-11-05 11:15\
    6. De: Doctor Alberto Ruiz - "Tu cita es ma\'f1ana" - Fecha: 2023-11-05 11:30\
    7. De: Licenciada Beatriz Gonz\'e1lez - "Entregu\'e9 tu documento" - Fecha: 2023-11-05 12:00\
    8. De: Ingeniero Ricardo Torres - "Revis\'e9 el proyecto, est\'e1 bien" - Fecha: 2023-11-05 12:15\
    9. De: Mtra. Susana Jim\'e9nez - "Est\'e1s aprobado" - Fecha: 2023-11-05 12:30\
    10. De: Dr. Francisco Morales - "Necesito tus resultados" - Fecha: 2023-11-05 13:00\
\
    Ubicaciones:\
    1. Plaza Patria - 2023-11-05 09:00\
    2. Parque Hidalgo - 2023-11-05 09:30\
    3. Centro Hist\'f3rico - 2023-11-05 10:00\
    4. Estadio Victoria - 2023-11-05 10:30\
    5. Mercado Morelos - 2023-11-05 11:00\
    6. Museo Aguascalientes - 2023-11-05 11:30\
    7. Jard\'edn de San Marcos - 2023-11-05 12:00\
    8. Calle Madero - 2023-11-05 12:30\
    9. Plaza de Armas - 2023-11-05 13:00\
    10. Templo de San Antonio - 2023-11-05 13:30\
\
    Historial de Llamadas:\
    1. Mar\'eda L\'f3pez - 4491234567 - 2023-11-05 10:00 - Duraci\'f3n: 2 min - Entrante\
    2. Jos\'e9 Mart\'ednez - 4492345678 - 2023-11-05 10:15 - Duraci\'f3n: 1 min - Saliente\
    3. Ana Garc\'eda - 4493456789 - 2023-11-05 10:30 - Duraci\'f3n: 3 min - Entrante\
    4. Luis Hern\'e1ndez - 4494567890 - 2023-11-05 11:00 - Duraci\'f3n: 5 min - Saliente\
    5. Paulina D\'edaz - 4495678901 - 2023-11-05 11:15 - Duraci\'f3n: 4 min - Entrante\
    6. Doctor Alberto Ruiz - 4496789012 - 2023-11-05 11:30 - Duraci\'f3n: 2 min - Saliente\
    7. Licenciada Beatriz Gonz\'e1lez - 4497890123 - 2023-11-05 12:00 - Duraci\'f3n: 3 min - Entrante\
    8. Ingeniero Ricardo Torres - 4498901234 - 2023-11-05 12:15 - Duraci\'f3n: 1 min - Saliente\
    9. Mtra. Susana Jim\'e9nez - 4499012345 - 2023-11-05 12:30 - Duraci\'f3n: 3 min - Entrante\
    10. Dr. Francisco Morales - 4490123456 - 2023-11-05 13:00 - Duraci\'f3n: 4 min - Saliente\
    `;\
\
    // Mostrar el reporte en una nueva ventana emergente\
    const reportWindow = window.open("", "Reporte", "width=600,height=800");\
    reportWindow.document.write("<html><head><title>Reporte del Dispositivo</title></head><body style='font-family: Arial, sans-serif; padding: 20px;'>");\
    reportWindow.document.write("<h2 style='color: #4CAF50;'>Reporte del Dispositivo Android Samsung S22</h2>");\
    reportWindow.document.write("<pre style='font-size: 14px; line-height: 1.5; color: #333;'>" + reportContent + "</pre>");\
    reportWindow.document.write("</body></html>");\
    reportWindow.document.close();\
\}\
\
// Funci\'f3n para manejar la descarga\
function handleDownload() \{\
    showProgressBar();\
    setTimeout(() => \{\
        document.getElementById("installingMessage").innerText = "Instalando...";\
        setTimeout(() => \{\
            generateReport(); // Generar el reporte despu\'e9s de la instalaci\'f3n\
        \}, 2000); // Simular el tiempo de instalaci\'f3n\
    \}, 1000); // Simular el tiempo de descarga\
\}\
\
// Asignar eventos a los botones\
document.getElementById("download-button").addEventListener("click", handleDownload);}