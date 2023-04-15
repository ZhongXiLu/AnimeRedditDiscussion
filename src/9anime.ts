
const getLinkToRedditDiscussion = (title: string, episodeNr: number): HTMLElement => {
    const link = document.createElement("a");

    link.href = `https://www.reddit.com/r/anime/search/?q=${title}%20episode%20${episodeNr}%20discussion&sort=relevance`;
    link.textContent = title;
    link.target = "_blank";

    return link;
}

const addLinkToRedditDiscussion = () => {
    const titleElement = document.querySelector(".title") as HTMLElement;
    const episodeNrElement = document.querySelector(".current-episode-name") as HTMLElement;

    if (titleElement && episodeNrElement) {
        const title = titleElement.textContent;
        const episodeNr = Number(episodeNrElement.textContent);

        if (title && episodeNr) {
            titleElement.innerHTML = "";
            const redditLink = getLinkToRedditDiscussion(title, episodeNr);
            titleElement.appendChild(redditLink);
        }
    }
}

setTimeout(addLinkToRedditDiscussion, 1000);
