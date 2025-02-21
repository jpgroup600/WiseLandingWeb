// Interface definitions
export interface Qna {
    question: string;
    answer: string;
}

export interface CardData {
    title: string;
    description: string;
    icon: string;
}


export interface CardDataInterface {
    title: string;
    description: string;
    icon: string;
  }
  
  export interface QnaDataInterface {
    question: string;
    answer: string;
  }
  
  export interface PortDataInterface {
    title: string;
    description: string;
    src: string;
    link: string | null;
    type: "video" | "image" | "youtube";
  }

  export interface SubmitFormsInterface {

    companyName: string;
    userName : string;
    rank : string;
    phone : string;
  }



  




