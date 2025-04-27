import React, { useState, useEffect } from 'react';
import { Box, Heading, SimpleGrid, Button, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick';
import { motion } from 'framer-motion'
import './Home.css';

const MotionBox = motion(Box)

function Home() {
    const [wines, setWines] = useState([]);                             // ⬅ vacío
    const urlApi = import.meta.env.VITE_API_URL + '/wines';             // ⬅ endpoint

    const { addToCart } = useCart();
    const toast = useToast();
    const navigate = useNavigate();
    const { t } = useTranslation();


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
                setWines(data.wines);
            }   catch (err) {
                console.error('Error cargando vinos:', err);
            }
        })();
    }, [urlApi]);

    if (!wines.length) {
        return (
            <Box minH="80vh" display="flex" alignItems="center" justifyContent="center">
                <span className="loader"></span>
            </Box>
        );
    }

    const handleAddToCart = (wine) => {
        addToCart({
            id: wine._id,
            name: wine.name,
            image: wine.image,
            price: wine.price
        });

        toast({
            title:   t('product.addedToast', '¡Añadido al carrito!'),
            description: (
                <Text
                    as="span"
                    cursor="pointer"
                    color="#FAB12F"
                    textDecoration="underline"
                    onClick={() => {
                        toast.closeAll();   
                        navigate('/cart');
                        }}
                    >
                        {t('product.viewCart', 'Ver carrito')}
                </Text>
                ),
                status:      'success',
                duration:    3000,
                isClosable:  true,
                position:    'bottom-right'
            });
    };

    return (
        <Box position="relative" minH="80vh" mt="-60px">
            {/* Hero */}
            <div className="hero-home">
                <img src="/home1.jpg" alt="hero" className="hero-image" />
                <div className="hero-overlay">
                    {/* Aquí usamos estilo para que coincida con el logo */}
                    <Heading 
                        mb={2} 
                        color="#FAB12F" 
                        fontFamily="'Playfair Display', serif" 
                        fontSize={['2xl','3xl','4xl']}
                    >
                        Falcon Crest Wines
                    </Heading>
                    <Text className="hero-tagline">
                        {t(
                            'home.tagline',
                            'Descubre nuestra increíble selección de vinos españoles y vive una experiencia única en cada copa.'
                        )}
                    </Text>
                    <Button 
                        bg="#FAB12F" 
                        color="#FFF" 
                        _hover={{ bg: '#FA812F' }}
                        onClick={() => navigate('/shop')}
                    >
                        {t('home.viewShop', 'Ver nuestra tienda')}
                    </Button>
                </div>
            </div>
    
            {/* Carrusel de Vinos Destacados con vídeo de fondo */}
            <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .6 }}
                p={4}
            >
                <Heading as="h2" className="section-title" mt={7} mb={4}>
                    {t('home.featured','Vinos Destacados')}
                </Heading>

                <Box className="video-carousel-container" mb={8}>
                    {/* Vídeo de fondo */}
                    <video
                        className="carousel-bg-video"
                        autoPlay
                        muted
                        loop
                        src="/videos/gotasdevino.mp4"
                    />

                    {/* Slider encima */}
                    <Box className="home-carousel">
                        <Slider {...settings}>
                            {wines.map(wine => (
                                <Box key={wine._id} p={4} textAlign="center">
                                    <img
                                        src={wine.image}
                                        alt={wine.name}
                                        className="carousel-image"
                                    />
                                    <Heading size="md" mt={4}>{wine.name}</Heading>
                                    <Text color="gray.600">
                                        {wine.price.toFixed(2)} €
                                    </Text>
                                    <Text fontSize="sm" mt={2}>
                                        {wine.description}
                                    </Text>
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                </Box>
    
                {/* Grid de productos */}
                <Heading as="h2" className="section-title" mb={4}>
                    {t('home.ourSelection','Nuestra Selección')}
                </Heading>
                <SimpleGrid
                    columns={[1, 2, 3]}
                    spacing={6}
                    className="products-grid-with-bg"
                >
                    {wines.map(wine => (
                        <Box
                            key={wine._id}
                            className="product-card"
                        >
                            <img
                                src={wine.image}
                                alt={wine.name}
                                className="product-image"
                            />
                            <Box mt={3}>
                                <Heading size="sm" mb={1}>{wine.name}</Heading>
                                <Text fontSize="sm">{wine.description}</Text>
                                <Text fontWeight="bold" mt={1}>
                                    {wine.price.toFixed(2)} €
                                </Text>
                                <Button
                                    className="add-to-cart"
                                    size="sm"
                                    mt={2}
                                    onClick={() => handleAddToCart(wine)}
                                >
                                    {t('product.addToCart','Añadir al carrito')}
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </MotionBox>
        </Box>
    );
}

export default Home;

