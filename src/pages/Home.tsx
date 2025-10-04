import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Benvenuto su MyApp
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100">
              Condividi le tue esperienze con la community
            </p>
            <button
              onClick={() => navigate("/experiences")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition shadow-lg"
            >
              Scopri le Esperienze
            </button>
          </div>
        </div>
      </div>

      {/* Chi Siamo Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Chi Siamo
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Siamo una piattaforma dedicata alla condivisione di esperienze
              personali. La nostra missione è creare una community dove le
              persone possono raccontare le loro storie, ispirare gli altri e
              trovare connessioni autentiche.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Crediamo nel potere delle storie personali e nell'importanza di
              condividere momenti significativi della propria vita. Ogni
              esperienza conta e può fare la differenza nella vita di qualcun
              altro.
            </p>
          </div>
          <div className="bg-blue-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              I Nostri Valori
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">
                  Autenticità nelle storie condivise
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">
                  Rispetto per ogni esperienza
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">
                  Community inclusiva e accogliente
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">
                  Crescita personale attraverso la condivisione
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Pronto a Condividere la Tua Storia?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Unisciti alla nostra community e inizia a raccontare le tue
            esperienze
          </p>
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Registrati Ora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
