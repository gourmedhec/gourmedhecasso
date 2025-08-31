"use client";
import "./Footer.css";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useViewTransition } from "@/hooks/useViewTransition";
import Copy from "../Copy/Copy";

import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { navigateWithTransition } = useViewTransition();
  const socialIconsRef = useRef(null);

  useGSAP(
    () => {
      if (!socialIconsRef.current) return;

      const icons = socialIconsRef.current.querySelectorAll(".icon");
      gsap.set(icons, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: socialIconsRef.current,
        start: "top 90%",
        once: true,
        animation: gsap.to(icons, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: -0.1,
          ease: "power3.out",
        }),
      });
    },
    { scope: socialIconsRef }
  );

  return (
    <div className="footer">
      <div className="footer-meta">
        <div className="container footer-meta-header">
          <div className="footer-meta-col">
            <div className="footer-meta-block">
              <div className="footer-meta-logo">
                <Copy delay={0.1}>
                  <h1 className="lg">GOURM’EDHEC</h1>
                </Copy>
              </div>
              <Copy delay={0.2}>
                <h3>Une association engagée, créative dans ses actions, durable dans son impact.</h3>
              </Copy>
            </div>
          </div>
          <div className="footer-meta-col">
            <div className="footer-nav-links">
              <Copy delay={0.1}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/");
                  }}
                >
                  <h3>Accueil</h3>
                </a>
                <a
                  href="/studio"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/studio");
                  }}
                >
                  <h3>Nos Événements</h3>
                </a>
                <a
                  href="/spaces"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/spaces");
                  }}
                >
                  <h3>Nos Membres</h3>
                </a>
                <a
                  href="/sample-space"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/sample-space");
                  }}
                >
                  <h3>Nos Locations</h3>
                </a>
                <a
                  href="/blueprints"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/blueprints");
                  }}
                >
                  <h3>Nous Contacter</h3>
                </a>
                <a
                  href="/connect"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/connect");
                  }}
                >
                  <h3>Connect</h3>
                </a>
              </Copy>
            </div>
          </div>
        </div>
        <div className="container footer-socials">
          <div className="footer-meta-col">
            <div className="footer-socials-wrapper" ref={socialIconsRef}>
            <div className="icon">
  <a
    href="https://fr.linkedin.com/company/gourmedhec"
    target="_blank"
    rel="noopener noreferrer"
    className="text-current" // garde la couleur actuelle
  >
    <RiLinkedinBoxLine className="w-8 h-8 text-blue-700" /> {/* taille et couleur */}
  </a>
</div>
<div className="icon">
  <a href="https://www.instagram.com/gourmedhec_asso/" target="_blank" rel="noopener noreferrer">
    <RiInstagramLine />
  </a>
</div>
<div className="icon">
  <a href="https://www.facebook.com/Gourmedhec/" target="_blank" rel="noopener noreferrer">
    <RiFacebookLine />
  </a>
</div>

            </div>
          </div>
          <div className="footer-meta-col">
            <Copy delay={0.1}>
              <p>
                Nous pensons que la nourriture n'est pas qu'un besoin vital mais aussi un art de vivre centré autour du partage qui embellit nos expériences.
              </p>
            </Copy>
          </div>
        </div>
      </div>
      <div className="footer-outro">
        <div className="container">
          <div className="footer-header">
            <img src="/logos/terrene-logo.svg" alt="" />
          </div>
          <div className="footer-copyright">
            <p>
              Developpé par — <span>nobode</span>
            </p>
            <p>Ce site internet utilise vos cookies.</p>
            <p>Tous droits réservés &copy; 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
