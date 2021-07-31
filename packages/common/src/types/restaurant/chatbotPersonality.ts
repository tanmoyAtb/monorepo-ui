export interface IChatbotPersonality {
  priceHighEn?: string[];
  priceHighBn?: string[];

  smileyEn?: string[];
  smileyBn?: string[];

  welcomeEn?: string[];
  welcomeBn?: string[];

  comeEn?: string;
  comeBn?: string;

  unknownPolicy: number;
  unknownResponse1En?: string;
  unknownResponse1Bn?: string;
  unknownResponse2En?: string;
  unknownResponse2Bn?: string;
}