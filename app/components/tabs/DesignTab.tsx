export default function DesignTab() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-purple-500">
        デザインタブ
      </h2>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3">
            テーマの適用
          </h3>
          <p className="text-black leading-relaxed">
            文書全体に統一されたデザインテーマを適用する機能です。デザインタブから様々なテーマを選択できます。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3">
            色の変更
          </h3>
          <p className="text-black leading-relaxed">
            文書のカラースキームを変更する機能です。デザインタブの「色」ボタンから選択します。
          </p>
        </div>
      </div>
    </section>
  );
}
