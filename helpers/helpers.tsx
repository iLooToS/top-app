import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProducstIcon from './icons/products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'bookds', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProducstIcon />, id: TopLevelCategory.Products },
];

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');