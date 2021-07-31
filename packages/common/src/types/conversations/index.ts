export interface IConversationParticipant {
  name: string;
  email: string;
  id: string;
}

export interface IConversationInfo {
  id: string;
  can_reply: boolean;
  message_count: number;
  participants: {
    data: IConversationParticipant[];
  };
}

export interface IFbPaging {
  cursors: {
    before: string;
    after: string;
  };
  next?: string;
  previous?: string;
}

export interface IConversationMessageAttachment {
  data: {
    name: string;
    image_data: {
      width: number;
      height: number;
      max_width: number;
      max_height: number;
      url: string;
      preview_url: string;
    };
    id: string;
  }[];
}

export interface IConversationMessageShare {
  data: {
    name?: string;
    id: string;
  }[];
}

export interface IConversationMessage {
  message?: string;
  id: string;
  created_time: string;
  sticker?: string;
  attachments?: IConversationMessageAttachment;
  shares?: IConversationMessageShare;
  from: {
    id: string;
    name: string;
    email: "string";
  };
}
