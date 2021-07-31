export type IAvailableTimes = "breakfast" | "lunch" | "evening" | "dinner" | "midnight";
export type ISpecialMenu =
  "breakfast" | "lunch" | "evening" | "dinner" | "midnight" | "iftar" | "seheri" | "event";


export const availableTimesEnum: IAvailableTimes[] =
  ["breakfast", "lunch", "evening", "dinner", "midnight"];

export const specialMenusEnum: ISpecialMenu[] =
  ["breakfast", "lunch", "evening", "dinner", "midnight", "iftar", "seheri", "event"];

export interface ISpecialMenuBranchSchema {
  name: ISpecialMenu;
  pics?: string[];
  showPics: boolean;
  showCards: boolean;
  showFoods: boolean;
  showBuffet: boolean;
  showMenuCard: boolean;
  showText: boolean;
  textEn?: string;
  textBn?: string;
}

export interface ISpecialMenuRestaurantSchema extends ISpecialMenuBranchSchema {
  sendOneMenu: boolean;
  sameMenu: boolean;
}

export interface IMenuAndFood {
  hasBuffet: boolean;
  cuisines?: string[];
  kindOfFoodEn?: string;
  kindOfFoodBn?: string;
  availableTimes?: IAvailableTimes[];
  sendOneMenu: boolean;
  sameMenu: boolean;
  menuEn?: string;
  menuBn?: string;
  sendMenuText: boolean;
  menuPics?: string[];
  menu: {
    showBroken: boolean;
    showPics: boolean;
    showCards: boolean;
    showFoods: boolean;
    showBuffet: boolean;
    showMenuCard: boolean;
    showText: boolean;
    textEn?: string;
    textBn?: string;
  };
  specialMenu: ISpecialMenuRestaurantSchema[];
}

export interface IMenuAndFoodBranch {
  _id: string;
  resId: string;
  pageId: string;
  branchName: string;
  branchAreaEn: string;
  branchAreaBn: string;

  menuEn?: string;
  menuBn?: string;
  sendMenuText: boolean;
  menuPics?: string[];
  menu: {
    showBroken: boolean;
    showPics: boolean;
    showCards: boolean;
    showBuffet: boolean;
    showMenuCard: boolean;
    showFoods: boolean;
    showText: boolean;
    textEn?: string;
    textBn?: string;
  };
  specialMenu?: ISpecialMenuBranchSchema[];
}