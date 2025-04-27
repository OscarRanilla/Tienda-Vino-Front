import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useToast, Text, Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useCart } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';    
import './Shop.css';
import '../../styles/loader.css';

export default function Shop() {
    const { t } = useTranslation();
    const toast = useToast();
    const navigate = useNavigate();
    const { addToCart }  = useCart();
    const [wines, setWines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const urlApi = import.meta.env.VITE_API_URL + '/wines';

    const handleAdd = (wine) => {
        addToCart({
            id:    wine._id || wine.id,
            name:  wine.name,
            image: wine.image,
            price: wine.price
        });
        
        toast({
            title: t('product.addedToast','¡Añadido al carrito!'),
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
                    {t('product.viewCart','Ver carrito')}
                </Text>
            ),
            status:      'success',
            duration:    3000,
            isClosable:  true,
            position:    'bottom-right'
        });
    };

    useEffect(() => {
        fetch(urlApi)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(data => {
                const arr = data.wines ?? data; 
                setWines(arr);
            })
            .catch(err => {
                console.error(err);
                setError('Error cargando vinos');
            })
            .finally(() => setLoading(false));
        }, [urlApi]);

        if (loading) {
            return (
                <div className="loader-container">
                    <span className="loader" />
                </div>
            );
        }
        
        if (error) {
            return <p className="shop-error">{error}</p>;
        }

    return (
        <Box className="shop-container">
            {/* Título homogéneo a todo */}
            <Heading as="h2" className="section-title">
                {t('shop.title','Nuestra Tienda')}
            </Heading>
        
            {/* Contenedor con vídeo de fondo */}
            <Box className="shop-video-grid-container">
                <video
                    className="shop-bg-video"
                    src="/videos/video-tienda.mp4"
                    autoPlay
                    muted
                    loop
                />

                {/* Grid de productos sobrepuesto */}
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}
                            spacing={6}
                            className="shop-products-grid">
                    {wines.map(wine => (
                        <ProductCard
                            key={wine._id || wine.id}
                            wine={wine}
                            onAdd={() => handleAdd(wine)}
                        />
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
}


