import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from './common/Loader';
import SignIn from './pages/Authentication/SignIn';
import DefaultLayout from './layout/DefaultLayout';
import { routes } from './routes/routes';
import { RootState } from './store/store';
import { Suspense, useEffect, useState } from 'react';
import { revalidateToken } from './store/slices/authSlice';
import SignUp from './pages/Authentication/SignUp';

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(revalidateToken(token));
    }
    setTimeout(() => setLoading(false), 1000);
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Suspense>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />

        { isAuthenticated ? (
        <>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          {routes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <DefaultLayout>
                  <Component />
                </DefaultLayout>
              }
            />
          ))}
        </>
      ) : (
        <Route path="*" element={<Navigate to="/auth/signin" />} />
      )}
      </Routes>
    </Suspense>
  );
}

export default App;
