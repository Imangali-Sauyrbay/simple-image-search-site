import { wait } from '@utils/wait'
import { random } from '@utils/random'
import source from './source'

export const getDummyImage = async (id: string) => {
    await wait(random(1000, 5000))
    return source.find(i => i.id === id)
}