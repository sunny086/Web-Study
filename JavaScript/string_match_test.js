function canConstruct(target, strings) {
    let result = [];

    function backtrack(currIndex, visited, combination) {
        if (currIndex === target.length) {
            result.push([...combination]);
            return;
        }

        for (let i = 0; i < strings.length; i++) {
            if (visited[i] || strings[i].length + currIndex > target.length) {
                continue;
            }

            if (target.substring(currIndex, currIndex + strings[i].length) === strings[i]) {
                visited[i] = true;
                combination.push(i);
                backtrack(currIndex + strings[i].length, visited, combination);
                visited[i] = false;
                combination.pop();
            }
        }
    }

    let visited = new Array(strings.length).fill(false);
    let combination = [];

    backtrack(0, visited, combination);
    return result;
}

// 已知字符串
let knownString = "aabbbccc";

// 乱序集合
let stringSet = ['a', 'b', 'c', 'aa', 'aab', 'aabbb', 'cc', 'cc', 'ab', 'abbb', 'abbbc', 'aab', 'bccc', 'bc'];

let possibleCombinations = canConstruct(knownString, stringSet);
let sortedCombinations = possibleCombinations.sort((a, b) => a.join('').localeCompare(b.join('')));

// 输出排序后的索引和对应数据
for (let i = 0; i < sortedCombinations.length; i++) {
    console.log(`第 ${i + 1} 组索引：${sortedCombinations[i].join(' ')}`);

    let output = sortedCombinations[i].map(index => stringSet[index]).join('\n');
    console.log(output);
}
