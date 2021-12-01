import React, {useState} from 'react'
import Categories from '../Categories'
import items from '../data'
import FoodsMenu from '../Menu'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function Foods() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };


    return (
        <main>
            <section className='menu section'>
                <div className='title'>
                    <h2>our menu</h2>
                    <div className='underline'></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <FoodsMenu items={menuItems} />
            </section>
        </main>
    );
}
export default Foods