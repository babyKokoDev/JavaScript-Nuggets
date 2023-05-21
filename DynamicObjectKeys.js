        const person = {
            name: "john"
        }
        console.log(person['name'])
        person.age = 25
        console.log(person);

        const items = {
            'featured-items' : ['item1', 'item2']
        }
        console.log(items['featured-items'])

        let appState = 'loading'
        appState = 'error'
        const keyName = 'computer'

        const app = {
            [appState] : true
        }

        app[keyName] = 'apple'
        console.log(app)

        const state = {
            loading:true,
            name: '',
            job:''
        }

        const updateState = (key, value) => {
             state[key] = value
        }

        updateState('name', 'john')
        updateState('job', 'developer')
        updateState('loading', 'false')
        updateState('products', ['phone', 'iphone'])
        console.log(state)

        const newArray = ["apple", "pineapple", "orange", "banana", "banana", "apple", "orange", "apple", "pineapple", "orange", "banana", "banana", "apple", "orange","banana", "banana", "apple"]

        const dynamicArray = newArray.reduce((total, item)=>{
            if (total[item]){
             total[item] = total[item] + 1
            }else {
             total[item] = 1
            }
             return total
        }, {})

        console.log(dynamicArray)