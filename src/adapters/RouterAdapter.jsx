import { Routes, Route } from "react-router-dom";

/**
 * Adaptador para manejar las rutas de React Router.
 */
export const RouterAdapter = ({ routes }) => {
  return (
    <Routes>
      {routes.map(({ path, element, children }, index) => (
        <Route key={index} path={path} element={element}>
          {children?.map(({ path, element }, subIndex) => (
            <Route key={subIndex} path={path} element={element} />
          ))}
        </Route>
      ))}
    </Routes>
  );
};
