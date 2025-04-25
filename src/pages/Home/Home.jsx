import React, { useState, useEffect } from 'react';
import { Box, Heading, SimpleGrid, Button, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import './Home.css';

function Home() {
    const [wines, setWines] = useState([]);                             // ⬅ vacío
    const urlApi = import.meta.env.VITE_API_URL + '/wines';          // ⬅ endpoint

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    useEffect(() => {
        (async () => {
            try {
                const res   = await fetch(urlApi);
                const data  = await res.json();
                console.log('🎯 Datos recibidos →', data); 
                setWines(data.wines);
            } catch (err) {
                console.error('Error cargando vinos:', err);
            }
        })();
    }, []);

    if (!wines.length) {
        return (
            <Box minH="80vh" display="flex" alignItems="center" justifyContent="center">
                <span className="loader"></span>
            </Box>
        );
    }
    return (
        <Box position="relative" minH="80vh">
            {/* Hero section con imagen o video */}
            <div className="hero-home">
                <img src="/home1.jpg" alt="hero" className="hero-image" />
                <div className="hero-overlay">
                    <Heading mb={2} color="#FFF">Falcon Crest Wines</Heading>
                    <Text color="#FFF" mb={4} maxW="600px" textAlign="center">
                        Descubre nuestra increíble selección de vinos españoles 
                        y vive una experiencia única en cada copa.
                    </Text>
                    <Button bg="#FAB12F" color="#FFF" _hover={{ bg: '#FA812F' }}>
                        Ver nuestra tienda
                    </Button>
                </div>
            </div>
    
            {/* Carrusel */}
            <Box p={4}>
                <Heading mt={12} mb={4} color="#FA4032">Vinos Destacados</Heading>
                <Box className="home-carousel" maxW="600px" mx="auto" mb={8}>
                    <Slider {...settings}>
                        {wines.map((wine) => (
                            <Box key={wine._id} p={4} textAlign="center">
                                <img
                                    src={wine.image}
                                    alt={wine.name}
                                    className="carousel-image"
                                />
                                <Heading size="md" mt={4}>{wine.name}</Heading>
                                <Text color="gray.600">{wine.price.toFixed(2)} €</Text>
                                <Text fontSize="sm" mt={2}>{wine.description}</Text>
                            </Box>
                        ))}
                    </Slider>
                </Box>
    
                {/* Grid de productos */}
                <Heading mt={12} mb={4} color="#FA4032">Nuestra Selección</Heading>
                <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                    {wines.map((wine) => (
                        <Box
                            key={wine._id}
                            borderWidth="1px"
                            borderRadius="xl"
                            overflow="hidden"
                            p={4}
                            bg="#fff"
                        >
                            <img
                                src={wine.image}
                                alt={wine.name}
                                style={{ borderRadius: '8px', maxHeight: '180px', objectFit: 'cover', margin: '0 auto' }}
                            />
                            <Box mt={3}>
                                <Heading size="sm" mb={1}>{wine.name}</Heading>
                                <Text fontSize="sm">{wine.description}</Text>
                                <Text fontWeight="bold" mt={1}>{wine.price.toFixed(2)} €</Text>
                                <Button bg="#FAB12F" color="#fff" _hover={{ bg: '#FA812F' }} size="sm" mt={2}>
                                    Añadir al carrito
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default Home;

