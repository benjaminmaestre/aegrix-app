import Footer from '@/components/Footer';

export default function Aegrix360Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
