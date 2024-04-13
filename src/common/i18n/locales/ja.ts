import { Texts } from "@/common/i18n/text_template";

export const ja: Texts = {
  electronShogi: "Electron将棋",
  clear: "初期化",
  open: "開く",
  saveOverwrite: "上書き保存",
  newRecord: "新規棋譜",
  openRecord: "棋譜を開く",
  saveRecord: "棋譜を上書き保存",
  saveRecordAs: "棋譜を名前を付けて保存",
  openAutoSavingDirectory: "自動保存先を開く",
  exportPositionImage: "局面図を出力",
  positionImage: "局面図",
  batchConversion: "一括変換",
  recordFileBatchConversion: "棋譜ファイル一括変換",
  close: "閉じる",
  quit: "終了",
  editing: "編集",
  copyAsKIF: "コピー・KIF",
  copyAsKI2: "コピー・KI2",
  copyAsCSA: "コピー・CSA",
  copyAsUSI: "コピー・USI",
  copyAsSFEN: "コピー・SFEN",
  copyAsJKF: "コピー・JKF",
  copy: "コピー",
  cut: "切り取り",
  paste: "貼り付け",
  copyRecord: "棋譜コピー",
  asKIF: "KIF形式",
  asKI2: "KI2形式",
  asCSA: "CSA形式",
  asUSIUntilCurrentMove: "USI形式(現在の指し手まで)",
  asUSIAll: "USI形式(全て)",
  asJSONKifuFormat: "JSON棋譜フォーマット",
  copyPositionAsSFEN: "局面コピー(SFEN形式)",
  pasteRecordOrPosition: "棋譜・局面貼り付け",
  appendSpecialMove: "特殊な指し手",
  deleteMoves: "現在の位置から棋譜を削除",
  view: "表示",
  toggleFullScreen: "全画面表示切り替え",
  defaultFontSize: "標準の文字サイズ",
  largerFontSize: "文字を拡大",
  smallerFontSize: "文字を縮小",
  settings: "設定",
  config: "設定",
  debug: "デバッグ",
  toggleDevTools: "開発者ツール表示切り替え",
  logFile: "ログファイル",
  openAppLog: "アプリログを開く",
  openUSILog: "USI通信ログを開く",
  openCSALog: "CSA通信ログを開く",
  tailAppLog: "アプリログをTailする",
  tailUSILog: "USI通信ログをTailする",
  tailCSALog: "CSA通信ログをTailする",
  copyAppLogTailCommand: "アプリログのTailコマンドをコピー",
  copyUSILogTailCommand: "USI通信ログのTailコマンドをコピー",
  copyCSALogTailCommand: "CSA通信ログのTailコマンドをコピー",
  reloadCustomPieceImage: "カスタム駒画像をリロード",
  launchUSIEngine: "USIエンジンを起動",
  connectToCSAServer: "CSAサーバーに接続",
  adminMode: "管理モード",
  inAdminModeYouShouldInvokeCommandsManuallyAtPrompt:
    "管理モードではプロンプトから手動でコマンドを実行する必要があります。",
  setoptionAndPrecedingCommandsWillBeSentAutomatically:
    "setoptionコマンドまでのコマンドは自動で送信されます。",
  serverMustSupportShogiServerX1ModeLogIn:
    "サーバーは shogi-server の拡張モード (x1) ログインをサポートしている必要があります。",
  folders: "各種フォルダ",
  notification: "通知",
  notificationTest: "通知テスト",
  thisIsTestNotification: "これは通知のテストです。",
  app: "アプリ",
  log: "ログ",
  backup: "バックアップ",
  cache: "キャッシュ",
  help: "ヘルプ",
  openWebSite: "Webサイトを開く",
  howToUse: "使い方を開く",
  openLatestReleasePage: "最新版リリースページを開く",
  openStableReleasePage: "安定版リリースページを開く",
  inputs: "入力",
  outputs: "出力",
  format: "フォーマット",
  formats: "フォーマット",
  subdirectories: "サブディレクトリ",
  separately: "個別",
  merge: "マージ",
  createSubdirectories: "サブディレクトリ作成",
  nameConflictAction: "名前衝突時の動作",
  numberSuffix: "番号付与",
  skip: "スキップ",
  convert: "変換",
  openLogFile: "ログファイルを開く",
  succeeded: "成功",
  failed: "失敗",
  skipped: "スキップ",
  game: "対局",
  player: "プレイヤー",
  server: "サーバー",
  selectFromHistory: "履歴から選ぶ",
  noHistory: "履歴がありません",
  saveHistory: "履歴に保存する",
  version: "バージョン",
  gameProgress: "対局の経過",
  allGamesCompleted: "連続対局終了",
  gameEnded: "対局終了",
  offlineGame: "ローカル対局",
  csaOnlineGame: "通信対局（CSA）",
  csaProtocolOnlineGame: "通信対局（CSAプロトコル）",
  csaProtocolV121: "CSAプロトコル1.2.1 標準",
  csaProtocolV121WithPVComment: "CSAプロトコル1.2.1 読み筋コメント付き",
  hostToConnect: "接続先ホスト",
  portNumber: "ポート番号",
  password: "パスワード",
  showPassword: "パスワードを表示する",
  keepaliveInitialDelay: "Keepalive初期遅延",
  blankLinePing: "空行Ping",
  blankLinePingInitialDelay: "空行Ping初期遅延",
  blankLinePingInterval: "空行Ping間隔",
  logout: "ログアウト",
  calculateJishogiPoints: "持将棋の点数を計算",
  jishogiPoints: "持将棋の点数",
  displayGameResults: "戦績確認",
  interrupt: "中断",
  stopGame: "対局中断",
  resign: "投了",
  draw: "引き分け",
  impass: "持将棋",
  repetitionDraw: "千日手",
  mate: "詰み",
  noMate: "不詰",
  mateSearch: "詰み探索",
  startMateSearch: "詰み探索開始",
  stopMateSearch: "詰み探索終了",
  noMateFound: "詰みが見つかりませんでした。",
  timeout: "時間切れ",
  foulWin: "反則勝ち",
  foulLose: "反則負け",
  enteringOfKing: "入玉勝ち",
  winByDefault: "不戦勝",
  loseByDefault: "不戦敗",
  winByDeclaration: "宣言勝ち",
  declareWinning: "勝ち宣言",
  research: "検討",
  startResearch: "検討開始",
  endResearch: "検討終了",
  recordAnalysis: "棋譜解析",
  analysis: "解析",
  analyze: "解析開始",
  stopAnalysis: "解析中断",
  setupPosition: "局面編集",
  startPositionSetup: "局面編集開始",
  completePositionSetup: "局面編集終了",
  changeTurn: "手番変更",
  initializePosition: "局面の初期化",
  changePieceSet: "駒の増減",
  appSettings: "アプリ設定",
  language: "言語",
  theme: "テーマ",
  standard: "標準",
  green: "緑",
  cherryBlossom: "桜",
  customImage: "カスタム画像",
  autumn: "紅葉",
  snow: "雪",
  darkGreen: "深緑",
  dark: "ダーク",
  piece: "駒",
  singleKanjiPiece: "一文字駒",
  singleKanjiGothicPiece: "一文字駒（ゴシック体）",
  singleKanjiDarkPiece: "一文字駒（ダーク）",
  singleKanjiGothicDarkPiece: "一文字駒（ゴシック体・ダーク）",
  imageHasMarginsRemoveToDisplayLarger: "画像に余白が含まれている（除去して大きく表示）",
  backgroundImage: "背景画像",
  board: "盤",
  pieceStand: "駒台",
  lightWoodyTexture: "木目（明るい）",
  warmWoodTexture: "木目（暖かい）",
  regin: "樹脂",
  transparent: "透過表示",
  boardOpacity: "盤の不透明度",
  pieceStandOpacity: "駒台の不透明度",
  recordOpacity: "棋譜の不透明度",
  displayFileAndRank: "段・筋を表示",
  displayLeftControls: "左側操作ボタンを表示",
  displayRightControls: "右側操作ボタンを表示",
  tabViewStyle: "タブビューの形式",
  oneColumn: "1列",
  twoColumns: "2列",
  sounds: "音",
  pieceLoudness: "駒音の大きさ",
  clockLoudness: "時計音の大きさ",
  clockPitch: "時計音の高さ",
  clockSoundTarget: "時計音の対象",
  anyTurn: "全ての手番",
  onlyHumanTurn: "人間の手番のみ",
  defaultRecordFileFormat: "デフォルトの保存形式",
  textEncoding: "文字コード",
  strict: "厳格",
  autoDetect: "自動判定",
  newlineCharacter: "改行文字",
  old90sMac: "90年代Mac",
  autoSaving: "自動保存",
  autoSavingDirectory: "棋譜の自動保存先",
  recordFileName: "棋譜ファイル名",
  select: "選択",
  positionOfUSIOutput: "USI の局面表記",
  movesOfUSIOutput: "USI の指し手表記",
  onlySFEN: "SFEN のみ",
  usiProtocol: "USIプロトコル",
  translateOptionName: "オプション名を翻訳",
  functionalOnJapaneseOnly: "日本語選択時のみ有効",
  maxStartupTime: "最大起動待ち時間",
  forDevelopers: "開発者向け",
  enableAppLog: "アプリログを出力",
  enableUSILog: "USI通信ログを出力",
  enableCSALog: "CSA通信ログを出力",
  logLevel: "ログレベル",
  engineSettings: "エンジン設定",
  flipBoard: "盤面反転",
  file: "ファイル",
  recordFile: "棋譜ファイル",
  executableFile: "実行可能ファイル",
  imageFile: "画像ファイル",
  unsaved: "未保存",
  remove: "削除",
  deleteMove: "指し手削除",
  recordProperties: "棋譜情報",
  comments: "コメント",
  commentsAndBookmarks: "コメント・しおり",
  branches: "分岐",
  bookmark: "しおり",
  bookmarkList: "しおり一覧",
  useBookmarkAsHeader: "しおりを見出しに使う",
  moveComments: "指し手コメント",
  searchLog: "思考",
  pv: "読み筋",
  mateShort: "詰",
  displayPVShort: "再現",
  evaluation: "評価値",
  eval: "評価値",
  estimatedWinRate: "期待勝率",
  evaluationAndEstimatedWinRate: "評価値・期待勝率",
  swapEachTurnChange: "手番側有利がプラスの値",
  alwaysSenteIsPositive: "先手有利がプラスの値",
  signOfEvaluation: "評価値の符号",
  winRateCoefficient: "勝率換算係数",
  monitor: "監視",
  hideTabView: "最小化",
  expandTabView: "タブビューを再表示",
  sente: "先手",
  senteOrShitate: "先手（下手）",
  shitate: "下手",
  gote: "後手",
  goteOrUwate: "後手（上手）",
  uwate: "上手",
  swapSenteGote: "先後入れ替え",
  currentPosition: "現在の局面",
  enableEngineTimeout: "エンジンの時間切れあり",
  setDifferentTimeForGote: "後手に異なる時間を設定",
  nextTurn: "次の手番",
  elapsedTime: "消費時間",
  elapsed: "経過時間",
  rank: "順位",
  depth: "深さ",
  searchEngine: "エンジン",
  ponder: "先読み(Ponder)",
  numberOfThreads: "スレッド数",
  multiPV: "マルチPV",
  startPosition: "開始局面",
  maxMoves: "最大手数",
  gameRepetition: "連続対局",
  jishogi: "持将棋",
  rule24: "24点法",
  rule27: "27点法",
  tryRule: "トライルール",
  autoRelogin: "自動で再ログインする",
  restartItEveryGame: "1局ごとに再起動する",
  swapTurnWhenGameRepetition: "1局ごとに手番を入れ替える",
  outputComments: "コメントを出力する",
  saveRecordAutomatically: "棋譜を自動で保存する",
  adjustBoardToHumanPlayer: "人を手前に表示する",
  adjustBoardAutomatically: "盤面の向きを自動調整",
  command: "コマンド",
  startGame: "対局開始",
  cancelGame: "対局をキャンセル",
  allottedTime: "持ち時間",
  byoyomi: "秒読み",
  increments: "増加",
  startEndCriteria: "開始・終了条件",
  endCriteria1Move: "局面ごとの終了条件",
  outputSettings: "出力設定",
  noOutputs: "出力しない",
  insertCommentToTop: "前方に加筆する",
  appendCommentToBottom: "末尾に加筆する",
  insertToComment: "コメントに挿入",
  insertToRecord: "棋譜に挿入",
  overwrite: "上書きする",
  fromPrefix: "",
  fromSuffix: "から",
  toPrefix: "",
  toSuffix: "まで",
  plyPrefix: "",
  plySuffix: "手目",
  hoursSuffix: "時間",
  minutesSuffix: "分",
  secondsSuffix: "秒",
  engineManagement: "エンジン管理",
  engineName: "エンジン名",
  author: "作者",
  earlyPonder: "早期Ponder",
  enginePath: "場所",
  openDirectory: "フォルダを開く",
  displayName: "表示名",
  invoke: "実行",
  resetToEngineDefaultValues: "エンジンの既定値に戻す",
  defaultValue: "既定値",
  noEngineRegistered: "エンジンが登録されていません。",
  duplicate: "複製",
  add: "追加",
  recommended: "推奨",
  import: "取り込む",
  saveAndClose: "保存して閉じる",
  save: "保存",
  saveAs: "保存",
  history: "履歴",
  clearHistory: "履歴をクリア",
  userFile: "ユーザーのファイル",
  automaticBackup: "自動バックアップ",
  restore: "復元",
  loadRecordFromWeb: "Webの棋譜を取得",
  fetchLatestData: "最新データを取得",
  sourceURL: "ソースURL",
  ok: "OK",
  cancel: "キャンセル",
  back: "戻る",
  name: "名前",
  prediction: "予想",
  best: "最善",
  nodes: "Node数",
  hashUsage: "Hash使用率",
  stop: "停止",
  resume: "再開",
  nonHandicap: "平手",
  lanceHandicap: "香落ち",
  rightLanceHandicap: "右香落ち",
  bishopHandicap: "角落ち",
  rookHandicap: "飛車落ち",
  rookLanceHandicap: "飛車香落ち",
  twoPiecesHandicap: "二枚落ち",
  fourPiecesHandicap: "四枚落ち",
  sixPiecesHandicap: "六枚落ち",
  eightPiecesHandicap: "八枚落ち",
  tenPiecesHandicap: "十枚落ち",
  tsumeShogi: "詰将棋",
  doubleKingTsumeShogi: "双玉詰将棋",
  startDateTime: "開始日時",
  endDateTime: "終了日時",
  gameDate: "対局日",
  tournament: "棋戦",
  strategy: "戦型",
  gameTitle: "表題",
  timeLimit: "持ち時間",
  place: "場所",
  postedOn: "掲載",
  note: "備考",
  senteShortName: "先手省略名",
  goteShortName: "後手省略名",
  opusNo: "作品番号",
  opusName: "作品名",
  publishedBy: "発表誌",
  publishedOn: "発表年月",
  source: "出典",
  numberOfMoves: "手数",
  integrity: "完全性",
  recordCategory: "分類",
  award: "受賞",
  filterByOptionName: "オプション名で検索",
  filterByEngineName: "エンジン名で検索",
  bookStyle: "書籍風",
  gameStyle: "対局画面風",
  thin: "細",
  bold: "太",
  extraBold: "極太",
  playerName: "対局者名",
  typeface: "書体",
  weight: "太さ",
  handLabel: "持ち駒ラベル",
  header: "見出し",
  vertical: "垂直方向",
  size: "サイズ",
  none: "なし",
  bgCover: "1枚で表示",
  bgContain: "拡大して表示",
  bgTile: "タイル状に表示",
  inaccuracy: "緩手",
  dubious: "疑問手",
  mistake: "悪手",
  blunder: "大悪手",
  inaccuracyThreshold: "緩手の閾値",
  dubiousThreshold: "疑問手の閾値",
  mistakeThreshold: "悪手の閾値",
  blunderThreshold: "大悪手の閾値",
  gothic: "ゴシック体",
  mincho: "明朝体",
  appVersion: "アプリバージョン",
  installed: "インストール済み",
  stable: "安定版",
  latest: "最新版",
  updatedAt: "更新日時",
  createdAt: "作成日時",
  lastSent: "最終送信",
  lastReceived: "最終受信",
  protocolVersion: "プロトコルバージョン",
  prompt: "プロンプト",
  openPrompt: "プロンプトを開く",
  forceQuit: "強制Quit",
  forceClose: "強制Close",
  blankLine: "空行",
  autoScroll: "自動スクロール",
  showTimestamp: "タイムスタンプを表示",
  highlightByPartialMatch: "部分一致でハイライト",
  csaServer: "CSAサーバー",
  usiEngine: "USIエンジン",
  noRunningUSIEngine: "稼働中のUSIエンジンはありません。",
  noConnectedCSAServer: "接続中のCSAサーバーはありません。",
  willBeRemovedFromTheListSoon: "セッションが終了したため、まもなく一覧から削除されます。",
  typeCommandHereAndPressEnter: "コマンドを入力してEnter",
  allowBlankLine: "空行を許可",
  removeSpaceFromBothEnds: "両端の空白を削除",
  collapseSequentialSpaces: "連続する空白をまとめる",
  typeCustomTitleHere: "ここに見出しを入力",
  displayEmptyElements: "未入力の項目を表示",
  waitingForNewGame: "対局開始を待っています。",
  waitingForPlayerSetup: "対局者の準備を待っています。",
  insertedComment: "コメントを挿入しました。",
  conversionCompleted: "変換が完了しました。",
  tryingToConnectAndLoginToCSAServer: "CSAサーバーへの接続とログインを試みています。",
  inBrowserLogsOutputToConsoleAndIgnoreThisSetting:
    "※ブラウザ版ではログがコンソールに出力され、ここでの設定は無視されます。",
  shouldRestartToApplyLogSettings: "※ログ設定の変更を反映するにはアプリの再起動が必要です。",
  canOpenLogDirectoryFromMenu:
    "※ログの出力先は「デバッグ」-「ログファイルの場所を開く」で開きます。",
  hasNoOldLogCleanUpFeature: "※現在、古いログファイルの自動削除機能はありません。",
  processingPleaseWait: "処理中です。お待ちください。",
  importingFollowingRecordOrPosition: "以下の棋譜(または局面)を取り込みます。",
  supportsKIF_KI2_CSA_USI_SFEN_JKF: "※KIF形式/KI2形式/CSA形式/USI/SFEN/JKFに対応しています。",
  pleasePasteRecordIntoTextArea: "※テキストエリアに棋譜を貼り付けてください。",
  pleaseSpecifyPlainTextURL: "※プレーンテキストのURLを指定してください。",
  redirectNotSupported: "※リダイレクトはサポートされていません。",
  desktopVersionPastesAutomatically: "※インストールアプリ版では自動的に貼り付けられます。",
  earlyPonderFeatureSendsPonderhitCommandWithYaneuraOusNonStandardOptions:
    "早期Ponder機能は、やねうら王の独自オプションでponderhitコマンドを送信します。",
  ifYourEngineNotSupportTheOptionsItMayCauseUnexpectedBehavior:
    "エンジンがこのオプションに対応していない場合、予期しない動作を引き起こす可能性があります。",
  someLogsDisabled: "一部のログが無効になっています。",
  logsRecommendedForCSAProtocol: "CSAプロトコルを使用した対局では各種ログの出力を推奨します。",
  pleaseEnableLogsAndRestart: "アプリ設定からログを有効にしてアプリを再起動してください。",
  notSendPVOnStandardCSAProtocol: "標準のCSAプロトコルでは評価値や読み筋が送信されません。",
  csaProtocolSendPlaintextPassword: "CSAプロトコルの規格上パスワードは平文で送信されます。",
  passwordWillSavedPlaintextBecauseOSSideEncryptionNotAvailable:
    "OSの暗号化機能が利用できないため、入力したパスワードは平文で保存されます。",
  pleaseUncheckSaveHistoryIfNotWantSave:
    "保存したくない場合は「履歴に保存する」のチェックを外してください。",
  csaProtocolSendPlaintextPasswordRegardlessOfHistory:
    "なお、履歴の保存に関係なくCSAプロトコルの規格上パスワードは平文で送信されます。",
  whenNewVersionIsAvailableItWillBeNotified: "新しいバージョンが利用可能になると通知されます。",
  pleaseCheckMessageThisIsTestNotificationByAboveButton:
    "上のボタンで「これは通知のテストです。」というメッセージを確認してください。",
  ifNotWorkYouShouldAllowNotificationOnOSSetting:
    "表示されない場合はOSの設定で通知を許可してください。",
  areYouSureWantToResign: "投了しますか？",
  areYouSureWantToDoDeclaration: "宣言しますか？",
  areYouSureWantToQuitGames: "連続対局を中断しますか？",
  areYouSureWantToRequestQuit: "中断を要求すると負けになる可能性があります。よろしいですか？",
  areYouSureWantToClearRecord: "現在の棋譜は削除されます。よろしいですか？",
  areYouSureWantToDiscardPosition: "現在の局面は破棄されます。よろしいですか？",
  areYouSureWantToOpenFileInsteadOfCurrentRecord:
    "現在の棋譜を閉じて別のファイルを開きます。よろしいですか？",
  areYouSureWantToClearHistory: "履歴をクリアします。よろしいですか？",
  yamlFormatSettingCopiedToClipboard: "YAML形式の設定をクリップボードにコピーしました。",
  jsonFormatSettingCopiedToClipboard: "JSON形式の設定をクリップボードにコピーしました。",
  usiCsaBridgeCommandCopiedToClipboard: "usi-csa-bridge コマンドをクリップボードにコピーしました。",
  youCanNotCloseAppWhileCSAOnlineGame: "CSAプロトコル使用中はアプリを終了できません。",
  fileExtensionNotSupported: "取り扱いできないファイル拡張子です。",
  errorOccuredWhileDisconnectingFromCSAServer: "CSAサーバーからの切断中にエラーが発生しました。",
  failedToConnectToCSAServer: "CSAサーバーに接続できませんでした。",
  errorOccuredWhileLogoutFromCSAServer: "CSAサーバーからのログアウト中にエラーが発生しました。",
  disconnectedFromCSAServer: "CSAサーバーへの接続が切れました。",
  csaServerLoginDenied: "CSAサーバーへのログインが拒否されました。",
  thisFeatureNotAvailableOnWebApp: "Web版では利用できない機能です。",
  failedToStartNewGame: "対局の開始に失敗しました。",
  errorOccuredWhileEndingGame: "対局の終了中にエラーが発生しました。",
  failedToSendGoCommand: "goコマンドを送信できませんでした。",
  failedToSendPonderCommand: "ponderコマンドを送信できませんでした。",
  failedToSendStopCommand: "stopコマンドを送信できませんでした。",
  failedToShutdownEngines: "エンジンを正常に終了できませんでした。",
  failedToCheckUpdates: "アップデートの確認ができませんでした。",
  failedToSaveRecord: "棋譜の保存に失敗しました。",
  failedToParseSFEN: "SFENの読み込みに失敗しました。",
  failedToDetectRecordFormat: "棋譜形式を判別できませんでした。",
  unknown: "不明",
  unknownFileExtension: "不明なファイル形式です。",
  emptyRecordInput: "棋譜が入力されていません。",
  invalidPieceName: "不正な駒",
  invalidTurn: "不正な手番",
  invalidMove: "不正な指し手",
  invalidMoveNumber: "不正な手数",
  invalidDestination: "不正な移動先",
  pieceNotExists: "存在しない駒",
  invalidLine: "不正な行",
  invalidBoard: "不正な盤面",
  invalidHandPiece: "不正な持ち駒",
  invalidUSI: "不正なUSI",
  backgroundImageFileNotSelected: "背景画像のファイルが選択されていません。",
  pieceImageFileNotSelected: "駒画像のファイルが選択されていません。",
  boardImageFileNotSelected: "盤面画像のファイルが選択されていません。",
  pieceStandImageFileNotSelected: "駒台画像のファイルが選択されていません。",
  pieceVolumeMustBe0To100Percent: "駒音の大きさには0%～100%の値を指定してください。",
  clockVolumeMustBe0To100Percent: "時計音の大きさには0%～100%の値を指定してください。",
  clockPitchMustBe220To880Hz: "時計音の高さには220Hz～880Hzの値を指定してください。",
  engineTimeoutMustBe1To300Seconds:
    "エンジンのタイムアウト時間には1秒～300秒の値を指定してください。",
  coefficientInSigmoidMustBeGreaterThan0: "勝率換算係数には0より大きい値を指定してください。",
  inaccuracyThresholdMustBe1To100Percent: "緩手には1%～100%の値を指定してください。",
  dubiousThresholdMustBe1To100Percent: "疑問手には1%～100%の値を指定してください。",
  mistakeThresholdMustBe1To100Percent: "悪手には1%～100%の閾値を指定してください。",
  blunderThresholdMustBe1To100Percent: "大悪手には1%～100%の値を指定してください。",
  recordSavedWithGarbledCharacters: "保存した棋譜の一部が文字化けしている可能性があります。",
  pleaseConsiderToUseKIFU: "KIFU形式(UTF-8)で保存することをお勧めします。",
  youCanChangeDefaultRecordFileFormatFromAppSettings:
    "デフォルトの棋譜形式はアプリ設定で変更可能です。",
  inaccuracyThresholdMustBeLessThanDubiousThreshold:
    "緩手には疑問手より小さい値を指定してください。",
  dubiousThresholdMustBeLessThanMistakeThreshold: "疑問手には悪手より小さい値を指定してください。",
  mistakeThresholdMustBeLessThanBlunderThreshold: "悪手には大悪手より小さい値を指定してください。",
  thisEngineNotSupportsMateSearch: "このエンジンは詰将棋探索をサポートしていません。",
  pleaseEndActiveFeaturesBeforeOpenRecord: "棋譜を開くには現在利用している機能を終了してください。",
  bothTimeLimitAndByoyomiAreNotSet: "持ち時間と秒読みが両方とも0です。",
  canNotUseByoyomiWithFischer: "秒読みとフィッシャールールは併用できません。",
  protocolVersionNotSelected: "プロトコルのバージョンを選択してください。",
  hostNameIsEmpty: "ホスト名が空です。",
  invalidPortNumber: "無効なポート番号です。",
  idIsEmpty: "IDが空です。",
  idContainsSpace: "IDに空白が含まれています。",
  passwordContainsSpace: "パスワードに空白が含まれています。",
  tcpKeepaliveInitialDelayMustBePositive:
    "TCP Keepaliveの初期遅延時間には正の値を指定してください。",
  blankLinePingInitialDelayMustBeGreaterThanOrEqualTo30:
    "空行送信の初期遅延時間には30秒以上を指定してください。",
  blankLinePingIntervalMustBeGreaterThanOrEqualTo30:
    "空行送信の間隔には30秒以上を指定してください。",
  engineNotSelected: "エンジンが選択されていません。",
  forExportingConversionLogPleaseEnableAppLogsAndSetLogLevelDebugAndRestart:
    "変換ログを出力するにはアプリログを有効にし、ログレベルをデバッグに設定してアプリを再起動してください。",
  sourceDirectoryNotSpecified: "入力ディレクトリが指定されていません。",
  sourceFormatsNotSpecified: "入力の対象フォーマットが指定されていません。",
  destinationDirectoryNotSpecified: "出力ディレクトリが指定されていません。",
  destinationFileNotSpecified: "出力ファイルが指定されていません。",
  totalNumber: (n: number) => `合計 ${n} 件`,
  number: (n: number) => `${n} 件`,
  tryToReloginToCSAServerNSecondsLater: (n) => `CSAサーバーへのログインを${n}秒後に再試行します。`,
  mateInNPlyDoYouWantToDisplay: (n) => `${n}手で詰みました。再生画面を表示しますか？`,
  insertedNMovesToRecord: (n: number) => `${n}手を棋譜に挿入しました。`,
  errorsOccurred: (n) => `${n} 種類のエラーが発生しました。`,
  between: (a, b) => `${a} から ${b} まで`,
  addNthEngine: (n) => `${n} 個目のエンジンを追加`,
  copyOf: (name) => `${name} のコピー`,
  keepLatest: (n) => `最新${n}件まで`,
  followingDataNotSavedBecauseNotSupporetedBy: (fileFormat: string) =>
    `以下の情報は ${fileFormat} 形式では対応していないため保存されませんでした。`,
  areYouSureWantToDeleteFollowingMove: (n) => `${n}手目以降を削除します。よろしいですか？`,
  failedToOpenDirectory: (path) => `ファイルの場所を開けませんでした: ${path}`,
  unexpectedEventSenderPleaseReport(sender) {
    return `予期せぬイベントの送信元です。このエラーメッセージを開発者に報告してください。 [${sender}]`;
  },
  unexpectedHTTPMethodPleaseReport(method) {
    return `予期せぬHTTPメソッドです。このエラーメッセージを開発者に報告してください。 [${method}]`;
  },
  unexpectedRequestURLPleaseReport(url) {
    return `予期せぬURLへのリクエストです。このエラーメッセージを開発者に報告してください。 [${url}]`;
  },
  noResponseFromEnginePleaseExtendTimeout(seconds) {
    return `${seconds}秒以内にエンジンから応答がありませんでした。エンジンの起動が重い場合はアプリ設定で待ち時間を延長してください。`;
  },
  stableVersionReleased(version: string) {
    return `安定版 ${version} がリリースされました！`;
  },
  latestVersionReleased(version: string) {
    return `最新版 ${version} がリリースされました！`;
  },
};
