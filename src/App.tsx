import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./page/Login/Login";
import ProtectedRoute from "./page/ProtectedRoute";
import MainLayout from "./routes/Layout/MainLayout";
import { routerList } from "./types/general";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            {routerList.map((r, index) => {
              return (
                <Route
                  path={r.path}
                  element={r.component}
                  key={`router-${index}`}
                />
              );
            })}
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
