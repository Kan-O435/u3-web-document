export default function InsertTab() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-green-500">
        挿入タブ
      </h2>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3">
            画像の挿入
          </h3>
          <p className="text-black leading-relaxed">
            文書に画像を挿入する機能です。挿入タブの「画像」ボタンをクリックして、ファイルから画像を選択します。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3">
            表の挿入
          </h3>
          <p className="text-black leading-relaxed">
            文書に表を挿入する機能です。挿入タブの「表」ボタンをクリックして、行数と列数を選択します。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3">
            図形の挿入
          </h3>
          <p className="text-black leading-relaxed">
            文書に図形（四角形、円、矢印など）を挿入する機能です。挿入タブの「図形」ボタンから選択します。
          </p>
        </div>
      </div>
    </section>
  );
}
