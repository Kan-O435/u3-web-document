export default function NewTab() {
  return (
    <section id="section-3" className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-green-500">
        3. 新規タブ
      </h2>
      
      <div className="space-y-8">
        <div id="section-3-1" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            3.1 図の挿入
          </h3>
          <p className="text-black leading-relaxed">
            文書に画像を挿入する機能です。挿入タブの「画像」ボタンをクリックして、ファイルから画像を選択します。
          </p>
        </div>

        <div id="section-3-2" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            3.2 表の挿入
          </h3>
          <p className="text-black leading-relaxed">
            文書に表を挿入する機能です。挿入タブの「表」ボタンをクリックして、行数と列数を選択します。
          </p>
        </div>

        <div id="section-3-3" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            3.3 文字列の折り返し
          </h3>
          <p className="text-black leading-relaxed">
            図や画像の周りのテキストの折り返し方を設定する機能です。図を選択して「図の書式設定」から「文字列の折り返し」を選択できます。
          </p>
        </div>

        <div id="section-3-4" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            3.4 数式の挿入
          </h3>
          <p className="text-black leading-relaxed">
            数式を挿入する機能です。挿入タブの「数式」ボタンから、既存の数式を選択するか、新しい数式を作成できます。
          </p>
        </div>

        <div id="section-3-5" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            3.5 数式番号の挿入
          </h3>
          <p className="text-black leading-relaxed">
            数式に番号を付ける機能です。数式の右側に番号を挿入し、参照や目次で使用できます。
          </p>
        </div>

        <div id="section-3-6" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            3.6 ヘッダーフッター
          </h3>
          <p className="text-black leading-relaxed">
            文書の各ページの上部（ヘッダー）と下部（フッター）に情報を挿入する機能です。挿入タブの「ヘッダー」または「フッター」から設定できます。
          </p>
        </div>
      </div>
    </section>
  );
}
