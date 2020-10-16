import axios from "axios";

export function apiHandler() {
    // if (!process.env.VUE_APP_BACKEND_URL)
    // throw new Error("Fournir URL de base pour effectuer app AJAX");

    const instance = axios.create({
        // 1 méthode d'axios
        baseURL: process.env.VUE_APP_BACKEND_URL, // pour normaliser la connection à l'API backend
    });

    return instance;
}
// test pour changer l'error