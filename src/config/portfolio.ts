import advent from "assets/images/photos/portfolio_advent.jpg";
import birthdays from "assets/images/photos/portfolio_birthdays.jpg";
import photography from "assets/images/photos/portfolio_photography.jpg";
import shelter from "assets/images/photos/portfolio_shelter.jpg";
import minesweeper from "assets/images/photos/portfolio_minesweeper.jpg";
import rick from "assets/images/photos/portfolio_rick.jpg";

export interface PortfolioData {
  id: number;
  imageUrl: string;
  descriptionEn: string;
  descriptionRu: string;
  externalLink: string;
  stack: string;
}

export const portfolioData: PortfolioData[] = [
  {
    id: 1,
    imageUrl: advent,
    descriptionEn: "New Year's Advent-calendar",
    descriptionRu: "Новогодний Адвент-календарь",
    externalLink: "https://yulialugovaya.github.io/advent-calendar/",
    stack: "React/Redux, Typescript, MUI, Slick",
  },
  {
    id: 2,
    imageUrl: birthdays,
    descriptionEn: "Birthday calendar",
    descriptionRu: "Календарь Дней рождения",
    externalLink: "https://yulialugovaya.github.io/birthday-calendar/",
    stack: "React/Redux, Typescript, MUI, Slick",
  },
  {
    id: 3,
    imageUrl: photography,
    descriptionEn: "Photographer's website",
    descriptionRu: "Сайт для фотографа",
    externalLink: "https://yulialugovaya.github.io/photography/",
    stack: "HTML, CSS, JS, Bootstrap",
  },
  {
    id: 4,
    imageUrl: shelter,
    descriptionEn: "Animal shelter template website",
    descriptionRu: "Сайт-шаблон для приюта животных вапарспаотпотапрв",
    externalLink: "https://yulialugovaya.github.io/shelter/",
    stack: "HTML, CSS, JS, PixelPerfect",
  },
  {
    id: 5,
    imageUrl: minesweeper,
    descriptionEn: "A clone of the game Minesweeper",
    descriptionRu: "Клон игры Сапер",
    externalLink: "https://yulialugovaya.github.io/minesweeper/",
    stack: "CSS, JS",
  },
  {
    id: 6,
    imageUrl: rick,
    descriptionEn: "Rick and Morty: Guess the characters",
    descriptionRu: "Рик и Морти: угадайте персонажей",
    externalLink: "https://yulialugovaya.github.io/rick-and-morti-guess",
    stack: "React/Redux, Rest API, Materialize",
  },
];
