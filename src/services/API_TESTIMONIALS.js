export const API_TESTIMONIALS = {
    url : 'https://script.google.com/macros/s/AKfycbyvuQc1cB3389wEr7tzLRi8puUHrQP7XruTt5hWV_e3-0ZprLrzipw-uIYbaA1NOw8/exec',

    async getTestimonials(){
        try {
            const response = await fetch(this.url);
            const data = await response.json();
            return data;
        } catch (error) {
            return { error: error.message };
        }
    },
}