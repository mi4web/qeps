
const checkResponse = (response) => {

    if (response.status >= 200 && response.status < 305) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
};

export default checkResponse;