export default function LayoutReferencesTab() {
  return (
    <section id="section-4" className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-orange-500">
        4. レイアウト、参考資料タブ
      </h2>
      
      <div className="space-y-8">
        <div id="section-4-1" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            4.1 余白
          </h3>
          <p className="text-black leading-relaxed">
            文書の余白を設定する機能です。レイアウトタブの「余白」ボタンから、標準、狭い、広いなどのプリセットを選択できます。
          </p>
        </div>

        <div id="section-4-2" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            4.2 図表番号の挿入
          </h3>
          <p className="text-black leading-relaxed">
            図や表に番号とキャプションを付ける機能です。参考資料タブの「図表番号の挿入」から設定できます。
          </p>
        </div>

        <div id="section-4-3" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            4.3 グループ化
          </h3>
          <p className="text-black leading-relaxed">
            複数の図形やオブジェクトを1つのグループとして扱う機能です。複数のオブジェクトを選択して右クリックし、「グループ化」を選択します。
          </p>
        </div>
      </div>
    </section>
  );
}
