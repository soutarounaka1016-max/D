export const glossary = [
  {
    term: 'Actions',
    reading: 'アクションズ',
    summary: 'テストや公開などの作業をGitHub上で自動実行する仕組み。',
    example: 'mainへ更新したら、自動でテストしてサイトを公開する。',
    category: '自動化'
  },
  {
    term: 'Artifact',
    reading: 'アーティファクト',
    summary: 'テスト結果やビルド済みファイルなど、Actionsが作った成果物。',
    example: '公開用のHTML一式やテストレポートを保存する。',
    category: '自動化'
  },
  {
    term: 'Branch',
    reading: 'ブランチ',
    summary: 'mainから作業を分けて、安全に変更を進めるための枝分かれ。',
    example: 'feature/searchというbranchで検索機能を作る。',
    category: '変更管理'
  },
  {
    term: 'Clone',
    reading: 'クローン',
    summary: 'GitHub上のRepositoryを、自分の端末へ丸ごとコピーすること。',
    example: 'Repositoryをcloneしてローカルで編集する。',
    category: '基本操作'
  },
  {
    term: 'Code review',
    reading: 'コードレビュー',
    summary: '変更内容を別の人やAIが確認し、問題や改善点を探すこと。',
    example: 'Pull requestの差分を読んで、不具合がないか確認する。',
    category: '共同作業'
  },
  {
    term: 'Commit',
    reading: 'コミット',
    summary: '変更内容をひとまとまりの記録として保存すること。',
    example: '「検索機能を追加」という説明を付けてcommitする。',
    category: '変更管理'
  },
  {
    term: 'Conflict',
    reading: 'コンフリクト',
    summary: '同じ場所への変更がぶつかり、Gitが自動では統合できない状態。',
    example: '二つのbranchが同じ行を変更してconflictが起きる。',
    category: '変更管理'
  },
  {
    term: 'Contributor',
    reading: 'コントリビューター',
    summary: 'そのRepositoryへコードや文書などの変更を提供した人。',
    example: '不具合修正のPull requestを送った人がcontributorになる。',
    category: '共同作業'
  },
  {
    term: 'Default branch',
    reading: 'デフォルトブランチ',
    summary: 'Repositoryを開いたときの基準になるbranch。多くの場合はmain。',
    example: 'Pull requestの統合先をdefault branchのmainにする。',
    category: '変更管理'
  },
  {
    term: 'Deploy',
    reading: 'デプロイ',
    summary: '作ったアプリを、利用者がアクセスできる環境へ公開すること。',
    example: 'mainの内容をGitHub Pagesへdeployする。',
    category: '公開'
  },
  {
    term: 'Diff',
    reading: 'ディフ',
    summary: '変更前と変更後で、どこが追加・削除・修正されたかを示す差分。',
    example: 'Pull requestのdiffを見て変更範囲を確認する。',
    category: '変更管理'
  },
  {
    term: 'Fork',
    reading: 'フォーク',
    summary: '他人のRepositoryを、自分のGitHubアカウント側へ複製すること。',
    example: '公開Repositoryをforkして、自分用に変更する。',
    category: '共同作業'
  },
  {
    term: 'Git',
    reading: 'ギット',
    summary: 'ファイルの変更履歴を記録・管理するための仕組み。GitHubとは別物。',
    example: 'Gitで履歴を管理し、GitHubに保存・共有する。',
    category: '基礎知識'
  },
  {
    term: 'GitHub Pages',
    reading: 'ギットハブ ページズ',
    summary: 'Repository内のファイルからWebサイトを無料で公開できるGitHubの機能。',
    example: '静的な学習アプリをGitHub Pagesで公開する。',
    category: '公開'
  },
  {
    term: 'HEAD',
    reading: 'ヘッド',
    summary: '現在作業しているcommitやbranchの位置を示す目印。',
    example: 'HEADがmainの最新commitを指している。',
    category: '変更管理'
  },
  {
    term: 'Issue',
    reading: 'イシュー',
    summary: '不具合、要望、作業内容、質問などを記録して管理する場所。',
    example: '「検索結果が0件の表示を改善する」というIssueを作る。',
    category: '共同作業'
  },
  {
    term: 'Merge',
    reading: 'マージ',
    summary: '別のbranchで行った変更を、mainなどのbranchへ統合すること。',
    example: '確認済みのPull requestをmainへmergeする。',
    category: '変更管理'
  },
  {
    term: 'Origin',
    reading: 'オリジン',
    summary: 'clone元のリモートRepositoryにつけられる標準的な名前。',
    example: 'origin/mainはGitHub上のmain branchを表す。',
    category: '基本操作'
  },
  {
    term: 'Pull',
    reading: 'プル',
    summary: 'GitHub側の最新変更を、自分の作業環境へ取り込むこと。',
    example: '作業前にmainの最新状態をpullする。',
    category: '基本操作'
  },
  {
    term: 'Pull request',
    reading: 'プルリクエスト',
    summary: '自分の変更を確認してもらい、別のbranchへ統合するための提案。',
    example: '検索機能のbranchからmainへPull requestを作る。',
    category: '共同作業'
  },
  {
    term: 'Push',
    reading: 'プッシュ',
    summary: '自分の作業環境にあるcommitをGitHubへ送ること。',
    example: '変更をcommitした後、feature branchへpushする。',
    category: '基本操作'
  },
  {
    term: 'README',
    reading: 'リードミー',
    summary: 'Repositoryの目的、使い方、構成などを説明する案内文書。',
    example: 'README.mdにアプリの起動方法を書く。',
    category: '文書'
  },
  {
    term: 'Release',
    reading: 'リリース',
    summary: '利用者向けに公開する版を、番号や説明とともにまとめたもの。',
    example: 'Version 1.0をReleaseとして公開する。',
    category: '公開'
  },
  {
    term: 'Repository',
    reading: 'リポジトリ',
    summary: 'コード、文書、変更履歴、Issueなどをまとめて管理する場所。',
    example: '一つのWebアプリを一つのRepositoryで管理する。',
    category: '基礎知識'
  },
  {
    term: 'Revert',
    reading: 'リバート',
    summary: '過去の変更を打ち消す新しいcommitを作り、安全に元へ戻すこと。',
    example: '公開後に問題が見つかり、原因のcommitをrevertする。',
    category: '変更管理'
  },
  {
    term: 'SSH key',
    reading: 'エスエスエイチ キー',
    summary: 'パスワードの代わりに、安全にGitHubへ接続するための鍵。',
    example: '端末の公開鍵をGitHubへ登録してpushする。',
    category: '認証'
  },
  {
    term: 'Staging area',
    reading: 'ステージングエリア',
    summary: '次のcommitへ含める変更だけを、一時的に選んで置く場所。',
    example: '必要なファイルだけaddしてstaging areaへ入れる。',
    category: '変更管理'
  },
  {
    term: 'Tag',
    reading: 'タグ',
    summary: '特定のcommitへ付ける、Version名などの分かりやすい目印。',
    example: '完成版のcommitへv1.0.0というTagを付ける。',
    category: '公開'
  },
  {
    term: 'Workflow',
    reading: 'ワークフロー',
    summary: 'GitHub Actionsで、いつ何を自動実行するかを定義した手順。',
    example: 'push時にテストと公開を行うWorkflowを作る。',
    category: '自動化'
  },
  {
    term: 'Working tree',
    reading: 'ワーキングツリー',
    summary: '現在、端末上で実際に編集しているファイル一式の状態。',
    example: '未commitの変更がworking treeに残っている。',
    category: '変更管理'
  }
];

export function normalizeText(value) {
  return String(value ?? '')
    .normalize('NFKC')
    .toLocaleLowerCase('ja-JP')
    .replace(/\s+/g, ' ')
    .trim();
}

export function filterGlossary(items, query) {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return [...items];

  const tokens = normalizedQuery.split(' ').filter(Boolean);
  return items.filter((item) => {
    const searchable = normalizeText([
      item.term,
      item.reading,
      item.summary,
      item.example,
      item.category
    ].join(' '));
    return tokens.every((token) => searchable.includes(token));
  });
}
