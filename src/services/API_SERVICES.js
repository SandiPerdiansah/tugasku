export const API_SERVICES = async () => {
    const url = 'https://script.google.com/macros/s/AKfycbwp4_Cxg0s-eNdFxs3dyPOkm60SqmpA3C7jsvarFt7qXIr42rxjnYLG3jJOJAt-Ak2NEw/exec';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return { error: error.message };
    }
}
