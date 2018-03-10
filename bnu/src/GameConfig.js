var GAME_TIPS = {};
GAME_TIPS[2] = "请先完成前面的实验";
GAME_TIPS[3] = "请先完成前面的实验";
GAME_TIPS[4] = "请先完成前面的实验";
GAME_TIPS[5] = "请先完成前面的实验";
GAME_TIPS[6] = "请先完成前面的实验";


//配置小红旗位置
var FLAG_CONFIG =  {};
FLAG_CONFIG[5] = [cc.p(-600,0),cc.p(-200,0),cc.p(200,0),cc.p(600,0)];
FLAG_CONFIG[4] = [cc.p(-500,0),cc.p(0,0),cc.p(500,0)];
FLAG_CONFIG[6] = [cc.p(-500,0),cc.p(0,0),cc.p(500,0)];
FLAG_CONFIG[2] = [cc.p(-400,0),cc.p(400,0)];
FLAG_CONFIG[1] = [cc.p(0,0)];
FLAG_CONFIG[3] = [cc.p(-400,0),cc.p(400,0)];
//GOODS_CONFIG代表超市图片列表，第一个数字代表房间，第二个数字代表关卡
var GOODS_CONFIG =  {};

GOODS_CONFIG[5] ={};
GOODS_CONFIG[5][1] = [res.market1_1_1,res.market1_1_2,res.market1_1_3,res.market1_1_4,res.market1_1_5,res.market1_1_6,res.market1_1_7,res.market1_1_8,res.market1_1_9];
GOODS_CONFIG[5][2] = [res.market1_2_1,res.market1_2_2,res.market1_2_3,res.market1_2_4,res.market1_2_5,res.market1_2_6,res.market1_2_7,res.market1_2_8,res.market1_2_9];
GOODS_CONFIG[5][3] = [res.market1_3_1,res.market1_3_2,res.market1_3_3,res.market1_3_4,res.market1_3_5,res.market1_3_6,res.market1_3_7,res.market1_3_8,res.market1_3_9];
GOODS_CONFIG[5][4] = [res.market1_4_1,res.market1_4_2,res.market1_4_3,res.market1_4_4,res.market1_4_5,res.market1_4_6,res.market1_4_7,res.market1_4_8,res.market1_4_9];

GOODS_CONFIG[4] ={};
GOODS_CONFIG[4][1] = [res.market2_1_1,res.market2_1_2,res.market2_1_3,res.market2_1_4,res.market2_1_5,res.market2_1_6,res.market2_1_7,res.market2_1_8,res.market2_1_9];
GOODS_CONFIG[4][2] = [res.market2_2_1,res.market2_2_2,res.market2_2_3,res.market2_2_4,res.market2_2_5,res.market2_2_6,res.market2_2_7,res.market2_2_8,res.market2_2_9];
GOODS_CONFIG[4][3] = [res.market2_3_1,res.market2_3_2,res.market2_3_3,res.market2_3_4,res.market2_3_5,res.market2_3_6,res.market2_3_7,res.market2_3_8,res.market2_3_9];

GOODS_CONFIG[6] ={};
GOODS_CONFIG[6][1] = [res.market3_1_1,res.market3_1_2,res.market3_1_3,res.market3_1_4,res.market3_1_5,res.market3_1_6,res.market3_1_7,res.market3_1_8,res.market3_1_9];
GOODS_CONFIG[6][2] = GOODS_CONFIG[6][1];
GOODS_CONFIG[6][3] = GOODS_CONFIG[6][1];

GOODS_CONFIG[2] = {};
GOODS_CONFIG[2][1] = [res.market4_1_1,res.market4_1_2,res.market4_1_3,res.market4_1_4,res.market4_1_5,res.market4_1_6,res.market4_1_7,res.market4_1_8,res.market4_1_9];
GOODS_CONFIG[2][2] = [res.market4_2_1,res.market4_2_2,res.market4_2_3,res.market4_2_4,res.market4_2_5,res.market4_2_6,res.market4_2_7,res.market4_2_8,res.market4_2_9];

GOODS_CONFIG[1] = {};
GOODS_CONFIG[1][1] = [res.market5_1_1,res.market5_1_2,res.market5_1_3,res.market5_1_4,res.market5_1_5,res.market5_1_6,res.market5_1_7,res.market5_1_8,res.market5_1_9];

GOODS_CONFIG[3] = {};
GOODS_CONFIG[3][1] = [res.market6_1_1,res.market6_1_2,res.market6_1_3,res.market6_1_4,res.market6_1_5,res.market6_1_6,res.market6_1_7,res.market6_1_8,res.market6_1_9];
GOODS_CONFIG[3][2] = [res.market6_2_1,res.market6_2_2,res.market6_2_3,res.market6_2_4,res.market6_2_5,res.market6_2_6,res.market6_2_7,res.market6_2_8,res.market6_2_9];


//DOC_CONFIG代表阅读文档
var DOC_CONFIG =  {};

DOC_CONFIG[5] = {};
DOC_CONFIG[5][1] = [res.doc_1_1,res.doc_1_2,res.doc_1_3,res.doc_1_4];
DOC_CONFIG[5][2] = [res.doc_2_1];
DOC_CONFIG[5][3] = [res.doc_3_1,res.doc_3_2];
DOC_CONFIG[5][4] = [res.doc_4_1,res.doc_4_2,res.doc_4_3,res.doc_4_4];

