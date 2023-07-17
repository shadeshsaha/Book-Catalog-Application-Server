import express from 'express';
import { BookRoutes } from '../modules/book/books.routes';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { WishListRoutes } from '../modules/wishlist/wishList.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/wishlists',
    route: WishListRoutes,
  },
];

moduleRoutes.forEach(r => router.use(r.path, r.route));

export default router;
