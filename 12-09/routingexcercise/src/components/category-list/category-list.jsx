import CategoryCard from '../category-card';
import styles from './index.module.scss';

export default function CategoryList ({data}) {

    return (
        <div className={styles.CategoryList}>
           {data?.map((item, index) => <CategoryCard key={index} data={item}/>)} 
        </div>
    )
}