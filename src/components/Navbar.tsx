import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext"; // 👈 Importa il tema
import { Moon, Sun } from "lucide-react"; // icone eleganti

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useTheme(); // 👈 Usa il contesto tema

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = (): void => {
    logout();
    setIsUserMenuOpen(false);
    navigate("/");
  };

  const getUserInitials = (): string => {
    if (!user) return "";
    const parts = `${user.name} ${user.surname ?? ""}`.trim().split(" ");
    return parts
      .map((p) => p.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("");
  };

  return (
    <nav className="bg-background dark:bg-background shadow-md border-b border-border dark:border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-primary dark:text-secondary"
            >
              Il mio IBS
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-text dark:text-text hover:text-primary-light dark:hover:text-secondary-light transition"
            >
              Chi siamo
            </Link>
            <Link
              to="/experiences"
              className="text-text dark:text-text hover:text-primary-light dark:hover:text-secondary-light transition"
            >
              Esperienze
            </Link>
            <Link
              to="/contact"
              className="text-text dark:text-text hover:text-primary-light dark:hover:text-secondary-light transition"
            >
              Contact
            </Link>
          </div>

          {/* Auth Section + Tema (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Pulsante Dark Mode */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface dark:bg-surface hover:bg-hover dark:hover:bg-hover transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-primary-dark" />
              )}
            </button>

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="h-10 w-10 rounded-full bg-primary text-background flex items-center justify-center font-semibold hover:ring-2 hover:ring-primary-light transition"
                >
                  {getUserInitials()}
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-surface dark:bg-surface rounded-lg shadow-lg py-2 z-50 border border-border dark:border-border">
                    <button
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        navigate("/profile");
                      }}
                      className="w-full text-left px-4 py-2 text-text dark:text-text hover:bg-hover dark:hover:bg-hover flex items-center space-x-2"
                    >
                      <span>Profilo</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-error hover:bg-error dark:hover:bg-error flex items-center space-x-2"
                    >
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary-light dark:hover:bg-primary-light transition"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary-dark transition"
                >
                  Registrazione
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button + Dark Mode */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Pulsante Dark Mode (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface dark:bg-surface hover:bg-hover dark:hover:bg-hover transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-primary-dark" />
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="text-text dark:text-text hover:text-primary-light dark:hover:text-secondary-light focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-text dark:text-text hover:text-primary-light dark:hover:text-secondary-light py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Chi siamo
              </Link>
              <Link
                to="/experiences"
                className="text-text dark:text-text hover:text-primary-light dark:hover:text-secondary-light py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Esperienze
              </Link>
              <Link
                to="/contact"
                className="text-text dark:text-text hover:text-primary-light dark:hover:text-secondary-light py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 border-t dark:border-gray-700">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 px-4 py-2 bg-surface dark:bg-surface rounded-lg border border-border dark:border-border">
                      <div className="h-10 w-10 rounded-full bg-primary text-background flex items-center justify-center font-semibold">
                        {getUserInitials()}
                      </div>
                      <div>
                        <p className="font-medium text-text dark:text-text">
                          {user?.name} {user?.surname}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        navigate("/profile");
                        setIsMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-text dark:text-text hover:bg-hover dark:hover:bg-hover rounded-lg"
                    >
                      Profilo
                    </button>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-error hover:bg-error dark:hover:bg-error rounded-lg"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => {
                        navigate("/login");
                        setIsMenuOpen(false);
                      }}
                      className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary-light dark:hover:bg-primary-light transition"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        navigate("/register");
                        setIsMenuOpen(false);
                      }}
                      className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary-dark transition"
                    >
                      Registrazione
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
