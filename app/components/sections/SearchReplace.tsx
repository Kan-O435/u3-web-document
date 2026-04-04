export default function SearchReplace() {
  return (
    <section id="section-5" className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-purple-500">
        5. 検索・置換
      </h2>
      <h3 className="text-base font-semibold text-black mb-3">
        文書作成後に見直しを行うと、文字の変換間違いや図表番号のずれを発見するる場合があります。その際に、いちいち操作すると見逃しなどのミスを起こしやすいです。文書内である一定の文字列を探したい場合は検索を用いると、文書内の当てはまる部分を全て調べてくれます。さらに、検索した文字列を別の文字列に置き換えることもできます。検索と置換を使うことによって、より効率的に文書作成を行うことができます。
      </h3>
      
      <div className="space-y-8">
        <div id="section-5-1" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            5.1 検索
          </h3>
          <p className="text-black leading-relaxed">
            1. 「ホーム」タブを選択<br />
            2. 編集アイコンを選択すると、検索・置換・選択のアイコンがあるので、検索を選択<br />
            3. 画面左側に新しくウィンドウが表示される。検索したい文字列を入力<br />
            4. 検索の候補を参照する<br />
            <br />
            検索ウィンドウを操作している間、文書内の検索している文字列を調べることができます。選択している文字列に対応する部分が、文書内で強調されて表示されます。<br />

          </p>
        </div>

        <div id="section-5-2" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            5.2 置換
          </h3>
          <p className="text-black leading-relaxed">
            1. 「ホーム」タブを選択<br />
            2. 編集アイコンを選択すると、検索・置換・選択のアイコンがあるので置換を選択<br />
            3. 検索したい文字列と置換したい文字列を入力<br />
            検索と同様、文書内の検索する文字列と一致する部分を強調して表示します。部分ごとに、置換するかどうかを選択することができます。<br />
            ・置換：選択されている部分を置換する文字列に置き換える。<br />
            ・すべて置換：検索された文字列に一致するすべての部分を置換する文字列に置き換える。<br />
            ・次を検索：選択されている部分から、次に検索文字列に当てはまる部分の検索する。<br />
          </p>
        </div>
      </div>
    </section>
  );
}