DOC_CONFIG[4] = {};
DOC_CONFIG[4][1] = [res.doc2_1_1,res.doc2_1_2,res.doc2_1_3];
DOC_CONFIG[4][2] = [res.doc2_2_1,res.doc2_2_2,res.doc2_2_3];
DOC_CONFIG[4][3] = [res.doc2_3_1,res.doc2_3_2,res.doc2_3_3,res.doc2_3_4,res.doc2_3_5];

DOC_CONFIG[6] = {};
DOC_CONFIG[6][1] = [res.doc3_1_1,res.doc3_1_2,res.doc3_1_3,res.doc3_1_4,res.doc3_1_5];
DOC_CONFIG[6][2] = [res.doc3_2_1,res.doc3_2_2];
DOC_CONFIG[6][3] = [res.doc3_3_1,res.doc3_3_2,res.doc3_3_3,res.doc3_3_4];

DOC_CONFIG[2] = {};
DOC_CONFIG[2][1] = [res.doc4_1_1,res.doc4_1_2,res.doc4_1_3,res.doc4_1_4,res.doc4_1_5];
DOC_CONFIG[2][2] = [res.doc4_2_1,res.doc4_2_2,res.doc4_2_3,res.doc4_2_4,res.doc4_2_5];

DOC_CONFIG[1]  = {};
DOC_CONFIG[1][1] = [res.doc5_1_1,res.doc5_1_2,res.doc5_1_3,res.doc5_1_4,res.doc5_1_5,res.doc5_1_6,res.doc5_1_7];

DOC_CONFIG[3] = {};
DOC_CONFIG[3][1] = [res.doc6_1_1,res.doc6_1_2,res.doc6_1_3,res.doc6_1_4];
DOC_CONFIG[3][2] = [res.doc6_2_1,res.doc6_2_2,res.doc6_2_3,res.doc6_2_4];


//代表小海豚说的话
var MARKET_LABEL = {};
MARKET_LABEL[5] = {};
MARKET_LABEL[5][1] = "欢迎来到新的章节。请选择小汽车、谷仓、\n停车标志的图案和所有的词汇。";
MARKET_LABEL[5][2] = "欢迎来到第二关。你还记得研究二吗？\n它和研究一有什么不同？\n请选择纸片人和所有的词汇。";
MARKET_LABEL[5][3] = "欢迎来到第三关。新的研究在等待着我们！\n请选择小汽车、谷仓、停车标志和所有的词汇。";
MARKET_LABEL[5][4] = "欢迎来到第四关，这是最后一关了。\n请选择校车和所有的词汇吧。";

MARKET_LABEL[4] = {};
MARKET_LABEL[4][1] = "欢迎来到认知地图的章节！\n请选择所有的小鼠、水和食物。";
MARKET_LABEL[4][2] = "恭喜你进入了第二关。\n你还记得“潜伏学习”的实验吗？\n请选择迷宫地图、小老鼠们、食物和水。";
MARKET_LABEL[4][3] = "欢迎来到第三关。\n在空间定向的实验中，\n你需要选择塞子和一个数字符号。";

MARKET_LABEL[6] = {};
MARKET_LABEL[6][1] = "大家好，欢迎来到新的章节。\n我们将在这一章里与恒河猴幼崽\n和代理妈妈们一起探索爱的起源。\n请选择恒河猴幼崽和所有的代理妈妈吧。";
MARKET_LABEL[6][2] = "欢迎来到第二关。在开阔的场地里，\n幼猴和代理妈妈的关系又是怎样的呢？\n请选择恒河猴的幼崽吧。";
MARKET_LABEL[6][3] = "欢迎来到第三关。为了进一步研究\n接触安慰和依恋，\n研究者让小猴和代理\n妈妈分开了一段时间。\n此外，我们还会简单看看控制组小猴的情况。\n请选择恒河猴的幼崽吧。";

MARKET_LABEL[2] = {};
MARKET_LABEL[2][1] = "欢迎来到“迷信的鸽子”的章节，\n我们将学习如何使用操作性条件反射\n的知识让鸽子做出“迷信”的行为。\n请把所有的东西都选上吧。";
MARKET_LABEL[2][2] = "“迷信的鸽子”研究得出了什么结果呢？\n请选择所有的鸽子吧。";

MARKET_LABEL[1] = {};
MARKET_LABEL[1][1] = "欢迎来到新的章节~\n在这里，情绪化的小阿尔伯特揭示了条件反射\n和行为主义思想的哪些知识呢？\n请选择除了两个小婴儿以外的所有物品、\n小动物和面孔吧。";

MARKET_LABEL[3] = {};
MARKET_LABEL[3][1] = "欢迎来到新的章节。\n在这里，我们将学习教师的期望\n如何影响学生的智力增长。\n请选择除了五位小朋友外的其他事物吧。";
MARKET_LABEL[3][2] = "八个月之后，\n研究者们又来到了橡树学校。\n学生们发生了什么变化呢？\n请选择除了小朋友们以外的其他事物吧。";
