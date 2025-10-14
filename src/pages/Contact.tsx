import React from "react";

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    const emailAddress = "info@ilmioibs.com";
    const subject = "Richiesta informazioni - Il Mio IBS";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-card dark:bg-card rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-primary dark:text-secondary mb-6">
            Contattaci
          </h1>

          <div className="w-20 h-1 bg-primary dark:bg-secondary mx-auto mb-8"></div>

          <p className="text-xl text-text dark:text-text mb-8">
            Hai domande o vuoi condividere qualcosa con noi? Siamo qui per
            ascoltarti.
          </p>

          <p className="text-lg text-text dark:text-text mb-12">
            Inviaci una email e ti risponderemo il prima possibile.
          </p>

          <button
            onClick={handleEmailClick}
            className="inline-flex items-center px-8 py-4 bg-primary dark:bg-secondary text-card dark:text-card rounded-lg text-lg font-semibold hover:bg-primary-dark dark:hover:bg-secondary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Scrivici una email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
