import { useEffect } from "react";
import api from "../services/api";

/**
 * Hook che sveglia il backend all'avvio dell'app
 */
export const useWakeUp = () => {
  useEffect(() => {
    api.auth.wakeUp();
  }, []);
};

export default useWakeUp;
