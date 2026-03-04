"use client";

export default function TableOfContents() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // ヘッダーの高さ分のオフセット
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-20">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col" style={{ maxHeight: 'calc(100vh - 6rem)' }}>
        <div className="p-4 pb-2 flex-shrink-0 border-b border-gray-200">
          <h3 className="text-lg font-bold text-black">
            目次
          </h3>
        </div>
        <nav className="space-y-2 overflow-y-auto overflow-x-hidden px-4 pb-4 flex-1" style={{ maxHeight: 'calc(100vh - 10rem)' }}>
          <div>
            <a
              href="#section-1"
              onClick={(e) => handleClick(e, "section-1")}
              className="block text-sm text-black hover:text-blue-600 py-1 transition-colors"
            >
              1. ファイル操作
            </a>
            <div className="ml-4 mt-1 space-y-1">
              <a
                href="#section-1-1"
                onClick={(e) => handleClick(e, "section-1-1")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                1.1 新規作成
              </a>
              <a
                href="#section-1-2"
                onClick={(e) => handleClick(e, "section-1-2")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                1.2 名前をつけて保存
              </a>
              <a
                href="#section-1-3"
                onClick={(e) => handleClick(e, "section-1-3")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                1.3 上書き保存
              </a>
              <a
                href="#section-1-4"
                onClick={(e) => handleClick(e, "section-1-4")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                1.4 開く
              </a>
            </div>
          </div>

          <div>
            <a
              href="#section-2"
              onClick={(e) => handleClick(e, "section-2")}
              className="block text-sm text-black hover:text-blue-600 py-1 transition-colors"
            >
              2. ホームタブ
            </a>
            <div className="ml-4 mt-1 space-y-1">
              <a
                href="#section-2-1"
                onClick={(e) => handleClick(e, "section-2-1")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                2.1 文字効果
              </a>
              <div className="ml-4 mt-1 space-y-1">
                <a
                  href="#section-2-1-1"
                  onClick={(e) => handleClick(e, "section-2-1-1")}
                  className="block text-xs text-gray-600 hover:text-blue-600 py-0.5 transition-colors"
                >
                  2.1.1 太字
                </a>
                <a
                  href="#section-2-1-2"
                  onClick={(e) => handleClick(e, "section-2-1-2")}
                  className="block text-xs text-gray-600 hover:text-blue-600 py-0.5 transition-colors"
                >
                  2.1.2 斜体
                </a>
                <a
                  href="#section-2-1-3"
                  onClick={(e) => handleClick(e, "section-2-1-3")}
                  className="block text-xs text-gray-600 hover:text-blue-600 py-0.5 transition-colors"
                >
                  2.1.3 下線
                </a>
                <a
                  href="#section-2-1-4"
                  onClick={(e) => handleClick(e, "section-2-1-4")}
                  className="block text-xs text-gray-600 hover:text-blue-600 py-0.5 transition-colors"
                >
                  2.1.4 上/下つき文字
                </a>
              </div>
              <a
                href="#section-2-2"
                onClick={(e) => handleClick(e, "section-2-2")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                2.2 フォント
              </a>
              <a
                href="#section-2-3"
                onClick={(e) => handleClick(e, "section-2-3")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                2.3 左、中央、右揃え
              </a>
              <a
                href="#section-2-4"
                onClick={(e) => handleClick(e, "section-2-4")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                2.4 アウトライン
              </a>
              <a
                href="#section-2-5"
                onClick={(e) => handleClick(e, "section-2-5")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                2.5 行間
              </a>
              <a
                href="#section-2-6"
                onClick={(e) => handleClick(e, "section-2-6")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                2.6 ルーラー
              </a>
            </div>
          </div>

          <div>
            <a
              href="#section-3"
              onClick={(e) => handleClick(e, "section-3")}
              className="block text-sm text-black hover:text-blue-600 py-1 transition-colors"
            >
              3. 新規タブ
            </a>
            <div className="ml-4 mt-1 space-y-1">
              <a
                href="#section-3-1"
                onClick={(e) => handleClick(e, "section-3-1")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                3.1 図の挿入
              </a>
              <a
                href="#section-3-2"
                onClick={(e) => handleClick(e, "section-3-2")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                3.2 表の挿入
              </a>
              <a
                href="#section-3-3"
                onClick={(e) => handleClick(e, "section-3-3")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                3.3 文字列の折り返し
              </a>
              <a
                href="#section-3-4"
                onClick={(e) => handleClick(e, "section-3-4")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                3.4 数式の挿入
              </a>
              <a
                href="#section-3-5"
                onClick={(e) => handleClick(e, "section-3-5")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                3.5 数式番号の挿入
              </a>
              <a
                href="#section-3-6"
                onClick={(e) => handleClick(e, "section-3-6")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                3.6 ヘッダーフッター
              </a>
            </div>
          </div>

          <div>
            <a
              href="#section-4"
              onClick={(e) => handleClick(e, "section-4")}
              className="block text-sm text-black hover:text-blue-600 py-1 transition-colors"
            >
              4. レイアウト、参考資料タブ
            </a>
            <div className="ml-4 mt-1 space-y-1">
              <a
                href="#section-4-1"
                onClick={(e) => handleClick(e, "section-4-1")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                4.1 余白
              </a>
              <a
                href="#section-4-2"
                onClick={(e) => handleClick(e, "section-4-2")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                4.2 図表番号の挿入
              </a>
              <a
                href="#section-4-3"
                onClick={(e) => handleClick(e, "section-4-3")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                4.3 グループ化
              </a>
            </div>
          </div>

          <div>
            <a
              href="#section-5"
              onClick={(e) => handleClick(e, "section-5")}
              className="block text-sm text-black hover:text-blue-600 py-1 transition-colors"
            >
              5. 検索置換
            </a>
            <div className="ml-4 mt-1 space-y-1">
              <a
                href="#section-5-1"
                onClick={(e) => handleClick(e, "section-5-1")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                5.1 検索
              </a>
              <a
                href="#section-5-2"
                onClick={(e) => handleClick(e, "section-5-2")}
                className="block text-xs text-gray-700 hover:text-blue-600 py-0.5 transition-colors"
              >
                5.2 置換
              </a>
            </div>
          </div>

          <div>
            <a
              href="#section-6"
              onClick={(e) => handleClick(e, "section-6")}
              className="block text-sm text-black hover:text-blue-600 py-1 transition-colors"
            >
              6. PDF変換
            </a>
          </div>

          <div>
            <a
              href="#section-7"
              onClick={(e) => handleClick(e, "section-7")}
              className="block text-sm text-black hover:text-blue-600 py-1 transition-colors"
            >
              7. 数式バーのショートカットの設定方法
            </a>
          </div>

          <div>
            <a
              href="#section-8"
              onClick={(e) => handleClick(e, "section-8")}
              className="block text-sm text-black hover:text-blue-600 py-1 transition-colors"
            >
              8. よく使うショートカットキー１ラン
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
