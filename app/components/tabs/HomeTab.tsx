export default function HomeTab() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-blue-500">
        ホームタブ
      </h2>
      
      <div className="space-y-8">
        {/* 太字 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3 flex items-center gap-2">
            <span className="text-2xl">B</span>
            <span>太字（Bold）</span>
          </h3>
          <p className="text-black leading-relaxed mb-3">
            テキストを太字にする機能です。強調したい文字列を選択してから、ホームタブの「<strong className="font-bold">B</strong>」ボタンをクリックするか、<kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Ctrl + B</kbd>（Macの場合は<kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Cmd + B</kbd>）を押します。
          </p>
          <div className="bg-white p-4 rounded border border-gray-200">
            <p className="font-normal text-black">通常のテキスト</p>
            <p className="font-bold text-black">太字のテキスト</p>
          </div>
        </div>

        {/* 右揃え */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3 flex items-center gap-2">
            <span className="text-xl">右揃え</span>
          </h3>
          <p className="text-black leading-relaxed mb-3">
            段落を右側に揃える機能です。揃えたい段落を選択してから、ホームタブの「右揃え」ボタンをクリックします。右揃えは、日付や署名など、右側に配置したいテキストに使用します。
          </p>
          <div className="bg-white p-4 rounded border border-gray-200">
            <p className="text-left text-black">左揃えのテキスト</p>
            <p className="text-right text-black">右揃えのテキスト</p>
          </div>
        </div>

        {/* 斜体 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3 flex items-center gap-2">
            <span className="text-xl italic">I</span>
            <span>斜体（Italic）</span>
          </h3>
          <p className="text-black leading-relaxed mb-3">
            テキストを斜体にする機能です。強調や引用を示す際に使用します。テキストを選択してから、ホームタブの「<em className="italic">I</em>」ボタンをクリックするか、<kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Ctrl + I</kbd>（Macの場合は<kbd className="px-2 py-1 bg-gray-200 rounded text-black text-sm font-medium">Cmd + I</kbd>）を押します。
          </p>
        </div>

        {/* 中央揃え */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3 flex items-center gap-2">
            <span className="text-xl">中央揃え</span>
          </h3>
          <p className="text-black leading-relaxed mb-3">
            段落を中央に揃える機能です。タイトルや見出しを中央に配置する際に使用します。段落を選択してから、ホームタブの「中央揃え」ボタンをクリックします。
          </p>
        </div>

        {/* 左揃え */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3 flex items-center gap-2">
            <span className="text-xl">左揃え</span>
          </h3>
          <p className="text-black leading-relaxed mb-3">
            段落を左側に揃える機能です。通常の文書では左揃えが標準です。段落を選択してから、ホームタブの「左揃え」ボタンをクリックします。
          </p>
        </div>

        {/* 両端揃え */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-3 flex items-center gap-2">
            <span className="text-xl">両端揃え</span>
          </h3>
          <p className="text-black leading-relaxed mb-3">
            段落の左右両端を揃える機能です。正式な文書やレポートなどで使用されます。段落を選択してから、ホームタブの「両端揃え」ボタンをクリックします。
          </p>
        </div>
      </div>
    </section>
  );
}
