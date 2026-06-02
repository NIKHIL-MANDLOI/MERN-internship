async function getUsers() {

    try {

        const response = await fetch(
            "http://localhost:3000/users"
        );

        const data = await response.json();

        console.log("Fetched Users:");
        console.log(data);

        document.getElementById("output").innerHTML =
            JSON.stringify(data, null, 2);

    } catch (error) {

        console.log("Error:", error);

    }

}