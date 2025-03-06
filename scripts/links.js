const baseURL = "https://jtw011.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.lessons);
    } catch (error) {
        console.error("Error loading the links:", error);
    }
}

function displayLinks(weeks) {
    const activitiesSection = document.getElementById("activities");
    activitiesSection.innerHTML = "";

    const list = document.createElement("ul");

    weeks.forEach(week => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>Lesson ${week.lesson}:</strong> `;
        
        week.links.forEach(link => {
            const anchor = document.createElement("a");
            anchor.href = `${baseURL}${link.url}`;
            anchor.textContent = link.title;
            anchor.target = "_blank";
            listItem.appendChild(anchor);
            listItem.innerHTML += " | "; 
        });

        list.appendChild(listItem);
    });

    activitiesSection.appendChild(list);
}

getLinks();
