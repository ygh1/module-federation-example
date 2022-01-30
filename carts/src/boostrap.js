import faker from '@faker-js/faker'
import add from 'host/add'

document.getElementById('dev-carts').innerHTML = add('I ` am from ', 'host')