import Nav from "./components/Nav";
import SiteHeader from "./components/SiteHeader";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div data-wrapper="" className="border-grid flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center justify-center min-h-screen py-6">
        <div className="container-wrapper">
          <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <aside className="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
              <div className="no-scrollbar h-full overflow-auto pr-4">
                <Nav />
              </div>
            </aside>
            <section className="flex flex-col flex-1 items-center justify-center">
              {children}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
