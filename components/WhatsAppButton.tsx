
import React from 'react';
import { WhatsAppIcon } from './Icons';

interface WhatsAppButtonProps {
    orderText: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ orderText }) => {
    // Obtiene el número de WhatsApp de las variables de entorno de Vite.
    // El número de respaldo '523141442197' se usa si VITE_WHATSAPP_NUMBER no está definido.
    // Puedes cambiar este número configurando el secreto 'VITE_WHATSAPP_NUMBER'.
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '523141442197';

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
