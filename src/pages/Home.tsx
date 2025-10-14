import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-text transition-colors duration-500">
      {/* HERO */}
      <section className="bg-primary text-white py-12 sm:py-24 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Vivere con l'Intestino Irritabile
          </h1>
          <p className="text-lg sm:text-xl mb-4 text-blue-100">
            Condividi la tua storia, trova conforto e ispira chi vive la tua
            stessa esperienza.
          </p>
        </div>
      </section>

      {/* COS’È L’INTESTINO IRRITABILE */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Cos’è la Sindrome dell’Intestino Irritabile?
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-6 text-text">
              La sindrome dell’intestino irritabile (IBS) è un disturbo cronico
              che coinvolge l’apparato digerente e può causare dolore
              addominale, gonfiore, e alterazioni del transito intestinale.
              Nonostante non sia una malattia grave, può influenzare
              significativamente la qualità della vita.
            </p>
            <p className="text-lg text-text">
              Questo sito nasce per dare voce a chi convive con l’IBS: uno
              spazio dove condividere esperienze, scambiare consigli e sentirsi
              meno soli.
            </p>
          </div>
          <div className="bg-secondary/10 dark:bg-secondary/20 rounded-xl p-8 transition-colors duration-500">
            <h3 className="text-2xl font-semibold text-secondary mb-4">
              Perché condividere?
            </h3>
            <ul className="space-y-4 text-text">
              <li>🌿 Condividere esperienze aiuta la consapevolezza.</li>
              <li>💬 Le storie vere possono offrire conforto e sostegno.</li>
              <li>
                🫶 La community può essere un punto di forza per chi lotta ogni
                giorno.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/10 dark:bg-secondary/25 py-16 text-center transition-colors duration-500">
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Esplora e Condividi
        </h2>
        <p className="text-lg mb-8 text-text">
          Unisciti alla nostra community e fai la differenza
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto px-4">
          {/* Card 1 - Scopri di più */}
          <div className="flex-1 bg-primary dark:bg-primary p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="flex-1 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Scopri di più sull'intestino irritabile
              </h3>
              <p className="text-white text-lg">
                Informati sui sintomi, le cause e le possibili soluzioni per
                gestire l'IBS.
              </p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="w-full bg-white text-primary px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Scopri di più
            </button>
          </div>

          {/* Card 2 - Racconta la tua storia */}
          <div className="flex-1 bg-primary dark:bg-primary p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="flex-1 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Racconta la tua storia
              </h3>
              <p className="text-white text-lg">
                Condividi la tua esperienza e aiuta altri a sentirsi meno soli
                nel loro percorso.
              </p>
            </div>
            <button
              onClick={() => navigate("/register")}
              className="w-full bg-white text-primary px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Condividi
            </button>
          </div>

          {/* Card 3 - Leggi le storie */}
          <div className="flex-1 bg-primary dark:bg-primary p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="flex-1 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Leggi le storie degli altri
              </h3>
              <p className="text-white text-lg">
                Scopri le esperienze condivise dalla nostra community e trova
                ispirazione.
              </p>
            </div>
            <button
              onClick={() => navigate("/experiences")}
              className="w-full bg-white text-primary px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Leggi le storie
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
