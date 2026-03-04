export default function LayoutTab() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-orange-500">
        レイアウトタブ
      </h2>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3">
            余白の設定
          </h3>
          <p className="text-black leading-relaxed">
            文書の余白を設定する機能です。レイアウトタブの「余白」ボタンから、標準、狭い、広いなどのプリセットを選択できます。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3">
            インデント
          </h3>
          <p className="text-black leading-relaxed">
            段落のインデント（字下げ）を設定する機能です。レイアウトタブから、左インデントや右インデントを調整できます。
          </p>
        </div>
      </div>
    </section>
  );
}
