"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/about/AboutSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { AchievementsSection } from "@/components/achievements/AchievementsSection";
import { CertificationsSection } from "@/components/certifications/CertificationsSection";
import { EducationSection } from "@/components/education/EducationSection";
import { EngineeringSection } from "@/components/engineering/EngineeringSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { CanvasWrapper } from "@/components/3d/CanvasWrapper";
import { CVModal, FloatingCVButton } from "@/components/ui/CVModal";

export default function Home() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Automatically pop up the CV when someone is visiting the website
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("ankit_cv_visited_auto_pop");
    if (!hasVisited) {
      // 1.4-second cinematic entrance delay
      const timer = setTimeout(() => {
        setCvModalOpen(true);
        sessionStorage.setItem("ankit_cv_visited_auto_pop", "true");
      }, 1400);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0B0806] text-warm-white relative flex flex-col selection:bg-gold-champagne/25 selection:text-warm-white">
      {/* Persistent Global 3D Three.js WebGL Scene Across the WHOLE Website */}
      <CanvasWrapper />

      {/* Floating Transparent Navigation with CV Popup Trigger */}
      <Navbar onOpenCV={() => setCvModalOpen(true)} />

      {/* Hero Section with Portrait & Chiaroscuro 3D Environment */}
      <Hero />

      {/* Beyond the Code — Editorial Biography & 3D Tilt Capabilities */}
      <AboutSection />

      {/* Crafted Architectures — Large Cinematic Project Case Studies with 3D Tilt */}
      <ProjectsSection />

      {/* Industry Experience — CodeValues Pvt. Limited Chronos Timeline */}
      <ExperienceSection />

      {/* Technical Arsenal — Interactive 3D Skills Cluster & Full Stack */}
      <SkillsSection />

      {/* Verified Accolades — LeetCode 100+ & Hackathon Standing with 3D Tilt */}
      <AchievementsSection />

      {/* Credentials & Specialized Academic Training (CV Verbatim) */}
      <CertificationsSection />

      {/* Academic Background — Lovely Professional University & Schooling */}
      <EducationSection />

      {/* Repository Architecture — GitHub Repositories & Profiles */}
      <EngineeringSection />

      {/* Initiate Conversation — Encrypted Ingestion Terminal Form */}
      <ContactSection />

      {/* Minimal Luxury Footer */}
      <Footer />

      {/* Floating Quick-Access CV Trigger */}
      <FloatingCVButton onClick={() => setCvModalOpen(true)} />

      {/* High-Tech Futuristic CV Pop-up Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </main>
  );
}
