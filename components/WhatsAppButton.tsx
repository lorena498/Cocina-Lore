
import React, { useEffect } from 'react';
import { WhatsAppIcon } from './Icons';

interface WhatsAppButtonProps {
    orderText: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ orderText }) => {
    // El número de WhatsApp se obtiene de las variables de entorno para facilitar la configuración.
    // Si no se define, se usa un valor por defecto.
    const phoneNumber = process.env.RESTAURANT_WHATSAPP_NUMBER || '523141441927';

    useEffect(() => {
        if (!process.env.RESTAURANT_WHATSAPP_NUMBER) {
            console.warn(
`********************************************************************************
El número de WhatsApp no está configurado. Usando valor por defecto.
Para configurar tu propio número, define el secreto 'RESTAURANT_WHATSAPP_NUMBER'.
Formato: código de país + número, sin '+' ni espacios (ej: 521234567890).
********************************************************************************`
            );
        }
    }, []);

    const message = `¡Hola! Quisiera confirmar mi pedido:\n\n${orderText}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-3 px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-background focus:ring-green-500"
            aria-label="Confirmar Pedido por WhatsApp"
        >
            <WhatsAppIcon />
            <span>Confirmar Pedido por WhatsApp</span>
        </a>
    );
};

export default WhatsAppButton;