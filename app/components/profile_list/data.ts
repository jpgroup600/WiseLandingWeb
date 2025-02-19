import { CardDataInterface, QnaDataInterface, PortDataInterface } from "@/app/constants/default";


const cardData1 = [
    {
      title: "파워링크",
      description: "원하시는 상품을 네이버 상위에 노출되게 흥보해드리겠습니다",
      icon: "/d2.PNG", // Replace with actual image paths
    },
    {
      title: "카카오 광고",
      description: "대한민국 대표메신저, 여기에 당신의 상품을 판매할수있게 도와드립니다",
      icon: "/d4.PNG", // Replace with actual image paths
    },
    {
      title: "인스타그램 광고",
      description: "20~30대들을 위한 광고를 진행해 고객을 모집해드리겠습니다",
      icon: "/d2.PNG", // Replace with actual image paths
    },
    {
      title: "유튜브 광고",
      description: "유튜브에 영상광고 및 유튜버 섭외를 통한 광고를 진행해드리겠습니다",
      icon: "/d4.PNG", // Replace with actual image paths
    },
    {
        title: "브랜딩 기획",
        description: "당신의 브랜드가 사랑받는 이유 저희가 만들어드리겠습니다",
        icon: "/d4.PNG", // Replace with actual image paths
      },
  ];
  
  const cardData2 = [
    {
      title: "프로그램 개발",
      description: "생각해둔 프로그램이 있으시면 제가 만들어드리겠습니다",
      icon: "/d2.PNG", // Replace with actual image paths
    },
    {
      title: "앱 기획 및 개발",
      description: "플랫폼 서비스를 만들고 싶으신가요? 상세한 구상과 개발은 저에게 맡기세요",
      icon: "/d4.PNG", // Replace with actual image paths
    },
    {
      title: "관리 프로그램",
      description: "직원, 매출 , 업무 관리가 필요하신가요? 프로그램으로 해결하세요",
      icon: "/d2.PNG", // Replace with actual image paths
    },
    {
      title: "브랜딩 페이지",
      description: "남들과 차별되는 사이트가 필요하신가요?",
      icon: "/d4.PNG", // Replace with actual image paths
    },
    {
        title: "인공지능 개발",
        description: "직원을 대신하는 인공지능 자동화 서비스 전문입니다",
        icon: "/d4.PNG", // Replace with actual image paths
      },
  ];
  
  const cardData3 = [
    {
      title: "제품 활영",
      description: "제품의 특징과 활용도를 돋보이게 촬영합니다",
      icon: "/d2.PNG", // Replace with actual image paths
    },
    {
      title: "상세페이지 제작",
      description: "제품의 장점, 사용법을 한눈에 정리하고 구매 욕구를 자극하는 디자인을 만들어드립니다",
      icon: "/d4.PNG", // Replace with actual image paths
    },
    {
      title: "영상 제작",
      description: "제품이나 브랜드의 특성을 효과적으로 전달하는 영상을 제작합니다",
      icon: "/d2.PNG", // Replace with actual image paths
    },
    {
      title: "배너 제작",
      description: "광고나 프로모션을 효과적으로 알리기 위한 디자인을 제작합니다",
      icon: "/d4.PNG", // Replace with actual image paths
    },
  ];
  
  const cardData4 = [
    {
      title: "상품관리",
      description: "프로모션, 각종 온라인 쇼핑몰(아마존,쿠팡,네이버,유튜브 등) 행사 참여 및 입점",
      icon: "/d2.PNG", // Replace with actual image paths
    },
    {
      title: "판매전략 기획",
      description: "어떤 플랫폼에서 잘팔리는지를 분석하고 판매전략을 기획합니다",
      icon: "/d2.PNG", // Replace with actual image paths
    },
    {
      title: "매출,재고 관리",
      description: "인기있는 제품과 아닌 제품을 분류하고 그게 맞는 상품 및 업무 배치를 합니다",
      icon: "/d2.PNG", // Replace with actual image paths
    },
    {
      title: "실적 개선 프로젝트",
      description: "상품 기획, 운영, 마케팅, 채널·재고 관리, 협업, 매출 분석을 해드립니다 ",
      icon: "/d2.PNG", // Replace with actual image paths
    },
    

  ];

