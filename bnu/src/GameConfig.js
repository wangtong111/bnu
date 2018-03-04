var GAME_TIPS = {};
GAME_TIPS[2] = "请先完成前面的实验";
GAME_TIPS[3] = "请先完成前面的实验";
GAME_TIPS[4] = "请先完成前面的实验";
GAME_TIPS[5] = "请先完成前面的实验";
GAME_TIPS[6] = "请先完成前面的实验";


//配置小红旗位置
var FLAG_CONFIG =  {};
FLAG_CONFIG[1] = [cc.p(-600,0),cc.p(-200,0),cc.p(200,0),cc.p(600,0)];
FLAG_CONFIG[2] = [cc.p(-500,0),cc.p(0,0),cc.p(500,0)];
FLAG_CONFIG[3] = [cc.p(-500,0),cc.p(0,0),cc.p(500,0)];
FLAG_CONFIG[4] = [cc.p(-400,0),cc.p(400,0)];
FLAG_CONFIG[5] = [cc.p(0,0)];
FLAG_CONFIG[6] = [cc.p(-400,0),cc.p(400,0)];
//GOODS_CONFIG代表超市图片列表，第一个数字代表房间，第二个数字代表关卡
var GOODS_CONFIG =  {};

GOODS_CONFIG[1] ={};
GOODS_CONFIG[1][1] = [res.market1_1_1,res.market1_1_2,res.market1_1_3,res.market1_1_4,res.market1_1_5,res.market1_1_6,res.market1_1_7,res.market1_1_8,res.market1_1_9];
GOODS_CONFIG[1][2] = [res.market1_2_1,res.market1_2_2,res.market1_2_3,res.market1_2_4,res.market1_2_5,res.market1_2_6,res.market1_2_7,res.market1_2_8,res.market1_2_9];
GOODS_CONFIG[1][3] = [res.market1_3_1,res.market1_3_2,res.market1_3_3,res.market1_3_4,res.market1_3_5,res.market1_3_6,res.market1_3_7,res.market1_3_8,res.market1_3_9];
GOODS_CONFIG[1][4] = [res.market1_4_1,res.market1_4_2,res.market1_4_3,res.market1_4_4,res.market1_4_5,res.market1_4_6,res.market1_4_7,res.market1_4_8,res.market1_4_9];

GOODS_CONFIG[2] ={};
GOODS_CONFIG[2][1] = [res.market2_1_1,res.market2_1_2,res.market2_1_3,res.market2_1_4,res.market2_1_5,res.market2_1_6,res.market2_1_7,res.market2_1_8,res.market2_1_9];
GOODS_CONFIG[2][2] = [res.market2_2_1,res.market2_2_2,res.market2_2_3,res.market2_2_4,res.market2_2_5,res.market2_2_6,res.market2_2_7,res.market2_2_8,res.market2_2_9];
GOODS_CONFIG[2][3] = [res.market2_3_1,res.market2_3_2,res.market2_3_3,res.market2_3_4,res.market2_3_5,res.market2_3_6,res.market2_3_7,res.market2_3_8,res.market2_3_9];

GOODS_CONFIG[3] ={};
GOODS_CONFIG[3][1] = [res.market3_1_1,res.market3_1_2,res.market3_1_3,res.market3_1_4,res.market3_1_5,res.market3_1_6,res.market3_1_7,res.market3_1_8,res.market3_1_9];
GOODS_CONFIG[3][2] = GOODS_CONFIG[3][1];
GOODS_CONFIG[3][3] = GOODS_CONFIG[3][1];

GOODS_CONFIG[4] = {};
GOODS_CONFIG[4][1] = [res.market4_1_1,res.market4_1_2,res.market4_1_3,res.market4_1_4,res.market4_1_5,res.market4_1_6,res.market4_1_7,res.market4_1_8,res.market4_1_9];
GOODS_CONFIG[4][2] = [res.market4_2_1,res.market4_2_2,res.market4_2_3,res.market4_2_4,res.market4_2_5,res.market4_2_6,res.market4_2_7,res.market4_2_8,res.market4_2_9];

