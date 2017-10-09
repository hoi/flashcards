const CARDS = [
  {
    "no": 1,
    "point_no": 1,
    "japanese": "この池は冬には凍る。",
    "english": "This pond freezes in the winter.",
    "note": "最も基本的な形。「∼は」にあたる this pond を主語に決めたら，述語動詞の freeze に３単現の -s が必要かどうかを考える。修飾語句の「冬には」は〈in the winter〉として文末に置く。この the はつけなくてもよい。"
  },
  {
    "no": 2,
    "point_no": 1,
    "japanese": "その２人の子は似た顔をしている。",
    "english": "The two children look alike.",
    "note": "〈be alike〉で「似ている」という意味を表すが，ここでは，「似た顔をしている」というのだから，look を使って，The two children look alike. とするのがよい。look 自身が第２文型の動詞だから，are look alike としないこと。"
  },
  {
    "no": 3,
    "point_no": 1,
    "japanese": "水中に住んでいる虫は多い。",
    "english": "Many insects live in water.",
    "note": "「∼は多い」などと言うときは，「多くの∼が」という形にして， これを主語にすれば，〈∼ are many〉などという形を避けることができる。「∼と言う人もいる」などであれば，Some people say … . とすればよい。"
  },
  {
    "no": 4,
    "point_no": 1,
    "japanese": "上手な英語を書くことはそう容易ではない。",
    "english": "Writing good English is not so easy.",
    "note": "It is not so easy to write good English. でもよいが，このように動名詞を主語にしてみると，より簡潔な表現になる。"
  },
  {
    "no": 5,
    "point_no": 1,
    "japanese": "外にだれかいますか。",
    "english": "Is there anyone outside?",
    "note": "〈There is …〉構文では，there は主語ではないが，疑問文は Is there …? となる。外に「だれかがいる」なら，There is someone outside. になる。"
  },
  {
    "no": 6,
    "point_no": 1,
    "japanese": "秋になると木の葉は赤くなる。",
    "english": "Leaves turn red in fall.",
    "note": "When … . などとしなくても，このように簡潔に書ける。こういう文では，主語の leaves は冠詞をつけない複数形が一番よい。「∼になる」というのにはいろいろな言い方があり，覚えておくとよい（→p.8）。"
  },
  {
    "no": 7,
    "point_no": 1,
    "japanese": "その小屋で眠るのは難しかった。",
    "english": "I found it difficult to sleep in the hut.",
    "note": "この find の使い方に慣れること（→p.4 H.H.1）。「眠ろうとしてみたけれども，なかなか寝つけなかった」を find で表すことを知っておくと便利。"
  },
  {
    "no": 8,
    "point_no": 1,
    "japanese": "角を曲がった所にレストランがある。",
    "english": "There is a restaurant around the corner.",
    "note": "〈There is …〉構文だから，主語に the でなく，a をつけるのがポイント。\n「角を曲がった所に」は，前置詞の around を使って，〈around the corner〉という形で表せる。"
  },
  {
    "no": 9,
    "point_no": 1,
    "japanese": "その知らせを聞いて，アンは幸せな気分になった。",
    "english": "The news made Ann happy.",
    "note": "このように無生物を主語にすると，文が簡潔になり，When などで始めると文が長くなる。こうした無生物主語の構文に慣れること（→p.361）。"
  },
  {
    "no": 10,
    "point_no": 1,
    "japanese": "彼は私に朝食を作ってくれた。",
    "english": "He cooked me breakfast.",
    "note": "cook は二重目的語をとる動詞であることを考える。He cooked breakfast for me. でもよい。強調したいほうを後ろに置くのがふつう（→p.11）。"
  },
  {
    "no": 11,
    "point_no": 1,
    "japanese": "卵は固くゆでなさい。",
    "english": "Boil the eggs hard.",
    "note": "こうした〈S ＋ V ＋ O ＋ C〉は，「ゆでた結果固くなる」などのような意味を表すときに便利である。「ドアを白く塗る」なら paint the door white のようになる。"
  },
  {
    "no": 12,
    "point_no": 1,
    "japanese": "その本は机の上にある。",
    "english": "The book is on the desk.",
    "note": "「その本」と特定されているから， There is the book … . ということはできないことに注意。"
  },
  {
    "no": 13,
    "point_no": 1,
    "japanese": "だれか窓を開けなさい。",
    "english": "Someone open the window.",
    "note": "命令文の前に，このように主語を置くこともできる。ほかの形ではこうした意味はなかなか表せない。"
  },
  {
    "no": 14,
    "point_no": 1,
    "japanese": "この理論は広く受け入れられているようだ。",
    "english": "It seems that this theory is widely accepted.",
    "note": "This theory seems to be widely accepted. としてもよい。"
  },
  {
    "no": 15,
    "point_no": 1,
    "japanese": "この毛布は柔らかい感じだ。",
    "english": "This blanket feels soft.",
    "note": "感覚を表す動詞（look, smell, sound, taste など）は第２文型によく用いる（→p.9）。"
  },
  {
    "no": 16,
    "point_no": 1,
    "japanese": "今夜映画を見に行こう。",
    "english": "Let's go to the movies tonight.",
    "note": "Let's ∼「∼しよう」の表現に慣れること。この後に付加疑問をつけるなら，〈, shall we?〉をつければよい。「映画を見に行く」は〈go to a movie〉でもよい。"
  },
  {
    "no": 17,
    "point_no": 1,
    "japanese": "彼の父親は若くして死んだ。",
    "english": "His father died young.",
    "note": "「死んだときに若かった」というこの形に注意（→p.5）。"
  },
  {
    "no": 18,
    "point_no": 2,
    "japanese": "お手洗いをお借りできますか。",
    "english": "Can I use your bathroom?",
    "note": "移動できないものを借りる場合は，「借りる」に use を使う。「電話」の場合は use でも borrow でもよい。"
  },
  {
    "no": 19,
    "point_no": 2,
    "japanese": "昨夜はいい夢を見た。",
    "english": "I had a nice dream last night.",
    "note": "「夢を見る」を〈see a dream〉としないこと。また，have a nice dream の a を忘れないように。"
  },
  {
    "no": 20,
    "point_no": 2,
    "japanese": "我々は新しい計画について論じ合った。",
    "english": "We discussed the new plan.",
    "note": "discuss は他動詞だから，about を入れない。自動詞と間違えやすい他動詞の頻出語は限られており，覚えておくとよい（→p.32）。"
  },
  {
    "no": 21,
    "point_no": 2,
    "japanese": "私は遅れたことを彼女にわびた。",
    "english": "I apologized to her for being late.",
    "note": "apologize は自動詞だから，謝罪する相手の前に to を入れる。"
  },
  {
    "no": 22,
    "point_no": 2,
    "japanese": "彼女はハワイで彼と結婚した。",
    "english": "She married him in Hawaii.",
    "note": "marry は他動詞だから with を入れない。「∼と結婚している」は〈be married to ∼〉。"
  },
  {
    "no": 23,
    "point_no": 2,
    "japanese": "我々の車はその町に近づいた。",
    "english": "Our car approached the town.",
    "note": "approach は他動詞だから，to を入れないこと。"
  },
  {
    "no": 24,
    "point_no": 2,
    "japanese": "黒板に円を描きなさい。",
    "english": "Draw a circle on the blackboard.",
    "note": "円でも１つの絵だから，write は使わない。線で描くのも draw だということを覚えておく。"
  },
  {
    "no": 25,
    "point_no": 2,
    "japanese": "傘を持ってくるのを忘れた。",
    "english": "I forgot my umbrella.",
    "note": "「持ってくるのを忘れる」なら forget を使う。ある場所に置き忘れる場合には leave を使う。\n「車の中に傘を置き忘れた」なら，I left my umbrella in the car. のように言う。"
  },
  {
    "no": 26,
    "point_no": 2,
    "japanese": "我々はケーブルカーでその山を登った。",
    "english": "We went up the mountain on the cable car.",
    "note": "climb は手足を使って登る場合に用いる。また，乗り物に使う前置詞は，自然に運ばれていくという感じのときには on を使うのがふつう。"
  },
  {
    "no": 27,
    "point_no": 2,
    "japanese": "その新しい法律に反対する人がたくさんいた。",
    "english": "A lot of people opposed the new law.",
    "note": "oppose は他動詞だから，to は入れない。object なら to が必要である。"
  },
  {
    "no": 28,
    "point_no": 2,
    "japanese": "ここからエンパイア・ステート・ビルが見えます。",
    "english": "You can see the Empire State Building from here.",
    "note": "知覚動詞の see や hear は，この例のように，「見える」や「聞こえる」を表すときに can をつけて表現することが多い。また，日本語では「見えている」や「聞こえている」という場合でも，see や hear は進行形にならない。"
  },
  {
    "no": 29,
    "point_no": 2,
    "japanese": "本を元の場所に戻しておきなさい。",
    "english": "Put the book back where it was.",
    "note": "put back のような句動詞を使うときには，その動詞（ここでは put）が他動詞で目的語を間に挟むことができるかどうかを確認する。この文では Put back the book としてもよい。"
  },
  {
    "no": 30,
    "point_no": 2,
    "japanese": "彼女はひどい風邪を引いている。",
    "english": "She has a bad cold.",
    "note": "「風邪を引いている」は，have a cold という。「風邪を引く」〈catch (a) cold〉の a はあってもなくてもよい。"
  },
  {
    "no": 31,
    "point_no": 2,
    "japanese": "明日お会いしに行きます。",
    "english": "I'll come to see you tomorrow.",
    "note": "相手の所に行くのも go ではなく come を使う。come to see の代わりに come and see というくだけた言い方もある。"
  },
  {
    "no": 32,
    "point_no": 2,
    "japanese": "私は英語を学ぶあらゆる機会を利用してきた。",
    "english": "I have availed myself of every opportunity to learn English.",
    "note": "常に oneself を目的語にとる動詞を覚えておく（→p.37）。"
  },
  {
    "no": 33,
    "point_no": 2,
    "japanese": "私は息子が夜外出するのを許しておくつもりはない。",
    "english": "I won't have my son going out at night.",
    "note": "〈have ＋ 目的語 ＋ 現在分詞〉を I won't … . のような否定文に続けると，「∼させておくわけにはいかない」という意味を表す（→p.39, p.164）。"
  },
  {
    "no": 34,
    "point_no": 3,
    "japanese": "彼女は石油会社に勤めている。",
    "english": "She works for an oil company.",
    "note": "She is working … . としないこと。「彼女は石油会社の社員である」という意味。"
  },
  {
    "no": 35,
    "point_no": 3,
    "japanese": "彼は明日の朝はこの事務所におります。",
    "english": "He will be in this office tomorrow morning.",
    "note": "和文では，「∼におります」となっているが，「明日の朝」の話だから，未来形にする。"
  },
  {
    "no": 36,
    "point_no": 3,
    "japanese": "野生動物公園に行ったことがありますか。",
    "english": "Have you ever been to a wildlife park?",
    "note": "been でなく，〈Have you ever gone …?〉でもよい。"
  },
  {
    "no": 37,
    "point_no": 3,
    "japanese": "このノートパソコンを使うのはこれが初めてです。",
    "english": "This is the first time I have ever used this laptop.",
    "note": "〈This is the first time … have ever ＋ 過去分詞〉の形を覚えておくこと（→p.62）。"
  },
  {
    "no": 38,
    "point_no": 3,
    "japanese": "早めに来てくれれば手伝ってあげます。",
    "english": "I will help you if you come early.",
    "note": "時や条件を表す副詞節の中では，未来のことでも現在形で書く。したがって，if 節の中の動詞 come は現在形。"
  },
  {
    "no": 39,
    "point_no": 3,
    "japanese": "私たちは来年の夏にパリを訪れます。",
    "english": "We are visiting Paris next summer.",
    "note": "予定として決めている場合には現在進行形を使うことが多い。"
  },
  {
    "no": 40,
    "point_no": 3,
    "japanese": "列車は私たちが着く前にもう出てしまった。",
    "english": "The train had already left before we arrived.",
    "note": "着く前にもう出てしまったというのだから，already を使って過去完了にする。"
  },
  {
    "no": 41,
    "point_no": 3,
    "japanese": "最後に君が彼に会ったのはいつですか。",
    "english": "When did you see him last?",
    "note": "I saw him a week ago. のような答えを考えれば，単純過去がよいことがわかる。"
  },
  {
    "no": 42,
    "point_no": 3,
    "japanese": "彼はいつも愚痴ばかり言う。",
    "english": "He is always complaining.",
    "note": "「いつも∼ばかりしている」は，always を入れて現在進行形を使うとよい。"
  },
  {
    "no": 43,
    "point_no": 3,
    "japanese": "妻はこのごろ気難しい。",
    "english": "My wife is being difficult lately.",
    "note": "lately は，ふつう現在完了形と用いるが，このように習慣的な行為を表すときには，現在進行形の文で用いることもよくある。"
  },
  {
    "no": 44,
    "point_no": 3,
    "japanese": "今年はクリスマスは月曜に当たる。",
    "english": "Christmas falls on Monday this year.",
    "note": "未来のことでも，現在もう決まっていることは現在形で表すことが多い。"
  },
  {
    "no": 45,
    "point_no": 3,
    "japanese": "今日の午後あなたのノートパソコンをお使いでしょうか。",
    "english": "Will you be using your laptop this afternoon?",
    "note": "Will you be using …? は，相手の予定を聞く形で，実際には「貸してほしいのですが」という間接的な依頼。"
  },
  {
    "no": 46,
    "point_no": 3,
    "japanese": "私は熱帯雨林を長年研究してきました。",
    "english": "I have studied rainforests for many years.",
    "note": "I have been studying … . としてもよいが，期間を表す語句を用いれば，進行形にしなくてもよい（→p.70 31A(2)）。"
  },
  {
    "no": 47,
    "point_no": 4,
    "japanese": "どんな名医でもミスを犯すことはあり得る。",
    "english": "Even the best doctors can make a mistake.",
    "note": "この can は「可能性」があることを示している。「能力」を表す can と区別することが大切。"
  },
  {
    "no": 48,
    "point_no": 4,
    "japanese": "それはそんなに重要だったはずがない。",
    "english": "It cannot have been that important.",
    "note": "「だったはずがない」は〈cannot have been …〉で表す。that は「そんなに」という意味の副詞として使う。"
  },
  {
    "no": 49,
    "point_no": 4,
    "japanese": "すべての生き物は老いていかなければならない。",
    "english": "Every creature must get old.",
    "note": "「∼しなければならない」を must で表すと，改まった感じの表現になる。"
  },
  {
    "no": 50,
    "point_no": 4,
    "japanese": "この薬は眠気を催させるかもしれない。",
    "english": "This medicine might make you drowsy.",
    "note": "「∼かもしれない」の場合，might よりも may のほうがいささか改まった感じになる。"
  },
  {
    "no": 51,
    "point_no": 4,
    "japanese": "人はうわさをするものだ。",
    "english": "People will talk.",
    "note": "will は，このように習性を表すためにもよく使う。"
  },
  {
    "no": 52,
    "point_no": 4,
    "japanese": "この言葉を使うのをやめるべきでしょうか。",
    "english": "Do you think we ought to stop using this term?",
    "note": "should のほうが，やや柔らかい表現になる。"
  },
  {
    "no": 53,
    "point_no": 4,
    "japanese": "私の質問にお答えいただけるとありがたいのですが。",
    "english": "I would appreciate it if you would answer my question.",
    "note": "「依頼」を表すときによく使う丁寧な言い方なので，この表現はぜひ覚えておきたい。if を使っているので，よく appreciate の次の it を落とすことがあるため注意。"
  },
  {
    "no": 54,
    "point_no": 4,
    "japanese": "できればそのようなことはしていただきたくないのですが。",
    "english": "I would rather you didn't do that sort of thing.",
    "note": "丁寧な頼み方。would rather に not を入れた形は，相手の頼みを控えめに断るときにも用いる。従位節中の動詞は過去形になる（→p.94）。"
  },
  {
    "no": 55,
    "point_no": 4,
    "japanese": "コーヒーを入れましょうか。",
    "english": "Shall I make some coffee?",
    "note": "「∼しましょうか」と申し出るときに，Shall I …? をよく使う。"
  },
  {
    "no": 56,
    "point_no": 4,
    "japanese": "願書は昨日までに提出すべきだったのに。",
    "english": "You should have submitted your application by yesterday.",
    "note": "「∼すべきだったのに（しなかった）」は〈should have ＋ 過去分詞〉。"
  },
  {
    "no": 57,
    "point_no": 4,
    "japanese": "詳しく述べる必要がありますか。",
    "english": "Need I go into details?",
    "note": "このように，need は否定文のほかに疑問文でも助動詞として使え，こういう形は簡潔でよい。"
  },
  {
    "no": 58,
    "point_no": 4,
    "japanese": "今夜は雪になるはずがない。",
    "english": "It couldn't snow tonight.",
    "note": "「∼するはずがない」は couldn't を使えばよい。"
  },
  {
    "no": 59,
    "point_no": 5,
    "japanese": "この城は４世紀に造られたものである。",
    "english": "This castle was built in the 4th century.",
    "note": "動作主がわからない場合，あるいは動作主を話題にする意味が特にない場合には，受動態を用いることが多い。"
  },
  {
    "no": 60,
    "point_no": 5,
    "japanese": "まだ研究されていないものが多い。",
    "english": "Much remains to be studied.",
    "note": "この形は論文などによく使う決まった形である。"
  },
  {
    "no": 61,
    "point_no": 5,
    "japanese": "運転者の不注意で引き起こされる事故が多い。",
    "english": "Lots of accidents are caused by careless driving.",
    "note": "「多くの事故は…」の形で書く。"
  },
  {
    "no": 62,
    "point_no": 5,
    "japanese": "この橋はあまり利用されていない。",
    "english": "This bridge is not used very often.",
    "note": "能動態で書くと，主語に they などを置くことになる。"
  },
  {
    "no": 63,
    "point_no": 5,
    "japanese": "私は昨夜自転車を盗まれた。",
    "english": "I had my bike stolen last night.",
    "note": "〈have ＋ 目的語 ＋ 過去分詞〉は，「Ａを∼される」という受動の意味にもなるし，「Ａを∼してもらう」という使役の意味にもなる。I was stolen my bike … . などとしないように注意。"
  },
  {
    "no": 64,
    "point_no": 5,
    "japanese": "戦後，彼は農業に従事していた。",
    "english": "After the war, he was engaged in farming.",
    "note": "engage は，このように，受動態で使うことが多い。"
  },
  {
    "no": 65,
    "point_no": 5,
    "japanese": "私は部屋を立ち退かされた。",
    "english": "I was made to leave the room.",
    "note": "使役動詞 make の受動態は〈be made to …〉になる。"
  },
  {
    "no": 66,
    "point_no": 5,
    "japanese": "その男は黒っぽい背広を着ていた。",
    "english": "The man was dressed in a dark business suit.",
    "note": "「着ている」は〈be dressed in〉で表す。"
  },
  {
    "no": 67,
    "point_no": 5,
    "japanese": "昨日その銀行は終日閉まっていた。",
    "english": "The bank was closed all day yesterday.",
    "note": "状態を表す受動態である。"
  },
  {
    "no": 68,
    "point_no": 5,
    "japanese": "その溶液は100℃で５時間熱せられた。",
    "english": "The solution was heated at 100°C for 5 hours.",
    "note": "実験のプロセスに重点を置く場合に受動態をよく使う。"
  },
  {
    "no": 69,
    "point_no": 5,
    "japanese": "アイスクリームは暑い日によく売れる。",
    "english": "Ice cream sells well on hot days.",
    "note": "能動受動態の代表的なもの。ここではアイスクリームは売られるものなのに，自動詞として使われている sell の主語になっている点がポイント。この種の動詞については別途参照（→p.119）。"
  },
  {
    "no": 70,
    "point_no": 5,
    "japanese": "何が議論されているのですか。",
    "english": "What is being discussed?",
    "note": "what を主語にした受動態の現在進行形である。"
  },
  {
    "no": 71,
    "point_no": 5,
    "japanese": "私は医者に体重を減らすように忠告された。",
    "english": "I was advised by the doctor to lose weight.",
    "note": "「医者に」を表す by the doctor は，文末か，リズムのよいように受動態の直後に置く。"
  },
  {
    "no": 72,
    "point_no": 5,
    "japanese": "スペースシャトルの打ち上げは少なくとも３ヶ月は延期される。",
    "english": "The launch of the space shuttle will be put off at least three months.",
    "note": "put off のように１つの他動詞に相当する句動詞は，そのまま受動態にする。「∼される」のは，これからの話なので，未来形になる。"
  },
  {
    "no": 73,
    "point_no": 5,
    "japanese": "その議論は長時間続き，テープに録音された。",
    "english": "The argument went on for a long time and was recorded on tape.",
    "note": "このように，同じ語が前の節で能動態の主語でありながら後の節では受動態の主語になる，という形の文は珍しくない。むろん，前の節は受動態，後の節は能動態，という逆の順もよくある。"
  },
  {
    "no": 74,
    "point_no": 5,
    "japanese": "この港は世界中に知られている。",
    "english": "This port is known to people all over the world.",
    "note": "単純に「（だれか）に知られている」は〈be known to (someone)〉でよい。意図的に知ろうとして知った場合には by を用いることが多い（→p.115）。"
  },
  {
    "no": 75,
    "point_no": 5,
    "japanese": "その地震と津波でたくさんの人が死んだ。",
    "english": "Many people were killed in the earthquake and tsunami.",
    "note": "災害や戦争などで死ぬというときには〈be killed〉を使うことが多いが，die を使ってもよい。"
  },
  {
    "no": 76,
    "point_no": 6,
    "japanese": "猫たちに毎日えさをやるのは 君の役目だよ。",
    "english": "It is your job to feed the cats daily.",
    "note": "to 不定詞を主語にするときには，It を先に出すのがふつう。"
  },
  {
    "no": 77,
    "point_no": 6,
    "japanese": "要点を見逃さないように気をつけます。",
    "english": "I will try not to miss the point.",
    "note": "「すること」の否定は not to でよい。"
  },
  {
    "no": 78,
    "point_no": 6,
    "japanese": "転ばないように気をつけて。",
    "english": "Be careful not to fall.",
    "note": "「∼しないように」は〈so as not to〉か〈in order not to〉だが，be careful や take care の場合には not to を使ってよい。"
  },
  {
    "no": 79,
    "point_no": 6,
    "japanese": "今日はすることが何もない。",
    "english": "There is nothing to do today.",
    "note": "nothing は to do の意味上の目的語になっている。\nThere is nothing to be done today. とすると，nothing は to be done の意味上の主語になる。"
  },
  {
    "no": 80,
    "point_no": 6,
    "japanese": "あなたはただここに署名をしさえすればよいのです。",
    "english": "All you have to do is sign your name here.",
    "note": "all は指すものが単数なら単数で受け，複数なら複数で受ける。また，all you have to do のように do を含んだ形を主語にするときには，sign の前の to は省略できる。"
  },
  {
    "no": 81,
    "point_no": 6,
    "japanese": "この文書をファックスで送ってもらいたい。",
    "english": "I want this document to be sent by fax.",
    "note": "〈want ＋ 目的語 ＋ to be done〉の形。"
  },
  {
    "no": 82,
    "point_no": 6,
    "japanese": "私には一緒に買い物に行く人がいない。",
    "english": "I have nobody to go shopping with.",
    "note": "with whom to go shopping や，with whom I might go shopping などと同じように with が必要。"
  },
  {
    "no": 83,
    "point_no": 6,
    "japanese": "私は仕事を探しにビジネス街へ行った。",
    "english": "I went downtown to look for a job.",
    "note": "「∼するために」は to だけでもよい。"
  },
  {
    "no": 84,
    "point_no": 6,
    "japanese": "その会社は労働力を海外で増やすより仕方がなかった。",
    "english": "The company had no choice but to increase the workforce overseas.",
    "note": "but と except は，前置詞だが to 不定詞の前につけることができる。"
  },
  {
    "no": 85,
    "point_no": 6,
    "japanese": "帰宅すると家が泥棒に入られていることがわかった。",
    "english": "I came home to find that my house had been broken into.",
    "note": "結果を表す to 不定詞。only to と言うことが多いが，ただ to でよい場合も多い。"
  },
  {
    "no": 86,
    "point_no": 6,
    "japanese": "働けるぐらいの年なら，できることはたくさんあるよ。",
    "english": "If you are old enough to work, there are a lot of things you can do.",
    "note": "こういう場合の「∼するのに十分な」の意味の〈enough to〉の使い方を知っておくと便利である。"
  },
  {
    "no": 87,
    "point_no": 6,
    "japanese": "忘れずにそれをしなければならない。",
    "english": "I must remember to do it.",
    "note": "「∼することを忘れてはいけない」ということ。"
  },
  {
    "no": 88,
    "point_no": 6,
    "japanese": "私は職場に近くなるように新しいアパートに引っ越した。",
    "english": "I moved to a new apartment so as to be near my work.",
    "note": "「（その結果）∼するように」は，so as to がふさわしい。"
  },
  {
    "no": 89,
    "point_no": 6,
    "japanese": "このソフトウェアの使い方を知りたい。",
    "english": "I want to learn how to use this software.",
    "note": "〈what to do〉，〈how to do〉などの〈疑問詞 ＋ to 不定詞〉の使い方に慣れること。"
  },
  {
    "no": 90,
    "point_no": 6,
    "japanese": "お昼までにそこに着くつもりなら，もう出発したほうがよい。",
    "english": "If you are to get there by lunchtime, you had better start now.",
    "note": "〈be to〉を If 節の中に使うと，「∼するつもりなら」という意味が表せる。"
  },
  {
    "no": 91,
    "point_no": 6,
    "japanese": "この問題を解決する方法はだれにもわからないようだ。",
    "english": "Nobody seems to know how to solve this problem.",
    "note": "It seems that nobody knows … . でも書けるが ，Nobody seems to know … . の形のほうが簡潔でよい。"
  },
  {
    "no": 92,
    "point_no": 6,
    "japanese": "彼は自分のことを天才だと思っている。",
    "english": "He believes himself to be a genius.",
    "note": "この形では，himself は省けない。"
  },
  {
    "no": 93,
    "point_no": 6,
    "japanese": "その消防士たちが燃えているビルの中に突入していったのは勇敢だった。",
    "english": "It was brave of the fire fighters to dash into the burning building.",
    "note": "「燃えているビルの中に突入していった」という行為を通して，その消防士たちの勇敢さを述べた形になる。the fire fighters を主語にして似た意味を表すこともできる（→p.142）。"
  },
  {
    "no": 94,
    "point_no": 6,
    "japanese": "上記の人物はウィスコンシン州の登録看護師であることを証明する。",
    "english": "This is to certify that the above-named person is a registered nurse in the State of Wisconsin.",
    "note": "証明書の決まり文句。"
  },
  {
    "no": 95,
    "point_no": 6,
    "japanese": "彼女は床が動くのを感じ，壁が揺れるのを見た。",
    "english": "She felt the floor move and saw the walls shake.",
    "note": "〈知覚動詞 ＋ 目的語 ＋ 原形不定詞〉で，「Ａが∼するのを見る［聞く，感じる］」などの構文を作る。"
  },
  {
    "no": 96,
    "point_no": 6,
    "japanese": "こうしたことは言わないほうがいい。",
    "english": "You had better not say these things.",
    "note": "「∼したほうがいい」は〈had better〉で表すが，「∼しないほうがいい」というときには，not は原形不定詞の直前に置く。"
  },
  {
    "no": 97,
    "point_no": 7,
    "japanese": "同じ質問がずっとなされた。",
    "english": "The same question kept being asked.",
    "note": "分詞の受動態に注意。"
  },
  {
    "no": 98,
    "point_no": 7,
    "japanese": "私は河口でイルカがボートを追跡しているところを見た。",
    "english": "I saw a dolphin chasing a boat at the river mouth.",
    "note": "〈知覚動詞 ＋ 目的語 ＋ ∼ing〉の形。"
  },
  {
    "no": 99,
    "point_no": 7,
    "japanese": "彼は息子がビールを飲んでいるところを見つけた。",
    "english": "He caught his son drinking beer.",
    "note": "catch は知覚動詞ではないが，〈catch ＋ 目的語 ＋ ∼ing〉の形では，知覚動詞のように使われる。"
  },
  {
    "no": 100,
    "point_no": 7,
    "japanese": "食事時間だったので，食べている人が大勢いた。",
    "english": "It was dinner time, so there were many people eating.",
    "note": "many eating people とは言わない。ここでは，本来は他動詞として使われる eat の目的語になる food が省略されており，eating people とすると，people が eat の目的語になってしまうのである（→p.32）。"
  },
  {
    "no": 101,
    "point_no": 7,
    "japanese": "書き言葉は，話し言葉よりも改まった感じになるケースが多い。",
    "english": "Written language is often more formal than spoken language.",
    "note": "「書かれた言葉」，「話された言葉」はそれぞれ，written language, spoken language と言う。"
  },
  {
    "no": 102,
    "point_no": 7,
    "japanese": "２階の浴槽でお湯を流しっ放しにしておいてしまったのはだれだ。",
    "english": "Who left the water running in the upstairs bathtub?",
    "note": "単独の〈left ＋ 目的語 ＋ ∼ing〉の文では，「わざと∼しっ放しにしておいた」か，「うっかり∼しておいてしまった」かはあいまいだが，ふつう文脈でわかることである。"
  },
  {
    "no": 103,
    "point_no": 7,
    "japanese": "私は人に何かをしろと命令されたりするのが好きじゃない。",
    "english": "I don't like people telling me what to do.",
    "note": "〈like ＋ 目的語 ＋ ∼ing〉の形は，否定文に多い。"
  },
  {
    "no": 104,
    "point_no": 7,
    "japanese": "卵は焼いたのが好きです。",
    "english": "I like my eggs fried.",
    "note": "「コーヒーは濃いのが好きだ」なら，I like my coffee strong. となり，ここでは，fried が形容詞用法なので，それと同じ形である。"
  },
  {
    "no": 105,
    "point_no": 7,
    "japanese": "陽気に歌いながら，彼らは町の方に出かけた。",
    "english": "Singing merrily, they started towards town.",
    "note": "最も簡単な分詞構文。「∼しながら」という意味を表す動詞を現在分詞にして，文頭に置く。"
  },
  {
    "no": 106,
    "point_no": 7,
    "japanese": "私はベッドに横になっており，テレビを見ていた。",
    "english": "I was lying in bed, watching TV.",
    "note": "「横になる」という動作と，「テレビを見る」という動作が，同時に行われているわけで，こういうときは，つけ足すほうの動作を分詞にして，コンマを打って後に置くことが多い。"
  },
  {
    "no": 107,
    "point_no": 7,
    "japanese": "天候が許せば，早めに植えるということはそれなりの利点があります。",
    "english": "Early planting has its benefits, weather permitting.",
    "note": "〈weather permitting〉は，文末に置くことが多いが，必ずしもそうばかりではない。"
  },
  {
    "no": 108,
    "point_no": 7,
    "japanese": "ホリーは髪をなびかせながら，頭をくるりと回した。",
    "english": "Holly swung her head around, her hair flying through the air.",
    "note": "「頭をくるりと回した」のはホリーで，「なびいた」のは彼女の髪であるから，主節と従位節の主語が違う。そこで，分詞構文の flying のほうにその意味上の主語の her hair を置くことになるが，こういう独立分詞構文では，文の主語（Holly）の身体の一部とか持ち物が分詞の主語になる場合が多い。"
  },
  {
    "no": 109,
    "point_no": 7,
    "japanese": "彼は足を組んで座っていた。",
    "english": "He was seated with his legs crossed.",
    "note": "「Ａを∼しながら」は，このように with を使うと表現しやすい。特にこの形は頻出する。legs は cross される立場であるのだから，過去分詞になる。"
  },
  {
    "no": 110,
    "point_no": 7,
    "japanese": "年齢を考えると，彼の健康状態はすばらしいものだ。",
    "english": "Considering his age, his health has been remarkable.",
    "note": "独立分詞構文。〈considering ∼〉は，「∼を考慮すれば」という意味。"
  },
  {
    "no": 111,
    "point_no": 7,
    "japanese": "率直に言って，私はそのリストに自分の名前を見たくない。",
    "english": "Frankly speaking, I don't want to see my name on that list.",
    "note": "似た形としてほかに Generally speaking（一般的に言えば）などの言い方がある（→p.171）。"
  },
  {
    "no": 112,
    "point_no": 8,
    "japanese": "私はこのチームの一員だったことを誇りに思っています。",
    "english": "I am proud of having been part of this team.",
    "note": "〈be ＋ 形容詞 ＋ of 〉の後に動名詞が続く。この文は，「∼だったことを」となっているから，〈having been〉にすることを忘れないこと。 I'm proud that I was [have been] part of this team. でもよい。"
  },
  {
    "no": 113,
    "point_no": 8,
    "japanese": "彼は私が留学するようにと言ってきかなかった。",
    "english": "He insisted on my [me] studying abroad.",
    "note": "〈insist on ∼ing〉の on を忘れないこと。my と me では，my のほうが正式だが，やや堅苦しく，me のほうがふつうはよく使われる。"
  },
  {
    "no": 114,
    "point_no": 8,
    "japanese": "私は子供のころそのホテルに泊まったことを覚えている。",
    "english": "I remember staying at that hotel when I was a child.",
    "note": "〈remember ＋ to 不定詞〉は，「忘れずに∼する」の意味であり，〈remember ＋ ∼ing〉は，「∼したことを覚えている」という意味なので，使い分ける。"
  },
  {
    "no": 115,
    "point_no": 8,
    "japanese": "怒って叫んでも無駄だよ。",
    "english": "It is no use getting angry and shouting.",
    "note": "「∼しても無駄である［しょうがない］」は，〈it is no use ∼ ing〉で表すことが多い。〈no use〉の代わりに〈no good〉や〈no help〉，〈useless〉でもよい。また，〈There is no use [no good] (in) ∼ing〉という形もある。"
  },
  {
    "no": 116,
    "point_no": 8,
    "japanese": "ここでタバコを吸ってもよいですか。",
    "english": "Would you mind my [me] smoking here?",
    "note": "「∼してもかまいませんか」は〈Would you mind my ∼ing?〉で表す。この my を落とさないこと。my は目的格の me にしてもよい。Do you mind if I smoke here? とも言う。"
  },
  {
    "no": 117,
    "point_no": 8,
    "japanese": "私は評論家から攻撃されることに慣れている。",
    "english": "I am used to being attacked by critics.",
    "note": "「よく∼したものだ」は〈used to ＋ 不定詞〉であり，「∼することに慣れている」は〈be used to ＋ 動名詞〉なので，混同しないこと。また，〈be used to ＋ 動名詞〉の場合の to は前置詞であり，to 不定詞の to と混同しないこと。"
  },
  {
    "no": 118,
    "point_no": 8,
    "japanese": "あなたのＥメールを受け取るのを楽しみにしています。",
    "english": "I am looking forward to receiving your email message.",
    "note": "「∼を楽しみにしている」は〈be looking forward to ∼〉で，この to も前置詞だから，次には名詞か動名詞がくる。"
  },
  {
    "no": 119,
    "point_no": 8,
    "japanese": "タバコの吸いすぎは健康によくない。",
    "english": "Smoking too much is bad for your health.",
    "note": "It is bad for your health to smoke too much. にしてもよいが，動名詞を主語にしたほうが簡潔な表現になる。"
  },
  {
    "no": 120,
    "point_no": 8,
    "japanese": "歯医者に行く気はしない。",
    "english": "I don't feel like going to the dentist.",
    "note": "「∼したい気がする」は〈feel like ∼ing〉で表す。「∼したい気がしない」という場合は，〈don't feel like ∼ing〉の形で否定する。"
  },
  {
    "no": 121,
    "point_no": 9,
    "japanese": "彼は弁護士を呼ぶように要求した。",
    "english": "He demanded that his lawyer be called.",
    "note": "「要求する」の demand に続く that 節の中の動詞は，仮定法現在か〈should ＋ 原形〉になる。ここでも，that his lawyer should be called でもよい（→p.98）。"
  },
  {
    "no": 122,
    "point_no": 9,
    "japanese": "もし水がなかったら，木は緑ではないだろう。",
    "english": "If there were no water, the trees would not be green.",
    "note": "「もし水がなかったら」というのは，現在の事実に反する仮定だから，仮定法過去を用いて書く。Without water あるいは But for water でもよい。"
  },
  {
    "no": 123,
    "point_no": 9,
    "japanese": "１年中クリスマスだったらなあ。",
    "english": "I wish it were Christmas all the time.",
    "note": "あり得ない願望だから，〈I wish …〉の構文で書く。\nI hope (that) you feel better soon.（じきによくなられるとよいのですが）などの形で用いる hope と区別すること。"
  },
  {
    "no": 124,
    "point_no": 9,
    "japanese": "赤と黄色を混ぜれば，オレンジ色が得られる。",
    "english": "If you mix red and yellow, you get orange.",
    "note": "これは，ただ「こうすればこうなる」という，「時」に関係なくあり得る条件だから，直説法でよい。if の代わりに when でもよい。また，you will get orange とする必要もなく，get と現在形でよい。"
  },
  {
    "no": 125,
    "point_no": 9,
    "japanese": "もし行ってくださるのでしたら，必要なものは何でも差し上げます。",
    "english": "If you will go, I'll give you everything you need.",
    "note": "これは，「もしあなたにその意志がおありなら」という感じなので，〈If you will …〉とする。"
  },
  {
    "no": 126,
    "point_no": 9,
    "japanese": "もし宝くじが当たったら，仕事を辞めますか。",
    "english": "If you won the lottery, would you quit your job?",
    "note": "宝くじに実際当たる可能性は極めて低いので，仮定法で書く。\n仮定法過去は，「現在の事実に反する仮定」だけでなく，このように，現在や未来の（ありそうもない）ことの仮定にも使える。"
  },
  {
    "no": 127,
    "point_no": 9,
    "japanese": "もし今仕事中でなければ，君とマイアミビーチに行くのだが。",
    "english": "If I weren't at work now, I'd go to Miami Beach with you.",
    "note": "「今仕事中でなければ」というのは，明らかに今仕事をしているのだから，仮定法過去で書く。\nweren't の代わりに wasn't でもよいが，くだけた感じになる。"
  },
  {
    "no": 128,
    "point_no": 9,
    "japanese": "インターネットが突然機能しなくなったら，惨憺たる結果になるかもしれない。",
    "english": "If the Internet were to suddenly stop functioning, the result could be catastrophic.",
    "note": "ここでは，インターネットが実際突然機能しなくなってしまう可能性が極めて低いというつもりで言っているので，If the Internet were to stop, … . と言うが，その可能性が十分高いというつもりであれば， If the Internet stops, … . と言う。"
  },
  {
    "no": 129,
    "point_no": 9,
    "japanese": "万一あなたの小切手が不渡りになったらあなたは10ドルの手数料を取られる。",
    "english": "If your check should bounce, you will be charged a $10 fee.",
    "note": "「万一こういうことになったら」という場合には， If 節の中に should を入れる形がよい。\nこのように，If 節に should を用いた形では，帰結節中に，would でなく，will を用いることができる。"
  },
  {
    "no": 130,
    "point_no": 9,
    "japanese": "それがただの作り話ならなあ。",
    "english": "If only it were just a story!",
    "note": "「∼でさえあればいいのに」の意味では，If only をよく用いる。その場合，be 動詞は were にする。"
  },
  {
    "no": 131,
    "point_no": 9,
    "japanese": "もうそのことになんらかの手が打たれてもよいころだ。",
    "english": "It is (high) time something was done about it.",
    "note": "「もうそろそろ∼してもよいころだ（それなのにまだしていない）」というニュアンスがあるときには，〈It is time … ＋ 仮定法過去〉の形を使う。主語に現在形で is を用いる場合には，were でなく was を用いることが多い。"
  },
  {
    "no": 132,
    "point_no": 9,
    "japanese": "彼女は彼に以前会ったことが あるような気がした。",
    "english": "She felt as if she had seen him before.",
    "note": "〈as if …〉は，「まるで…であるかのように」の意味。動詞は，非事実であるときには，述語動詞の時制に関係なく，その時点での話なら仮定法過去，それ以前のことであれば仮定法過去完了を用いる。\n「彼は金持ちのようだ」のように「たぶん∼だろう」と思っていれば，He looks as if he is rich. と直説法を用いるので区別する。"
  },
  {
    "no": 133,
    "point_no": 9,
    "japanese": "もし私が君だったら，そんなことはしないね。",
    "english": "If I were you, I would not do that.",
    "note": "〈If I were you〉は，人に助言するときに使う決まり文句である。were を was にしないほうがよい。was だと，教養がないような印象を与えかねない。"
  },
  {
    "no": 134,
    "point_no": 10,
    "japanese": "仕事の進み具合はどうですか。",
    "english": "How is your work coming along?",
    "note": "これは文字どおり「どう？」だから How を使う。"
  },
  {
    "no": 135,
    "point_no": 10,
    "japanese": "私たちの新しいウェブサイトのデザインをどう思いますか。",
    "english": "What do you think of our new site design?",
    "note": "think の文でこの What を How とする間違いが一番多い。ただし，feel の文であれば，同じ「∼をどう思うか」を How do you feel about …? と How を使って言う。"
  },
  {
    "no": 136,
    "point_no": 10,
    "japanese": "春のモントリオールの天気はどんなものですか。",
    "english": "What is the weather like in Montreal in the spring?",
    "note": "「春の」と限定されているから，climate ではなく，weather がよい。「どんなものですか」は，〈What is the weather like …?〉と like を使うのが適切。"
  },
  {
    "no": 137,
    "point_no": 10,
    "japanese": "折り返しお電話するのは何時ごろがよろしいでしょうか。",
    "english": "When would be a good time to call you back?",
    "note": "What time でもよいが，会話ではこういうときには when を使うことが多い。"
  },
  {
    "no": 138,
    "point_no": 10,
    "japanese": "いつからこの国の住民になっているのですか。",
    "english": "Since when have you been a resident of this country?",
    "note": "「いつから」は〈since when〉で表す。"
  },
  {
    "no": 139,
    "point_no": 10,
    "japanese": "ここはどこですか。",
    "english": "Where are we? / Where am I?",
    "note": "Where is here? などとは言わないこと。"
  },
  {
    "no": 140,
    "point_no": 10,
    "japanese": "その企画はあとどのくらいで始まるのですか。",
    "english": "How soon will the project begin?",
    "note": "「あとどのくらいで」は How soon …? をよく用いる。これは決まった聞き方であり，覚えておくと便利。"
  },
  {
    "no": 141,
    "point_no": 10,
    "japanese": "シアトルでの生活はどうですか。",
    "english": "How do you like it in Seattle?",
    "note": "これも覚えておかないと，なかなか出てこない言い方である。it を忘れないこと。"
  },
  {
    "no": 142,
    "point_no": 10,
    "japanese": "日本の首都はどこですか。",
    "english": "What is the capital of Japan?",
    "note": "where を用いないこと。"
  },
  {
    "no": 143,
    "point_no": 10,
    "japanese": "私が昨日公園で見たものは何だと思いますか。",
    "english": "What do you think I saw in the park yesterday?",
    "note": "こういういわゆる間接疑問は，まずその答えに Yes / No が必要かどうかを考える。この場合は，必要ないから，疑問詞で始まる文にして，do you think を間に挟む。"
  },
  {
    "no": 144,
    "point_no": 10,
    "japanese": "彼はどこであの本を手に入れたのかしら。",
    "english": "I wonder where he got that book.",
    "note": "「∼かしら」という文には I wonder を使うのが多い。疑問符（ ? ）はつける必要はない。"
  },
  {
    "no": 145,
    "point_no": 11,
    "japanese": "その本を読んでみたが，とてもユーモラスだった。",
    "english": "I read the book and found it very humorous.",
    "note": "「∼したが」と言っても，英語で考えると，「読んでみたら（その結果）∼だった」というのだから， but ではなく and を使う。"
  },
  {
    "no": 146,
    "point_no": 11,
    "japanese": "彼はその木に登ろうとしたが失敗した。",
    "english": "He tried to climb the tree, but failed.",
    "note": "その木に登ろうとした結果「しかし失敗した」というのだから，これは but になる。"
  },
  {
    "no": 147,
    "point_no": 11,
    "japanese": "もう一度クリックすれば，詳細が表示されます。",
    "english": "One more click, and you'll get the details.",
    "note": "Click once more, and you'll get the details. や， If you click one more time, you'll get the details. などにしてもよい。"
  },
  {
    "no": 148,
    "point_no": 11,
    "japanese": "その音はだんだん大きくなった。",
    "english": "The noise grew louder and louder.",
    "note": "「だんだん∼になる」は〈比較級 ＋ 比較級〉で表せばよい。"
  },
  {
    "no": 149,
    "point_no": 11,
    "japanese": "彼はだれをも好きにならないし，信用もしない。",
    "english": "He doesn't like nor trust anyone.",
    "note": "「ＡもＢも∼ない」というときには，〈neither A nor B〉がふつうだが，前に neither でなく not を用いるときには，後ろは nor の代わりに or でもよい。この文の場合も，nor を or にしてもよい。"
  },
  {
    "no": 150,
    "point_no": 11,
    "japanese": "サケは淡水でも海水でも生きられる。",
    "english": "Salmon can live in both fresh and salt water.",
    "note": "and などの等位接続詞を使うときには，〈A and B〉のＡとＢを文法上対等なものにすることに注意。この場合は，fresh と salt でどちらも water にかかる形容詞。"
  },
  {
    "no": 151,
    "point_no": 11,
    "japanese": "買いなさい，さもないと後悔しますよ。",
    "english": "Buy it, or you'll be sorry.",
    "note": "〈命令文 ＋ or …〉は「∼しなさい，さもないと…」の意味になる。"
  },
  {
    "no": 152,
    "point_no": 11,
    "japanese": "私はこれをやる気はないし，それにとても疲れている。",
    "english": "I don't feel like doing this; besides, I am very tired.",
    "note": "「その上」は besides と s がつくのに注意。このように等位接続詞を使わずに besides などを用いるときには，セミコロンを置く（→p.231）。"
  },
  {
    "no": 153,
    "point_no": 11,
    "japanese": "彼が日本人であるということは問題ではない。",
    "english": "It doesn't matter that he is Japanese.",
    "note": "That he is Japanese doesn't matter. でもよいが，It ∼ that … . の形のほうが多い。"
  },
  {
    "no": 154,
    "point_no": 11,
    "japanese": "私はこの制限は厳しすぎると思う。",
    "english": "I think (that) this limitation is too restrictive.",
    "note": "会話の場合，that はふつう省略する。"
  },
  {
    "no": 155,
    "point_no": 11,
    "japanese": "同封のお知らせがお役に立つとよいのですが。",
    "english": "I hope (that) you find the enclosed information to be useful.",
    "note": "hope に続く that 節中の動詞は，未来形にしないことが多い。"
  },
  {
    "no": 156,
    "point_no": 11,
    "japanese": "２つの出来事が関係あるかどうかはわからない。",
    "english": "Whether the two incidents are related is unknown.",
    "note": "It is unknown whether … . としてもよい。It is … . の形なら whether の代わりに if を使えるが，上例のように文頭に出すと if は使えない。"
  },
  {
    "no": 157,
    "point_no": 11,
    "japanese": "彼は，彼女がだれかに何が起きたかを話しはしないかと心配していた。",
    "english": "He worried (that) she might tell someone what had happened.",
    "note": "lest she (should) tell … とも言えるが，文語調になる。"
  },
  {
    "no": 158,
    "point_no": 11,
    "japanese": "私が立ち去ろうとしたとき，彼らはまた議論をし始めた。",
    "english": "I was about to leave when they started to argue again.",
    "note": "〈be about to ∼ when …〉という語順に注意。"
  },
  {
    "no": 159,
    "point_no": 11,
    "japanese": "私たちは雨が降り出す前にそこに着いた。",
    "english": "We got there before it started raining.",
    "note": "before で時の前後関係はわかるから，過去完了を用いなくてもよい。"
  },
  {
    "no": 160,
    "point_no": 11,
    "japanese": "忘れないうちに今注文しなさい。",
    "english": "Order now before you forget.",
    "note": "「∼しないうちに」に引かれて，not を入れないこと。"
  },
  {
    "no": 161,
    "point_no": 11,
    "japanese": "彼がノーベル平和賞を受賞してから10年になる。",
    "english": "Ten years have passed since he won the Nobel Peace Prize.",
    "note": "It has been ten years since he won the Nobel Peace Prize. としてもよい。"
  },
  {
    "no": 162,
    "point_no": 11,
    "japanese": "家に着いたらすぐにそれをお送りします。",
    "english": "As soon as I get home, I'll send it to you.",
    "note": "「∼するとすぐに」は〈as soon as ∼〉を使うのが最もふつうで無難。"
  },
  {
    "no": 163,
    "point_no": 11,
    "japanese": "彼はすごく忙しくて，朝はほとんど食事をする暇がない。",
    "english": "Since he is so busy, he doesn't have time to eat breakfast most mornings.",
    "note": "聞き手もわかっているだろうと思われる理由は，since や as を使って前に出すとよい。as より since のほうが多い。理由を特に新しい情報として意識しているときには，because を使って後に置くことが多い。"
  },
  {
    "no": 164,
    "point_no": 11,
    "japanese": "容易に連絡が取れるように，私のＥメールアドレスを教えておきましょう。",
    "english": "I'll give you my e-mail address so (that) you can easily contact me.",
    "note": "〈so that A can …〉の that は省略することが多い。"
  },
  {
    "no": 165,
    "point_no": 11,
    "japanese": "雨が降るかもしれないので，傘を持って行きます。",
    "english": "I'll take an umbrella in case it rains.",
    "note": "「∼する場合に備えて」の意味では in case を用いる。"
  },
  {
    "no": 166,
    "point_no": 11,
    "japanese": "爆発はあまりにも小さくて，だれ一人気づきもしなかった。",
    "english": "The explosion was so small that no one even noticed it.",
    "note": "「あまり∼なので…」には〈so ∼ that …〉の構文を用\nいる。"
  },
  {
    "no": 167,
    "point_no": 11,
    "japanese": "このボックスをチェックしなければ先へ進めません。",
    "english": "Unless you check this box, you will not be allowed to proceed.",
    "note": "「∼しない限り」という意味があれば unless が使える。"
  },
  {
    "no": 168,
    "point_no": 11,
    "japanese": "たとえ時代遅れだとしても，それは役に立つ案内書だ。",
    "english": "It is a useful guide, even if it is somewhat out of date.",
    "note": "even を使わないただの if にもこうした用法があるが，even if とすることによって，「たとえ∼だとしても」の意味が強まる。guide だけで「案内書」の意味がある。"
  },
  {
    "no": 169,
    "point_no": 11,
    "japanese": "中性紙でさえあれば，どんな紙でも結構です。",
    "english": "Any paper will do as long as it is acid free.",
    "note": "「∼である限り」は〈as long as〉を使うとよい。〈Any A will do.〉（どんなＡでも結構です）という言い方を覚えておく。"
  },
  {
    "no": 170,
    "point_no": 12,
    "japanese": "出席したい学生はだれでも歓迎します。",
    "english": "Any student who [that] wants to attend is welcome.",
    "note": "any で書き始めて，who または that を用いる。節内の動詞は単数現在形。"
  },
  {
    "no": 171,
    "point_no": 12,
    "japanese": "私の勤めていた会社が倒産した。",
    "english": "The company (which [that]) I worked for went bankrupt.",
    "note": "〈I work for …〉の形の応用で，for which I worked の for を後ろに回した文である。which [that] を省略してもよい。"
  },
  {
    "no": 172,
    "point_no": 12,
    "japanese": "太陽から４番目の惑星である火星は，「赤い惑星」と呼ばれる。",
    "english": "Mars, which is the 4th planet from the sun, is referred to as \"the Red Planet.\"",
    "note": "１つ［１人］しか存在しないものは，さらに限定する必要がないので，コンマを打って，関係詞を非制限用法で使う。この文も，「太陽から４番目と何番目かにある火星のうちで，４番目にあるほうの火星」というのではなく，「火星は，太陽から４番目にある惑星であるが」というように，挿入的な感じで使われている。"
  },
  {
    "no": 173,
    "point_no": 12,
    "japanese": "警察は３人の人間を逮捕したが，中の１人が誘拐者だと確認された。",
    "english": "The police arrested three people, one of whom was identified as the kidnapper.",
    "note": "〈one of whom〉のような形では，whom を who にすることはできない。"
  },
  {
    "no": 174,
    "point_no": 12,
    "japanese": "一例として，これが私の利用しているシステムです。",
    "english": "As an example, this is the system I use.",
    "note": "the system which [that] I use だが，目的格の関係代名詞は省略することが多い。\nfor example（たとえば）の場合には a がつかないことに注意。"
  },
  {
    "no": 175,
    "point_no": 12,
    "japanese": "ここに君が探しているファイルがある。",
    "english": "Here are the files you are looking for.",
    "note": "the files の次の関係代名詞の which または that は，前置詞の for の目的語になっている。このように，前置詞を文末に回して，関係代名詞は省略することが多い。"
  },
  {
    "no": 176,
    "point_no": 12,
    "japanese": "これが彼が君について書いたものだ。",
    "english": "This is what he wrote about you.",
    "note": "「∼したもの」などという場合には what が適している。"
  },
  {
    "no": 177,
    "point_no": 12,
    "japanese": "私が愚かだと思う人は，この１節を書いた人だけだ。",
    "english": "The only person (who [that]) I think is stupid is the author of this passage.",
    "note": "関係代名詞の直後に，〈I think〉などが挿入されると，その関係代名詞は主格でも省略できる。ここでは，who または that が省略されている。"
  },
  {
    "no": 178,
    "point_no": 12,
    "japanese": "私が住んでいる所は海に近い。",
    "english": "The place I live is close to the ocean.",
    "note": "先行詞が (the) place のときだけ，関係副詞の where は省略できる。"
  },
  {
    "no": 179,
    "point_no": 12,
    "japanese": "私はふだんこのようにして皿洗いをしています。",
    "english": "This is the way (that) I usually wash dishes.",
    "note": "〈the way how …〉としないことがポイント。the way だけか，the way in which ならよい（→p.281）。"
  },
  {
    "no": 180,
    "point_no": 12,
    "japanese": "これを読む人はだれでもきっとびっくりするだろう。",
    "english": "Whoever reads this will surely be surprised.",
    "note": "「∼する人はだれでも」には whoever が適切。Anyone who reads … . としてもよい。"
  },
  {
    "no": 181,
    "point_no": 12,
    "japanese": "彼は自分が医者だというふりをしていたが，事実ではなかった。",
    "english": "He represented himself as a medical doctor, which he was not.",
    "note": "この文では，doctor は人ではなく職業を指しているから，which を使う。"
  },
  {
    "no": 182,
    "point_no": 12,
    "japanese": "友情の人間に対する関係は，日光の花に対する関係と同じである。",
    "english": "Friendship is to people what sunshine is to flowers.",
    "note": "〈A is to B what C is to D〉という慣用形として覚えておく。"
  },
  {
    "no": 183,
    "point_no": 13,
    "japanese": "２人の魔術師が幕の後ろから現れた。",
    "english": "Two magicians appeared from behind the curtain.",
    "note": "「∼の後ろから」というと，前置詞が２つ必要になる。こういうときは，その２つを並べればよい。"
  },
  {
    "no": 184,
    "point_no": 13,
    "japanese": "妻は海外からの最新のニュースを知らせてくれた。",
    "english": "My wife told me the latest news from abroad.",
    "note": "abroad は「海外に［へ］」という副詞として使われることもあるが，「海外から」という上の場合は名詞として使\nわれているので，その前に from をつけてもよい。"
  },
  {
    "no": 185,
    "point_no": 13,
    "japanese": "生命は海底で始まった。",
    "english": "Life began on the ocean floor.",
    "note": "begin の次の前置詞に注意。「海底で」ということなので，floor に on を用いればよい。"
  },
  {
    "no": 186,
    "point_no": 13,
    "japanese": "日常生活で計算機は何のために使いますか。",
    "english": "What do you use a calculator for in your everyday life?",
    "note": "「何のために」は〈for what〉だが，疑問文では What … for? の語順にするのがふつう。"
  },
  {
    "no": 187,
    "point_no": 13,
    "japanese": "今度の週末はどのように過ごすのですか。",
    "english": "How do you plan to spend your time on the weekend?",
    "note": "《英》式に at the weekend としてもよい。"
  },
  {
    "no": 188,
    "point_no": 13,
    "japanese": "国会は来月の今ごろ解散される。",
    "english": "Parliament will be dissolved about this time next month.",
    "note": "「来月の今ごろ」は，〈about this time next month〉で表す。"
  },
  {
    "no": 189,
    "point_no": 13,
    "japanese": "これからはもう本当のことしか言いません。",
    "english": "I'll tell only the truth from now on.",
    "note": "「これまでとは違ってこれからは」という意味に〈from now on〉を使う。"
  },
  {
    "no": 190,
    "point_no": 13,
    "japanese": "月曜日からずっと雨が降っている。",
    "english": "It has been raining since Monday.",
    "note": "「∼以来ずっと…している」は，現在完了進行形にして，since を使う。"
  },
  {
    "no": 191,
    "point_no": 13,
    "japanese": "ここ３年間というものボーナスが出ていない。",
    "english": "There have been no bonuses for the last three years.",
    "note": "このように「∼の間」の意味を表すには， for を使い，その後に「間」の長さを表す語をつける。"
  },
  {
    "no": 192,
    "point_no": 13,
    "japanese": "あと３時間で新しい年が来る。",
    "english": "The new year will come in three hours.",
    "note": "「今から∼たったら」の意味には in が適切。after との違いについては本冊の前置詞を参照（→p.302）。"
  },
  {
    "no": 193,
    "point_no": 13,
    "japanese": "我々は定刻より20分遅れていた。",
    "english": "We were 20 minutes behind schedule.",
    "note": "「定刻より遅れて」は，慣用的に behind schedule と表す。"
  },
  {
    "no": 194,
    "point_no": 13,
    "japanese": "スーパーマーケットは通りを挟んで，銀行のちょうど真向かいにあります。",
    "english": "The supermarket is just across the street from the bank.",
    "note": "「（通りの）向かい側に」というとき，何の向かい側かを示すのには，from を用いる。"
  },
  {
    "no": 195,
    "point_no": 13,
    "japanese": "私の脚ははしごの登り降りで疲れ切っていた。",
    "english": "My legs were exhausted from going up and down the ladder.",
    "note": "こういうときの原因には from が一番向いている。"
  },
  {
    "no": 196,
    "point_no": 13,
    "japanese": "プラスチックは石油からできている。",
    "english": "Plastic is made from petroleum.",
    "note": "製品と原料の形がすっかり違っている場合には〈be made from ∼〉が適切。"
  },
  {
    "no": 197,
    "point_no": 13,
    "japanese": "私は自分の車を500ドルで売った。",
    "english": "I sold my car for 500 dollars.",
    "note": "「代価」は for を用いる。「１ついくらで」というような場合には at を用いる。"
  },
  {
    "no": 198,
    "point_no": 13,
    "japanese": "あなたはこの計画に賛成ですか，反対ですか。",
    "english": "Are you for or against this plan?",
    "note": "「賛成」は for，「反対」は against。"
  },
  {
    "no": 199,
    "point_no": 13,
    "japanese": "北アイルランドはすばらしい自然の美しさで有名です。",
    "english": "Northern Ireland is famous for its great natural beauty.",
    "note": "「∼で有名である」は〈be famous for〉と，for を用いる。"
  },
  {
    "no": 200,
    "point_no": 13,
    "japanese": "これらの札を硬貨に換えてもらえますか。",
    "english": "Can you change these bills into coins for me?",
    "note": "「ＡをＢに換える」は，〈change A into B〉。"
  },
  {
    "no": 201,
    "point_no": 13,
    "japanese": "あなたのすばらしいご成功をお祝いいたします。",
    "english": "I congratulate you on your remarkable success.",
    "note": "congratulate A on B は決まり文句。\ncongratulations と複数形にして，「おめでとう」という\n意味の間投詞に使うことが多い。\nCongratulations!（おめでとう！）"
  },
  {
    "no": 202,
    "point_no": 13,
    "japanese": "彼女は，うそをついたのではないかと彼を非難した。",
    "english": "She accused him of lying.",
    "note": "〈accuse A of B〉は，類似の動詞 blame（責める）などが for をとるので，特に注意。"
  },
  {
    "no": 203,
    "point_no": 14,
    "japanese": "これこそ私が探していた道具だ。",
    "english": "This is the tool I have been looking for.",
    "note": "「私が探していた」道具は「これ」以外にはないので，tool には the がつく。"
  },
  {
    "no": 204,
    "point_no": 14,
    "japanese": "待っている間の暇つぶしに本を持ってきてもかまいません。",
    "english": "You can bring a book with you to kill time while waiting.",
    "note": "この「本」は，特にどの本と特定されていないから，不定冠詞の a がつく。"
  },
  {
    "no": 205,
    "point_no": 14,
    "japanese": "ラクダは人なつこい，よく働く利口な動物です。",
    "english": "A camel is a pleasant, hard working, intelligent animal.",
    "note": "ここでの「ラクダは」は総称だから，a camel でも the camel でも camels でもよい。camels と複数形にした場合は当然 is は are になり，animal は animals になる。"
  },
  {
    "no": 206,
    "point_no": 14,
    "japanese": "５セント白銅貨があれば地下鉄に乗れます。",
    "english": "A nickel will get you on the subway.",
    "note": "「５セント白銅貨」は通称 nickel と言う。ここでは，不特定の一個を示しているので，a がつく。nickel が「ニッケル」という物質を表す場合は，不可算名詞として使われるので，a はつかない。"
  },
  {
    "no": 207,
    "point_no": 14,
    "japanese": "ここは寒いですね。窓を閉めてください。",
    "english": "It is cold in here. Please shut the window.",
    "note": "この「窓」は話し手にも聞き手にもわかっている，決まった窓なので the をつける。"
  },
  {
    "no": 208,
    "point_no": 14,
    "japanese": "さっき飲んだお茶のせいでまだ眠れない。",
    "english": "I am still unable to sleep because of the tea I drank earlier.",
    "note": "「お茶」は「さっき飲んだ」と特定されているから the をつける。"
  },
  {
    "no": 209,
    "point_no": 14,
    "japanese": "テーブルをふきなさい。",
    "english": "Please wipe the tables.",
    "note": "ふくテーブルが決まったものであれば，the をつける。"
  },
  {
    "no": 210,
    "point_no": 14,
    "japanese": "リンカーンは世にもまれな勇敢な男だった。",
    "english": "Mr. Lincoln was as brave a man as ever lived.",
    "note": "〈as ＋ 形容詞 ＋ a [an] ＋ 名詞〉の形では， a の位置に注意する（→p.375）。"
  },
  {
    "no": 211,
    "point_no": 15,
    "japanese": "枕元に明かりを置いていますか。",
    "english": "Do you have a light by your bed?",
    "note": "この場合の light は，不特定の「明かり」の意味なので，不定冠詞の a をつける。"
  },
  {
    "no": 212,
    "point_no": 15,
    "japanese": "英国人は誇り高い国民である。",
    "english": "The British are a proud people.",
    "note": "「英国人」は the British で表し，複数扱いをする。ここでは「国民」の意味の people には a がつく。"
  },
  {
    "no": 213,
    "point_no": 15,
    "japanese": "家族はイギリス社会の基本的単位である。",
    "english": "The family is the fundamental unit of British society.",
    "note": "ここでは「家族」の family は１つのまとまった集合体と見ているから，単数扱いになる。"
  },
  {
    "no": 214,
    "point_no": 15,
    "japanese": "イラクには開発できる石油がたくさんある。",
    "english": "Iraq has a lot of oil to develop.",
    "note": "「たくさんの」という場合，a lot of は数にも量にも使える。"
  },
  {
    "no": 215,
    "point_no": 15,
    "japanese": "わずかばかりの知識はかえって危険である。",
    "english": "A little knowledge is a dangerous thing.",
    "note": "knowledge の代わりに learning でもよい。このように抽象名詞でも量や程度の多少を示すことがある（→p.338）。"
  },
  {
    "no": 216,
    "point_no": 15,
    "japanese": "キムさんという方からお電話です。",
    "english": "You have a phone call from a Mr. Kim.",
    "note": "「∼という人」の意味で，固有名詞に a をつける場合がある。"
  },
  {
    "no": 217,
    "point_no": 15,
    "japanese": "私の近所の家はみな犬を飼っている。",
    "english": "All my neighbors have dogs.",
    "note": "主語が複数で，各自が１つずつ持っているという場合には，その目的語は複数にしてもよい。\nただ，各自が１つずつということを特に明示したいときには， Each of my neighbors has a dog. などのように，単数形にする。"
  },
  {
    "no": 218,
    "point_no": 15,
    "japanese": "私の眼鏡はどこだ？",
    "english": "Where are my glasses?",
    "note": "「眼鏡」は，レンズが２つで１組なのでいつも複数扱いをする（→p.350）。"
  },
  {
    "no": 219,
    "point_no": 15,
    "japanese": "あなたと席を替わりたいのですが。",
    "english": "I would like to change seats with you.",
    "note": "席を替わるということは，席が２つあることになるから複数にする。"
  },
  {
    "no": 220,
    "point_no": 15,
    "japanese": "このくらいの大きさの箱を持ってきてくれ。",
    "english": "Bring me a box about this size.",
    "note": "大きさや年齢，色，形を表すときには，前置詞 of（ここでは box の後ろ）はふつう省く。"
  },
  {
    "no": 221,
    "point_no": 15,
    "japanese": "疲れたと感じたらすぐに少し休んでください。",
    "english": "Take a short rest as soon as you feel tired.",
    "note": "〈take a rest〉，〈have a swim〉のような形の慣用表現がたくさんあり，覚えておくと便利。"
  },
  {
    "no": 222,
    "point_no": 15,
    "japanese": "我々はその男の無罪を信じている。",
    "english": "We believe in the man's innocence.",
    "note": "「Ａ の Ｂ」の表し方はたくさんある。the man's innocence は「その男が無罪であること」の意味。"
  },
  {
    "no": 223,
    "point_no": 16,
    "japanese": "十分暗くなれば，星が見えてくる。",
    "english": "When it is dark enough, you can see the stars.",
    "note": "天候・時間・距離などを示すときに使う it。"
  },
  {
    "no": 224,
    "point_no": 16,
    "japanese": "さあ，君の番だ。頑張ってね。",
    "english": "It is your turn now. Good luck!",
    "note": "「∼の番だ」というときには，It is my [your, his, her, our, their] turn. のように言う。Good luck. は「うまくいくよう幸運を祈る」という意味。"
  },
  {
    "no": 225,
    "point_no": 16,
    "japanese": "彼は私たちのこの新しい計画のことを君に話さなかった？",
    "english": "Didn't he tell you about this new plan of ours?",
    "note": "「私たちの」と「この」が並んでいるから，this new plan of ours という形にする。〈a friend of mine〉と同じ形である。"
  },
  {
    "no": 226,
    "point_no": 16,
    "japanese": "彼が最初に示した反応は恐怖の反応だった。",
    "english": "His first reaction was one of fear.",
    "note": "「恐怖の反応」とはいってもいろいろあるから，one of fear とする。"
  },
  {
    "no": 227,
    "point_no": 16,
    "japanese": "合衆国のガソリン税はヨーロッパよりもかなり低い。",
    "english": "Gasoline taxes in the United States are substantially lower than those in Europe.",
    "note": "合衆国のガソリン税（gasoline taxes）と比較しているのは，ヨーロッパではなく，ヨーロッパの「ガソリン税」なので，those in が必要。"
  },
  {
    "no": 228,
    "point_no": 16,
    "japanese": "原文はかなりくだけているが，この翻訳もそうだ。",
    "english": "The original is quite informal, and so is this translation.",
    "note": "「∼もそうである」というときは，〈so ＋ be動詞 ＋ 主語〉の語順になる。"
  },
  {
    "no": 229,
    "point_no": 16,
    "japanese": "傘をなくしてしまった。新しいのを買わなければ。",
    "english": "I've lost my umbrella. I have to buy a new one.",
    "note": "これから買う傘は不特定のものなので，the ではなく a を使って，〈a new one〉とする。"
  },
  {
    "no": 230,
    "point_no": 16,
    "japanese": "「ロンドンではミュージカルを見ましたか」「はい，いくつか見ました」",
    "english": "\"Did you see any musicals in London?\" \"Yes, I saw some.\"",
    "note": "複数のミュージカルを見たので，Yes, I saw one. でなく，Yes, I saw some. にする。"
  },
  {
    "no": 231,
    "point_no": 16,
    "japanese": "「犬はお好きですか」「はい，とても好きです」",
    "english": "\"Do you like dogs?\" \"Yes, I like them very much.\"",
    "note": "Do you like a dog? とはふつう言わない。犬について一般的に尋ねているので，冠詞をつけず，複数形にする。"
  },
  {
    "no": 232,
    "point_no": 16,
    "japanese": "赤ワインは肉料理によく合い，白ワインは魚料理にぴったりです。",
    "english": "Red wine goes well with meat dishes, and white is perfect with fish.",
    "note": "ここでは「ワイン」は不可算名詞として使われているので，「白ワイン」を a white one などとは言わない。"
  },
  {
    "no": 233,
    "point_no": 17,
    "japanese": "彼女は彼が以前はかなり金持ちだったと思っている。",
    "english": "She thinks that he used to be quite rich.",
    "note": "主節の動詞の時制が現在ならば，時制の一致は考えなくてよい。「以前は∼だった」は，used to を使えばよい。"
  },
  {
    "no": 234,
    "point_no": 17,
    "japanese": "彼はきっと君のせいだったと言うだろう。",
    "english": "He will probably say that it was your fault.",
    "note": "主節の動詞の時制が未来のときも，時制の一致は考えなくてよい。"
  },
  {
    "no": 235,
    "point_no": 17,
    "japanese": "彼は展覧会は先週終わったと言った。",
    "english": "He said that the exhibition had finished the previous week.",
    "note": "had finished はただ finished としてもよい。\nこういう場合は，「彼が言った時」が問題で，ついさっき言ったというなら， the exhibition finished last week. になる。"
  },
  {
    "no": 236,
    "point_no": 17,
    "japanese": "彼は，会議は金曜日まで延期しようと提案した。",
    "english": "He proposed that we postpone the meeting until Friday.",
    "note": "He said, \"Let's postpone the meeting until Friday.\" を間接話法にしたもの。動詞は suggested でもよい。propose という動詞のため，postpone が原形になっていることに注意（→p.98 43C(2)①）。"
  },
  {
    "no": 237,
    "point_no": 17,
    "japanese": "彼は，私が犬を飼っていれば人生がもっと楽しいだろうにと言った。",
    "english": "He said that if I kept a dog I would probably enjoy life more.",
    "note": "仮定法は，時制の一致をさせずにそのまま使う。\nこの文は，直接話法で書けば，He said to me, \"If you kept a dog, you would probably enjoy life more.\" となる。\nつまり，実際には犬を飼う予定はないのだが，「もし飼ったらもっと楽しい生活ができるのに」という仮定法である。\nこのような文を間接話法に直すときには，仮定法過去はあくまでもそのままにしておくべきである。"
  },
  {
    "no": 238,
    "point_no": 17,
    "japanese": "彼女は自分には何ができるのかを彼に尋ねた。",
    "english": "She asked him what she could do.",
    "note": "このような和文を英文に訳すとき，まず She asked him, \"What can I do?\" という直接話法の形を作り，それを間接話法にしてみるのも一法である。"
  },
  {
    "no": 239,
    "point_no": 17,
    "japanese": "私の医者は私に，帰りたいときにはいつでも帰っていいと言った。",
    "english": "My doctor told me that I could go home anytime I wanted to.",
    "note": "told me that … を told that のように me を抜かすと英文にならない。"
  },
  {
    "no": 240,
    "point_no": 17,
    "japanese": "私は彼になるべく早く返事を出してくれるように頼んだ。",
    "english": "I asked him to reply as soon as possible.",
    "note": "「∼してくれと頼む」というときには，〈ask A to ∼〉が一番ふつう。"
  },
  {
    "no": 241,
    "point_no": 17,
    "japanese": "その医者は，彼女に怖いのかと尋ねた。",
    "english": "The doctor asked her if she was frightened.",
    "note": "Yes か No で答えられる質問で「∼かと尋ねる」というときには，〈ask A if …〉の形にすればよい。"
  },
  {
    "no": 242,
    "point_no": 17,
    "japanese": "彼がありがとうと言ってくれることはめったにない。",
    "english": "He hardly ever says thank you.",
    "note": "「ありがとう」などは，thank you のまま使う。hardly ever は，この場合は seldom や rarely でもよい。"
  },
  {
    "no": 243,
    "point_no": 17,
    "japanese": "その警官は前の日にそこで容疑者を見かけたと言った。",
    "english": "The police officer said that he had seen the suspect there the day before.",
    "note": "「前の日」は the day before か，the previous day と言うのが一番多い。"
  },
  {
    "no": 244,
    "point_no": 17,
    "japanese": "その薬剤師は彼に，錠剤と顆粒とどちらがいいかと尋ねた。",
    "english": "The druggist asked him which he preferred, pills or granules.",
    "note": "〈Which …, A or B〉の形は，このようにそのままの形で間接話法に or を使って書き換えられる。"
  },
  {
    "no": 245,
    "point_no": 17,
    "japanese": "彼女はその音楽はなんてすてきなのでしょうと言った。",
    "english": "She exclaimed how wonderful that music was.",
    "note": "感嘆文は，伝達動詞に exclaim や cry などを使えばよい。"
  },
  {
    "no": 246,
    "point_no": 17,
    "japanese": "彼は私に，注意しないと氷の上で滑って転ぶよと言った。",
    "english": "He told me that if I didn't take care I would slip on the ice.",
    "note": "複文の場合は，全部通して時制が一致することに注意。"
  },
  {
    "no": 247,
    "point_no": 18,
    "japanese": "作動している印刷機は，大きな音を立てる。",
    "english": "A running printing press makes a lot of noise.",
    "note": "機械の作動は run や operate で表現することが多い。"
  },
  {
    "no": 248,
    "point_no": 18,
    "japanese": "日本の労働人口は減少しつつある。",
    "english": "The working population of Japan is in decline.",
    "note": "「労働人口」は working population と言う。"
  },
  {
    "no": 249,
    "point_no": 18,
    "japanese": "興奮している観衆は地元チームを応援した。",
    "english": "The excited crowd cheered for the home team.",
    "note": "「興奮している」は excited と過去分詞形を使う。"
  },
  {
    "no": 250,
    "point_no": 18,
    "japanese": "この陳述を本当だと思いますか，それともうそだと思いますか。",
    "english": "Do you consider this statement true or false?",
    "note": "statement の次に to be を入れてもよい。また， Do you think that this statement is true or false? のように\nthat 節を用いてもよい。"
  },
  {
    "no": 251,
    "point_no": 18,
    "japanese": "突然，酔った男が私の方にやってきた。",
    "english": "Suddenly a drunken man came up to me.",
    "note": "「酔った男」は a drunken man で表す。"
  },
  {
    "no": 252,
    "point_no": 18,
    "japanese": "訪ねてみる価値が最もあるのはどの島ですか。",
    "english": "Which island is most worth visiting?",
    "note": "worth は形容詞だということに注意。"
  },
  {
    "no": 253,
    "point_no": 18,
    "japanese": "現状は極めて深刻である。",
    "english": "The present situation is very serious.",
    "note": "「現状」や，「現在形」などの「現」を表すには，present を使うことが多い。"
  },
  {
    "no": 254,
    "point_no": 18,
    "japanese": "今日手に入る資料は，どれも明日でも手に入る。",
    "english": "Any material available today will also be available tomorrow.",
    "note": "available のような語の使い方は，こういう実例で慣れておくのがよい。"
  },
  {
    "no": 255,
    "point_no": 18,
    "japanese": "信頼できる資料をインターネットで入手することが可能である。",
    "english": "It is possible to get reliable data on the Internet.",
    "note": "impossible と違って， possible は， Reliable data is possible to get on the Internet. とは言えないので注意。"
  },
  {
    "no": 256,
    "point_no": 18,
    "japanese": "失業者の数は増える可能性が高い。",
    "english": "The number of unemployed is likely to rise.",
    "note": "It is likely that … will rise. でもよいが，上の形のほうが率直で書きやすい。"
  },
  {
    "no": 257,
    "point_no": 18,
    "japanese": "世界がもっと多くの森林を必要としていることは明らかだ。",
    "english": "It is apparent that the world needs more forests.",
    "note": "このような場合は，It is … . の形がふつう。"
  },
  {
    "no": 258,
    "point_no": 18,
    "japanese": "このシステムは少なくとも30日に１回は再調査する必要がある。",
    "english": "It is necessary that this system be reviewed at least once every 30 days.",
    "note": "これも It is necessary … . のほうが間違えなく書ける。\nただし，動詞（be）を仮定法現在にするか，should be にするのがふつう。"
  },
  {
    "no": 259,
    "point_no": 18,
    "japanese": "米国に旅行するお金がない。",
    "english": "I have no money to make a trip to the US.",
    "note": "no の次の名詞は，可算名詞の場合，１つある［１人いる］のがふつうなようなら単数形にし，複数個ある［いる］のがふつうなら複数形にする。また，不可算名詞ならどのような場合でも当然単数形にする。"
  },
  {
    "no": 260,
    "point_no": 18,
    "japanese": "こんなにたくさんのチョウを見たのは生まれて初めてだ。",
    "english": "I have never seen so many butterflies in all my life.",
    "note": "so many butterflies という使い方に注意。"
  },
  {
    "no": 261,
    "point_no": 18,
    "japanese": "無意味な仕事に浪費されている時間が多い。",
    "english": "Much time is being wasted on meaningless tasks.",
    "note": "「多くの時間」を主語にし，次に「多くの」にどの英語が適切かを考える。この場合は不可算名詞の time なので many ではなく，much になる。"
  },
  {
    "no": 262,
    "point_no": 18,
    "japanese": "最近湾内で観察されているクジラは非常に数少ない。",
    "english": "Very few whales have been observed in the bay lately.",
    "note": "「非常に数少ない」というように，否定の意味が濃いときには，few には a をつけない。"
  },
  {
    "no": 263,
    "point_no": 18,
    "japanese": "この件に関しては，もう十分論議がなされている。",
    "english": "Enough has been argued on this subject.",
    "note": "enough を主語にして文が作れることに慣れる。"
  },
  {
    "no": 264,
    "point_no": 18,
    "japanese": "水は摂氏０度で凍る。",
    "english": "Water freezes at zero degrees Celsius.",
    "note": "zero degrees（摂氏０度）のように，zero が可算名詞を修飾する場合，その名詞は複数形になる。"
  },
  {
    "no": 265,
    "point_no": 19,
    "japanese": "携帯電話は地上ケーブルの電話ほど当てにはならない。",
    "english": "Mobile phones are not as reliable as landline phones.",
    "note": "「∼ほど…ではない」には，〈not as … as ∼〉を用いる。"
  },
  {
    "no": 266,
    "point_no": 19,
    "japanese": "そのスクリーンは，縦横同じ長さだ。",
    "english": "The screen is as tall as it is wide.",
    "note": "同一物についての比較の仕方に慣れること。"
  },
  {
    "no": 267,
    "point_no": 19,
    "japanese": "この窓は幅よりは縦が長い。",
    "english": "This window is more tall than wide.",
    "note": "than 以下の「主語＋be動詞」を省略しなければ，This window is taller than it is wide. とする。上の文のように省略する場合には， tall のような１音節語でも more を用いるのがポイント。"
  },
  {
    "no": 268,
    "point_no": 19,
    "japanese": "彼は私よりも背が高い。",
    "english": "He is taller than I [me].",
    "note": "than 以下は，than I am でもよいし，than I でもよいが， than I am tall とは言わない。 than me のように，than を前置詞として使ってもよい。"
  },
  {
    "no": 269,
    "point_no": 19,
    "japanese": "人間の脳はチンパンジーの脳よりも大きい。",
    "english": "The human brain is larger than that of the chimpanzee.",
    "note": "比較する対象が同じになるように，that [those] of を用いる。"
  },
  {
    "no": 270,
    "point_no": 19,
    "japanese": "２つのうちでよいほうを選びなさい。",
    "english": "Choose the better of the two.",
    "note": "決まった「２つ」のものの中で，どちらがよいかを比較する場合には，よいほうはどちらか１つに決まってしまうので，比較級でも the をつける。\nこの場合，意味上では最上級でもよいわけだが，the best とはふつう言わず，特に書き言葉では使わないほうが無難。"
  },
  {
    "no": 271,
    "point_no": 19,
    "japanese": "道路には車よりずっと多くの馬がいた。",
    "english": "There were many more horses on the streets than cars.",
    "note": "「ずっと多くの∼」というとき，数を表す場合には much more ではなく， many more を用いる。量なら much more になる。"
  },
  {
    "no": 272,
    "point_no": 19,
    "japanese": "金星が一番明るく見えるのは日没直後である。",
    "english": "Venus appears brightest just after sunset.",
    "note": "同一物の性状の比較には，形容詞に the はつけないことが多い。"
  },
  {
    "no": 273,
    "point_no": 19,
    "japanese": "ウラニウムは鉛より体積密度が２倍高い。",
    "english": "Uranium is twice as dense as lead.",
    "note": "「２倍」という意味で twice を使うときは，〈twice as … as〉のみだが，two times を使う場合には〈two times as … as〉と〈two times ∼er than …〉のどちらでもよい。"
  },
  {
    "no": 274,
    "point_no": 19,
    "japanese": "ここで待っているよりは家に帰ったほうがましだ。",
    "english": "We might as well go home as wait here.",
    "note": "「…するくらいなら∼したほうがましだ」の意味には，〈might as well ∼ (as …)〉構文を用いる。"
  },
  {
    "no": 275,
    "point_no": 19,
    "japanese": "返済を先に延ばせば延ばすほど，利息は多くたまっていく。",
    "english": "The longer you put off repayment, the more the interest will accrue.",
    "note": "「∼すればするほど…」には，〈the ＋ 比較級, the ＋ 比較級〉を用いる。"
  },
  {
    "no": 276,
    "point_no": 19,
    "japanese": "彼女は，私と同様，決して天才ではない。",
    "english": "She is no more a genius than I.",
    "note": "〈no more ∼ than …〉構文は，両方を否定する形であることを覚えておく。"
  },
  {
    "no": 277,
    "point_no": 19,
    "japanese": "事実は小説に劣らず不思議なものである。",
    "english": "Truth is no less strange than fiction.",
    "note": "〈no less ∼ than …〉は，両方肯定になる。"
  },
  {
    "no": 278,
    "point_no": 19,
    "japanese": "ダラスは私にとって，一番住みたくない都市だ。",
    "english": "Dallas is the last city (that) I would want to live in.",
    "note": "〈the last A that …〉は，「最も…しそうにないＡ」という意味も表す。"
  },
  {
    "no": 279,
    "point_no": 19,
    "japanese": "カナダはロシア連邦に次いで，世界で２番目に広い国である。",
    "english": "Canada is, after the Russian Federation, the second largest country in the world.",
    "note": "「何番目に∼な」は，〈the second [third, …] ＋ 最上級〉で表す。"
  },
  {
    "no": 280,
    "point_no": 20,
    "japanese": "私は平日には自分の車をめったに使いません。",
    "english": "I rarely use my car on weekdays.",
    "note": "rarely は seldom でも同じ。こういう否定語は，動詞の直前に置くことが多いが，Rarely do I use my car on weekdays. のように，文頭に置き，主語と動詞を倒置した形で頻度の低さを強調することもある。"
  },
  {
    "no": 281,
    "point_no": 20,
    "japanese": "この金属は熱の影響をほとんど受けない。",
    "english": "This metal is little affected by heat.",
    "note": "little のこのような使い方に慣れておくこと。\nLittle did I know … . のように，否定の意の little を文頭に出すと，「夢にも思わなかった」という強い否定になるので注意。"
  },
  {
    "no": 282,
    "point_no": 20,
    "japanese": "今日彼女は来られないと思う。",
    "english": "I don't think she will be able to come today.",
    "note": "「∼ではないと思う」という場合は，I don't think … . のように，think を否定する（→p.531）。"
  },
  {
    "no": 283,
    "point_no": 20,
    "japanese": "それが本当でなければいいが。",
    "english": "I hope that is not true.",
    "note": "hope を don't hope にすると，「∼を望みはしない」ということになる。"
  },
  {
    "no": 284,
    "point_no": 20,
    "japanese": "だれも未来を予言することはできない。",
    "english": "No one can predict the future.",
    "note": "No one を主語にする文が多い。Anyone cannot predict the future. という言い方はない。"
  },
  {
    "no": 285,
    "point_no": 20,
    "japanese": "ここのコンピューターの全部がインターネットに接続されているわけではない。",
    "english": "Not all of these computers are connected to the Internet.",
    "note": "否定の及ぶ範囲は，否定語から後ろになるから，all を not の後ろに置けば，必ず部分否定になる。"
  },
  {
    "no": 286,
    "point_no": 20,
    "japanese": "怖いものがない人はいない。",
    "english": "No one has nothing to be afraid of.",
    "note": "二重否定をうまく使うと，簡潔な文ができる。"
  },
  {
    "no": 287,
    "point_no": 20,
    "japanese": "この決定の影響はまだ感じられていない。",
    "english": "The effect of this decision has yet to be felt.",
    "note": "〈have yet to〉，〈be yet to〉は「まだ∼していない」の意味を表す。"
  },
  {
    "no": 288,
    "point_no": 20,
    "japanese": "北極圏の冬では，太陽はいっさい昇ってこない。",
    "english": "During the Arctic winter, the sun never rises.",
    "note": "「どんな場合でも［いつになっても］決して∼ない」という，この例文のような場合には never が適切である。"
  },
  {
    "no": 289,
    "point_no": 20,
    "japanese": "週末が嫌いだなんていう人がいるだろうか。",
    "english": "Who doesn't like weekends?",
    "note": "典型的な修辞疑問である。"
  },
  {
    "no": 290,
    "point_no": 20,
    "japanese": "例外のない規則はない。",
    "english": "There is no rule without some exception."
  },
  {
    "no": 291,
    "point_no": 21,
    "japanese": "彼女は弁護士と結婚していたと言った。",
    "english": "She said that she had been married to a lawyer.",
    "note": "She says that she was married to a lawyer. という文は，彼女は今は結婚していないと言っていることになる。\nこの says を said と過去形にした場合，was をそのままにしておくと，その時点で，彼女は弁護士と結婚しているということになり，正しい訳ではなくなる。時制の一致が絶対に必要な場合の例である（→p.510）。"
  },
  {
    "no": 292,
    "point_no": 21,
    "japanese": "彼は今度は絶対に遅れないと言った。",
    "english": "He said that he would definitely not be late next time.",
    "note": "過去のある時から見た未来のことであるから，助動詞の will も would と過去形にすればよい。\nまた，ここでは「今度」を next time と，慣用的に the をつけずに表現しているのだが，the next time と定冠詞をつけてもよい。「絶対に」を表す副詞としては，definitely 以外に absolutely を使っても自然な表現になる。"
  },
  {
    "no": 293,
    "point_no": 21,
    "japanese": "私は警察に自分は英国人だと言った。",
    "english": "I told the police I was British.",
    "note": "よく『時制の一致の例外』などといって覚えているが，仮定法は変化せず，歴史上の事実は常に過去形という以外にはあまり意味がない。要は，話し手が自分の伝えようとしていることの一部が，不変の真理であるとか，今でもそうであるということを強調したいときに，現在形のままにしておいて目立たせるというだけの話なのである。だから，話し手に特にそういう意図がなければ，国籍なども過去に一致させるのがふつうである（→p.513）。"
  },
  {
    "no": 294,
    "point_no": 22,
    "japanese": "ニューヨークタイムズ紙は90以上のピュリッツァー賞を受賞してきている。",
    "english": "The New York Times has received more than 90 Pulitzer Prizes.",
    "note": "複数形の国名や新聞・雑誌名は単数で受ける。"
  },
  {
    "no": 295,
    "point_no": 22,
    "japanese": "商品が着くのが遅れたらどうすればいいのでしょうか。",
    "english": "What should I do if the goods are delivered late?",
    "note": "goods のように，形が常に複数形の名詞は，単数で受けるか，複数で受けるかに注意。goods は複数（→p.350）。"
  },
  {
    "no": 296,
    "point_no": 22,
    "japanese": "その地域の大半は草原である。",
    "english": "Most of the area is grassland.",
    "note": "most [some] of A の場合は，原則としてＡに一致する。"
  },
  {
    "no": 297,
    "point_no": 22,
    "japanese": "そのプロジェクトを完成させるには，５年という期間は短すぎる。",
    "english": "Five years is too short a time to complete the project.",
    "note": "時間・距離・金額などを１つのまとまりと考えたら単数で受ける。ここでは，５年というのを１つの期間として扱っている。"
  },
  {
    "no": 298,
    "point_no": 22,
    "japanese": "その離れ家では，喫煙もペットの持ち込みも許されない。",
    "english": "Neither smoking nor pets are permitted in the cabins.",
    "note": "〈A or B〉，〈either A or B〉，〈neither A nor B〉では，原則として，動詞に近いほうの名詞に一致させる。"
  },
  {
    "no": 299,
    "point_no": 22,
    "japanese": "だれでも自分の意見を述べる権利がある。",
    "english": "Everybody has the right to state their opinions.",
    "note": "everybody が主語のとき，これを受ける代名詞は，この文なら正式には his or her だが，くだけた言い方では their でもよいことを理解する。"
  },
  {
    "no": 300,
    "point_no": 22,
    "japanese": "この言葉は，私の人生の指針なのです。",
    "english": "These words are my guide in life.",
    "note": "この順を逆にすると，My guide in life is these words. となる。つまり，述語動詞の数を決めるのはあくまでも主語であって，補語に一致する必要はないのである。"
  }
];

export default CARDS;
