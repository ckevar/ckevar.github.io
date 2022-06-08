const ids = ['EDUCATION_id','EXPERIENCE_id','PROJECTS_id','greetings_id','currentPosition_id','download_CV_id','education_history_id','bachelor_id','member_cidi_id','MSc_ECS_id','work_experience_id','technical_assistant_id','technical_assistant_id_desc_0','technical_assistant_id_desc_1','research_assistant_id','research_assistant_desc_id','research_intern_id','research_intern_desc_id','prjects_id','online_weather_fetcher_id','online_weather_fetcher_desc_id','real_time_digital_watch_id','real_time_digital_watch_desc_id','anomaly_class_mamo_id','anomaly_class_mamo_desc0_id','anomaly_class_mamo_desc1_id','unicycle_id','unicycle_desc1_id','unicycle_desc0_id','care_id','care_desc0_id','care_desc1_id','iir_filter_vhdl_id','iir_filter_vhdl_desc_id','awards_id','award_1_id','award_0_id','photography_id','baking_id','cooking_id','guitar_id','strength_id'];
const esp_lang = ['EDUCACIÓN','EXPERIENCIA','PROYECTOS','Hola, Soy Christian<br>K. Alvarado','Estudiante de Sistemas Embebidos','Descargar CV','Educación','Bachiller en Ingenieria Mecatronica, 2013.','Miembro del Centro de Investigacion y Desarrollo de Ingenieria.','MSc. (Estudiante) Embedded Computing Systems','Experiencia Laboral','ASISTENTE TÉCNICO','Desarrollo de Framework para analizar y presentar datos de detectores Cherenkov de Agua de los andes peruanos (Latin American Giant Observatory - LAGO Project).','Miembro de la expedición científica Antártida ANTAR XXV a la isla King George para la instalación y funcionamiento de un Detector Cherenkov de Agua, 2018.','ASISTENTE DE INVESTIGACIÓN','Diseño de software para recibir y presentar datos de globos sonda.','PASANTE DE INVESTIGACIÓN','Ensayo y calibración de instrumentos para globos sonda.','Proyectos','Recolector de Informacion Climatica','Usa un STM32F4-discovery y un ESP8266 para descargar y presentar informacion climatica de Openweather.org de una locacion dada por IP-API.com.','Reloj Digital en Tiempo Real','Implementa un reloj digital usando Erika OS en un STM32F4-discovery.','Clasificador de Anomalias en Mamografías','Evaluación en Tensorflow de diferentes modelos: from-scratch, VGG16 e InceptionV3 para clasificar masas benignas y malignas.','Diseño de un Composite Classifier basado en la valoracion de opinion (Opinion Rating).','Monociclo: Precesión del giroscopio y optimización de trayectoria','Simulación en Matlab de un underactuated robot (monociclo) que usa el efecto de precesión de giroscopio para controlar el eje yaw.','La trayectoria es planeada resolviendo un problema no linear limitado por la dinámica del robot.','CARe: Prototipo de un detector de distracción y Monitor de Bienestar para Conductores','Seguimiento ocular y del ritmo cardíaco en tiempo real, explotando la librerías de OpenCV para el reconocimiento facial y el sensor PPG para el ritmo cardíaco.','Implementado en C/C++ en una Raspberry Pi 2.','Filtro IIR en VHDL','Implementado en VHDL y probado con señales entre 1kHz y 10kHz.','Premios','Ganador de una subvención por mejor estudiante internacional, 2019','Ganador de una subvención para estudiantes internacionales nuevos, 2018','Fotografía','Repostería','Cocina','Guitarra','Habilidades'];
const eng_lang = ['EDUCATION','EXPERIENCE','PROJECTS','Hi, I\'m Christian<br>K. Alvarado','Embedded Computing Systems Student','Download CV','Education History','Bachelor in Mechatronics Engineering, 2013.','Member, Center of Research and Developtment of Engineering.','MSc. (Student) Embedded Computing Systems','Work Experience','TECHNICAL ASSISTANT','Framework development to analyze and present Water Cherenkov Detectors data from the Peruvian andes (Latin American Giant Observatory - LAGO Project).','Member, Scientific expedition Antartica ANTAR XXV to King George island for installing and running a Water Cherenkov Detector, 2018.','RESEARCH ASSISTANT','Software design to receive and present data from high weather balloon.','RESEARCH INTERN','Test and calibration of instruments for high weather balloon.','Projects','Online Weather Fetcher','Uses STM32f4-discovery and ESP8266 to fetch and display weather information from Openweather.org by a location requested on IP-API.com.','Real-Time Digital Watch','It implements a digital watch using Erika OS on a STM32F4-discovery board.','Anomaly Classification on Mamographies','Evaluation with Tensorflow of from-scratch, VGG16 and InceptionV3 models to classify benign and malignant masses.','A composite classifier was design with an Opinion Rating approach.','Unicycle: Gyroscope Precession and Trajectory Optimization','Simulation on Matlab of underactuated unicycle robot that uses gyroscope precession to control the yaw angle.','The trajectory is planned by solving a nonlinear problem constrained by the robot\'s dynamics.','CARe: Prototype of a Distraction Detector and Health Monitoring for Car Drivers','Real-time eye tracking and heart rate monitoring by exploting Open-CV face recognition API and a PPG sensor for the heartbeat.','Implemented in C/C++ on a Raspberry Pi 2.','IIR Filter on VHDL','An IIR Filter for signals between 1kHz and 10kHz.','Awards','Grant winner for best international student, 2019.','Grant winner for international incoming students, 2018.','Photography','Baking','Cooking','Guitar Playing','Strength'];
const ita_lang = ['FORMAZIONE','ESPERIENZA','PROGETTI','Ciao, Sono Christian<br>K. Alvarado','Studente di Computing Systems','Scaricare CV','Formazione','Triennale in Ingegneria Meccatronica, 2013.','Membro del Centro di ricerca e sviluppo dell\'ingegneria.','MSc./Magistrale (Studente) Embedded Computing Systems','Esperienza','ASSISTENTE TECNICO','Sviluppo di un framework per analizzare e presentare i dati dei rivelatori Cherenkov dell\'acqua dalle Ande peruviane (Latin American Giant Observatory - LAGO Project).','Membro della spedizione scientifica Antartica ANTAR XXV all\'isola di King George per l\'installazione e la gestione di un rivelatore Cherenkov dell\'acqua, 2018.','ASSISTENTE DI RICERCA','Progettazione del software per ricevere e presentare i dati da un palloni sonde.','STAGISTA DI RICERCA','Test e calibrazione di strumenti per palloni sonde.','Progetti','Fetcher di tempo online','Utilizza una scheda STM32F4-discovery e un modulo ESP8266 per per ottenere e visualizzare informazioni meteorologiche da Openweather.org in base a una località richiesta su IP-API.com.','Orologio Digitale in Tempo Reale','Implementa un orologio digitale utilizzando il sistema operativo Erika su una scheda STM32F4-discovery.','Anomaly Classification on Mamographies','Valutazione con Tensorflow di from-scratch, VGG16 e InceptionV3 per classificare masse benigne e maligne.','Progettato un Composite Classifier approccio di Opinion Rating.','Unicycle: Gyroscope Precession and Trajectory Optimization','Simulazione su Matlab di un robot monociclo sottoattuato che utilizza la precessione del giroscopio per controllare l\'asse yaw.','La traiettoria viene pianificata risolvendo un problema non lineare vincolato dalla dinamica del robot.','CARe: Prototipo de un detector de distraccion y Monitor de Bienestar para Conductores.','Monitoraggio in tempo reale degli occhi e della frequenza cardiaca mediante l\'utilizzo di API Open-CV per il riconoscimento dei volti e di un sensore PPG per la frequenza cardiaca.','Implementato in C/C++ su un Raspberry Pi 2.','Filtro IIR in VHDL','Un filtro IIR per segnali tra 1kHz e 10kHz.','Premi','Vincitore della borsa di studio per il miglior studente internazionale, 2019.','Vincitore di una borsa di studio per studenti internazionali in entrata, 2018.','Fotografia','Panificazione','Cucina','Chitarra','Competenze'];
const hrefs_eei = ['https://www.dropbox.com/s/fj0c0ool0dc7z81/ChristianAlvarado_CV_Espanol.pdf?dl=1','https://www.dropbox.com/s/2c2afcie6ya960l/ChristianAlvarado_CV_English.pdf?dl=1','https://www.dropbox.com/s/cmwm75x072emvfa/ChristianAlvarado_CV_Italiano.pdf?dl=1'];

function switchLAN(lang, href_idx) {
	for (var i = 0; i < lang.length; i++) {
		document.getElementById(ids[i]).innerHTML = lang[i];
	}
	document.getElementById("downloadble_link_cv").href = hrefs_eei[href_idx];
	document.getElementById("footer_downloadble_link_cv").href = hrefs_eei[href_idx];
}
function switchESP() {
	switchLAN(esp_lang, 0);
}

function switchENG() {
	switchLAN(eng_lang, 1);
}


function switchITA() {
	switchLAN(ita_lang, 2);
}
