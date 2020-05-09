const getDetailMovies = idMovie => {
    let container = document.getElementById("movie-container");
    container.innerHTML = loading;
    fetchApi(`${endpointDetailMovie}${idMovie}?api_key=${API_KEY}`)
        .then(data => {
            container.innerHTML = "";
            dbSaveDetailMovie(data)
                .then(status => {
                    if (status) {
                        dbGetDetailMovie(data.id).then(showDetailMovie);
                    } else {
                        container.innerHTML = "<p>Ups Failed to load Data</p>";
                        console.log("Error get save data")
                    }
                })
        })
};


const dbGetDetailMovie = idMovie => {
    return new Promise((resolve, reject) => {
        idbPromised.then(db => {
            const transaction = db.transaction("movie-detail", `readonly`);
            return transaction.objectStore("movie-detail").get(idMovie)
        }).then(data => {
            if (data !== undefined) {
                resolve(data)
            } else {
                reject(new Error("Data not found"))
            }
        })
})
};