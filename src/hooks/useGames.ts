import { useEffect, useState } from "react";
import { FetchGamesResponse, Game } from "../components/GameGrid";
import apiClient from "../services/api_key";
import { CanceledError } from "axios";

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });
    }, [])

    return { games, error }
}

export default useGames;