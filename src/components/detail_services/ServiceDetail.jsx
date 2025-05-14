import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // MySQL
import { faCogs } from "@fortawesome/free-solid-svg-icons"; // Laravel
import { SiLaravel } from "react-icons/si"; // Laravel logo
import { SiFigma } from "react-icons/si"; // Laravel logo

import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import "./detail.css";

// Import des images
import serviceImg from "../../assets/work1.png";
import serviceImg1 from "../../assets/work2.png";
import serviceImg2 from "../../assets/work3.png";
import serviceImg5 from "../../assets/screen.png";
import serviceImg6 from "../../assets/work6.png";
import serviceImg7 from "../../assets/brainstrada.png"

const techIcons = {
  React: <FontAwesomeIcon icon={faReact} />,
  Mysql: <FontAwesomeIcon icon={faDatabase} />,
  Laravel: <SiLaravel />,
  Arduino: <FontAwesomeIcon icon={faCogs} />,
  "C++": <FontAwesomeIcon icon={faCogs} />,
  Figma: <SiFigma />,
  "Adobe Photoshop": <FontAwesomeIcon icon={faPaintBrush} />,
};

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Tableau de données des services avec toutes les informations nécessaires
  const services = [
    {
      id: "1",
      title: "Gestion Scolaire",
      image: serviceImg,
      description:
        "Institution Academic Connect est un système complet de gestion scolaire conçu pour simplifier les processus administratifs et améliorer la communication entre les enseignants, les élèves et les parents. Cette application web propose l'inscription des élèves, le suivi des présences, la gestion des notes, la planification des cours et un système robuste de notifications.",
      projectUrl: "https://github.com/Oumbarek-Soufiane/Aim_App",
      technologies: ["Laravel"],
      features: [
        "Tableau de bord convivial pour les administrateurs, les enseignants et les élèves",
        "Suivi et rapports de présence en temps réel",
        "Système complet de gestion des notes",
        "Portail de communication pour les parents",
        "Bibliothèque de ressources et soumission des devoirs",
      ],
    },
    {
      id: "2",
      title: "Gestion Scolaire - El Karama Boussaid",
      image: serviceImg1,
      description:
        "Le système de gestion scolaire El Karama Boussaid est adapté aux besoins spécifiques de l'institution El Karama. Cette plateforme centralise toutes les opérations scolaires, notamment la gestion des informations des élèves, la planification des programmes, la programmation des examens et la tenue des registres financiers. Le système est conçu en mettant l'accent sur la facilité d'utilisation et la gestion efficace des flux de travail.",
      projectUrl: "https://github.com/Oumbarek-Soufiane/School_Elkarama_App",
      technologies: ["React", "Mysql", "Laravel"],
      features: [
        "Outils personnalisés de gestion des programmes scolaires",
        "Planification et notation intégrées des examens",
        "Module de gestion financière",
        "Système complet de rapports",
        "Conception adaptée aux appareils mobiles",
      ],
    },
    {
      id: "3",
      title: "Poubelle Intelligente - Projet Hackathon",
      image: serviceImg2,
      description:
        "Ce système innovant de poubelle intelligente a été développé lors d'un hackathon. En utilisant le matériel Arduino et la programmation C++, il crée une solution IoT pour la gestion des déchets. Le système comprend des capteurs pour surveiller le niveau des déchets, des alertes automatisées lorsque les poubelles doivent être vidées et la collecte de données pour optimiser les itinéraires de collecte.",
      projectUrl: "https://github.com/Oumbarek-Soufiane/project-hackathon",
      technologies: ["Arduino", "C++"],
      features: [
        "Surveillance en temps réel du niveau de remplissage",
        "Système de notifications automatiques",
        "Conception écoénergétique avec options d'alimentation solaire",
        "Tableau de bord d'analyse pour l'optimisation des collectes",
        "Surveillance de la température et de l'humidité pour détecter les taux de décomposition",
      ],
    },
    
    {
      id: "4",
      title: "Plateforme de Musique avec Chat en Direct - Projet UX/UI",
      image: serviceImg5,
      description:
        "Une conception UX/UI complète pour une plateforme de streaming musical avec fonctionnalité de chat en direct intégrée. Créé dans Figma, ce projet démontre une approche de conception centrée sur l'utilisateur avec un accent sur la navigation intuitive, la découverte musicale fluide et l'interaction sociale grâce aux fonctionnalités de chat en temps réel.",
      projectUrl:
        "https://www.figma.com/proto/CsG3AGJGc5ZykHu2tZwkYP/projet-ux-ui?node-id=2-2",
      technologies: ["Figma"],
      features: [
        "Prototype interactif haute fidélité",
        "Cartographies du parcours utilisateur et wireframes",
        "Ensemble d'icônes personnalisées et système de design visuel",
        "Conception responsive pour plusieurs types d'appareils",
        "Considérations d'accessibilité intégrées tout au long du processus",
      ],
    },
    {
      id: "5",
      title: "Achat de Médicaments Urgents - Application Mobile",
      image: serviceImg6,
      description:
        "Une application mobile innovante conçue pour aider les utilisateurs à localiser et acheter rapidement des médicaments urgents. Ce projet UX/UI dans Figma répond au besoin critique d'accès immédiat aux médicaments essentiels grâce à une interface intuitive qui connecte les utilisateurs aux pharmacies à proximité offrant des services de livraison urgente.",
      projectUrl:
        "https://www.figma.com/proto/mhfgfgtMcv3uRBvZeRPb9J/app-gestion-urgents?node-id=19-22&p=f&t=g5VlE8ip5QL93dN0-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=19%3A22",
      technologies: ["Figma"],
      features: [
        "Localisateur de pharmacies basé sur la géolocalisation",
        "Fonctionnalité de recherche de médicaments d'urgence",
        "Système sécurisé de téléchargement d'ordonnances",
        "Interface de suivi des livraisons",
        "Processus de paiement convivial",
      ],
    },
    {
      id: "6",
      title: "Projet E-learning  Web Site!  ( Figma )",
      image: serviceImg7,
      description:
        "Brainstrada est une plateforme d’e-learning innovante qui rend l’apprentissage accessible, flexible et engageant. Que vous soyez étudiant, professionnel ou simplement curieux d’apprendre, notre large éventail de cours interactifs vous permet de développer vos compétences à votre propre rythme.",
      projectUrl:
        "https://www.figma.com/proto/H3gw3ZpcEqR7dY9iMsWPuo/Untitled?node-id=1-2&starting-point-node-id=1%3A2",
      technologies: ["Figma"],
      features: [
        "Cours variés : Technologie, business, design, développement personnel et bien plus.",
        "Experts certifiés : Apprenez auprès de formateurs expérimentés et reconnus.",
        "Accès 24/7 : Formez-vous quand vous voulez, où que vous soyez.",
        "Parcours personnalisés : Suivez des modules adaptés à vos objectifs.",
        "Certifications à la clé : Valorisez vos nouvelles compétences sur le marché du travail",
      ],
    }
  ];

  // Trouver le service sélectionné en fonction du paramètre id
  const selectedService = services.find((service) => service.id === id);

  // Gérer le cas où le service n'est pas trouvé
  useEffect(() => {
    if (!selectedService && id) {
      navigate("/works"); // Rediriger vers la page des services/travaux si l'ID est invalide
    }
  }, [selectedService, id, navigate]);

  // Fonction pour revenir en arrière
  const goBack = () => {
    navigate(-1);
  };

  if (!selectedService) return null;

  return (
    <div className="service-detail-container section">
      <div className="service-detail-content">
        <button className="back-button" onClick={goBack}>
          <i className="bx bx-arrow-back"></i> Retour aux Travaux
        </button>

        <h1 className="service-detail-title">{selectedService.title}</h1>

        <div className="service-detail-image-container">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="service-detail-image"
          />
        </div>

        <div className="service-detail-description">
          <p>{selectedService.description}</p>

          <div className="service-tech-stack">
            <h3>Technologies</h3>
            <div className="tech-tags">
              {selectedService.technologies.map((tech, index) => (
                <div key={index} className="tech-tag-with-icon">
                  {techIcons[tech] && (
                    <span className="icon">{techIcons[tech]}</span>
                  )}
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="service-features">
            <h3>Fonctionnalités Clés</h3>
            <ul>
              {selectedService.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Project View or Download Section */}
          <div className="project-view-section dark">
            {selectedService.projectUrl != "#" ? (
              <a
                href={selectedService.projectUrl}
                target="_blank"
                rel="noreferrer"
                className="view-project-button"
              >
                Voir le Projet <i className="bx bx-link-external"></i>
              </a>
            ) : (
              <a
                href={selectedService.image}
                download={`Chefchaouen_Project_${selectedService.id}.jpg`}
                className="download-button view-project-button"
                
              >
                Télécharger l'Image
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
