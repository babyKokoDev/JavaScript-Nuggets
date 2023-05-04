        const people = [
            {
                name : "bob",
                age : 20,
                position : "developer"
            
            },
            {
                name : "anna",
                age : 20,
                position : "designer"
            
            },
            {
                name : "susy",
                age : 20,
                position : "the boss"
            
            },
            {
                name : "john",
                age : 26,
                position : "intern"
            
            }
        ]

        const getAges = (person) => person.age * 2
        const getName = (person) => person.name.toUpperCase()

        const ages = people.map(getName)

        console.log(ages)

        const newPeople = people.map((item)=> {
            return {
                firstname : item.name.toUpperCase(),
                oldage : item.age + 20
            }
        })
        console.log(newPeople)