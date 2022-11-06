import {useEffect, useState} from 'preact/hooks'
import {nanoid} from 'nanoid'

export default function PageContentMenu() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(function () {
        const pageHeaders = [...document.querySelectorAll(".mdx-content :is(h2, h3)")];
        const formattedHeaders = [];
        let currentSection = null;
        for (const header of pageHeaders) {
            const navigateItem = document.createElement("div");
            navigateItem.id = nanoid();
            navigateItem.classList.add("navigate-item");
            header.parentElement.insertBefore(navigateItem, header);
            // if this is a new section, then we need to push the current section and create a new one
            if (header.tagName === "H2") {
                if (currentSection !== null)
                    formattedHeaders.push({
                        value: currentSection.value,
                        subsections: currentSection.sections,
                        id: currentSection.id
                    });
                currentSection = {
                    value: header.innerText,
                    sections: [],
                    id: navigateItem.id
                };
                continue;
            }
            // if this is a subsection, then we need to append it to the parent section
            currentSection.sections.push({
                value: header.innerText,
                id: navigateItem.id
            });
        }
        if (currentSection !== null) 
            formattedHeaders.push({
                value: currentSection.value,
                subsections: currentSection.sections,
                id: currentSection.id
            });
        console.log(formattedHeaders);
        setMenuItems(formattedHeaders);
    }, [])

    return (
        <div class="menu-items-container">
            {menuItems.map((menuItem)=>{
                return (
                    <div class="section">
                        <div className="section-name">
                            <a class="relative left-1/2" href={"#"+menuItem.id}>{menuItem.value}</a>
                        </div>
                        {menuItem.subsections.map((subsection)=>{
                            return (
                                <div class="sub-section flex">
                                    <img class="relative left-1/2 mr-4" src="https://img.icons8.com/color/20/000000/down-right.png"/>
                                    <a class="relative left-1/2" href={"#"+subsection.id}>{subsection.value}</a>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}