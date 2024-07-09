import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer';
import { Topbar } from '@/components/Topbar';

export default function Home() {
  return (
    <main className="w-full">
      <Topbar />
      <Banner />
      <Footer />
    </main>
  );
}
