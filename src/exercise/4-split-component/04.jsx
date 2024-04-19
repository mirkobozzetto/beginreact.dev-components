import clsx from 'clsx';
import styles from '../../styles/Exercise2.module.css';

const shoppingItems = [
  { name: 'Carotte', quantity: 12 },
  { name: 'Patate', quantity: 11 },
  { name: 'Haricot', quantity: 54 },
];

const recipeItems = [
  { name: 'Tarte à la carotte', date: '11.06.22' },
  { name: 'Purée de patate', date: '15.08.23' },
  { name: 'Sauce au haricot', date: '22.09.24' },
];

const Header = () => {
  return (
    <header>
      <h1>Mes recettes de cuisine !</h1>
      <p>Par BeginReact.dev</p>
      <hr />
    </header>
  );
};

const Badge = ({ children }) => {
  return <p className={styles.badge}>{children}</p>;
};

const ShoppingList = () => {
  return (
    <div className={clsx(styles['flex-col'])}>
      <h2>Liste de course</h2>
      <div className={styles['shopping-list-items']}>
        {shoppingItems.map((item, index) => (
          <div
            key={index}
            className={clsx(styles['shopping-item'], styles['bg-paper'])}
          >
            <div className={styles.section}>
              <p>{item.name} !</p>
              <Badge>{item.quantity}</Badge>
            </div>
            <div className={styles.section}>
              <input type="checkbox" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Recipes = () => {
  return (
    <>
      <div className={clsx(styles['flex-col'])}>
        <h2>Liste de recettes à faire</h2>
        <ul className={clsx(styles['flex-col'], styles['gap-2'])}>
          {recipeItems.map((item, index) => (
            <li key={index} className={clsx(styles['flex'], styles['gap-4'])}>
              <span>{item.name}</span>
              <Badge>{item.date}</Badge>
            </li>
          ))}
        </ul>
      </div>
      <hr />
    </>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Create by BeginReact.dev</p>
    </footer>
  );
};

const App = () => {
  return (
    <div className={clsx(styles['container'])}>
      <Header />
      <ShoppingList />
      <Recipes />
      <Footer />
    </div>
  );
};

export default App;
