export default function NewTab() {
  return (
    <section id="section-3" className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-green-500">
        3. 挿入タブ
      </h2>
      
      <div className="space-y-8">
        <div id="section-3-1" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            3.1 図の挿入
          </h3>
          <p className="text-black leading-relaxed">
            文章内に画像や図形を挿入することができます。<br />
            レポートを書く際、画像の添付などを行うことができます。<br />
            1. 「挿入」タブを選択<br />
            2. 「図」内の挿入したいもののアイコンを選択して目的に合った図を選択。<br />
                (PC内の画像は「画像」、矢印などの図形は「図形」をそれぞれ選択)<br />
            3. 図形の場合は、カーソルが矢印から十字に変わるので、その状態のまま作成文書上でクリック&ドラッグすると図形を挿入できる。<br />
            4. 画像と図形の色の変更や枠線の追加などの編集を行うときは、図を選択すると「書式」タブが追加されるので、そこから行うことができる。<br />
            
          </p>
        </div>

        <div id="section-3-2" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            3.2 表の挿入
          </h3>
          <p className="text-black leading-relaxed">
            文書内に挿入することができます。<br />
            Excelからコピー&ペーストすることでも挿入することができますが、今回はWordの中だけで表を作成する方法を説明します。<br />
            1. 「挿入」タブを選択<br />
            2. 「図」内の「表」アイコンをクリック<br />
            3. 挿入したい表の行列数を選択。後から増やすこともできる。<br />
          
          </p>
        </div>

        <div id="section-3-3" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            3.3 文字列の折り返し
          </h3>
          <p className="text-black leading-relaxed">
            挿入した図が、文章内でどのように配置されているかを決定します。<br />
            画像は挿入されたとき行内に配置され、位置を調整しづらくなっています。<br />
            「文字列の折り返し」を変換して、任意の位置に画像を
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
