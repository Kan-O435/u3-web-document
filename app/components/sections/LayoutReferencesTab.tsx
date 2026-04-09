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
            作成している文相の余白を設定することができます。<br />
            余白も英語の課題などで指定されることがあるので、余白の設定方法は覚えておくといいでしょう。<br />
            1. 「レイアウト」タブを選択<br />
            2. 「ページ設定」内にある「余白」を選択し、定義済みの余白の一覧から選ぶ。<br />
            3. 定義済みの余白に目的のものがない場合、一覧の下にある「ページ設定の余白」から自分で設定した余白を用いることができます。

          </p>
          <img
            src="/photo/レイアウトタブ/余白.png"
            alt="余白"
            loading="lazy"
            className="mt-4 w-full rounded-lg"
          />
        </div>

        <div id="section-4-2" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            4.2 図表番号の挿入
          </h3>
          <p className="text-black leading-relaxed">
            図や表にラベルを付けることができます。<br />
            レポートの図や表には図表番号やタイトルが必要ですが、この機能を用いることによって、図表番号の管理が簡単になり、体裁を整えやすくなります。<br />
            1. 「参考資料」タブを選択<br />
            2. 「図表」内の「図表番号の挿入」を選択すると、「図表番号」ウィンドウが開く。<br />
            3. 「図表番号」からタイトルを記入、「ラベル」からラベルの種類を選択(目的のラベルがなければ「ラベル名」から新しいラベルを登録できる)。「位置」から図表番号を付ける位置を設定できる。<br />

          </p>
          <img
            src="/photo/レイアウトタブ/図表番号の挿入.png"
            alt="図表番号の挿入"
            loading="lazy"
            className="mt-4 w-full rounded-lg"
          />
        </div>

        <div id="section-4-3" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            4.3 グループ化
          </h3>
          <p className="text-black leading-relaxed">
            挿入した図表番号は図や表と一緒に動かすことが想定されるので、グループ化を行うことをおすすめします。グループ化することで、図や表と図表番号の位置関係を変えることなく、同時に動かせるようになります。<br />
            1. グループ化をさせたい図形を複数選択([Shift]キーを押しながらクリック)する<br />
            2. 右クリックして「グループ化」→「グループ化」を選択。<br />
            3. グループ化を解除したいときは、「グループ化」→「グループ解除」を選択すると解除されます。
          </p>
          <img
            src="/photo/レイアウトタブ/グループ化.png"
            alt="グループ化"
            loading="lazy"
            className="mt-4 w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
