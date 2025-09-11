import PageProtected from "@components/Auth/PageProtected/PageProtected";
import { PageSuspenseFeedback } from "@components/Feedback";
import LottieHandler from "@components/Feedback/LottieHandler/LottieHandler";
import ErrorPage from "@pages/ErrorPage";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));
const HomePage = lazy(() => import("@pages/HomePage"));
const CategoriesPage = lazy(() => import("@pages/CategoriesPage"));
const ProductPage = lazy(() => import("@pages/ProductsPage"));
const CartProductPage = lazy(() => import("@pages/CartProductPage"));
const AccountPage = lazy(() => import("@pages/Account"));
const OrdersPage = lazy(() => import("@pages/OrdersPage"));
const WishlistPage = lazy(() => import("@pages/WishlistPage"));
const ProfileLayout = lazy(
  () => import("@layouts/ProfileLayout/ProfileLayout")
);

const LoginPage = lazy(() => import("@pages/LoginPage"));

const RegisterPage = lazy(() => import("@pages/RegisterPage"));
const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>,
    element: (
      <Suspense
        fallback={
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}>
            <LottieHandler type="firstLoading" message="Loading..." />
          </div>
        }>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <PageSuspenseFeedback>
            <HomePage />
          </PageSuspenseFeedback>
        ),
      },
      {
        path: "categories",
        element: (
          <PageSuspenseFeedback>
            <CategoriesPage />
          </PageSuspenseFeedback>
        ),
      },
      {
        path: "categories/products/:prefix",
        element: (
          <PageSuspenseFeedback>
            <ProductPage />
          </PageSuspenseFeedback>
        ),
        loader: (({params}) => {
          if(typeof params.prefix !== "string" || !/^[a-z]+$/.test(params.prefix)) {
            throw new Response("Bad Request", {
              statusText: "Category can't found",
              status:404
            })
          }
          return true;
        })
      },
      {
        path: "cartProduct",
        element: (
          <PageSuspenseFeedback>
            <CartProductPage />
          </PageSuspenseFeedback>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PageSuspenseFeedback>
            <WishlistPage />
          </PageSuspenseFeedback>
        ),
      },
      {
        path: "profile",
        element: (
          <PageProtected>
            <PageSuspenseFeedback>
              <ProfileLayout />
            </PageSuspenseFeedback>
          </PageProtected>
        ),
        children: [
          {
            index: true,
            element: (
              <PageSuspenseFeedback>
                <AccountPage />
              </PageSuspenseFeedback>
            ),
          },
          {
            path: "orders",
            element: (
              <PageSuspenseFeedback>
                <OrdersPage />
              </PageSuspenseFeedback>
            ),
          },
        ],
      },
      {
        path: "login",
        element: (
          <PageSuspenseFeedback>
            <LoginPage />
          </PageSuspenseFeedback>
        ),
      },
      {
        path: "register",
        element: (
          <PageSuspenseFeedback>
            <RegisterPage />
          </PageSuspenseFeedback>
        ),
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={routes} />;
};

export default Routes;
