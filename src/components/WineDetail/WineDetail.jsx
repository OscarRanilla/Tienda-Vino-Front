import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../Context/CartContext';
import {
    Box, Flex, Heading, Text, Button, Image,
    useToast
    } from '@chakra-ui/react';
import './WineDetail.css';
import '../../styles/loader.css';

export default function WineDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const toast = useToast();
    const { addToCart } = useCart();

    const [wine,    setWine]    = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,   setError]   = useState(null);

    const urlApi = import.meta.env.VITE_API_URL + '/wines/' + id;

    useEffect(() => {
        fetch(urlApi)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(data => {
                setWine(data.wineId);
            })
            .catch(err => {
                console.error(err);
                setError(t('wine.loadError', 'No se pudo cargar el vino'));
            })
            .finally(() => setLoading(false));
    }, [urlApi, t]);

    if (loading) {
        return (
            <div className="loader-container">
                <span className="loader" />
            </div>
        );
    }
    if (error)   return <p className="wine-detail-error">{error}</p>;
    if (!wine || !(wine.name || wine._id)) {
        return <p className="wine-detail-error">{t('wine.notFound','Vino no encontrado')}</p>;
    }

    const { vista = '', nariz = '', boca = '' } = wine.tastingNotes || {};

    const handleAdd = () => {
        addToCart({
            id:    wine._id,
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
                    {t('product.viewCart', 'Ver carrito')}
                </Text>
            ),
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'bottom-right'
        });
    };

    return (
        <Box className="wine-detail-container">
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="flex-start"
                gap={6}
            >
                <Box flexShrink={0}>
                    <Image
                        src={wine.image}
                        alt={wine.name}
                        className="wine-detail-image"
                        fallbackSrc="/placeholder-wine.png"
                    />
                </Box>
                <Box className="wine-detail-info">
                    <Heading className="wine-detail-name">{wine.name}</Heading>
                    <Text className="wine-detail-price">
                        €{(wine.price ?? 0).toFixed(2)}
                    </Text>
                    <Text className="wine-detail-description">
                        {wine.description}
                    </Text>
    
                    <Box className="wine-detail-tasting">
                        <Heading as="h3">{t('wine.notes','Notas de Cata')}</Heading>
                        <Text><strong>{t('wine.vista','Vista')}:</strong> {vista}</Text>
                        <Text><strong>{t('wine.nariz','Nariz')}:</strong> {nariz}</Text>
                        <Text><strong>{t('wine.boca','Boca')}:</strong> {boca}</Text>
                    </Box>
    
                    <Flex className="wine-detail-actions" mt={6}>
                        <Button
                            colorScheme="yellow"
                            onClick={handleAdd}
                        >
                            {t('product.addToCart','Agregar al carrito')}
                        </Button>
                        <Button
                            variant="outline"
                            colorScheme="yellow"
                            ml={4}
                            onClick={() => navigate('/shop')}
                        >
                            {t('shop.back','Volver a la Tienda')}
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
        );
    }