GOODS_CONFIG[5] = {};
GOODS_CONFIG[5][1] = [res.market5_1_1,res.market5_1_2,res.market5_1_3,res.market5_1_4,res.market5_1_5,res.market5_1_6,res.market5_1_7,res.market5_1_8,res.market5_1_9];

GOODS_CONFIG[6] = {};
GOODS_CONFIG[6][1] = [res.market6_1_1,res.market6_1_2,res.market6_1_3,res.market6_1_4,res.market6_1_5,res.market6_1_6,res.market6_1_7,res.market6_1_8,res.market6_1_9];
GOODS_CONFIG[6][2] = [res.market6_2_1,res.market6_2_2,res.market6_2_3,res.market6_2_4,res.market6_2_5,res.market6_2_6,res.market6_2_7,res.market6_2_8,res.market6_2_9];


//DOC_CONFIG代表阅读文档
var DOC_CONFIG =  {};

DOC_CONFIG[1] = {};
DOC_CONFIG[1][1] = [res.doc_1_1,res.doc_1_2,res.doc_1_3,res.doc_1_4];
DOC_CONFIG[1][2] = [res.doc_2_1];
DOC_CONFIG[1][3] = [res.doc_3_1,res.doc_3_2];
DOC_CONFIG[1][4] = [res.doc_4_1,res.doc_4_2,res.doc_4_3,res.doc_4_4];

DOC_CONFIG[2] = {};
DOC_CONFIG[2][1] = [res.doc2_1_1,res.doc2_1_2,res.doc2_1_3];
DOC_CONFIG[2][2] = [res.doc2_2_1,res.doc2_2_2,res.doc2_2_3];
DOC_CONFIG[2][3] = [res.doc2_3_1,res.doc2_3_2,res.doc2_3_3,res.doc2_3_4,res.doc2_3_5];

DOC_CONFIG[3] = {};
DOC_CONFIG[3][1] = [res.doc3_1_1,res.doc3_1_2,res.doc3_1_3,res.doc3_1_4,res.doc3_1_5];
DOC_CONFIG[3][2] = [res.doc3_2_1,res.doc3_2_2];
DOC_CONFIG[3][3] = [res.doc3_3_1,res.doc3_3_2,res.doc3_3_3,res.doc3_3_4];

DOC_CONFIG[4] = {};
DOC_CONFIG[4][1] = [res.doc4_1_1,res.doc4_1_2,res.doc4_1_3,res.doc4_1_4,res.doc4_1_5];
DOC_CONFIG[4][2] = [res.doc4_2_1,res.doc4_2_2,res.doc4_2_3,res.doc4_2_4,res.doc4_2_5];

DOC_CONFIG[5]  = {};
DOC_CONFIG[5][1] = [res.doc5_1_1,res.doc5_1_2,res.doc5_1_3,res.doc5_1_4,res.doc5_1_5,res.doc5_1_6,res.doc5_1_7];

DOC_CONFIG[6] = {};
DOC_CONFIG[6][1] = [res.doc6_1_1,res.doc6_1_2,res.doc6_1_3,res.doc6_1_4];
DOC_CONFIG[6][2] = [res.doc6_2_1,res.doc6_2_2,res.doc6_2_3,res.doc6_2_4];


