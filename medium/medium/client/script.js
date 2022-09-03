function getTopcoderCompetitionDetail(category, subType) {
    const cat = document.querySelectorAll(`[data-category="${category}"]`);

    if (cat.length == 0) return;
    
    const sub = cat[0].querySelectorAll(`[data-subType="${subType}"]`);
    const result = [];
    if (sub.length > 0) {
        for(let i = 0; i < sub.length; i++) {
            result.push({
                text: sub[i].innerText,
                uri: sub[i].getElementsByTagName('a')[0].href
            })
        }
        return result;
    } else {
        return
    }
    
}

