import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
    return (
        <div className="dashboard-video-container">
            {/* Vídeo de fondo */}
            <video
                className="dashboard-bg-video"
                src="/videos/video-dashboard.mp4"
                autoPlay
                muted
                loop
            />
            {/* Capa de overlay con texto */}
            <div className="dashboard-overlay">
                <h1 className="dashboard-title">
                    Bienvenido a tu espacio personal
                </h1>
                <p className="dashboard-text">
                    Aquí puedes guardar y buscar tus vinos favoritos y deleitarte con todos nuestros productos.  
                Gracias por estar aquí.<br/>
                Te saluda la familia Falcon Crest Wines.
                </p>
            </div>
        </div>
    );
}

