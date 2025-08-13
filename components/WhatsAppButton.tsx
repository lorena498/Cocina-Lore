import React from 'react';
import { WhatsAppIcon } from './Icons';

interface WhatsAppButtonProps {
    orderText: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ orderText }) => {
    // Número de WhatsApp del restaurante (código de país + número)
    const aphoneNumber = '5213141441927';
    const message = `¡Hola! Quisiera confirmar mi pedido:\n\n${orderText}`;
    const whatsappUrl = `https://wa.me/${aphoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-3 px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600"
            aria-label="Confirmar Pedido por WhatsApp"
        >
            <WhatsAppIcon />
            <span>Confirmar Pedido por WhatsApp</span>
        </a>
    );
};

export default WhatsAppButton;
