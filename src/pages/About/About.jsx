import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className="about-video-bg">
                <video autoPlay muted loop className="about-video">
                    <source src="/videos/background.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="about-content">
                <h2>Falcon Crest Wines Lovers</h2>
                <p>
                    AQUI COMIENZA NUESTRA HISTORIA...
                    En Marbella, Falcon Crest Wine Lovers surge como una fuente de inspiración para los apasionados del vino. Desde el cultivo de la vid hasta que el vino llega a nuestra copa, 
                    este universo ofrece un sinfín de historias y tradiciones. Conocer a las personas detrás de cada etapa —viñadores, bodegueros, enólogos y hosteleros— es el motor que impulsa 
                    esta empresa. Así nace nuestra sección Vinícola, un espacio creado especialmente para los verdaderos amantes del vino.
                    Llevamos nuestra exclusiva selección a cualquier rincón de España e incluso a nivel internacional, acercando a nuestros clientes la esencia de esta tierra privilegiada que es Valladolid. 
                    Nuestro objetivo es ofrecer vinos de excelencia, siempre priorizando la calidad y garantizando una experiencia satisfactoria en cada botella.
                    Falcon Crest 
                    Wine Lovers
                </p>
                <h3>Vinos Tintos</h3>
                <p>
                    La D.O. Ribera del Duero se extiende al este de Valladolid, con viñedos plantados a alturas que van desde los 700 hasta los 1,100 metros. Las pendientes de la región ofrecen condiciones ideales para producir uvas de gran calidad. 
                    Desde hace siglos, los habitantes sabían que estas tierras daban origen a vinos extraordinarios. La variedad por excelencia aquí es la Tempranillo, conocida en la zona como tinto fino, tinta fina o tinta del país. 
                    Su nombre hace alusión a su pronta maduración y es apreciada por su estructura, color intenso, aromas de frutos del bosque y una acidez equilibrada.
                    En cuanto a maridajes, dependiendo del tipo de envejecimiento, se sugieren las siguientes combinaciones:
                    Roble: Combina bien con hamburguesas premium, tapas o costillas de cerdo. También con jamón, quesos semicurados y embutidos suaves. Platos internacionales como lasaña o tacos son otra opción.
                    Crianza: Marida con estofados de carne de caza y setas, chuletas de cordero o roast beef. Es ideal para carnes rojas y ahumadas con un contenido graso moderado.
                    Vendimia Seleccionada: Perfecto con quesos curados, pierna de cordero al horno, ciervo o conejo en estofado, así como carnes rojas especiadas con sutileza.
                    [Aquí quiero insertar una imagen]
                    [luego nuestros 3 productos de vinos tintos así con su card de añadir al carrito o comprar]
                </p>
                <h3>Vinos Blancos</h3>
                <h4>Vino Blanco, Rueda</h4>
                <p>
                    La historia de Rueda está marcada por la antigüedad, uniendo épocas de la España cristiana y musulmana. Durante siglos, esta región fue devastada y quedó en tierra de nadie hasta que el rey Alfonso VI (1040-1109) la reconquistó y promovió 
                    el cultivo de la vid, entregando tierras a quienes deseaban plantar viñedos. Este cultivo no solo unió al hombre con la tierra, sino que ayudó a forjar un fuerte vínculo entre la gente y su territorio.
                    El 12 de enero de 1980, el Ministerio de Agricultura creó oficialmente la Denominación de Origen Rueda, siendo la primera D.O. reconocida en Castilla y León, destacando por proteger y promover su uva autóctona: la Verdejo.
                </p>
                <h4>Características y Maridajes</h4>
                <p>
                    La Verdejo se distingue por su frescura, con excelente acidez, toques frutales y notas herbáceas. Su cuerpo voluminoso y ligero amargor aportan un final persistente y agradable.
                    Este vino es el acompañante perfecto para ensaladas, arroces y tempuras, destacando con paellas de marisco. Entre los pescados, combina de maravilla con dorada, lubina, lenguado y bonito. 
                    También es ideal con mariscos al vapor o con salsas, como gambas al ajillo, así como con ahumados, como anchoas, salmón o bacalao, y con platos como pulpo o sepia a la plancha.
                    Nuestra selección ofrece una experiencia exclusiva para los amantes del vino y la gastronomía gourmet, ideal para crear momentos inolvidables.
                    [Aquí quiero insertar una imagen]
                    [luego nuestros 3 productos de vinos tintos así con su card de añadir al carrito o comprar]
                </p>
            </div>
        </div>
    );
}

export default About;


