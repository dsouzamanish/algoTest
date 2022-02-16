'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
var currentLine = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function checkStringInclusion(ransomNote: number[], magzine: number[]): boolean {
    let map = new Map();
    for (let i = 0; i < magzine.length; i++) {
        if(map.has(magzine[i])){
           let count = map.get(magzine[i]);
           map.set(magzine[i], ++count);
        }else {
            map.set(magzine[i], 1);
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if(!map.get(ransomNote[i])){
         return false
        }
        let count = map.get(ransomNote[i]);
        if(count === 0){
            return false;
        }
        count--;
        map.set(ransomNote[i], count);
    }
    return true;
}

function getInputFromStdIn(inputLength: number) : number[] {
    let input: number[] = [];
    for (let i = 0; i < inputLength; i++) {
        let ip = parseInt(readLine().trim(), 10);
        input.push(ip);
    }
    return input;
}
function main() {
   try{
       const ransomNoteLength: number = parseInt(readLine().trim(), 10);
       const ransomNote: number[] = getInputFromStdIn(ransomNoteLength);
       const magazineLength: number = parseInt(readLine().trim(), 10);
       const magazine: number[] = getInputFromStdIn(magazineLength);


       const result: boolean = checkStringInclusion(ransomNote, magazine);
       process.stdout.write(result + '\n');
   }catch (e){
       process.stderr.write("Insufficient/invalid input");
       process.stdout.write(false + '\n');
   }

}
