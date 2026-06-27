const placeDetails = {
  "shuanglin-temple": {
    id: "shuanglin-temple",
    path: "/places/shuanglin-temple",
    eyebrow: "Shuanglin Temple",
    name: "双林寺",
    city: "晋中 / 平遥",
    accent: "red",
    tags: ["彩塑", "寺院轴线", "人物写生"],
    summary:
      "战火会毁灭建筑与塑像，但信仰让它们再次站立。\n沿着双林寺的中轴线前行，遇见那500多年前的工匠。\n他们塑造的是佛国，还是人间？",
    intro: "我们去一探究竟！",
    heroSketch: "/assets/sketches/shuanglin-guanyin-sketch.png",
    hideQuickFacts: true,
    quickFacts: [
      ["观察入口", "山门到中轴殿宇"],
      ["核心对象", "明代彩塑与殿堂空间"],
      ["学习动作", "看姿态 / 找表情 / 画衣纹"],
      ["素材状态", "地图与代表照片已接入"]
    ],
    feature: {
      type: "map",
      guideGrid: true,
      guideStep: 5,
      title: "寺院地图框架",
      summary: "后续可在每个殿堂节点补充代表塑像、观察提示和写生任务。",
      image: "/assets/maps/shuanglin-temple-map-ai-sketch.png",
      imageAlt: "双林寺建筑群横向线稿俯视图",
      points: [
        {
          title: "天王殿",
          type: "天王殿前四大金刚力士，每尊身高约3米，身姿雄健有力，怒目而视，威严挺拔。",
          x: 50,
          y: 50,
          note: "寺院入口的大殿，供奉守护佛法的天王、力士与护法神。",
          images: [
            "/assets/photos/shuanglin/双林寺-天王殿1.JPG",
            "/assets/photos/shuanglin/双林寺-天王殿2.JPG",
            "/assets/photos/shuanglin/双林寺-天王殿3.JPG",
            "/assets/photos/shuanglin/双林寺-天王殿4.JPG"
          ]
        },
        {
          title: "千佛殿",
          type: "左自在观音，右韦驮",
          x: 35,
          y: 28,
          note: "主像为水月观音（也称自在观音），左右分列姿态生动的韦驮、夜叉。殿内四周雕塑500菩萨，佛国场面恢弘。",
          images: [
            "/assets/photos/shuanglin/千佛殿·自在观音.jpg",
            "/assets/photos/shuanglin/千佛殿·韦驮.jpg"
          ]
        },
        {
          title: "大雄宝殿",
          x: 25,
          y: 25,
          type: "1.卢舍那佛（智慧圆满）2.毗卢遮那佛（佛的真理）3.释迦牟尼佛（教导众生）4.阿弥陀佛（接引佛）",
          note: "全寺最大的殿，供奉释迦牟尼，殿内塑有三尊释迦摩尼不同的化身和接引佛。是礼佛和举行重要佛事活动的中心。",
          images: [
            "/assets/photos/shuanglin/大雄宝殿2.JPG",
            "/assets/photos/shuanglin/大雄宝殿·毗卢遮那佛.JPG",
            "/assets/photos/shuanglin/大雄宝殿.JPG",
            "/assets/photos/shuanglin/大雄宝殿·内部三佛.JPG"
          ]
        },
        {
          title: "释迦殿",
          type: "左文殊菩萨，中释迦摩尼佛，右普贤菩萨",
          x: 40,
          y: 40,
          note: "供奉释迦牟尼佛，四壁塑有佛陀一生故事的重要殿堂。",
          images: [
            "/assets/photos/shuanglin/释迦殿·文殊菩萨.JPG",
            "/assets/photos/shuanglin/释迦殿·释迦牟尼.JPG",
            "/assets/photos/shuanglin/释迦殿·普贤菩萨.JPG"
          ]
        },
        {
          title: "罗汉殿",
          type: "左：罗汉像，右：观音菩萨像",
          x: 50,
          y: 30,
          leaderToY: 35,
          note: "十八罗汉静坐如山，分列菩萨两侧，十八种不同的性格是佛性与人性的融合。",
          images: [
            "/assets/photos/shuanglin/罗汉殿.JPG",
            "/assets/photos/shuanglin/罗汉殿·菩萨.JPG"
          ]
        },
        {
          title: "伽蓝殿",
          type: "伽蓝神：关羽",
          x: 53,
          y: 35,
          leaderToY: 35,
          note: "供奉护持寺院的伽蓝神，负责守护佛寺与僧众。隋朝之后关羽逐渐成为了伽蓝神的形象，是一次中国文化与佛教的融合。",
          image: "/assets/photos/shuanglin/伽蓝殿.JPG"
        },
        {
          title: "娘娘殿",
          x: 15,
          y: 25,
          type: "左乳母娘娘，中三霄娘娘（其中一位），有送子娘娘",
          note: "供奉送子娘娘，是普通百姓祈祷最现实的愿望——子女、家庭和平安的场所。",
          images: [
            "/assets/photos/shuanglin/娘娘殿2.JPG",
            "/assets/photos/shuanglin/娘娘殿1.JPG",
            "/assets/photos/shuanglin/娘娘殿3.JPG"
          ]
        },
        {
          title: "菩萨殿",
          x: 25,
          y: 40,
          type: "二十六臂观音",
          note: "供奉慈悲济世的菩萨，是人们祈愿和礼敬的重要场所。殿内塑有400多尊诸天菩萨像，均为明代彩塑。",
          image: "/assets/photos/shuanglin/菩萨殿·二十六臂观音.JPG"
        },
        {
          title: "地藏殿",
          x: 35,
          y: 50,
          type: "左右为：十殿阎王判官，中为：地藏菩萨",
          note: "地藏殿供奉地藏菩萨，寄托人们超度亡者与护佑众生的愿望。",
          images: [
            "/assets/photos/shuanglin/地藏殿1.JPG",
            "/assets/photos/shuanglin/地藏殿·地藏王菩萨.JPG",
            "/assets/photos/shuanglin/地藏殿2.JPG"
          ]
        },
        {
          title: "土地殿",
          type: "土地神与两童子",
          x: 40,
          y: 55,
          note: "供奉土地神，守护一方土地与百姓生活。",
          image: "/assets/photos/shuanglin/土地殿.JPG"
        }
      ]
    },
    sections: [
      {
        title: "现场观察路径",
        items: ["从山门确认寺院方向", "沿中轴记录殿堂层级", "选一尊塑像做三分钟速写"]
      },
      {
        title: "学生任务框架",
        items: ["找一个最有性格的人物", "记录一个手势或衣纹细节", "写下它像在做什么"]
      },
      {
        title: "待补充内容",
        items: ["各殿代表照片", "彩塑人物小档案", "写生页下载入口"]
      }
    ]
  },
  "jinshang-museum": {
    id: "jinshang-museum",
    path: "/places/jinshang-museum",
    eyebrow: "Jinshang Museum",
    name: "晋商博物馆",
    city: "太原",
    accent: "yellow",
    tags: ["晋商文化", "院落建筑", "时间线"],
    summary: "从北宋帅府到政府衙门，从军阀府邸到大众博物馆。在这里，一个转身就能与历史相碰。",
    intro:
      "将会是哪一个年代，闯进了你的视野？",
    heroSketch: "/assets/sketches/jinshang-museum-sketch.png",
    hideQuickFacts: true,
    quickFacts: [
      ["观察入口", "院落轴线与展陈动线"],
      ["核心对象", "晋商历史与督军府旧址"],
      ["学习动作", "排时间 / 看功能 / 读空间"],
      ["素材状态", "两张信息图已接入"]
    ],
    feature: {
      type: "timeline",
      hidePoints: true,
      title: "晋商发展脉络。",
      summary: "从盐业发家，经茶叶贸易壮大，开创了中国的票号体系，最终在近代转型中逐渐衰落。",
      images: [
        {
          src: "/assets/infographics/jinshang-development-timeline.svg",
          alt: "晋商发展脉络横向信息图"
        },
        {
          src: "/assets/infographics/jinshang-building-function-timeline.svg",
          alt: "山西督军府旧址建筑群功能变化脉络信息图"
        }
      ],
      points: [
        {
          time: "明清",
          title: "商路与票号",
          note: "把远距离贸易、信用和汇兑作为晋商故事的主线。"
        },
        {
          time: "民国",
          title: "督军府",
          note: "院落功能转向军政办公，建筑空间承载新的权力秩序。"
        },
        {
          time: "今天",
          title: "博物馆",
          note: "旧行政院落转化为公共文化空间，适合做时间与空间的对照阅读。"
        }
      ]
    },
    sections: [
      {
        title: "展览阅读路径",
        items: ["先找晋商发展的关键节点", "再看院落如何组织参观动线", "最后比较商业故事与建筑功能"]
      },
      {
        title: "学生任务框架",
        items: ["选一个时间节点做小标题", "画出一进院落的空间顺序", "写一句晋商故事的关键词"]
      },
      {
        title: "待补充内容",
        items: ["展厅照片", "院落平面节点", "晋商关键词卡片"]
      }
    ]
  },
  "yingxian-pagoda": {
    id: "yingxian-pagoda",
    path: "/places/yingxian-pagoda",
    eyebrow: "Yingxian Wooden Pagoda",
    name: "应县木塔",
    city: "朔州 / 应县",
    accent: "blue",
    tags: ["辽代木构", "斗拱", "榫卯"],
    summary:
      "近千年的矗立，是古代建筑审美与工匠精神共同完成的奇迹。",
    intro:
      "每一位初见木塔的人都会忍不住惊叹她的美，木塔她倾斜了，我们不知道还能再看到她站立于此多久的岁月，每一眼都值得刻入记忆，每一个瞬间都是木塔创造的奇迹。",
    heroSketch: "/assets/sketches/yingxian-pagoda-sketch.png",
    hideQuickFacts: true,
    quickFacts: [
      ["观察入口", "塔身轮廓与层级比例"],
      ["核心对象", "辽代木构高塔"],
      ["学习动作", "看层数 / 找斗拱 / 画比例"],
      ["素材状态", "木塔佛像与匾额照片已接入"]
    ],
    feature: {
      type: "map",
      displayMode: "lightbox",
      guideGrid: true,
      title: "木塔内部照片互动框架",
      summary: "在手绘木塔上点击佛像或匾额区域，会弹出对应照片与观察提示。",
      image: "/assets/sketches/yingxian-pagoda-sketch.png",
      imageAlt: "应县木塔线稿",
      points: [
        {
          kind: "photo",
          type: "宝刹区域",
          title: "宝刹",
          label: "宝",
          x: 61,
          y: 10,
          image: "/assets/photos/yingxian-pagoda-tasha.png",
          note: "高约14米，借鉴了印度式佛塔的来源，结合莲花、宝盖、圆光等元素，构成了这座通高67.31米的惊世巨作。"
        },
        {
          kind: "photo",
          type: "佛像区域",
          title: "五层佛像",
          label: "佛",
          x: 43,
          y: 30,
          anchor: "bottom",
          image: "/assets/photos/yingxian-pagoda-floor-5-buddha.jpeg",
          note: "毗卢遮那佛为核心，八尊菩萨环绕四周，构成完整的曼荼罗布局，整体既呈现了唐朝遗风的典雅大气，也融入了契丹北方的审美。"
        },
        {
          kind: "photo",
          type: "佛像区域",
          title: "四层佛像",
          label: "佛",
          x: 43,
          y: 38,
          image: "/assets/photos/yingxian-pagoda-floor-4-buddha.jpeg",
          note: "华严三圣组合，毗卢遮那佛居中，两侧为：左侧骑狮文殊菩萨，右侧骑象普贤菩萨。"
        },
        {
          kind: "photo",
          type: "佛像区域",
          title: "三层佛像",
          label: "佛",
          x: 43,
          y: 48.5,
          image: "/assets/photos/yingxian-pagoda-floor-3-buddha.jpeg",
          note: "八角形佛坛上供佛四方佛，四尊佛像朝向木塔的四个正门。东方阿閦（chù）佛主消灾祈福，南方宝生佛主平安顺遂，西方阿弥陀佛主福寿智慧，北方不空成就佛主事业有成。"
        },
        {
          kind: "photo",
          type: "佛像区域",
          title: "二层佛像",
          label: "佛",
          x: 43,
          y: 60.3,
          anchor: "bottom",
          image: "/assets/photos/yingxian-pagoda-floor-2-buddha.jpeg",
          note: "主佛配两胁侍菩萨，左为骑狮文殊菩萨，右为骑象普贤菩萨。文殊菩萨是造型特殊的四臂形象。"
        },
        {
          kind: "photo",
          type: "佛像区域",
          title: "一层佛像",
          label: "佛",
          x: 50,
          y: 73,
          image: "/assets/photos/yingxian-pagoda-floor-1-buddha.jpeg",
          note: "主尊释迦牟尼佛，塑像保留了辽代的佛像特征。高11米，脸型丰满圆润，右手无畏印，左手与愿印，袒露部分贴金装饰，褒衣博带式袈裟上沥粉堆金绘制了50多条形态各异的龙纹。"
        },
        {
          kind: "photo",
          type: "最高处的皇帝题字",
          title: "五层匾额",
          label: "匾",
          x: 57,
          y: 25,
          image: "/assets/photos/yingxian-pagoda-floor-4-plaque.png",
          note: "明代皇帝朱棣永乐四年，领军北征，途径应州见此塔感慨，“峻极”木塔高耸入云，“神功”工匠技艺高超。"
        },
        {
          kind: "photo",
          type: "最古老的‘身份证’",
          title: "三层匾额",
          label: "匾",
          x: 59,
          y: 45,
          image: "/assets/photos/yingxian-pagoda-floor-2-plaque.jpeg",
          note: "牌匾制作于1194年，是目前发现的年代最久远的，记录了不同朝代对木塔的修缮经历。"
        },
        {
          kind: "photo",
          type: "最显赫的牌匾",
          title: "四层匾额",
          label: "匾",
          x: 58,
          y: 35,
          image: "/assets/photos/yingxian-pagoda-floor-3-plaque.png",
          note: "明代皇帝朱厚照带兵击败外敌入侵后，登塔宴赏群臣题写，即表达塔的壮观也称赞军队的功绩。"
        },
        {
          kind: "photo",
          type: "天柱地轴",
          title: "一层匾额",
          label: "匾",
          x: 61,
          y: 66,
          image: "/assets/photos/yingxian-pagoda-floor-1-plaque.png",
          note: "明代进士书写形容木塔像天柱一样高耸如云，像地轴一样稳固千年。典故出自西汉时期《淮南子》是一本收集了大量上古神话、二十四节气、道家宇宙的绝代奇书。"
        }
      ]
    },
    sections: [
      {
        title: "现场观察路径",
        items: ["先远看塔的整体轮廓", "再数层级和檐口重复", "最后找一组斗拱做局部记录"]
      },
      {
        title: "学生任务框架",
        items: ["画出塔身上收的外轮廓", "标出你看到的重复构件", "用一句话描述它为什么显得稳"]
      },
      {
        title: "待补充内容",
        items: ["斗拱细部照片", "木构结构小词典", "比例观察练习页"]
      }
    ]
  },
  "yungang-grottoes": {
    id: "yungang-grottoes",
    path: "/places/yungang-grottoes",
    eyebrow: "Yungang Grottoes",
    name: "云冈石窟",
    city: "大同",
    accent: "black",
    tags: ["北魏石窟", "佛像风格", "洞窟空间"],
    summary: "一声声的石凿，起初只是北魏皇家对政治统治和文化信仰的需要。",
    intro:
      "他们没有想到，至此以后，中国大地上有多少艺术受到这质朴大胆的佛教艺术的影响，这不是草原文化与中原文化的对立，而是一次文明的碰撞、融合与创造！",
    heroSketch: "/assets/sketches/yungang-grottoes-sketch.png",
    hideQuickFacts: true,
    quickFacts: [
      ["观察入口", "云冈石窟手绘平面图"],
      ["核心对象", "第1-9、13、16-20、38窟重点照片"],
      ["学习动作", "找窟号 / 看佛像 / 比表情 / 记细节"],
      ["素材状态", "重点洞窟照片已接入"]
    ],
    feature: {
      type: "map",
      displayMode: "modal",
      mapLayout: "wide",
      mapAspectRatio: "1815 / 463",
      bottomSpacer: "clamp(260px, 44vh, 460px)",
      guideGrid: true,
      guideStep: 2,
      title: "云冈石窟平面图",
      summary: "在手绘平面图上点击窟号按钮，查看对应洞窟照片与观察提示。",
      image: "/assets/maps/yungang/yungang-plan-handdrawn.png",
      imageAlt: "云冈石窟手绘平面图与洞窟编号",
      points: [
        {
          kind: "photo",
          type: "石鼓洞",
          title: "第1窟",
          label: "1",
          x: 89,
          y: 54,
          image: "/assets/photos/yungang/cave-01.jpg",
          note: "中心塔柱窟，窟内一座两层高的方形塔柱，在石柱上雕刻了仿木结构的斗拱、屋顶等细节，可以从中看到北魏时期的建筑模样。因地下空洞，敲击发出咚咚声而得名。"
        },
        {
          kind: "photo",
          type: "寒泉洞",
          title: "第2窟",
          label: "2",
          x: 87,
          y: 54,
          image: "/assets/photos/yungang/cave-02.jpg",
          note: "窟内中央有三层方塔结构，仿北魏木构建筑上能看到汉代时期的人字拱和一斗三升的中国最早期的木构元素。因洞内墙壁有清泉涌出而得名寒泉洞。"
        },
        {
          kind: "photo",
          type: "云冈最大窟",
          title: "第3窟",
          label: "3",
          x: 75,
          y: 54,
          image: "/assets/photos/yungang/cave-03.jpg",
          note: "石窟开发在北魏孝文帝时代，后因迁都洛阳工程暂停，初唐时期后人继续在洞窟内雕刻了三尊大佛。大佛造像的风格发生了明显的变化，是典型的初唐丰满圆润的面容。"
        },
        {
          kind: "photo",
          type: "云冈绝唱",
          title: "第4窟",
          label: "4",
          x: 72,
          y: 54,
          image: "/assets/photos/yungang/cave-04.jpg",
          note: "该洞窟外部是独特的一门两窗的倒“品”字结构，内部塑像风化严重。窟内刻有云冈石窟最后开凿的记载，520年-525年孝文帝迁都洛阳后，一位夫人为过世的丈夫凿窟塑像所题。"
        },
        {
          kind: "photo",
          type: "云冈最高佛",
          title: "第5窟",
          label: "5",
          x: 66,
          y: 46,
          images: [
            "/assets/photos/yungang/cave-05-buddha.jpg",
            "/assets/photos/yungang/cave-05-relief.jpg"
          ],
          note: "窟内佛像高17.4米，与第6窟为双窟形制。褒衣博带样式的佛像已经是逐步汉化的模样，洞窟前的四层木构楼阁是清代顺治年间所重建，起到了为洞窟内塑像遮风避雨的保护作用。"
        },
        {
          kind: "photo",
          type: "文化交融",
          title: "第6窟",
          label: "6",
          x: 65,
          y: 54,
          image: "/assets/photos/yungang/cave-06-central-pillar.jpg",
          note: "塔庙窟，云冈中期最辉煌华丽的洞窟，中央矗立着高约14-15米双层方塔柱，四壁雕刻33幅释迦牟尼从诞生、出家、修行、涅槃的一生故事。"
        },
        {
          kind: "photo",
          type: "西来第一山",
          title: "第7窟",
          label: "7",
          x: 64.2,
          y: 46,
          images: [
            "/assets/photos/yungang/cave-07-crown.jpg",
            "/assets/photos/yungang/cave-07-six-beauties.jpg"
          ],
          note: "窟内塑有云冈石窟最早的供养人形象，高发髻、半跪合掌，异域风格强烈，被称为“云冈六美人”。窟顶模仿中国传统建筑的平棊藻井，划分为方格，中心雕刻莲花与飞天，营造佛国花团锦簇的美妙氛围。"
        },
        {
          kind: "photo",
          type: "中西合璧",
          title: "第8窟",
          label: "8",
          x: 63,
          y: 54,
          images: [
            "/assets/photos/yungang/cave-08-dimple-bodhisattva.jpg",
            "/assets/photos/yungang/cave-08-dimple-close.jpg",
            "/assets/photos/yungang/cave-08-mahesvara.jpg",
            "/assets/photos/yungang/cave-08-kumara.jpg"
          ],
          note: "窟檐外是汉式殿堂建筑。窟门雕刻来自印度婆罗门教的三头八臂骑牛，摩醯（xī）首罗天手（持中原最早葡萄像）；五头六臂骑孔雀鸠摩罗天。窟门上方雕刻具有鲜卑族发型特征的伎乐飞天。窟内明窗南壁离地11米处，有云冈“最萌酒窝菩萨”。"
        },
        {
          kind: "photo",
          type: "世界之窗",
          title: "第9窟",
          label: "9",
          x: 61,
          y: 46,
          images: [
            "/assets/photos/yungang/cave-09.jpg",
            "/assets/photos/yungang/cave-09-1.jpg",
            "/assets/photos/yungang/cave-09-2.jpg"
          ],
          note: "窟门雕刻传统中式建筑的庑殿顶、金翅鸟、鸱尾、一斗三升、人字拱，佛龛两侧又有古希腊柱式、忍冬纹装饰，完美将中西方建筑特征融合展现。云冈独一份露齿菩萨与云冈最小佛也藏于此窟。"
        },
        {
          kind: "photo",
          type: "被换头的佛像",
          title: "第13窟",
          label: "13",
          x: 54,
          y: 54,
          image: "/assets/photos/yungang/cave-13-seven-buddhas.jpg",
          note: "窟内主像为13.5米的交脚弥勒菩萨，右手肘下有一尊高1.8米的托臂力士，是云冈唯一有此造型的佛像组合。主像对面雕刻7尊过去佛，左侧2尊佛首在辽代替换成了当时更流行的圆润饱满的风格。"
        },
        {
          kind: "photo",
          type: "悲伤的黑洞与汉化的塑像",
          title: "第16窟",
          label: "16",
          x: 44.6,
          y: 51,
          image: "/assets/photos/yungang/cave-16.jpg",
          note: "第16窟主佛高约13.5米，为立佛。右手举在胸前施无畏印，左手自然下垂，拇指与中指相捏近似说法印。服饰重点看褒衣博带式袈裟：胸前结带，外衣宽大，下垂衣褶带有汉魏衣冠气息。附窟中有一个横长方形的小型洞窟，其中2尊交脚菩萨在1922年左右被盗，现存美国、法国博物馆内。备注：这种衣服借用了中式文人、士大夫的宽袍博带风格，是佛教造像进入中国后发生文化融合的结果。"
        },
        {
          kind: "photo",
          type: "未上台的皇太子",
          title: "第17窟",
          label: "17",
          x: 42.8,
          y: 46,
          image: "/assets/photos/yungang/cave-17.jpg",
          note: "主尊为交脚弥勒菩萨像，窟内地面低于窟外1米，总高15.5米，昙曜为早逝的太子拓跋晃所塑，弥勒菩萨作为未来佛也是暗示这位本该成为北魏皇帝的护法太子。窟内上部塑有一尊云冈最美思维菩萨，手拖腮、嘴角上扬、神态慈祥。"
        },
        {
          kind: "photo",
          type: "千佛袈裟",
          title: "第18窟",
          label: "18",
          x: 41,
          y: 55,
          images: [
            "/assets/photos/yungang/cave-18-exterior.jpg",
            "/assets/photos/yungang/cave-18-buddha.jpg",
            "/assets/photos/yungang/cave-18-smiling-disciple.jpg",
            "/assets/photos/yungang/cave-18-hand.jpg"
          ],
          note: "第18窟主尊立佛高约15.5米。右臂下垂，左手挽衣襟置于胸前，手指间有“手足缦相”的蹼状连接，身披云冈独有的千佛袈裟，象征佛祖举身毛孔散发出的光芒，化身无量千佛照耀世界。"
        },
        {
          kind: "photo",
          type: "云冈第二高",
          title: "第19窟",
          label: "19",
          x: 40,
          y: 46,
          images: [
            "/assets/photos/yungang/cave-19.jpg",
            "/assets/photos/yungang/cave-19-rahula.jpg"
          ],
          note: "第19窟主佛高约16.8米，是云冈第二高佛像。主尊结跏趺坐，右手上举，肘下有小柱支撑；袈裟偏袒右肩，衣缘浅浮雕折带纹。两侧耳洞另有倚坐佛，适合比较主尊坐姿与侧洞佛像的空间关系。"
        },
        {
          kind: "photo",
          type: "白佛爷洞",
          title: "第20窟",
          label: "20",
          x: 37,
          y: 50,
          image: "/assets/photos/yungang/cave-20-buddha.jpg",
          note: "第20窟露天大佛高约13.5米。主佛结跏趺坐，头顶高肉髻，眉间有白毫，面部丰满、双耳垂肩；身着袒右肩式袈裟，衣料显得厚重，保留了中亚、犍陀罗式造像的雄浑感。备注：露出右肩的穿法来自印度佛教僧衣传统，袒右肩常表示恭敬、礼拜或便于行动，随佛教图像经西域传入中国。"
        },
        {
          kind: "photo",
          type: "父亲的祭奠",
          title: "第38窟",
          label: "38",
          x: 22,
          y: 36,
          image: "/assets/photos/yungang/cave-38-ananda.jpg",
          note: "该窟为父亲为参军阵亡的儿子所凿，其中雕刻“罗睺罗初见释迦”“雕鹫怖阿难入定”的故事都展现了父亲对儿子、师傅对徒弟的疼爱之情；“幢倒伎乐图”也展现了北魏时期祭祀的习俗。"
        }
      ]
    },
    sections: [
      {
        title: "现场观察路径",
        items: ["先在平面图上找到窟号", "再看照片中的主像或人物细节", "最后把早期、中期、晚期洞窟做比较"]
      },
      {
        title: "学生任务框架",
        items: ["圈出一个最醒目的佛像轮廓", "记录一个人物表情", "用一句话写下这个洞窟给你的第一印象"]
      },
      {
        title: "待补充内容",
        items: ["洞窟路线页", "昙曜五窟专题图", "佛像风格比较卡片"]
      }
    ]
  },
  "huayan-temple": {
    id: "huayan-temple",
    path: "/places/huayan-temple",
    eyebrow: "Huayan Temple",
    name: "华严寺",
    city: "大同",
    accent: "red",
    tags: ["辽金建筑", "斗拱", "彩塑"],
    summary: "千年时光这里辉煌过、衰败过，如果没有对历史与古建筑的向往，也许今天这里只会有几方硕大的高台。",
    intro:
      "一代人的深究与保护，还原了那辽金时期的辉煌，也让我们看到现代人对过往的再创造。",
    heroSketch: "/assets/sketches/huayan-hall-sketch.png",
    hideQuickFacts: true,
    quickFacts: [
      ["观察入口", "大雄宝殿外观与薄伽教藏殿彩塑"],
      ["核心对象", "金代大雄宝殿 / 辽代薄伽教藏殿"],
      ["学习动作", "看屋顶 / 找斗拱 / 读表情"],
      ["素材状态", "建筑照片与菩萨照片已接入"]
    ],
    feature: {
      type: "map",
      guideGrid: true,
      guideStep: 5,
      title: "华严寺观察框架",
      summary: "在线稿上点击大雄宝殿与薄伽教藏殿节点，把寺院整体空间拆成可以记录的现场观察任务。",
      image: "/assets/maps/huayan-temple-map-sketch.png",
      imageAlt: "华严寺整体平面线稿",
      points: [
        {
          type: "庑殿顶·坐西朝东",
          title: "大雄宝殿",
          label: "大雄宝殿",
          x: 75,
          y: 30,
          image: "/assets/photos/huayan-main-hall.jpg",
          note: "大雄宝殿始建于辽代清宁八年（1062年），金代天眷三年（1140年）重建。它立在约4米高的台基上，面阔九间（约53.75米）、进深十椽（约29米），建筑面积1559平方米，接近3.7个标准篮球场，远看会感到整座殿横向展开得特别开阔。"
        },
        {
          kind: "photo",
          type: "屋脊细节",
          title: "明代鸱吻",
          label: "左鸱吻",
          x: 67,
          y: 23,
          image: "/assets/photos/huayan-chiwen-left-ming.jpg",
          note: "高4.5米，龙首造型更成熟、色泽更鲜亮细腻，是明代仿凿辽金原物补造的。"
        },
        {
          kind: "photo",
          type: "屋脊细节",
          title: "辽代鸱吻",
          label: "右鸱吻",
          x: 80,
          y: 25,
          image: "/assets/photos/huayan-chiwen-right-liao.jpg",
          note: "高4.5米，现存最大的古代建筑琉璃鸱吻，龙首怒目，巨口獠牙，已脱离了早期鱼尾造型。"
        },
        {
          kind: "photo",
          type: "大雄宝殿·调御丈夫·壸门",
          title: "大雄宝殿匾额",
          label: "匾",
          x: 69,
          y: 33,
          image: "/assets/photos/huayan-main-hall-plaque.jpg",
          note: "“大雄”是对释迦牟尼佛的尊称，意思是能降伏烦恼、无所畏惧；横匾“调御丈夫”也是佛的称号，指能引导众生的人。再看匾额下方的壸（kǔn）门：门洞边缘像佛龛一样起伏，一般用在重要的建筑中。"
        },
        {
          type: "歇山顶",
          title: "薄伽教藏殿",
          label: "薄伽教藏殿",
          x: 28,
          y: 44,
          image: "/assets/photos/huayan-bojia-hall.jpg",
          note: "“薄伽”来自佛的尊称，“教藏”可以理解为收藏佛教经典的地方，所以这座殿像辽代寺院里的图书馆。它建于辽重熙七年（1038年），殿内曾保存经书、壁藏和天宫楼阁，是华严寺保存佛教知识与辽代木作艺术的重要空间。"
        },
        {
          kind: "photo",
          type: "泥质彩塑",
          title: "合掌露齿菩萨",
          label: "塑",
          x: 25,
          y: 47,
          image: "/assets/photos/huayan-smiling-bodhisattva.jpg",
          note: "高约3.2米，塑于辽代（1038年），头戴花蔓宝冠，面容圆润，双眼微垂，温和宁静，露齿含笑，双手合十于胸前，虔诚慈悲。立于莲花之上，清净无尘，身姿舒展挺拔，将菩萨的庄严和人间的温柔合于一身。"
        },
        {
          kind: "photo",
          type: "木作细节",
          title: "天宫楼阁",
          label: "楼阁",
          x: 30,
          y: 47,
          image: "/assets/photos/huayan-tiankong-louge.jpg",
          note: "薄伽教藏殿里的天宫楼阁像一组缩小的木构建筑模型，藏在殿内壁藏之间，用很小的尺度表现楼阁、斗拱。"
        }
      ]
    },
    sections: [
      {
        title: "现场观察路径",
        items: ["先站远看大雄宝殿的屋顶轮廓", "走近檐下找斗拱重复的节奏", "进入殿内选择一尊人物看表情"]
      },
      {
        title: "学生任务框架",
        items: ["画出屋顶的四坡关系", "圈出你看到的一组斗拱", "用三个词描述露齿菩萨的神情"]
      },
      {
        title: "待补充内容",
        items: ["寺院总平面节点", "殿内彩塑群像照片", "斗拱与鸱吻观察卡片"]
      }
    ]
  },
  "shanhua-temple": {
    id: "shanhua-temple",
    path: "/places/shanhua-temple",
    eyebrow: "Shanhua Temple",
    name: "善化寺",
    city: "大同",
    accent: "yellow",
    tags: ["辽金建筑", "三圣殿", "寺庙空间"],
    summary: "这里有明代的俏皮，金代的悲悯，隐藏在那些被忽略的角落，等待有心之人，去看到。",
    intro:
      "原来我们与古人是如此的相似，原来动画里的人早已生活在千百年前的塑像之中。",
    heroSketch: "/assets/sketches/shanhua-hall-sketch.png",
    hideQuickFacts: true,
    quickFacts: [
      ["观察入口", "善化寺平面布局"],
      ["核心对象", "山门 / 三圣殿 / 大雄宝殿"],
      ["学习动作", "看轴线 / 找构件 / 读造像"],
      ["素材状态", "平面线稿与重点照片已接入"]
    ],
    feature: {
      type: "map",
      mapAspectRatio: "1373 / 1145",
      guideGrid: true,
      guideStep: 5,
      fitToImage: true,
      popoverPlacement: "point",
      title: "善化寺平面观察图",
      summary: "在线稿上点击中轴线上的殿堂节点，查看对应照片与观察提示。",
      image: "/assets/maps/shanhua-temple-map-sketch.png",
      imageAlt: "善化寺平面布局线稿",
      points: [
        {
          kind: "photo",
          type: "1.红脸主“顺”西方天王 2.手托宝塔主“雨”北方天王 3.斜抱琵琶主“调”东方天王 4.手持宝剑主“风”南方天王",
          title: "四大天王",
          label: "山门",
          x: 45,
          y: 75,
          images: [
            "/assets/photos/shanhua/four-heavenly-kings-1.jpg",
            "/assets/photos/shanhua/four-heavenly-kings-2.jpg",
            "/assets/photos/shanhua/four-heavenly-kings-3.jpg",
            "/assets/photos/shanhua/four-heavenly-kings-4.jpg"
          ],
          note: "现存金代最大、规格最高的庑殿顶山门，内塑4尊明代天王像，民国时期又重新上妆。"
        },
        {
          kind: "photo",
          type: "《大金西京大普恩寺重修大殿记》",
          title: "朱弁碑",
          label: "石碑",
          x: 39,
          y: 50,
          image: "/assets/photos/shanhua/zhu-bian-stele.jpg",
          note: "1127年，金军攻破北宋都城汴梁，皇帝被俘押送金国，北宋灭亡，这就是“靖康之耻”事变。南宋建立后，1128年，朱弁奉命出使金国，希望通过谈判迎回皇帝，但谈判破裂，朱弁被扣留在金朝长达16年。期间他被关押于善化寺，教授金国贵族子弟汉文化，收集金国情报，1143年宋金和达成后终于南归。"
        },
        {
          kind: "photo",
          type: "三圣殿构件",
          title: "莲花斗拱",
          label: "斗拱",
          x: 55,
          y: 55,
          image: "/assets/photos/shanhua/lotus-dougong.jpg",
          note: "三圣殿下，金代工匠的炫技之作，打破传统的垂直斗拱造型，中间插入两组斜拱，如同一朵绽放的莲花。硕大的斗拱是金代建筑的特色，即分散了屋顶的承重压力，也增加了木构建筑的整体稳定性。"
        },
        {
          kind: "photo",
          type: "庑殿顶",
          title: "三圣殿",
          label: "外观",
          x: 50,
          y: 40,
          image: "/assets/photos/shanhua/sansheng-hall.jpg",
          note: "巨大深远的垂脊让屋檐如同展翅的巨鸟，檐柱采用宋、辽代特有的升起形制，即从中间向两端角柱逐渐加高，使前檐形成柔和上扬的曲线，让整座殿看起来更舒展、有生气。"
        },
        {
          kind: "photo",
          type: "大雄宝殿",
          title: "大雄宝殿",
          label: "大殿",
          x: 65,
          y: 15,
          image: "/assets/photos/shanhua/daxiong-hall.jpg",
          note: "始建于辽代（1062年），辽末战火部分损坏，金代（1128年）重修，殿内保留了辽代塑有5方佛、2弟子、2胁侍菩萨，以及环绕两侧的高约3.5米的金代24诸天塑像。每一个尊雕塑姿态精美，各尽其妙。"
        },
        {
          kind: "photo",
          type: "大雄宝殿细节",
          title: "藻井",
          label: "藻井",
          x: 55,
          y: 20,
          image: "/assets/photos/shanhua/caisson.jpg",
          note: "辽代藻井的顶级代表作，用内外两种不同共计56朵斗拱构成了具有视觉延伸感的空间，顶部为明代绘制的二龙戏珠图，四角各绘制一只展翅凤凰。周边辅助设置平棊，衬托中心的主藻井地位。"
        },
        {
          kind: "photo",
          type: "大雄宝殿造像",
          title: "二十四诸天",
          label: "诸天",
          x: 70,
          y: 25,
          fullscreen: true,
          fullscreenAspectRatio: "1547 / 1016",
          image: "/assets/photos/shanhua/twenty-four-devas-positions.jpg",
          note: "二十四诸天先看站位关系：观察人物在大雄宝殿中的排列、左右呼应和整体秩序，先建立空间位置，再进入具体人物。",
          devas: [
            {
              name: "帝释天",
              station: "左侧第1位",
              x: 10.2,
              y: 9,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-12.png",
              note: "护法神，造像为后妃装扮。",
            },
            {
              name: "大自在天",
              station: "左侧第2位，对应站位图伊舍那天",
              x: 7.2,
              y: 12.5,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-6.png",
              note: "护法神，红发怒目在威严中体现护法卫教。"
            },
            {
              name: "月天",
              station: "左侧第3位",
              x: 7.2,
              y: 19.5,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-18.png",
              note: "月亮神，掌管夜晚，与日天对应，同为文臣模样。"
            },
            {
              name: "罗刹天",
              station: "左侧第4位",
              x: 7.2,
              y: 27,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-20.png",
              note:"护法神，持剑，保留较多辽金风格，可能是金代原塑遗存。"
            },
            {
              name: "菩提树神",
              station: "左侧第5位",
              x: 7.2,
              y: 34.5,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-21.png",
              note: "守护菩提树之神，佩戴华丽头冠，衣着袈裟的女性形象。"
            },
            {
              name: "尊星天",
              station: "左侧第6位",
              x: 7.2,
              y: 41,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-11.png",
              note:"手拿古代大臣上朝笏板，是古印度的星辰之神。"
            },
            {
              name: "大辩才天",
              station: "左侧第7位",
              x: 7.2,
              y: 48.3,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-7.png",
              note: "智慧与艺术女神，同为六臂女性形象，气质高雅。"
            },
            {
              name: "多闻天",
              station: "左侧第8位",
              x: 7.2,
              y: 55.5,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-4.png",
              note:"托塔（遗失），愠怒状，眉头紧锁，双目半睁。"
            },
            {
              name: "广目天",
              station: "左侧第9位",
              x: 7.2,
              y: 62.8,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-13.png",
              note:"持宝珠和蛟龙（或蛇），怒目圆睁。"
            },
            {
              name: "吉祥功德天",
              station: "左侧第10位",
              x: 7.2,
              y: 70,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-1.png",
              note:"财富与吉祥女神，面容端庄，衣饰华美，被誉为「金代最美彩塑」，面如满月，神态慈悲。"
            },
            {
              name: "密迹金刚",
              station: "左侧第11位",
              x: 7.2,
              y: 77,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-10.png",
              note:"护法金刚，威猛造型，肌肉饱满生动，哼哈二将的原型。"
            },
            {
              name: "焰摩天",
              station: "左侧第12位，对应站位图水天",
              x: 10.2,
              y: 82.6,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-19.png",
              note:"阎王，掌管幽冥和阴界。"
            },
            {
              name: "大梵天",
              station: "右侧第1位",
              x: 89.5,
              y: 9,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-5.png",
              note:"佛教护法神，创世之神。造像为中年帝王相，气质儒雅。"
            },
            {
              name: "风天",
              station: "右侧第2位",
              x: 92.3,
              y: 12.5,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-23.png",
              note:"年轻武将造型，持戟（可能为明清补配），愠怒状。"
            },
            {
              name: "日天",
              station: "右侧第3位",
              x: 92.3,
              y: 19.5,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-17.png",
              note:"太阳神，掌管光明，文臣装束，文质彬彬。"
            },
            {
              name: "韦驮天",
              station: "右侧第4位",
              x: 92.3,
              y: 27,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-22.png",
              note:"护法神，守护佛法	武将装束，刚劲挺拔，威武雄健。"
            },
            {
              name: "地天",
              station: "右侧第5位",
              x: 92.3,
              y: 34.5,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-2.png",
              note:"大地之神，稳重端庄女性造型。"
            },
            {
              name: "大黑天",
              station: "右侧第6位，对应站位图火天",
              x: 92.3,
              y: 41,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-8.png",
              note:"火神，怒发飞扬，在威严中体现护法卫教之态。"
            },
            {
              name: "摩利支天",
              station: "右侧第7位",
              x: 92.3,
              y: 48.3,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-15.png",
              note:"光明女神，隐身消灾，六臂女性神祇，造型优美。"
            },
            {
              name: "持国天王",
              station: "右侧第8位",
              x: 92.3,
              y: 55.5,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-14.png",
              note:"戎装武将琵琶为后补，愤怒状开脸，双目圆睁，民国时期被抹白准备涂装后停工。"
            },
            {
              name: "增长天王",
              station: "右侧第9位",
              x: 92.3,
              y: 62.8,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-3.png",
              note:"持剑武将造型，姿态板正。"
            },
            {
              name: "鬼子母",
              station: "右侧第10位",
              x: 92.3,
              y: 70,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-24.png",
              note:"保护儿童之神，风姿绰约，眉目传神，一如菩萨之慈眼视众生。下侧小鬼是她作恶事的形象。"
            },
            {
              name: "散脂大将",
              station: "右侧第11位，对应站位图深沙大将",
              x: 92.3,
              y: 77,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-16.png",
              note:"护法神，武将装束，威武雄健。"
            },
            {
              name: "娑竭罗龙王",
              station: "右侧第12位",
              x: 88.9,
              y: 82.6,
              image: "/assets/photos/shanhua/twenty-four-devas/deva-9.png",
              note:"与火天、风天等自然神对应。"
            }
          ]
        }
      ]
    },
    sections: [
      {
        title: "现场观察路径",
        items: ["从山门进入，先看四大天王", "到三圣殿比较碑刻、斗拱和殿堂外形", "最后进入大雄宝殿看藻井与二十四诸天"]
      },
      {
        title: "学生任务框架",
        items: ["在平面图上圈出中轴线", "选一个斗拱或藻井细节做线稿记录", "为一位天王或诸天写一句观察描述"]
      },
      {
        title: "待补充内容",
        items: ["殿内空间路线", "人物小档案", "现场速写任务页"]
      }
    ]
  }
};

export default placeDetails;
