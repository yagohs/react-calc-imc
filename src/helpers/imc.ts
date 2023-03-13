export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[]
    yourImc?: number;
}

export const levels: Level[] = [
    { title: 'Magreza', color: '#96a3ab', icon: 'down', imc:[0, 18.5]},
    { title: 'Normal', color: '#0ead69', icon: 'up', imc:[18.5, 24.9]},
    { title: 'Sobrepeso', color: '#e2b039', icon: 'down', imc:[24.9, 30]},
    { title: 'Obsesidade', color: '#c3423f', icon: 'down', imc:[30, 99]}
];

export const calculateIMC = (height: number, weight: number) => {
    const imc = weight / (height * height);

    for (let i in levels) {
        if(imc > levels[i].imc[0] && imc <= levels[i].imc[1]) {
            let levelCopy: Level = {...levels[i]};

            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }
    
    return null;

}