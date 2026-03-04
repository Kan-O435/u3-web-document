export default function HomeTabSection() {
  return (
    <section id="section-2" className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-blue-500">
        2. ホームタブ
      </h2>
      <h3 className="text-xl font-semibold text-black mb-3">
        ここでは、ホームタブの中で大学生が特に使う機能をまとめて紹介していきます。
      </h3>
      
      <div className="space-y-8">
        <div id="section-2-1" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            2.1 文字効果
          </h3>
          <p className="text-black leading-relaxed mb-4">
            テキストに影、反射、光彩などの文字効果を適用する機能です。ホームタブの「文字の効果とタイポグラフィ」から選択できます。
          </p>
          
          <div className="space-y-4 mt-4">
            <div id="section-2-1-1" className="bg-gray-50 p-4 rounded border border-gray-300 scroll-mt-20">
              <h4 className="text-lg font-semibold text-black mb-2">
                2.1.1 太字
              </h4>
              <p className="text-black leading-relaxed">
                文字列を太字にすることができます<br />
                文字を強調させたい時に用いられるほか、数学ではベクトルを表す時に記号が使用されることがあります。<br />
                1. 「ホーム」タブを選択<br />
                2. 「フォント」内のBのアイコンを選択すると、指定した箇所やこれから記入する部分が太字になる<br />
                3. 太字を解除する時は、太字になっている箇所を選択してもう一度Bのアイコンを押す<br />
                <kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Ctrl + B</kbd>（Macの場合は<kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Cmd + B</kbd>）を押します。
              </p>
              <div className="bg-white p-3 rounded border border-gray-200 mt-2">
                <p className="font-normal text-black">通常のテキスト</p>
                <p className="font-bold text-black">太字のテキスト</p>
              </div>
            </div>

            <div id="section-2-1-2" className="bg-gray-50 p-4 rounded border border-gray-300 scroll-mt-20">
              <h4 className="text-lg font-semibold text-black mb-2">
                2.1.2 斜体
              </h4>
              <p className="text-black leading-relaxed">
                文字列を車体にすることができます。<br />
                レポートにおいては、参考文献の署名や引用元のWebページのアドレスを記述するときや、数学の変数として用いられる記号に使われます。<br />
                1. 「ホーム」タブを選択<br />
                2. 「フォント」内のIのアイコンを選択すると、指定した箇所やこれから記入する部分が斜体になる<br />
                3. 斜体を解除する時は、斜体になっている箇所を選択してもう一度Iのアイコンを押す<br />
                <kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Ctrl + I</kbd>（Macの場合は<kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Cmd + I</kbd>）を押します。
              </p>
              <div className="bg-white p-3 rounded border border-gray-200 mt-2">
                <p className="font-normal text-black">通常のテキスト</p>
                <p className="italic text-black">斜体のテキスト</p>
              </div>
            </div>

            <div id="section-2-1-3" className="bg-gray-50 p-4 rounded border border-gray-300 scroll-mt-20">
              <h4 className="text-lg font-semibold text-black mb-2">
                2.1.3 下線
              </h4>
              <p className="text-black leading-relaxed">
                文字列に下線をひくことができます。<br />
                文字を強調させたいときや指摘したい時に使用されることがあります。<br />
                1. 「ホーム」タブを選択<br />
                2. 「フォント」内のUのアイコンを選択すると、指定した箇所やこれから記入する部分が下線になる<br />
                3. 下線を解除する時は、下線になっている箇所を選択してもう一度Uのアイコンを押す<br />
                <kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Ctrl + U</kbd>（Macの場合は<kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Cmd + U</kbd>）を押します。
              </p>
              <div className="bg-white p-3 rounded border border-gray-200 mt-2">
                <p className="font-normal text-black">通常のテキスト</p>
                <p className="underline text-black">下線付きテキスト</p>
              </div>
            </div>

            <div id="section-2-1-4" className="bg-gray-50 p-4 rounded border border-gray-300 scroll-mt-20">
              <h4 className="text-lg font-semibold text-black mb-2">
                2.1.4 上/下つき文字
              </h4>
              <p className="text-black leading-relaxed">
                文字の上下部に小さな文字を記入できるようになります。<br />
                数式の累乗や記号の区別を表す時などに用いられます。<br />
                1. 「ホーム」タブを選択<br />
                2. 「フォント」内の中央部にある、「上付き」、「下付き」のアイコンを選択すると、指定した箇所やこれから記入する部分が上付きまたは下付きになる<br />
                3. 上付きまたは下付きを解除する時は、上付きまたは下付きになっている箇所を選択してもう一度上付きまたは下付きのアイコンを押す<br />
              
              </p>
              <div className="bg-white p-3 rounded border border-gray-200 mt-2">
                <p className="text-black">通常のテキスト x²（上付き）</p>
                <p className="text-black">通常のテキスト H₂O（下付き）</p>
              </div>
            </div>
          </div>
        </div>

        <div id="section-2-2" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            2.2 フォント
          </h3>
          <p className="text-black leading-relaxed">
            選択した文字やこれから入力する文字に割り当てるフォントを選ぶことで、文字の見た目を変えることができます。<br />
            英語を書くときと日本語を書くときで使用するフォントの種類を変更することで、より見やすい文章にすることもできます。<br />
            1. 「ホーム」タブを選択<br />
            2. 「フォント」内の左上にある「フォント」の🔽部分をクリック<br />
            3. フォント一覧が表示されるので、適切なフォントを選択する<br />
            部分的にフォントの種類を変更したいときは、変更したい箇所を選択した状態でフォントを選びましょう。

          </p>
          <p className="text-black leading-relaxed">
            フォントサイズを変更するとき<br />
            選択した文字やこれから入力する文字の大きさ(フォントサイズ)を変更することができます。<br />
            通常だと、Wordでのフォントサイズの初期状態は10.5ポイントです。タイトルや強調したい文字などの大きさを変えることで、文章の読みやすい、印象に残る文章にすることができます<br />
            1. 「ホーム」タブを選択<br />
            2. 「フォント」内の中央上部に数字が書いてある枠があるので、その数字を変更する<br />
            フォントの変更と同じように部分的に変更したい場合は、変更したい箇所を選択した状態でフォントサイズを変更しましょう<br />


          </p>
        </div>

        <div id="section-2-3" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            2.3 左、中央、右揃え
          </h3>
          <p className="text-black leading-relaxed mb-3">
            文字などの位置で揃えるかを変更できます。<br />
            左揃え、右揃えはそれぞれ、文章が左端、右端に付くように配置されます。中央揃えは、文章が左右均等になる位置に置かれます。両端揃えは、文章が左右均等位なる位置に置かれます。両端揃えは、文章が両端ともに付きます。<br />
            1. 「ホーム」タブを選択<br />
            2. 「段落」内に、左揃え、中央揃え、右揃え、両端揃えを選択できるアイコンがあるので、目的に合ったものを選択<br />
            アイコンを見た目だけでは分からないけど、各アイコンの上でマウスカーソルを1秒ほど置いておけば詳細が出てくるので、そこで確認を行なってもいいかもしれません<br />
          </p>
          <div className="bg-white p-4 rounded border border-gray-200">
            <p className="text-left text-black">左揃えのテキスト</p>
            <p className="text-center text-black">中央揃えのテキスト</p>
            <p className="text-right text-black">右揃えのテキスト</p>
          </div>
        </div>

        <div id="section-2-4" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            2.4 アウトライン
          </h3>
          <p className="text-black leading-relaxed">
            文字の先頭に箇条書き、段落番号を追加することができます。<br />
            レポートにおいては、目次や各項目の見出し部分に用いられます。<br />
            ・箇条書き、段落番号の表示<br />
            1. 「ホーム」タブを選択<br />
            2. 「段落」内の左上部分に、「箇条書き」、「段落番号」、「アウトライン」のアイコンがあるので、目的に合わせて選択<br />
                ・箇条書き：箇条書きの段落を作成することができます<br />
                ・段落番号：番号のついた段落を作成することができます<br />
                ・アウトライン：階層構造を持つリストを作成することができます。階層のベクトル<br />
                
          </p>
        </div>

        <div id="section-2-5" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            2.5 行間
          </h3>
          <p className="text-black leading-relaxed">
            段落の行間を設定する機能です。ホームタブの「段落」グループの「行と段落の間隔」から設定できます。
          </p>
        </div>

        <div id="section-2-6" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            2.6 ルーラー
          </h3>
          <p className="text-black leading-relaxed">
            ルーラーを表示して、インデントやタブ位置を視覚的に調整する機能です。「表示」タブの「表示」グループから「ルーラー」にチェックを入れます。
          </p>
        </div>
      </div>
    </section>
  );
}
