export default function SearchReplace() {
  return (
    <section id="section-5" className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-purple-500">
        5. 検索置換
      </h2>
      
      <div className="space-y-8">
        <div id="section-5-1" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            5.1 検索
          </h3>
          <p className="text-black leading-relaxed">
            文書内の特定の文字列を検索する機能です。<kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Ctrl + F</kbd>（Macの場合は<kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Cmd + F</kbd>）を押すと検索ダイアログが開きます。
          </p>
        </div>

        <div id="section-5-2" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            5.2 置換
          </h3>
          <p className="text-black leading-relaxed">
            文書内の特定の文字列を別の文字列に一括置換する機能です。<kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Ctrl + H</kbd>（Macの場合は<kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Cmd + H</kbd>）を押すと置換ダイアログが開きます。
          </p>
        </div>
      </div>
    </section>
  );
}
