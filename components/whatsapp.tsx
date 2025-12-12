import React from "react";

export default function WhatsAppFloat() {
  const phoneNumber = "573243471012"; // Reemplaza con tu número (código país + número)
  const message = "¡Hola! Me gustaría más información."; // Mensaje predeterminado

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="bg-green-500 hover:bg-green-600 transition-all duration-300 rounded-full p-4 shadow-lg hover:shadow-2xl transform hover:scale-110">
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.83.744 5.488 2.042 7.785L.068 30.548a.5.5 0 0 0 .615.615l6.763-1.974A15.938 15.938 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.455c-2.547 0-4.95-.71-7.004-1.941a.5.5 0 0 0-.402-.049l-4.652 1.357 1.357-4.652a.5.5 0 0 0-.049-.402A13.402 13.402 0 0 1 2.545 16C2.545 8.547 8.547 2.545 16 2.545S29.455 8.547 29.455 16 23.453 29.455 16 29.455z" />
          <path d="M23.22 18.503c-.347-.174-2.051-1.012-2.369-1.128-.318-.115-.55-.174-.782.174-.231.347-.897 1.128-1.099 1.36-.203.231-.405.26-.752.087-.347-.174-1.463-.539-2.786-1.719-1.03-.918-1.725-2.052-1.927-2.399-.203-.347-.022-.535.152-.708.156-.156.347-.405.52-.608.174-.202.231-.347.347-.578.115-.231.058-.434-.029-.608-.087-.174-.782-1.884-1.072-2.578-.282-.676-.568-.584-.782-.595-.203-.01-.434-.012-.666-.012s-.608.087-.927.434c-.318.347-1.214 1.186-1.214 2.893s1.243 3.356 1.417 3.587c.174.231 2.447 3.736 5.927 5.24.827.357 1.474.571 1.977.731.831.264 1.587.227 2.184.138.666-.1 2.051-.839 2.34-1.649.289-.81.289-1.504.202-1.649-.087-.145-.318-.231-.666-.405z" />
        </svg>
      </div>

      {/* Tooltip opcional */}
      <span className="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¿Necesitas ayuda?
      </span>
    </a>
  );
}
