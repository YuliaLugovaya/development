import React, { FC, Suspense, lazy } from "react";
import { routes } from "config/routes";
import { useLocationScrollToTop } from "hooks/useLocationScrollToTop";
import { Route, Routes } from "react-router-dom";
import { Layout } from "pages/Layout";
// import { AddEvent } from "pages/DatePage/components/AddEvent";
// import { EditEvent } from "pages/DatePage/components/EditEvent";
// import { DayEvents } from "components/DayEvents";

const HomePage = lazy(() => import("pages/HomePage"));
const PortfolioPage = lazy(() => import("pages/PortfolioPage"));
const AboutPage = lazy(() => import("pages/AboutPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage"));

export const PageRoot: FC = () => {
  useLocationScrollToTop();
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={routes.home.root} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path={`${routes.home.portfolio}`}
            element={<PortfolioPage />}
          />
          <Route path={`${routes.home.about}`} element={<AboutPage />} />
          <Route path={`${routes.home.contacts}`} element={<ContactsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
