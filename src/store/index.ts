import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categories from "@store/category/categorySlice";
import products from "@store/products/productsSlice";
import cartProduct from "./cartProduct/cartProductSlice";
import auth from "./Auth/authSlice" ;
import wishlist from "./wishlist/wishlistSlice";
import orders from "./placeOrders/placeOrdersSlice"
import bestSellers from "./bestSellersProducts/bestSellersProductsSlice";
import toast from "./toast/toastSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";


const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cartProducts", "auth"],
};

// nested Perisest => dawr dialo tahuwa kan7aded shno bghit bdabt mn State  bach ndir lih Store.
// const cartPersistConfig = {
//   key: "cart",
//   storage,
//   whitelist: ["items"],
// };

// const AuthPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["user", "accessToken"],
// };

//  hada huwa container dial Reducers
const rootReducer = combineReducers({
  categories,
  products,
  cartProduct,
  auth,
  wishlist,
  orders,
  toast,
  bestSellers
});

/**
 * rootPersistConfig: kandiro fiha config 3la ashmn State ghadi idir lihom store f Storage
 * RootReducer: huwa li fih ga3 slices dialna lihoma State li homa Reducers
 * bach daskhi li kini f rootPersistConfig huwa li mshi yakhdo mn rootReducer
 */
const persistedReducer = persistReducer(rootPersistConfig, rootReducer); 

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER, PURGE],
      },
    });
  },
});

const persiststore = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store, persiststore };
