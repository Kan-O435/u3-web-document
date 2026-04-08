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
              <img
                src="/photo/ホームタブ/上付き文字下付き文字.png"
                alt="上付き文字下付き文字"
                className="mt-4 w-full rounded-lg"
              />
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
          <img
            src="/photo/ホームタブ/フォント.png"
            alt="フォント"
            className="mt-4 w-full rounded-lg"
          />
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
          <img
            src="/photo/ホームタブ/左右中央揃え.png"
            alt="左右中央揃え"
            className="mt-4 w-full rounded-lg"
          />
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
                ・アウトライン：階層構造を持つリストを作成することができます。階層のレベルに合わせて見た目も変更することができます<br />
                目的のものが見つからない場合はアイコン横の🔽ボタンを押すと、他のデザインを選ぶことができます<br />
            3. 箇条書き・段落番号・アウトラインを解除するときは、箇条書き・段落番号・アウトラインの適用中の箇所にカーソルを合わせてもう一度アイコンを押す<br />


            ・箇条書き、段落番号の操作<br />
            ここでは、箇条書きや段落番号、アウトラインでよく使う操作を紹介しています。<br />
            改行の操作は[Enter]キーを押すと次の段落に変わります。普通に改行だけを行いたい場合は別操作になります。<br />
              ・[Enter]キー：新しい箇条書きや次の段落番号を追加した状態で改行。次の段落に変わります<br />
              ・[Shift] + [Enter]キー：新しい箇条書きや次の段落番号は表示せずに改行する。段落番号は変わらない<br />
              ・[Tab]キー：階層のレベルを下げる<br />
              ・[Shift] + [Tab]キー：階層のレベルを上げる<br />

          </p>
          <video
            src="/videos/ホームタブ/アウトライン.mp4"
            controls
            className="mt-4 w-full rounded-lg"
          />
        </div>

        <div id="section-2-5" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            2.5 行間
          </h3>
          <p className="text-black leading-relaxed">
            行間では、文字と文字の上下間の幅を調整することができます。<br />
            英文の課題で行間をダブルスペースで指定されるなど、行間を変更する必要がある課題も存在するので、行間の変更方法は覚えておきましょう。<br />
            1. 「ホーム」タブを選択<br />
            2. 「段落」部分の右下にあるマークを選択<br />
            3. 「段落」ウィンドウが表示され、「間隔」内の「行間」で行間を調整することができる<br />

          </p>
          <img
            src="/photo/ホームタブ/行間設定.png"
            alt="行間設定"
            className="mt-4 w-full rounded-lg"
          />
        </div>

        <div id="section-2-6" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            2.6 ルーラー
          </h3>
          <p className="text-black leading-relaxed">
            ルーラーとは、作成画面の上側と左側に表示される目盛りのことです。<br />
            ルーラーを使用することで、文字の幅の調整やタブ、箇条書き・段落番号の位置調整のほかにも、表の枠線の移動や図などのオブジェクトの位置を揃えることもできます。<br />
            多くの場合で使うことができるので、使えるようになっておくと大変便利です。<br />

            ・ルーラーの表示方法<br />
            1. 「表示」タブを選択<br />
            2. 「表示」内の「ルーラー」のチェック欄を選択して、チェックがついた状態にするとルーラーが表示される<br />
            
            ・ルーラーの使い方<br />
            上側のルーラーには、小さな矢印と四角が左側に三つ、右側に一つあります。左側の矢印、四角は上から順に、一行目のインデント、ぶら下げインデント、左インデントと言います。右側の矢印は右インデントです。<br />
            ・一行目のインデントは、カーソルのある段落の一行目開始位置を調整できます。<br />
            ・ぶら下げインデントは一行目のインデントと逆に、段落内の一行目以外の開始位置を調整できます。<br />
            ・左インデントは、左側の調整ができ、一行目と一行目以外の行をまとめて動かすことができます。右インデントは右側の調整ができ、左インデントと機能は同じです。<br />

          </p>
          <img
            src="/photo/ホームタブ/インデント.png"
            alt="インデント"
            className="mt-4 w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
