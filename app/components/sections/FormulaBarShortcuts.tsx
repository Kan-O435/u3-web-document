export default function FormulaBarShortcuts() {
  return (
    <section id="section-7" className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-yellow-500">
        7. 数式バーのショートカットの設定方法
      </h2>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3">
            数式バーとは
          </h3>
          <p className="text-black leading-relaxed">
            数式バーは、表や数式を入力・編集する際に使用するツールバーです。Wordで数式を扱う際に便利な機能です。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3">
            ショートカットの設定手順
          </h3>
          <p className="text-black leading-relaxed">
            1. 「ファイル」→「オプション」→「リボンのユーザー設定」を開きます。<br />
            2. 「キーボードショートカット」の「ユーザー設定」をクリックします。<br />
            3. カテゴリから「数式」を選択し、コマンドを選択します。<br />
            4. 「新しいショートカットキー」に希望のキーを入力します。<br />
            5. 「割り当て」をクリックして設定を完了します。
          </p>
          <video
            src="/videos/数式ショートカットの設定.mp4"
            controls
            preload="none"
            className="mt-4 w-full rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}
