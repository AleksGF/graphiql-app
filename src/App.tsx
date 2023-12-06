import Layout from '@/components/Layout/Layout';
import LanguageContextProvider from '@/components/context/LanguageContext/LanguageContextProvider';

export default function App() {
  return (
    <LanguageContextProvider>
      <Layout />
    </LanguageContextProvider>
  );
}
