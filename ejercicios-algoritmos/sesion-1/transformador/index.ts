type Input = {
  nombres: string[];
  edades: number[];
};

type Output = {
  id: number;
  nombre: string;
  edad: number;
};

export default function transformador(input: Input): Output[] {
  // const { nombres, edades } = input;
  // const output: Output[] = [];

  // for (let i = 0; i < nombres.length; i++) {
  //   const newItem = {
  //     id: i + 1,
  //     nombre: nombres[i],
  //     edad: edades[i],
  //   };
  //   output.push(newItem);
  // }

  // return output;

  return input.nombres.map((nombre, index) => ({
    id: index + 1,
    nombre,
    edad: input.edades[index],
  }));
}
