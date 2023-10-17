import _ from 'lodash'

const data = [
    {
        username: 'juan',
        role: 'admin'
    },
    {
        username: 'esteban',
        role: 'customer'
    },
    {
        username: 'adriana',
        role: 'admin'
    },
    {
        username: 'valentina',
        role: 'seller'
    }
]

const rta = _.groupBy(data, (item) => item.role)
console.log(rta)