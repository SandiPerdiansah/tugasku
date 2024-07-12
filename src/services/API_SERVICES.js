export const API_SERVICES = async () => {
    const url = 'https://script.google.com/macros/s/AKfycbyDzM2QlxCmH-EDuAVNYbpwBuGQfuz6_1L1trc2rpBRUFLGZSEoNYxs8GY6znJEMMU-gQ/exec';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return { error: error.message };
    }
}
