let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
console.log( styles );

styles[Math.floor((styles.length - 1) / 2)] = "Классика";
styles.splice(0,1)
console.log( styles );

styles.unshift("Рэп", "Регги");
console.log( styles );