// qna 데이터 

  const qnaData1 = [
    {
      question: "광고가 어디까지 가능한가요?",
      answer: `온라인과 오프라인을 포함한 대부분의 광고가 가능합니다 <br>  
      온라인: 네이버, 구글, 유튜브, 인스타그램, 페이스북, 틱톡, 카카오 등 다양한 플랫폼 광고 운영 <br>
      오프라인: 지하철, 버스, 전단지, 옥외 광고, 신문, 잡지 등 <br> 
    <br><strong>고객님의 목표와 예산에 맞춰 최적의 광고 전략을 제안해드립니다.</strong>
      `
    },
    {
      question: "마케팅 성과를 측정하는 방법이 따로 있나요?",
      answer: `네, 성과를 정확히 측정할 수 있도록 자체 데이터 분석 자동화 프로그램을 제공합니다
      <br> 성과를 눈으로 확인할수 있도록 주기적인 보고서를 제공해드립니다
      `
    },
    {
      question: "유튜브 광고를 하고 싶은데 영상을 저희가 제공해야 하나요?",
      answer: `영상이 이미 있다면 그대로 활용할 수 있습니다 <br>
      혹시 없으시다면은 광고 목적(브랜딩, 제품 홍보 등)에 맞춰서 저희가 제작해드릴 수 있습니다 
      `
    },
    {
      question: "브랜딩 광고와 마케팅 광고는 어떻게 다른가요?",
      answer: `마케팅 광고는 ‘지금 당장’ 고객을 만들고, 브랜딩 광고는 ‘오래도록’ 고객을 남깁니다`
    },
    {
      question: "계약 조건은 어떻게되나요?",
      answer: "구체적인 계약 조건은 상담을 통해 명학하게 안내드립니다"
    }
  ];

  const qnaData2 = [
    {
      question: "보험료 납입 주기는 어떻게 되나요?",
      answer: "월납, 3개월납, 6개월납, 연납으로 선택하실 수 있습니다. 납입주기별로 보험료 수준이 다르니 상품 가입 시 참고하시기 바랍니다."
    }
  ];

  const qnaData3 = [
    {
      question: "상세페이지 디자인이 매출에 영향을 주나요?",
      answer: "네 디자인 뿐만 아니라 글과 구성을 어떻게 설계하는것에 따라 구매욕구를 자극할수 있습니다 그렇기에 매출에 변화를 가져오게 됩니다"
    },
    {
      question: "SNS 광고용 짧은 영상도 제작이 가능한가요?",
      answer: "네, 인스타그램, 유튜브, 틱톡 등 플랫폼 맞춤형 숏폼 영상을 제작해 드립니다"
    },
    {
      question: "영상 기획부터 편집까지 모두 진행해 주시나요?",
      answer: "네, 기획, 촬영, 편집, 자막 및 효과 작업까지 원스톱으로 제공합니다"
    }
  ];

  const qnaData4 = [
    {
      question: "보험료 납입 주기는 어떻게 되나요?",
      answer: "월납, 3개월납, 6개월납, 연납으로 선택하실 수 있습니다. 납입주기별로 보험료 수준이 다르니 상품 가입 시 참고하시기 바랍니다."
    }
  ];

  const portData1: PortDataInterface[] = [
    {
      title: "프로그램 개발",
      description:'프로그램 개발',
      src : "/portfolio/dev/asm.mp4",
      link : "https://asm.co.kr/",
      type : "video"
    },
    
    {
      title: "프로그램 개발",
      description:'프로그램 개발',
      src : "/portfolio/dev/asm.mp4",
      link : "https://asm.co.kr/",
      type : "video"
    },

    {
      title: "프로그램 개발",
      description:'프로그램 개발',
      src : "/portfolio/dev/asm.mp4",
      link : "https://asm.co.kr/",
      type : "video"
    },
  ]

  const portData2: PortDataInterface[] = [
    {
      title: "프로그램 개발",
      description:'프로그램 개발',
      src : "/portfolio/dev/asm.mp4",
      link : "https://asm.co.kr/",
      type : "video"
    },
    
  ]


  const portData3: PortDataInterface[] = [
    {
      title: "프로그램 개발",
      description:'프로그램 개발',
      src : "/portfolio/dev/asm.mp4",
      link : "https://asm.co.kr/",
      type : "video"
    },
    
  ]

  const portData4: PortDataInterface[] = [
    {
      title: "프로그램 개발",
      description:'프로그램 개발',
      src : "/portfolio/dev/asm.mp4",
      link : "https://asm.co.kr/",
      type : "image"
    },
    
  ]





export const cardData = {
  data1: cardData1,
  data2: cardData2,
  data3: cardData3,
  data4: cardData4
};

export const qnaData = {
  data1: qnaData1,
  data2: qnaData2,
  data3: qnaData3,
  data4: qnaData4
};

export const portData = {
  data1: portData1,
  data2: portData2,
  data3: portData3,
  data4: portData4
};

