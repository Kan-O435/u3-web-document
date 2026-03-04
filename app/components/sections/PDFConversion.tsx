export default function PDFConversion() {
  return (
    <section id="section-6" className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-red-500">
        6. PDF変換
      </h2>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3">
            Word文書をPDFに変換
          </h3>
          <p className="text-black leading-relaxed">
            Word文書をPDF形式に変換する方法を説明します。「ファイル」→「エクスポート」→「PDF/XPSの作成」からPDFに変換できます。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3">
            PDFをWord文書に変換
          </h3>
          <p className="text-black leading-relaxed">
            PDFファイルをWord文書に変換する方法を説明します。「ファイル」→「開く」からPDFファイルを選択し、Wordで開くことができます。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3">
            PDFの編集
          </h3>
          <p className="text-black leading-relaxed">
            PDFファイルをWordで開いて編集する際の注意点や制限事項について説明します。
          </p>
        </div>
      </div>
    </section>
  );
}
