import { getRepository } from 'typeorm';

import Item from '../models/Item';

interface Request {
  title: string;
  image: string;
}

class CreateItemService {
  public async execute({ title, image }: Request): Promise<Item> {
    const itemRepository = getRepository(Item);

    const item = itemRepository.create({
      title,
      image,
    });

    if (!item) {
      throw new Error('Erro ao criar item');
    }

    await itemRepository.save(item);

    return item;
  }
}

export default CreateItemService;
