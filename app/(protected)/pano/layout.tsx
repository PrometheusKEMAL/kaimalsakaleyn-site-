import { MeclisSidebar } from "@/components/layout/MeclisSidebar";

export const metadata = {
  title: "Meclis",
  description: "KaimAlSakaleyn meclis alanı",
};

export default function MeclisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-24 pb-section-lg px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <MeclisSidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    </div>
  );
}
