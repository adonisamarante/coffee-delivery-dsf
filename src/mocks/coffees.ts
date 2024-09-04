import LatteImg from '../assets/coffeeTypes/latte.png'
import CubanoImg from '../assets/coffeeTypes/cubano.png'
import CafeArabeImg from '../assets/coffeeTypes/arabe.png'
import ExpressoImg from '../assets/coffeeTypes/expresso.png'
import HavaianoImg from '../assets/coffeeTypes/havaiano.png'
import CapuccinoImg from '../assets/coffeeTypes/capuccino.png'
import MacchiatoImg from '../assets/coffeeTypes/macchiato.png'
import MocaccinoImg from '../assets/coffeeTypes/mocaccino.png'
import CafeIrlandesImg from '../assets/coffeeTypes/irlandes.png'
import ExpressoGeladoImg from '../assets/coffeeTypes/cafe-gelado.png'
import ExpressoAmericanoImg from '../assets/coffeeTypes/americano.png'
import CafeComLeiteImg from '../assets/coffeeTypes/cafe-com-leite.png'
import ExpressoCremosoImg from '../assets/coffeeTypes/expresso-cremoso.png'
import ChocolateQuenteImg from '../assets/coffeeTypes/chocolate-quente.png'

const coffees = [
  {
    id: '1',
    image: ExpressoImg,
    tags: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    quantity: 0,
    price: '9.90',
  },
  {
    id: '2',
    image: ExpressoAmericanoImg,
    tags: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    quantity: 0,
    price: '9.90',
  },
  {
    id: '3',
    image: ExpressoCremosoImg,
    tags: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    quantity: 0,
    price: '9.90',
  },
  {
    id: '4',
    image: ExpressoGeladoImg,
    tags: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    quantity: 0,
    price: '9.90',
  },
  {
    id: '5',
    image: CafeComLeiteImg,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    quantity: 0,
    price: '9.90',
  },
  {
    id: '6',
    image: LatteImg,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    quantity: 0,
    price: '9.90',
  },
  {
    id: '7',
    image: CapuccinoImg,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    quantity: 0,
    price: '9.90',
  },
  {
    id: '8',
    image: MacchiatoImg,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    quantity: 0,
    price: '9.90',
  },
  {
    id: '9',
    image: MocaccinoImg,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    quantity: 0,
    price: '9.90',
  },
  {
    id: '10',
    image: ChocolateQuenteImg,
    tags: ['Especial', 'Com Leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    quantity: 0,
    price: '9.90',
  },
  {
    id: '11',
    image: CubanoImg,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    quantity: 0,
    price: '9.90',
  },
  {
    id: '12',
    image: HavaianoImg,
    tags: ['Especial'],
    name: 'Cubano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    quantity: 0,
    price: '9.90',
  },
  {
    id: '13',
    image: CafeArabeImg,
    tags: ['Especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    quantity: 0,
    price: '9.90',
  },
  {
    id: '14',
    image: CafeIrlandesImg,
    tags: ['Especial', 'Alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    quantity: 0,
    price: '9.90',
  },
]

export default coffees