//代表小海豚说的话
var MARKET_LABEL = {};
MARKET_LABEL[1] = {};
MARKET_LABEL[1][1] = "接下来我们要模仿切除癫痫病人的胼胝体。\n请你在这里选择待会儿需要用到的材料。\n给你一点小提示，只要用到的都需要选择哦。\n有了材料后，请你试试切除这个病人的胼胝体吧，\n请你回忆一下上课时老师说胼胝体在哪里，\n然后拖动手术刀，把它放在相应的位置。";
MARKET_LABEL[1][2] = "接下来是你的第一个实验。\n你还记得课上讲到的内容和你刚才读到的知识吗？\n想想这个实验用到了什么材料？\n你需要在这里按照你刚刚读过的文献和想想的提示，\n点选你需要的物品，然后带去实验室吧。\n但请不要选择多余的物品。\n只有选对了物品才能进入游戏界面哦。";
MARKET_LABEL[1][3] = "这次研究人员带来了一些水果，\n请你选择所有的水果来继续实验。";
MARKET_LABEL[1][4] = "这次研究者们带来了一些工具，\n它们的照片，以及上面写着它们的名字的小卡片。\n请你选择这些东西，\n然后去实验室看看研究者\n为裂脑人先生准备了什么实验吧。";

MARKET_LABEL[2] = {};
MARKET_LABEL[2][1] = "大家好，今天我们迎来了另一个章节的学习。\n你准备好了吗？在接下来的游戏中，\n你会遇到一些我们关注的人群，\n他们的名字都分门别类地写在了这些方块上。\n请你选择所有写着字的方块来继续。";
MARKET_LABEL[2][2] = "请你选择所有画着小点点的图片。\n它们的名字叫做“散点图”。\n你应该已经在阅读材料里见过它了，\n在游戏里你们还会再次相遇的。";
MARKET_LABEL[2][3] = "还剩下最后一关，加油！\n请你选择所有除了小星星外的方块。\n它们的用处是什么呢？\n请到游戏里看一看吧！";

MARKET_LABEL[3] = {};
MARKET_LABEL[3][1] = "欢迎你来到新的篇章！\n刚才的文章读得怎么样了呢？\n在研究中使用了很多小鼠，但不是\n所有的小鼠都符合研究人员的要求。\n你还记得研究中需要使用什么样的小鼠吗？\n想一想他们都应该具有什么样的特征？\n如果你记得，你能挑出三只符合\n研究人员要求的小鼠吗？";
MARKET_LABEL[3][2] = "相信你已经看完了文献的内容。\n现在，科学研究人员已经把小鼠们的大脑皮层取出。\n为了不让你看到血腥的画面，\n这些皮层组织都被分别装进了三个\n一模一样的箱子里。\n请选择三只箱子，然后去实验室看看吧。";
MARKET_LABEL[3][3] = "让我们回到研究进行的时候，\n现在要为实验中的小鼠换玩具啦。\n你还记得哪些老鼠参加了研究吗？\n请选择来自同一窝的小鼠们。\n此外，请选择一只手用来触碰小鼠。";

MARKET_LABEL[4] = {};
MARKET_LABEL[4][1] = "大家好！欢迎来到视崖的小游戏。\n在视崖的实验中，研究者使用了\n一种叫做视崖的装置，现在这个\n装置被拆开成一片一片的了，\n请你选择这些部分；此外，请你选\n择两个刚刚学会爬行的小宝宝。\n他们为什么表现出了不同的反应？";
MARKET_LABEL[4][2] = "除了人类的婴儿，研究者使用了其\n他的小动物。你能选中它们吗？";

MARKET_LABEL[5] = {};
MARKET_LABEL[5][1] = "欢迎来到睡眠与梦的章节！\n如果你完成了这部分的阅读，\n你该知道阿瑟瑞斯基的研究\n是关于唤醒与询问被试的。\n请选择闹钟和对话气泡吧。";

MARKET_LABEL[6] = {};
MARKET_LABEL[6][1] = "欢迎来到睡眠与梦的章节！\n如果你完成了这部分的阅读，\n你该知道阿瑟瑞斯基的研究\n是关于唤醒与询问被试的。\n请选择闹钟和对话气泡吧。";
MARKET_LABEL[6][2] = "欢迎来到睡眠与梦的章节！\n如果你完成了这部分的阅读，\n你该知道阿瑟瑞斯基的研究\n是关于唤醒与询问被试的。\n请选择闹钟和对话气泡吧。";
