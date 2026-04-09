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
            文章ファイルを、ソフトやPCの環境によらず一様に閲覧できるようにします。欠点としてPDF化したテキストはそれ以上の変更ができません。<br />
            章ファイルを、ソフトやPCの環境によらず一様に閲覧できるようにします。欠点として、PDF化したテキストはそれ以上の変更ができません。<br />
            保存方法<br />
            1. 「ファイル」タブを選択。<br />
            2. 「エクスポート」→「PDF/XPSドキュメントの作成」の選択。<br />
            3. 「PDF/XPFの作成」を押すと、保存場所を選ぶウィンドウが表示される。<br />
            4. ファイルの種類が「PDF(*.pdf)」になっていることを確認して「保存/発行」を押す。<br />

          </p>
          <video
            src="/videos/PDF変換.mp4"
            controls
            preload="none"
            className="mt-4 w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
