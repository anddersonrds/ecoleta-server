import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateItemService from '../services/CreateItemService';

const itemsRouter = Router();
const upload = multer(uploadConfig);

itemsRouter.post('/', upload.single('image'), async (request, response) => {
  try {
    const createItem = new CreateItemService();

    const { title } = request.body;

    const item = await createItem.execute({
      title,
      image: request.file.filename,
    });

    return response.json(item);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default itemsRouter;
