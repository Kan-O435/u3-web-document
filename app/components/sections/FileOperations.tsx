export default function FileOperations() {
  return (
    <section id="section-1" className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-blue-500">
        1. ファイル操作
      </h2>
      
      <div className="space-y-8">
        <div id="section-1-1" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            1.1 新規作成
          </h3>
          <p className="text-black leading-relaxed">
            新しい文書を作成する方法を説明します。<br />
            Wrodを開いた後、スタート画面でテンプレートから選んで作成することができます。
          </p>
          <video
            src="/videos/1-1新規作成.mp4"
            controls
            className="mt-4 w-full rounded-lg"
          />
        </div>

        <div id="section-1-2" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            1.2 名前をつけて保存
          </h3>
          <p className="text-black leading-relaxed">
            新しく作成したファイルを保存するときや、既存のファイルを変更前の状態も残しておきたい時などに使用します。<br />
            1. タブからファイルを選択<br />
            2. 「名前をつけて保存」を選択して「参照」を選択してエクスプローラーが開き、保存場所を選択できます<br />
            3. 適切な保存場所、ファイル名を入力し、保存をクリックします<br />

          </p>
          <video
            src="/videos/1-2ファイルに名前を付けて保存.mp4"
            controls
            className="mt-4 w-full rounded-lg"
          />
        </div>

        <div id="section-1-3" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            1.3 上書き保存
          </h3>
          <p className="text-black leading-relaxed">
            既存のファイルに施した変更を上書きして保存します。<br />
            万が一のファイル破損に備えて、こまめに上書き保存を行うことをお勧めします。<br />
            1, 「ファイル」を選択<br />
            2, 「上書き保存」を選ぶと保存が完了する<br />
            これらの操作は
            <kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Ctrl + S</kbd>（Macの場合は<kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Cmd + S</kbd>）で上書き保存できます。
          </p>
          <img
            src="/photo/上書き保存.png"
            alt="上書き保存"
            className="mt-4 w-full rounded-lg"
          />
        </div>

        <div id="section-1-4" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            1.4 開く
          </h3>
          <p className="text-black leading-relaxed">
            Word内で既存のファイルを開きます<br />
            1, 「ファイル」を選択<br />
            2, 「開く」を選択<br />
            3, 「参照」を選択するとエクスプローラーが開き、開きたいファイルを選択できます<br />
            これらの操作は
            <kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Ctrl + O</kbd>（Macの場合は<kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Cmd + O</kbd>）を押します。
          </p>
        </div>
        <div id="section-1-5" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <p className="text-black leading-relaxed">
            ファイルを開く方法は他にも、保存したフォルダから探す、スタート画面の「最近使ったファイル」一覧から選択するなどがあります。<br />
            様々な手段を試し自分なりの方法でファイルを開けるようになりましょう。
          </p>
        </div>
      </div>
    </section>
  );
}
