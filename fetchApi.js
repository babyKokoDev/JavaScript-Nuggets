const url = "https://www.course-api.com/react-tours-project";

// fetch(url)
//   .then((result) => result.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));


const getTours = async () => {
    try {
        const resp = await fetch(url)
        const data = await resp.json()
        console.log(data);
    } catch (error) {
         console.log(error);
    }
}

getTours()