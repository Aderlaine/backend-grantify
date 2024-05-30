import { Request, Response, NextFunction } from 'express';

const catchAsync = (controller: (req: Request, res: Response) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res);
    } catch (err) {
      next(err);
    }
  };

export default catchAsync;
