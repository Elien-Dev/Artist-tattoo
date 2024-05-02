import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers"; // Importación de componentes de date-pickers de MUI
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3"; // Importación del adaptador de date-fns para MUI

import { esES } from "@mui/x-date-pickers/locales"; // Importación del locale de español para MUI date-pickers
import { es } from "date-fns/locale/es"; // Importación del locale de español para date-fns

import { createTheme, ThemeProvider } from "@mui/material/styles"; // Importación de componentes de estilos de MUI

export default function Reserve_Whit_Us() { // Definición del componente Reserve_Whit_Us
  const customEnLocale = { // Definición de un objeto de localización personalizado para español
    ...es, // Se heredan todas las configuraciones del locale de español
    options: {
      ...es.options,
      weekStartsOn: 1, // La semana comienza en lunes (1)
    },
  };

  const theme = createTheme( // Creación de un tema personalizado de MUI
    {
      palette: { // Definición de la paleta de colores del tema
        primary: { // Color primario
          main: "#ffe100", // Tono principal de amarillo
          dark: "true", // Se establece como oscuro
        },
        background: { // Color de fondo
          paper: '#333333b1', // Color de fondo de papel semitransparente
          backDropFilter: 'blur(5px)', // Aplicación de efecto de desenfoque al fondo
        },
        text: { // Colores de texto
          primary: '#ffffff', // Texto principal en blanco
          secondary: '#ffe100', // Texto secundario en amarillo
        },
      },
    },
    esES // Se utiliza el locale de español para el tema
  );

  return (
    <section className="sec-reserve"> {/* Inicio de la sección de reserva */}
      <div className="sec-reserve__content"> {/* Contenedor de contenido */}
        <h2 className="sec-reserve__content--title">Reserva con nosotros</h2> {/* Título */}
        <LocalizationProvider /* Proveedor de localización para los date-pickers */
          dateAdapter={AdapterDateFns} // Se utiliza el adaptador de date-fns
          adapterLocale={customEnLocale} // Se utiliza el locale personalizado de español
          localeText={ // Texto de localización para MUI date-pickers
            esES.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <div className="sec-reserve__content--calendar"> {/* Contenedor del calendario */}
            <ThemeProvider theme={theme}> {/* Proveedor de tema */}
              <StaticDatePicker sx={{ // Selector de fecha estática
                color: '#fff', // Color de texto en blanco
                borderRadius: 2, // Borde redondeado
                boxShadow: '1px 2px 6px 1px #0e0e0e', // Sombra
              }}/>
            </ThemeProvider>
          </div>
        </LocalizationProvider>
      </div>

      <div className="sec-reserve__content"> {/* Segundo contenedor de contenido */}
        <h3 className="sec-reserve__content--title"> {/* Título */}
          Tu cita para venir a SoleaRt es para:
        </h3>
        <article className="sec-reserve__date">00/00/00000</article> {/* Fecha de la cita */}
      </div>
    </section> /* Fin de la sección de reserva */
  );
}


// import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

// import { esES } from "@mui/x-date-pickers/locales";
// import { es } from "date-fns/locale/es";

// import { createTheme, ThemeProvider } from "@mui/material/styles";

// export default function Reserve_Whit_Us() {
//   const customEnLocale = {
//     ...es,
//     options: {
//       ...es.options,
//       weekStartsOn: 1,
//     },
//   };

//   const theme = createTheme(
//     {
//       palette: {
//         primary: {
//           main: "#ffe100",
//           dark: "true",
//         },
//         background: {
//           paper: '#333333b1',
//           backDropFilter: 'blur(5px)',
//         },
//         text: {
//           primary: '#ffffff',
//           secondary: '#ffe100',
//         },
//       },
//     },
//     esES
//   );

//   return (
//     <section className="sec-reserve">
//       <div className="sec-reserve__content">
//         <h2 className="sec-reserve__content--title">Reserva con nosotros</h2>
//         <LocalizationProvider
//           dateAdapter={AdapterDateFns}
//           adapterLocale={customEnLocale}
//           localeText={
//             esES.components.MuiLocalizationProvider.defaultProps.localeText
//           }
//         >
//           <div className="sec-reserve__content--calendar">
//             <ThemeProvider theme={theme}>
//               <StaticDatePicker sx={{
//                 color: '#fff',
//                 borderRadius: 2,
//                 boxShadow: '1px 2px 6px 1px #0e0e0e',
                
//               }}/>
//             </ThemeProvider>
//           </div>
//         </LocalizationProvider>
//       </div>

//       <div className="sec-reserve__content">
//         <h3 className="sec-reserve__content--title">
//           Tu cita para venir a SoleaRt es para:
//         </h3>
//         <article className="sec-reserve__date">00/00/00000</article>
//       </div>
//     </section>
//   );
// }

// import { esES } from '@mui/x-date-pickers/locales';
// localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
