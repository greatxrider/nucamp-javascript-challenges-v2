const firstNamesArray = ['Violet', 'Charlie', 'Veruca', 'Mike', 'Augustus'];
const lastNamesArray = ['Beauregarde', 'Bucket', 'Salt', 'Teavee', 'Gloop'];

//Challenge 1

for (let i = 0; i < firstNamesArray.length; i++) {  
    console.log(firstNamesArray[i] += ' ' + lastNamesArray[i]);
}

//Challenge 2

firstNamesArray.reverse();
lastNamesArray.reverse();

for (let i = 0; i < firstNamesArray.length; i++) {  
    console.log(firstNamesArray[i] += ' ' + lastNamesArray[i]);
}

