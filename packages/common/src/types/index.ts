import { IActivity, ICurrency, IInstance, IReply } from "../constants/enums";
import {
  TPersistentMessaging,
  TPersistentDelivery,
} from "../constants/persistentMenus";

export interface IAdmin {
  name: string;
  username: string;
  avatar: string;
}

export interface ITokens {
  accessToken: string;
}

export interface IAuth {
  admin: IAdmin;
  tokens: ITokens;
  isAuthenticated: boolean | null;
}

export interface IPersistentMenu {
  messaging: TPersistentMessaging[];
  delivery: TPersistentDelivery[];
}

export interface IServices {
  analyticsM: {
    active: boolean;
    activatedBefore: boolean;
    lastUpdate: Date;
    nlpM: boolean;
    replyM: boolean;
    saveM: boolean;
  };
  analyticsC: {
    active: boolean;
    activatedBefore: boolean;
    lastUpdate: Date;
    nlpC: boolean;
    replyC: boolean;
    saveC: boolean;
  };
  messaging: {
    active: boolean;
    activatedBefore: boolean;
    lastUpdate: Date;
    nlpM: boolean;
    replyM: boolean;
    saveM: boolean;
  };
  commenting: {
    active: boolean;
    activatedBefore: boolean;
    lastUpdate: Date;
    nlpC: boolean;
    replyC: boolean;
    saveC: boolean;
  };
  delivery: {
    active: boolean;
    activatedBefore: boolean;
    lastUpdate: Date;
    nlpM: boolean;
    replyM: boolean;
    saveM: boolean;
    nlpC: boolean;
    replyC: boolean;
    saveC: boolean;
  };
}

export interface IPage {
  userId:
    | string[]
    | {
        _id: string;
        name: string;
      }[];
  primaryUserId:
    | string
    | {
        _id: string;
        name: string;
      };
  pageId: string;
  pageName: string;
  imgUrl: string;
  pageType: string;

  expiresIn: number;
  validStartTime: Date;
  lastUpdate: Date;
  valid: boolean;
  tokenOwnerId:
    | string
    | {
        _id: string;
        name: string;
      };
  subscribed: boolean;

  instance: IInstance;
  replyLangs: IReply[];
  currency: ICurrency;
  country?: string;

  greetings?: string;
  persistentMenu?: IPersistentMenu;

  services: IServices;

  activity: IActivity;
  activityUpdatedAt?: Date;
  createdAt: Date;
}

export interface IMyPage {
  pageId: string;
  pageName: string;
  imgUrl: string;
  activity: IActivity;
}

export interface IMyPagesResponse {
  pages: IMyPage[];
  count: number;
}

export interface IPageSearch {
  name?: string;
  activity?: number;
}

export interface ISuggestListPage {
  _id: string;
  pageId: string;
  pageName: string;
}
