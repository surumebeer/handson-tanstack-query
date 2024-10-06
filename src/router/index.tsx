import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../components/Home';
import { List } from '../components/List';
import { ListDetail } from '../components/ListDetail';
import { History } from '../components/History';
import { HistoryDetail } from '../components/HistoryDetail';
import { MainLayout } from '../layout/MainLayout';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="list/:id" element={<ListDetail />} />
          <Route path="history" element={<History />} />
          <Route path="history/:id" element={<HistoryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
