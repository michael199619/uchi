export function generateAlphabets() {
    const alphabets = [];
    const start = 'А'.charCodeAt(0);
    const last  = 'Я'.charCodeAt(0);
    for (var i = start; i <= last; ++i) {
        alphabets.push(String.fromCharCode(i));
    }

    return alphabets;
}