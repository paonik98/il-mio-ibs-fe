import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { UserProfile } from "../types/index";
import api from "../services/api";

const Profile: React.FC = () => {
  const { user } = useAuth(); // opzionale, se vuoi info già in context
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Utente non loggato");

      const res = await api.user.getUser();

      if (!res.success) throw new Error("Errore nel recupero del profilo");

      const data: UserProfile = await res.data!;
      setUserData(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Errore di connessione al server");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Caricamento profilo...</p>
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

  if (!userData) return null;

  return (
    <div className="min-h-screen bg-background dark:bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-card dark:bg-card shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl p-8">
        {/* Header profilo */}
        <div className="flex items-center space-x-4 mb-6">
          <div
            className={`h-16 w-16 rounded-full flex items-center justify-center text-white font-bold text-2xl ${
              userData.avatarColor
                ? userData.avatarColor
                : "bg-primary dark:bg-primary"
            }`}
          >
            {getInitials(userData.name, userData.surname)}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-text dark:text-text">
              {userData.name} {userData.surname}
            </h2>
            <p className="text-text-secondary dark:text-text-secondary">
              {userData.email}
            </p>
          </div>
        </div>

        {/* Dettagli */}
        <div>
          <h3 className="text-xl font-semibold text-text dark:text-text mb-4">
            Dettagli account
          </h3>
          <div className="text-text dark:text-text space-y-3">
            <p>
              <span className="font-semibold text-primary dark:text-secondary">
                Nome:
              </span>{" "}
              {userData.name}
            </p>
            <p>
              <span className="font-semibold text-primary dark:text-secondary">
                Cognome:
              </span>{" "}
              {userData.surname}
            </p>
            <p>
              <span className="font-semibold text-primary dark:text-secondary">
                Email:
              </span>{" "}
              {userData.email}
            </p>
            <p>
              <span className="font-semibold text-primary dark:text-secondary">
                Data di nascita:
              </span>{" "}
              {new Date(userData.dateOfBirth).toLocaleDateString("it-IT")}
            </p>
            <p>
              <span className="font-semibold text-primary dark:text-secondary">
                Colore avatar:
              </span>{" "}
              {userData.avatarColor || "Default"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Funzione helper per iniziali
const getInitials = (name?: string, surname?: string) => {
  const n = name?.charAt(0).toUpperCase() || "";
  const s = surname?.charAt(0).toUpperCase() || "";
  return n + s;
};

export default Profile;
