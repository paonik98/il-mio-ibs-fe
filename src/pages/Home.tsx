import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-text transition-colors duration-500">
      {/* HERO */}
      <section className="bg-primary text-white py-20 sm:py-32 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Vivere con l’Intestino Irritabile
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            Condividi la tua storia, trova conforto e ispira chi vive la tua
            stessa esperienza.
          </p>
          <button
            onClick={() => navigate("/experiences")}
            className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition shadow-lg"
          >
            Scopri le Esperienze
          </button>
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
          Racconta la tua storia
        </h2>
        <p className="text-lg mb-8 text-text">
          Aiuta altre persone a capire che non sono sole nel loro percorso con
          l’IBS.
        </p>
        <button
          onClick={() => navigate("/register")}
          className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition shadow-lg"
        >
          Condividi la tua esperienza
        </button>
      </section>
    </div>
  );
};

export default Home;
