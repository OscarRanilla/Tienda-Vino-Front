// (simulación de datos)

const wines = [
    {
        id: 1,
        name: "Tinto Valdebodega Roble Ribera del Duero",
        image: "/src/assets/ROBLE.jpg",
        price: 9.00,
        description: "100% Tempranillo 75cl 2023 14,5% Vol. 9 meses en barrica de roble",
        stock: 120,
        category: "Tintos",
        tastingNotes: {
            vista: "Cereza granate oscuro.",
            nariz: "Fragante, fresca y expresiva, aromas balsámicos muy finos, Exuberante y pleno en nariz.",
            boca: "Elegante, sedosa, fresca y con sabrosos sabores a vainilla y mantequilla dando un paso en boca muy agradable. Desbordante."
        }
    },
    {
        id: 2,
        name: "Tinto Valdebodega Crianza Ribera del Duero",
        image: "/src/assets/CRIANZA.jpg",
        price: 17.50,
        description: "100% Tempranillo 75cl 2021 Excelente 15% Vol. 15 meses en barrica de roble",
        stock: 100,
        category: "Tintos",
        tastingNotes: {
            vista: "Rojo Picota, muy potente.",
            nariz: "Muy afrutado en nariz, con toques a madera debido a su crianza.",
            boca: "Elegante y con sabrosos sabores a arándanos, frambuesa, mora, cacao y menta dando un paso Desbordante, largo equilibrado en boca, muy agradable al paladar."
        }
    },
    {
        id: 3,
        name: "Tinto Montse Sola Vendimia seleccionada Ribera del Duero",
        image: "/src/assets/MONTSE-SOLA.jpg",
        price: 24.00,
        description: "18 meses en barrica 75cl 14,5% Vol. Frankfurt International Trophy Medalla de plata",
        stock: 20,
        category: "Tintos",
        tastingNotes: {
            vista: "Rojo púrpura y lágrima seductora.",
            nariz: "Aromas de frutos rojos, especias, regaliz, flores azules y recuerdos de bosque definen con cremosos tostados el delicioso cacao muy fino de textura sedosa en nariz.",
            boca: "Sabroso, jugoso y muy equilibrado, con la acidez justa y un final persistente en que se mezclan los recuerdos de fruta madura, hondura y pureza aromática en un vino de extremada finura y al mismo tiempo con mucho cuerpo."
        }
    },
    {
        id: 4,
        name: "Blanco Ladera de los Obispos D.O Rueda 100% Verdejo",
        image: "/src/assets/ladera.png",
        price: 4.78,
        description: "100% Verdejo 2023 75cl 12,5% Vol.",
        stock: 50,
        category: "Blancos",
        tastingNotes: {
            vista: "Color amarillo pálido cargado de reflejos de 'verde oliva' de impecable brillo.",
            nariz: "Los aromas nos muestran la frescura en estado natural del verdejo donde aparecen flores blancas de naranjo, la piña recién licuada o algunas plantas aromáticas como lamelisa de limón.",
            boca: "Como es característico del Verdejo se muestra contundente. Con entradamelosa acariciando el paladar, con una acidez fresca que invita a saborearlo delicadamente y un final explosivo cargado de recuerdos a frutas verdes y lima."
        }
    },
    {
        id: 5,
        name: "Blanco La Cigarra y La Hormiga D.O Rueda 100% Verdejo",
        image: "/src/assets/La-Cigarra.jpg",
        price: 4.78,
        description: "100% Verdejo 2023 75cl 12,5% Vol.",
        stock: 80,
        category: "Blancos",
        tastingNotes: {
            vista: "En la copa se intercalan haces luminosos que cargan los pliegues entre verdes y amarillos de intensidad media.",
            nariz: "Cuando un vino se funde en perfume este puede denominarse 'verdejo', una sinfonía de frescura aromática con algún recuerdo a laurel y membrillo con un fondo de fruta blanca.",
            boca: "En la boca es un vino compacto donde su única angulosidad es la pronunciación de sus sensaciones sápidas con una buena estructura, acidez correcta y un final muy notable."
        }
    },
    {
        id: 6,
        name: "Blanco Caniche D.O Rueda 100% Verdejo",
        image: "/src/assets/CANICHE.jpg",
        price: 4.72,
        description: "100% Verdejo 2023 75cl 12,5% Vol.",
        stock: 50,
        category: "Blancos",
        tastingNotes: {
            vista: "Color amarillo pajizo brillante con reflejos verdosos.",
            nariz: "Se muestra limpio de gran intensidad aromática, posee notas cítricas y de fruta blanca así como aromas herbáceos como el hinojo en nariz.",
            boca: "Es untuoso, fresco y elegante con el suave toque de amargor al final característico de la variedad verdejo. Una acidez adecuada le dota de frescura y vigor, adquiriendouna expresividad envolvente que desarrollará un cúmulo de sensaciones atractivas y apetecibles."
        }
    },
    {
        id: 7,
        name: "Blanco Trascampanas D.O Rueda 100% Verdejo",
        image: "/src/assets/TRASCAMPANAS.jpg",
        price: 8.50,
        description: "100% Verdejo 2023 75cl 13% Vol.",
        stock: 60,
        category: "Blancos",
        tastingNotes: {
            vista: "Color amarillo pajizo con notas verdes y lágrima globosa que nos da pista sobre el potencial glicérico.",
            nariz: "Sus aromas son clásicos y poderosos, varietales, hierbas verdes, mineral y cítrico.",
            boca: "Un paso de boca lento y sedoso, acidez sobria que le da garantía de longevidad y un final de boca con recuerdos amargos y sensaciones sápidas, equilibradas y persistentes."
        }
    },
    {
        id: 8,
        name: "Blanco Náuva D.O Rueda 100% Verdejo",
        image: "/src/assets/Nauva.jpg",
        price: 7.50,
        description: "100% Verdejo 2023 75cl 13,5% Vol.",
        stock: 120,
        category: "Blancos",
        tastingNotes: {
            vista: "Amarillo pajizo brillante, con ligeras irisaciones verdosas.",
            nariz: "Tiene una buena potencia aromática, con notas de hierbas silvestres, recuerdos de bosque, junto a notas de frutas blancas: lichis, pera, chirimoya.",
            boca: "Tiene un tacto glicérico, con buen equilibrio entre la acidez y el alcohol que le da frescura y un paso de boca elegante y amplio, con agradables tonos frutales y un final intenso."
        }
    }
];

export default wines;