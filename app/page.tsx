"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Importación para optimización de imágenes
import { motion } from "framer-motion";
import {
  Mail,
  FileText,
  Moon,
  Sun,
  Terminal,
  Server,
  Code2,
  Database,
  Layout,
  PenTool,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import data from "./data.json";

// --- DEFINICIÓN DE TIPOS (Para solucionar errores de TypeScript) ---
interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

// Variantes de animación
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Portfolio() {
  // Puesto en TRUE por defecto para tema oscuro inicial
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    // Paleta: Neutral para fondos, Orange/Red para acentos
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-neutral-950 text-neutral-100"
          : "bg-neutral-50 text-neutral-900"
      }`}
    >
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-opacity-80 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl font-mono text-orange-600 dark:text-orange-500">
            &lt;Dev/&gt;
          </span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-orange-600 dark:text-orange-400"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* --- HERO SECTION --- */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="flex flex-col md:flex-row items-center gap-10 mb-24"
        >
          <motion.div variants={fadeInUp} className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full text-sm font-mono bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border border-orange-200 dark:border-orange-800/50">
              {data.profile.role}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                {data.profile.name}
              </span>
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
              {data.profile.description}
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href={data.profile.resumeUrl}
                className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-orange-600 transition-colors dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-orange-500 dark:hover:text-white font-medium"
              >
                <FileText size={18} /> Descargar CV
              </a>
              <div className="flex items-center gap-3 px-4 text-neutral-500 dark:text-neutral-400">
                <a
                  href={data.profile.social.github}
                  className="hover:text-orange-500 transition"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={data.profile.social.linkedin}
                  className="hover:text-orange-500 transition"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={data.profile.social.email}
                  className="hover:text-orange-500 transition"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-neutral-100 dark:border-neutral-800"
          >
            {/* CORRECCIÓN DE IMAGEN: Usando Next/Image */}
            <Image
              src={data.profile.avatarUrl}
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.section>

        {/* --- TECH STACK (Actualizado con tus categorías del JSON) --- */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Terminal className="text-orange-500" /> Stack Tecnológico
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard
              title="Core & Lenguajes"
              icon={<Code2 size={20} />}
              skills={data.skills.core}
            />
            <SkillCard
              title="Frontend"
              icon={<Layout size={20} />}
              skills={data.skills.frontend}
            />
            <SkillCard
              title="Backend & DB"
              icon={<Database size={20} />}
              skills={data.skills.backend}
            />
            <SkillCard
              title="Infraestructura"
              icon={<Server size={20} />}
              skills={data.skills.infrastructure}
            />
            <SkillCard
              title="Herramientas"
              icon={<PenTool size={20} />}
              skills={data.skills.tools}
            />
          </div>
        </motion.section>

        {/* --- EXPERIENCE --- */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold mb-8">Experiencia Laboral</h2>
          <div className="space-y-12 border-l-2 border-neutral-200 dark:border-neutral-800 ml-3 pl-8 relative">
            {data.experience.map((job, index) => (
              <div key={index} className="relative">
                {/* Punto naranja de la línea de tiempo */}
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-neutral-50 dark:border-neutral-950 bg-orange-500 block"></span>
                <h3 className="text-xl font-bold">{job.role}</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-orange-600 dark:text-orange-400 font-medium">
                    {job.company}
                  </span>
                  <span className="text-sm text-neutral-500 font-mono">
                    {job.period}
                  </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* --- PROJECTS --- */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold mb-8">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <motion.a
                href={project.link}
                key={index}
                whileHover={{ y: -5 }}
                className="block p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-orange-500/10 hover:border-orange-500/30 transition-all group"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* --- EDUCATION --- */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Educación</h2>
          {data.education.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between sm:items-center py-4 border-b border-neutral-200 dark:border-neutral-800"
            >
              <div>
                <h4 className="font-bold text-lg">{edu.institution}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {edu.degree}
                </p>
              </div>
              <span className="text-sm font-mono text-neutral-500 mt-2 sm:mt-0">
                {edu.period}
              </span>
            </div>
          ))}
        </motion.section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-sm text-neutral-500 dark:text-neutral-600 border-t border-neutral-200 dark:border-neutral-800">
        <p>
          © {new Date().getFullYear()} {data.profile.name}. Ing. Informática &
          Systems Dev.
        </p>
      </footer>
    </div>
  );
}

// Sub-componente con Tipado Correcto
function SkillCard({ title, icon, skills }: SkillCardProps) {
  if (!skills) return null;
  return (
    <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-orange-500/20 transition-colors">
      <div className="flex items-center gap-3 mb-4 text-orange-600 dark:text-orange-500">
        {icon}
        <h3 className="font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill: string) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-md text-neutral-700 dark:text-neutral-300 font-mono hover:border-orange-500/50 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
