// =========================================================================
// TU BASE DE DATOS MANUAL
// =========================================================================
const PROGRAMACION_DIARIA = {
    "2026-06-01": { diaHebreo: "15 del 3°M", esRoshJodesh: false, notas: "" },
    "2026-06-02": { diaHebreo: "16 del 3°M", esRoshJodesh: false, notas: "" },
    "2026-06-03": { diaHebreo: "17 del 3°M", esRoshJodesh: false, notas: "" },
    "2026-06-04": { diaHebreo: "18 del 3°M", esRoshJodesh: false, notas: "" },
    "2026-06-05": { diaHebreo: "19 del 3°M", esRoshJodesh: false, notas: "" },
    "2026-06-06": { diaHebreo: "20 del 3°M", esRoshJodesh: false, notas: "Shabat" },
    "2026-06-07": { diaHebreo: "21 del 3°M", esRoshJodesh: false, notas: "" },
    "2026-06-08": { diaHebreo: "22 del 3°M", esRoshJodesh: false, notas: "" },
    "2026-06-09": { diaHebreo: "23 del 3°M", esRoshJodesh: false, notas: "" },
    "2026-06-10": { diaHebreo: "24 del 3°M", esRoshJodesh: false, notas: "" },
    "2026-06-11": { diaHebreo: "25 del 3°M", esRoshJodesh: false, notas: "" },
    "2026-06-12": { diaHebreo: "26 del 3°M", esRoshJodesh: false, notas: "" },
    "2026-06-13": { diaHebreo: "27 del 3°M", esRoshJodesh: false, notas: "Shabat" },
    "2026-06-14": { diaHebreo: "28 del 3°M", esRoshJodesh: false, notas: "" },
    "2026-06-15": { diaHebreo: "29 del 3°M", esRoshJodesh: false, notas: "" },
    "2026-06-16": { diaHebreo: "1 del 4°M", esRoshJodesh: true, notas: "Inicio de mes" },
    "2026-06-17": { diaHebreo: "2 del 4°M", esRoshJodesh: false, notas: "" },
    "2026-06-18": { diaHebreo: "3 del 4°M", esRoshJodesh: false, notas: "" },
    "2026-06-19": { diaHebreo: "4 del 4°M", esRoshJodesh: false, notas: "" },
    "2026-06-20": { diaHebreo: "5 del 4°M", esRoshJodesh: false, notas: "Shabat" },
    "2026-06-21": { diaHebreo: "6 del 4°M", esRoshJodesh: false, notas: "" },
    "2026-06-22": { diaHebreo: "7 del 4°M", esRoshJodesh: false, notas: "" },
    "2026-06-23": { diaHebreo: "8 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-06-24": { diaHebreo: "9 del 4°M", esRoshJodesh: false, notas: "" },
    "2026-06-25": { diaHebreo: "10 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-06-26": { diaHebreo: "11 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-06-27": { diaHebreo: "12 del 4°M", esRoshJodesh: false, notas: "Shabat" }, 
    "2026-06-28": { diaHebreo: "13 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-06-29": { diaHebreo: "14 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-06-30": { diaHebreo: "15 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-01": { diaHebreo: "16 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-02": { diaHebreo: "17 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-03": { diaHebreo: "18 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-04": { diaHebreo: "19 del 4°M", esRoshJodesh: false, notas: "Shabat" }, 
    "2026-07-05": { diaHebreo: "20 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-06": { diaHebreo: "21 del 4°M", esRoshJodesh: false, notas: "" },
    "2026-07-07": { diaHebreo: "22 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-08": { diaHebreo: "23 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-09": { diaHebreo: "24 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-10": { diaHebreo: "25 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-11": { diaHebreo: "26 del 4°M", esRoshJodesh: false, notas: "Shabat" }, 
    "2026-07-12": { diaHebreo: "27 del 4°M", esRoshJodesh: false, notas: "" },
    "2026-07-13": { diaHebreo: "28 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-14": { diaHebreo: "29 del 4°M", esRoshJodesh: false, notas: "" },
    "2026-07-15": { diaHebreo: "30 del 4°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-16": { diaHebreo: "1 del 5°M", esRoshJodesh: true, notas: "Inicio de mes" }, 
    "2026-07-17": { diaHebreo: "2 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-18": { diaHebreo: "3 del 5°M", esRoshJodesh: false, notas: "Shabat" }, 
    "2026-07-19": { diaHebreo: "4 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-20": { diaHebreo: "5 del 5°M", esRoshJodesh: false, notas: "" },
    "2026-07-21": { diaHebreo: "6 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-22": { diaHebreo: "7 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-23": { diaHebreo: "8 del 5°M", esRoshJodesh: false, notas: "" },
    "2026-07-24": { diaHebreo: "9 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-25": { diaHebreo: "10 del 5°M", esRoshJodesh: false, notas: "Shabat" },
    "2026-07-26": { diaHebreo: "11 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-27": { diaHebreo: "12 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-28": { diaHebreo: "13 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-29": { diaHebreo: "14 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-30": { diaHebreo: "15 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-07-31": { diaHebreo: "16 del 5°M", esRoshJodesh: false, notas: "" },
    "2026-08-01": { diaHebreo: "17 del 5°M", esRoshJodesh: false, notas: "Shabat" },
    "2026-08-02": { diaHebreo: "18 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-03": { diaHebreo: "19 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-04": { diaHebreo: "20 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-05": { diaHebreo: "21 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-06": { diaHebreo: "22 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-07": { diaHebreo: "23 del 5°M", esRoshJodesh: false, notas: "" },
    "2026-08-08": { diaHebreo: "24 del 5°M", esRoshJodesh: false, notas: "Shabat" },
    "2026-08-09": { diaHebreo: "25 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-10": { diaHebreo: "26 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-11": { diaHebreo: "27 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-12": { diaHebreo: "28 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-13": { diaHebreo: "29 del 5°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-14": { diaHebreo: "1 del 6°M", esRoshJodesh: true, notas: "Inicio de mes" },
    "2026-08-15": { diaHebreo: "2 del 6°M", esRoshJodesh: false, notas: "Shabat" }, 
    "2026-08-16": { diaHebreo: "3 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-17": { diaHebreo: "4 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-18": { diaHebreo: "5 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-19": { diaHebreo: "6 del 6°M", esRoshJodesh: false, notas: "" },
    "2026-08-20": { diaHebreo: "7 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-21": { diaHebreo: "8 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-22": { diaHebreo: "9 del 6°M", esRoshJodesh: false, notas: "Shabat" }, 
    "2026-08-23": { diaHebreo: "10 del 6°M", esRoshJodesh: false, notas: "" },
    "2026-08-24": { diaHebreo: "11 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-25": { diaHebreo: "12 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-26": { diaHebreo: "13 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-27": { diaHebreo: "14 del 6°M", esRoshJodesh: false, notas: "" },
    "2026-08-28": { diaHebreo: "15 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-29": { diaHebreo: "16 del 6°M", esRoshJodesh: false, notas: "Shabat" }, 
    "2026-08-30": { diaHebreo: "17 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-08-31": { diaHebreo: "18 del 6°M", esRoshJodesh: false, notas: "" },
    "2026-09-01": { diaHebreo: "20 del 6°M", esRoshJodesh: false, notas: "" },
    "2026-09-02": { diaHebreo: "21 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-09-03": { diaHebreo: "22 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-09-04": { diaHebreo: "23 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-09-05": { diaHebreo: "24 del 6°M", esRoshJodesh: false, notas: "Shabat" },
    "2026-09-06": { diaHebreo: "25 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-09-07": { diaHebreo: "26 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-09-08": { diaHebreo: "27 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-09-09": { diaHebreo: "28 del 6°M", esRoshJodesh: false, notas: "" },
    "2026-09-10": { diaHebreo: "29 del 6°M", esRoshJodesh: false, notas: "" }, 
    "2026-09-11": { diaHebreo: "30 del 6°M", esRoshJodesh: false, notas: "" },
    "2026-09-12": { diaHebreo: "1 del 7°M", esRoshJodesh: true, notas: "Inicio de mes", notas:"Yom Teruah", notas:"Shabat" }, 
    "2026-09-13": { diaHebreo: "2 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-09-14": { diaHebreo: "3 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-09-15": { diaHebreo: "4 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-09-16": { diaHebreo: "5 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-09-17": { diaHebreo: "6 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-09-18": { diaHebreo: "7 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-09-19": { diaHebreo: "8 del 7°M", esRoshJodesh: false, notas: "Shabat" },
    "2026-09-20": { diaHebreo: "9 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-09-21": { diaHebreo: "10 del 7°M", esRoshJodesh: false, notas: "Yom Kipur" },
    "2026-09-22": { diaHebreo: "11 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-09-23": { diaHebreo: "12 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-09-24": { diaHebreo: "13 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-09-25": { diaHebreo: "14 del 7°M", esRoshJodesh: false, notas: "Inicio de Sukot" },
    "2026-09-26": { diaHebreo: "15 del 7°M", esRoshJodesh: false, notas: "Shabat" },
    "2026-09-27": { diaHebreo: "16 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-09-28": { diaHebreo: "17 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-09-29": { diaHebreo: "18 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-09-30": { diaHebreo: "19 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-10-01": { diaHebreo: "20 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-10-02": { diaHebreo: "21 del 7°M", esRoshJodesh: false, notas: "Cierre de Sukot" },
    "2026-10-03": { diaHebreo: "22 del 7°M", esRoshJodesh: false, notas: "Shabat" },
    "2026-10-04": { diaHebreo: "23 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-10-05": { diaHebreo: "24 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-10-06": { diaHebreo: "25 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-10-07": { diaHebreo: "26 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-10-08": { diaHebreo: "27 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-10-09": { diaHebreo: "28 del 7°M", esRoshJodesh: false, notas: "" },
    "2026-10-10": { diaHebreo: "29 del 7°M", esRoshJodesh: false, notas: "Shabat" },
    "2026-10-11": { diaHebreo: "1 del 8°M", esRoshJodesh: false, notas: "" },  
};



// =========================================================================
// MOTOR DE RENDIMIENTO Y NAVEGACIÓN
// =========================================================================
let fechaActual = new Date();
const nombresMesesGregorianos = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function formatearFechaID(fecha) {
    const yyyy = fecha.getFullYear();
    const mm = String(fecha.getMonth() + 1).padStart(2, '0');
    const dd = String(fecha.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

function renderizarCalendario() {
    const grid = document.getElementById('calendario-grid');
    const titulo = document.getElementById('mes-gregoriano-titulo');
    grid.innerHTML = ''; 

    const anio = fechaActual.getFullYear();
    const mes = fechaActual.getMonth();
    titulo.innerText = `${nombresMesesGregorianos[mes]} ${anio}`;

    const primerDiaIndex = new Date(anio, mes, 1).getDay();
    const totalDiasMes = new Date(anio, mes + 1, 0).getDate();

    // Celdas vacías desfasadas (Adaptadas para celular)
    for (let i = 0; i < primerDiaIndex; i++) {
        const celdaVacia = document.createElement('div');
        celdaVacia.className = "p-1 md:p-4 bg-slate-800/20 border border-slate-700/40 rounded-xl min-h-[110px] md:min-h-[140px]";
        grid.appendChild(celdaVacia);
    }

    // Creación de celdas
    for (let dia = 1; dia <= totalDiasMes; dia++) {
        const celda = document.createElement('div');
        
        const fechaManana = new Date(anio, mes, dia);
        const idManana = formatearFechaID(fechaManana);
        const datosManana = PROGRAMACION_DIARIA[idManana] || { diaHebreo: "S/N", esRoshJodesh: false, notas: "" };

        const fechaTarde = new Date(anio, mes, dia + 1);
        const idTarde = formatearFechaID(fechaTarde);
        const datosTarde = PROGRAMACION_DIARIA[idTarde] || { diaHebreo: "S/N", esRoshJodesh: false, notas: "" };

        // min-h-[150px] en celular para que quepa todo el texto verticalmente sin amontonarse
        celda.className = "celda-dia p-1.5 md:p-3 border border-slate-700 rounded-xl min-h-[150px] md:min-h-[140px] flex flex-col justify-between text-left bg-hebreo-tarde shadow-inner cursor-pointer";

        // Estilos de los carteles
        let cartelRoshJodesh = datosTarde.esRoshJodesh ? `<span class="text-[8px] md:text-[9px] bg-purple-600 text-white px-1 py-0.5 rounded font-bold block text-center mt-1 break-words">👑 ROSH JÓDESH</span>` : '';
        let cartelNotaTarde = datosTarde.notas ? `<span class="text-[8px] md:text-[9px] bg-red-600 text-white px-1 py-0.5 rounded font-bold block text-center mt-1 break-words">🎉 ${datosTarde.notas}</span>` : '';
        let cartelNotaManana = datosManana.notas ? `<span class="text-[8px] md:text-[9px] bg-blue-950 text-blue-300 px-1 py-0.5 rounded font-medium block mt-1 border border-blue-900 break-words">${datosManana.notas}</span>` : '';

        celda.innerHTML = `
            <div class="flex flex-col sm:flex-row justify-between items-start gap-1 w-full">
                <span class="text-xl md:text-2xl font-black text-slate-200 leading-none">${dia}</span>
                <div class="text-left sm:text-right w-full sm:max-w-[70%]">
                    <span class="text-[8px] md:text-[10px] text-slate-400 font-bold bg-slate-700 px-1 py-0.5 rounded block truncate">
                        ☀️ ${datosManana.diaHebreo}
                    </span>
                    ${cartelNotaManana}
                </div>
            </div>
            
            <div class="text-right mt-auto pt-2 w-full">
                <span class="text-[8px] md:text-[10px] text-amber-200 font-black bg-amber-950/40 border border-amber-900/40 px-1 py-0.5 rounded-sm block text-center truncate">
                    🌅 ${datosTarde.diaHebreo}
                </span>
                ${cartelRoshJodesh}
                ${cartelNotaTarde}
            </div>
        `;

        grid.appendChild(celda);
    }
}

// Eventos de botones de navegación
document.getElementById('btn-prev').addEventListener('click', () => {
    fechaActual.setMonth(fechaActual.getMonth() - 1);
    renderizarCalendario();
});

document.getElementById('btn-next').addEventListener('click', () => {
    fechaActual.setMonth(fechaActual.getMonth() + 1);
    renderizarCalendario();
});

// Lanzar el calendario
renderizarCalendario();
