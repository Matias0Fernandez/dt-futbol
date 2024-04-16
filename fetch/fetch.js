function getFullUsers() {
    getUsers("https://66279b8eb625bf088c08fd8e.mockapi.io/api/usuarios")
}

async function getUsers(url) {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const result = await response.json();
            console.log(result);
        } else {
            throw new Error('The server you are calling might be down, try again later.')
        }

    } catch (error) {
        console.log(error)
    }
}

getFullUsers()