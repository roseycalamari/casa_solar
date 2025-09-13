/**
 * Casa Solar - Translation System
 * Comprehensive translations for all website content
 */

const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            amenities: "Amenities",
            gallery: "Gallery",
            discover: "Discover",
            bookNow: "Book Now"
        },
        
        // Hero Section
        hero: {
            title: "CASA SOLAR",
            subtitle: "YOUR PERFECT OLD TOWN GETAWAY",
            bookButton: "BOOK NOW"
        },
        
        // About Section
        about: {
            title: "ABOUT CASA SOLAR",
            subtitle: "Experience comfort and convenience in the heart of Old Town",
            heading: "YOUR PERFECT GETAWAY",
            description: "Casa Solar is a fully equipped 1-bedroom apartment featuring a spacious living room and kitchen open space area, perfectly designed for comfort and convenience. Located in the quiet corner of Old Town, this amazing apartment offers the best of both worlds - peaceful surroundings with easy access to all the action.",
            features: {
                parking: "FREE PARKING",
                elevator: "ELEVATOR ACCESS",
                kitchen: "FULLY EQUIPPED KITCHEN",
                oldTown: "STEPS FROM OLD TOWN"
            }
        },
        
        // Amenities Section
        amenities: {
            title: "AMENITIES",
            items: {
                kitchen: {
                    title: "FULLY EQUIPPED KITCHEN",
                    description: "Modern kitchen with premium appliances, cookware, and all necessary utensils for your culinary needs"
                },
                location: {
                    title: "SECONDS FROM OLD TOWN",
                    description: "Prime location just minutes away from the historic old town and downtown area for easy exploration"
                },
                washing: {
                    title: "WASHING MACHINE",
                    description: "Convenient in-unit washing machine for your laundry needs during your stay"
                },
                parking: {
                    title: "PARKING",
                    description: "Convenient parking space available for your vehicle during your stay"
                },
                sofa: {
                    title: "CONVERTIBLE SOFA BED",
                    description: "Adaptable couch that converts to a bed, comfortably accommodating up to 4 people"
                },
                wifi: {
                    title: "FREE WIFI",
                    description: "High-speed internet connection included for all your digital needs during your stay"
                },
                ac: {
                    title: "AIR CONDITIONING",
                    description: "Climate control system to ensure your comfort throughout your stay"
                },
                quiet: {
                    title: "QUIET LOCATION",
                    description: "Peaceful corner of Old Town away from the hustle and bustle, perfect for relaxation"
                }
            }
        },
        
        // Gallery Section
        gallery: {
            title: "GALLERY",
            subtitle: "Take a visual tour of our beautiful property",
            filters: {
                all: "All",
                interior: "Interior",
                kitchen: "Kitchen",
                bedroom: "Bedroom",
                bathroom: "Bathroom"
            },
            items: {
                hallway: {
                    title: "Hallway",
                    description: "Bright and welcoming entrance connecting all areas"
                },
                bedroom: {
                    title: "Bedroom",
                    description: "Comfortable and peaceful sleeping area"
                },
                bathroom: {
                    title: "Bathroom",
                    description: "Clean and modern bathroom with all amenities"
                },
                kitchen: {
                    title: "Kitchen",
                    description: "Fully equipped modern kitchen space"
                },
                kitchenDetail: {
                    title: "Kitchen",
                    description: "Additional view of the kitchen area"
                },
                dining: {
                    title: "Dining Room",
                    description: "Spacious dining area for meals and gatherings"
                },
                living: {
                    title: "Living Room",
                    description: "Comfortable living space for relaxation"
                },
                machines: {
                    title: "Machines Corner",
                    description: "Laundry area with washing machine"
                },
                downtown: {
                    title: "Downtown/Old Town",
                    description: "Historic old town area just steps away"
                },
                parking: {
                    title: "Parking Lot",
                    description: "Convenient parking space for your vehicle"
                },
                pescadores: {
                    title: "Pescadores Beach",
                    description: "Beautiful beach just steps away from Casa Solar"
                },
                peneco: {
                    title: "Peneco Beach",
                    description: "Stunning view of Peneco Beach"
                }
            }
        },
        
        // Discover Section
        discover: {
            title: "DISCOVER ALBUFEIRA",
            subtitle: "The heart of Portugal's stunning Algarve region",
            tabs: {
                beaches: "Beaches",
                nightlife: "Nightlife",
                activities: "Activities"
            },
            beaches: {
                title: "Stunning Beaches",
                description: "Explore Albufeira's golden sand beaches with crystal-clear waters. Praia dos Pescadores and Praia do Túnel are just a short walk from Casa Solar.",
                attractions: [
                    "Praia dos Pescadores - 10 min walk",
                    "Praia do Túnel - 7 min walk",
                    "Praia de São Rafael - 5 min drive",
                    "Praia da Falésia - 15 min drive"
                ]
            },
            nightlife: {
                title: "Vibrant Nightlife",
                description: "Discover Albufeira's exciting nightlife scene. From cozy bars to lively clubs, enjoy the perfect evening entertainment just steps from your accommodation.",
                attractions: [
                    "Oura Strip - 5 min drive",
                    "Old Town Bars - 2 min walk",
                    "Beach Bars - 3 min walk",
                    "Live Music Venues - 10 min walk"
                ]
            },
            activities: {
                title: "Adventure & Culture",
                description: "Immerse yourself in Albufeira's rich culture and exciting activities. From water sports to historical sites, create unforgettable memories during your stay.",
                attractions: [
                    "Boat Trips & Tours (Marina) - 2 min drive",
                    "Waterpark (Zoomarine) - 15 min drive",
                    "Historical Sites - 3 min walk",
                    "Golf Courses - 15 min drive"
                ]
            }
        },
        
        // Contact Section
        contact: {
            title: "BOOK YOUR STAY"
        },
        
        // Booking Widget
        booking: {
            checkIn: "Check-in",
            checkOut: "Check-out",
            guests: "Guests",
            guestsSingular: "{{NumberOfGuests}} guest",
            guestsPlural: "{{NumberOfGuests}} guests",
            location: "Location",
            totalPrice: "Total price:",
            selectDates: "Select dates to see total price",
            from: "From",
            perNight: "per night",
            bookNow: "Book Now",
            guestsBreakdown: "Guests",
            adults: '{"one":"adult","other":"adults"}',
            adultsDescription: "Ages {minAge} or above",
            children: '{"one":"child","other":"children"}',
            childrenDescription: "Ages {minAge}-{maxAge}",
            childrenNotAllowed: "Not suitable for children",
            infants: '{"one":"infant","other":"infants"}',
            infantsDescription: "Under {maxAge}",
            infantsNotAllowed: "Not suitable for infants",
            pets: '{"one":"pet","other":"pets"}',
            petsNotAllowed: "Not allowed",
            done: "Done"
        },
        
        // Footer
        footer: {
            title: "CASA SOLAR",
            description: "A beautifully designed 1-bedroom apartment in the heart of Old Town Albufeira. Featuring a spacious living room with open kitchen, modern amenities, and just steps away from the beach. Perfect for couples seeking comfort, convenience, and the authentic Portuguese experience.",
            highlights: {
                beach: "✓ Beach Access",
                oldTown: "✓ Old Town Location",
                amenities: "✓ Modern Amenities"
            },
            explore: "EXPLORE",
            support: "SUPPORT",
            supportText: "Need assistance with your booking or have questions about your stay?",
            copyright: "© 2024 Casa Solar. All rights reserved. | Albufeira, Portugal"
        },
        
        // Mobile Menu
        mobile: {
            footerText: "Casa Solar - Your Perfect Old Town Getaway",
            contactUs: "Contact Us"
        },
        
        // Language Names
        languages: {
            en: "English",
            pt: "Português",
            fr: "Français",
            de: "Deutsch",
            es: "Español",
            it: "Italiano",
            nl: "Nederlands"
        }
    },
    
    pt: {
        // Navigation
        nav: {
            home: "Início",
            about: "Sobre",
            amenities: "Comodidades",
            gallery: "Galeria",
            discover: "Descobrir",
            bookNow: "Reservar"
        },
        
        // Hero Section
        hero: {
            title: "CASA SOLAR",
            subtitle: "O TEU REFÚGIO PERFEITO NO CENTRO HISTÓRICO",
            bookButton: "RESERVAR AGORA"
        },
        
        // About Section
        about: {
            title: "SOBRE A CASA SOLAR",
            subtitle: "Experimenta conforto e conveniência no coração do Centro Histórico",
            heading: "O TEU REFÚGIO PERFEITO",
            description: "A Casa Solar é um apartamento de 1 quarto totalmente equipado com uma sala de estar espaçosa e área de cozinha integrada, perfeitamente concebido para conforto e conveniência. Localizado no canto tranquilo do Centro Histórico, este apartamento incrível oferece o melhor dos dois mundos - ambiente pacífico com fácil acesso a toda a animação.",
            features: {
                parking: "ESTACIONAMENTO GRATUITO",
                elevator: "ACESSO POR ELEVADOR",
                kitchen: "COZINHA TOTALMENTE EQUIPADA",
                oldTown: "PASSOS DO CENTRO HISTÓRICO"
            }
        },
        
        // Amenities Section
        amenities: {
            title: "COMODIDADES",
            items: {
                kitchen: {
                    title: "COZINHA TOTALMENTE EQUIPADA",
                    description: "Cozinha moderna com electrodomésticos premium, utensílios de cozinha e todos os utensílios necessários para as tuas necessidades culinárias"
                },
                location: {
                    title: "SEGUNDOS DO CENTRO HISTÓRICO",
                    description: "Localização privilegiada a poucos minutos do centro histórico e área central para fácil exploração"
                },
                washing: {
                    title: "MÁQUINA DE LAVAR",
                    description: "Máquina de lavar conveniente na unidade para as tuas necessidades de lavandaria durante a tua estadia"
                },
                parking: {
                    title: "ESTACIONAMENTO",
                    description: "Vaga de estacionamento conveniente disponível para o teu veículo durante a tua estadia"
                },
                sofa: {
                    title: "SOFÁ-CAMA CONVERSÍVEL",
                    description: "Sofá adaptável que se converte em cama, acomodando confortavelmente até 4 pessoas"
                },
                wifi: {
                    title: "WI-FI GRATUITO",
                    description: "Ligação à internet de alta velocidade incluída para todas as tuas necessidades digitais durante a tua estadia"
                },
                ac: {
                    title: "AR CONDICIONADO",
                    description: "Sistema de controlo climático para garantir o teu conforto durante toda a tua estadia"
                },
                quiet: {
                    title: "LOCALIZAÇÃO TRANQUILA",
                    description: "Canto pacífico do Centro Histórico longe da animação, perfeito para relaxamento"
                }
            }
        },
        
        // Gallery Section
        gallery: {
            title: "GALERIA",
            subtitle: "Faz um tour visual da nossa bela propriedade",
            filters: {
                all: "Todos",
                interior: "Interior",
                kitchen: "Cozinha",
                bedroom: "Quarto",
                bathroom: "Casa de banho"
            },
            items: {
                hallway: {
                    title: "Corredor",
                    description: "Entrada brilhante e acolhedora ligando todas as áreas"
                },
                bedroom: {
                    title: "Quarto",
                    description: "Área de dormir confortável e pacífica"
                },
                bathroom: {
                    title: "Casa de banho",
                    description: "Casa de banho limpa e moderna com todas as comodidades"
                },
                kitchen: {
                    title: "Cozinha",
                    description: "Espaço de cozinha moderna totalmente equipada"
                },
                kitchenDetail: {
                    title: "Cozinha",
                    description: "Vista adicional da área da cozinha"
                },
                dining: {
                    title: "Sala de Jantar",
                    description: "Área de jantar espaçosa para refeições e encontros"
                },
                living: {
                    title: "Sala de Estar",
                    description: "Espaço de estar confortável para relaxamento"
                },
                machines: {
                    title: "Canto das Máquinas",
                    description: "Área de lavandaria com máquina de lavar"
                },
                downtown: {
                    title: "Centro/Centro Histórico",
                    description: "Área do centro histórico a poucos passos"
                },
                parking: {
                    title: "Estacionamento",
                    description: "Vaga de estacionamento conveniente para o teu veículo"
                },
                pescadores: {
                    title: "Praia dos Pescadores",
                    description: "Linda praia a poucos passos da Casa Solar"
                },
                peneco: {
                    title: "Praia do Peneco",
                    description: "Vista deslumbrante da Praia do Peneco"
                }
            }
        },
        
        // Discover Section
        discover: {
            title: "DESCUBRA ALBUFEIRA",
            subtitle: "O coração da deslumbrante região do Algarve em Portugal",
            tabs: {
                beaches: "Praias",
                nightlife: "Vida Noturna",
                activities: "Actividades"
            },
            beaches: {
                title: "Praias Deslumbrantes",
                description: "Explora as praias de areia dourada de Albufeira com águas cristalinas. A Praia dos Pescadores e a Praia do Túnel estão a uma curta caminhada da Casa Solar.",
                attractions: [
                    "Praia dos Pescadores - 10 min a pé",
                    "Praia do Túnel - 7 min a pé",
                    "Praia de São Rafael - 5 min de carro",
                    "Praia da Falésia - 15 min de carro"
                ]
            },
            nightlife: {
                title: "Vida Noturna Vibrante",
                description: "Descobre a emocionante cena de vida noturna de Albufeira. De bares aconchegantes a clubes animados, desfruta do entretenimento noturno perfeito a poucos passos da tua acomodação.",
                attractions: [
                    "Oura Strip - 5 min de carro",
                    "Bares do Centro Histórico - 2 min a pé",
                    "Bares da Praia - 3 min a pé",
                    "Locais de Música ao Vivo - 10 min a pé"
                ]
            },
            activities: {
                title: "Aventura e Cultura",
                description: "Mergulha na rica cultura e actividades emocionantes de Albufeira. De desportos aquáticos a locais históricos, cria memórias inesquecíveis durante a tua estadia.",
                attractions: [
                    "Passeios de Barco e Tours (Marina) - 2 min de carro",
                    "Waterpark (Zoomarine) - 15 min de carro",
                    "Locais Históricos - 3 min a pé",
                    "Campos de Golfe - 15 min de carro"
                ]
            }
        },
        
        // Contact Section
        contact: {
            title: "RESERVA A TUA ESTADIA"
        },
        
        // Booking Widget
        booking: {
            checkIn: "Check-in",
            checkOut: "Check-out",
            guests: "Hóspedes",
            guestsSingular: "{{NumberOfGuests}} hóspede",
            guestsPlural: "{{NumberOfGuests}} hóspedes",
            location: "Localização",
            totalPrice: "Preço total:",
            selectDates: "Selecciona as datas para ver o preço total",
            from: "A partir de",
            perNight: "por noite",
            bookNow: "Reservar Agora",
            guestsBreakdown: "Hóspedes",
            adults: '{"one":"adulto","other":"adultos"}',
            adultsDescription: "Idades {minAge} ou acima",
            children: '{"one":"criança","other":"crianças"}',
            childrenDescription: "Idades {minAge}-{maxAge}",
            childrenNotAllowed: "Não adequado para crianças",
            infants: '{"one":"bebé","other":"bebés"}',
            infantsDescription: "Abaixo de {maxAge}",
            infantsNotAllowed: "Não adequado para bebés",
            pets: '{"one":"animal de estimação","other":"animais de estimação"}',
            petsNotAllowed: "Não permitido",
            done: "Concluído"
        },
        
        // Footer
        footer: {
            title: "CASA SOLAR",
            description: "Um apartamento de 1 quarto lindamente concebido no coração do Centro Histórico de Albufeira. Com uma sala de estar espaçosa com cozinha integrada, comodidades modernas e a poucos passos da praia. Perfeito para casais que procuram conforto, conveniência e a autêntica experiência portuguesa.",
            highlights: {
                beach: "✓ Acesso à Praia",
                oldTown: "✓ Localização no Centro Histórico",
                amenities: "✓ Comodidades Modernas"
            },
            explore: "EXPLORAR",
            support: "SUPORTE",
            supportText: "Precisas de assistência com a tua reserva ou tens dúvidas sobre a tua estadia?",
            copyright: "© 2024 Casa Solar. Todos os direitos reservados. | Albufeira, Portugal"
        },
        
        // Mobile Menu
        mobile: {
            footerText: "Casa Solar - O Teu Refúgio Perfeito no Centro Histórico",
            contactUs: "Contacta-nos"
        },
        
        // Language Names
        languages: {
            en: "English",
            pt: "Português",
            fr: "Français",
            de: "Deutsch",
            es: "Español",
            it: "Italiano",
            nl: "Nederlands"
        }
    },
    
    fr: {
        // Navigation
        nav: {
            home: "Accueil",
            about: "À propos",
            amenities: "Équipements",
            gallery: "Galerie",
            discover: "Découvrir",
            bookNow: "Réserver"
        },
        
        // Hero Section
        hero: {
            title: "CASA SOLAR",
            subtitle: "VOTRE ÉCHAPPE BELLE PARFAITE EN VIEILLE VILLE",
            bookButton: "RÉSERVER MAINTENANT"
        },
        
        // About Section
        about: {
            title: "À PROPOS DE CASA SOLAR",
            subtitle: "Découvrez le confort et la commodité au cœur de la vieille ville",
            heading: "VOTRE ÉCHAPPE BELLE PARFAITE",
            description: "Casa Solar est un appartement d'une chambre entièrement équipé avec un salon spacieux et un espace cuisine ouvert, parfaitement conçu pour le confort et la commodité. Situé dans le coin tranquille de la vieille ville, cet appartement incroyable offre le meilleur des deux mondes - un environnement paisible avec un accès facile à toute l'action.",
            features: {
                parking: "STATIONNEMENT GRATUIT",
                elevator: "ACCÈS PAR ASCENSEUR",
                kitchen: "CUISINE ENTIÈREMENT ÉQUIPÉE",
                oldTown: "QUELQUES PAS DE LA VIEILLE VILLE"
            }
        },
        
        // Amenities Section
        amenities: {
            title: "ÉQUIPEMENTS",
            items: {
                kitchen: {
                    title: "CUISINE ENTIÈREMENT ÉQUIPÉE",
                    description: "Cuisine moderne avec des appareils haut de gamme, de la vaisselle et tous les ustensiles nécessaires pour vos besoins culinaires"
                },
                location: {
                    title: "SECONDES DE LA VIEILLE VILLE",
                    description: "Emplacement privilégié à quelques minutes de la vieille ville historique et du centre-ville pour une exploration facile"
                },
                washing: {
                    title: "MACHINE À LAVER",
                    description: "Machine à laver pratique dans l'unité pour vos besoins de lessive pendant votre séjour"
                },
                parking: {
                    title: "STATIONNEMENT",
                    description: "Place de stationnement pratique disponible pour votre véhicule pendant votre séjour"
                },
                sofa: {
                    title: "CANAPÉ-LIT CONVERTIBLE",
                    description: "Canapé adaptable qui se transforme en lit, accueillant confortablement jusqu'à 4 personnes"
                },
                wifi: {
                    title: "WI-FI GRATUIT",
                    description: "Connexion Internet haut débit incluse pour tous vos besoins numériques pendant votre séjour"
                },
                ac: {
                    title: "CLIMATISATION",
                    description: "Système de contrôle climatique pour assurer votre confort tout au long de votre séjour"
                },
                quiet: {
                    title: "EMPLACEMENT TRANQUILLE",
                    description: "Coin paisible de la vieille ville loin de l'agitation, parfait pour la détente"
                }
            }
        },
        
        // Gallery Section
        gallery: {
            title: "GALERIE",
            subtitle: "Faites une visite visuelle de notre belle propriété",
            filters: {
                all: "Tous",
                interior: "Intérieur",
                kitchen: "Cuisine",
                bedroom: "Chambre",
                bathroom: "Salle de bain"
            },
            items: {
                hallway: {
                    title: "Couloir",
                    description: "Entrée lumineuse et accueillante reliant tous les espaces"
                },
                bedroom: {
                    title: "Chambre",
                    description: "Espace de couchage confortable et paisible"
                },
                bathroom: {
                    title: "Salle de bain",
                    description: "Salle de bain propre et moderne avec toutes les commodités"
                },
                kitchen: {
                    title: "Cuisine",
                    description: "Espace cuisine moderne entièrement équipé"
                },
                kitchenDetail: {
                    title: "Cuisine",
                    description: "Vue supplémentaire de l'espace cuisine"
                },
                dining: {
                    title: "Salle à manger",
                    description: "Espace repas spacieux pour les repas et les rassemblements"
                },
                living: {
                    title: "Salon",
                    description: "Espace de vie confortable pour la détente"
                },
                machines: {
                    title: "Coin des machines",
                    description: "Espace buanderie avec machine à laver"
                },
                downtown: {
                    title: "Centre-ville/Vieille ville",
                    description: "Zone de la vieille ville historique à quelques pas"
                },
                parking: {
                    title: "Parking",
                    description: "Place de stationnement pratique pour votre véhicule"
                },
                pescadores: {
                    title: "Plage des Pescadores",
                    description: "Belle plage à quelques pas de Casa Solar"
                },
                peneco: {
                    title: "Plage de Peneco",
                    description: "Vue magnifique de la plage de Peneco"
                }
            }
        },
        
        // Discover Section
        discover: {
            title: "DÉCOUVREZ ALBUFEIRA",
            subtitle: "Le cœur de la magnifique région de l'Algarve au Portugal",
            tabs: {
                beaches: "Plages",
                nightlife: "Vie nocturne",
                activities: "Activités"
            },
            beaches: {
                title: "Plages magnifiques",
                description: "Explorez les plages de sable doré d'Albufeira aux eaux cristallines. La plage des Pescadores et la plage du Túnel sont à une courte marche de Casa Solar.",
                attractions: [
                    "Plage des Pescadores - 3 min à pied",
                    "Plage du Túnel - 1 min à pied",
                    "Plage de São Rafael - 5 min en voiture",
                    "Plage de Falésia - 15 min en voiture"
                ]
            },
            nightlife: {
                title: "Vie nocturne vibrante",
                description: "Découvrez la scène nocturne passionnante d'Albufeira. Des bars chaleureux aux clubs animés, profitez du divertissement nocturne parfait à quelques pas de votre hébergement.",
                attractions: [
                    "Oura Strip - 5 min à pied",
                    "Bars de la vieille ville - 2 min à pied",
                    "Bars de plage - 3 min à pied",
                    "Lieux de musique live - 8 min à pied"
                ]
            },
            activities: {
                title: "Aventure et culture",
                description: "Plongez dans la riche culture et les activités passionnantes d'Albufeira. Des sports nautiques aux sites historiques, créez des souvenirs inoubliables pendant votre séjour.",
                attractions: [
                    "Excursions en bateau et visites - 5 min à pied",
                    "Sports nautiques - 3 min à pied",
                    "Sites historiques - 10 min à pied",
                    "Terrains de golf - 15 min en voiture"
                ]
            }
        },
        
        // Contact Section
        contact: {
            title: "RÉSERVEZ VOTRE SÉJOUR"
        },
        
        // Booking Widget
        booking: {
            checkIn: "Arrivée",
            checkOut: "Départ",
            guests: "Voyageurs",
            guestsSingular: "{{NumberOfGuests}} voyageur",
            guestsPlural: "{{NumberOfGuests}} voyageurs",
            location: "Lieu",
            totalPrice: "Prix total :",
            selectDates: "Sélectionnez les dates pour voir le prix total",
            from: "À partir de",
            perNight: "par nuit",
            bookNow: "Réserver maintenant",
            guestsBreakdown: "Voyageurs",
            adults: '{"one":"adulte","other":"adultes"}',
            adultsDescription: "Âges {minAge} ou plus",
            children: '{"one":"enfant","other":"enfants"}',
            childrenDescription: "Âges {minAge}-{maxAge}",
            childrenNotAllowed: "Non adapté aux enfants",
            infants: '{"one":"bébé","other":"bébés"}',
            infantsDescription: "Moins de {maxAge}",
            infantsNotAllowed: "Non adapté aux bébés",
            pets: '{"one":"animal de compagnie","other":"animaux de compagnie"}',
            petsNotAllowed: "Non autorisé",
            done: "Terminé"
        },
        
        // Footer
        footer: {
            title: "CASA SOLAR",
            description: "Un appartement d'une chambre magnifiquement conçu au cœur de la vieille ville d'Albufeira. Avec un salon spacieux avec cuisine ouverte, des équipements modernes et à quelques pas de la plage. Parfait pour les couples recherchant confort, commodité et l'authentique expérience portugaise.",
            highlights: {
                beach: "✓ Accès à la plage",
                oldTown: "✓ Emplacement en vieille ville",
                amenities: "✓ Équipements modernes"
            },
            explore: "EXPLORER",
            support: "SUPPORT",
            supportText: "Besoin d'aide pour votre réservation ou avez-vous des questions sur votre séjour ?",
            copyright: "© 2024 Casa Solar. Tous droits réservés. | Albufeira, Portugal"
        },
        
        // Mobile Menu
        mobile: {
            footerText: "Casa Solar - Votre échappée belle parfaite en vieille ville",
            contactUs: "Nous contacter"
        },
        
        // Language Names
        languages: {
            en: "English",
            pt: "Português",
            fr: "Français",
            de: "Deutsch",
            es: "Español",
            it: "Italiano",
            nl: "Nederlands"
        }
    },
    
    de: {
        // Navigation
        nav: {
            home: "Startseite",
            about: "Über uns",
            amenities: "Ausstattung",
            gallery: "Galerie",
            discover: "Entdecken",
            bookNow: "Buchen"
        },
        
        // Hero Section
        hero: {
            title: "CASA SOLAR",
            subtitle: "IHR PERFEKTER ALTSTADT-URLAUB",
            bookButton: "JETZT BUCHEN"
        },
        
        // About Section
        about: {
            title: "ÜBER CASA SOLAR",
            subtitle: "Erleben Sie Komfort und Bequemlichkeit im Herzen der Altstadt",
            heading: "IHR PERFEKTER URLAUB",
            description: "Casa Solar ist eine voll ausgestattete 1-Zimmer-Wohnung mit einem geräumigen Wohnzimmer und offener Küche, perfekt für Komfort und Bequemlichkeit konzipiert. In der ruhigen Ecke der Altstadt gelegen, bietet diese erstaunliche Wohnung das Beste aus beiden Welten - friedliche Umgebung mit einfachem Zugang zu allem Trubel.",
            features: {
                parking: "KOSTENLOSES PARKEN",
                elevator: "AUFZUG-ZUGANG",
                kitchen: "VOLL AUSGESTATTETE KÜCHE",
                oldTown: "SCHRITTE VON DER ALTSTADT"
            }
        },
        
        // Amenities Section
        amenities: {
            title: "AUSSTATTUNG",
            items: {
                kitchen: {
                    title: "VOLL AUSGESTATTETE KÜCHE",
                    description: "Moderne Küche mit Premium-Geräten, Kochgeschirr und allen notwendigen Utensilien für Ihre kulinarischen Bedürfnisse"
                },
                location: {
                    title: "SEKUNDEN VON DER ALTSTADT",
                    description: "Privilegierte Lage nur wenige Minuten von der historischen Altstadt und dem Stadtzentrum für einfache Erkundung"
                },
                washing: {
                    title: "WASCHMASCHINE",
                    description: "Bequeme Waschmaschine in der Einheit für Ihre Wäschebedürfnisse während Ihres Aufenthalts"
                },
                parking: {
                    title: "PARKEN",
                    description: "Bequemer Parkplatz für Ihr Fahrzeug während Ihres Aufenthalts verfügbar"
                },
                sofa: {
                    title: "AUSZIEHBARES SOFABETT",
                    description: "Anpassbares Sofa, das sich in ein Bett verwandelt und bequem bis zu 4 Personen aufnehmen kann"
                },
                wifi: {
                    title: "KOSTENLOSES WLAN",
                    description: "Hochgeschwindigkeits-Internetverbindung für alle Ihre digitalen Bedürfnisse während Ihres Aufenthalts inklusive"
                },
                ac: {
                    title: "KLIMATISIERUNG",
                    description: "Klimakontrollsystem für Ihren Komfort während Ihres gesamten Aufenthalts"
                },
                quiet: {
                    title: "RUHIGE LAGE",
                    description: "Friedliche Ecke der Altstadt fernab vom Trubel, perfekt für Entspannung"
                }
            }
        },
        
        // Gallery Section
        gallery: {
            title: "GALERIE",
            subtitle: "Machen Sie eine visuelle Tour durch unsere schöne Immobilie",
            filters: {
                all: "Alle",
                interior: "Innen",
                kitchen: "Küche",
                bedroom: "Schlafzimmer",
                bathroom: "Badezimmer"
            },
            items: {
                hallway: {
                    title: "Flur",
                    description: "Helle und einladende Eingangshalle, die alle Bereiche verbindet"
                },
                bedroom: {
                    title: "Schlafzimmer",
                    description: "Komfortabler und friedlicher Schlafbereich"
                },
                bathroom: {
                    title: "Badezimmer",
                    description: "Sauberes und modernes Badezimmer mit allen Annehmlichkeiten"
                },
                kitchen: {
                    title: "Küche",
                    description: "Voll ausgestatteter moderner Küchenbereich"
                },
                kitchenDetail: {
                    title: "Küche",
                    description: "Zusätzliche Ansicht des Küchenbereichs"
                },
                dining: {
                    title: "Esszimmer",
                    description: "Geräumiger Essbereich für Mahlzeiten und Versammlungen"
                },
                living: {
                    title: "Wohnzimmer",
                    description: "Komfortabler Wohnbereich für Entspannung"
                },
                machines: {
                    title: "Maschinen-Ecke",
                    description: "Waschbereich mit Waschmaschine"
                },
                downtown: {
                    title: "Stadtzentrum/Altstadt",
                    description: "Historische Altstadt nur wenige Schritte entfernt"
                },
                parking: {
                    title: "Parkplatz",
                    description: "Bequemer Parkplatz für Ihr Fahrzeug"
                },
                pescadores: {
                    title: "Pescadores Strand",
                    description: "Schöner Strand nur wenige Schritte von Casa Solar entfernt"
                },
                peneco: {
                    title: "Peneco Strand",
                    description: "Atemberaubende Aussicht auf den Peneco Strand"
                }
            }
        },
        
        // Discover Section
        discover: {
            title: "ALBUFEIRA ENTDECKEN",
            subtitle: "Das Herz der atemberaubenden Algarve-Region Portugals",
            tabs: {
                beaches: "Strände",
                nightlife: "Nachtleben",
                activities: "Aktivitäten"
            },
            beaches: {
                title: "Atemberaubende Strände",
                description: "Entdecken Sie Albufeiras goldene Sandstrände mit kristallklarem Wasser. Der Pescadores Strand und der Túnel Strand sind nur einen kurzen Spaziergang von Casa Solar entfernt.",
                attractions: [
                    "Pescadores Strand - 3 Min. zu Fuß",
                    "Túnel Strand - 1 Min. zu Fuß",
                    "São Rafael Strand - 5 Min. mit dem Auto",
                    "Falésia Strand - 15 Min. mit dem Auto"
                ]
            },
            nightlife: {
                title: "Lebendiges Nachtleben",
                description: "Entdecken Sie Albufeiras aufregende Nachtleben-Szene. Von gemütlichen Bars bis hin zu lebendigen Clubs, genießen Sie die perfekte abendliche Unterhaltung nur wenige Schritte von Ihrer Unterkunft entfernt.",
                attractions: [
                    "Oura Strip - 5 Min. zu Fuß",
                    "Altstadt-Bars - 2 Min. zu Fuß",
                    "Strand-Bars - 3 Min. zu Fuß",
                    "Live-Musik-Venues - 8 Min. zu Fuß"
                ]
            },
            activities: {
                title: "Abenteuer & Kultur",
                description: "Tauchen Sie ein in Albufeiras reiche Kultur und aufregende Aktivitäten. Von Wassersport bis hin zu historischen Stätten, schaffen Sie unvergessliche Erinnerungen während Ihres Aufenthalts.",
                attractions: [
                    "Bootstouren & Ausflüge - 5 Min. zu Fuß",
                    "Wassersport - 3 Min. zu Fuß",
                    "Historische Stätten - 10 Min. zu Fuß",
                    "Golfplätze - 15 Min. mit dem Auto"
                ]
            }
        },
        
        // Contact Section
        contact: {
            title: "BUCHEN SIE IHREN AUFENTHALT"
        },
        
        // Booking Widget
        booking: {
            checkIn: "Anreise",
            checkOut: "Abreise",
            guests: "Gäste",
            guestsSingular: "{{NumberOfGuests}} Gast",
            guestsPlural: "{{NumberOfGuests}} Gäste",
            location: "Standort",
            totalPrice: "Gesamtpreis:",
            selectDates: "Daten auswählen, um Gesamtpreis zu sehen",
            from: "Ab",
            perNight: "pro Nacht",
            bookNow: "Jetzt buchen",
            guestsBreakdown: "Gäste",
            adults: '{"one":"Erwachsener","other":"Erwachsene"}',
            adultsDescription: "Alter {minAge} oder älter",
            children: '{"one":"Kind","other":"Kinder"}',
            childrenDescription: "Alter {minAge}-{maxAge}",
            childrenNotAllowed: "Nicht für Kinder geeignet",
            infants: '{"one":"Säugling","other":"Säuglinge"}',
            infantsDescription: "Unter {maxAge}",
            infantsNotAllowed: "Nicht für Säuglinge geeignet",
            pets: '{"one":"Haustier","other":"Haustiere"}',
            petsNotAllowed: "Nicht erlaubt",
            done: "Fertig"
        },
        
        // Footer
        footer: {
            title: "CASA SOLAR",
            description: "Eine wunderschön gestaltete 1-Zimmer-Wohnung im Herzen der Altstadt von Albufeira. Mit einem geräumigen Wohnzimmer mit offener Küche, modernen Annehmlichkeiten und nur wenige Schritte vom Strand entfernt. Perfekt für Paare, die Komfort, Bequemlichkeit und das authentische portugiesische Erlebnis suchen.",
            highlights: {
                beach: "✓ Strandzugang",
                oldTown: "✓ Altstadt-Lage",
                amenities: "✓ Moderne Annehmlichkeiten"
            },
            explore: "ERKUNDEN",
            support: "SUPPORT",
            supportText: "Benötigen Sie Hilfe bei Ihrer Buchung oder haben Sie Fragen zu Ihrem Aufenthalt?",
            copyright: "© 2024 Casa Solar. Alle Rechte vorbehalten. | Albufeira, Portugal"
        },
        
        // Mobile Menu
        mobile: {
            footerText: "Casa Solar - Ihr perfekter Altstadt-Urlaub",
            contactUs: "Kontaktieren Sie uns"
        },
        
        // Language Names
        languages: {
            en: "English",
            pt: "Português",
            fr: "Français",
            de: "Deutsch",
            es: "Español",
            it: "Italiano",
            nl: "Nederlands"
        }
    },
    
    es: {
        // Navigation
        nav: {
            home: "Inicio",
            about: "Acerca de",
            amenities: "Comodidades",
            gallery: "Galería",
            discover: "Descubrir",
            bookNow: "Reservar"
        },
        
        // Hero Section
        hero: {
            title: "CASA SOLAR",
            subtitle: "TU ESCAPADA PERFECTA AL CASCO ANTIGUO",
            bookButton: "RESERVAR AHORA"
        },
        
        // About Section
        about: {
            title: "ACERCA DE CASA SOLAR",
            subtitle: "Experimenta comodidad y conveniencia en el corazón del casco antiguo",
            heading: "TU ESCAPADA PERFECTA",
            description: "Casa Solar es un apartamento de 1 dormitorio completamente equipado con una espaciosa sala de estar y área de cocina abierta, perfectamente diseñado para comodidad y conveniencia. Ubicado en la esquina tranquila del casco antiguo, este increíble apartamento ofrece lo mejor de ambos mundos: un ambiente pacífico con fácil acceso a toda la acción.",
            features: {
                parking: "ESTACIONAMIENTO GRATUITO",
                elevator: "ACCESO POR ASCENSOR",
                kitchen: "COCINA COMPLETAMENTE EQUIPADA",
                oldTown: "PASOS DEL CASCO ANTIGUO"
            }
        },
        
        // Amenities Section
        amenities: {
            title: "COMODIDADES",
            items: {
                kitchen: {
                    title: "COCINA COMPLETAMENTE EQUIPADA",
                    description: "Cocina moderna con electrodomésticos premium, utensilios de cocina y todos los utensilios necesarios para tus necesidades culinarias"
                },
                location: {
                    title: "SEGUNDOS DEL CASCO ANTIGUO",
                    description: "Ubicación privilegiada a pocos minutos del casco antiguo histórico y el centro de la ciudad para fácil exploración"
                },
                washing: {
                    title: "LAVADORA",
                    description: "Lavadora conveniente en la unidad para tus necesidades de lavandería durante tu estadía"
                },
                parking: {
                    title: "ESTACIONAMIENTO",
                    description: "Espacio de estacionamiento conveniente disponible para tu vehículo durante tu estadía"
                },
                sofa: {
                    title: "SOFÁ CAMA CONVERTIBLE",
                    description: "Sofá adaptable que se convierte en cama, acomodando cómodamente hasta 4 personas"
                },
                wifi: {
                    title: "WI-FI GRATUITO",
                    description: "Conexión a internet de alta velocidad incluida para todas tus necesidades digitales durante tu estadía"
                },
                ac: {
                    title: "AIRE ACONDICIONADO",
                    description: "Sistema de control climático para asegurar tu comodidad durante toda tu estadía"
                },
                quiet: {
                    title: "UBICACIÓN TRANQUILA",
                    description: "Rincón pacífico del casco antiguo lejos del bullicio, perfecto para relajación"
                }
            }
        },
        
        // Gallery Section
        gallery: {
            title: "GALERÍA",
            subtitle: "Haz un tour visual de nuestra hermosa propiedad",
            filters: {
                all: "Todos",
                interior: "Interior",
                kitchen: "Cocina",
                bedroom: "Dormitorio",
                bathroom: "Baño"
            },
            items: {
                hallway: {
                    title: "Pasillo",
                    description: "Entrada brillante y acogedora conectando todas las áreas"
                },
                bedroom: {
                    title: "Dormitorio",
                    description: "Área de descanso cómoda y pacífica"
                },
                bathroom: {
                    title: "Baño",
                    description: "Baño limpio y moderno con todas las comodidades"
                },
                kitchen: {
                    title: "Cocina",
                    description: "Espacio de cocina moderna completamente equipada"
                },
                kitchenDetail: {
                    title: "Cocina",
                    description: "Vista adicional del área de cocina"
                },
                dining: {
                    title: "Comedor",
                    description: "Área de comedor espaciosa para comidas y reuniones"
                },
                living: {
                    title: "Sala de estar",
                    description: "Espacio de vida cómodo para relajación"
                },
                machines: {
                    title: "Rincón de máquinas",
                    description: "Área de lavandería con lavadora"
                },
                downtown: {
                    title: "Centro/Casco antiguo",
                    description: "Área del casco antiguo histórico a pocos pasos"
                },
                parking: {
                    title: "Estacionamiento",
                    description: "Espacio de estacionamiento conveniente para tu vehículo"
                },
                pescadores: {
                    title: "Playa de Pescadores",
                    description: "Hermosa playa a pocos pasos de Casa Solar"
                },
                peneco: {
                    title: "Playa de Peneco",
                    description: "Vista impresionante de la Playa de Peneco"
                }
            }
        },
        
        // Discover Section
        discover: {
            title: "DESCUBRE ALBUFEIRA",
            subtitle: "El corazón de la impresionante región del Algarve de Portugal",
            tabs: {
                beaches: "Playas",
                nightlife: "Vida nocturna",
                activities: "Actividades"
            },
            beaches: {
                title: "Playas impresionantes",
                description: "Explora las playas de arena dorada de Albufeira con aguas cristalinas. La Playa de Pescadores y la Playa del Túnel están a una corta caminata de Casa Solar.",
                attractions: [
                    "Playa de Pescadores - 3 min a pie",
                    "Playa del Túnel - 1 min a pie",
                    "Playa de São Rafael - 5 min en coche",
                    "Playa de Falésia - 15 min en coche"
                ]
            },
            nightlife: {
                title: "Vida nocturna vibrante",
                description: "Descubre la emocionante escena de vida nocturna de Albufeira. Desde bares acogedores hasta clubes animados, disfruta del entretenimiento nocturno perfecto a pocos pasos de tu alojamiento.",
                attractions: [
                    "Oura Strip - 5 min a pie",
                    "Bares del casco antiguo - 2 min a pie",
                    "Bares de playa - 3 min a pie",
                    "Lugares de música en vivo - 8 min a pie"
                ]
            },
            activities: {
                title: "Aventura y cultura",
                description: "Sumérgete en la rica cultura y actividades emocionantes de Albufeira. Desde deportes acuáticos hasta sitios históricos, crea recuerdos inolvidables durante tu estadía.",
                attractions: [
                    "Paseos en barco y tours - 5 min a pie",
                    "Deportes acuáticos - 3 min a pie",
                    "Sitios históricos - 10 min a pie",
                    "Campos de golf - 15 min en coche"
                ]
            }
        },
        
        // Contact Section
        contact: {
            title: "RESERVA TU ESTADÍA"
        },
        
        // Booking Widget
        booking: {
            checkIn: "Llegada",
            checkOut: "Salida",
            guests: "Huéspedes",
            guestsSingular: "{{NumberOfGuests}} huésped",
            guestsPlural: "{{NumberOfGuests}} huéspedes",
            location: "Ubicación",
            totalPrice: "Precio total:",
            selectDates: "Selecciona fechas para ver el precio total",
            from: "Desde",
            perNight: "por noche",
            bookNow: "Reservar ahora",
            guestsBreakdown: "Huéspedes",
            adults: '{"one":"adulto","other":"adultos"}',
            adultsDescription: "Edades {minAge} o más",
            children: '{"one":"niño","other":"niños"}',
            childrenDescription: "Edades {minAge}-{maxAge}",
            childrenNotAllowed: "No adecuado para niños",
            infants: '{"one":"bebé","other":"bebés"}',
            infantsDescription: "Menos de {maxAge}",
            infantsNotAllowed: "No adecuado para bebés",
            pets: '{"one":"mascota","other":"mascotas"}',
            petsNotAllowed: "No permitido",
            done: "Hecho"
        },
        
        // Footer
        footer: {
            title: "CASA SOLAR",
            description: "Un apartamento de 1 dormitorio bellamente diseñado en el corazón del casco antiguo de Albufeira. Con una espaciosa sala de estar con cocina abierta, comodidades modernas y a pocos pasos de la playa. Perfecto para parejas que buscan comodidad, conveniencia y la auténtica experiencia portuguesa.",
            highlights: {
                beach: "✓ Acceso a la playa",
                oldTown: "✓ Ubicación en casco antiguo",
                amenities: "✓ Comodidades modernas"
            },
            explore: "EXPLORAR",
            support: "SOPORTE",
            supportText: "¿Necesitas ayuda con tu reserva o tienes preguntas sobre tu estadía?",
            copyright: "© 2024 Casa Solar. Todos los derechos reservados. | Albufeira, Portugal"
        },
        
        // Mobile Menu
        mobile: {
            footerText: "Casa Solar - Tu escapada perfecta al casco antiguo",
            contactUs: "Contáctanos"
        },
        
        // Language Names
        languages: {
            en: "English",
            pt: "Português",
            fr: "Français",
            de: "Deutsch",
            es: "Español",
            it: "Italiano",
            nl: "Nederlands"
        }
    },
    
    it: {
        // Navigation
        nav: {
            home: "Home",
            about: "Chi siamo",
            amenities: "Servizi",
            gallery: "Galleria",
            discover: "Scopri",
            bookNow: "Prenota"
        },
        
        // Hero Section
        hero: {
            title: "CASA SOLAR",
            subtitle: "LA TUA PERFETTA FUGA NEL CENTRO STORICO",
            bookButton: "PRENOTA ORA"
        },
        
        // About Section
        about: {
            title: "CHI SIAMO - CASA SOLAR",
            subtitle: "Sperimenta comfort e convenienza nel cuore del centro storico",
            heading: "LA TUA PERFETTA FUGA",
            description: "Casa Solar è un appartamento di 1 camera da letto completamente attrezzato con un ampio soggiorno e area cucina aperta, perfettamente progettato per comfort e convenienza. Situato nell'angolo tranquillo del centro storico, questo incredibile appartamento offre il meglio di entrambi i mondi - un ambiente pacifico con facile accesso a tutta l'azione.",
            features: {
                parking: "PARCHEGGIO GRATUITO",
                elevator: "ACCESSO CON ASCENSORE",
                kitchen: "CUCINA COMPLETAMENTE ATTREZZATA",
                oldTown: "PASSI DAL CENTRO STORICO"
            }
        },
        
        // Amenities Section
        amenities: {
            title: "SERVIZI",
            items: {
                kitchen: {
                    title: "CUCINA COMPLETAMENTE ATTREZZATA",
                    description: "Cucina moderna con elettrodomestici premium, utensili da cucina e tutti gli utensili necessari per le tue esigenze culinarie"
                },
                location: {
                    title: "SECONDI DAL CENTRO STORICO",
                    description: "Posizione privilegiata a pochi minuti dal centro storico e dall'area del centro città per una facile esplorazione"
                },
                washing: {
                    title: "LAVATRICE",
                    description: "Lavatrice conveniente nell'unità per le tue esigenze di lavanderia durante il tuo soggiorno"
                },
                parking: {
                    title: "PARCHEGGIO",
                    description: "Spazio di parcheggio conveniente disponibile per il tuo veicolo durante il tuo soggiorno"
                },
                sofa: {
                    title: "DIVANO LETTO CONVERTIBILE",
                    description: "Divano adattabile che si converte in letto, ospitando comodamente fino a 4 persone"
                },
                wifi: {
                    title: "WI-FI GRATUITO",
                    description: "Connessione internet ad alta velocità inclusa per tutte le tue esigenze digitali durante il tuo soggiorno"
                },
                ac: {
                    title: "ARIA CONDIZIONATA",
                    description: "Sistema di controllo climatico per garantire il tuo comfort durante tutto il tuo soggiorno"
                },
                quiet: {
                    title: "POSIZIONE TRANQUILLA",
                    description: "Angolo pacifico del centro storico lontano dal trambusto, perfetto per il relax"
                }
            }
        },
        
        // Gallery Section
        gallery: {
            title: "GALLERIA",
            subtitle: "Fai un tour visivo della nostra bellissima proprietà",
            filters: {
                all: "Tutti",
                interior: "Interno",
                kitchen: "Cucina",
                bedroom: "Camera da letto",
                bathroom: "Bagno"
            },
            items: {
                hallway: {
                    title: "Corridoio",
                    description: "Ingresso luminoso e accogliente che collega tutte le aree"
                },
                bedroom: {
                    title: "Camera da letto",
                    description: "Area di riposo confortevole e pacifica"
                },
                bathroom: {
                    title: "Bagno",
                    description: "Bagno pulito e moderno con tutti i comfort"
                },
                kitchen: {
                    title: "Cucina",
                    description: "Spazio cucina moderna completamente attrezzata"
                },
                kitchenDetail: {
                    title: "Cucina",
                    description: "Vista aggiuntiva dell'area cucina"
                },
                dining: {
                    title: "Sala da pranzo",
                    description: "Area pranzo spaziosa per pasti e riunioni"
                },
                living: {
                    title: "Soggiorno",
                    description: "Spazio di vita confortevole per il relax"
                },
                machines: {
                    title: "Angolo delle macchine",
                    description: "Area lavanderia con lavatrice"
                },
                downtown: {
                    title: "Centro/Centro storico",
                    description: "Area del centro storico a pochi passi"
                },
                parking: {
                    title: "Parcheggio",
                    description: "Spazio di parcheggio conveniente per il tuo veicolo"
                },
                pescadores: {
                    title: "Spiaggia di Pescadores",
                    description: "Bella spiaggia a pochi passi da Casa Solar"
                },
                peneco: {
                    title: "Spiaggia di Peneco",
                    description: "Vista mozzafiato della Spiaggia di Peneco"
                }
            }
        },
        
        // Discover Section
        discover: {
            title: "SCOPRI ALBUFEIRA",
            subtitle: "Il cuore della splendida regione dell'Algarve del Portogallo",
            tabs: {
                beaches: "Spiagge",
                nightlife: "Vita notturna",
                activities: "Attività"
            },
            beaches: {
                title: "Spiagge mozzafiato",
                description: "Esplora le spiagge di sabbia dorata di Albufeira con acque cristalline. La Spiaggia di Pescadores e la Spiaggia del Túnel sono a pochi passi da Casa Solar.",
                attractions: [
                    "Spiaggia di Pescadores - 3 min a piedi",
                    "Spiaggia del Túnel - 1 min a piedi",
                    "Spiaggia di São Rafael - 5 min in auto",
                    "Spiaggia di Falésia - 15 min in auto"
                ]
            },
            nightlife: {
                title: "Vita notturna vibrante",
                description: "Scopri la emozionante scena della vita notturna di Albufeira. Dai bar accoglienti ai club vivaci, goditi il perfetto intrattenimento serale a pochi passi dal tuo alloggio.",
                attractions: [
                    "Oura Strip - 5 min a piedi",
                    "Bar del centro storico - 2 min a piedi",
                    "Bar della spiaggia - 3 min a piedi",
                    "Locali di musica dal vivo - 8 min a piedi"
                ]
            },
            activities: {
                title: "Avventura e cultura",
                description: "Immergiti nella ricca cultura e nelle attività emozionanti di Albufeira. Dagli sport acquatici ai siti storici, crea ricordi indimenticabili durante il tuo soggiorno.",
                attractions: [
                    "Gite in barca e tour - 5 min a piedi",
                    "Sport acquatici - 3 min a piedi",
                    "Siti storici - 10 min a piedi",
                    "Campi da golf - 15 min in auto"
                ]
            }
        },
        
        // Contact Section
        contact: {
            title: "PRENOTA IL TUO SOGGIORNO"
        },
        
        // Booking Widget
        booking: {
            checkIn: "Check-in",
            checkOut: "Check-out",
            guests: "Ospiti",
            guestsSingular: "{{NumberOfGuests}} ospite",
            guestsPlural: "{{NumberOfGuests}} ospiti",
            location: "Posizione",
            totalPrice: "Prezzo totale:",
            selectDates: "Seleziona le date per vedere il prezzo totale",
            from: "Da",
            perNight: "per notte",
            bookNow: "Prenota ora",
            guestsBreakdown: "Ospiti",
            adults: '{"one":"adulto","other":"adulti"}',
            adultsDescription: "Età {minAge} o superiore",
            children: '{"one":"bambino","other":"bambini"}',
            childrenDescription: "Età {minAge}-{maxAge}",
            childrenNotAllowed: "Non adatto ai bambini",
            infants: '{"one":"neonato","other":"neonati"}',
            infantsDescription: "Sotto {maxAge}",
            infantsNotAllowed: "Non adatto ai neonati",
            pets: '{"one":"animale domestico","other":"animali domestici"}',
            petsNotAllowed: "Non consentito",
            done: "Fatto"
        },
        
        // Footer
        footer: {
            title: "CASA SOLAR",
            description: "Un appartamento di 1 camera da letto splendidamente progettato nel cuore del centro storico di Albufeira. Con un ampio soggiorno con cucina aperta, comfort moderni e a pochi passi dalla spiaggia. Perfetto per coppie che cercano comfort, convenienza e l'autentica esperienza portoghese.",
            highlights: {
                beach: "✓ Accesso alla spiaggia",
                oldTown: "✓ Posizione nel centro storico",
                amenities: "✓ Comfort moderni"
            },
            explore: "ESPLORA",
            support: "SUPPORTO",
            supportText: "Hai bisogno di aiuto con la tua prenotazione o hai domande sul tuo soggiorno?",
            copyright: "© 2024 Casa Solar. Tutti i diritti riservati. | Albufeira, Portogallo"
        },
        
        // Mobile Menu
        mobile: {
            footerText: "Casa Solar - La tua perfetta fuga nel centro storico",
            contactUs: "Contattaci"
        },
        
        // Language Names
        languages: {
            en: "English",
            pt: "Português",
            fr: "Français",
            de: "Deutsch",
            es: "Español",
            it: "Italiano",
            nl: "Nederlands"
        }
    },
    
    nl: {
        // Navigation
        nav: {
            home: "Home",
            about: "Over ons",
            amenities: "Faciliteiten",
            gallery: "Galerij",
            discover: "Ontdek",
            bookNow: "Boek nu"
        },
        
        // Hero Section
        hero: {
            title: "CASA SOLAR",
            subtitle: "JOUW PERFECTE OUDE STAD ONTSPANNING",
            bookButton: "BOEK NU"
        },
        
        // About Section
        about: {
            title: "OVER CASA SOLAR",
            subtitle: "Ervaar comfort en gemak in het hart van de oude stad",
            heading: "JOUW PERFECTE ONTSPANNING",
            description: "Casa Solar is een volledig uitgeruste 1-slaapkamer appartement met een ruime woonkamer en open keukenruimte, perfect ontworpen voor comfort en gemak. Gelegen in de rustige hoek van de oude stad, biedt dit geweldige appartement het beste van beide werelden - een vredige omgeving met gemakkelijke toegang tot alle actie.",
            features: {
                parking: "GRATIS PARKEREN",
                elevator: "LIFTOEGANG",
                kitchen: "VOLLEDIG UITGERUSTE KEUKEN",
                oldTown: "STAPPEN VAN DE OUDE STAD"
            }
        },
        
        // Amenities Section
        amenities: {
            title: "FACILITEITEN",
            items: {
                kitchen: {
                    title: "VOLLEDIG UITGERUSTE KEUKEN",
                    description: "Moderne keuken met premium apparaten, kookgerei en alle benodigde keukengerei voor je culinaire behoeften"
                },
                location: {
                    title: "SECONDEN VAN DE OUDE STAD",
                    description: "Geprivilegieerde locatie op slechts enkele minuten van de historische oude stad en centrum voor eenvoudige verkenning"
                },
                washing: {
                    title: "WASMACHINE",
                    description: "Handige wasmachine in de unit voor je wasbehoeften tijdens je verblijf"
                },
                parking: {
                    title: "PARKEREN",
                    description: "Handige parkeerplaats beschikbaar voor je voertuig tijdens je verblijf"
                },
                sofa: {
                    title: "CONVERTIBLE SOFA BED",
                    description: "Aanpasbare bank die zich omzet in een bed, comfortabel geschikt voor maximaal 4 personen"
                },
                wifi: {
                    title: "GRATIS WIFI",
                    description: "Hogesnelheids internetverbinding inbegrepen voor al je digitale behoeften tijdens je verblijf"
                },
                ac: {
                    title: "AIRCONDITIONING",
                    description: "Klimaatbeheersysteem om je comfort tijdens je hele verblijf te waarborgen"
                },
                quiet: {
                    title: "STILLE LOCATIE",
                    description: "Vredige hoek van de oude stad weg van de drukte, perfect voor ontspanning"
                }
            }
        },
        
        // Gallery Section
        gallery: {
            title: "GALERIJ",
            subtitle: "Maak een visuele tour van onze prachtige eigendom",
            filters: {
                all: "Alle",
                interior: "Interieur",
                kitchen: "Keuken",
                bedroom: "Slaapkamer",
                bathroom: "Badkamer"
            },
            items: {
                hallway: {
                    title: "Gang",
                    description: "Helle en uitnodigende ingang die alle gebieden verbindt"
                },
                bedroom: {
                    title: "Slaapkamer",
                    description: "Comfortabele en vredige slaapruimte"
                },
                bathroom: {
                    title: "Badkamer",
                    description: "Schone en moderne badkamer met alle faciliteiten"
                },
                kitchen: {
                    title: "Keuken",
                    description: "Volledig uitgeruste moderne keukenruimte"
                },
                kitchenDetail: {
                    title: "Keuken",
                    description: "Extra weergave van de keukenruimte"
                },
                dining: {
                    title: "Eetkamer",
                    description: "Ruime eetruimte voor maaltijden en bijeenkomsten"
                },
                living: {
                    title: "Woonkamer",
                    description: "Comfortabele leefruimte voor ontspanning"
                },
                machines: {
                    title: "Machines hoek",
                    description: "Wasruimte met wasmachine"
                },
                downtown: {
                    title: "Centrum/Oude stad",
                    description: "Historische oude stad gebied op slechts enkele stappen"
                },
                parking: {
                    title: "Parkeerplaats",
                    description: "Handige parkeerplaats voor je voertuig"
                },
                pescadores: {
                    title: "Pescadores Strand",
                    description: "Prachtig strand op slechts enkele stappen van Casa Solar"
                },
                peneco: {
                    title: "Peneco Strand",
                    description: "Adembenemend uitzicht op Peneco Strand"
                }
            }
        },
        
        // Discover Section
        discover: {
            title: "ONTDEK ALBUFEIRA",
            subtitle: "Het hart van Portugal's prachtige Algarve regio",
            tabs: {
                beaches: "Stranden",
                nightlife: "Nachtleven",
                activities: "Activiteiten"
            },
            beaches: {
                title: "Adembenemende stranden",
                description: "Verken Albufeira's gouden zandstranden met kristalheldere wateren. Pescadores Strand en Túnel Strand zijn op slechts een korte wandeling van Casa Solar.",
                attractions: [
                    "Pescadores Strand - 3 min lopen",
                    "Túnel Strand - 1 min lopen",
                    "São Rafael Strand - 5 min rijden",
                    "Falésia Strand - 15 min rijden"
                ]
            },
            nightlife: {
                title: "Levendig nachtleven",
                description: "Ontdek Albufeira's spannende nachtleven scene. Van gezellige bars tot levendige clubs, geniet van perfecte avondentertainment op slechts enkele stappen van je accommodatie.",
                attractions: [
                    "Oura Strip - 5 min lopen",
                    "Oude stad bars - 2 min lopen",
                    "Strand bars - 3 min lopen",
                    "Live muziek venues - 8 min lopen"
                ]
            },
            activities: {
                title: "Avontuur & cultuur",
                description: "Dompel je onder in Albufeira's rijke cultuur en spannende activiteiten. Van watersporten tot historische sites, creëer onvergetelijke herinneringen tijdens je verblijf.",
                attractions: [
                    "Boottochten & tours - 5 min lopen",
                    "Watersporten - 3 min lopen",
                    "Historische sites - 10 min lopen",
                    "Golfbanen - 15 min rijden"
                ]
            }
        },
        
        // Contact Section
        contact: {
            title: "BOEK JOUW VERBLIJF"
        },
        
        // Booking Widget
        booking: {
            checkIn: "Inchecken",
            checkOut: "Uitchecken",
            guests: "Gasten",
            guestsSingular: "{{NumberOfGuests}} gast",
            guestsPlural: "{{NumberOfGuests}} gasten",
            location: "Locatie",
            totalPrice: "Totale prijs:",
            selectDates: "Selecteer datums om totale prijs te zien",
            from: "Vanaf",
            perNight: "per nacht",
            bookNow: "Boek nu",
            guestsBreakdown: "Gasten",
            adults: '{"one":"volwassene","other":"volwassenen"}',
            adultsDescription: "Leeftijd {minAge} of ouder",
            children: '{"one":"kind","other":"kinderen"}',
            childrenDescription: "Leeftijd {minAge}-{maxAge}",
            childrenNotAllowed: "Niet geschikt voor kinderen",
            infants: '{"one":"baby","other":"baby\'s"}',
            infantsDescription: "Onder {maxAge}",
            infantsNotAllowed: "Niet geschikt voor baby's",
            pets: '{"one":"huisdier","other":"huisdieren"}',
            petsNotAllowed: "Niet toegestaan",
            done: "Klaar"
        },
        
        // Footer
        footer: {
            title: "CASA SOLAR",
            description: "Een prachtig ontworpen 1-slaapkamer appartement in het hart van de oude stad van Albufeira. Met een ruime woonkamer met open keuken, moderne faciliteiten en op slechts enkele stappen van het strand. Perfect voor koppels die comfort, gemak en de authentieke Portugese ervaring zoeken.",
            highlights: {
                beach: "✓ Strand toegang",
                oldTown: "✓ Oude stad locatie",
                amenities: "✓ Moderne faciliteiten"
            },
            explore: "VERKEN",
            support: "ONDERSTEUNING",
            supportText: "Hulp nodig bij je boeking of vragen over je verblijf?",
            copyright: "© 2024 Casa Solar. Alle rechten voorbehouden. | Albufeira, Portugal"
        },
        
        // Mobile Menu
        mobile: {
            footerText: "Casa Solar - Jouw perfecte oude stad ontspanning",
            contactUs: "Neem contact op"
        },
        
        // Language Names
        languages: {
            en: "English",
            pt: "Português",
            fr: "Français",
            de: "Deutsch",
            es: "Español",
            it: "Italiano",
            nl: "Nederlands"
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
