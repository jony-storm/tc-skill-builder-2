function getTopcoderCompetitionDetail(category, subType) {
    if (category === "Development" && subType === "Code challenge") {
        return {
            text: "Sample code competition",
            uri: "https://www.topcoder.com/challenges/030bdfc4-37d1-4b71-80a4-cbc6173a7a06"
        }
    }
     
}

console.log(getTopcoderCompetitionDetail("Development", "Code challenge"));
console.log(getTopcoderCompetitionDetail("Design", "Code challenge"));
