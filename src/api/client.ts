import { getCategories, getCategory } from "./services/categories";
import { getProduct, getProducts } from "./services/products";


export const client = {
   products: {
      getProducts, getProduct
   },

   categories: {
      getCategories, getCategory
   },

   users: {

   },

   auth: {

   }
}