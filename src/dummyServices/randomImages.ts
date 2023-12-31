import { wait } from '@utils/wait'
import { random } from '@utils/random'
import source from './source'

export const getRandomImages = async () => {
    await wait(random(3000, 5000))
    
    return {
        type: 'success',
        status: 200,
        response: source
    }
}