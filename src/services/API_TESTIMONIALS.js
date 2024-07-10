export const API_TESTIMONIALS = {
    url : 'https://script.google.com/macros/s/AKfycbxbRKIgABNcNzt5iNFR8HlabwFbf4Rx2wgnLU6vxnIh2pLNbbz1erJU5GaCCd4J07vw/exec',

    async getTestimonials(){
        try {
            const response = await fetch(this.url);
            const data = await response.json();
            return data;
        } catch (error) {
            return { error: error.message };
        }
    },

    async postTestimonial({id, name, service, testimoni, token, rating}) {
        const newTestimoni = {
            id,
            name,
            service,
            testimoni,
            token,
            rating
        };

        try {
            const response = await fetch(this.url, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTestimoni)
            });

            const data = await response.json();

            if (data.status === 201) {
                console.log('Testimonial added successfully:', data.testimonial);
            } else {
                console.error('Error adding testimonial:', data.message);
            }

            return data;
        } catch (error) {
            console.error('Request failed:', error);
            throw error;
        }
    }
}