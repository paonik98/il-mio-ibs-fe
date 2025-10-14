import React, { useState, useEffect } from "react";
import { Experience, Question } from "../types";
import api from "../services/api";
import { avatarColorMap } from "../types/avatarColor";

const Experiences: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const [expRes, qRes] = await Promise.all([
        api.experiences.getAll(),
        api.questions.getAll(),
      ]);

      if (expRes.success && qRes.success) {
        setExperiences(expRes.data ?? []);
        setQuestions(qRes.data ?? []);
      } else {
        setError("Errore nel caricamento dei dati");
      }
    } catch (err) {
      console.error("Errore nel caricamento:", err);
      setError("Errore di connessione al server");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Caricamento esperienze...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background dark:bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary dark:text-secondary mb-4">
            Esperienze della Community
          </h1>
          <p className="text-lg text-text dark:text-text">
            Scopri le storie condivise dai nostri utenti
          </p>
          <div className="w-20 h-1 bg-primary dark:bg-secondary mx-auto mt-4"></div>
        </div>

        {/* Experiences List */}
        {experiences.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-secondary dark:text-text-secondary text-lg">
              Nessuna esperienza disponibile al momento
            </p>
          </div>
        ) : (
          <div className="flex flex-col space-y-6">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience._id || experience.id}
                experience={experience}
                questions={questions}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface ExperienceCardProps {
  experience: Experience;
  questions: Question[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  questions,
}) => {
  const userName = experience.userName || "Utente";
  const userAge = experience.userAge || "N/A";
  const title = experience.title || "Senza titolo";
  const date = experience.createdAt
    ? new Date(experience.createdAt).toLocaleDateString("it-IT")
    : "";

  // Mappa rapida domandaId -> testo
  const questionMap: Record<string, string> = Object.fromEntries(
    questions.map((q) => [q._id, q.text])
  );
  return (
    <div className="bg-white dark:bg-white/10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Header utente */}
      <div className="bg-primary dark:bg-primary px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div
              className={`h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-white transition ${
                experience.avatarColor
                  ? avatarColorMap[experience.avatarColor]
                  : "bg-secondary dark:bg-secondary"
              }`}
            >
              {getInitials(userName)}
            </div>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-lg">{userName}</h3>
            <p className="text-white text-sm">{userAge} anni</p>
          </div>
        </div>
      </div>

      {/* Contenuto esperienza */}
      <div className="p-6 flex-grow">
        <h4 className="text-xl font-bold text-primary dark:text-secondary mb-3">
          {title}
        </h4>

        {experience.content?.map((item, idx) => (
          <div key={idx} className="mb-4">
            <p className="font-semibold text-text dark:text-text">
              {questionMap[item.questionId] || "Domanda non trovata"}
            </p>
            <p className="text-text-secondary dark:text-text-secondary mt-1 whitespace-pre-line">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-white dark:bg-white/10">
        <div className="flex items-center justify-between text-sm text-text-secondary dark:text-text-secondary">
          <span>{date}</span>
          <button className="text-tertiary dark:text-tertiary hover:text-tertiary/80 dark:hover:text-tertiary/80 font-medium transition">
            Leggi di più →
          </button>
        </div>
      </div>
    </div>
  );
};

// 🔹 helper function
const getInitials = (name?: string) => {
  if (!name) return "?";
  return name
    .split(" ")
    .map((n) => n.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
};

export default Experiences;
