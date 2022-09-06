import {useEffect, useState} from 'preact/hooks'
import {nanoid} from 'nanoid'

export default function PageContentMenu() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(function () {
        const pageHeaders = [...document.querySelectorAll(".mdx-content :is(h2, h3)")];
        const formattedHeaders = [];
        for (const header of pageHeaders) {
            const navigateItem = document.createElement("div");
            navigateItem.id = nanoid();
            navigateItem.classList.add("navigate-item");
            header.parentElement.insertBefore(navigateItem, header);
            formattedHeaders.push({
                type: header.nodeName,
                value: header.innerText,
                id: navigateItem.id
            });
        }
        setMenuItems(formattedHeaders);
    }, [])

    return (
        <div class="menu-items-container">
            {menuItems.map((menuItem)=>{
                if (menuItem.type === "H2") {
                    return (
                        <div class="section">
                            <a class="relative left-1/2" href={"#"+menuItem.id}>{menuItem.value}</a>
                        </div>
                    )
                }
                return (
                    // https://img.icons8.com/color/48/000000/down-right.png
                    <div class="sub-section flex">
                        <img class="relative left-1/2 mr-4" src="https://img.icons8.com/color/20/000000/down-right.png"/>
                        <a class="relative left-1/2" href={"#"+menuItem.id}>{menuItem.value}</a>
                    </div>
                )
            })}
        </div>
    )
}