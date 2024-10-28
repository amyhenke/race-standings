const X_API_KEY = import.meta.env.VITE_X_API_KEY;

export const fetchCardData = async () => {
    try {
        const res = await fetch("http://localhost:8000/api/cards");

        if (!res.ok) {
            throw new Error("Network response error");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching cards: ", error);
        throw error;
    }
};

// export const fetchSingleCardData = async (id) => {
export const fetchSingleCardData = async (slug) => {
    try {
        // const res = await fetch(`http://localhost:8000/api/cards/${id}`);
        const res = await fetch(`http://localhost:8000/api/cards/${slug}`);

        if (!res.ok) {
            throw new Error("Network response error");
        }
        const data = await res.json();

        return data[0];
    } catch (error) {
        console.error("Error fetching card: ", error);
        throw error;
    }
};

export const fetchStatsData = async () => {
    try {
        const res = await fetch(
            "https://pitwall.redbullracing.com/api/stats/drivers/2023",
            {
                headers: {
                    "x-api-key": X_API_KEY,
                },
            }
        );
        const data = await res.json();

        return data;
    } catch (error) {
        console.error("Error fetching stats", error);
    }
};
