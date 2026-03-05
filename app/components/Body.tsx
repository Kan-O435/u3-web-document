import FileOperations from "./sections/FileOperations";
import HomeTabSection from "./sections/HomeTabSection";
import NewTab from "./sections/NewTab";
import LayoutReferencesTab from "./sections/LayoutReferencesTab";
import SearchReplace from "./sections/SearchReplace";
import PDFConversion from "./sections/PDFConversion";
import FormulaBarShortcuts from "./sections/FormulaBarShortcuts";
import CommonShortcuts from "./sections/CommonShortcuts";
import TableOfContents from "./TableOfContents";

export default function Body() {
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto py-8 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">
                はじめに
              </h2>
              <p className="text-black leading-relaxed">
                Microsoft Wordは、文書作成のための代表的なソフトウェアです。
              </p>
              <p className="text-black leading-relaxed">
                大学では使用する機会が多いので、ぜひ効率的に使えるようになってください。
              </p>
            </section>

            <FileOperations />
            <HomeTabSection />
            <NewTab />
            <LayoutReferencesTab />
            <SearchReplace />
            <PDFConversion />
            <FormulaBarShortcuts />
            <CommonShortcuts />
          </div>
        </div>
        
        <div className="lg:col-span-1 hidden lg:block">
          <TableOfContents />
        </div>
      </div>
    </main>
  );
}
