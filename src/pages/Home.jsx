import {
    Box,
    Heading,
    Button,
    Image,
    Text,
    Stack,
    SimpleGrid,
} from "@chakra-ui/react";
import Slider from "react-slick";

const wines = [
    {
        id: 1,
        name: "Tinto Valdebodega Roble Ribera del Duero",
        image: "/src/assets/ROBLE.jpg",
        price: "9.00 €",
        description: "100% Tempranillo 75cl 2023 14,5% Vol. 9 meses en barrica de roble",
    },
    {
        id: 2,
        name: "Tinto Valdebodega Crianza Ribera del Duero",
        image: "/src/assets/CRIANZA.jpg",
        price: "17.50 €",
        description: "100% Tempranillo 75cl 2021 Excelente 15% Vol. 15 meses en barrica de roble",
    },
    {
        id: 3,
        name: "Tinto Montse Sola Vendimia seleccionada Ribera del Duero",
        image: "/src/assets/MONTSE-SOLA.jpg",
        price: "24.00 €",
        description: "18 meses en barrica 75cl 14,5% Vol. Frankfurt International Trophy Medalla de plata",
    },
    {
        id: 4,
        name: "Blanco Ladera de los Obispos D.O Rueda 100% Verdejo",
        image: "/src/assets/ladera.png",
        price: "4,78 €",
        description: "100% Verdejo 2023 75cl 12,5% Vol.",
    },
    {
        id: 5,
        name: "Blanco La Cigarra y La Hormiga D.O Rueda 100% Verdejo",
        image: "/src/assets/La-Cigarra.jpg",
        price: "4,78 €",
        description: "100% Verdejo 2023 75cl 12,5% Vol.",
    },
    {
        id: 6,
        name: "Blanco Caniche D.O Rueda 100% Verdejo",
        image: "/src/assets/CANICHE.jpg",
        price: "4,72 €",
        description: "100% Verdejo 2023 75cl 12,5% Vol.",
    },
    {
        id: 7,
        name: "Blanco Trascampanas D.O Rueda 100% Verdejo",
        image: "/src/assets/TRASCAMPANAS.jpg",
        price: "8.50 €",
        description: "100% Verdejo 2023 75cl 13% Vol.",
    },
    {
        id: 8,
        name: "Blanco Náuva D.O Rueda 100% Verdejo",
        image: "/src/assets/Nauva.jpg",
        price: "7.50€",
        description: "100% Verdejo 2023 75cl 13,5% Vol.",
    }
];

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Box p={8}>
            <Heading mb={4}>¡Bienvenido a la tienda de vinos! 🍷</Heading>
            <Button colorScheme="purple" mb={6}>
                Ver vinos
            </Button>

        {/* Carrusel */}
        <Slider {...settings}>
            {wines.map((wine) => (
                <Box key={wine.id} p={4}>
                    <Image
                        src={wine.image}
                        alt={wine.name}
                        mx="auto"
                        maxH="400px"
                        objectFit="cover"
                        borderRadius="2xl"
                        shadow="md"
                    />
                    <Heading size="md" mt={4}>
                        {wine.name}
                    </Heading>
                    <Text color="gray.600">{wine.price}</Text>
                    <Text fontSize="sm" mt={2}>
                        {wine.description}
                    </Text>
                </Box>
            ))}
        </Slider>

        {/* Listado de productos */}
        <Heading mt={12} mb={4}>
            Nuestros vinos
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {wines.map((wine) => (
                <Box
                    key={wine.id}
                    borderWidth="1px"
                    borderRadius="xl"
                    overflow="hidden"
                    p={4}
                >
                    <Image
                        src={wine.image}
                        alt={wine.name}
                        borderRadius="lg"
                        maxH="180px"
                        objectFit="cover"
                        mx="auto"
                    />
                    <Stack spacing={2} mt={3}>
                        <Heading size="sm">{wine.name}</Heading>
                        <Text fontSize="sm">{wine.description}</Text>
                        <Text fontWeight="bold">{wine.price}</Text>
                        <Button colorScheme="purple" size="sm">
                            Añadir al carrito
                        </Button>
                    </Stack>
                </Box>
            ))}
        </SimpleGrid>
        </Box>
    );
}

export default Home;

