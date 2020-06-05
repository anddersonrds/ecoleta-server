import { getRepository } from 'typeorm';

import Item from '../../models/Item';

interface SerialiazedItem {
  title: string;
  image_url: string;
}

class ListItemsService {
  public async execute(): Promise<SerialiazedItem[]> {
    const itemRepository = getRepository(Item);

    const items = await itemRepository.find();

    const serialiazedItems = items.map(item => {
      return {
        title: item.title,
        image_url: `http://localhost:3333/tmp/${item.image}`,
      };
    });

    return serialiazedItems;
  }
}

export default ListItemsService;
