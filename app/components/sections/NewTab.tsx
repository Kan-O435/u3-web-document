export default function NewTab() {
  return (
    <section id="section-3" className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-green-500">
        3. 挿入タブ
      </h2>
      
      <div className="space-y-8">
        <div id="section-3-1" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            3.1 図の挿入
          </h3>
          <p className="text-black leading-relaxed">
            文章内に画像や図形を挿入することができます。<br />
            レポートを書く際、画像の添付などを行うことができます。<br />
            1. 「挿入」タブを選択<br />
            2. 「図」内の挿入したいもののアイコンを選択して目的に合った図を選択。<br />
                (PC内の画像は「画像」、矢印などの図形は「図形」をそれぞれ選択)<br />
            3. 図形の場合は、カーソルが矢印から十字に変わるので、その状態のまま作成文書上でクリック&ドラッグすると図形を挿入できる。<br />
            4. 画像と図形の色の変更や枠線の追加などの編集を行うときは、図を選択すると「書式」タブが追加されるので、そこから行うことができる。<br />
            
          </p>
        </div>

        <div id="section-3-2" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            3.2 表の挿入
          </h3>
          <p className="text-black leading-relaxed">
            文書内に挿入することができます。<br />
            Excelからコピー&ペーストすることでも挿入することができますが、今回はWordの中だけで表を作成する方法を説明します。<br />
            1. 「挿入」タブを選択<br />
            2. 「図」内の「表」アイコンをクリック<br />
            3. 挿入したい表の行列数を選択。後から増やすこともできる。<br />

          </p>
          <img
            src="/photo/挿入タブ/表の挿入.png"
            alt="表の挿入"
            loading="lazy"
            className="mt-4 w-full rounded-lg"
          />
        </div>

        <div id="section-3-3" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            3.3 文字列の折り返し
          </h3>
          <p className="text-black leading-relaxed">
            挿入した図が、文章内でどのように配置されているかを決定します。<br />
            画像は挿入されたとき行内に配置され、位置を調整しづらくなっています。<br />
            「文字列の折り返し」を変換して、任意の位置に画像を配置できるようにしておきましょう。<br />
            1. 編集したい図を選択し、「書式」タブを開く<br />
            2. 「配置」内にある「文字列の折り返し」を選択<br />
            3. 「行内」「四角」などの候補が表示されるので、折り返し方法を選ぶ<br />
            <br />
            Windowsでは、図形を選択したとき、右上に「文字列の折り返し」アイコンが表示されるので、そこからでも文字列の折り返しを行うことができます。大学では、図・票の挿入をすると同時に図表番号の挿入をよく行います。図表番号の挿入に関しては参考資料タブのほうで取り扱っています。

          </p>
          <img
            src="/photo/挿入タブ/文字列の折り返し.png"
            alt="文字列の折り返し"
            loading="lazy"
            className="mt-4 w-full rounded-lg"
          />
        </div>

        <div id="section-3-4" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            3.4 数式の挿入
          </h3>
          <p className="text-black leading-relaxed">
            1. 数式の挿入<br />
            数式の機能を用いることで、分数表示やインテグラルなどの数式を文書に追加することができます。実験レポートでは必要スキルの一つとなています。意図した通りの数式が挿入できるように、必ず使い方を覚えておきましょう。<br />
            「挿入」タブを選択
            「記号と特殊文字」内の「数式」を選択<br />
            書式を挿入する枠が出現するので、そこに数式を入力する<br />
            数式の挿入はショートカットが可能で、「Shift + Alt + =(イコール)」キーを同時に押すことでできます。<br />

            2. 式や記号の入力<br />
            数式記号や特殊文字の入力、数式の入力には、数式の入力には「数式ツール、デザイン」タブから編集するやり方と、キーボードから直接ショートカット入力するやり方があります。<br />
            「数式ツール、デザイン」タブで編集するときは、記号や数式などがイメージ図付きで表示されています。正確な名称お知らなくても、イメージ図を参考に探すことができるので便利です。<br />
            記号と特殊文字：数式記号や演算子、ギリシャ文字などのキーボード上にない記号や文字を入力することができます。<br />
            構造：分岐や積分、行列などのよく使われる数式の構造を利用することができます。<br />
            ＊キーボードの入力は「数式ツール、デザイン」タブへ移動する必要なく、特殊な記号を入力することができます。よく使う記号のショートカットを覚えておくと数式の作成時間をかなり短縮することができます。<br />

          </p>
          <img
            src="/photo/挿入タブ/数式の挿入.png"
            alt="数式の挿入"
            loading="lazy"
            className="mt-4 w-full rounded-lg"
          />
        </div>

        <div id="section-3-5" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            3.5 数式番号の挿入
          </h3>
          <p className="text-black leading-relaxed">
            1. 数式の最後に#(任意の数字)を入力する<br />
            2. Enterを押し、数式番号を付ける
          </p>
          <video
            src="/videos/挿入タブ/数式番号の挿入.mp4"
            controls
            preload="none"
            className="mt-4 w-full rounded-lg"
          />
        </div>

        <div id="section-3-6" className="bg-white p-6 rounded-lg border border-gray-200 scroll-mt-20">
          <h3 className="text-xl font-semibold text-black mb-3">
            3.6 ヘッダーフッター
          </h3>
          <p className="text-black leading-relaxed">
            ヘッダーとフッターは、余白の部分を活用する機能です。上部をヘッダー、下部をフッターといい、各ページの上下部に同じ内容を載せることができます。<br />
            タイトルやファイル名、日付、ページ番号などを載せるときに用いられます。今回はフッターにページ番号を入れる手順を説明します<br />
            ページ番号の挿入<br />
            1. 「挿入」タブを選択。「ページ番号」→「ページの下部」を選択して、ページ番号の挿入位置を選ぶ。(今回は「番号のみ 2」を選択)<br />
            2. 「ページ番号」→「ページ番号の書式設定」を選択し、「ページ番号の書式」ウィンドウで「開始番号」を選択。開始番号の数字を0にすることで、先頭のページ番号が0になる。<br />
            3. フッター部分を右クリック→「フッターの編集」をクリック、または直接フッター部分をダブルクリックし、「ヘッダー/フッターツール、デザイン」タブを開く。「オプション」内の「先頭のみ別指定」のチェック欄にチェックを入れると、先頭のページ番号が表示されなくなる。<br />
            4. 「ヘッダー/フッターツール」を閉じる場合は、「ヘッダー/フッターツール、デザイン」タブの右にある「ヘッダーとフッターを閉じる」から行う。<br />

          </p>
          <video
            src="/videos/挿入タブ/ヘッダーとフッター.mp4"
            controls
            preload="none"
            className="mt-4 w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
