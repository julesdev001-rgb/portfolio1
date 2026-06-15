export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  year: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Campagne Luxe Horlogerie",
    description: "Série de vidéos courtes et scripts pour le lancement d'une collection limitée.",
    category: "Divertissement",
    tags: ["Vidéo", "Branding", "Instagram"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 2,
    title: "Stratégie B2B Fintech",
    description: "Refonte complète de la présence LinkedIn pour un leader de la finance tech.",
    category: "Entreprise",
    tags: ["LinkedIn", "Branding", "Entreprise"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1460925895917-afbe65ae8364?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 3,
    title: "Cours de Masterclass Design",
    description: "Création de scripts pédagogiques et visuels pour une formation en ligne.",
    category: "Éducation",
    tags: ["Script", "Éducation", "Vidéo"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 4,
    title: "Campagne Growth SaaS",
    description: "Série de publicités performantes axées sur la conversion pour un logiciel CRM.",
    category: "Marketing",
    tags: ["Publicité", "Marketing", "Vidéo"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1460925895917-afbe65ae8364?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 5,
    title: "Storytelling Marque Mode",
    description: "Création de contenus immersifs pour Instagram et TikTok.",
    category: "Réseaux sociaux",
    tags: ["Instagram", "Vidéo", "Branding"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 6,
    title: "Série de Podcasts Entrepreneuriat",
    description: "Écriture des scripts et direction artistique audio pour une série de 10 épisodes.",
    category: "Scripts",
    tags: ["Script", "Entreprise", "Audio"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 7,
    title: "Identité Visuelle Agency",
    description: "Accompagnement global sur la création de contenus pour une agence créative.",
    category: "Entreprise",
    tags: ["Branding", "Entreprise", "Vidéo"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 8,
    title: "Campagne Influence Beauté",
    description: "Coordination et création de scripts pour une campagne d'influenceurs.",
    category: "Marketing",
    tags: ["Publicité", "Instagram", "Marketing"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];
