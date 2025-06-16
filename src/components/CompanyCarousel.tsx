
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const companyLogos = [
  {
    src: "/lovable-uploads/10353546-ea45-408e-a3f8-09992d0db565.png",
    alt: "B&G Soluciones Legales - Abogados en Acción"
  },
  {
    src: "/lovable-uploads/c08cde0e-21f6-40e4-97ff-095700158a23.png",
    alt: "Sello de Calidad Certificado - AP Asesores Colombianas"
  },
  {
    src: "/lovable-uploads/6e22b862-4220-4d8f-bd21-42eefb3e2a04.png",
    alt: "Solkem de Colombia S.A.S. - Quest Recruitment"
  },
  {
    src: "/lovable-uploads/bdaa68cc-adb2-4f91-a058-f6b309af9697.png",
    alt: "Inmadica Andina - BNI Colombia"
  },
  {
    src: "/lovable-uploads/f3e31534-19f8-4354-8e32-f625ca2bd6c4.png",
    alt: "Arte Odontológico - D3025 Calzado de Seguridad Industrial"
  },
  {
    src: "/lovable-uploads/593035de-7f45-458a-aa03-813a6fcffbc0.png",
    alt: "EW Estética Maxilofacial - ACIEM Asociación Colombiana de Ingenieros"
  },
  {
    src: "/lovable-uploads/daa3390c-cdbd-4d01-95d4-79bf3178ca16.png",
    alt: "100% Por Colombia - ACIPET Asociación Colombiana de Ingenieros de Petróleos"
  },
  {
    src: "/lovable-uploads/ca77fa0a-59f0-4dea-be16-8d01014ddde3.png",
    alt: "RE/MAX Master - Provimer"
  },
  {
    src: "/lovable-uploads/8e5261ec-7d7b-411a-ab0a-7c38c4bca4f4.png",
    alt: "Special Graphics - Makro Industries"
  }
];

const CompanyCarousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {companyLogos.map((logo, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
              <div className="bg-white rounded-lg p-6 h-32 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-orange-500 hover:bg-orange-600 text-white border-orange-500" />
        <CarouselNext className="bg-orange-500 hover:bg-orange-600 text-white border-orange-500" />
      </Carousel>
    </div>
  );
};

export default CompanyCarousel;
