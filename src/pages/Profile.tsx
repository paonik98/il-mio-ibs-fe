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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
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
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Header profilo */}
        <div className="flex items-center space-x-4 mb-6">
          <div
            className={`h-16 w-16 rounded-full flex items-center justify-center text-white font-bold text-2xl ${
              userData.avatarColor ? userData.avatarColor : "bg-blue-600"
            }`}
          >
            {getInitials(userData.name, userData.surname)}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {userData.name} {userData.surname}
            </h2>
            <p className="text-gray-500">{userData.email}</p>
          </div>
        </div>

        {/* Dettagli */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Dettagli account
          </h3>
          <div className="text-gray-700 space-y-1">
            <p>
              <span className="font-semibold">ID:</span> {userData._id}
            </p>
            <p>
              <span className="font-semibold">Nome:</span> {userData.name}
            </p>
            <p>
              <span className="font-semibold">Cognome:</span> {userData.surname}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {userData.email}
            </p>
            <p>
              <span className="font-semibold">Data di nascita:</span>{" "}
              {new Date(userData.dateOfBirth).toLocaleDateString("it-IT")}
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
