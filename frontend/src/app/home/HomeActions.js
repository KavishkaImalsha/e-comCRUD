'use server'
export const getProducts = async() => {
    try{
        const response = await fetch(`${process.env.BACKEND_URL}/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products from API');
        }

        const result = await response.json();

        return {
            success: true,
            data: result.data,
        };
    } catch (error) {
        console.error("Fetch Error:", error);
        return {
            success: false,
            message: error.message,
        };
    }
}

export const getProductById = async (id) => {
    try {
        const baseUrl = process.env.BACKEND_URL || 'http://localhost:3000';
        const response = await fetch(`${baseUrl}/products/${id}`, {caches: 'no-store'});
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Fetch Error:", error);
        return null;
    }
};