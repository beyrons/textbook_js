let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => arr.sort((a,b) => a.localeCompare(b))


console.log( copySorted(arr) ) // CSS, HTML, JavaScript )
