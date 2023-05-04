        const menu = [
            {
                name: "pancakes",
                category : "breakfast",
            },
            {
                name: "burger",
                category : "lunch",
            },
            {
                name: "steak",
                category : "dinner",
            },
            {
                name: "bacon",
                category : "breakfast",
            },
            {
                name: "eggs",
                category : "breakfast",
            },
            {
                name: "paste",
                category : "dinner",
            },
        ]

        const categories = ['all', ...new Set(menu.map((item)=> item.category))]
        console.log(categories)
        result.innerHTML = categories.map((item)=> {
            return `<button>${item}</button>`
        }).join(' ')