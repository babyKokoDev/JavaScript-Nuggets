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