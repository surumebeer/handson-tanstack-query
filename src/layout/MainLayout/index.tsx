import { Outlet, Link } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link> | <Link to="/list">List</Link> |{' '}
        <Link to="/history">History</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
